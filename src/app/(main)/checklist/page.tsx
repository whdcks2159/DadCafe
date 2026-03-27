'use client';

import { useState, useEffect, useCallback } from 'react';
import TopHeader from '@/components/layout/TopHeader';
import { CHECKLIST_CATEGORIES } from '@/data/checklist';
import { STAGES } from '@/data/stages';
import { useAuth } from '@/context/AuthContext';
import { getCompletedItems, saveCompletedItems } from '@/lib/firebase/firestore';
import { Heart, Circle, ChevronDown, ChevronUp, Lock, LayoutGrid, Leaf, Baby, User, type LucideIcon } from 'lucide-react';
import type { StageSlug } from '@/types';

const STAGE_FILTERS: { slug: StageSlug | 'all'; label: string; icon: LucideIcon }[] = [
  { slug: 'all',           label: '전체',   icon: LayoutGrid },
  { slug: 'pre-pregnancy', label: '임신 전', icon: Leaf },
  { slug: 'pregnant',      label: '임신 중', icon: Heart },
  { slug: 'newborn',       label: '신생아',  icon: Baby },
  { slug: 'toddler',       label: '영아기',  icon: User },
];

/* 진행률에 따른 응원 메시지 */
function getProgressMessage(progress: number): string {
  if (progress === 0)   return '첫 번째 항목을 완료해보세요!';
  if (progress < 30)    return '좋은 시작이에요. 계속 이어가요!';
  if (progress < 60)    return '순조롭게 진행되고 있어요.';
  if (progress < 90)    return '거의 다 왔어요! 대단해요.';
  if (progress < 100)   return '마지막 한 걸음이 남았어요!';
  return '모두 완료했어요! 정말 수고하셨어요.';
}

export default function ChecklistPage() {
  const { user } = useAuth();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['cat-health-pre']));
  const [filter, setFilter] = useState<StageSlug | 'all'>('all');

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

  const totalItems     = filtered.reduce((s, c) => s + c.items.length, 0);
  const completedCount = filtered.reduce(
    (s, c) => s + c.items.filter((i) => completed.has(i.id)).length,
    0
  );
  const progress = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  /* 로그인 필요 */
  if (!user) {
    return (
      <>
        <TopHeader title="체크리스트" />
        <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
          <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mb-4">
            <Lock size={28} className="text-rose-400" />
          </div>
          <p className="font-bold text-slate-700 mb-2">로그인이 필요해요</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            체크리스트는 로그인 후<br />안전하게 저장됩니다.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <TopHeader title="체크리스트" />

      {/* ── 진행률 카드 ──────────────────────── */}
      <div className="px-4 pt-4 pb-3 bg-warm-50">
        <div className="bg-gradient-to-br from-sky-400 via-brand-500 to-indigo-400 rounded-3xl p-5 text-white shadow-warm">
          <div className="flex items-end justify-between mb-1">
            <div>
              <p className="text-xs text-sky-100 font-medium mb-0.5">전체 진행률</p>
              <p className="text-4xl font-black leading-none">{progress}%</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-white/90">{completedCount} / {totalItems}</p>
              <p className="text-xs text-sky-100">항목 완료</p>
            </div>
          </div>

          {/* 진행 바 */}
          <div className="w-full bg-white/25 rounded-full h-2.5 overflow-hidden mt-3 mb-2">
            <div
              className="h-full bg-white rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* 응원 메시지 */}
          <p className="text-xs text-sky-100">{getProgressMessage(progress)}</p>
        </div>
      </div>

      {/* ── 단계 필터 ────────────────────────── */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar bg-warm-50">
        {STAGE_FILTERS.map(({ slug, label, icon: Icon }) => (
          <button
            key={slug}
            onClick={() => setFilter(slug)}
            className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === slug
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-white border border-warm-200 text-slate-500 hover:border-brand-200'
            }`}
          >
            <Icon size={11} />
            {label}
          </button>
        ))}
      </div>

      {/* ── 카테고리 카드 ────────────────────── */}
      <div className="px-4 pb-8 space-y-3 bg-warm-50">
        {filtered.map((category) => {
          const catCompleted = category.items.filter((i) => completed.has(i.id)).length;
          const catTotal     = category.items.length;
          const isOpen       = expanded.has(category.id);
          const stage        = STAGES.find((s) => s.slug === category.stage);
          const catProgress  = catTotal > 0 ? (catCompleted / catTotal) * 100 : 0;

          return (
            <div key={category.id} className="bg-white rounded-3xl border border-warm-200 overflow-hidden shadow-card">
              {/* 카테고리 헤더 */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  {stage?.emoji && (
                    <div className="w-9 h-9 bg-warm-100 rounded-2xl flex items-center justify-center">
                      <img src={stage.emoji} alt={stage.labelKo} className="w-5 h-5" />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-bold text-sm text-slate-800">{category.titleKo}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {catCompleted === catTotal && catTotal > 0
                        ? '모두 완료했어요!'
                        : `${catCompleted}/${catTotal} 완료`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  {/* 미니 진행 바 */}
                  <div className="w-16 bg-warm-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-400 to-sky-400 rounded-full transition-all duration-500"
                      style={{ width: `${catProgress}%` }}
                    />
                  </div>
                  {isOpen
                    ? <ChevronUp size={16} className="text-slate-300" />
                    : <ChevronDown size={16} className="text-slate-300" />}
                </div>
              </button>

              {/* 항목 목록 */}
              {isOpen && (
                <div className="border-t border-warm-100 divide-y divide-warm-50">
                  {category.items.map((item) => {
                    const done = completed.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-warm-50 transition-colors text-left active:scale-[0.99]"
                      >
                        {/* 아이콘: 완료 = 하트, 미완료 = 원 */}
                        {done ? (
                          <Heart
                            size={20}
                            fill="currentColor"
                            className="text-rose-400 mt-0.5 flex-shrink-0 animate-heart"
                          />
                        ) : (
                          <Circle size={20} className="text-slate-200 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium leading-snug ${
                            done ? 'line-through text-slate-400' : 'text-slate-800'
                          }`}>
                            {item.textKo}
                          </p>
                          {item.noteKo && (
                            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.noteKo}</p>
                          )}
                        </div>
                        {item.priority === 'high' && !done && (
                          <span className="flex-shrink-0 text-[10px] bg-pastel-rose text-rose-500 font-bold px-2 py-0.5 rounded-full">
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
