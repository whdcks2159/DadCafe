export interface PregnancyWeekInfo {
  week: number;
  fruit: string;
  sizeLabel: string;
  babyTip: string;
  dadTip: string;
  checklistItems: { id: string; text: string }[];
}

export const PREGNANCY_WEEKS: PregnancyWeekInfo[] = [
  {
    week: 4,
    fruit: '양귀비씨',
    sizeLabel: '양귀비씨만해요',
    babyTip: '심장이 뛰기 시작했어요',
    dadTip: '임신 사실을 알았다면, 함께 축하해주세요',
    checklistItems: [
      { id: 'w4-1', text: '산부인과 첫 예약 잡기' },
      { id: 'w4-2', text: '엽산 챙겨주기' },
      { id: 'w4-3', text: '카페인 줄이도록 도와주기' },
    ],
  },
  {
    week: 5,
    fruit: '참깨',
    sizeLabel: '참깨만해요',
    babyTip: '뇌와 척수가 만들어지고 있어요',
    dadTip: '입덧이 시작될 수 있어요. 냄새 나는 음식에 조심하세요',
    checklistItems: [
      { id: 'w5-1', text: '입덧 음식 알아보기 (생강차, 레몬)' },
      { id: 'w5-2', text: '담배 / 술 완전히 끊기' },
    ],
  },
  {
    week: 6,
    fruit: '완두콩',
    sizeLabel: '완두콩만해요',
    babyTip: '심장 박동이 초음파로 들려요',
    dadTip: '첫 초음파 같이 가서 심장 소리 들어보세요',
    checklistItems: [
      { id: 'w6-1', text: '첫 초음파 예약 확인' },
      { id: 'w6-2', text: '초음파 사진 보관할 곳 준비' },
    ],
  },
  {
    week: 7,
    fruit: '블루베리',
    sizeLabel: '블루베리만해요',
    babyTip: '팔다리 싹이 자라기 시작했어요',
    dadTip: '입덧이 가장 심한 시기예요. 집안일을 더 도와주세요',
    checklistItems: [
      { id: 'w7-1', text: '집안일 분담 다시 정하기' },
      { id: 'w7-2', text: '먹고 싶은 음식 물어보기' },
    ],
  },
  {
    week: 8,
    fruit: '라즈베리',
    sizeLabel: '라즈베리만해요',
    babyTip: '손가락과 발가락이 생겨요',
    dadTip: '산전 검사 결과를 함께 확인하세요',
    checklistItems: [
      { id: 'w8-1', text: '산전 기본 검사 예약' },
      { id: 'w8-2', text: '모자보건수첩 받기' },
      { id: 'w8-3', text: '직장에 임신 사실 언제 알릴지 상의' },
    ],
  },
  {
    week: 9,
    fruit: '올리브',
    sizeLabel: '올리브만해요',
    babyTip: '눈꺼풀이 형성되고 있어요',
    dadTip: '피로감이 극심한 시기예요. 아내 쉬게 해주세요',
    checklistItems: [
      { id: 'w9-1', text: '수면 환경 개선해주기' },
      { id: 'w9-2', text: '영양제 챙겨주기 (철분, 엽산)' },
    ],
  },
  {
    week: 10,
    fruit: '딸기',
    sizeLabel: '딸기만해요',
    babyTip: '손톱이 자라기 시작해요',
    dadTip: '태명을 지어보는 건 어때요?',
    checklistItems: [
      { id: 'w10-1', text: '태명 정하기' },
      { id: 'w10-2', text: 'NT 검사 일정 확인 (11~13주)' },
    ],
  },
  {
    week: 11,
    fruit: '무화과',
    sizeLabel: '무화과만해요',
    babyTip: '생식기관이 발달하기 시작해요',
    dadTip: 'NT 검사 준비하세요. 목덜미 투명대 검사예요',
    checklistItems: [
      { id: 'w11-1', text: 'NT 검사 예약 확인' },
      { id: 'w11-2', text: '기형아 검사 정보 알아보기' },
    ],
  },
  {
    week: 12,
    fruit: '레몬',
    sizeLabel: '레몬만해요',
    babyTip: '성별이 결정됐어요 (아직은 안 보여요)',
    dadTip: '1분기 마지막 주예요. 입덧이 곧 줄어들 거예요',
    checklistItems: [
      { id: 'w12-1', text: 'NT 검사 결과 확인' },
      { id: 'w12-2', text: '직장 임신 보고 (필요시)' },
      { id: 'w12-3', text: '임신 사실 가족에게 알리기' },
    ],
  },
  {
    week: 13,
    fruit: '복숭아',
    sizeLabel: '복숭아만해요',
    babyTip: '지문이 형성되기 시작해요',
    dadTip: '2분기 시작! 아내 컨디션이 좋아질 거예요',
    checklistItems: [
      { id: 'w13-1', text: '태교 방법 알아보기' },
      { id: 'w13-2', text: '산전 교육 일정 확인' },
    ],
  },
  {
    week: 14,
    fruit: '키위',
    sizeLabel: '키위만해요',
    babyTip: '표정을 짓기 시작해요',
    dadTip: '태아에게 말을 걸어보세요. 소리를 들을 수 있어요',
    checklistItems: [
      { id: 'w14-1', text: '매일 태담 시작해보기' },
      { id: 'w14-2', text: '산모 마사지 배우기' },
    ],
  },
  {
    week: 15,
    fruit: '사과',
    sizeLabel: '사과만해요',
    babyTip: '다리가 팔보다 길어지기 시작해요',
    dadTip: '쿼드 검사 시기예요 (15~20주)',
    checklistItems: [
      { id: 'w15-1', text: '쿼드 검사 예약' },
      { id: 'w15-2', text: '임산부 교통카드 발급 안내' },
    ],
  },
  {
    week: 16,
    fruit: '아보카도',
    sizeLabel: '아보카도만해요',
    babyTip: '태동을 처음 느낄 수 있는 시기예요',
    dadTip: '태동 느꼈냐고 물어봐 주세요. 함께 설레어해요',
    checklistItems: [
      { id: 'w16-1', text: '쿼드 검사 결과 확인' },
      { id: 'w16-2', text: '배냇저고리 등 준비 목록 만들기' },
      { id: 'w16-3', text: '태동 일지 시작하기' },
    ],
  },
  {
    week: 17,
    fruit: '무',
    sizeLabel: '작은 무만해요',
    babyTip: '지방이 쌓이기 시작해요',
    dadTip: '체중이 늘어나는 시기예요. 함께 가벼운 산책 어때요?',
    checklistItems: [
      { id: 'w17-1', text: '임산부 전용 운동 알아보기' },
      { id: 'w17-2', text: '출산 병원 비교 시작하기' },
    ],
  },
  {
    week: 18,
    fruit: '피망',
    sizeLabel: '피망만해요',
    babyTip: '뼈가 단단해지고 있어요',
    dadTip: '정밀초음파 예약을 확인하세요 (18~20주)',
    checklistItems: [
      { id: 'w18-1', text: '정밀초음파 예약 확인' },
      { id: 'w18-2', text: '아이방 인테리어 구상 시작' },
    ],
  },
  {
    week: 19,
    fruit: '망고',
    sizeLabel: '망고만해요',
    babyTip: '감각기관이 빠르게 발달해요',
    dadTip: '음악 태교를 시작해보세요. 클래식, 자장가 다 좋아요',
    checklistItems: [
      { id: 'w19-1', text: '태교 음악 플레이리스트 만들기' },
      { id: 'w19-2', text: '출산 병원 투어 예약' },
    ],
  },
  {
    week: 20,
    fruit: '바나나',
    sizeLabel: '바나나만해요',
    babyTip: '청력이 발달해 목소리를 들을 수 있어요',
    dadTip: '정밀초음파에서 성별을 알 수 있어요 (원하면)',
    checklistItems: [
      { id: 'w20-1', text: '정밀초음파 결과 확인' },
      { id: 'w20-2', text: '이름 후보 리스트 만들기' },
      { id: 'w20-3', text: '산모 배 사진 찍어주기 (기념)' },
    ],
  },
  {
    week: 21,
    fruit: '당근',
    sizeLabel: '당근만해요',
    babyTip: '눈썹과 속눈썹이 생겨요',
    dadTip: '출산 준비 교실에 등록해보세요',
    checklistItems: [
      { id: 'w21-1', text: '출산 준비 교실 등록' },
      { id: 'w21-2', text: '임신 중기 검진 예약' },
    ],
  },
  {
    week: 22,
    fruit: '파프리카',
    sizeLabel: '파프리카만해요',
    babyTip: '잠자고 깨는 패턴이 생겨요',
    dadTip: '배가 불러와요. 임산부 전용 쿠션 준비해주세요',
    checklistItems: [
      { id: 'w22-1', text: '임산부 쿠션 구매' },
      { id: 'w22-2', text: '출산 비용 계획 세우기' },
    ],
  },
  {
    week: 23,
    fruit: '포도송이',
    sizeLabel: '포도송이만해요',
    babyTip: '폐가 발달을 시작해요',
    dadTip: '임신성 당뇨 검사 시기가 다가와요 (24~28주)',
    checklistItems: [
      { id: 'w23-1', text: '임신성 당뇨 검사 일정 확인' },
      { id: 'w23-2', text: '식단 관리 도와주기' },
    ],
  },
  {
    week: 24,
    fruit: '옥수수',
    sizeLabel: '옥수수만해요',
    babyTip: '눈꺼풀이 열리기 시작해요',
    dadTip: '조산 위험 신호를 알아두세요',
    checklistItems: [
      { id: 'w24-1', text: '임신성 당뇨 검사 (50g 검사)' },
      { id: 'w24-2', text: '조산 증상 숙지' },
      { id: 'w24-3', text: '산후조리원 예약 시작' },
    ],
  },
  {
    week: 25,
    fruit: '순무',
    sizeLabel: '순무만해요',
    babyTip: '머리카락이 자라기 시작해요',
    dadTip: '산후조리원 투어를 해보세요',
    checklistItems: [
      { id: 'w25-1', text: '산후조리원 2~3곳 비교' },
      { id: 'w25-2', text: '육아 용품 구매 목록 작성' },
    ],
  },
  {
    week: 26,
    fruit: '상추 한포기',
    sizeLabel: '상추 한포기만해요',
    babyTip: '눈을 뜨고 감을 수 있어요',
    dadTip: '부모 교육 프로그램에 함께 참여해보세요',
    checklistItems: [
      { id: 'w26-1', text: '보건소 임산부 교육 등록' },
      { id: 'w26-2', text: '출산 후 육아휴직 계획 검토' },
    ],
  },
  {
    week: 27,
    fruit: '콜리플라워',
    sizeLabel: '콜리플라워만해요',
    babyTip: '뇌가 빠르게 성장하는 시기예요',
    dadTip: '2분기 막바지예요. 여행 가능한 마지막 시기예요',
    checklistItems: [
      { id: 'w27-1', text: '태교여행 계획 (원하면)' },
      { id: 'w27-2', text: '임신 기념 사진 촬영 (원하면)' },
    ],
  },
  {
    week: 28,
    fruit: '가지',
    sizeLabel: '가지만해요',
    babyTip: '뇌 주름이 생기기 시작해요',
    dadTip: '3분기 시작! 배가 많이 무거워져요',
    checklistItems: [
      { id: 'w28-1', text: '산후조리원 계약 완료' },
      { id: 'w28-2', text: '분만 방법 상의 (자연분만/제왕절개)' },
      { id: 'w28-3', text: '출산 가방 준비 시작' },
    ],
  },
  {
    week: 29,
    fruit: '버터넛 호박',
    sizeLabel: '작은 호박만해요',
    babyTip: '근육과 폐가 계속 성장해요',
    dadTip: '철분 부족이 오기 쉬워요. 철분제 챙겨주세요',
    checklistItems: [
      { id: 'w29-1', text: '철분제 충분히 챙겨주기' },
      { id: 'w29-2', text: '아기 이름 최종 결정 준비' },
    ],
  },
  {
    week: 30,
    fruit: '양배추',
    sizeLabel: '양배추만해요',
    babyTip: '눈이 빛에 반응하기 시작해요',
    dadTip: '분만 전 마지막 산전 검사들이 시작돼요',
    checklistItems: [
      { id: 'w30-1', text: '출산 병원 최종 결정' },
      { id: 'w30-2', text: '분만 계획서 작성 (원하면)' },
      { id: 'w30-3', text: '신생아 용품 구매' },
    ],
  },
  {
    week: 31,
    fruit: '코코넛',
    sizeLabel: '코코넛만해요',
    babyTip: '소화 시스템이 완성돼 가요',
    dadTip: '허리와 다리가 많이 무거워요. 마사지 해주세요',
    checklistItems: [
      { id: 'w31-1', text: '출산 가방 절반 이상 준비' },
      { id: 'w31-2', text: '아기방 가구 배치 완료' },
    ],
  },
  {
    week: 32,
    fruit: '파인애플',
    sizeLabel: '파인애플만해요',
    babyTip: '뒤집기 연습을 시작해요',
    dadTip: '2주마다 검진을 받아야 해요. 일정 관리해주세요',
    checklistItems: [
      { id: 'w32-1', text: '32주 정밀초음파' },
      { id: 'w32-2', text: '출산 가방 완성' },
      { id: 'w32-3', text: '모유수유 정보 공부' },
    ],
  },
  {
    week: 33,
    fruit: '파인애플',
    sizeLabel: '파인애플만해요',
    babyTip: '두뇌 발달이 폭발적으로 이루어져요',
    dadTip: '조기 출산 징후를 꼭 알아두세요',
    checklistItems: [
      { id: 'w33-1', text: '응급 연락처 정리' },
      { id: 'w33-2', text: '병원 가는 방법 미리 확인' },
    ],
  },
  {
    week: 34,
    fruit: '멜론',
    sizeLabel: '멜론만해요',
    babyTip: '면역 시스템이 발달해요',
    dadTip: '출산 준비가 거의 끝났어야 해요. 체크해보세요',
    checklistItems: [
      { id: 'w34-1', text: '신생아 카시트 설치 확인' },
      { id: 'w34-2', text: '출산 후 도움 줄 가족 연락' },
      { id: 'w34-3', text: '긴급 연락망 완성' },
    ],
  },
  {
    week: 35,
    fruit: '멜론',
    sizeLabel: '멜론만해요',
    babyTip: '신장이 완전히 발달해요',
    dadTip: '매주 검진이에요. 빠짐없이 함께해주세요',
    checklistItems: [
      { id: 'w35-1', text: '육아휴직 신청서 제출' },
      { id: 'w35-2', text: '출산 직후 해야 할 일 목록 작성' },
    ],
  },
  {
    week: 36,
    fruit: '파파야',
    sizeLabel: '파파야만해요',
    babyTip: '머리가 골반 쪽으로 내려오기 시작해요',
    dadTip: '이제 언제든 나올 수 있어요. 항상 연락 가능하게!',
    checklistItems: [
      { id: 'w36-1', text: '출산 가방 차에 실어두기' },
      { id: 'w36-2', text: '산후조리원 최종 확인' },
      { id: 'w36-3', text: '회사에 출산 임박 알리기' },
    ],
  },
  {
    week: 37,
    fruit: '수박 (소)',
    sizeLabel: '작은 수박만해요',
    babyTip: '지금 태어나도 건강하게 자랄 수 있어요',
    dadTip: '폰 충전 항상 100%. 연락 항상 받으세요',
    checklistItems: [
      { id: 'w37-1', text: '집에서 병원까지 루트 다시 확인' },
      { id: 'w37-2', text: '아기 이름 최종 결정' },
    ],
  },
  {
    week: 38,
    fruit: '수박',
    sizeLabel: '수박만해요',
    babyTip: '출산 준비가 거의 완료됐어요',
    dadTip: '진통 시작 기준 (10분 간격)을 꼭 기억하세요',
    checklistItems: [
      { id: 'w38-1', text: '진통 대응 방법 숙지' },
      { id: 'w38-2', text: '야밤 응급 상황 대비 계획 확인' },
    ],
  },
  {
    week: 39,
    fruit: '수박',
    sizeLabel: '수박만해요',
    babyTip: '지방이 쌓여 포동포동해지고 있어요',
    dadTip: '예정일이 코앞이에요. 아내 곁에 있어주세요',
    checklistItems: [
      { id: 'w39-1', text: '아내 곁에서 멀리 가지 않기' },
      { id: 'w39-2', text: '병원 동행 준비 완료' },
    ],
  },
  {
    week: 40,
    fruit: '수박',
    sizeLabel: '곧 만나요',
    babyTip: '드디어 세상에 나올 준비가 됐어요',
    dadTip: '곧 만나요. 많이 기대되죠?',
    checklistItems: [
      { id: 'w40-1', text: '마음의 준비 하기' },
      { id: 'w40-2', text: '아내에게 고맙다고 꼭 말해주기' },
    ],
  },
];

export function getWeekInfo(week: number): PregnancyWeekInfo {
  const found = PREGNANCY_WEEKS.find((w) => w.week === week);
  if (found) return found;
  // 데이터 없는 주차는 가장 가까운 주차 반환
  const sorted = [...PREGNANCY_WEEKS].sort(
    (a, b) => Math.abs(a.week - week) - Math.abs(b.week - week)
  );
  return { ...sorted[0], week };
}

export function calcCurrentWeek(dueDate: string): number {
  const due = new Date(dueDate);
  const today = new Date();
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const weeksLeft = (due.getTime() - today.getTime()) / msPerWeek;
  const week = Math.round(40 - weeksLeft);
  return Math.max(1, Math.min(42, week));
}
