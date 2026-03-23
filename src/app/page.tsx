'use client';

import Link from 'next/link';
import { ArrowRight, Baby, CheckSquare, Users, Lightbulb, Landmark, Zap } from 'lucide-react';

const FEATURES = [
  { icon: CheckSquare, title: '단계별 체크리스트', desc: '지금 당장 해야 할 일만 알려드려요' },
  { icon: Lightbulb,   title: '상황별 가이드',    desc: '입덧, 밤 울음, 산후우울증 대처법' },
  { icon: Users,       title: '아빠 커뮤니티',    desc: '같은 처지의 아빠들과 경험 나누기' },
];

const STAGES = [
  { icon: '/icons/stage-pre-pregnancy.svg', label: '임신 전' },
  { icon: '/icons/stage-pregnant.svg',      label: '임신 중' },
  { icon: '/icons/stage-newborn.svg',       label: '신생아' },
  { icon: '/icons/stage-toddler.svg',       label: '영아기' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 md:items-center md:justify-center md:py-12">
      <div className="w-full md:max-w-lg md:bg-white md:rounded-3xl md:shadow-xl md:overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-500 to-orange-600 px-6 pt-16 pb-12 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/icons/stage-newborn.svg" alt="" className="absolute top-4 right-4 w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
            <Baby size={14} />
            <span className="text-xs font-medium">아빠를 위한 육아 가이드</span>
          </div>
          <h1 className="text-3xl font-black leading-tight mb-3">
            애는 우리<br />
            <span className="text-yellow-300">함께</span> 키워
          </h1>
          <p className="text-white/90 text-sm leading-relaxed mb-8">
            맘카페 말고 <strong>대디카페</strong>.<br />
            남편 입장에서 "지금 뭘 해야 하는지"<br />
            명확하게 알려드립니다.
          </p>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            시작하기
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Stages */}
      <section className="px-6 py-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">단계별 가이드</h2>
        <div className="grid grid-cols-4 gap-3">
          {STAGES.map(({ icon, label }) => (
            <Link
              key={label}
              href="/guide"
              className="flex flex-col items-center gap-2 bg-slate-50 rounded-2xl p-3 hover:bg-orange-50 transition-colors"
            >
              <img src={icon} alt={label} className="w-8 h-8" />
              <span className="text-xs font-medium text-slate-600 text-center">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">주요 기능</h2>
        <div className="space-y-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">{title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 정부 지원 배너 */}
      <section className="mx-6 mb-4">
        <Link
          href="/gov-support"
          className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white hover:opacity-95 transition-opacity active:scale-[0.98]"
        >
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Landmark size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <p className="font-black text-sm">정부 지원 한눈에 보기</p>
              <span className="text-[9px] font-black bg-white/20 px-1.5 py-0.5 rounded-full">2026</span>
            </div>
            <p className="text-xs text-blue-100">신청 안 하면 못 받는다 — 지금 확인해라</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={12} className="text-yellow-300" />
            <ArrowRight size={16} />
          </div>
        </Link>
      </section>

      {/* CTA Banner */}
      <section className="mx-6 mb-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-5 text-white">
        <p className="text-xs text-slate-400 mb-1">아빠 레벨 테스트</p>
        <p className="font-bold text-sm mb-3">나는 어떤 아빠일까?<br />7가지 질문으로 알아보세요.</p>
        <Link
          href="/dad-level"
          className="inline-flex items-center gap-1.5 bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-brand-600 transition-colors"
        >
          테스트 시작 <ArrowRight size={14} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-8 text-center">
        <p className="text-xs text-slate-400">
          © 2024 DadCafe — 애는 우리 함께 키워
        </p>
      </footer>
      </div>
    </div>
  );
}
