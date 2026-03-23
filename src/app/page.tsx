'use client';

import Link from 'next/link';
import { ArrowRight, CheckSquare, Users, Lightbulb, Landmark, Zap, BookOpen, Sparkles, Heart, Bot, BookHeart } from 'lucide-react';

const FEATURES = [
  { icon: BookOpen,   title: '단계별 가이드',    desc: '임신 전부터 영아기까지 아빠 행동 매뉴얼', href: '/guide' },
  { icon: CheckSquare, title: '체크리스트',      desc: '지금 당장 해야 할 일만 골라 알려드려요', href: '/checklist' },
  { icon: Lightbulb,  title: '상황별 가이드',    desc: '입덧, 밤 울음, 산후우울증 즉시 대처법', href: '/situations' },
  { icon: Users,      title: '아빠 커뮤니티',    desc: '같은 처지의 아빠들과 경험 나누기', href: '/community' },
];

const STAGES = [
  { icon: '/icons/stage-pre-pregnancy.svg', label: '임신 전' },
  { icon: '/icons/stage-pregnant.svg',      label: '임신 중' },
  { icon: '/icons/stage-newborn.svg',       label: '신생아' },
  { icon: '/icons/stage-toddler.svg',       label: '영아기' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 md:items-center md:justify-center md:py-12">
      <div className="w-full md:max-w-lg md:bg-white md:rounded-3xl md:shadow-xl md:overflow-hidden">

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-brand-700 to-brand-500 px-6 pt-14 pb-12 text-white overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute top-16 -right-4 w-24 h-24 bg-white/5 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-400/20 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* 로고 */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <img src="/icons/stage-newborn.svg" alt="" className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-lg text-white leading-none tracking-tight">파파플랜</p>
                <p className="text-[10px] text-blue-200">PapaPlan</p>
              </div>
            </div>

            <p className="text-blue-200 text-xs font-medium mb-2 tracking-wide uppercase">아빠를 위한 육아 플랜</p>
            <h1 className="text-3xl font-black leading-tight mb-3">
              지금 뭘 해야<br />
              하는지 모르는<br />
              <span className="text-blue-300">아빠를 위해</span>
            </h1>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              맘카페 말고 <strong className="text-white">파파플랜</strong>.<br />
              임신부터 영아기까지, 아빠가 해야 할 일을<br />
              단계별로 명확하게 알려드립니다.
            </p>

            <div className="flex gap-3">
              <Link
                href="/guide"
                className="flex items-center gap-2 bg-white text-brand-700 font-black px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 text-sm"
              >
                플랜 시작하기
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/gov-support"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-4 py-3 rounded-xl hover:bg-white/20 transition-all active:scale-95 text-sm"
              >
                <Zap size={14} className="text-yellow-300" />
                정부 지원
              </Link>
            </div>
          </div>
        </section>

        {/* 단계별 */}
        <section className="px-5 py-6 bg-white border-b border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">단계별 가이드</p>
          <div className="grid grid-cols-4 gap-2">
            {STAGES.map(({ icon, label }) => (
              <Link
                key={label}
                href="/guide"
                className="flex flex-col items-center gap-2 bg-slate-50 rounded-2xl p-3 hover:bg-brand-50 hover:border-brand-200 border border-transparent transition-all active:scale-95"
              >
                <img src={icon} alt={label} className="w-8 h-8" />
                <span className="text-[11px] font-bold text-slate-600 text-center">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 정부 지원 배너 */}
        <section className="px-5 py-4 bg-white border-b border-slate-100">
          <Link
            href="/gov-support"
            className="flex items-center gap-4 bg-gradient-to-r from-brand-700 to-brand-500 rounded-2xl p-4 text-white hover:opacity-95 transition-opacity active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <Landmark size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-black text-sm">정부 지원 한눈에 보기</p>
                <span className="text-[9px] font-black bg-white/20 px-1.5 py-0.5 rounded-full">2026</span>
              </div>
              <p className="text-xs text-blue-100">신청 안 하면 못 받는다 — 지금 확인해라</p>
            </div>
            <ArrowRight size={16} className="text-white/70" />
          </Link>
        </section>

        {/* 주요 기능 */}
        <section className="px-5 py-6 bg-white border-b border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">주요 기능</p>
          <div className="grid grid-cols-2 gap-2">
            {FEATURES.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="flex flex-col gap-2.5 bg-slate-50 rounded-2xl p-4 hover:bg-brand-50 border border-transparent hover:border-brand-100 transition-all active:scale-95"
              >
                <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-800">{title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 새 기능: 꿀팁 + 난임 + AI */}
        <section className="px-5 py-4 bg-white border-b border-slate-100 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">새로운 기능</p>
          <Link href="/tips" className="flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3 hover:border-amber-200 transition-all active:scale-[0.98]">
            <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-black text-sm text-slate-800">임신 꿀팁</p>
              <p className="text-xs text-slate-500">바로 써먹는 아빠 실전 가이드 16선</p>
            </div>
            <ArrowRight size={16} className="text-slate-300" />
          </Link>
          <Link href="/fertility" className="flex items-center gap-3 bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 hover:border-rose-200 transition-all active:scale-[0.98]">
            <div className="w-9 h-9 bg-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-black text-sm text-slate-800">난임 가이드</p>
              <p className="text-xs text-slate-500">검사부터 치료까지 — 남편이 할 일</p>
            </div>
            <ArrowRight size={16} className="text-slate-300" />
          </Link>
          <Link href="/ai-guide" className="flex items-center gap-3 bg-brand-50 border border-brand-100 rounded-2xl px-4 py-3 hover:border-brand-200 transition-all active:scale-[0.98]">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-700 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-black text-sm text-slate-800">AI 맞춤 플랜</p>
              <p className="text-xs text-slate-500">내 상황에 맞는 가이드를 AI가 알려줘</p>
            </div>
            <span className="text-[9px] font-black bg-brand-500 text-white px-1.5 py-0.5 rounded-full">AI</span>
          </Link>
          <Link href="/diary" className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl px-4 py-3 hover:border-green-200 transition-all active:scale-[0.98]">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <BookHeart size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-black text-sm text-slate-800">육아일기</p>
              <p className="text-xs text-slate-500">사진·영상과 함께 아이의 순간 기록</p>
            </div>
            <ArrowRight size={16} className="text-slate-300" />
          </Link>
        </section>

        {/* 아빠 레벨 테스트 배너 */}
        <section className="px-5 py-4 bg-white">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-400 mb-1">아빠 레벨 테스트</p>
                <p className="font-black text-sm mb-3">나는 어떤 아빠일까?<br />7가지 질문으로 알아보세요.</p>
                <Link
                  href="/dad-level"
                  className="inline-flex items-center gap-1.5 bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-brand-600 transition-colors active:scale-[0.98]"
                >
                  테스트 시작 <ArrowRight size={14} />
                </Link>
              </div>
              <img src="/icons/badge-experienced.svg" alt="" className="w-14 h-14 opacity-40" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-5 py-5 bg-white text-center border-t border-slate-100">
          <p className="text-xs text-slate-400">© 2026 파파플랜 — 아빠의 육아 플랜, 여기서 시작</p>
        </footer>

      </div>
    </div>
  );
}
