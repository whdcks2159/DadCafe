import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  increment,
  serverTimestamp,
  Timestamp,
  startAfter,
  type DocumentSnapshot,
} from 'firebase/firestore';
import { db } from './client';
import type { UserProfile, Post, Comment } from '@/types';

function requireDb() {
  if (!db) throw new Error('Firebase not initialized');
  return db;
}

// ── Users ────────────────────────────────────────────────────

export async function upsertUserProfile(profile: Partial<UserProfile> & { uid: string }) {
  const d = requireDb();
  await setDoc(doc(d, 'users', profile.uid), { ...profile, updatedAt: serverTimestamp() }, { merge: true });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'users', uid));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    ...data,
    joinedAt: (data.joinedAt as Timestamp)?.toDate() ?? new Date(),
  } as UserProfile;
}

// ── Checklist ────────────────────────────────────────────────

export async function getCompletedItems(uid: string): Promise<string[]> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'checklists', uid));
  if (!snap.exists()) return [];
  return snap.data().completedItemIds ?? [];
}

export async function saveCompletedItems(uid: string, completedItemIds: string[]) {
  const d = requireDb();
  await setDoc(doc(d, 'checklists', uid), {
    completedItemIds,
    updatedAt: serverTimestamp(),
  });
}

// ── Posts ────────────────────────────────────────────────────

export async function createPost(post: Omit<Post, 'id' | 'createdAt' | 'likeCount' | 'commentCount'>) {
  const d = requireDb();
  const ref = await addDoc(collection(d, 'posts'), {
    ...post,
    likeCount: 0,
    commentCount: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getPosts(pageSize = 10, lastDoc?: DocumentSnapshot) {
  const d = requireDb();
  let q = query(collection(d, 'posts'), orderBy('createdAt', 'desc'), limit(pageSize));
  if (lastDoc) {
    q = query(collection(d, 'posts'), orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(pageSize));
  }
  const snap = await getDocs(q);
  const posts = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: (doc.data().createdAt as Timestamp)?.toDate() ?? new Date(),
  })) as Post[];
  return { posts, lastDoc: snap.docs[snap.docs.length - 1] };
}

export async function getPost(postId: string): Promise<Post | null> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'posts', postId));
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    id: snap.id,
    ...data,
    createdAt: (data.createdAt as Timestamp)?.toDate() ?? new Date(),
  } as Post;
}

// ── Likes ─────────────────────────────────────────────────────

export async function toggleLike(uid: string, postId: string): Promise<boolean> {
  const d = requireDb();
  const likeRef = doc(d, 'likes', `${uid}_${postId}`);
  const snap = await getDoc(likeRef);
  if (snap.exists() && !snap.data().deleted) {
    await Promise.all([
      setDoc(likeRef, { deleted: true }, { merge: true }),
      updateDoc(doc(d, 'posts', postId), { likeCount: increment(-1) }),
    ]);
    return false;
  } else {
    await Promise.all([
      setDoc(likeRef, { uid, postId, deleted: false, createdAt: serverTimestamp() }),
      updateDoc(doc(d, 'posts', postId), { likeCount: increment(1) }),
    ]);
    return true;
  }
}

export async function isLiked(uid: string, postId: string): Promise<boolean> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'likes', `${uid}_${postId}`));
  return snap.exists() && !snap.data().deleted;
}

// ── Comments ──────────────────────────────────────────────────

export async function addComment(comment: Omit<Comment, 'id' | 'createdAt'>) {
  const d = requireDb();
  const ref = await addDoc(collection(d, 'comments'), {
    ...comment,
    createdAt: serverTimestamp(),
  });
  await updateDoc(doc(d, 'posts', comment.postId), { commentCount: increment(1) });
  return ref.id;
}

export async function getComments(postId: string): Promise<Comment[]> {
  const d = requireDb();
  const q = query(
    collection(d, 'comments'),
    where('postId', '==', postId),
    orderBy('createdAt', 'asc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: (doc.data().createdAt as Timestamp)?.toDate() ?? new Date(),
  })) as Comment[];
}
