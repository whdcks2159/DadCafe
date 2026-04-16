import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
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
  deleteField,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from './client';
import type { UserProfile, Post, Comment, DiaryEntry, Baby, WeeklyLog, MonthlyLog, MilestoneRecord } from '@/types';

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

// ── Checklist Situation History ─────────────────────────────

export interface ChecklistCompletion {
  slug: string;
  completedAt: Timestamp;
  completionCount: number;
}

export async function recordChecklistCompletion(uid: string, slug: string): Promise<void> {
  const d = requireDb();
  const ref = doc(d, 'users', uid, 'checklistHistory', slug);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, {
      completedAt: serverTimestamp(),
      completionCount: increment(1),
    });
  } else {
    await setDoc(ref, {
      slug,
      completedAt: serverTimestamp(),
      completionCount: 1,
    });
  }
}

export async function getChecklistHistory(uid: string): Promise<ChecklistCompletion[]> {
  const d = requireDb();
  const q = query(
    collection(d, 'users', uid, 'checklistHistory'),
    orderBy('completedAt', 'desc'),
    limit(50),
  );
  const snap = await getDocs(q);
  return snap.docs.map((s) => s.data() as ChecklistCompletion);
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
  const posts = snap.docs.map((s: QueryDocumentSnapshot) => ({
    id: s.id,
    ...s.data(),
    createdAt: (s.data().createdAt as Timestamp)?.toDate() ?? new Date(),
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
  return snap.docs.map((s: QueryDocumentSnapshot) => ({
    id: s.id,
    ...s.data(),
    createdAt: (s.data().createdAt as Timestamp)?.toDate() ?? new Date(),
  })) as Comment[];
}

// ── Diary ──────────────────────────────────────────────────────

function toDiaryEntry(id: string, data: Record<string, unknown>): DiaryEntry {
  return {
    ...data,
    id,
    createdAt: (data.createdAt as Timestamp)?.toDate() ?? new Date(),
    updatedAt: (data.updatedAt as Timestamp)?.toDate() ?? new Date(),
  } as DiaryEntry;
}

export async function createDiaryEntry(
  uid: string,
  entry: Omit<DiaryEntry, 'id' | 'uid' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const d = requireDb();
  const ref = await addDoc(collection(d, 'users', uid, 'diary'), {
    ...entry,
    uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getDiaryEntries(uid: string, pageSize = 20): Promise<DiaryEntry[]> {
  const d = requireDb();
  const q = query(
    collection(d, 'users', uid, 'diary'),
    orderBy('date', 'desc'),
    limit(pageSize)
  );
  const snap = await getDocs(q);
  return snap.docs.map((s: QueryDocumentSnapshot) => toDiaryEntry(s.id, s.data() as Record<string, unknown>));
}

export async function getDiaryEntry(uid: string, entryId: string): Promise<DiaryEntry | null> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'users', uid, 'diary', entryId));
  if (!snap.exists()) return null;
  return toDiaryEntry(snap.id, snap.data() as Record<string, unknown>);
}

export async function updateDiaryEntry(
  uid: string,
  entryId: string,
  data: Partial<Omit<DiaryEntry, 'id' | 'uid' | 'createdAt'>>
): Promise<void> {
  const d = requireDb();
  await updateDoc(doc(d, 'users', uid, 'diary', entryId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDiaryEntry(uid: string, entryId: string): Promise<void> {
  const d = requireDb();
  await deleteDoc(doc(d, 'users', uid, 'diary', entryId));
}

// ── Babies ────────────────────────────────────────────────────

export async function getBabies(uid: string): Promise<Baby[]> {
  const d = requireDb();
  const q = query(collection(d, 'users', uid, 'babies'), orderBy('createdAt', 'asc'));
  const snap = await getDocs(q);
  return snap.docs.map((s: QueryDocumentSnapshot) => ({
    id: s.id,
    ...s.data(),
    createdAt: (s.data().createdAt as Timestamp)?.toDate() ?? new Date(),
    updatedAt: (s.data().updatedAt as Timestamp)?.toDate() ?? new Date(),
  })) as Baby[];
}

export async function createBaby(
  uid: string,
  data: Omit<Baby, 'id' | 'uid' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const d = requireDb();
  const ref = await addDoc(collection(d, 'users', uid, 'babies'), {
    ...data,
    uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateBaby(
  uid: string,
  babyId: string,
  data: Partial<Omit<Baby, 'id' | 'uid' | 'createdAt'>>
): Promise<void> {
  const d = requireDb();
  await updateDoc(doc(d, 'users', uid, 'babies', babyId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteBaby(uid: string, babyId: string): Promise<void> {
  const d = requireDb();
  await deleteDoc(doc(d, 'users', uid, 'babies', babyId));
}

export async function getActiveBabyId(uid: string): Promise<string | null> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'users', uid, 'settings', 'baby'));
  if (!snap.exists()) return null;
  return (snap.data().activeBabyId as string) ?? null;
}

export async function setActiveBabyId(uid: string, babyId: string): Promise<void> {
  const d = requireDb();
  await setDoc(
    doc(d, 'users', uid, 'settings', 'baby'),
    { activeBabyId: babyId, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

// ── FCM Token ─────────────────────────────────────────────────

export async function saveFcmToken(uid: string, token: string): Promise<void> {
  const d = requireDb();
  await setDoc(
    doc(d, 'users', uid),
    { fcmToken: token, fcmUpdatedAt: serverTimestamp() },
    { merge: true }
  );
}

export async function deleteFcmToken(uid: string): Promise<void> {
  const d = requireDb();
  await updateDoc(doc(d, 'users', uid), { fcmToken: deleteField() });
}

export async function hasFcmToken(uid: string): Promise<boolean> {
  const d = requireDb();
  const snap = await getDoc(doc(d, 'users', uid));
  return !!snap.data()?.fcmToken;
}

// ── Growth Calendar ────────────────────────────────────────────

function toWeeklyLog(weekNumber: number, data: Record<string, unknown>): WeeklyLog {
  return {
    ...data,
    weekNumber,
    createdAt: (data.createdAt as Timestamp)?.toDate() ?? new Date(),
    updatedAt: (data.updatedAt as Timestamp)?.toDate() ?? new Date(),
  } as WeeklyLog;
}

function toMonthlyLog(monthNumber: number, data: Record<string, unknown>): MonthlyLog {
  return {
    ...data,
    monthNumber,
    createdAt: (data.createdAt as Timestamp)?.toDate() ?? new Date(),
    updatedAt: (data.updatedAt as Timestamp)?.toDate() ?? new Date(),
  } as MonthlyLog;
}

export async function upsertWeeklyLog(
  uid: string,
  babyId: string,
  weekNumber: number,
  data: Partial<Omit<WeeklyLog, 'weekNumber' | 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const d = requireDb();
  await setDoc(
    doc(d, 'users', uid, 'babies', babyId, 'weeklyLogs', String(weekNumber)),
    { ...data, weekNumber, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

export async function getWeeklyLog(
  uid: string,
  babyId: string,
  weekNumber: number
): Promise<WeeklyLog | null> {
  const d = requireDb();
  const snap = await getDoc(
    doc(d, 'users', uid, 'babies', babyId, 'weeklyLogs', String(weekNumber))
  );
  if (!snap.exists()) return null;
  return toWeeklyLog(weekNumber, snap.data() as Record<string, unknown>);
}

export async function getWeeklyLogs(uid: string, babyId: string): Promise<WeeklyLog[]> {
  const d = requireDb();
  const snap = await getDocs(
    collection(d, 'users', uid, 'babies', babyId, 'weeklyLogs')
  );
  return snap.docs.map((s: QueryDocumentSnapshot) =>
    toWeeklyLog(
      Number(s.id),
      s.data() as Record<string, unknown>
    )
  );
}

export async function upsertMonthlyLog(
  uid: string,
  babyId: string,
  monthNumber: number,
  data: Partial<Omit<MonthlyLog, 'monthNumber' | 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const d = requireDb();
  await setDoc(
    doc(d, 'users', uid, 'babies', babyId, 'monthlyLogs', String(monthNumber)),
    { ...data, monthNumber, updatedAt: serverTimestamp() },
    { merge: true }
  );
}

export async function getMonthlyLog(
  uid: string,
  babyId: string,
  monthNumber: number
): Promise<MonthlyLog | null> {
  const d = requireDb();
  const snap = await getDoc(
    doc(d, 'users', uid, 'babies', babyId, 'monthlyLogs', String(monthNumber))
  );
  if (!snap.exists()) return null;
  return toMonthlyLog(monthNumber, snap.data() as Record<string, unknown>);
}

export async function getMonthlyLogs(uid: string, babyId: string): Promise<MonthlyLog[]> {
  const d = requireDb();
  const snap = await getDocs(
    collection(d, 'users', uid, 'babies', babyId, 'monthlyLogs')
  );
  return snap.docs.map((s: QueryDocumentSnapshot) =>
    toMonthlyLog(
      Number(s.id),
      s.data() as Record<string, unknown>
    )
  );
}

export async function addMilestoneRecord(
  uid: string,
  babyId: string,
  data: Omit<MilestoneRecord, 'id' | 'createdAt'>
): Promise<string> {
  const d = requireDb();
  const ref = await addDoc(
    collection(d, 'users', uid, 'babies', babyId, 'milestones'),
    { ...data, occurredAt: data.occurredAt, createdAt: serverTimestamp() }
  );
  return ref.id;
}

export async function getMilestoneRecords(
  uid: string,
  babyId: string
): Promise<MilestoneRecord[]> {
  const d = requireDb();
  const q = query(
    collection(d, 'users', uid, 'babies', babyId, 'milestones'),
    orderBy('occurredAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((s: QueryDocumentSnapshot) => ({
    id: s.id,
    ...s.data(),
    occurredAt: (s.data().occurredAt as Timestamp)?.toDate() ?? new Date(),
    createdAt: (s.data().createdAt as Timestamp)?.toDate() ?? new Date(),
  })) as MilestoneRecord[];
}
