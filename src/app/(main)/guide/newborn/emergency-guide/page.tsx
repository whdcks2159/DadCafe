'use client';

import { useState } from 'react';
import TopHeader from '@/components/layout/TopHeader';
import { Phone, ChevronDown, ChevronUp, AlertTriangle, Thermometer, Wind, Activity } from 'lucide-react';

/* ─────────────────────────────────────────────
   데이터
───────────────────────────────────────────── */
const SCENARIOS = [
  {
    id: 'fever',
    icon: Thermometer,
    colorClass: 'text-orange-600',
    bgClass: 'bg-orange-50 border-orange-200',
    stepBg: 'bg-orange-100',
    badgeBg: 'bg-orange-500',
    titleKo: '열이 날 때',
    subtitleKo: '체온계로 측정 후 기준에 따라 즉시 판단',
    steps: [
      { label: '측정', text: '겨드랑이 체온계로 즉시 측정한다' },
      { label: '판단', text: '38도 이상 → 소아과 당일 방문\n39도 이상 or 3개월 미만 → 지금 즉시 응급실' },
      { label: '행동', text: '옷을 가볍게 벗기고 미지근한 물로 몸을 닦인다\n해열제는 의사 지시 없이 임의 투여 금지 (3개월 미만)' },
      { label: '주의', text: '경련이 같이 나타나면 즉시 119 신고' },
    ],
    hospitalCriteria: [
      '38도 이상 — 소아과 당일',
      '39도 이상 또는 3개월 미만 — 응급실 즉시',
      '열 + 경련 — 119 즉시',
      '열 + 축 늘어짐 / 반응 없음 — 119 즉시',
    ],
  },
  {
    id: 'sick',
    icon: Activity,
    colorClass: 'text-yellow-700',
    bgClass: 'bg-yellow-50 border-yellow-200',
    stepBg: 'bg-yellow-100',
    badgeBg: 'bg-yellow-500',
    titleKo: '구토·설사가 심할 때',
    subtitleKo: '탈수 징후를 빠르게 확인해라',
    steps: [
      { label: '확인', text: '소변량 감소, 입술 건조, 울어도 눈물 없음 → 탈수 의심' },
      { label: '수분', text: '모유 또는 분유를 소량씩 자주 먹인다\n억지로 먹이면 구토 악화 — 강요하지 말 것' },
      { label: '관찰', text: '구토가 6시간 이상 지속되거나 혈변·혈토 시 응급실' },
      { label: '기록', text: '구토·설사 횟수와 시간을 메모해 병원에 전달' },
    ],
    hospitalCriteria: [
      '구토 6시간 이상 지속',
      '혈변 또는 혈토 발생',
      '탈수 징후 (소변 없음, 축 늘어짐)',
      '6개월 미만 + 설사 반복',
    ],
  },
  {
    id: 'cry',
    icon: AlertTriangle,
    colorClass: 'text-blue-700',
    bgClass: 'bg-blue-50 border-blue-200',
    stepBg: 'bg-blue-100',
    badgeBg: 'bg-blue-500',
    titleKo: '계속 울 때',
    subtitleKo: '순서대로 원인을 확인하고 대응해라',
    steps: [
      { label: 'STEP 1', text: '기저귀 확인 → 젖었으면 즉시 교체' },
      { label: 'STEP 2', text: '배고픔 확인 → 마지막 수유 2시간 이상 지났으면 수유' },
      { label: 'STEP 3', text: '체온 확인 → 38도 이상이면 열 대응 루틴으로' },
      { label: 'STEP 4', text: '안아서 달래기 → 좌우로 흔들며 "쉬~" 소리 반복 (5S)' },
      { label: 'STEP 5', text: '2시간 이상 달래지지 않거나 날카로운 고음으로 울면 소아과' },
    ],
    hospitalCriteria: [
      '2시간 이상 달래지지 않음',
      '날카로운 고음으로 연속 울음',
      '열 + 울음 동반',
      '배가 딱딱하게 부풀어 있음',
    ],
  },
  {
    id: 'choke',
    icon: Wind,
    colorClass: 'text-red-700',
    bgClass: 'bg-red-50 border-red-200',
    stepBg: 'bg-red-100',
    badgeBg: 'bg-red-600',
    titleKo: '기도 막힘 (이물질)',
    subtitleKo: '숨을 못 쉬면 1초도 지체하지 마라',
    urgent: true,
    steps: [
      { label: 'STEP 1', text: '아기 상태 즉시 확인\n기침 가능 → 기침 유도, 강제 행동 금지' },
      { label: 'STEP 2', text: '아기를 엎드려 허벅지 위에 올리고\n등을 손바닥으로 5회 강하게 두드린다 (견갑골 사이)' },
      { label: 'STEP 3', text: '뒤집어 바로 눕히고\n가슴 중앙을 두 손가락으로 5회 압박한다' },
      { label: 'STEP 4', text: '입 안에 이물질이 보이면 손가락으로 꺼낸다\n보이지 않으면 손가락 넣지 말 것' },
      { label: 'STEP 5', text: '효과 없으면 즉시 119 신고\nSTEP 2~4 계속 반복하면서 119 안내 따른다' },
    ],
    hospitalCriteria: [
      '이물질 제거 후에도 호흡 이상',
      '파란 입술 (청색증)',
      '의식 저하 또는 축 늘어짐',
      '이물질 제거 안 됨',
    ],
  },
  {
    id: 'unconscious',
    icon: AlertTriangle,
    colorClass: 'text-red-800',
    bgClass: 'bg-red-50 border-red-300',
    stepBg: 'bg-red-100',
    badgeBg: 'bg-red-700',
    titleKo: '의식 없음 / 경련 / 호흡 이상',
    subtitleKo: '보이는 즉시 119 신고 — 지체하지 마라',
    urgent: true,
    steps: [
      { label: 'STEP 1', text: '즉시 119 신고\n"아기가 숨을 안 쉽니다 / 경련 중입니다" 명확히 말해라' },
      { label: 'STEP 2', text: '아기를 옆으로 눕혀라\n구토물이 기도를 막지 않게 기도 확보' },
      { label: 'STEP 3', text: '경련 중에는 입에 아무것도 넣지 마라\n혀를 깨문다고 손가락 넣으면 더 위험하다' },
      { label: 'STEP 4', text: '경련 시작 시간 측정 후 119에 전달\n몇 분 지속됐는지가 진단에 중요하다' },
      { label: 'STEP 5', text: '호흡이 없으면 119 지시에 따라 CPR 시작\n임의로 하지 말고 119 안내대로 진행' },
    ],
    hospitalCriteria: [
      '모든 경련 — 즉시 응급실',
      '의식 없음 — 즉시 119',
      '호흡 없음 또는 청색증 — 즉시 119',
      '경련 5분 이상 지속 — 즉시 119',
    ],
  },
];

/* ─────────────────────────────────────────────
   컴포넌트
───────────────────────────────────────────── */
function ScenarioCard({ scenario }: { scenario: typeof SCENARIOS[0] }) {
  const [open, setOpen] = useState(scenario.urgent ?? false);
  const Icon = scenario.icon;

  return (
    <div className={`rounded-2xl border-2 overflow-hidden ${scenario.bgClass}`}>
      {/* 헤더 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${scenario.stepBg}`}>
            <Icon size={18} className={scenario.colorClass} />
          </div>
          <div>
            <p className={`font-black text-base ${scenario.colorClass}`}>{scenario.titleKo}</p>
            <p className="text-xs text-neutral-500 mt-0.5">{scenario.subtitleKo}</p>
          </div>
        </div>
        {open ? (
          <ChevronUp size={18} className="text-neutral-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-neutral-400 flex-shrink-0" />
        )}
      </button>

      {/* 바디 */}
      {open && (
        <div className="px-4 pb-5 space-y-4">
          {/* STEP 목록 */}
          <div className="space-y-2">
            {scenario.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-white shadow-sm">
                <span
                  className={`${scenario.badgeBg} text-white text-[10px] font-black px-2 py-1 rounded-lg flex-shrink-0 leading-tight`}
                >
                  {step.label}
                </span>
                <p className="text-sm text-neutral-900 font-medium leading-snug whitespace-pre-line">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* 병원 가야 할 기준 */}
          <div className="bg-white rounded-xl p-3 border border-neutral-100">
            <p className="text-xs font-black text-neutral-500 mb-2 uppercase tracking-wide">병원·119 가야 할 기준</p>
            <ul className="space-y-1">
              {scenario.hospitalCriteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-black text-xs mt-0.5">!</span>
                  <p className="text-xs text-neutral-700">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function EmergencyGuidePage() {
  return (
    <>
      <TopHeader title="응급 대응 가이드" showBack />

      {/* 상단 배너 */}
      <div className="bg-red-600 px-5 py-5">
        <p className="text-white font-black text-lg leading-tight">
          당황하지 말고<br />순서대로 진행해라
        </p>
        <p className="text-red-200 text-xs mt-1">
          의식 없음 / 호흡 이상 → 즉시 119
        </p>

        {/* 119 버튼 */}
        <a
          href="tel:119"
          className="mt-4 flex items-center justify-center gap-2 bg-white text-red-600 font-black text-lg rounded-2xl py-3 active:scale-[0.97] transition-transform"
        >
          <Phone size={20} fill="currentColor" />
          119 지금 바로 전화
        </a>
      </div>

      {/* 안내 */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-xs text-neutral-400 text-center">
          아래 상황을 눌러 단계별 행동을 확인하세요
        </p>
      </div>

      {/* 시나리오 카드 목록 */}
      <div className="px-4 pb-8 space-y-3">
        {SCENARIOS.map((s) => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>

      {/* 하단 면책 고지 */}
      <div className="mx-4 mb-8 bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
        <p className="text-xs text-neutral-400 leading-relaxed">
          이 가이드는 일반 응급 참고 정보입니다. 응급 상황에서는 반드시 119 또는 가까운 응급실을 이용하세요. 의료 전문가의 진단과 치료를 대체하지 않습니다.
        </p>
      </div>
    </>
  );
}
