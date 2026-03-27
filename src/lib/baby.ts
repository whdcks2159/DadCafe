import type { Baby, StageSlug } from '@/types';

/* ── 기간별 포커스 타입 ────────────────────────────────────────── */

export interface FocusPoint {
  text: string;
}

export interface PhaseInfo {
  phase: string;
  weekLabel: string;
  gradient: string;
  focusPoints: FocusPoint[];
}

/* ── 날짜 계산 ───────────────────────────────────────────────── */

/** 오늘 기준 예정일까지 남은 일수 (음수 = 예정일 초과) */
export function getDaysUntilDue(dueDate: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return Math.ceil((due.getTime() - today.getTime()) / 86400000);
}

/** 오늘 기준 출생 후 일수 */
export function getDaysSinceBirth(birthDate: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const birth = new Date(birthDate);
  birth.setHours(0, 0, 0, 0);
  return Math.floor((today.getTime() - birth.getTime()) / 86400000);
}

/* ── D-day 레이블 ─────────────────────────────────────────────── */

export function getBabyAgeLabel(baby: Baby): string {
  if (baby.status === 'pregnant' && baby.dueDate) {
    const d = getDaysUntilDue(baby.dueDate);
    if (d > 0)  return `출산까지 D-${d}`;
    if (d === 0) return '출산 예정일 당일';
    return `예정일 D+${Math.abs(d)}`;
  }
  if (baby.status === 'born' && baby.birthDate) {
    const days = getDaysSinceBirth(baby.birthDate);
    if (days === 0)   return '오늘 태어났어요';
    if (days === 100) return '생후 100일';
    const months = Math.floor(days / 30);
    if (months >= 2)  return `생후 ${months}개월`;
    return `태어난 지 ${days}일`;
  }
  return '';
}

/* ── 상황별 메시지 ────────────────────────────────────────────── */

export function getBabyMessage(baby: Baby): string {
  if (baby.status === 'pregnant' && baby.dueDate) {
    const d = getDaysUntilDue(baby.dueDate);
    if (d > 100) return '지금부터 천천히 준비해볼게요.';
    if (d > 60)  return '산후조리원 예약을 알아볼 시기예요.';
    if (d > 30)  return '출산이 한 달 앞이에요. 입원 가방을 챙겨보세요.';
    if (d > 14)  return '마지막 준비를 꼼꼼히 확인해보세요.';
    if (d > 7)   return '언제든 출발할 준비를 해두세요.';
    if (d > 0)   return '거의 다 왔어요. 침착하게, 함께해요.';
    if (d === 0) return '오늘이 예정일이에요! 응원할게요.';
    return '예정일이 지났어요. 곧 만날 수 있을 거예요.';
  }
  if (baby.status === 'born' && baby.birthDate) {
    const days = getDaysSinceBirth(baby.birthDate);
    if (days === 0)   return '오늘 태어났어요. 축하해요!';
    if (days === 100) return '100일을 축하해요! 정말 수고하셨어요.';
    if (days < 7)     return '갓 태어났어요. 옆에 있어 주는 것만으로 충분해요.';
    if (days < 30)    return '황달과 배꼽 소독에 신경 써주세요.';
    if (days < 100)   return '수면 패턴이 조금씩 잡혀가는 시기예요.';
    if (days < 180)   return '이유식 준비를 슬슬 알아볼 때예요.';
    if (days < 365)   return '무럭무럭 자라고 있어요. 잘 하고 계세요.';
    if (days < 730)   return '돌이 지났네요. 정말 수고하셨어요.';
    return '함께 성장하는 매일이 소중해요.';
  }
  return '오늘도 함께 좋은 하루 보내세요.';
}

/* ── 단계 추론 (콘텐츠 연결용) ───────────────────────────────── */

export function getBabyStage(baby: Baby): StageSlug {
  if (baby.status === 'pregnant') return 'pregnant';
  if (!baby.birthDate) return 'newborn';
  const days = getDaysSinceBirth(baby.birthDate);
  if (days < 100) return 'newborn';
  return 'toddler';
}

/* ── 표시 이름 ────────────────────────────────────────────────── */

export function getBabyDisplayName(baby: Baby): string {
  return baby.name?.trim() || '우리 아기';
}

/* ── 특별일 체크 ─────────────────────────────────────────────── */

export function isMilestoneDay(baby: Baby): string | null {
  if (baby.status !== 'born' || !baby.birthDate) return null;
  const days = getDaysSinceBirth(baby.birthDate);
  if (days === 0)   return '탄생';
  if (days === 100) return '100일';
  if (days === 365) return '돌';
  if (days === 730) return '두 돌';
  return null;
}

/* ── 기간별 포커스 포인트 ─────────────────────────────────────── */

export function getPhaseInfo(baby: Baby): PhaseInfo {
  if (baby.status === 'pregnant' && baby.dueDate) {
    const d = getDaysUntilDue(baby.dueDate);
    const week = Math.max(1, Math.round((280 - Math.max(d, 0)) / 7));

    if (d > 196) {
      return {
        phase: '임신 초기',
        weekLabel: `${week}주차`,
        gradient: 'from-emerald-400 via-teal-400 to-green-300',
        focusPoints: [
          { text: '첫 산부인과 검진 동행' },
          { text: '엽산 챙겨주기' },
          { text: '입덧 도움법 익히기' },
        ],
      };
    }
    if (d > 91) {
      return {
        phase: '임신 중기',
        weekLabel: `${week}주차`,
        gradient: 'from-amber-400 via-orange-300 to-yellow-300',
        focusPoints: [
          { text: '산후조리원 예약하기' },
          { text: '태동 함께 느끼기' },
          { text: '출산휴가 HR 문의' },
        ],
      };
    }
    if (d >= 0) {
      return {
        phase: '임신 후기',
        weekLabel: `${week}주차`,
        gradient: 'from-blue-500 via-indigo-400 to-blue-400',
        focusPoints: [
          { text: '입원 가방 미리 싸기' },
          { text: '병원 경로 미리 확인' },
          { text: '분만 동행 준비하기' },
        ],
      };
    }
    return {
      phase: '출산 임박',
      weekLabel: '예정일 초과',
      gradient: 'from-blue-500 via-indigo-400 to-blue-400',
      focusPoints: [
        { text: '병원 연락 유지' },
        { text: '아내 곁에 있어 주기' },
        { text: '긴급 연락망 점검' },
      ],
    };
  }

  if (baby.status === 'born' && baby.birthDate) {
    const days = getDaysSinceBirth(baby.birthDate);
    if (days < 14) {
      return {
        phase: '신생아',
        weekLabel: `생후 ${days}일`,
        gradient: 'from-rose-400 via-pink-400 to-fuchsia-300',
        focusPoints: [
          { text: '황달·배꼽 상태 확인' },
          { text: '야간 수유 교대하기' },
          { text: '아내 심리 상태 체크' },
        ],
      };
    }
    if (days < 30) {
      return {
        phase: '신생아',
        weekLabel: `생후 ${days}일`,
        gradient: 'from-rose-400 via-pink-400 to-fuchsia-300',
        focusPoints: [
          { text: '야간 수유 교대 담당' },
          { text: '목욕·기저귀 담당하기' },
          { text: '산후우울 징후 체크' },
        ],
      };
    }
    if (days < 100) {
      return {
        phase: '신생아',
        weekLabel: `생후 ${Math.floor(days / 30) + 1}개월`,
        gradient: 'from-sky-400 via-blue-400 to-indigo-400',
        focusPoints: [
          { text: '수면 루틴 만들기' },
          { text: '수유 패턴 파악하기' },
          { text: '산후우울 지속 여부 확인' },
        ],
      };
    }
    if (days < 180) {
      return {
        phase: '100일 이후',
        weekLabel: `생후 ${Math.floor(days / 30)}개월`,
        gradient: 'from-violet-400 via-purple-400 to-pink-400',
        focusPoints: [
          { text: '이유식 준비 알아보기' },
          { text: '영유아 검진 일정 확인' },
          { text: '월령별 놀이 참여하기' },
        ],
      };
    }
    if (days < 365) {
      return {
        phase: '영아기',
        weekLabel: `생후 ${Math.floor(days / 30)}개월`,
        gradient: 'from-violet-400 via-purple-400 to-pink-400',
        focusPoints: [
          { text: '이유식 단계 올리기' },
          { text: '걷기 준비 지켜보기' },
          { text: '12개월 검진 준비' },
        ],
      };
    }
    return {
      phase: '영아기',
      weekLabel: `생후 ${Math.floor(days / 30)}개월`,
      gradient: 'from-violet-400 via-purple-400 to-pink-400',
      focusPoints: [
        { text: '말 걸기·그림책 읽기' },
        { text: '활동적인 놀이 함께' },
        { text: '영유아 검진 일정 확인' },
      ],
    };
  }

  return {
    phase: '육아 중',
    weekLabel: '',
    gradient: 'from-violet-400 via-purple-400 to-pink-400',
    focusPoints: [{ text: '오늘도 함께해요' }],
  };
}
