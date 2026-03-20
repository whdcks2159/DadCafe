import type { SituationGuide } from '@/types';

export const SITUATIONS: SituationGuide[] = [
  {
    slug: 'morning-sickness',
    titleKo: '아내가 입덧이 심해요',
    summaryKo: '입덧으로 힘들어하는 아내를 위해 아빠가 할 수 있는 것들',
    emoji: '🤢',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '입덧 유발 요인 파악', descriptionKo: '기름진 음식, 강한 냄새가 입덧을 악화시킵니다. 아내에게 어떤 냄새·음식이 힘든지 직접 물어보세요.' },
      { order: 2, titleKo: '소량 잦은 식사 준비', descriptionKo: '빈속이 입덧을 심화시킵니다. 크래커, 토스트 등 간단한 간식을 자주 준비해 주세요.' },
      { order: 3, titleKo: '집안일 주도적으로 맡기', descriptionKo: '냄새가 강한 요리, 청소는 아빠가 담당하세요. 환기를 철저히 하세요.' },
      { order: 4, titleKo: '공감의 말 건네기', descriptionKo: '"많이 힘들지? 내가 할게"라는 말 한마디가 큰 힘이 됩니다.' },
    ],
    doList: [
      '생강차, 레몬 향 등 천연 완화법 시도',
      '산부인과에서 입덧 약 처방 가능함을 알려주기',
      '아내가 먹을 수 있는 음식 목록 만들고 재고 채워두기',
      '환기 자주 하기',
    ],
    dontList: [
      '"조금만 참아" — 입덧은 호르몬 반응, 의지로 안 됩니다',
      '강한 향수나 방향제 사용',
      '아내 앞에서 강한 냄새 음식 먹기',
      '"나도 힘들어" 경쟁하기',
    ],
  },
  {
    slug: 'hospital-bag',
    titleKo: '입원 가방 어떻게 싸요?',
    summaryKo: '출산 당일 당황하지 않기 위한 입원 가방 완벽 가이드',
    emoji: '🎒',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '36주부터 준비 시작', descriptionKo: '예정일보다 일찍 진통이 올 수 있습니다. 36주부터 가방을 미리 싸두고 현관 옆에 놓으세요.' },
      { order: 2, titleKo: '산모 필수품 챙기기', descriptionKo: '수유 브라 2개, 산후 패드, 부드러운 속옷 3~4벌, 수면 양말, 세면도구, 충전기, 간식.' },
      { order: 3, titleKo: '아기 필수품 챙기기', descriptionKo: '신생아복(50호) 3벌, 속싸개 2장, 신생아 모자, 퇴원용 외출복 1벌.' },
      { order: 4, titleKo: '서류 준비', descriptionKo: '신분증 (부부), 산모수첩, 보험카드, 병원 예약 확인서. 사본도 만들어두세요.' },
    ],
    doList: [
      '가방은 현관 바로 옆에 두기',
      '병원까지 경로와 주차 방법 미리 확인 (야간도)',
      '긴급 연락처 (병원, 산후조리원) 핸드폰에 저장',
      '아빠 간식·충전기도 별도로 챙기기',
    ],
    dontList: [
      '출산 당일 갑자기 가방 싸기',
      '아기 옷 50호 이상만 준비 — 신생아는 50호가 맞아요',
      '현금 챙기는 것 잊기 (주차비, 자판기)',
    ],
  },
  {
    slug: 'baby-crying',
    titleKo: '아기가 이유 없이 울어요',
    summaryKo: '신생아 울음의 이유와 5S 달래기 기법',
    emoji: '😭',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '기저귀 먼저 확인', descriptionKo: '가장 먼저 기저귀를 확인하세요. 대소변 여부를 체크합니다.' },
      { order: 2, titleKo: '배고픔 신호 확인', descriptionKo: '신생아는 2~3시간마다 배가 고파요. 입 주변을 건드렸을 때 고개를 돌리면 배고픈 신호입니다.' },
      { order: 3, titleKo: '트림 유도', descriptionKo: '수유 후 트림을 시키지 않으면 복통으로 울 수 있어요. 어깨에 세워 등을 두드려 주세요.' },
      { order: 4, titleKo: '5S 달래기 기법', descriptionKo: 'Swaddle(속싸개) → Side(옆으로) → Shush(쉬~ 소리) → Swing(흔들기) → Suck(공갈젖꼭지). 순서대로 시도하세요.' },
    ],
    doList: [
      '아기를 가슴에 안고 심장 소리 들려주기',
      '백색소음 (헤어드라이어, 청소기 소리) 틀어주기',
      '3시간 이상 계속 울거나 발열 동반 시 소아과 연락',
    ],
    dontList: [
      '아기를 세게 흔들기 — 영아 흔들림 증후군 위험',
      '"왜 우는지 모르겠어"라며 자리 피하기',
      '너무 많은 자극 동시에 주기',
    ],
  },
  {
    slug: 'postpartum-depression',
    titleKo: '아내가 산후우울증 같아요',
    summaryKo: '산후우울증을 이해하고 아빠가 할 수 있는 실질적인 지원',
    emoji: '💙',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '증상 인지하기', descriptionKo: '출산 후 2주 이상 지속되는 무기력, 잦은 눈물, 아기에 대한 무관심, 수면 장애는 전문 도움이 필요합니다.' },
      { order: 2, titleKo: '"네 탓이 아니야"라고 말하기', descriptionKo: '산후우울증은 호르몬 변화로 인한 의학적 상태입니다. 판단하지 말고 들어주세요.' },
      { order: 3, titleKo: '전문 기관 연결 돕기', descriptionKo: '정신건강복지센터(1577-0199)에 함께 전화하거나, 산부인과에서 정신건강의학과 연계를 요청하세요.' },
      { order: 4, titleKo: '야간 수유 분담', descriptionKo: '수면 부족이 우울증을 악화시킵니다. 분유 수유 또는 젖 짜둔 것으로 격일 야간 담당을 맡으세요.' },
    ],
    doList: [
      '집안일, 육아를 주도적으로 맡아 부담 줄여주기',
      '아내가 혼자만의 시간을 가질 수 있도록 돕기',
      '가족·친구에게 도움 요청하기를 두려워하지 않기',
      '"잘 하고 있어"라고 매일 말해주기',
    ],
    dontList: [
      '"애기 낳고 왜 이래?" 절대 금지',
      '혼자 해결하도록 내버려 두기',
      '아내의 감정을 과장이라고 무시하기',
    ],
  },
  {
    slug: 'first-fever',
    titleKo: '아기에게 처음 열이 났어요',
    summaryKo: '소아 발열 대응법과 응급 판단 기준',
    emoji: '🌡️',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '체온 정확히 재기', descriptionKo: '귀 체온계로 측정합니다. 38도 이상이면 발열입니다.' },
      { order: 2, titleKo: '3개월 미만이면 즉시 응급실', descriptionKo: '생후 3개월 미만 아기의 38도 이상 발열은 즉시 응급실 방문이 필요합니다.' },
      { order: 3, titleKo: '수분 공급', descriptionKo: '모유 또는 분유를 자주 먹여 탈수를 예방하세요.' },
      { order: 4, titleKo: '해열제 사용', descriptionKo: '타이레놀(아세트아미노펜)은 4시간 간격으로 사용. 이부프로펜은 생후 6개월 이상부터. 반드시 체중에 맞는 용량을 사용하세요.' },
    ],
    doList: [
      '소아과 야간 진료 병원 미리 검색해 두기',
      '38.5도 이상 시 소아과 전화 문의',
      '39도 이상 시 바로 소아과 또는 응급실',
      '해열 후에도 축 처지면 병원 방문',
    ],
    dontList: [
      '아스피린 절대 금지 (라이 증후군 위험)',
      '두꺼운 옷 입히거나 이불 덮기',
      '얼음팩으로 몸 갑자기 식히기',
    ],
  },
  {
    slug: 'sleep-deprivation',
    titleKo: '둘 다 잠을 못 자고 있어요',
    summaryKo: '신생아 수면 부족 상황에서 부부가 함께 버티는 법',
    emoji: '😴',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '교대 담당 시스템 만들기', descriptionKo: '예) 저녁 9시~새벽 2시는 아빠 담당, 새벽 2시~아침은 엄마 담당. 블록 단위로 수면을 확보하세요.' },
      { order: 2, titleKo: '낮잠 우선', descriptionKo: '"아기가 자면 나도 자라" — 집안일보다 수면이 먼저입니다. 청소는 미뤄도 됩니다.' },
      { order: 3, titleKo: '주말 집중 케어', descriptionKo: '주말에는 아빠가 아침 수유를 전담해 엄마가 4~5시간 연속 수면을 취할 수 있게 하세요.' },
    ],
    doList: [
      '이 시기는 반드시 지나간다 (보통 4개월 이후 개선)',
      '부부 서로 "잘했어, 고마워" 격려하기',
      '도움이 필요하면 친정·시댁에 솔직하게 요청하기',
    ],
    dontList: [
      '수면 부족 상태에서 큰 결정 내리기',
      '"나도 힘들어" 경쟁하기 — 같은 팀입니다',
      '혼자 다 감당하려 하기',
    ],
  },
];

export const SITUATION_TAG_LABELS: Record<string, string> = {
  pregnancy: '임신 중',
  newborn: '신생아',
  toddler: '영아기',
  hospital: '병원',
  relationship: '부부 관계',
};
