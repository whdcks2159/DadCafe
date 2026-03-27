import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { STAGES } from '@/data/stages';
import { ChevronRight, Clock, Lightbulb, Heart, Bot, Sparkles } from 'lucide-react';

const EXTRA_GUIDES = [
  {
    href: '/situations',
    icon: Lightbulb,
    iconBg: 'bg-accent-500',
    cardBg: 'bg-accent-50',
    border: 'border-accent-100',
    title: '상황별 가이드',
    desc: '입덧, 밤 울음, 산후우울증 등 60가지 상황 대처법',
    badge: null,
  },
  {
    href: '/tips',
    icon: Sparkles,
    iconBg: 'bg-amber-400',
    cardBg: 'bg-amber-50',
    border: 'border-amber-100',
    title: '임신 꿀팁',
    desc: '바로 써먹는 아빠 실전 가이드 16선',
    badge: null,
  },
  {
    href: '/fertility',
    icon: Heart,
    iconBg: 'bg-rose-400',
    cardBg: 'bg-rose-50',
    border: 'border-rose-100',
    title: '난임 가이드',
    desc: '검사부터 치료까지, 남편이 도울 수 있어요',
    badge: null,
  },
  {
    href: '/ai-guide',
    icon: Bot,
    iconBg: 'bg-brand-400',
    cardBg: 'bg-brand-50',
    border: 'border-brand-100',
    title: 'AI 맞춤 플랜',
    desc: '내 상황을 말하면 AI가 맞춤 가이드를 드려요',
    badge: 'AI',
  },
];

export default function GuidePage() {
  return (
    <>
      <TopHeader title="가이드" />

      <div className="px-4 py-5 space-y-6">

        {/* ── 단계별 가이드 ── */}
        <section>
          <p className="text-xs font-bold text-neutral-400 tracking-wide mb-3">단계별 가이드</p>
          <div className="space-y-3">
            {STAGES.map((stage, i) => (
              <Link
                key={stage.slug}
                href={`/guide/${stage.slug}`}
                className={`flex items-center gap-4 rounded-2xl border-2 p-4 ${stage.bgClass} hover:scale-[1.01] transition-transform active:scale-[0.99]`}
              >
                <img src={stage.emoji} alt={stage.labelKo} className="w-10 h-10 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 ${stage.colorClass}`}>
                      STEP {i + 1}
                    </span>
                  </div>
                  <p className="font-black text-slate-800 text-sm">{stage.labelKo}</p>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                    <Clock size={10} />
                    가이드 {stage.topics.length}개
                  </p>
                </div>
                <ChevronRight size={18} className="text-slate-400 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── 더 많은 가이드 ── */}
        <section>
          <p className="text-xs font-bold text-neutral-400 tracking-wide mb-3">더 많은 가이드</p>
          <div className="space-y-2.5">
            {EXTRA_GUIDES.map(({ href, icon: Icon, iconBg, cardBg, border, title, desc, badge }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3.5 ${cardBg} border ${border} rounded-2xl px-4 py-3.5 hover:shadow-card transition-all active:scale-[0.98]`}
              >
                <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-neutral-900">{title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{desc}</p>
                </div>
                {badge ? (
                  <span className="text-[9px] font-black bg-brand-500 text-white px-1.5 py-0.5 rounded-full flex-shrink-0">{badge}</span>
                ) : (
                  <ChevronRight size={16} className="text-neutral-300 flex-shrink-0" />
                )}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
