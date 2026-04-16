'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';
import {
  getBabyAgeLabel,
  getBabyDisplayName,
  isMilestoneDay,
  getPhaseInfo,
} from '@/lib/baby';
import type { Baby } from '@/types';
import {
  ChevronRight, Plus, Settings,
  Baby as BabyIcon, Heart, Star,
} from 'lucide-react';
import FruitIcon from '@/components/FruitIcon';
import { calcCurrentWeek, getWeekInfo } from '@/data/pregnancyWeeks';

/* ── 단일 아이 카드 ──────────────────────────────────────────── */
function SingleBabyCard({
  baby,
  isActive,
  showSwitch,
  onSwitch,
}: {
  baby: Baby;
  isActive: boolean;
  showSwitch: boolean;
  onSwitch: () => void;
}) {
  const ageLabel   = getBabyAgeLabel(baby);
  const name       = getBabyDisplayName(baby);
  const milestone  = isMilestoneDay(baby);
  const phaseInfo  = getPhaseInfo(baby);

  return (
    <div className={`bg-gradient-to-br ${phaseInfo.gradient} rounded-3xl p-5 text-white shadow-warm`}>

      {/* 헤더 */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-2">
          {/* 프로필 아바타 */}
          {baby.photoUrl ? (
            <img
              src={baby.photoUrl}
              alt={name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white/50 flex-shrink-0"
            />
          ) : (
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center ring-2 ring-white/20 flex-shrink-0">
              {baby.status === 'pregnant'
                ? <Heart size={15} className="text-white/80" />
                : <BabyIcon size={15} className="text-white/80" />}
            </div>
          )}
          <p className="text-sm font-bold text-white/90">{name}</p>

          {/* 상태 뱃지 */}
          <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded-full">
            {baby.status === 'pregnant' ? '배 속' : '출생'}
          </span>

          {milestone && (
            <span className="flex items-center gap-0.5 text-[10px] font-black bg-white/25 px-2 py-0.5 rounded-full">
              <Star size={9} className="text-white" />
              {milestone}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* 아이 여러 명일 때 활성화 전환 버튼 */}
          {showSwitch && !isActive && (
            <button
              onClick={onSwitch}
              className="text-[10px] font-black bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-xl transition-colors"
            >
              활성화
            </button>
          )}
          {showSwitch && isActive && (
            <span className="text-[10px] font-black bg-white/30 px-2.5 py-1 rounded-xl">
              현재
            </span>
          )}
          <Link
            href="/baby/manage"
            className="p-1.5 bg-white/15 rounded-xl hover:bg-white/25 transition-colors"
          >
            <Settings size={14} className="text-white" />
          </Link>
        </div>
      </div>

      {/* 기간 뱃지 + D-day */}
      <div className="relative z-10 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-black bg-white/25 px-2 py-0.5 rounded-full text-white">
            {phaseInfo.phase}
          </span>
          {phaseInfo.weekLabel && (
            <span className="text-[10px] text-white/60 font-medium">{phaseInfo.weekLabel}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-black leading-none">{ageLabel}</p>
          {baby.status === 'pregnant' && baby.dueDate && (() => {
            const week = calcCurrentWeek(baby.dueDate);
            const info = getWeekInfo(week);
            return (
              <div className="flex items-center gap-1.5 bg-white/20 rounded-2xl px-2.5 py-1">
                <FruitIcon fruit={info.fruit} size={28} />
                <div>
                  <p className="text-[10px] font-black text-white/90 leading-none">{info.fruit}</p>
                  <p className="text-[9px] text-white/60 leading-none mt-0.5">{info.sizeLabel}</p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* 포커스 포인트 */}
      <div className="relative z-10 mb-4 bg-white/15 rounded-2xl p-3">
        <p className="text-[10px] font-black text-white/60 mb-2 tracking-wide">지금 신경 쓸 것</p>
        <div className="space-y-1.5">
          {phaseInfo.focusPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
              <p className="text-xs text-white/90 font-semibold leading-snug">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ── 메인 컴포넌트 ────────────────────────────────────────────── */
export default function BabyCard() {
  const { user, loading: authLoading } = useAuth();
  const { babies, activeBaby, setActiveBaby, loading: babyLoading } = useBaby();

  if (authLoading || babyLoading) {
    return <div className="mx-5 mt-5 h-32 bg-warm-100 rounded-3xl animate-pulse" />;
  }

  if (!user) return <DefaultCard />;
  if (babies.length === 0) return <RegisterPromptCard />;

  /* 임신 중: 예정일 가장 가까운 1개만 */
  const pregnantBabies = babies.filter((b) => b.status === 'pregnant');
  const nearestPregnant = pregnantBabies.sort((a, b) => {
    const da = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
    const db = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    return da - db;
  })[0];

  /* 출생한 아이: 전부 표시 */
  const bornBabies = babies.filter((b) => b.status === 'born');

  const sorted = [
    ...(nearestPregnant ? [nearestPregnant] : []),
    ...bornBabies,
  ];

  const showSwitch = babies.length > 1;

  return (
    <div className="mx-5 mt-5 space-y-3">
      {sorted.map((baby) => (
        <SingleBabyCard
          key={baby.id}
          baby={baby}
          isActive={baby.id === activeBaby?.id}
          showSwitch={showSwitch}
          onSwitch={() => setActiveBaby(baby.id)}
        />
      ))}
    </div>
  );
}

/* ── 서브 컴포넌트 ─────────────────────────────────────────── */

function DefaultCard() {
  const DAILY_MESSAGES = [
    '오늘도 아이와 함께 따뜻한 하루 보내세요.',
    '작은 관심이 아이에게 큰 사랑이 됩니다.',
    '아빠의 한 마디가 아이의 평생 기억이 됩니다.',
    '오늘 아이를 꼭 안아줬나요?',
    '함께하는 시간이 가장 좋은 선물이에요.',
    '아빠도 처음이라 괜찮아요.',
    '오늘 하루도 정말 잘 하고 계세요.',
  ];
  const msg = DAILY_MESSAGES[new Date().getDay()];

  return (
    <div className="mx-5 mt-5">
      <div className="bg-white rounded-3xl border border-warm-200 shadow-card px-4 py-4 flex items-center gap-3">
        <div className="w-11 h-11 bg-pastel-pink rounded-2xl flex items-center justify-center flex-shrink-0 animate-float">
          <BabyIcon size={20} className="text-rose-400" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-rose-400 tracking-wide mb-0.5">오늘 우리 아기</p>
          <p className="text-sm text-neutral-700 font-medium leading-snug">{msg}</p>
        </div>
      </div>
    </div>
  );
}

function RegisterPromptCard() {
  return (
    <div className="mx-5 mt-5">
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl border-2 border-brand-100 p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 bg-brand-100 rounded-2xl flex items-center justify-center animate-float">
            <BabyIcon size={20} className="text-brand-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-brand-400 tracking-wide">오늘 우리 아기</p>
            <p className="text-sm font-bold text-neutral-800 mt-0.5">아이를 등록해보세요</p>
          </div>
        </div>
        <p className="text-xs text-neutral-500 leading-relaxed mb-4">
          출산 예정일이나 출생일을 등록하면<br />
          D-day와 맞춤 가이드를 바로 확인할 수 있어요.
        </p>
        <Link
          href="/baby/register"
          className="flex items-center justify-between bg-brand-500 text-white px-4 py-3 rounded-2xl font-bold text-sm hover:bg-brand-600 transition-colors active:scale-[0.98]"
        >
          <div className="flex items-center gap-2">
            <Plus size={16} />
            아이 등록하기
          </div>
          <ChevronRight size={16} className="text-white/70" />
        </Link>
      </div>
    </div>
  );
}
