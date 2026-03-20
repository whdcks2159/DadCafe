import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { STAGES } from '@/data/stages';
import { ChevronRight, Clock } from 'lucide-react';
import type { StageSlug } from '@/types';

export async function generateStaticParams() {
  return STAGES.map((s) => ({ stage: s.slug }));
}

export default function StageDetailPage({ params }: { params: { stage: string } }) {
  const stage = STAGES.find((s) => s.slug === params.stage);
  if (!stage) notFound();

  return (
    <>
      <TopHeader title={stage.labelKo} showBack />
      {/* Stage Hero */}
      <div className={`${stage.bgClass} border-b-2 px-5 py-6`}>
        <div className="flex items-center gap-3">
          <span className="text-5xl">{stage.emoji}</span>
          <div>
            <p className="text-xl font-black text-slate-800">{stage.labelKo}</p>
            <p className="text-sm text-slate-600 mt-0.5">{stage.descriptionKo}</p>
          </div>
        </div>
      </div>

      {/* Topic List */}
      <div className="px-4 py-4 space-y-3">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide px-1">
          가이드 목록
        </p>
        {stage.topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/guide/${stage.slug}/${topic.slug}`}
            className="flex items-center justify-between bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex-1 mr-3">
              <p className="font-bold text-slate-800 text-sm">{topic.titleKo}</p>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{topic.summaryKo}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                <Clock size={11} />
                <span>약 {topic.estimatedReadMin}분</span>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </>
  );
}
