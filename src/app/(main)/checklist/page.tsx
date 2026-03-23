'use client';

import { useState, useEffect, useCallback } from 'react';
import TopHeader from '@/components/layout/TopHeader';
import { CHECKLIST_CATEGORIES } from '@/data/checklist';
import { STAGES } from '@/data/stages';
import { useAuth } from '@/context/AuthContext';
import { getCompletedItems, saveCompletedItems } from '@/lib/firebase/firestore';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import type { StageSlug } from '@/types';

const STAGE_FILTERS: { slug: StageSlug | 'all'; label: string }[] = [
  { slug: 'all',            label: '전체' },
  { slug: 'pre-pregnancy',  label: '임신 전' },
  { slug: 'pregnant',       label: '임신 중' },
  { slug: 'newborn',        label: '신생아' },
  { slug: 'toddler',        label: '영아기' },
];

export default function ChecklistPage() {
  const { user } = useAuth();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['cat-health-pre']));
  const [filter, setFilter] = useState<StageSlug | 'all'>('all');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      getCompletedItems(user.uid).then((ids) => setCompleted(new Set(ids)));
    }
  }, [user]);

  const toggleItem = useCallback(
    (id: string) => {
      if (!user) return;
      setCompleted((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        // Debounced save
        clearTimeout((window as any).__checklistSave);
        (window as any).__checklistSave = setTimeout(() => {
          saveCompletedItems(user.uid, Array.from(next));
        }, 800);
        return next;
      });
    },
    [user]
  );

  const toggleCategory = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = filter === 'all'
    ? CHECKLIST_CATEGORIES
    : CHECKLIST_CATEGORIES.filter((c) => c.stage === filter);

  const totalItems = filtered.reduce((s, c) => s + c.items.length, 0);
  const completedCount = filtered.reduce(
    (s, c) => s + c.items.filter((i) => completed.has(i.id)).length,
    0
  );
  const progress = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  if (!user) {
    return (
      <>
        <TopHeader title="체크리스트" />
        <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
          <Lock size={40} className="text-slate-300 mb-4" />
          <p className="font-bold text-slate-700 mb-2">로그인이 필요해요</p>
          <p className="text-sm text-slate-500">
            체크리스트는 로그인 후 저장됩니다.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <TopHeader title="체크리스트" />

      {/* Progress Summary */}
      <div className="px-4 py-4 bg-gradient-to-r from-brand-500 to-orange-500 text-white">
        <div className="flex items-end justify-between mb-2">
          <div>
            <p className="text-xs text-white/80">전체 진행률</p>
            <p className="text-3xl font-black">{progress}%</p>
          </div>
          <p className="text-sm text-white/90">
            {completedCount} / {totalItems} 완료
          </p>
        </div>
        <div className="w-full bg-white/30 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Stage Filter */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
        {STAGE_FILTERS.map(({ slug, label }) => (
          <button
            key={slug}
            onClick={() => setFilter(slug)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
              filter === slug
                ? 'bg-brand-500 text-white'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="px-4 pb-6 space-y-3">
        {filtered.map((category) => {
          const catCompleted = category.items.filter((i) => completed.has(i.id)).length;
          const catTotal = category.items.length;
          const isOpen = expanded.has(category.id);
          const stage = STAGES.find((s) => s.slug === category.stage);

          return (
            <div key={category.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {stage?.emoji && <img src={stage.emoji} alt={stage.labelKo} className="w-6 h-6" />}
                  <div className="text-left">
                    <p className="font-bold text-sm text-slate-800">{category.titleKo}</p>
                    <p className="text-xs text-slate-400">
                      {catCompleted}/{catTotal} 완료
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-100 rounded-full h-1.5">
                    <div
                      className="h-full bg-brand-500 rounded-full transition-all"
                      style={{ width: `${(catCompleted / catTotal) * 100}%` }}
                    />
                  </div>
                  {isOpen ? (
                    <ChevronUp size={16} className="text-slate-400" />
                  ) : (
                    <ChevronDown size={16} className="text-slate-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-slate-50 divide-y divide-slate-50">
                  {category.items.map((item) => {
                    const done = completed.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                      >
                        {done ? (
                          <CheckCircle2 size={20} className="text-brand-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <Circle size={20} className="text-slate-300 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p className={`text-sm font-medium ${done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                            {item.textKo}
                          </p>
                          {item.noteKo && (
                            <p className="text-xs text-slate-400 mt-0.5">{item.noteKo}</p>
                          )}
                        </div>
                        {item.priority === 'high' && !done && (
                          <span className="ml-auto flex-shrink-0 text-[10px] bg-red-50 text-red-500 font-bold px-1.5 py-0.5 rounded-full">
                            중요
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
