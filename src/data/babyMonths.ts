export interface BabyMonthInfo {
  month: number;
  ageLabel: string;
  developmentTip: string;
  dadTip: string;
  milestoneHints: string[]; // 이 시기에 생길 수 있는 마일스톤
}

export const BABY_MONTHS: BabyMonthInfo[] = [
  {
    month: 0,
    ageLabel: '신생아',
    developmentTip: '세상 밖이 낯설어요. 품에 안아주세요',
    dadTip: '아빠 목소리를 기억해요. 많이 말 걸어주세요',
    milestoneHints: ['첫 모유/분유', '첫 목욕', '첫 외출'],
  },
  {
    month: 1,
    ageLabel: '1개월',
    developmentTip: '눈이 초점을 맞추기 시작해요',
    dadTip: '얼굴 가까이 대고 눈 마주쳐 보세요',
    milestoneHints: ['첫 미소 (반사)', '배꼽 탈락'],
  },
  {
    month: 2,
    ageLabel: '2개월',
    developmentTip: '사회적 미소가 나타나요',
    dadTip: '아기가 웃으면 맞장구 쳐주세요. 감정을 배워요',
    milestoneHints: ['첫 사회적 미소', '옹알이 시작'],
  },
  {
    month: 3,
    ageLabel: '3개월 (백일)',
    developmentTip: '머리를 잠깐 들 수 있어요',
    dadTip: '백일 기념 사진 찍어주세요. 소중한 순간이에요',
    milestoneHints: ['백일', '첫 웃음소리', '고개 가누기'],
  },
  {
    month: 4,
    ageLabel: '4개월',
    developmentTip: '손을 쥐었다 폈다 할 수 있어요',
    dadTip: '딸랑이나 장난감을 쥐어줘 보세요',
    milestoneHints: ['첫 뒤집기', '장난감 잡기'],
  },
  {
    month: 5,
    ageLabel: '5개월',
    developmentTip: '뒤집기를 시작해요',
    dadTip: '바닥에 자주 내려놓아 운동 기회를 주세요',
    milestoneHints: ['뒤집기 완성', '침 흘리기 시작'],
  },
  {
    month: 6,
    ageLabel: '6개월',
    developmentTip: '이유식을 시작할 시기예요',
    dadTip: '이유식 준비를 함께 해보세요. 아빠가 먹여줘도 좋아요',
    milestoneHints: ['첫 이유식', '혼자 앉기 연습'],
  },
  {
    month: 7,
    ageLabel: '7개월',
    developmentTip: '낯가림이 시작될 수 있어요',
    dadTip: '낯가림은 정상이에요. 천천히 친해지세요',
    milestoneHints: ['이앉기', '낯가림 시작'],
  },
  {
    month: 8,
    ageLabel: '8개월',
    developmentTip: '기기 시작할 수 있어요',
    dadTip: '집 안 안전 점검을 해주세요. 문턱, 모서리 확인',
    milestoneHints: ['첫 이빨', '기기 시작'],
  },
  {
    month: 9,
    ageLabel: '9개월',
    developmentTip: '잡고 일어서려고 해요',
    dadTip: '가구 모서리 보호대를 설치해주세요',
    milestoneHints: ['잡고 서기', '손가락 음식 먹기'],
  },
  {
    month: 10,
    ageLabel: '10개월',
    developmentTip: '서툴게 걸음마를 시도해요',
    dadTip: '걸음마 연습을 응원해주세요. 넘어져도 괜찮아요',
    milestoneHints: ['혼자 서기', '첫 말 흉내'],
  },
  {
    month: 11,
    ageLabel: '11개월',
    developmentTip: '첫 돌이 다가와요',
    dadTip: '돌잔치 준비를 시작하세요',
    milestoneHints: ['첫 걸음 직전', '컵으로 마시기'],
  },
  {
    month: 12,
    ageLabel: '첫 돌',
    developmentTip: '드디어 첫 돌이에요',
    dadTip: '1년을 함께해줘서 고마워요. 아빠도 잘 했어요',
    milestoneHints: ['첫 돌', '첫 걸음', '첫 단어'],
  },
  {
    month: 13,
    ageLabel: '13개월',
    developmentTip: '어휘가 빠르게 늘어나요',
    dadTip: '많이 말 걸어주세요. 언어 발달에 아빠가 중요해요',
    milestoneHints: ['두 단어 말하기', '계단 오르기'],
  },
  {
    month: 14,
    ageLabel: '14개월',
    developmentTip: '달리기를 시작해요',
    dadTip: '넘어져도 혼내지 마세요. 배워가는 과정이에요',
    milestoneHints: ['달리기', '숟가락 사용'],
  },
  {
    month: 15,
    ageLabel: '15개월',
    developmentTip: '고집이 생기기 시작해요',
    dadTip: '훈육보다 공감이 먼저예요',
    milestoneHints: ['첫 고집', '점프 시도'],
  },
  {
    month: 18,
    ageLabel: '18개월',
    developmentTip: '어휘가 20개 이상으로 늘어나요',
    dadTip: '책을 함께 읽어주세요. 언어 발달에 최고예요',
    milestoneHints: ['두 단어 연결', '블록 쌓기'],
  },
  {
    month: 24,
    ageLabel: '두 돌',
    developmentTip: '두 돌을 맞이했어요',
    dadTip: '두 돌 함께 기념해요. 아빠로서 2년 잘 해냈어요',
    milestoneHints: ['두 돌', '화장실 훈련 시작'],
  },
  {
    month: 36,
    ageLabel: '세 돌',
    developmentTip: '세 돌을 맞이했어요',
    dadTip: '아이가 많이 컸죠? 함께해줘서 고마워요',
    milestoneHints: ['세 돌', '유치원 입학 준비'],
  },
];

export function getMonthInfo(month: number): BabyMonthInfo {
  const found = BABY_MONTHS.find((m) => m.month === month);
  if (found) return found;
  // 가장 가까운 개월 데이터 반환
  const sorted = [...BABY_MONTHS].sort(
    (a, b) => Math.abs(a.month - month) - Math.abs(b.month - month)
  );
  return { ...sorted[0], month, ageLabel: `${month}개월` };
}

export function calcCurrentMonth(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  const msPerMonth = 30.44 * 24 * 60 * 60 * 1000;
  return Math.max(0, Math.floor((today.getTime() - birth.getTime()) / msPerMonth));
}

export const MILESTONE_PRESETS = [
  { id: 'first_smile', label: '첫 미소' },
  { id: 'first_laugh', label: '첫 웃음소리' },
  { id: 'first_rollover', label: '첫 뒤집기' },
  { id: 'first_sit', label: '혼자 앉기' },
  { id: 'first_crawl', label: '첫 기어다니기' },
  { id: 'first_stand', label: '혼자 서기' },
  { id: 'first_step', label: '첫 걸음' },
  { id: 'first_word', label: '첫 말' },
  { id: 'first_food', label: '첫 이유식' },
  { id: 'first_tooth', label: '첫 이빨' },
  { id: 'first_haircut', label: '첫 이발' },
  { id: 'baek_il', label: '백일' },
  { id: 'first_birthday', label: '첫 돌' },
  { id: 'vaccination', label: '예방접종' },
  { id: 'hospital', label: '병원 방문' },
];

export const PREGNANCY_MILESTONE_PRESETS = [
  { id: 'first_ultrasound', label: '첫 초음파' },
  { id: 'heartbeat', label: '심장 소리' },
  { id: 'baby_kick', label: '태동' },
  { id: 'gender_reveal', label: '성별 확인' },
  { id: 'nt_test', label: 'NT 검사' },
  { id: 'hospital_visit', label: '산부인과' },
  { id: 'shopping', label: '육아용품 쇼핑' },
  { id: 'baby_shower', label: '베이비샤워' },
  { id: 'name_decided', label: '이름 결정' },
];
