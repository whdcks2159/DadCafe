'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import {
  TIP_ITEMS,
  TIP_CATEGORY_LABELS,
  TIP_CATEGORY_COLORS,
  TIP_CATEGORY_ICONS,
} from '@/data/tips';
import { ChevronRight, Sparkles } from 'lucide-react';
import type { TipCategory } from '@/types';

const FILTERS: { slug: TipCategory | 'all'; label: string; icon: string }[] = [
  { slug: 'all',         label: '전체',    icon: '✨' },
  { slug: 'preparation', label: '임신 준비', icon: '🌱' },
  { slug: 'pregnancy',   label: '임신 중',  icon: '🤰' },
  { slug: 'birth',       label: '출산 준비', icon: '🏥' },
  { slug: 'newborn',     label: '육아 초기', icon: '👶' },
];

export default function TipsPage() {
  const [active, setActive] = useState<TipCategory | 'all'>('all');

  const featured = useMemo(
    () => TIP_ITEMS.filter((t) => ['morning-sickness-tip', 'newborn-sleep', 'delivery-signs', 'lifestyle-prep'].includes(t.slug)),
    []
  );

  const filtered = useMemo(
    () => active === 'all' ? TIP_ITEMS : TIP_ITEMS.filter((t) => t.category === active),
    [active]
  );

  return (
    <>
      <TopHeader title="임신 꿀팁" />

      {/* 헤더 배너 */}
      <div className="bg-gradient-to-br from-brand-700 to-brand-500 px-5 py-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={14} className="text-yellow-300" />
          <p className="text-xs font-bold text-blue-200">아빠 실전 가이드</p>
        </div>
        <p className="text-xl font-black mb-1">행동하는 아빠를 위한 꿀팁</p>
        <p className="text-sm text-blue-100">임신 준비부터 육아까지 — 지금 바로 쓸 수 있는 팁만 모았다</p>
      </div>

      <div className="px-4 py-4">
        {/* 카테고리 필터 */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-5">
          {FILTERS.map(({ slug, label, icon }) => (
            <button
              key={slug}
              onClick={() => setActive(slug)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                active === slug
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* 지금 필요한 꿀팁 (전체 보기일 때만) */}
        {active === 'all' && (
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-brand-500" />
              <h2 className="text-sm font-black text-slate-800">지금 필요한 꿀팁</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {featured.map((tip) => (
                <Link
                  key={tip.slug}
                  href={`/tips/${tip.slug}`}
                  className="bg-brand-50 border border-brand-100 rounded-2xl p-3 hover:border-brand-300 transition-all active:scale-95"
                >
                  <span className="text-2xl block mb-2">{tip.icon}</span>
                  <p className="font-bold text-xs text-slate-800 leading-snug mb-1">{tip.titleKo}</p>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${TIP_CATEGORY_COLORS[tip.category]}`}>
                    {TIP_CATEGORY_LABELS[tip.category]}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 전체 목록 */}
        <section>
          {active !== 'all' && (
            <h2 className="text-sm font-black text-slate-800 mb-3">
              {TIP_CATEGORY_ICONS[active]} {TIP_CATEGORY_LABELS[active]} 꿀팁
            </h2>
          )}
          {active === 'all' && (
            <h2 className="text-sm font-black text-slate-800 mb-3">전체 꿀팁 {TIP_ITEMS.length}개</h2>
          )}
          <div className="space-y-2">
            {filtered.map((tip) => (
              <Link
                key={tip.slug}
                href={`/tips/${tip.slug}`}
                className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-3 hover:border-brand-200 hover:shadow-sm transition-all active:scale-[0.99]"
              >
                <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-slate-800 leading-snug">{tip.titleKo}</p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{tip.summaryKo}</p>
                  <span className={`inline-block mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${TIP_CATEGORY_COLORS[tip.category]}`}>
                    {TIP_CATEGORY_LABELS[tip.category]}
                  </span>
                </div>
                <ChevronRight size={16} className="text-slate-300 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
