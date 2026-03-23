import type { QuizQuestion, QuizResult, DadLevel } from '@/types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    questionKo: '아내가 "많이 힘들어"라고 할 때 당신의 반응은?',
    options: [
      { id: 'q1a', textKo: '"나도 힘들어. 회사 일이 얼마나 많은데."', score: 0 },
      { id: 'q1b', textKo: '"많이 힘들구나, 뭘 도와줄까?"', score: 2 },
      { id: 'q1c', textKo: '"곧 나아지겠지, 조금만 참아."', score: 1 },
    ],
  },
  {
    id: 'q2',
    questionKo: '신생아 기저귀는 하루에 몇 번 갈아야 하나요?',
    options: [
      { id: 'q2a', textKo: '모른다. 아내가 알아서 한다.', score: 0 },
      { id: 'q2b', textKo: '대략 5~6번 정도?', score: 1 },
      { id: 'q2c', textKo: '8~12번. 신생아는 자주 갈아줘야 한다.', score: 2 },
    ],
  },
  {
    id: 'q3',
    questionKo: '배우자 출산휴가는 며칠인가요?',
    options: [
      { id: 'q3a', textKo: '3일', score: 0 },
      { id: 'q3b', textKo: '10일', score: 1 },
      { id: 'q3c', textKo: '20일 (유급)', score: 2 },
    ],
  },
  {
    id: 'q4',
    questionKo: '아기가 밤에 3시간째 울 때 어떻게 하나요?',
    options: [
      { id: 'q4a', textKo: '아내를 깨운다. 수유 문제니까.', score: 0 },
      { id: 'q4b', textKo: '교대로 안아주고, 5S 달래기를 시도한다.', score: 2 },
      { id: 'q4c', textKo: '일단 달래보다가 너무 힘들면 아내 부른다.', score: 1 },
    ],
  },
  {
    id: 'q5',
    questionKo: '산후우울증에 대해 얼마나 알고 있나요?',
    options: [
      { id: 'q5a', textKo: '의지가 약한 엄마들이 겪는 것 같다.', score: 0 },
      { id: 'q5b', textKo: '호르몬 변화 때문이라고 들었다.', score: 1 },
      { id: 'q5c', textKo: '출산 후 10~15%의 엄마가 경험하는 의학적 상태다.', score: 2 },
    ],
  },
  {
    id: 'q6',
    questionKo: '아기 열이 났을 때 가장 먼저 할 일은?',
    options: [
      { id: 'q6a', textKo: '이불을 덮어 따뜻하게 한다.', score: 0 },
      { id: 'q6b', textKo: '체온을 재고 월령에 따라 대처한다.', score: 2 },
      { id: 'q6c', textKo: '해열제를 바로 먹인다.', score: 1 },
    ],
  },
  {
    id: 'q7',
    questionKo: '태교에 대한 당신의 생각은?',
    options: [
      { id: 'q7a', textKo: '태교는 엄마 몫이라고 생각한다.', score: 0 },
      { id: 'q7b', textKo: '가끔 배에 말 걸거나 음악을 틀어준다.', score: 1 },
      { id: 'q7c', textKo: '매일 아기에게 말 걸고 함께 태교 활동을 한다.', score: 2 },
    ],
  },
];

export const QUIZ_RESULTS: Record<DadLevel, QuizResult> = {
  beginner: {
    level: 'beginner',
    titleKo: '준비 중인 아빠',
    descriptionKo: '아직 배움이 필요하지만, 여기 있다는 것 자체가 시작입니다. 파파플랜와 함께 하나씩 배워가요!',
    badgeEmoji: '/icons/badge-beginner.svg',
    tips: [
      '매일 10분, 아내와 "오늘 어땠어?" 대화 나누기',
      '이 앱의 가이드를 처음부터 읽어보기',
      '집안일 한 가지만 주도적으로 맡아보기',
    ],
  },
  ready: {
    level: 'ready',
    titleKo: '준비된 아빠',
    descriptionKo: '기본기는 갖추고 있어요! 조금 더 깊이 배우면 진짜 든든한 아빠가 됩니다.',
    badgeEmoji: '/icons/badge-ready.svg',
    tips: [
      '산전 교육 프로그램에 파트너와 함께 등록하기',
      '커뮤니티에서 다른 아빠들과 경험 나누기',
      '체크리스트를 시작하고 진행률 확인하기',
    ],
  },
  experienced: {
    level: 'experienced',
    titleKo: '베테랑 아빠',
    descriptionKo: '대단해요! 이미 멋진 아빠의 자질을 갖추고 있습니다. 커뮤니티에서 다른 아빠들을 도와주세요!',
    badgeEmoji: '/icons/badge-experienced.svg',
    tips: [
      '커뮤니티에 경험담 나누기',
      '주변 예비 아빠에게 파파플랜 추천하기',
      '다음 단계 가이드로 계속 성장하기',
    ],
  },
};

export function calculateDadLevel(answers: Record<string, number>): DadLevel {
  const total = Object.values(answers).reduce((sum, score) => sum + score, 0);
  if (total <= 5) return 'beginner';
  if (total <= 10) return 'ready';
  return 'experienced';
}
