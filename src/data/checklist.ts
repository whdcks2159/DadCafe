import type { ChecklistCategory } from '@/types';

export const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    id: 'cat-health-pre',
    titleKo: '건강 준비',
    stage: 'pre-pregnancy',
    items: [
      { id: 'c1', textKo: '금연 시작 (또는 금연 계획 세우기)', priority: 'high' },
      { id: 'c2', textKo: '건강검진 받기 (부부 함께)', priority: 'high' },
      { id: 'c3', textKo: '엽산 보충제 복용 시작', priority: 'medium', noteKo: '임신 전 3개월부터 복용 권장' },
      { id: 'c4', textKo: '음주량 줄이기', priority: 'medium' },
      { id: 'c5', textKo: '규칙적인 운동 시작', priority: 'low' },
    ],
  },
  {
    id: 'cat-finance-pre',
    titleKo: '재정 준비',
    stage: 'pre-pregnancy',
    items: [
      { id: 'c6', textKo: '출산 예상 비용 파악하기', priority: 'high' },
      { id: 'c7', textKo: '육아 예산 계획 세우기', priority: 'high' },
      { id: 'c8', textKo: '생명보험 / 실손보험 점검', priority: 'medium' },
      { id: 'c9', textKo: '정부 지원금 제도 알아보기', priority: 'medium', noteKo: '아동수당, 영아수당, 첫만남이용권 등' },
    ],
  },
  {
    id: 'cat-pregnancy-daily',
    titleKo: '임신 중 일상 지원',
    stage: 'pregnant',
    items: [
      { id: 'p1', textKo: '산부인과 첫 검진 동행하기', priority: 'high' },
      { id: 'p2', textKo: '출산 예정일 달력에 표시', priority: 'high' },
      { id: 'p3', textKo: '입덧 심한 시기 — 요리 및 냄새 주의', priority: 'high' },
      { id: 'p4', textKo: '가사 분담 재조정하기', priority: 'medium' },
      { id: 'p5', textKo: '산전 교육 프로그램 등록하기', priority: 'medium' },
      { id: 'p6', textKo: '태동 느끼며 태교 참여하기', priority: 'medium' },
    ],
  },
  {
    id: 'cat-hospital-bag',
    titleKo: '입원 준비 (36주~)',
    stage: 'pregnant',
    items: [
      { id: 'p7', textKo: '산모 입원 가방 싸기', priority: 'high', noteKo: '수유 브라, 속옷, 슬리퍼, 세면도구' },
      { id: 'p8', textKo: '신생아 옷 준비 (50호 2~3벌)', priority: 'high' },
      { id: 'p9', textKo: '신분증, 산모수첩, 보험카드 준비', priority: 'high' },
      { id: 'p10', textKo: '병원 가는 경로 및 주차 확인', priority: 'high' },
      { id: 'p11', textKo: '산후조리원 최종 예약 확인', priority: 'high' },
      { id: 'p12', textKo: '배우자 출산휴가 신청 준비', priority: 'medium' },
    ],
  },
  {
    id: 'cat-admin-newborn',
    titleKo: '출생 후 행정 처리',
    stage: 'newborn',
    items: [
      { id: 'n1', textKo: '출생신고 (출생 후 1개월 이내)', priority: 'high', noteKo: '주민센터 또는 정부24 온라인' },
      { id: 'n2', textKo: '건강보험 피부양자 등록', priority: 'high' },
      { id: 'n3', textKo: '첫만남이용권 신청 (200만원)', priority: 'high' },
      { id: 'n4', textKo: '아동수당 신청 (월 10만원)', priority: 'high' },
      { id: 'n5', textKo: '영아수당 신청 (월 30만원)', priority: 'high' },
      { id: 'n6', textKo: '배우자 출산휴가 사용', priority: 'high' },
    ],
  },
  {
    id: 'cat-newborn-care',
    titleKo: '신생아 돌봄 익히기',
    stage: 'newborn',
    items: [
      { id: 'n7', textKo: '기저귀 교체법 숙지', priority: 'high' },
      { id: 'n8', textKo: '신생아 목욕 순서 숙지', priority: 'high' },
      { id: 'n9', textKo: '배꼽 소독법 익히기', priority: 'high' },
      { id: 'n10', textKo: '분유 타는 법 / 젖병 소독법 익히기', priority: 'medium' },
      { id: 'n11', textKo: '아기 황달 증상 알아두기', priority: 'medium' },
      { id: 'n12', textKo: '5S 달래기 기법 연습하기', priority: 'medium', noteKo: 'Swaddle, Side, Shush, Swing, Suck' },
    ],
  },
  {
    id: 'cat-vaccinations',
    titleKo: '예방접종 일정 관리',
    stage: 'toddler',
    items: [
      { id: 't1', textKo: 'BCG (결핵) — 생후 4주 이내', priority: 'high' },
      { id: 't2', textKo: 'B형 간염 3차 — 생후 6개월', priority: 'high' },
      { id: 't3', textKo: 'DTaP (디프테리아/파상풍/백일해) 3차 완료', priority: 'high' },
      { id: 't4', textKo: 'MMR (홍역/볼거리/풍진) — 생후 12~15개월', priority: 'high' },
      { id: 't5', textKo: '독감 예방접종 매년', priority: 'medium' },
    ],
  },
  {
    id: 'cat-development-check',
    titleKo: '발달 체크 및 검진',
    stage: 'toddler',
    items: [
      { id: 't6', textKo: '영유아 건강검진 6개월', priority: 'high' },
      { id: 't7', textKo: '영유아 건강검진 12개월', priority: 'high' },
      { id: 't8', textKo: '영유아 건강검진 18개월', priority: 'high' },
      { id: 't9', textKo: '영유아 건강검진 24개월', priority: 'high' },
      { id: 't10', textKo: '이유식 시작 준비 (6개월)', priority: 'medium' },
      { id: 't11', textKo: '어린이집 대기 신청', priority: 'medium', noteKo: '원하는 어린이집에 미리 대기 등록' },
    ],
  },
];
