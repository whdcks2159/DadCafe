import type { SituationGuide } from '@/types';
import { SITUATIONS, SITUATION_TAG_LABELS } from './situations';
import { STAGES } from './stages';

export interface SearchItem {
  id: string;
  type: 'situation' | 'guide';
  titleKo: string;
  summaryKo: string;
  href: string;
  tag: string;
  tagLabel: string;
  keywords: string;
  previewSteps: string[];
}

// 오타·유사어 → 정규 검색어 변환
export const KEYWORD_SYNONYMS: Record<string, string> = {
  // 울음
  '우름': '울음', '울어요': '울음', '울 때': '울음', '우는': '울음', '자지러져': '울음',
  'cry': '울음', '우네': '울음',
  // 열
  '발열': '열', '고열': '열', '미열': '열', '체온': '열', '뜨거워': '열',
  '열나요': '열', '열남': '열',
  // 수유
  '모유': '수유', '분유': '수유', '젖': '수유', '수유량': '수유', '젖몸살': '수유',
  // 잠
  '수면': '잠', '안 자': '잠', '못 자': '잠', '잠투정': '잠', '야간': '잠',
  '밤에 깨': '잠', '잠 안': '잠', '밤중': '잠',
  // 토 / 구토
  '토해요': '구토', '토': '구토', '게워': '구토', '역류': '구토',
  // 기저귀
  '기저': '기저귀', '기집': '기저귀',
  // 입덧
  '구역질': '입덧', '오심': '입덧', '메스꺼움': '입덧',
  // 트림
  '방귀': '트림', '복통': '트림',
  // 이유식
  '이유': '이유식', '밥 안': '이유식', '안 먹어': '이유식', '편식': '이유식',
  // 황달
  '노란': '황달', '황달치료': '황달',
  // 배꼽
  '탯줄': '배꼽', '배꼽줄': '배꼽',
  // 진통
  '가진통': '진통', '배뭉침': '진통', '출산 신호': '진통',
  // 산후우울증
  '산후': '산후우울증', '우울해': '산후우울증', '우울증': '산후우울증',
  // 번아웃
  '지쳐': '번아웃', '힘들어': '번아웃', '지침': '번아웃', '무기력': '번아웃',
  // 분리불안
  '낯가림': '분리불안', '헤어질': '분리불안', '엄마 없으면': '분리불안',
  // 발달
  '뒤집기': '발달', '기기': '발달', '걸음': '발달', '말 늦': '발달',
  // 훈육
  '떼쓰기': '훈육', '물어요': '훈육', '때려요': '훈육',
};

// 각 상황 slug별 한국어 검색 키워드 (검색 coverage 확대용)
const SITUATION_KEYWORDS: Record<string, string> = {
  'morning-sickness': '입덧 구역질 메스꺼움 임신 식욕 냄새 음식',
  'hospital-bag': '입원 가방 출산 준비물 짐 병원 체크리스트',
  'baby-crying': '울음 달래기 신생아 기저귀 배고픔 5S 배앓이 영아산통',
  'postpartum-depression': '산후우울증 우울 감정 아내 정신건강 눈물',
  'first-fever': '열 발열 체온 소아과 해열제 병원 38도',
  'sleep-deprivation': '잠 수면 피곤 번아웃 밤중수유 교대 야간',
  'fetal-movement': '태동 움직임 아기 움직임 없어요',
  'braxton-hicks': '가진통 배뭉침 진통 수축 출산 신호',
  'prenatal-test-result': '산전검사 검사 결과 기형아 검사 불안 걱정',
  'pregnancy-mood-swings': '감정기복 울어요 우울 호르몬 짜증',
  'pregnancy-weight': '체중 몸무게 다이어트 살 임신 비만',
  'workplace-pregnancy': '직장 회사 눈치 직장맘 육아휴직',
  'pregnancy-insomnia': '불면 못 자 임신 중 수면',
  'birth-prep-rush': '출산 준비 급해요 갑자기 한 달 준비 없음',
  'family-interference': '양가 부모님 간섭 시댁 처가 육아 개입',
  'dad-feeling-excluded': '소외감 임신 과정 소외 아빠 감정',
  'labor-signs': '진통 출산 신호 병원 언제 가야 해 규칙적',
  'water-break': '양수 파수 양수 터짐 출산 병원',
  'delivery-room-role': '분만실 아빠 역할 출산 옆에 있어야',
  'emergency-csection': '응급 제왕절개 수술 동의서 갑자기',
  'newborn-jaundice': '황달 황달 치료 빌리루빈 신생아 노란',
  'hospital-discharge': '퇴원 이동 카시트 신생아 이동',
  'birth-registration': '출생신고 신고 방법 어디서',
  'hospital-bill': '병원비 입원비 얼마 비용 건강보험',
  'newborn-screening': '신생아 검사 발바닥 채혈 선별검사',
  'breastfeeding-struggle': '모유수유 젖 수유 힘들어요 젖몸살 라치',
  'night-fussing': '칭얼거려요 잠투정 수면 입면 달래기',
  'umbilical-cord': '배꼽 탯줄 소독 안 떨어져',
  'stool-color': '변 색깔 녹변 흑변 혈변 대변',
  'eye-discharge': '눈곱 눈 분비물 결막염',
  'sleeping-too-much': '너무 자요 하루 종일 자 깨우기 신생아 수면',
  'newborn-weight-loss': '몸무게 줄었어요 체중 감소 신생아',
  'hiccups': '딸꾹질 신생아',
  'head-control': '목 가누기 목 못 가눠 발달',
  'stuffy-nose': '코 막힘 코 막혀요 콧물 흡입기',
  'bottle-refusal': '젖병 거부 젖병 안 빨아 모유 분유',
  'growing-distant': '아내 남처럼 사이 멀어졌어요 관계 냉랭',
  'parenting-style-clash': '육아 방식 충돌 싸워요 의견 차이',
  'relying-on-grandma': '친정 엄마 의지 시댁 육아 도움',
  'childcare-budget': '육아 비용 돈 갈등 경제',
  'wife-does-everything': '아내 혼자 다 해 도움 안 받아',
  'dad-excluded': '소외 나만 아빠 혼자 된 것 같아',
  'inlaw-conflict': '시댁 갈등 육아 문제 시부모',
  'no-couple-time': '부부 시간 없어 둘만의 시간 데이트',
  'dad-burnout': '번아웃 지쳐 힘들어 아빠 번아웃 무기력',
  'dad-confidence': '자신 없어 좋은 아빠 자신감 불안',
  'solid-food-refusal': '이유식 거부 안 먹어 이유식 시작',
  'night-waking': '밤에 깨요 야간 수유 수면 퇴행',
  'separation-anxiety': '분리불안 낯가림 엄마 없으면 울어요',
  'developmental-concern': '발달 늦어요 또래 발달 검사',
  'biting-hitting': '물어요 때려요 공격적 훈육',
  'speech-delay': '말 늦어요 언어 발달 단어 수',
  'picky-eating': '편식 안 먹어요 특정 음식만',
  'daycare-separation': '어린이집 헤어질 때 울어요 등원 거부',
  'late-walking': '걸음 늦어요 첫 걸음 보행 발달',
  'daycare-dilemma': '어린이집 보낼지 집에서 키울지 결정',
  'unexpected-pregnancy': '임신 소식 솔직히 기쁘지 않아 감정',
  'ultrasound-confusion': '초음파 이해 못 했어요 설명 초음파 보는 법',
  'caffeine-craving': '카페인 커피 임신 중 마셔도 돼요',
  'exercise-fear': '운동 무서워요 임신 중 신체 활동',
};

// 단계별 가이드 topic 키워드
const TOPIC_KEYWORDS: Record<string, string> = {
  'health-prep': '건강 준비 임신 전 엽산 검사',
  'financial-prep': '재정 준비 돈 비용 육아 예산',
  'communication': '소통 대화 파트너 부부 임신 계획',
  'trimester-1': '1삼분기 1~3개월 초기 임신 입덧',
  'trimester-2': '2삼분기 4~6개월 중기 임신 태동',
  'trimester-3': '3삼분기 7~9개월 말기 임신 출산 준비',
  'maternity-leave': '배우자 출산휴가 육아휴직 휴가',
  'emergency-guide': '응급 대응 신생아 응급 위기 대처',
  'postpartum-center': '산후조리원 가이드 산조원',
  'first-week': '생후 첫 주 신생아 처음 아기',
  'feeding': '수유 지원 모유 분유 젖',
  'baby-bath': '목욕 기저귀 신생아 목욕 방법',
  'postpartum': '산후우울증 산후 회복 정신',
  'development': '발달 단계 마일스톤 성장',
  'play': '놀이 아빠 놀이 상호작용',
  'sleep': '수면 교육 재우기 수면 습관',
};

// 인기 추천 키워드 칩 (홈 검색창 등장)
export const POPULAR_KEYWORDS = [
  '울음', '열', '잠', '수유', '기저귀',
  '입덧', '황달', '배꼽', '트림', '이유식',
  '분리불안', '산후우울증', '번아웃', '진통', '발달',
];

// 검색어 정규화: 유사어 사전으로 전처리
export function normalizeQuery(q: string): string {
  const trimmed = q.trim();
  return KEYWORD_SYNONYMS[trimmed] ?? trimmed;
}

let _cachedIndex: SearchItem[] | null = null;

export function buildSearchIndex(): SearchItem[] {
  if (_cachedIndex) return _cachedIndex;

  const items: SearchItem[] = [];

  // 상황별 가이드
  for (const s of SITUATIONS) {
    items.push({
      id: `situation-${s.slug}`,
      type: 'situation',
      titleKo: s.titleKo,
      summaryKo: s.summaryKo,
      href: `/situations/${s.slug}`,
      tag: s.tag,
      tagLabel: SITUATION_TAG_LABELS[s.tag] ?? s.tag,
      keywords: SITUATION_KEYWORDS[s.slug] ?? '',
      previewSteps: s.steps.slice(0, 3).map((step) => step.titleKo),
    });
  }

  // 단계별 가이드 topic
  for (const stage of STAGES) {
    for (const topic of stage.topics) {
      const allTips = topic.content.flatMap((sec) => sec.tips ?? []);
      items.push({
        id: `guide-${stage.slug}-${topic.slug}`,
        type: 'guide',
        titleKo: topic.titleKo,
        summaryKo: topic.summaryKo,
        href: `/guide/${stage.slug}/${topic.slug}`,
        tag: stage.slug,
        tagLabel: stage.labelKo,
        keywords: TOPIC_KEYWORDS[topic.slug] ?? '',
        previewSteps: allTips.slice(0, 3),
      });
    }
  }

  _cachedIndex = items;
  return items;
}
