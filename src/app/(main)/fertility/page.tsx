'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { FERTILITY_SECTIONS } from '@/data/fertility';
import { ChevronDown, ChevronUp, CheckCircle2, User, ExternalLink, ArrowRight } from 'lucide-react';

export default function FertilityPage() {
  const [openSlug, setOpenSlug] = useState<string | null>('understanding');

  const toggle = (slug: string) =>
    setOpenSlug((prev) => (prev === slug ? null : slug));

  return (
    <>
      <TopHeader title="난임 가이드" />

      {/* 헤더 */}
      <div className="bg-gradient-to-br from-slate-900 via-brand-700 to-brand-500 px-5 py-6 text-white">
        <p className="text-xs text-blue-200 font-bold mb-1">2026년 기준</p>
        <p className="text-xl font-black mb-2">난임, 혼자 감당하지 마라</p>
        <p className="text-sm text-blue-100 leading-relaxed">
          난임의 절반은 남성 요인이다.<br />
          아내 혼자 병원 다니게 하지 말고 함께 움직여라.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Link
            href="/gov-support/infertility-support"
            className="flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-white/25 transition-colors"
          >
            정부 지원금 확인 <ArrowRight size={12} />
          </Link>
          <Link
            href="/ai-guide"
            className="flex items-center gap-1.5 bg-white text-brand-700 text-xs font-bold px-3 py-2 rounded-xl hover:opacity-90 transition-colors"
          >
            AI 맞춤 플랜 <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* 섹션 아코디언 */}
      <div className="px-4 py-4 space-y-2">
        {FERTILITY_SECTIONS.map((section, i) => {
          const isOpen = openSlug === section.slug;
          return (
            <div
              key={section.slug}
              className={`bg-white rounded-2xl border transition-all ${
                isOpen ? 'border-brand-200 shadow-sm' : 'border-slate-100'
              }`}
            >
              {/* 헤더 */}
              <button
                onClick={() => toggle(section.slug)}
                className="w-full flex items-center gap-3 px-4 py-4"
              >
                <div className="w-8 h-8 bg-brand-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-brand-500 bg-brand-50 px-1.5 py-0.5 rounded-full">
                      STEP {i + 1}
                    </span>
                  </div>
                  <p className="font-bold text-sm text-slate-800 mt-0.5">{section.titleKo}</p>
                  <p className="text-xs text-slate-500">{section.summaryKo}</p>
                </div>
                {isOpen
                  ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0" />
                  : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
                }
              </button>

              {/* 펼쳐진 내용 */}
              {isOpen && (
                <div className="px-4 pb-4 space-y-4 border-t border-slate-100 pt-3">

                  {/* 남편 행동 */}
                  <div className="bg-gradient-to-r from-brand-700 to-brand-500 rounded-xl p-3 text-white">
                    <div className="flex items-center gap-1.5 mb-2">
                      <User size={13} />
                      <p className="text-xs font-black">남편이 해야 할 것</p>
                    </div>
                    <ul className="space-y-1.5">
                      {section.dadActions.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs">
                          <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5">{j + 1}</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 본문 */}
                  <ul className="space-y-2">
                    {section.body.map((line, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700 leading-relaxed">{line}</p>
                      </li>
                    ))}
                  </ul>

                  {/* 치료 플로우 */}
                  {section.steps && (
                    <div>
                      <p className="text-xs font-black text-slate-500 mb-2">진행 순서</p>
                      <div className="space-y-2">
                        {section.steps.map((step) => (
                          <div key={step.order} className="flex items-start gap-2.5">
                            <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0">
                              {step.order}
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-xl px-3 py-2">
                              <p className="text-xs font-bold text-slate-800">{step.labelKo}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{step.descriptionKo}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 정부 지원 연동 */}
                  {section.govSupportSlug && (
                    <Link
                      href={`/gov-support/${section.govSupportSlug}`}
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2.5 hover:border-blue-200 transition-colors"
                    >
                      <span className="text-sm">💰</span>
                      <p className="flex-1 text-xs font-bold text-blue-700">난임 시술비 정부 지원 확인하기</p>
                      <ExternalLink size={12} className="text-blue-400" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
