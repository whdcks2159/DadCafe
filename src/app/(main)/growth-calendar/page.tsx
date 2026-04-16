'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';
import { GrowthCalendarProvider } from '@/context/GrowthCalendarContext';
import GrowthCalendarRoot from '@/components/growth-calendar/GrowthCalendarRoot';

export default function GrowthCalendarPage() {
  const { user, loading: authLoading } = useAuth();
  const { activeBaby, loading: babyLoading } = useBaby();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
    }
  }, [authLoading, user, router]);

  if (authLoading || babyLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  // 아기 등록 안 된 경우 → 온보딩
  if (!activeBaby) {
    return (
      <div className="px-4 py-8 max-w-md mx-auto text-center">
        <div className="text-4xl mb-4">📅</div>
        <h1 className="text-xl font-black text-neutral-900 mb-2">성장 캘린더</h1>
        <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
          임신부터 육아까지, 아빠의 이야기를 기록해요.
          <br />
          아기 정보를 먼저 등록해주세요.
        </p>
        <Link
          href="/growth-calendar/onboarding"
          className="inline-block w-full bg-brand-500 text-white font-bold py-4 rounded-2xl text-base"
        >
          시작하기
        </Link>
        <Link
          href="/baby/manage"
          className="block text-sm text-neutral-400 mt-3"
        >
          기존 아기 정보 사용하기
        </Link>
      </div>
    );
  }

  return (
    <GrowthCalendarProvider>
      <div className="px-4 pt-2 pb-6 max-w-lg mx-auto">
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-black text-neutral-900">성장 캘린더</h1>
            <p className="text-xs text-neutral-400 mt-0.5">
              {activeBaby.name ?? '우리 아기'}의 이야기
            </p>
          </div>
          <Link
            href="/baby/manage"
            className="text-xs text-neutral-400 bg-neutral-100 px-3 py-1.5 rounded-full"
          >
            아기 관리
          </Link>
        </div>

        <GrowthCalendarRoot />
      </div>
    </GrowthCalendarProvider>
  );
}
