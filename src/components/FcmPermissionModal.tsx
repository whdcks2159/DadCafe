'use client';

import { useState } from 'react';
import { Bell, BellOff, X } from 'lucide-react';
import { requestFcmToken } from '@/lib/firebase/fcm';
import { saveFcmToken } from '@/lib/firebase/firestore';

interface FcmPermissionModalProps {
  uid: string;
  babyStatus?: 'pregnant' | 'born';
  onClose: () => void;
}

export default function FcmPermissionModal({ uid, babyStatus = 'pregnant', onClose }: FcmPermissionModalProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleAllow = async () => {
    setLoading(true);
    try {
      const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
      if (!vapidKey) { onClose(); return; }

      const token = await requestFcmToken(vapidKey);
      if (token) {
        await saveFcmToken(uid, token);
        setDone(true);
        setTimeout(onClose, 1500);
      } else {
        onClose();
      }
    } catch {
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-24">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl animate-fade-in-up">

        {done ? (
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center">
              <Bell size={28} className="text-brand-500" />
            </div>
            <p className="font-black text-slate-800">알림 설정 완료!</p>
            <p className="text-sm text-slate-500 text-center">
              {babyStatus === 'born'
                ? '예방접종·검진 일정을 놓치지 않도록 알림으로 알려드릴게요.'
                : '매주 아빠가 해야 할 일을 알림으로 알려드릴게요.'}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
                <Bell size={24} className="text-brand-500" />
              </div>
              <button onClick={onClose} className="p-1 text-slate-300 hover:text-slate-500">
                <X size={20} />
              </button>
            </div>

            <h2 className="font-black text-lg text-slate-900 mb-1">
              {babyStatus === 'born' ? '예방접종 알림 받기' : '주간 알림 받기'}
            </h2>
            <p className="text-sm text-slate-500 mb-5 leading-relaxed">
              {babyStatus === 'born' ? (
                <>예방접종·영유아 건강검진 일정을 매주 알림으로 보내드려요.<br />D+일차에 맞춰 딱 필요할 때만 알려드려요.</>
              ) : (
                <>매주 임신 주차별 아빠 할 일을 알림으로 보내드려요.<br />중요한 검진·준비 일정을 놓치지 마세요.</>
              )}
            </p>

            <div className="space-y-2">
              <button
                onClick={handleAllow}
                disabled={loading}
                className="w-full py-3.5 rounded-2xl bg-brand-500 text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Bell size={16} />
                )}
                알림 받기
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl text-slate-400 text-sm font-medium flex items-center justify-center gap-1.5"
              >
                <BellOff size={14} />
                나중에
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
