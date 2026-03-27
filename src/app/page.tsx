'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, ListChecks, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const FEATURES = [
  {
    icon: BookOpen,
    title: '단계별 가이드',
    desc: '임신 전부터 영아기까지, 아빠가 해야 할 행동을 순서대로',
  },
  {
    icon: ListChecks,
    title: '10초 체크리스트',
    desc: '아기 울음, 발열, 잠투정 — 읽지 않고 탭만 해도 해결',
  },
  {
    icon: Sparkles,
    title: 'AI 맞춤 플랜',
    desc: '지금 상황을 말하면 AI가 아빠 맞춤 가이드를 드려요',
  },
];

export default function LandingPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();

  // 이미 로그인된 경우 바로 앱으로
  useEffect(() => {
    if (!loading && user) {
      router.replace('/guide');
    }
  }, [user, loading, router]);

  if (loading || user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-50 via-blue-50 to-pastel-lavender px-6 py-12">
      {/* 배경 장식 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-100/50 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-pastel-lavender/60 rounded-full" />
        <div className="absolute top-1/2 right-8 w-24 h-24 bg-brand-100/30 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">

        {/* 로고 */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/favicon.png"
            alt="파파플랜"
            className="w-20 h-20 mb-4 drop-shadow-md"
          />
          <h1 className="font-black text-2xl text-neutral-900 tracking-tight">파파플랜</h1>
          <p className="text-sm text-neutral-400 mt-1">아빠의 육아 플랜, 여기서 시작</p>
        </div>

        {/* 핵심 기능 3줄 */}
        <div className="w-full space-y-3 mb-10">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3.5 bg-white/70 backdrop-blur-sm border border-white rounded-2xl px-4 py-3.5 shadow-sm"
            >
              <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-neutral-800">{title}</p>
                <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 버튼 */}
        <div className="w-full space-y-3">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-neutral-800 font-bold py-3.5 rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.8 2.5 30.2 0 24 0 14.8 0 6.9 5.4 3 13.3l7.9 6.1C12.8 13.1 17.9 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.1z"/>
              <path fill="#FBBC05" d="M10.9 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6L2.4 13.3A24 24 0 0 0 0 24c0 3.9.9 7.5 2.5 10.8l8.4-6.2z"/>
              <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2 1.4-4.7 2.2-7.6 2.2-6.1 0-11.2-3.6-13.1-9l-7.9 6.1C6.9 42.6 14.8 48 24 48z"/>
            </svg>
            Google로 시작하기
          </button>

          <button
            onClick={() => router.push('/guide')}
            className="w-full flex items-center justify-center gap-1.5 text-neutral-400 text-sm py-2 hover:text-neutral-600 transition-colors"
          >
            로그인 없이 둘러보기
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 하단 문구 */}
        <p className="text-[10px] text-neutral-300 mt-10 text-center">
          © 2026 파파플랜 · 아이와 함께하는 모든 순간
        </p>
      </div>
    </div>
  );
}
