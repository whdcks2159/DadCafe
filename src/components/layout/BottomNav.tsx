'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CheckSquare, Landmark, Users, User } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/guide',       icon: BookOpen,   label: '가이드' },
  { href: '/checklist',   icon: CheckSquare, label: '체크리스트' },
  { href: '/gov-support', icon: Landmark,   label: '정부지원' },
  { href: '/community',   icon: Users,      label: '커뮤니티' },
  { href: '/profile',     icon: User,       label: '내 정보' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50">
      <div className="flex items-center justify-around h-16 px-2">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${
                active ? 'text-brand-500' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span className={`text-[10px] font-medium ${active ? 'font-bold' : ''}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
