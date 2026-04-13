import { ref, uploadBytesResumable, getDownloadURL, deleteObject, type UploadTaskSnapshot } from 'firebase/storage';
import { storage } from './client';
import type { DiaryMedia } from '@/types';

function requireStorage() {
  if (!storage) throw new Error('Firebase Storage not initialized');
  return storage;
}

export async function uploadDiaryMedia(
  uid: string,
  file: File,
  onProgress?: (pct: number) => void
): Promise<DiaryMedia> {
  const st = requireStorage();
  const ext = file.name.split('.').pop() ?? 'bin';
  const timestamp = Date.now();
  const path = `diary/${uid}/${timestamp}.${ext}`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.(Math.round(pct));
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        const type = file.type.startsWith('video/') ? 'video' : 'photo';
        resolve({ type, url, path });
      }
    );
  });
}

export async function deleteDiaryMedia(path: string): Promise<void> {
  const st = requireStorage();
  await deleteObject(ref(st, path));
}

export async function uploadBabyPhoto(
  uid: string,
  babyId: string,
  file: File,
  onProgress?: (pct: number) => void
): Promise<{ url: string; path: string }> {
  const st = requireStorage();
  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `babies/${uid}/${babyId}.${ext}`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.(Math.round(pct));
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

export async function deleteBabyPhoto(path: string): Promise<void> {
  const st = requireStorage();
  await deleteObject(ref(st, path));
}

export async function uploadGrowthPhoto(
  uid: string,
  babyId: string,
  period: number,
  file: File,
  onProgress?: (pct: number) => void
): Promise<{ url: string; path: string }> {
  const st = requireStorage();
  const ext = file.name.split('.').pop() ?? 'jpg';
  const timestamp = Date.now();
  const path = `growth/${uid}/${babyId}/${period}/${timestamp}.${ext}`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.(Math.round(pct));
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

export async function deleteGrowthPhoto(path: string): Promise<void> {
  const st = requireStorage();
  await deleteObject(ref(st, path));
}
