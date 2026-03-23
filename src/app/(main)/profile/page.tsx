'use client';

import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { LogIn, LogOut, ChevronRight, Star, Trophy, BookOpen, BarChart2 } from 'lucide-react';

const LEVEL_LABELS = {
  beginner:    { label: '준비 중인 아빠', emoji: '/icons/badge-beginner.svg',    color: 'text-green-600 bg-green-50' },
  ready:       { label: '준비된 아빠',    emoji: '/icons/badge-ready.svg',       color: 'text-blue-600 bg-blue-50' },
  experienced: { label: '베테랑 아빠',    emoji: '/icons/badge-experienced.svg', color: 'text-amber-600 bg-amber-50' },
};

const MENU_ITEMS = [
  { icon: BookOpen,  label: '단계별 가이드',  href: '/guide' },
  { icon: BarChart2, label: '체크리스트',      href: '/checklist' },
  { icon: Trophy,    label: '아빠 레벨 테스트', href: '/dad-level' },
];

export default function ProfilePage() {
  const { user, userProfile, signInWithGoogle, logout, loading } = useAuth();

  if (loading) {
    return (
      <>
        <TopHeader title="내 정보" />
        <div className="flex items-center justify-center h-40">
          <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <TopHeader title="내 정보" />
        <div className="px-5 py-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl">👨</span>
          </div>
          <h2 className="font-black text-xl text-slate-800 mb-2">로그인하세요</h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">
            로그인하면 체크리스트 저장, 커뮤니티 참여,<br />
            아빠 레벨 저장 기능을 사용할 수 있어요.
          </p>
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 rounded-2xl py-3.5 font-bold text-slate-700 hover:border-slate-300 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google로 로그인
          </button>
        </div>
      </>
    );
  }

  const level = userProfile?.dadLevel;
  const levelInfo = level ? LEVEL_LABELS[level] : null;
  const joinedDays = userProfile?.joinedAt
    ? Math.floor((Date.now() - new Date(userProfile.joinedAt).getTime()) / 86400000)
    : 0;

  return (
    <>
      <TopHeader title="내 정보" />

      {/* Profile Header */}
      <div className="px-5 pt-6 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-3xl overflow-hidden">
            {user.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="프로필" className="w-full h-full object-cover" />
            ) : (
              '👨'
            )}
          </div>
          <div>
            <p className="font-black text-lg text-slate-800">
              {userProfile?.displayName ?? user.displayName ?? '아빠'}
            </p>
            <p className="text-xs text-slate-400">{user.email}</p>
            {levelInfo && (
              <span className={`inline-flex items-center gap-1 mt-1 text-xs font-bold px-2 py-0.5 rounded-full ${levelInfo.color}`}>
                <img src={levelInfo.emoji} alt={levelInfo.label} className="w-4 h-4" />
                {levelInfo.label}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: '활동일', value: `${joinedDays}일` },
            { label: '작성글', value: `${userProfile?.postCount ?? 0}개` },
            { label: '레벨', value: levelInfo?.label ?? '미측정' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-3 text-center">
              <p className="font-black text-slate-800">{value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 py-4 space-y-2">
        {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between bg-white border border-slate-100 rounded-2xl px-4 py-3.5 hover:border-brand-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Icon size={18} className="text-brand-500" />
              <span className="text-sm font-bold text-slate-700">{label}</span>
            </div>
            <ChevronRight size={16} className="text-slate-300" />
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="px-4 pb-8">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-red-500 py-3 transition-colors"
        >
          <LogOut size={16} />
          로그아웃
        </button>
      </div>
    </>
  );
}
