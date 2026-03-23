'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import {
  GOV_SUPPORT_ITEMS,
  GOV_STAGE_LABELS,
  GOV_CATEGORY_LABELS,
  GOV_CATEGORY_COLORS,
} from '@/data/govSupport';
import { ChevronRight, Zap } from 'lucide-react';
import type { GovStage } from '@/types';

const STAGE_FILTERS: { slug: GovStage | 'all'; label: string }[] = [
  { slug: 'all',            label: '전체' },
  { slug: 'pre-pregnancy',  label: '임신 전' },
  { slug: 'pregnant',       label: '임신 중' },
  { slug: 'newborn',        label: '신생아' },
  { slug: 'infant',         label: '영아기' },
];

export default function GovSupportPage() {
  const [activeStage, setActiveStage] = useState<GovStage | 'all'>('all');

  const filtered = useMemo(
    () =>
      activeStage === 'all'
        ? GOV_SUPPORT_ITEMS
        : GOV_SUPPORT_ITEMS.filter((item) => item.stage.includes(activeStage)),
    [activeStage]
  );

  const urgent = filtered.filter((i) => i.isUrgent);
  const normal = filtered.filter((i) => !i.isUrgent);

  const totalAmount = useMemo(() => {
    const items =
      activeStage === 'all'
        ? GOV_SUPPORT_ITEMS.filter((i) => i.stage.includes('newborn'))
        : filtered;
    // 출산 후 기준 주요 지원금 합산 (고정값)
    return activeStage === 'all' || activeStage === 'newborn' || activeStage === 'infant'
      ? '최대 월 310만원 + 일시금 200만원~'
      : null;
  }, [activeStage, filtered]);

  return (
    <>
      <TopHeader title="정부 지원 가이드" />

      {/* 상단 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-5 text-white">
        <p className="text-xs text-blue-200 mb-1">2026년 기준</p>
        <p className="text-xl font-black mb-1">신청 안 하면 못 받는다</p>
        <p className="text-sm text-blue-100 leading-relaxed">
          임신부터 영아기까지 받을 수 있는<br />
          정부 지원금 총정리. 남편이 직접 신청해라.
        </p>
        {totalAmount && (
          <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
            <Zap size={12} className="text-yellow-300" />
            <span className="text-xs font-bold">출산 후 받을 수 있는 지원: {totalAmount}</span>
          </div>
        )}
      </div>

      <div className="px-4 py-4">
        {/* 단계 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-5">
          {STAGE_FILTERS.map(({ slug, label }) => (
            <button
              key={slug}
              onClick={() => setActiveStage(slug)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeStage === slug
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 지금 당장 해야 할 것 */}
        {urgent.length > 0 && (
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-red-500" />
              <h2 className="text-sm font-black text-slate-800">지금 당장 신청해야 할 것</h2>
            </div>
            <div className="space-y-2">
              {urgent.map((item) => (
                <Link
                  key={item.slug}
                  href={`/gov-support/${item.slug}`}
                  className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3 hover:border-red-200 transition-all active:scale-[0.99]"
                >

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-bold text-sm text-slate-800">{item.titleKo}</p>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${GOV_CATEGORY_COLORS[item.category]}`}>
                        {GOV_CATEGORY_LABELS[item.category]}
                      </span>
                    </div>
                    <p className="text-xs text-red-600 font-medium">{item.summaryKo}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.amount}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 전체 지원 목록 */}
        {normal.length > 0 && (
          <section>
            <h2 className="text-sm font-black text-slate-800 mb-3">전체 지원 목록</h2>
            <div className="space-y-2">
              {normal.map((item) => (
                <Link
                  key={item.slug}
                  href={`/gov-support/${item.slug}`}
                  className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 hover:border-blue-200 hover:shadow-sm transition-all active:scale-[0.99]"
                >

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-bold text-sm text-slate-800">{item.titleKo}</p>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${GOV_CATEGORY_COLORS[item.category]}`}>
                        {GOV_CATEGORY_LABELS[item.category]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{item.summaryKo}</p>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">{item.amount}</p>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-sm">해당 단계의 지원 항목이 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
