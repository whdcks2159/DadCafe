import { ref, uploadBytes, uploadBytesResumable, getDownloadURL, deleteObject, type UploadTaskSnapshot } from 'firebase/storage';
import { storage } from './client';
import type { DiaryMedia } from '@/types';

function requireStorage() {
  if (!storage) throw new Error('Firebase Storage not initialized');
  return storage;
}

/** 업로드 전 이미지 압축 */
async function compressImage(file: File, maxPx = 1200, quality = 0.82): Promise<File> {
  if (!file.type.startsWith('image/')) return file;
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxPx || height > maxPx) {
        if (width > height) { height = Math.round((height * maxPx) / width); width = maxPx; }
        else { width = Math.round((width * maxPx) / height); height = maxPx; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => resolve(blob ? new File([blob], file.name, { type: 'image/jpeg' }) : file),
        'image/jpeg',
        quality
      );
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
    img.src = url;
  });
}

export async function uploadDiaryMedia(
  uid: string,
  file: File,
  onProgress?: (pct: number) => void
): Promise<DiaryMedia> {
  const st = requireStorage();
  const compressed = await compressImage(file);
  const ext = compressed.type === 'image/jpeg' ? 'jpg' : (file.name.split('.').pop() ?? 'bin');
  const timestamp = Date.now();
  const path = `diary/${uid}/${timestamp}.${ext}`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, compressed);
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
  onProgress?: (pct: number) => void,
): Promise<{ url: string; path: string }> {
  const st = requireStorage();
  // 프로필 사진: 400px / 0.75 — 화면 표시 크기(56px)에 충분, 업로드 크기 최소화
  const compressed = await compressImage(file, 400, 0.75);
  const path = `babies/${uid}/${babyId}.jpg`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, compressed);
    task.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        onProgress?.(pct);
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
  const compressed = await compressImage(file);
  const timestamp = Date.now();
  const path = `growth/${uid}/${babyId}/${period}/${timestamp}.jpg`;
  const storageRef = ref(st, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, compressed);
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
