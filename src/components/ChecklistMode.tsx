'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, RotateCcw, AlertTriangle } from 'lucide-react';
import type { SituationStep } from '@/types';
import { recordChecklistCompletion } from '@/lib/firebase/firestore';

// 에스컬레이션 키워드 (병원 가야 할 때)
const ESCALATION_KEYWORDS = [
  '소아과', '병원', '즉시', '응급', '119', '연락', '전화',
  '3시간', '38도', '39도', '미만', '이상이면',
];

function isEscalation(step: SituationStep): boolean {
  const text = step.titleKo + step.descriptionKo;
  return ESCALATION_KEYWORDS.some((kw) => text.includes(kw));
}

interface Props {
  steps: SituationStep[];
  slug?: string;
  uid?: string;
}

export default function ChecklistMode({ steps, slug, uid }: Props) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const savedRef = useRef(false);

  const total = steps.length;
  const doneCount = checked.size;
  const allDone = doneCount === total;
  const progress = total > 0 ? (doneCount / total) * 100 : 0;

  // 완료 시 Firebase 저장 (1회만)
  useEffect(() => {
    if (allDone && total > 0 && uid && slug && !savedRef.current) {
      savedRef.current = true;
      recordChecklistCompletion(uid, slug).catch(() => {});
    }
    if (!allDone) savedRef.current = false;
  }, [allDone, total, uid, slug]);

  // 에스컬레이션 기준으로 일반 / 경고 분리
  const normalSteps = steps.filter((s) => !isEscalation(s));
  const warnSteps = steps.filter((s) => isEscalation(s));

  const toggle = (order: number, currentIndex: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(order)) {
        next.delete(order);
      } else {
        next.add(order);
        // 다음 미완료 항목으로 자동 스크롤
        const nextRef = itemRefs.current[currentIndex + 1];
        if (nextRef) {
          setTimeout(() => nextRef.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
        }
      }
      return next;
    });
  };

  const reset = () => setChecked(new Set());

  return (
    <div className="px-4 py-4 space-y-3">
      {/* 진행 바 */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              allDone ? 'bg-green-400' : 'bg-brand-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={`text-xs font-bold flex-shrink-0 ${allDone ? 'text-green-500' : 'text-brand-500'}`}>
          {allDone ? '다 됐어요!' : `${doneCount} / ${total}`}
        </span>
      </div>

      {/* 완료 상태 */}
      {allDone && (
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center space-y-3">
          <p className="text-2xl">✅</p>
          <p className="font-black text-green-700 text-base">잘 하셨어요.</p>
          <p className="text-sm text-green-600">그래도 걱정되면 AI에게 물어보세요.</p>
          <Link
            href="/ai-guide"
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-bold mt-1"
          >
            <Sparkles size={14} />
            AI에게 물어보기
          </Link>
        </div>
      )}

      {/* 일반 체크리스트 */}
      {normalSteps.map((step, idx) => {
        const done = checked.has(step.order);
        return (
          <CheckItem
            key={step.order}
            ref={(el) => { itemRefs.current[idx] = el; }}
            step={step}
            done={done}
            isWarn={false}
            onToggle={() => toggle(step.order, idx)}
          />
        );
      })}

      {/* 에스컬레이션 구분선 */}
      {warnSteps.length > 0 && (
        <>
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-xs text-neutral-400 font-semibold flex-shrink-0">
              그래도 안 되면
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {warnSteps.map((step, idx) => {
            const done = checked.has(step.order);
            const globalIdx = normalSteps.length + idx;
            return (
              <CheckItem
                key={step.order}
                ref={(el) => { itemRefs.current[globalIdx] = el; }}
                step={step}
                done={done}
                isWarn={true}
                onToggle={() => toggle(step.order, globalIdx)}
              />
            );
          })}
        </>
      )}

      {/* 다시 시작 */}
      {doneCount > 0 && !allDone && (
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors mx-auto pt-2"
        >
          <RotateCcw size={12} />
          처음부터 다시
        </button>
      )}
      {allDone && (
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700 transition-colors mx-auto pt-1"
        >
          <RotateCcw size={12} />
          처음부터 다시
        </button>
      )}
    </div>
  );
}

/* ── 개별 체크 아이템 ── */
import { forwardRef } from 'react';

const CheckItem = forwardRef<
  HTMLButtonElement,
  {
    step: SituationStep;
    done: boolean;
    isWarn: boolean;
    onToggle: () => void;
  }
>(({ step, done, isWarn, onToggle }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onToggle}
      className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-all active:scale-[0.98] ${
        done
          ? 'bg-neutral-50 border-neutral-100'
          : isWarn
          ? 'bg-red-50 border-red-100 hover:border-red-200'
          : 'bg-white border-neutral-100 hover:border-brand-200 shadow-sm'
      }`}
    >
      {/* 체크 원 */}
      <div
        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          done
            ? 'bg-brand-500 border-brand-500'
            : isWarn
            ? 'border-red-300'
            : 'border-neutral-200'
        }`}
      >
        {done && (
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {!done && isWarn && <AlertTriangle size={12} className="text-red-400" />}
      </div>

      {/* 텍스트 */}
      <span
        className={`text-sm font-bold leading-tight transition-all ${
          done
            ? 'line-through text-neutral-400'
            : isWarn
            ? 'text-red-700'
            : 'text-neutral-900'
        }`}
      >
        {step.titleKo}
      </span>
    </button>
  );
});
CheckItem.displayName = 'CheckItem';
