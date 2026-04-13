import type { Metadata } from 'next';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: '파파플랜 소개',
  description: '파파플랜은 예비아빠·초보아빠를 위한 임신·출산·육아 가이드 플랫폼입니다. 급한 상황에서도 읽지 않고 바로 행동할 수 있도록 만들었습니다.',
  openGraph: {
    title: '파파플랜 소개 | 파파플랜',
    description: '예비아빠·초보아빠를 위한 임신·출산·육아 가이드 플랫폼',
  },
};

const VALUES = [
  {
    title: '행동 중심',
    desc: '긴 설명 대신 지금 당장 해야 할 일을 알려줍니다. 아이가 열이 날 때, 분유를 거부할 때, 배우자와 갈등이 생길 때 — 읽지 않아도 움직일 수 있도록 설계했습니다.',
  },
  {
    title: '아빠 전용',
    desc: '맘카페, 임신 커뮤니티에서 아빠는 늘 소외됩니다. 파파플랜은 아빠의 시선으로 쓰인 정보만을 다룹니다. 아빠가 실제로 마주치는 상황에 집중합니다.',
  },
  {
    title: '탭 2번 이내',
    desc: '원하는 정보까지의 뎁스를 최소화했습니다. 뎁스가 깊어질수록 아빠들은 포기합니다. 검색창 하나로 60여 개 상황 가이드에 즉시 접근할 수 있습니다.',
  },
  {
    title: '신뢰할 수 있는 정보',
    desc: '소아과 진료 지침, 보건복지부 자료, 국내외 육아 연구를 바탕으로 콘텐츠를 작성합니다. AI 요약은 참고용이며, 의학적 판단은 반드시 전문의와 상담하세요.',
  },
];

const FEATURES = [
  { title: '상황별 가이드',   desc: '신생아 황달·야간 칭얼거림·고열 등 60개+ 실전 상황 대응 가이드', href: '/situations' },
  { title: '단계별 가이드',   desc: '임신 준비부터 영아기까지 4단계 14토픽 체계적 가이드',          href: '/guide'      },
  { title: 'AI 맞춤 플랜',   desc: '아이 나이와 상황을 입력하면 Claude AI가 맞춤 플랜을 제안',    href: '/ai-guide'  },
  { title: '정부 지원 정보',  desc: '2026년 기준 출산지원금·육아휴직·국가예방접종 총정리',          href: '/gov-support'},
  { title: '10초 체크리스트', desc: '응급 상황에서 단계별 체크리스트로 빠르게 행동',                href: '/checklist' },
  { title: '육아일기',        desc: 'AI 요약과 함께 소중한 순간을 기록하고 돌아보기',               href: '/diary'     },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader title="파파플랜 소개" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-blue-50 to-pastel-lavender px-6 pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <img src="/icons/mainLogo.png" alt="파파플랜 로고" className="w-12 h-12" />
          <div>
            <p className="font-black text-xl text-neutral-900">파파플랜</p>
            <p className="text-xs text-neutral-400">PapaPlan · 아빠 육아 가이드</p>
          </div>
        </div>
        <h1 className="text-2xl font-black text-neutral-900 leading-tight mb-3">
          아빠를 위한<br />
          <span className="text-brand-500">육아 가이드</span>
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          파파플랜은 예비아빠와 초보아빠가 급한 상황에서도 읽지 않고 바로 행동할 수 있도록 설계된
          아빠 전용 육아 가이드 플랫폼입니다.
        </p>
      </section>

      {/* 미션 */}
      <section className="px-6 py-8 border-b border-slate-100">
        <p className="text-xs font-bold text-brand-400 tracking-widest mb-2">MISSION</p>
        <h2 className="text-lg font-black text-neutral-900 mb-4">
          "아빠가 자신 있게<br />육아에 참여할 수 있도록"
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed">
          육아는 엄마만의 몫이 아닙니다. 하지만 아빠를 위한 정보는 턱없이 부족합니다.
          파파플랜은 아빠가 실제로 마주치는 순간들을 모아, 언제 어디서든 즉시 꺼내 쓸 수 있는
          실전 가이드를 제공합니다. 권위적이지 않고, 아빠 옆에서 조용히 도와주는 친구 같은 플랫폼을 지향합니다.
        </p>
      </section>

      {/* 핵심 가치 */}
      <section className="px-6 py-8 border-b border-slate-100">
        <p className="text-xs font-bold text-brand-400 tracking-widest mb-4">CORE VALUES</p>
        <div className="space-y-5">
          {VALUES.map((v) => (
            <div key={v.title}>
              <p className="font-bold text-sm text-neutral-900 mb-1">{v.title}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="px-6 py-8 border-b border-slate-100">
        <p className="text-xs font-bold text-brand-400 tracking-widest mb-4">FEATURES</p>
        <div className="space-y-3">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="flex flex-col gap-0.5 p-4 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-all active:scale-[0.98]"
            >
              <p className="font-bold text-sm text-neutral-900">{f.title}</p>
              <p className="text-xs text-neutral-500">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 연락처 */}
      <section className="px-6 py-8 border-b border-slate-100">
        <p className="text-xs font-bold text-brand-400 tracking-widest mb-3">CONTACT</p>
        <p className="text-sm text-neutral-600 leading-relaxed mb-2">
          서비스 관련 문의, 콘텐츠 제안, 오류 신고는 아래 이메일로 연락해 주세요.
        </p>
        <a
          href="mailto:papaplan.kr@gmail.com"
          className="text-sm font-bold text-brand-500 hover:text-brand-600"
        >
          papaplan.kr@gmail.com
        </a>
      </section>

      {/* 법적 고지 */}
      <section className="px-6 py-8">
        <p className="text-xs font-bold text-brand-400 tracking-widest mb-3">LEGAL</p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
          파파플랜에서 제공하는 정보는 일반적인 육아 참고용으로 의학적 진단이나 처방을 대체하지 않습니다.
          건강 관련 문제는 반드시 전문 의료진과 상담하시기 바랍니다.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-brand-500 hover:text-brand-600 font-medium">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="text-sm text-brand-500 hover:text-brand-600 font-medium">
            이용약관
          </Link>
        </div>
      </section>
    </div>
  );
}
