'use client';

import Link from 'next/link';
import { ArrowRight, CheckSquare, Users, Lightbulb, Landmark, Zap, BookOpen, Sparkles, Heart, Bot, BookHeart } from 'lucide-react';

/* 단계별 파스텔 배경 */
const STAGES = [
  { icon: '/icons/stage-pre-pregnancy.svg', label: '임신 전',  bg: 'bg-pastel-mint',     border: 'border-green-100' },
  { icon: '/icons/stage-pregnant.svg',      label: '임신 중',  bg: 'bg-pastel-yellow',   border: 'border-yellow-100' },
  { icon: '/icons/stage-newborn.svg',       label: '신생아',   bg: 'bg-pastel-pink',     border: 'border-pink-100' },
  { icon: '/icons/stage-toddler.svg',       label: '영아기',   bg: 'bg-pastel-lavender', border: 'border-purple-100' },
];

/* 주요 기능 카드 */
const FEATURES = [
  { icon: BookOpen,    title: '단계별 가이드',  desc: '임신 전부터 영아기까지\n아빠 행동 가이드',    href: '/guide',      iconBg: 'bg-brand-500',  cardBg: 'bg-pastel-blue',   border: 'border-blue-100' },
  { icon: CheckSquare, title: '체크리스트',     desc: '지금 해야 할 일을\n단계별로 확인해보세요',    href: '/checklist',  iconBg: 'bg-emerald-500', cardBg: 'bg-pastel-mint',   border: 'border-green-100' },
  { icon: Lightbulb,   title: '상황별 가이드',  desc: '입덧, 밤 울음,\n산후우울증 대처 방법',       href: '/situations', iconBg: 'bg-amber-500',   cardBg: 'bg-pastel-yellow', border: 'border-yellow-100' },
  { icon: Users,       title: '아빠 커뮤니티',  desc: '같은 처지의 아빠들과\n경험을 나눠보세요',     href: '/community',  iconBg: 'bg-violet-500',  cardBg: 'bg-pastel-lavender', border: 'border-purple-100' },
];

/* 하루 응원 메시지 (요일별) */
const DAILY_MESSAGES = [
  '오늘도 아이와 함께 따뜻한 하루 보내세요.',
  '작은 관심이 아이에게 큰 사랑이 됩니다.',
  '아빠의 한 마디가 아이의 평생 기억이 됩니다.',
  '오늘 아이를 꼭 안아줬나요?',
  '함께하는 시간이 가장 좋은 선물이에요.',
  '아빠도 처음이라 괜찮아요.',
  '오늘 하루도 정말 잘 하고 계세요.',
];

export default function LandingPage() {
  const todayMessage = DAILY_MESSAGES[new Date().getDay()];

  return (
    <div className="min-h-screen flex flex-col bg-warm-50 md:items-center md:justify-center md:py-12">
      <div className="w-full md:max-w-lg md:bg-white md:rounded-3xl md:shadow-soft md:overflow-hidden">

        {/* ── Hero ──────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400 px-6 pt-14 pb-12 text-white overflow-hidden">
          {/* 배경 장식 원 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full" />
            <div className="absolute top-20 -right-4  w-28 h-28 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-sky-300/30  rounded-full" />
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-indigo-300/30 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* 로고 */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-warm">
                <img src="/icons/stage-newborn.svg" alt="" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-lg text-white leading-none">파파플랜</p>
                <p className="text-[10px] text-sky-100">PapaPlan · 아빠 육아 가이드</p>
              </div>
            </div>

            <p className="text-sky-100 text-xs font-medium mb-2 tracking-wider uppercase">아빠를 위한 따뜻한 육아 플랜</p>
            <h1 className="text-3xl font-black leading-tight mb-3">
              함께 키우는<br />
              아이 이야기,<br />
              <span className="text-sky-100">파파플랜에서</span>
            </h1>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              맘카페 말고 <strong className="text-white">파파플랜</strong>.<br />
              임신부터 영아기까지 아빠가 해야 할 일을<br />
              단계별로 친절하게 안내해드려요.
            </p>

            <div className="flex gap-3">
              <Link
                href="/guide"
                className="flex items-center gap-2 bg-white text-brand-700 font-black px-5 py-3 rounded-2xl shadow-warm hover:shadow-soft transition-all active:scale-95 text-sm"
              >
                가이드 시작하기
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/gov-support"
                className="flex items-center gap-2 bg-white/15 border border-white/25 text-white font-bold px-4 py-3 rounded-2xl hover:bg-white/25 transition-all active:scale-95 text-sm"
              >
                <Zap size={14} className="text-yellow-200" />
                정부 지원
              </Link>
            </div>
          </div>
        </section>

        {/* ── 오늘 우리 아기 (일일 메시지) ──────── */}
        <section className="px-5 pt-5 pb-2 bg-warm-50">
          <div className="bg-white rounded-3xl border border-warm-200 shadow-card px-4 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-pastel-pink rounded-2xl flex items-center justify-center flex-shrink-0 animate-float">
              <span className="text-xl">👶</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-rose-400 tracking-wide mb-0.5">오늘 우리 아기</p>
              <p className="text-sm text-slate-700 font-medium leading-snug">{todayMessage}</p>
            </div>
          </div>
        </section>

        {/* ── 단계별 가이드 ────────────────────── */}
        <section className="px-5 py-5 bg-warm-50">
          <p className="text-xs font-bold text-slate-400 tracking-wide mb-3">단계별 가이드</p>
          <div className="grid grid-cols-4 gap-2">
            {STAGES.map(({ icon, label, bg, border }) => (
              <Link
                key={label}
                href="/guide"
                className={`flex flex-col items-center gap-2 ${bg} border ${border} rounded-2xl p-3 hover:shadow-card transition-all active:scale-95`}
              >
                <img src={icon} alt={label} className="w-8 h-8" />
                <span className="text-[11px] font-bold text-slate-600 text-center leading-tight">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 정부 지원 배너 ───────────────────── */}
        <section className="px-5 pb-4 bg-warm-50">
          <Link
            href="/gov-support"
            className="flex items-center gap-4 bg-gradient-to-r from-brand-500 to-sky-400 rounded-3xl p-4 text-white hover:opacity-95 transition-all active:scale-[0.98] shadow-warm"
          >
            <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Landmark size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-black text-sm">정부 지원 한눈에 보기</p>
                <span className="text-[9px] font-black bg-white/25 px-1.5 py-0.5 rounded-full">2026</span>
              </div>
              <p className="text-xs text-sky-100">신청하지 않으면 받을 수 없어요 — 지금 확인해보세요</p>
            </div>
            <ArrowRight size={16} className="text-white/70 flex-shrink-0" />
          </Link>
        </section>

        {/* ── 주요 기능 ──────────────────────── */}
        <section className="px-5 py-4 bg-warm-50">
          <p className="text-xs font-bold text-slate-400 tracking-wide mb-3">주요 기능</p>
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
                  <p className="font-bold text-sm text-slate-800">{title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug whitespace-pre-line">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 새로운 기능 ────────────────────── */}
        <section className="px-5 py-4 bg-warm-50 space-y-2.5">
          <p className="text-xs font-bold text-slate-400 tracking-wide mb-1">새로운 기능</p>

          <Link href="/tips" className="flex items-center gap-3 bg-pastel-peach border border-amber-100 rounded-2xl px-4 py-3.5 hover:shadow-card transition-all active:scale-[0.98]">
            <div className="w-10 h-10 bg-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">임신 꿀팁</p>
              <p className="text-xs text-slate-500 mt-0.5">바로 써먹는 아빠 실전 가이드 16선</p>
            </div>
            <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
          </Link>

          <Link href="/fertility" className="flex items-center gap-3 bg-pastel-rose border border-rose-100 rounded-2xl px-4 py-3.5 hover:shadow-card transition-all active:scale-[0.98]">
            <div className="w-10 h-10 bg-rose-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Heart size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">난임 가이드</p>
              <p className="text-xs text-slate-500 mt-0.5">검사부터 치료까지 — 남편이 도울 수 있어요</p>
            </div>
            <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
          </Link>

          <Link href="/ai-guide" className="flex items-center gap-3 bg-pastel-blue border border-blue-100 rounded-2xl px-4 py-3.5 hover:shadow-card transition-all active:scale-[0.98]">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-sky-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">AI 맞춤 플랜</p>
              <p className="text-xs text-slate-500 mt-0.5">내 상황에 맞는 가이드를 AI가 도와드려요</p>
            </div>
            <span className="text-[9px] font-black bg-brand-500 text-white px-1.5 py-0.5 rounded-full flex-shrink-0">AI</span>
          </Link>

          <Link href="/diary" className="flex items-center gap-3 bg-pastel-mint border border-green-100 rounded-2xl px-4 py-3.5 hover:shadow-card transition-all active:scale-[0.98]">
            <div className="w-10 h-10 bg-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <BookHeart size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-slate-800">육아일기</p>
              <p className="text-xs text-slate-500 mt-0.5">사진과 함께 아이의 소중한 순간을 기록해요</p>
            </div>
            <ArrowRight size={16} className="text-slate-300 flex-shrink-0" />
          </Link>
        </section>

        {/* ── 아빠 레벨 테스트 ─────────────────── */}
        <section className="px-5 py-4 bg-warm-50">
          <div className="bg-gradient-to-br from-indigo-400 via-blue-400 to-sky-400 rounded-3xl p-5 text-white shadow-warm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-sky-100 mb-1 font-medium">아빠 레벨 테스트</p>
                <p className="font-black text-sm mb-4 leading-snug">나는 어떤 아빠일까요?<br />7가지 질문으로 알아보세요.</p>
                <Link
                  href="/dad-level"
                  className="inline-flex items-center gap-1.5 bg-white text-brand-700 text-sm font-black px-4 py-2.5 rounded-2xl hover:bg-sky-50 transition-colors active:scale-[0.98] shadow-sm"
                >
                  테스트 시작하기 <ArrowRight size={14} />
                </Link>
              </div>
              <img src="/icons/badge-experienced.svg" alt="" className="w-16 h-16 opacity-50" />
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────── */}
        <footer className="px-5 py-6 bg-warm-50 text-center">
          <p className="text-xs text-slate-400">© 2026 파파플랜 · 아이와 함께하는 모든 순간</p>
        </footer>

      </div>
    </div>
  );
}
