import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { STAGES } from '@/data/stages';
import { ChevronRight, Clock } from 'lucide-react';

export default function GuidePage() {
  return (
    <>
      <TopHeader title="단계별 가이드" />
      <div className="px-4 py-5">
        <p className="text-sm text-slate-500 mb-6">
          현재 단계를 선택하면 아빠가 해야 할 일을 알려드려요.
        </p>
        <div className="space-y-4">
          {STAGES.map((stage, i) => (
            <Link
              key={stage.slug}
              href={`/guide/${stage.slug}`}
              className={`block rounded-2xl border-2 p-5 ${stage.bgClass} hover:scale-[1.01] transition-transform active:scale-[0.99]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{stage.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white ${stage.colorClass}`}>
                        STEP {i + 1}
                      </span>
                    </div>
                    <p className="font-black text-slate-800">{stage.labelKo}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{stage.descriptionKo}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-400 flex-shrink-0" />
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                <Clock size={12} />
                <span>가이드 {stage.topics.length}개</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
