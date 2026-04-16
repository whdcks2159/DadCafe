'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckSquare, Users, Landmark, BookHeart, BookOpen, Newspaper, CalendarDays } from 'lucide-react';
import BabyCard from '@/components/BabyCard';
import { BLOG_POSTS } from '@/data/blogPosts';
import { useAuth } from '@/context/AuthContext';

const FEATURES = [
  { icon: BookOpen,    title: '가이드',       desc: '단계별·상황별\n모든 가이드 보기',         href: '/guide',      iconBg: 'bg-brand-400',   cardBg: 'bg-brand-50',        border: 'border-brand-100' },
  { icon: CheckSquare, title: '체크리스트',   desc: '지금 해야 할 일을\n단계별로 확인해보세요', href: '/checklist',  iconBg: 'bg-emerald-400', cardBg: 'bg-pastel-mint',     border: 'border-green-100' },
  { icon: BookHeart,   title: '육아일기',     desc: '소중한 순간을\n사진과 함께 기록해요',      href: '/diary',      iconBg: 'bg-rose-400',    cardBg: 'bg-rose-50',         border: 'border-rose-100' },
  { icon: Users,       title: '커뮤니티',     desc: '같은 처지의 아빠들과\n경험을 나눠보세요',  href: '/community',  iconBg: 'bg-violet-400',  cardBg: 'bg-pastel-lavender', border: 'border-purple-100' },
];

export default function HomePage() {
  const { user, loading } = useAuth();
  const isLoggedIn = !loading && !!user;

  return (
    <div className="min-h-screen flex flex-col bg-warm-50">

      {/* ── Hero: 비로그인만 표시 ─────────────────── */}
      {!isLoggedIn && (
        <section className="bg-gradient-to-br from-brand-50 via-blue-50 to-pastel-lavender px-6 pt-14 pb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <Image src="/icons/mainLogo.png" alt="파파플랜 로고" width={40} height={40} className="w-10 h-10" />
              <div>
                <p className="font-black text-lg text-neutral-900 leading-none">파파플랜</p>
                <p className="text-[10px] text-neutral-400">PapaPlan · 아빠 육아 가이드</p>
              </div>
            </div>
            <p className="text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">아빠를 위한 따뜻한 육아 플랜</p>
            <h1 className="text-3xl font-black leading-tight mb-3 text-neutral-900">
              함께 키우는<br />
              아이 이야기,<br />
              <span className="text-brand-500">파파플랜에서</span>
            </h1>
            <p className="text-neutral-500 text-sm leading-relaxed">
              맘카페 말고 <strong className="text-brand-600">파파플랜</strong>.<br />
              임신부터 영아기까지 아빠가 해야 할 일을<br />
              단계별로 친절하게 안내해드려요.
            </p>
          </div>
        </section>
      )}

      {/* ── 로그인 상태: 상단 로고 바 ────────────── */}
      {isLoggedIn && (
        <div className="px-5 pt-5 pb-1 flex items-center gap-2">
          <Image src="/icons/mainLogo.png" alt="파파플랜 로고" width={28} height={28} className="w-7 h-7" />
          <p className="font-black text-sm text-neutral-900">파파플랜</p>
        </div>
      )}

      {/* ── 오늘 우리 아기 ──────────────────────── */}
      <section className="pb-2 bg-warm-50">
        <BabyCard />
      </section>

      {/* ── 성장 캘린더 배너 ─────────────────── */}
      <section className="px-5 pb-4 bg-warm-50">
        <Link
          href="/growth-calendar"
          className="flex items-center gap-4 bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-100 rounded-3xl p-4 hover:shadow-card transition-all active:scale-[0.98]"
        >
          <div className="w-11 h-11 bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <CalendarDays size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-black text-sm text-neutral-900 mb-0.5">성장 캘린더</p>
            <p className="text-xs text-neutral-500">임신 주차부터 출산 후까지 아이의 이야기를 기록해요</p>
          </div>
          <ArrowRight size={16} className="text-brand-400 flex-shrink-0" />
        </Link>
      </section>

      {/* ── 주요 기능 ──────────────────────── */}
      <section className="px-5 py-4 bg-warm-50">
        <p className="text-xs font-bold text-neutral-400 tracking-wide mb-3">주요 기능</p>
        <div className="grid grid-cols-2 gap-2.5">
          {FEATURES.map(({ icon: Icon, title, desc, href, iconBg, cardBg, border }) => (
            <Link
              key={title}
              href={href}
              className={`flex flex-col gap-3 ${cardBg} border ${border} rounded-3xl p-4 hover:shadow-card transition-all active:scale-95`}
            >
              <div className={`w-10 h-10 ${iconBg} rounded-2xl flex items-center justify-center shadow-sm`}>
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-neutral-900">{title}</p>
                <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug whitespace-pre-line">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 정부 지원 배너 ───────────────────── */}
      <section className="px-5 pb-4 bg-warm-50">
        <Link
          href="/gov-support"
          className="flex items-center gap-4 bg-indigo-100 border border-indigo-200 rounded-3xl p-4 hover:bg-indigo-200 transition-all active:scale-[0.98] shadow-card"
        >
          <div className="w-11 h-11 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Landmark size={20} className="text-brand-500" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-black text-sm text-neutral-900">정부 지원 한눈에 보기</p>
              <span className="text-[9px] font-black bg-brand-200 text-brand-700 px-1.5 py-0.5 rounded-full">2026</span>
            </div>
            <p className="text-xs text-neutral-500">신청하지 않으면 받을 수 없어요 — 지금 확인해보세요</p>
          </div>
          <ArrowRight size={16} className="text-brand-400 flex-shrink-0" />
        </Link>
      </section>

      {/* ── 아빠 레벨 테스트 ─────────────────── */}
      <section className="px-5 py-4 bg-warm-50">
        <div className="bg-gradient-to-br from-pastel-lavender via-brand-50 to-pastel-blue border border-brand-100 rounded-3xl p-5 shadow-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-brand-400 mb-1 font-medium">아빠 레벨 테스트</p>
              <p className="font-black text-sm mb-4 leading-snug text-neutral-900">나는 어떤 아빠일까요?<br />7가지 질문으로 알아보세요.</p>
              <Link
                href="/dad-level"
                className="inline-flex items-center gap-1.5 bg-brand-500 text-white text-sm font-black px-4 py-2.5 rounded-2xl hover:bg-brand-600 transition-colors active:scale-[0.98] shadow-warm"
              >
                테스트 시작하기 <ArrowRight size={14} />
              </Link>
            </div>
            <img src="/icons/mainLogo.png" alt="" className="w-16 h-16 opacity-40" />
          </div>
        </div>
      </section>

      {/* ── 최신 블로그 아티클 ────────────────── */}
      <section className="px-5 py-4 bg-warm-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Newspaper size={14} className="text-neutral-400" />
            <p className="text-xs font-bold text-neutral-400 tracking-wide">아빠 육아 아티클</p>
          </div>
          <Link href="/blog" className="text-xs font-bold text-brand-500 hover:text-brand-600">
            전체 보기
          </Link>
        </div>
        <div className="space-y-2.5">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-0.5 p-4 bg-white border border-neutral-100 rounded-2xl hover:border-brand-200 hover:bg-brand-50/30 transition-all active:scale-[0.98] shadow-card"
            >
              <p className="font-bold text-sm text-neutral-900 leading-snug">{post.title}</p>
              <p className="text-xs text-neutral-500 line-clamp-1">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
