import { notFound } from 'next/navigation';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import {
  GOV_SUPPORT_ITEMS,
  GOV_CATEGORY_LABELS,
  GOV_CATEGORY_COLORS,
  GOV_STAGE_LABELS,
} from '@/data/govSupport';
import { ExternalLink, CheckCircle2, AlertCircle, User } from 'lucide-react';

export async function generateStaticParams() {
  return GOV_SUPPORT_ITEMS.map((item) => ({ slug: item.slug }));
}

export default function GovSupportDetailPage({ params }: { params: { slug: string } }) {
  const item = GOV_SUPPORT_ITEMS.find((i) => i.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <TopHeader title="지원 상세" showBack />

      {/* 헤더 */}
      <div className="px-5 py-6 border-b border-slate-100">
        <div className="flex items-start gap-4 mb-3">
          <span className="text-4xl">{item.icon}</span>
          <div className="flex-1">
            <div className="flex flex-wrap gap-1.5 mb-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${GOV_CATEGORY_COLORS[item.category]}`}>
                {GOV_CATEGORY_LABELS[item.category]}
              </span>
              {item.stage.map((s) => (
                <span key={s} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  {GOV_STAGE_LABELS[s]}
                </span>
              ))}
              {item.isUrgent && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                  긴급
                </span>
              )}
            </div>
            <h1 className="font-black text-xl text-slate-800 leading-tight">{item.titleKo}</h1>
          </div>
        </div>

        {/* 지원 금액 강조 */}
        <div className="bg-blue-50 rounded-2xl px-4 py-3">
          <p className="text-xs text-blue-500 font-bold mb-0.5">지원 금액</p>
          <p className="font-black text-blue-700 text-lg">{item.amount}</p>
        </div>

        {item.deadline && (
          <div className="flex items-center gap-2 mt-3 bg-amber-50 rounded-xl px-3 py-2">
            <AlertCircle size={14} className="text-amber-500 flex-shrink-0" />
            <p className="text-xs text-amber-700 font-medium">신청 기한: {item.deadline}</p>
          </div>
        )}
      </div>

      <div className="px-5 py-5 space-y-6">

        {/* 남편 행동 가이드 — 최상단 노출 */}
        <section className="bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <User size={16} />
            <p className="font-black text-sm">남편이 지금 해야 할 행동</p>
          </div>
          <ul className="space-y-2">
            {item.dadActions.map((action, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm font-medium">{action}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 신청 플로우 */}
        <section>
          <h2 className="font-black text-slate-800 mb-3 text-sm">신청 흐름</h2>
          <div className="space-y-2">
            {item.flow.map((step, i) => (
              <div key={step.order} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">
                  {step.order}
                </div>
                <div className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium ${
                  i === item.flow.length - 1
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'bg-slate-50 text-slate-700'
                }`}>
                  {step.labelKo}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 대상 조건 */}
        <section>
          <h2 className="font-black text-slate-800 mb-2 text-sm">대상 조건</h2>
          <div className="bg-slate-50 rounded-xl px-4 py-3">
            <p className="text-sm text-slate-700 leading-relaxed">{item.targetKo}</p>
          </div>
        </section>

        {/* 신청 방법 */}
        <section>
          <h2 className="font-black text-slate-800 mb-2 text-sm">신청 방법</h2>
          <div className="bg-slate-50 rounded-xl px-4 py-3">
            <p className="text-sm text-slate-700 leading-relaxed">{item.howToKo}</p>
          </div>
        </section>

        {/* 준비 서류 */}
        <section>
          <h2 className="font-black text-slate-800 mb-2 text-sm">준비 서류</h2>
          <ul className="space-y-1.5">
            {item.documents.map((doc, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{doc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 신청 버튼 */}
        <Link
          href={item.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-black py-4 rounded-2xl text-base hover:bg-blue-700 transition-colors active:scale-[0.98]"
        >
          지금 신청하기 — {item.applyLabel}
          <ExternalLink size={16} />
        </Link>

        <p className="text-center text-xs text-slate-400">
          2026년 기준 정보입니다. 변경될 수 있으니 공식 사이트에서 확인하세요.
        </p>
      </div>
    </>
  );
}
