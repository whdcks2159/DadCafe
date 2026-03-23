'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, CheckSquare, Lightbulb, Users, User, Baby, Landmark } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/guide',       icon: BookOpen,   label: '단계별 가이드' },
  { href: '/checklist',   icon: CheckSquare, label: '체크리스트' },
  { href: '/situations',  icon: Lightbulb,  label: '상황별 가이드' },
  { href: '/gov-support', icon: Landmark,   label: '정부 지원', badge: '2026' },
  { href: '/community',   icon: Users,      label: '커뮤니티' },
  { href: '/profile',     icon: User,       label: '내 정보' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-60 min-h-screen bg-white border-r border-slate-100 fixed left-0 top-0 z-40">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 px-6 py-5 border-b border-slate-100">
        <div className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center">
          <Baby size={18} className="text-white" />
        </div>
        <div>
          <p className="font-black text-sm text-slate-800 leading-tight">DadCafe</p>
          <p className="text-[10px] text-slate-400">애는 우리 함께 키워</p>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ href, icon: Icon, label, badge }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                active
                  ? 'bg-brand-50 text-brand-600 font-bold'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-sm">{label}</span>
              <div className="ml-auto flex items-center gap-1">
                {badge && !active && (
                  <span className="text-[9px] font-black bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
                {active && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-100">
        <p className="text-[10px] text-slate-400">© 2024 DadCafe</p>
      </div>
    </aside>
  );
}
