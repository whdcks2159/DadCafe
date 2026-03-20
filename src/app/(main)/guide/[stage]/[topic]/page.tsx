import { notFound } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { STAGES } from '@/data/stages';
import { Clock, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return STAGES.flatMap((s) =>
    s.topics.map((t) => ({ stage: s.slug, topic: t.slug }))
  );
}

export default function TopicPage({ params }: { params: { stage: string; topic: string } }) {
  const stage = STAGES.find((s) => s.slug === params.stage);
  if (!stage) notFound();
  const topic = stage.topics.find((t) => t.slug === params.topic);
  if (!topic) notFound();

  return (
    <>
      <TopHeader title={topic.titleKo} showBack />

      {/* Meta */}
      <div className={`${stage.bgClass} border-b-2 px-5 py-4`}>
        <p className="text-xs text-slate-500 mb-1">{stage.labelKo}</p>
        <p className="font-black text-slate-800">{topic.titleKo}</p>
        <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500">
          <Clock size={12} />
          <span>약 {topic.estimatedReadMin}분 읽기</span>
        </div>
      </div>

      {/* Summary */}
      <div className="px-5 pt-5 pb-3">
        <p className="text-sm text-slate-600 leading-relaxed border-l-4 border-brand-400 pl-3">
          {topic.summaryKo}
        </p>
      </div>

      {/* Content Sections */}
      <div className="px-5 pb-8 space-y-6">
        {topic.content.map((section, idx) => (
          <div key={idx}>
            <h2 className="font-black text-slate-800 text-base mb-2">{section.headingKo}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{section.bodyKo}</p>
            {section.tips && section.tips.length > 0 && (
              <div className="bg-slate-50 rounded-2xl p-4 space-y-2">
                {section.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
