'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  ArrowLeft, Home, Menu, X,
  BookOpen, CheckSquare, Lightbulb, Users, User,
  Landmark, Sparkles, Heart, Bot, BookHeart, Baby,
} from 'lucide-react';

const NAV_ITEMS = [
  { href: '/guide',       icon: BookOpen,    label: '단계별 가이드' },
  { href: '/checklist',   icon: CheckSquare, label: '체크리스트' },
  { href: '/tips',        icon: Sparkles,    label: '임신 꿀팁' },
  { href: '/fertility',   icon: Heart,       label: '난임 가이드' },
  { href: '/situations',  icon: Lightbulb,   label: '상황별 가이드' },
  { href: '/gov-support', icon: Landmark,    label: '정부 지원', badge: '2026' },
  { href: '/ai-guide',    icon: Bot,         label: 'AI 맞춤 플랜', badge: 'AI' },
  { href: '/diary',       icon: BookHeart,   label: '육아일기' },
  { href: '/community',   icon: Users,       label: '커뮤니티' },
  { href: '/profile',     icon: User,        label: '내 정보' },
];

interface TopHeaderProps {
  title: string;
  showBack?: boolean;
  right?: React.ReactNode;
}

export default function TopHeader({ title, showBack = false, right }: TopHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 h-14 flex items-center justify-between">
        {/* 왼쪽: 뒤로 + 홈 + 타이틀 */}
        <div className="flex items-center gap-1">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="p-1.5 -ml-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft size={20} className="text-slate-600" />
            </button>
          )}
          <Link
            href="/"
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Home size={18} className="text-slate-500" />
          </Link>
          <h1 className="text-base font-bold text-slate-800 ml-1">{title}</h1>
        </div>

        {/* 오른쪽: custom right + 햄버거 */}
        <div className="flex items-center gap-1">
          {right}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Menu size={20} className="text-slate-600" />
          </button>
        </div>
      </header>

      {/* 드로어 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* 배경 */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* 드로어 패널 */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white flex flex-col shadow-2xl">
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center">
                  <Baby size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-black text-sm text-slate-800 leading-tight">파파플랜</p>
                  <p className="text-[10px] text-slate-400">아빠의 육아 플랜, 여기서 시작</p>
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* 네비게이션 */}
            <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
              {NAV_ITEMS.map(({ href, icon: Icon, label, badge }) => {
                const active = pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                      active
                        ? 'bg-brand-50 text-brand-600 font-bold'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                    }`}
                  >
                    <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
                    <span className="text-sm flex-1">{label}</span>
                    {badge && !active && (
                      <span className="text-[9px] font-black bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                    {active && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                  </Link>
                );
              })}
            </nav>

            {/* 드로어 푸터 */}
            <div className="px-5 py-4 border-t border-slate-100">
              <p className="text-[10px] text-slate-400">© 2026 파파플랜</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
