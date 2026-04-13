'use client';

import { getMessaging, getToken } from 'firebase/messaging';

// FCM 토큰 요청 (알림 권한 포함)
// vapidKey: NEXT_PUBLIC_FIREBASE_VAPID_KEY
export async function requestFcmToken(vapidKey: string): Promise<string | null> {
  if (typeof window === 'undefined') return null;
  if (!('Notification' in window)) return null;

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') return null;

  try {
    // 기존 SW 등록 재사용 (firebase-messaging-sw.js 별도 불필요)
    const swReg = await navigator.serviceWorker.ready;
    const { initializeApp, getApps } = await import('firebase/app');

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    const token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: swReg });
    return token || null;
  } catch (err) {
    console.warn('FCM token error:', err);
    return null;
  }
}
