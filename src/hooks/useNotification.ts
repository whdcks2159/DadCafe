'use client';

import { useState, useEffect, useCallback } from 'react';
import { requestFcmToken } from '@/lib/firebase/fcm';
import { saveFcmToken, deleteFcmToken, hasFcmToken } from '@/lib/firebase/firestore';

export function useNotification(uid: string | undefined) {
  // null = 로딩 중
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [toggling, setToggling] = useState(false);

  useEffect(() => {
    if (!uid) { setEnabled(false); return; }
    hasFcmToken(uid).then(setEnabled).catch(() => setEnabled(false));
  }, [uid]);

  const toggle = useCallback(async () => {
    if (!uid || toggling || enabled === null) return;
    setToggling(true);
    try {
      if (enabled) {
        await deleteFcmToken(uid);
        setEnabled(false);
      } else {
        const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY ?? '';
        const token = await requestFcmToken(vapidKey);
        if (token) {
          await saveFcmToken(uid, token);
          setEnabled(true);
        } else {
          // 권한 거부 or 지원 안 함
          alert('브라우저 알림 권한이 필요해요. 주소창 옆 자물쇠 아이콘에서 알림을 허용해주세요.');
        }
      }
    } catch {
      // 무시
    } finally {
      setToggling(false);
    }
  }, [uid, enabled, toggling]);

  return { enabled, toggling, toggle };
}
