'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CheckSquare, Search, BookHeart, User } from 'lucide-react';
import SearchOverlay from '@/components/SearchOverlay';

const NAV_ITEMS_LEFT = [
  { href: '/guide',     icon: BookOpen,    label: '가이드' },
  { href: '/checklist', icon: CheckSquare, label: '체크리스트' },
];

const NAV_ITEMS_RIGHT = [
  { href: '/diary',   icon: BookHeart, label: '육아일기' },
  { href: '/profile', icon: User,      label: '내 정보' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-warm-200 z-50">
        <div className="flex items-center justify-around h-16 px-1">
          {/* 왼쪽 탭 */}
          {NAV_ITEMS_LEFT.map(({ href, icon: Icon, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 px-2 py-1 transition-all"
              >
                <div className={`flex items-center justify-center w-11 h-7 rounded-full transition-all ${
                  active ? 'bg-brand-100' : ''
                }`}>
                  <Icon
                    size={20}
                    strokeWidth={active ? 2.5 : 1.8}
                    className={`transition-colors ${active ? 'text-brand-500' : 'text-neutral-400'}`}
                  />
                </div>
                <span className={`text-[10px] transition-all ${
                  active ? 'font-bold text-brand-500' : 'font-medium text-neutral-400'
                }`}>
                  {label}
                </span>
              </Link>
            );
          })}

          {/* 가운데 검색 버튼 (강조) */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center gap-0.5 px-2 py-1"
            aria-label="검색"
          >
            <div className="flex items-center justify-center w-12 h-12 -mt-5 rounded-full bg-brand-500 shadow-lg shadow-brand-200 transition-transform active:scale-95">
              <Search size={22} strokeWidth={2} className="text-white" />
            </div>
            <span className="text-[10px] font-medium text-neutral-400 mt-0.5">검색</span>
          </button>

          {/* 오른쪽 탭 */}
          {NAV_ITEMS_RIGHT.map(({ href, icon: Icon, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 px-2 py-1 transition-all"
              >
                <div className={`flex items-center justify-center w-11 h-7 rounded-full transition-all ${
                  active ? 'bg-brand-100' : ''
                }`}>
                  <Icon
                    size={20}
                    strokeWidth={active ? 2.5 : 1.8}
                    className={`transition-colors ${active ? 'text-brand-500' : 'text-neutral-400'}`}
                  />
                </div>
                <span className={`text-[10px] transition-all ${
                  active ? 'font-bold text-brand-500' : 'font-medium text-neutral-400'
                }`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
