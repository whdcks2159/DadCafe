'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { SITUATIONS, SITUATION_TAG_LABELS } from '@/data/situations';

const ALL_TAGS = ['all', 'pregnancy', 'newborn', 'toddler', 'hospital', 'relationship'] as const;

export default function SituationsPage() {
  const [activeTag, setActiveTag] = useState<string>('all');

  const filtered = activeTag === 'all'
    ? SITUATIONS
    : SITUATIONS.filter((s) => s.tag === activeTag);

  return (
    <>
      <TopHeader title="상황별 가이드" />

      <div className="px-4 py-4">
        <p className="text-sm text-slate-500 mb-4">
          지금 겪고 있는 상황을 선택하세요.
        </p>

        {/* Tag Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-5">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeTag === tag
                  ? 'bg-brand-500 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {tag === 'all' ? '전체' : SITUATION_TAG_LABELS[tag]}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((situation) => (
            <Link
              key={situation.slug}
              href={`/situations/${situation.slug}`}
              className="bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-sm transition-all active:scale-95"
            >
              <span className="text-3xl block mb-2">{situation.emoji}</span>
              <p className="font-bold text-sm text-slate-800 leading-snug mb-1">
                {situation.titleKo}
              </p>
              <p className="text-xs text-slate-500 line-clamp-2">{situation.summaryKo}</p>
              <span className="inline-block mt-2 text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                {SITUATION_TAG_LABELS[situation.tag]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
