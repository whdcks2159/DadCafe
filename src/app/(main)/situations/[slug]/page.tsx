import { notFound } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { SITUATIONS, SITUATION_TAG_LABELS } from '@/data/situations';
import { CheckCircle2, XCircle } from 'lucide-react';

export async function generateStaticParams() {
  return SITUATIONS.map((s) => ({ slug: s.slug }));
}

export default function SituationDetailPage({ params }: { params: { slug: string } }) {
  const situation = SITUATIONS.find((s) => s.slug === params.slug);
  if (!situation) notFound();

  return (
    <>
      <TopHeader title={situation.titleKo} showBack />

      {/* Header */}
      <div className="px-5 py-6 border-b border-slate-100">
        <div className="mb-3"><img src={situation.emoji} alt={situation.titleKo} className="w-14 h-14" /></div>
        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
          {SITUATION_TAG_LABELS[situation.tag]}
        </span>
        <h1 className="font-black text-xl text-slate-800 mt-2 mb-1">{situation.titleKo}</h1>
        <p className="text-sm text-slate-500">{situation.summaryKo}</p>
      </div>

      <div className="px-5 py-5 space-y-6">
        {/* Steps */}
        <section>
          <h2 className="font-black text-slate-800 mb-3">📋 이렇게 하세요</h2>
          <div className="space-y-3">
            {situation.steps.map((step) => (
              <div key={step.order} className="flex gap-3">
                <div className="w-7 h-7 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">
                  {step.order}
                </div>
                <div className="flex-1 pb-3 border-b border-slate-100">
                  <p className="font-bold text-sm text-slate-800">{step.titleKo}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.descriptionKo}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Do / Don't */}
        <div className="grid grid-cols-1 gap-3">
          <section className="bg-green-50 rounded-2xl p-4">
            <h2 className="font-bold text-green-700 mb-2 text-sm flex items-center gap-1.5">
              <CheckCircle2 size={16} />
              이건 꼭 하세요
            </h2>
            <ul className="space-y-1.5">
              {situation.doList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                  <span className="text-green-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-red-50 rounded-2xl p-4">
            <h2 className="font-bold text-red-700 mb-2 text-sm flex items-center gap-1.5">
              <XCircle size={16} />
              이건 하지 마세요
            </h2>
            <ul className="space-y-1.5">
              {situation.dontList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="text-red-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
