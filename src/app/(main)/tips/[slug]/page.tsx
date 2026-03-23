import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { TIP_ITEMS, TIP_CATEGORY_LABELS, TIP_CATEGORY_COLORS } from '@/data/tips';
import { CheckCircle2, ChevronRight, User } from 'lucide-react';

export async function generateStaticParams() {
  return TIP_ITEMS.map((t) => ({ slug: t.slug }));
}

export default function TipDetailPage({ params }: { params: { slug: string } }) {
  const tip = TIP_ITEMS.find((t) => t.slug === params.slug);
  if (!tip) notFound();

  const related = tip.relatedSlugs
    ? TIP_ITEMS.filter((t) => tip.relatedSlugs!.includes(t.slug))
    : TIP_ITEMS.filter((t) => t.category === tip.category && t.slug !== tip.slug).slice(0, 3);

  return (
    <>
      <TopHeader title="꿀팁" showBack />

      {/* 헤더 */}
      <div className="px-5 py-6 border-b border-slate-100">
        <span className="text-4xl block mb-3">{tip.icon}</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${TIP_CATEGORY_COLORS[tip.category]}`}>
          {TIP_CATEGORY_LABELS[tip.category]}
        </span>
        <h1 className="font-black text-xl text-slate-800 mt-2 leading-tight">{tip.titleKo}</h1>
        <p className="text-sm text-slate-500 mt-1">{tip.summaryKo}</p>
      </div>

      <div className="px-5 py-5 space-y-6">

        {/* 남편 행동 가이드 */}
        <section className="bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <User size={15} />
            <p className="font-black text-sm">남편이 지금 해야 할 것</p>
          </div>
          <ul className="space-y-2">
            {tip.dadActions.map((action, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm">{action}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 본문 */}
        <section>
          <h2 className="font-black text-slate-800 text-sm mb-3">핵심 내용</h2>
          <ul className="space-y-3">
            {tip.body.map((line, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-brand-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">{line}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 관련 꿀팁 */}
        {related.length > 0 && (
          <section>
            <h2 className="font-black text-slate-800 text-sm mb-3">관련 꿀팁</h2>
            <div className="space-y-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tips/${r.slug}`}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl px-3 py-2.5 hover:bg-brand-50 transition-colors active:scale-[0.99]"
                >
                  <span className="text-xl">{r.icon}</span>
                  <p className="flex-1 text-sm font-medium text-slate-700">{r.titleKo}</p>
                  <ChevronRight size={14} className="text-slate-300" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
