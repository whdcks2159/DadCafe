import type { SituationGuide } from '@/types';

export const SITUATIONS: SituationGuide[] = [
  {
    slug: 'morning-sickness',
    titleKo: '아내가 입덧이 심해요',
    summaryKo: '입덧으로 힘들어하는 아내를 위해 아빠가 할 수 있는 것들',
    emoji: '/icons/sit-morning-sickness.svg',
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
    emoji: '/icons/sit-hospital-bag.svg',
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
    emoji: '/icons/sit-baby-crying.svg',
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
    emoji: '/icons/sit-postpartum.svg',
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
    emoji: '/icons/sit-fever.svg',
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
    emoji: '/icons/ic-sleep.png',
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

  // ── 임신 중 (pregnancy) ──────────────────────────────────────
  {
    slug: 'fetal-movement',
    titleKo: '태동이 갑자기 느껴지지 않아요',
    summaryKo: '아기가 평소보다 안 움직이는 것 같아 불안할 때',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '태동 횟수 직접 세기', descriptionKo: '달달한 음식을 먹고 왼쪽으로 누운 뒤 2시간 동안 태동을 세세요. 10번 이상이면 정상입니다.' },
      { order: 2, titleKo: '10번 이하면 즉시 병원 연락', descriptionKo: '"아마 괜찮겠지"는 금물입니다. 확인이 안 되면 바로 산부인과에 전화해서 안내를 받으세요.' },
      { order: 3, titleKo: '태동 패턴 기록하기', descriptionKo: '태동 횟수를 앱이나 메모로 기록해두면 산부인과 상담 시 정확한 정보를 전달할 수 있습니다.' },
    ],
    doList: [
      '달달한 음식 먹고 30분 후 다시 확인',
      '태동 카운터 앱으로 패턴 추적하기',
      '병원 전화번호 항상 핸드폰 즐겨찾기에 저장',
    ],
    dontList: [
      '"어제도 괜찮았으니까" 하루 기다리기',
      '인터넷 후기만 보고 혼자 판단하기',
    ],
  },
  {
    slug: 'braxton-hicks',
    titleKo: '아내 배가 갑자기 단단하게 뭉쳐요',
    summaryKo: '배가 당기고 돌처럼 뭉친다고 할 때 진통인지 구분하는 법',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '수축 간격 타이머로 측정', descriptionKo: '타이머 앱으로 수축 시작 시간과 지속 시간을 기록하세요. 불규칙하면 가성 진통(브랙스턴 힉스)일 가능성이 높습니다.' },
      { order: 2, titleKo: '자세 바꿔보기', descriptionKo: '가성 진통은 자세를 바꾸거나 물을 마시면 완화됩니다. 진진통은 자세와 상관없이 강해집니다.' },
      { order: 3, titleKo: '5-1-1 규칙 기억하기', descriptionKo: '5분 간격으로, 1분 지속되는 수축이, 1시간 이상 계속되면 바로 병원에 출발하세요.' },
    ],
    doList: [
      '수분 보충 (탈수가 가성 진통 유발)',
      '왼쪽으로 눕혀 편하게 쉬게 하기',
      '기록한 간격 데이터를 병원 전화 시 바로 전달',
    ],
    dontList: [
      '규칙적 수축인데 "좀 더 지켜보자" 하기',
      '운전을 아내 혼자 하게 하기',
    ],
  },
  {
    slug: 'prenatal-test-result',
    titleKo: '산전 검사 결과가 불안해요',
    summaryKo: '기형아 검사 수치가 높게 나왔을 때 당황하지 않는 법',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '선별 검사 vs 확진 검사 구분', descriptionKo: '트리플·쿼드 마커 검사는 위험도를 분류하는 것이지 확진이 아닙니다. 수치 하나로 결론 내리지 마세요.' },
      { order: 2, titleKo: '전문의 상담 즉시 예약', descriptionKo: '이상 소견이 있으면 양수 검사 또는 정밀 초음파로 추가 확인이 필요합니다. 바로 예약해서 같이 가세요.' },
      { order: 3, titleKo: '결과에 상관없이 함께한다고 말하기', descriptionKo: '검사 결과가 어떻게 나오든 같이 결정하겠다는 말 한마디가 아내에게 가장 큰 힘이 됩니다.' },
    ],
    doList: [
      '검진 당일 반드시 동행하기',
      '상담 전까지 인터넷 후기 과도하게 보지 않기',
      '궁금한 점은 의사에게 직접 질문하기',
    ],
    dontList: [
      '"별거 아닐 거야"로 감정 차단하기',
      '검사 결과를 제3자에게 먼저 알리기',
    ],
  },
  {
    slug: 'pregnancy-mood-swings',
    titleKo: '아내가 이유 없이 자꾸 울어요',
    summaryKo: '감정 기복이 심하고 작은 일에도 눈물이 날 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '호르몬 변화임을 이해하기', descriptionKo: '임신 중 에스트로겐·프로게스테론 수치가 급변합니다. 감정 기복은 의지 문제가 아닌 생리적 반응이에요.' },
      { order: 2, titleKo: '판단 없이 들어주기', descriptionKo: '"왜 울어?" 대신 "무슨 일이야?"라고 물어보세요. 답을 찾으려 하지 말고 그냥 옆에 있어 주는 것만으로 충분할 때가 많습니다.' },
      { order: 3, titleKo: '작은 배려 행동으로 보여주기', descriptionKo: '좋아하는 음식 사 오기, 따뜻한 음료 건네기 — 말보다 행동이 더 크게 전달됩니다.' },
    ],
    doList: [
      '"많이 힘들지" 공감의 말 먼저',
      '스킨십(손 잡기, 안아주기)으로 안정감 주기',
      '혼자 있고 싶어 하면 조용히 지켜보기',
    ],
    dontList: [
      '"예민하다", "왜 이렇게 감정적이야" 절대 금지',
      '"나도 힘들어" 경쟁하기',
    ],
  },
  {
    slug: 'pregnancy-weight',
    titleKo: '임신 중 체중 관리로 아내가 스트레스받아요',
    summaryKo: '검진마다 체중 이야기가 나와 아내가 위축될 때',
    emoji: '/icons/ic-meal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '적정 체중 증가 기준 함께 확인', descriptionKo: '임신 전 정상 체중 기준 11~16kg 증가가 권장됩니다. 무조건 적게 먹는 것이 답이 아닙니다.' },
      { order: 2, titleKo: '식단 관리 같이 참여하기', descriptionKo: '아내 혼자 식단을 조절하게 하지 마세요. 집에서 함께 채소·단백질 중심으로 먹으면 훨씬 지속하기 쉽습니다.' },
      { order: 3, titleKo: '저녁 산책 루틴 만들기', descriptionKo: '임신 중 걷기는 안전하고 효과적인 운동입니다. 식후 20~30분 함께 걸으면 체중 관리와 스트레스 해소 모두 됩니다.' },
    ],
    doList: [
      '집에서 튀김·배달음식 줄이기',
      '산부인과 영양사 상담 적극 활용',
      '체중보다 건강 상태와 기분에 집중',
    ],
    dontList: [
      '"너무 먹는 거 아니야?" 절대 금지',
      '아내 앞에서 기름진 음식 혼자 시키기',
    ],
  },
  {
    slug: 'workplace-pregnancy',
    titleKo: '아내가 직장 눈치 때문에 힘들어해요',
    summaryKo: '임신 사실을 알린 후 회사 분위기가 달라졌을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '임산부 법적 권리 확인', descriptionKo: '임산부는 야간 근무 거부, 시간 외 근무 제한, 업무 경감 요청이 가능합니다. 근로기준법 제74조를 같이 확인하세요.' },
      { order: 2, titleKo: '함께 대응 방법 찾기', descriptionKo: '회사 인사팀에 서면으로 요청하는 게 효과적입니다. 아내 혼자 싸우지 않도록 자료를 같이 준비해주세요.' },
      { order: 3, titleKo: '퇴근 후 완충 공간 만들기', descriptionKo: '집에 오면 일 이야기는 잠깐 내려놓을 수 있게 해주세요. 따뜻한 밥과 편안한 분위기가 가장 좋은 회복입니다.' },
    ],
    doList: [
      '고용노동부 상담 전화 1350 저장',
      '필요시 의사에게 직장 배려 권고서 요청 가능',
      '아내의 퇴직·휴직 결정을 존중하기',
    ],
    dontList: [
      '"그냥 참아" 권유하기',
      '아내보다 회사 입장을 먼저 대변하기',
    ],
  },
  {
    slug: 'pregnancy-insomnia',
    titleKo: '임신 중 아내가 잠을 못 자요',
    summaryKo: '커지는 배 때문에 자다 깨기를 반복하는 임신 후기',
    emoji: '/icons/ic-sleep.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '임산부 쿠션 준비', descriptionKo: '배 아래와 등 뒤를 받쳐주는 임산부 쿠션이 큰 도움이 됩니다. C자형 쿠션이나 일반 베개 여러 개를 활용하세요.' },
      { order: 2, titleKo: '왼쪽 자세 도와주기', descriptionKo: '왼쪽으로 눕는 자세가 혈액순환과 태아에게 유리합니다. 등 뒤에 쿠션을 받쳐 자세를 유지하게 도와주세요.' },
      { order: 3, titleKo: '취침 전 루틴 만들기', descriptionKo: '따뜻한 샤워, 가벼운 발 마사지, 조용한 음악으로 잠들기 전 긴장을 풀어주세요. 핸드폰은 취침 1시간 전에 멀리 두세요.' },
    ],
    doList: [
      '방 온도 18~20도로 유지',
      '다리에 쥐 나면 발목 스트레칭 함께 해주기',
      '화장실 가기 쉽도록 동선 정리해두기',
    ],
    dontList: [
      '본인 코골이 심하면 방 분리 먼저 제안',
      '취침 전 무거운 음식 함께 먹기',
    ],
  },
  {
    slug: 'birth-prep-rush',
    titleKo: '출산이 한 달도 안 남았는데 아무 준비가 없어요',
    summaryKo: '갑자기 현실로 닥친 출산 D-30 긴급 가이드',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '산후조리원 지금 당장 연락', descriptionKo: '36주 이전에 이미 마감된 곳이 많습니다. 지금 바로 2~3곳에 전화해서 빈자리를 확인하세요.' },
      { order: 2, titleKo: '입원 가방 이번 주 안에 싸기', descriptionKo: '아내 세면도구, 수유 브라, 신생아복, 신분증·보험카드·산모수첩 세트를 현관 옆에 준비하세요.' },
      { order: 3, titleKo: '카시트 설치 미리 완료', descriptionKo: '퇴원 당일에 당황하지 않으려면 카시트 설치를 미리 연습해두세요. 뒷좌석에 장착하고 흔들리지 않는지 확인하세요.' },
    ],
    doList: [
      '병원까지 야간 경로와 주차 방법 미리 확인',
      '도움 요청할 가족·지인 명단 만들기',
      '정부 출산 지원금 신청 일정 확인',
    ],
    dontList: [
      '모든 걸 혼자 다 하려 하기 — 도움 요청이 빠릅니다',
      '중고 카시트 사용 — 안전 이력을 모르면 위험',
    ],
  },
  {
    slug: 'family-interference',
    titleKo: '양가 부모님이 육아 계획에 너무 개입해요',
    summaryKo: '이름부터 조리원까지 전부 의견을 내려 할 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '부부가 먼저 결정하기', descriptionKo: '중요한 결정은 반드시 부부가 먼저 합의하세요. 양가에는 결정된 내용을 공유하는 방식을 습관화하세요.' },
      { order: 2, titleKo: '아빠가 완충 역할하기', descriptionKo: '내 부모님의 과도한 개입은 아빠가 직접 대화하세요. 아내가 시댁 문제를 혼자 감당하게 하지 마세요.' },
      { order: 3, titleKo: '감사하되 경계 설정하기', descriptionKo: '"도와주셔서 감사한데, 저희가 결정할게요"라는 문장을 미리 연습해두세요.' },
    ],
    doList: [
      '양가 의견을 선택적으로 수용하되 최종 결정은 부부가 하기',
      '주요 결정 사항을 메모로 남겨 합의 근거 남기기',
    ],
    dontList: [
      '아내에게 시댁 의견을 그대로 전달만 하기',
      '모든 결정을 어른들에게 맡기기',
    ],
  },
  {
    slug: 'dad-feeling-excluded',
    titleKo: '임신 과정에서 소외감을 느껴요',
    summaryKo: '검진은 아내 위주고 나는 그냥 따라가는 것 같을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '검진에 질문 목록 들고 가기', descriptionKo: '매 검진 전날 궁금한 점 2~3가지를 메모해 가세요. 의사에게 직접 질문하면 아빠도 진료의 주체가 됩니다.' },
      { order: 2, titleKo: '태아에게 말 걸기', descriptionKo: '임신 18주부터 태아는 소리를 인식합니다. 배에 손을 올리고 매일 말을 걸어보세요. 아빠-아기 연결의 시작이에요.' },
      { order: 3, titleKo: '아빠 역할 미리 공부하기', descriptionKo: '산전 교육, 아빠 커뮤니티, 육아 앱으로 먼저 준비하세요. 아는 만큼 더 자연스럽게 참여할 수 있습니다.' },
    ],
    doList: [
      '임신 주수별 태아 변화 함께 찾아보기',
      '아빠 산전 교육 — 보건소에서 무료 수강 가능',
      '초음파 사진 정리하고 태명 함께 짓기',
    ],
    dontList: [
      '"어차피 나는 몰라도 돼"라며 포기하기',
      '검진 동행을 귀찮아하기',
    ],
  },

  // ── 병원 (hospital) ──────────────────────────────────────────
  {
    slug: 'labor-signs',
    titleKo: '진통인지 아닌지 모르겠어요',
    summaryKo: '배가 아프긴 한데 지금 병원을 가야 할지 모를 때',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '타이머로 간격 측정', descriptionKo: '수축이 시작된 순간부터 다음 수축까지의 간격을 타이머 앱으로 측정하세요. 5~7분 간격이면 병원에 연락할 타이밍입니다.' },
      { order: 2, titleKo: '5-1-1 규칙 적용', descriptionKo: '5분 간격으로 1분 지속되는 수축이 1시간 이상 계속되면 출발하세요. 초산이라면 기준보다 조금 일찍 움직이는 게 낫습니다.' },
      { order: 3, titleKo: '병원에 먼저 전화', descriptionKo: '갑자기 가기보다 먼저 전화해서 증상을 설명하면 의료진이 출발 여부를 안내해줍니다.' },
    ],
    doList: [
      '진통 타이머 앱 미리 깔아두기 (Contraction Timer 등)',
      '병원 가방은 현관 바로 옆에 준비',
      '야간 이동 경로와 주차 위치 미리 확인',
    ],
    dontList: [
      '"조금 더 기다려보자"며 측정 없이 기다리기',
      '직접 운전해서 병원 가기 — 아내는 타고만 가야 합니다',
    ],
  },
  {
    slug: 'water-break',
    titleKo: '새벽에 양수가 터진 것 같아요',
    summaryKo: '갑자기 속옷이 흠뻑 젖었을 때 당황하지 않는 법',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '양수 여부 빠르게 확인', descriptionKo: '맑고 무취 또는 약한 단내가 나면 양수일 수 있습니다. 패드를 대고 색깔을 확인하세요. 초록빛이면 즉시 응급실로.' },
      { order: 2, titleKo: '즉시 병원에 전화', descriptionKo: '양수가 터진 것 같으면 당황하지 말고 바로 산부인과에 전화하세요. 전화 안내에 따라 이동 여부를 결정하세요.' },
      { order: 3, titleKo: '빠르게 이동 준비', descriptionKo: '가방을 챙기고 편안한 자세로 이동하세요. 아내는 걷는 것보다 앉은 자세가 안전합니다.' },
    ],
    doList: [
      '타월 또는 패드 깔아주고 편안하게 앉히기',
      '병원 전화번호 미리 저장해두기',
      '이동 중 수축 간격도 계속 체크하기',
    ],
    dontList: [
      '"좀 더 지켜보자"며 병원 연락 미루기',
      '욕실에서 씻고 오겠다고 시간 끌기',
    ],
  },
  {
    slug: 'delivery-room-role',
    titleKo: '분만실에서 아빠가 뭘 해야 할지 모르겠어요',
    summaryKo: '옆에 있는데 그냥 서 있기만 하는 것 같을 때',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '손 잡고 눈 맞추기', descriptionKo: '아내 옆에서 손을 잡고 눈을 맞추세요. 멀찍이 서 있는 것과 바로 옆에 있는 것은 아내에게 완전히 다르게 느껴집니다.' },
      { order: 2, titleKo: '호흡 박자 함께 세기', descriptionKo: '"들이쉬고, 내쉬고"를 직접 목소리로 함께 세어주세요. 아내가 호흡에 집중하게 도와주는 가장 실용적인 방법입니다.' },
      { order: 3, titleKo: '"잘 하고 있어"를 반복하기', descriptionKo: '분만 중 아내에게 필요한 말은 "잘 하고 있어, 거의 다 왔어, 함께야"입니다. 이 말만 계속 해주세요.' },
    ],
    doList: [
      '물, 얼음 조각, 수건 등 아내가 요청하면 즉시 챙기기',
      '의료진 방해하지 않고 지시에 따르기',
      '아내 중심으로 생각하기 — 이 순간 주인공은 아내',
    ],
    dontList: [
      '"나도 무서워" 말하기',
      '핸드폰 보거나 사진 찍기에 집중하기',
    ],
  },
  {
    slug: 'emergency-csection',
    titleKo: '갑자기 응급 제왕절개 동의서에 사인해야 해요',
    summaryKo: '의사가 빠른 결정을 요구할 때 침착하게 대응하는 법',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '이유 한 가지만 빠르게 묻기', descriptionKo: '"가장 중요한 이유가 무엇인가요?"라고 짧게 물어보세요. 의료진은 기다려줄 수 있습니다. 단, 길게 논쟁하지 마세요.' },
      { order: 2, titleKo: '아내에게 짧게 설명하기', descriptionKo: '아내에게 "의사 선생님이 아기 안전을 위해 수술이 필요하다고 해"라고 차분하게 전달하세요.' },
      { order: 3, titleKo: '서명 후 아내 곁에 집중', descriptionKo: '서명 후에는 아내 손을 잡고 수술실 앞까지 함께하세요. "잘 될 거야, 바로 옆에 있을게"라고 전해주세요.' },
    ],
    doList: [
      '수술 후 회복실 동행 가능 여부 미리 확인',
      '양가 부모님 연락은 수술 후에',
      '아내가 회복실에서 나오기 전까지 자리 지키기',
    ],
    dontList: [
      '갑자기 울거나 패닉 상태 보이기',
      '친척·지인에게 전화부터 돌리기',
    ],
  },
  {
    slug: 'newborn-jaundice',
    titleKo: '신생아 황달 치료를 받는다고 해요',
    summaryKo: '아기를 광선 치료 기계에 눕히는 걸 보고 당황했을 때',
    emoji: '/icons/ic-health.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '생리적 황달 이해하기', descriptionKo: '신생아 황달의 60~70%는 생리적 황달로 간 기능이 미숙해서 생깁니다. 위험한 상태가 아니니 당황하지 마세요.' },
      { order: 2, titleKo: '광선 치료 과정 파악', descriptionKo: '파란 광선 아래에서 1~2일 치료하면 대부분 호전됩니다. 치료 중 아기는 눈 보호대를 쓰고 최대한 적게 싸매야 합니다.' },
      { order: 3, titleKo: '모유 수유 유지', descriptionKo: '황달 치료 중에도 모유 수유는 계속하는 게 좋습니다. 자주 먹이면 빌리루빈 배출에 도움이 됩니다.' },
    ],
    doList: [
      '의료진 안내를 신뢰하고 지시에 따르기',
      '황달 수치 변화를 의사에게 직접 확인',
      '아내가 치료실 옆에서 너무 불안해하면 함께 머물기',
    ],
    dontList: [
      '인터넷에서 무분별한 민간요법 찾기',
      '치료 중단을 임의로 결정하기',
    ],
  },
  {
    slug: 'hospital-discharge',
    titleKo: '퇴원 후 이동이 걱정돼요',
    summaryKo: '아기를 처음 차에 태우는 것부터 조리원 이동까지',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '카시트 미리 설치 완료', descriptionKo: '퇴원 전날 카시트가 뒷좌석에 제대로 장착됐는지 다시 확인하세요. 흔들리면 위험합니다.' },
      { order: 2, titleKo: '조리원 이동 시간 사전 통보', descriptionKo: '퇴원 하루 전 조리원에 입소 예정 시간을 미리 알려주세요. 체크인 절차가 준비돼 있어야 합니다.' },
      { order: 3, titleKo: '아기 이동 아빠가 담당', descriptionKo: '아기를 안아 카시트에 태우는 역할은 아빠가 맡으세요. 아내는 수술 또는 출산 후라 장시간 안기가 힘들 수 있습니다.' },
    ],
    doList: [
      '이동 중 급정거·과속 절대 금지',
      '조수석은 에어백 때문에 위험 — 반드시 뒷좌석에',
      '조리원 도착 즉시 잔금 결제 및 서류 제출',
    ],
    dontList: [
      '퇴원 당일 카시트 처음 설치하기',
      '아내가 아기를 무릎에 안고 이동하게 하기',
    ],
  },
  {
    slug: 'birth-registration',
    titleKo: '출생신고를 어디서 어떻게 하나요?',
    summaryKo: '퇴원하고 나서야 서류 처리를 몰랐다는 걸 알았을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '출생증명서 챙기기', descriptionKo: '병원에서 발급해주는 출생증명서를 퇴원 전에 반드시 받아두세요. 원본 2부 이상 요청하세요.' },
      { order: 2, titleKo: '출생신고 방법 선택', descriptionKo: '출생일로부터 1개월 이내에 주민센터 방문 또는 정부24 온라인으로 신고할 수 있습니다.' },
      { order: 3, titleKo: '아동수당·부모급여 신청 연계', descriptionKo: '출생신고 후 아동수당, 부모급여, 첫만남이용권 등 지원금 신청을 한 번에 진행할 수 있습니다.' },
    ],
    doList: [
      '출생신고서 작성 미리 연습하기 (정부24에서 양식 확인 가능)',
      '주민센터 방문 시 신분증과 출생증명서 지참',
      '아기 건강보험 피부양자 등록도 동시에 처리',
    ],
    dontList: [
      '1개월 기한 넘기기 — 과태료 부과될 수 있음',
      '부모급여 등 지원금 신청을 깜박하기',
    ],
  },
  {
    slug: 'hospital-bill',
    titleKo: '병원비가 얼마나 나올지 걱정돼요',
    summaryKo: '수납 창구에서 당황하지 않으려면 미리 알아야 할 것들',
    emoji: '/icons/ic-stats.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '건강보험 적용 후 기준 파악', descriptionKo: '건강보험 적용 기준으로 자연분만 50~100만원, 제왕절개 80~150만원 수준입니다. 병원마다 차이가 있으니 미리 문의하세요.' },
      { order: 2, titleKo: '실손보험 청구 준비', descriptionKo: '가입된 실손보험이 있다면 영수증과 진단서를 챙겨두세요. 퇴원 시 한 번에 받으면 편리합니다.' },
      { order: 3, titleKo: '국민건강보험 바우처 확인', descriptionKo: '임신·출산 진료비 바우처(국민행복카드)로 결제 가능한 항목을 퇴원 전 수납 창구에서 확인하세요.' },
    ],
    doList: [
      '카드 한도 미리 확인하고 여유 있게 준비',
      '영수증 전부 챙기기 — 의료비 소득공제 가능',
      '병원비 명세서 꼼꼼히 확인하고 이상하면 바로 문의',
    ],
    dontList: [
      '비용 걱정을 아내에게 티 내기',
      '명세서 확인 없이 바로 결제하기',
    ],
  },
  {
    slug: 'newborn-screening',
    titleKo: '아기 발바닥 채혈 검사를 한다고 해요',
    summaryKo: '신생아 대사이상 검사가 뭔지 처음 들었을 때',
    emoji: '/icons/ic-health.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '검사 목적 이해하기', descriptionKo: '선천성 대사이상·내분비 질환 6종을 조기 발견하기 위한 국가 필수 검사입니다. 건강한 아기도 모두 받아야 합니다.' },
      { order: 2, titleKo: '시기와 방법 파악', descriptionKo: '출생 후 48~72시간에 발바닥에서 소량의 혈액을 채취합니다. 아기가 잠깐 울지만 금방 끝납니다.' },
      { order: 3, titleKo: '결과 수령 방법 확인', descriptionKo: '결과는 1~2주 후 나옵니다. 이상 소견이 없으면 연락이 오지 않는 경우도 있으니 병원에 수령 방법을 미리 확인하세요.' },
    ],
    doList: [
      '아내가 불안해하면 "필수 검사야, 다 잘 될 거야" 안심시켜 주기',
      '결과 수령 기간과 방법 미리 메모해두기',
    ],
    dontList: [
      '채혈 중 과도하게 불안 표현하기',
      '검사 거부 고려하기 — 조기 발견이 생명을 구합니다',
    ],
  },
  {
    slug: 'breastfeeding-struggle',
    titleKo: '모유 수유가 안 된다고 아내가 너무 힘들어해요',
    summaryKo: '산후 초반 수유 때문에 눈물짓는 아내 옆에서',
    emoji: '/icons/ic-baby.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '수유 실패가 아님을 확인시키기', descriptionKo: '산후 초반 모유가 충분히 나오지 않는 것은 매우 흔합니다. "네 잘못이 아니야"라고 먼저 말해주세요.' },
      { order: 2, titleKo: '수유 클리닉 상담 예약', descriptionKo: '병원 수유 클리닉, 보건소 모유 수유 상담은 대부분 무료 또는 저렴합니다. 바로 예약해주세요.' },
      { order: 3, titleKo: '분유 보충에 대한 부담 줄이기', descriptionKo: '모유만 고집하다 아기와 엄마 모두 지칠 수 있습니다. 분유 보충도 충분히 좋은 선택입니다.' },
    ],
    doList: [
      '수유 자세 잡기 보조해주기',
      '수유 후 트림 유도, 기저귀 교체 아빠가 담당',
      '"네가 최선을 다하고 있어"라고 매일 말해주기',
    ],
    dontList: [
      '"모유가 최고야"라며 압박하기',
      '수유 방법을 검색해서 충고하기',
    ],
  },

  // ── 신생아 (newborn) ──────────────────────────────────────────
  {
    slug: 'night-fussing',
    titleKo: '잠들기 전 이유 없이 칭얼거려요',
    summaryKo: '먹고 기저귀도 갈았는데 계속 보챌 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '4가지 욕구 순서대로 확인', descriptionKo: '①수유 → ②기저귀 → ③트림(수유 후 30분 이내) → ④체온(너무 덥거나 춥지 않은지) 순서로 빠르게 확인하세요.' },
      { order: 2, titleKo: '5S 달래기 시도', descriptionKo: 'Swaddle(속싸개) → Side(옆으로 안기) → Shush(쉬~ 소리) → Swing(살살 흔들기) → Suck(공갈젖꼭지) 순서로 시도하세요.' },
      { order: 3, titleKo: '백색소음 활용', descriptionKo: '헤어드라이어, 청소기, 빗소리 등 백색소음이 신생아를 진정시킵니다. 유튜브나 앱에서 틀어주세요.' },
    ],
    doList: [
      '아기를 가슴에 세워 안고 심장 소리 들려주기',
      '조명을 어둡게 하고 자극 줄이기',
      '3시간 이상 지속되거나 열 동반 시 소아과 연락',
    ],
    dontList: [
      '아기를 세게 흔들기 — 영아 흔들림 증후군 위험',
      '너무 많은 자극을 동시에 주기',
    ],
  },
  {
    slug: 'umbilical-cord',
    titleKo: '배꼽이 2주가 지나도 안 떨어져요',
    summaryKo: '탯줄이 아직 붙어 있고 냄새가 나는 것 같을 때',
    emoji: '/icons/ic-baby.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '건조하게 유지하기', descriptionKo: '배꼽 주변은 항상 건조하게 유지하세요. 기저귀 앞면을 접어 배꼽 아래에 두면 통풍이 됩니다.' },
      { order: 2, titleKo: '목욕 시 물 닿지 않게', descriptionKo: '탯줄이 완전히 떨어지기 전까지는 통목욕보다 수건 목욕을 권장합니다. 물이 닿으면 습기로 세균 번식 가능성이 생깁니다.' },
      { order: 3, titleKo: '이상 징후 확인', descriptionKo: '냄새가 심하거나, 주변이 빨갛게 붓거나, 분비물이 나오면 소아과를 방문하세요.' },
    ],
    doList: [
      '탯줄은 자연스럽게 떨어질 때까지 기다리기',
      '소독 거즈로 주변을 살살 닦아주기',
      '통기성 있는 신생아복 선택하기',
    ],
    dontList: [
      '탯줄을 억지로 당기거나 자르기',
      '로션이나 파우더를 배꼽 주변에 바르기',
    ],
  },
  {
    slug: 'stool-color',
    titleKo: '아기 변 색깔이 이상해 보여요',
    summaryKo: '초록색, 흰색, 붉은색 변을 봤을 때 어떻게 해야 하나',
    emoji: '/icons/ic-baby.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '색깔별 의미 파악', descriptionKo: '검은색(태변)은 생후 초반 정상, 노란 겨자색은 정상 모유 변, 초록색은 수유 상태 확인 필요, 흰색·밝은 빨간색은 즉시 소아과 방문.' },
      { order: 2, titleKo: '사진으로 기록하기', descriptionKo: '소아과 방문 시 변 사진을 찍어가면 의사가 더 정확하게 판단할 수 있습니다.' },
      { order: 3, titleKo: '수유 상태와 연관 짓기', descriptionKo: '모유 수유 초반에는 초록 변이 나올 수 있습니다. 수유 자세와 시간을 점검하세요.' },
    ],
    doList: [
      '기저귀 교체 시 변 색깔과 양 습관적으로 확인',
      '소아과 방문 전 사진 찍어두기',
    ],
    dontList: [
      '흰색·밝은 빨간색 변을 그냥 넘기기',
      '인터넷 정보만 믿고 병원 방문 미루기',
    ],
  },
  {
    slug: 'eye-discharge',
    titleKo: '아기 눈곱이 자꾸 껴요',
    summaryKo: '한쪽 눈이 자꾸 눈물로 그렁그렁할 때',
    emoji: '/icons/ic-health.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '올바른 방향으로 닦기', descriptionKo: '깨끗한 생리식염수 거즈를 사용해 안쪽(코 방향)에서 바깥쪽으로 한 번에 닦아주세요. 재사용 금지.' },
      { order: 2, titleKo: '눈물길 마사지', descriptionKo: '코 옆 눈물주머니 부위를 하루 2~3회 부드럽게 아래로 마사지하면 눈물길 개통에 도움이 됩니다.' },
      { order: 3, titleKo: '이상 징후 확인', descriptionKo: '눈이 빨갛게 되거나 노란 고름 같은 분비물이 나오면 결막염일 수 있습니다. 소아과 방문하세요.' },
    ],
    doList: [
      '매 수유 전후 눈 상태 확인',
      '눈물길 막힘은 돌 전에 대부분 자연 해결',
    ],
    dontList: [
      '같은 거즈로 양쪽 눈 닦기',
      '손가락으로 눈 주변 누르거나 문지르기',
    ],
  },
  {
    slug: 'sleeping-too-much',
    titleKo: '아기가 하루 종일 자요',
    summaryKo: '16시간씩 자는 게 정상인지 걱정될 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '신생아 수면 기준 이해', descriptionKo: '신생아는 하루 16~18시간 수면이 정상입니다. 뇌와 신체가 수면 중 가장 빠르게 발달합니다.' },
      { order: 2, titleKo: '3~4시간마다 깨워 수유', descriptionKo: '아무리 잘 자도 3~4시간이 지나면 깨워서 수유하세요. 생후 2~3주까지는 체중 증가를 위해 필수입니다.' },
      { order: 3, titleKo: '이상 수면 징후 확인', descriptionKo: '깨워도 전혀 반응이 없거나, 먹어도 기운이 없어 보이면 소아과를 방문하세요.' },
    ],
    doList: [
      '수유 시간 기록 앱으로 패턴 파악하기',
      '생후 6주 이후 점점 수면 패턴이 정리됨',
    ],
    dontList: [
      '잘 잔다고 수유 건너뛰기',
      '깨어 있을 때 과도한 자극 주기',
    ],
  },
  {
    slug: 'newborn-weight-loss',
    titleKo: '아기 몸무게가 줄었다고 해요',
    summaryKo: '퇴원 후 검진에서 체중 감소 이야기를 들었을 때',
    emoji: '/icons/ic-stats.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '생리적 체중 감소 이해', descriptionKo: '출생 후 3~5일 사이 출생 체중의 7~10% 감소는 정상입니다. 모유·수분을 제대로 섭취하면 10~14일 안에 회복됩니다.' },
      { order: 2, titleKo: '수유 횟수와 양 체크', descriptionKo: '하루 8~12회 수유, 기저귀 하루 6개 이상 젖으면 충분히 먹고 있다는 신호입니다.' },
      { order: 3, titleKo: '체중 회복 여부 추적', descriptionKo: '2주 검진 때 출생 체중을 회복했는지 확인하세요. 회복되지 않았다면 수유 클리닉 상담을 바로 받으세요.' },
    ],
    doList: [
      '소아과 검진 일정 빠짐없이 지키기',
      '수유 후 기저귀 젖은 횟수 기록하기',
    ],
    dontList: [
      '체중 감소만 보고 분유를 과도하게 추가하기',
      '검진 결과에 과도하게 불안해하기',
    ],
  },
  {
    slug: 'hiccups',
    titleKo: '아기가 자꾸 딸꾹질을 해요',
    summaryKo: '먹고 나면 꼭 딸꾹질이 나와 걱정될 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '정상 반응임을 이해', descriptionKo: '신생아 딸꾹질은 횡격막이 미숙해서 생기는 매우 흔한 현상입니다. 아기는 불편하지 않습니다.' },
      { order: 2, titleKo: '세워서 트림 유도', descriptionKo: '수유 후 딸꾹질이 시작되면 아기를 세워 안고 등을 살살 두드려주세요. 트림이 나오면 대부분 멎습니다.' },
      { order: 3, titleKo: '공갈젖꼭지 활용', descriptionKo: '빨기 동작이 횡격막을 이완시켜 딸꾹질을 멎게 하는 데 효과적입니다.' },
    ],
    doList: [
      '수유 후 바로 눕히지 않기',
      '수유 중간에 잠깐 세워 트림 유도하기',
    ],
    dontList: [
      '놀라게 해서 멈추려 하기',
      '물을 강제로 먹이기',
    ],
  },
  {
    slug: 'head-control',
    titleKo: '아기가 목을 전혀 못 가누는 것 같아요',
    summaryKo: '안아 올릴 때마다 머리가 뒤로 꺾여 무서울 때',
    emoji: '/icons/ic-baby.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '발달 기준 이해', descriptionKo: '목 가누기는 생후 3~4개월에 완성됩니다. 그 전까지 머리가 흔들리는 것은 100% 정상이에요.' },
      { order: 2, titleKo: '올바른 안기 자세', descriptionKo: '아기를 들 때는 반드시 한 손으로 머리와 목 전체를 받쳐주세요. 머리가 뒤로 꺾이지 않도록 항상 지지하세요.' },
      { order: 3, titleKo: '터미 타임 연습', descriptionKo: '하루 2~3회, 배를 바닥에 대고 눕히는 터미 타임을 통해 목 근육을 자연스럽게 발달시킬 수 있습니다.' },
    ],
    doList: [
      '안을 때마다 목을 손바닥으로 받치는 습관 들이기',
      '터미 타임은 수유 30분 이후에 시도',
    ],
    dontList: [
      '목 지지 없이 아기 들어 올리기',
      '목 가눔이 늦다며 지나치게 걱정하기',
    ],
  },
  {
    slug: 'stuffy-nose',
    titleKo: '아기 코가 자꾸 막혀요',
    summaryKo: '숨소리가 그렁그렁하고 콧물이 자꾸 생길 때',
    emoji: '/icons/ic-health.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '가습기로 습도 유지', descriptionKo: '실내 습도를 50~60%로 유지하면 코 점막이 건조해지지 않아 콧물이 줄어듭니다.' },
      { order: 2, titleKo: '신생아용 흡입기 사용', descriptionKo: '생리식염수 1~2방울을 콧구멍에 넣은 후 신생아용 코 흡입기로 조심히 흡입하세요. 하루 2~3회 이상은 자제하세요.' },
      { order: 3, titleKo: '병원 방문 기준 파악', descriptionKo: '코 막힘으로 수유를 전혀 못 하거나, 열이 동반되거나, 호흡이 빨라지면 소아과에 가세요.' },
    ],
    doList: [
      '식염수 스프레이는 생후 0개월부터 사용 가능',
      '수유 전에 코를 흡입해주면 먹기가 편해짐',
    ],
    dontList: [
      '어른용 코감기 약 절대 금지',
      '면봉으로 깊숙이 찌르기',
    ],
  },
  {
    slug: 'bottle-refusal',
    titleKo: '젖병을 거부해요',
    summaryKo: '모유만 먹다가 갑자기 젖병을 안 물 때',
    emoji: '/icons/ic-baby.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '젖병 수유는 아빠가 시도', descriptionKo: '엄마 냄새가 없는 아빠가 젖병을 주면 거부감이 줄어드는 경우가 많습니다.' },
      { order: 2, titleKo: '수유 온도 확인', descriptionKo: '분유 또는 짜둔 모유의 온도가 체온(37도)과 비슷한지 확인하세요. 차갑거나 너무 뜨거우면 거부합니다.' },
      { order: 3, titleKo: '젖꼭지 종류 바꿔보기', descriptionKo: '모유 수유 중인 아기에게는 모유 수유 겸용 젖꼭지(유두 혼동 방지용)가 더 잘 맞는 경우가 있습니다.' },
    ],
    doList: [
      '아기가 약간 배고플 때 시도하기',
      '여러 종류의 젖꼭지를 조금씩 시도하기',
    ],
    dontList: [
      '배가 너무 고프거나 너무 부를 때 시도하기',
      '억지로 입에 밀어 넣기',
    ],
  },

  // ── 부부 관계 (relationship) ──────────────────────────────────
  {
    slug: 'growing-distant',
    titleKo: '아내가 저를 남처럼 대해요',
    summaryKo: '출산 후 부부 사이가 갑자기 멀어진 것 같을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '아내가 지쳐있음을 먼저 이해', descriptionKo: '출산 후 여성은 호르몬 급변, 수면 부족, 몸의 변화를 동시에 겪습니다. 감정 여유가 없는 것이 당연합니다.' },
      { order: 2, titleKo: '"뭐가 필요해?"라고 물어보기', descriptionKo: '서운함을 바로 표현하기보다 "내가 뭘 도와줄 수 있어?"부터 물어보세요. 관계 회복은 요청에서 시작됩니다.' },
      { order: 3, titleKo: '육아 참여로 신뢰 쌓기', descriptionKo: '말보다 행동이 더 빠릅니다. 아기를 함께 돌보는 루틴을 만들면 자연스럽게 파트너십이 회복됩니다.' },
    ],
    doList: [
      '하루 한 번 "고마워, 잘 하고 있어" 말하기',
      '스킨십 — 손 잡기, 어깨 안아주기부터 시작',
    ],
    dontList: [
      '"왜 나한테 이래" 서운함 먼저 표현하기',
      '관계 회복을 위해 대화를 강요하기',
    ],
  },
  {
    slug: 'parenting-style-clash',
    titleKo: '육아 방식을 두고 자꾸 충돌해요',
    summaryKo: '먹이는 법, 재우는 법마다 의견이 달릴 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '"옳고 그름"이 아닌 "우리 방식" 찾기', descriptionKo: '육아 방식은 정답이 없습니다. 서로의 방법을 비교하기보다 우리 가족에 맞는 방식을 함께 만들어가세요.' },
      { order: 2, titleKo: '아기 잠든 후 대화 시간 갖기', descriptionKo: '갈등 직후보다 조용한 상황에서 감정을 낮추고 이야기하세요. "나는 이게 불안해서 그랬어"로 시작하면 덜 충돌합니다.' },
      { order: 3, titleKo: '전문가 의견을 중재자로 활용', descriptionKo: '소아과 의사, 보건소 상담사의 의견을 중립 기준으로 활용하면 갈등이 줄어듭니다.' },
    ],
    doList: [
      '의견 차이를 개인 공격으로 받아들이지 않기',
      '한쪽이 담당할 영역을 나눠 자율성 주기',
    ],
    dontList: [
      '"내 부모님은 이렇게 했어" 비교하기',
      '이기려고 논쟁하기',
    ],
  },
  {
    slug: 'relying-on-grandma',
    titleKo: '아내가 친정 엄마에게만 의지해요',
    summaryKo: '모든 육아 결정이 친정 중심으로 돌아가는 것 같을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '질투 대신 참여 의지 표현', descriptionKo: '"왜 나한테는 안 물어봐?" 대신 "나도 같이 배우고 싶어, 알려줘"라고 말해보세요.' },
      { order: 2, titleKo: '실제로 배우고 참여하기', descriptionKo: '직접 기저귀 갈기, 목욕시키기, 수유 돕기를 하면 자연스럽게 신뢰가 생깁니다. 의지는 행동으로 보여주세요.' },
      { order: 3, titleKo: '친정 도움에 감사하기', descriptionKo: '친정 도움은 귀한 자원입니다. 경쟁 상대가 아니라 우리 팀의 지원군으로 생각하세요.' },
    ],
    doList: [
      '장모님께 직접 육아 방법 물어보기',
      '아내의 결정을 지지하면서 의견 덧붙이기',
    ],
    dontList: [
      '친정 개입을 배척하거나 불편함 드러내기',
      '"왜 내 의견은 안 들어?"라고 소외감 표현하기',
    ],
  },
  {
    slug: 'childcare-budget',
    titleKo: '육아 비용 때문에 갈등이 생겼어요',
    summaryKo: '아기 관련 지출마다 의견이 충돌할 때',
    emoji: '/icons/ic-stats.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '월 육아 예산 함께 정하기', descriptionKo: '분유, 기저귀, 옷, 용품 등 예상 지출을 함께 정리하고 월 예산을 설정하세요. 숫자를 공유하면 갈등이 줄어듭니다.' },
      { order: 2, titleKo: '"꼭 필요한 것 vs 있으면 좋은 것" 구분', descriptionKo: '신생아 용품은 마케팅이 많습니다. 실제 필요한 것과 선택 사항을 분리해서 정리해보세요.' },
      { order: 3, titleKo: '큰 지출은 사전 상의 규칙 만들기', descriptionKo: '일정 금액 이상은 반드시 사전에 상의하는 규칙을 부부가 합의하세요.' },
    ],
    doList: [
      '정부 지원금 항목 빠짐없이 챙기기',
      '중고 거래 플랫폼으로 초반 용품 절약하기',
    ],
    dontList: [
      '아기 용품 구매를 일방적으로 결정하기',
      '비용을 이유로 아내의 선택을 무시하기',
    ],
  },
  {
    slug: 'wife-does-everything',
    titleKo: '아내가 모든 걸 혼자 하려 해요',
    summaryKo: '도와주려 하면 "괜찮아"라며 밀쳐낼 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '배우겠다는 의지 표현하기', descriptionKo: '"어떻게 하면 돼?"라고 방법을 물어보세요. 자발적으로 배우려는 태도가 전달되면 내줄 수 있는 일이 생깁니다.' },
      { order: 2, titleKo: '작은 것부터 확실히 담당', descriptionKo: '기저귀 교체, 쓰레기 버리기 등 작은 것이라도 확실히 맡아서 하면 신뢰가 쌓입니다.' },
      { order: 3, titleKo: '완벽하지 않아도 괜찮음을 보여주기', descriptionKo: '서툴게 해도 시도하는 것 자체가 중요합니다. 지적보다 "그렇게 하는구나, 알려줘" 자세를 유지하세요.' },
    ],
    doList: [
      '"내가 할게" 먼저 말하기',
      '아내가 쉬는 시간 매일 1~2시간 만들어주기',
    ],
    dontList: [
      '도움 제안 후 거절당하면 바로 포기하기',
      '"이렇게 해야 해"라고 방법 가르치기',
    ],
  },
  {
    slug: 'dad-excluded',
    titleKo: '나 혼자 아빠가 된 것 같아요',
    summaryKo: '아내가 아기한테만 집중하고 내가 없는 것 같을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '이 시기가 일시적임을 이해', descriptionKo: '출산 초반 엄마와 아기의 밀착은 자연스러운 본능입니다. 소외가 아니라 역할 분담의 과정입니다.' },
      { order: 2, titleKo: '아기 돌봄에 직접 참여', descriptionKo: '목욕, 기저귀, 재우기 중 하나를 확실히 맡으세요. 참여가 늘수록 가족 안에서 아빠 자리가 생깁니다.' },
      { order: 3, titleKo: '감정을 아내에게 솔직히 전하기', descriptionKo: '"나도 아빠로서 더 참여하고 싶어"라고 말해보세요. 섭섭함보다 참여 욕구를 표현하는 게 훨씬 효과적입니다.' },
    ],
    doList: [
      '아기와 단둘이 보내는 시간 만들기 (아내 외출 시 아빠가 돌봄)',
      '"잘 하고 있어" 서로 격려하기',
    ],
    dontList: [
      '소외감을 침묵으로 삭이기',
      '"아기가 나보다 엄마가 좋은 것 같아" 비교하기',
    ],
  },
  {
    slug: 'inlaw-conflict',
    titleKo: '시댁과 육아 문제로 갈등이 생겼어요',
    summaryKo: '시부모님의 육아 조언이 아내에게 상처가 될 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '아빠가 직접 대화하기', descriptionKo: '시댁 문제는 내 부모님이므로 아빠가 직접 대화하세요. 아내가 혼자 감당하게 하면 관계가 더 악화됩니다.' },
      { order: 2, titleKo: '정중하게 현재 방식 설명', descriptionKo: '"요즘은 이렇게 하는 게 좋다고 소아과에서 알려줬어요"라고 전문 기관의 말을 빌려 설명하면 덜 감정적입니다.' },
      { order: 3, titleKo: '아내 편임을 먼저 보여주기', descriptionKo: '어떤 갈등에서도 아내 앞에서 부모님을 먼저 편들면 신뢰가 무너집니다. 아내와 같은 팀임을 행동으로 보여주세요.' },
    ],
    doList: [
      '갈등 후 아내에게 "내가 얘기할게" 먼저 말하기',
      '부모님과의 대화는 아내 없을 때 따로 하기',
    ],
    dontList: [
      '"부모님이 맞는 말씀 하시잖아" 편들기',
      '아내에게 "참아"라고 하기',
    ],
  },
  {
    slug: 'no-couple-time',
    titleKo: '부부 둘만의 시간이 사라졌어요',
    summaryKo: '아기 태어난 이후 데이트를 한 번도 못 했을 때',
    emoji: '/icons/ic-rest.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '월 1회 데이트 달력에 먼저 잡기', descriptionKo: '"언젠가 하자"는 절대 이루어지지 않습니다. 달력에 먼저 날짜를 잡고 아이 돌봄을 역으로 준비하세요.' },
      { order: 2, titleKo: '2시간짜리 작은 데이트부터', descriptionKo: '긴 여행보다 근처 카페에서 커피 한 잔이라도 시작하세요. 둘만의 시간이라는 감각 자체를 되살리는 게 목적입니다.' },
      { order: 3, titleKo: '아이 돌봄 미리 해결하기', descriptionKo: '양가 부모님, 베이비시터, 어린이집 등 옵션을 구체적으로 정해두세요. 구체적인 계획이 있어야 실행됩니다.' },
    ],
    doList: [
      '데이트 날 아내가 고른 것을 따르기',
      '그날만큼은 육아 이야기 말고 우리 이야기 하기',
    ],
    dontList: [
      '데이트 도중 핸드폰으로 아기 걱정하기',
      '계획을 세우고 취소 반복하기',
    ],
  },
  {
    slug: 'dad-burnout',
    titleKo: '나도 번아웃이 온 것 같아요',
    summaryKo: '직장과 육아를 병행하다 한계를 느낄 때',
    emoji: '/icons/ic-rest.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '번아웃 신호 인식하기', descriptionKo: '의욕 저하, 만성 피로, 짜증 증가는 번아웃 신호입니다. 참는 것보다 인정하는 것이 회복의 시작입니다.' },
      { order: 2, titleKo: '아내와 솔직하게 나누기', descriptionKo: '"나도 좀 쉬어야 할 것 같아"라고 말해보세요. 아내도 파트너가 힘들다는 것을 모를 수 있습니다.' },
      { order: 3, titleKo: '최소한의 회복 시간 확보', descriptionKo: '주말 낮잠 1시간, 혼자만의 산책 30분이라도 아내와 번갈아 보장하세요. 작은 휴식이 지속 가능한 육아를 만듭니다.' },
    ],
    doList: [
      '운동, 취미 등 개인 충전 시간 주 1회 확보',
      '번아웃이 심하면 전문 상담도 고려',
    ],
    dontList: [
      '"아빠니까 참아야 해" 자기 압박하기',
      '지쳐있는 상태에서 중요한 결정 내리기',
    ],
  },
  {
    slug: 'dad-confidence',
    titleKo: '좋은 아빠인지 자신이 없어요',
    summaryKo: '무엇을 해야 할지 몰라 자꾸 위축될 때',
    emoji: '/icons/ic-goal.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '완벽한 아빠는 없음을 기억', descriptionKo: '아빠 역할에 정해진 정답은 없습니다. 서툴더라도 시도하고, 틀리면 고쳐가는 것이 진짜 좋은 아빠입니다.' },
      { order: 2, titleKo: '작은 성공 경험 쌓기', descriptionKo: '기저귀 한 번 교체, 트림 한 번 성공 — 작은 것부터 해보세요. 경험이 쌓이면 자신감이 따라옵니다.' },
      { order: 3, titleKo: '아빠 커뮤니티 활용', descriptionKo: '같은 고민을 가진 아빠들과 이야기하면 내가 혼자가 아님을 알 수 있습니다. 파파플랜 커뮤니티를 활용해보세요.' },
    ],
    doList: [
      '이 앱을 보고 있다는 것 자체가 좋은 아빠의 증거',
      '"오늘 내가 한 것" 하나씩 기록해보기',
    ],
    dontList: [
      '다른 아빠와 비교하기',
      '"나는 원래 애를 잘 못 봐" 포기하기',
    ],
  },

  // ── 영아기 (toddler) ──────────────────────────────────────────
  {
    slug: 'solid-food-refusal',
    titleKo: '이유식을 거부해요',
    summaryKo: '숟가락만 봐도 고개를 돌릴 때',
    emoji: '/icons/ic-meal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '강요 없이 반복 노출', descriptionKo: '억지로 먹이면 이유식 거부가 더 강해집니다. 10~15번 보여주기만 해도 점점 익숙해집니다.' },
      { order: 2, titleKo: '아빠가 함께 먹는 모습 보여주기', descriptionKo: '아기는 어른이 먹는 것을 따라 합니다. 이유식과 비슷한 음식을 아빠가 "맛있다"며 먹는 모습을 보여주세요.' },
      { order: 3, titleKo: '질감·온도 점검', descriptionKo: '너무 묽거나 뻑뻑하면 거부할 수 있습니다. 체온과 비슷한 온도, 부드러운 질감부터 시작하세요.' },
    ],
    doList: [
      '식사 시간은 즐거운 분위기로 유지',
      '이유식 앱이나 책으로 월령별 레시피 참고',
      '거부해도 표정 관리 — 아기는 부모 반응을 봅니다',
    ],
    dontList: [
      '억지로 먹이거나 입을 억지로 열기',
      '"왜 안 먹어!" 화내기',
    ],
  },
  {
    slug: 'night-waking',
    titleKo: '밤에 자꾸 깨요',
    summaryKo: '5~6개월인데 아직 통잠을 못 잘 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '일관된 취침 루틴 만들기', descriptionKo: '목욕 → 수유 → 조용한 노래 → 소등. 매일 같은 시간에 같은 순서로 반복하면 2~4주 안에 수면 패턴이 정리됩니다.' },
      { order: 2, titleKo: '자기 진정 능력 키우기', descriptionKo: '잠깐 칭얼거려도 바로 달려가지 말고 1~2분 기다려보세요. 스스로 다시 잠드는 능력이 생깁니다.' },
      { order: 3, titleKo: '낮잠 패턴 점검', descriptionKo: '낮잠이 너무 늦거나 길면 밤 수면에 영향을 줍니다. 오후 4시 이후 낮잠은 줄여보세요.' },
    ],
    doList: [
      '취침 시간 저녁 7~8시로 고정',
      '밤중 수유 횟수 서서히 줄이기',
      '파페이딩 또는 퍼버법 등 수면 교육 방법 함께 공부',
    ],
    dontList: [
      '매번 안아서만 재우기 — 수면 연상이 생깁니다',
      '밤 수유를 갑자기 완전히 끊기',
    ],
  },
  {
    slug: 'separation-anxiety',
    titleKo: '분리불안이 너무 심해요',
    summaryKo: '잠깐 눈에 안 보여도 심하게 울 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '까꿍 놀이로 연습', descriptionKo: '수건으로 얼굴을 가렸다 보여주는 까꿍 놀이가 "사라졌다가 다시 돌아온다"는 개념을 자연스럽게 가르칩니다.' },
      { order: 2, titleKo: '짧은 분리 연습 반복', descriptionKo: '30초 자리를 비웠다가 돌아오는 연습을 반복하세요. 매번 돌아오는 경험이 쌓이면 안심합니다.' },
      { order: 3, titleKo: '떠날 때 짧고 명확하게', descriptionKo: '"아빠 잠깐 나갔다 올게, 금방 와"라고 짧게 말하고 떠나세요. 머뭇거리며 달래면 오히려 불안이 커집니다.' },
    ],
    doList: [
      '항상 돌아온다는 것을 행동으로 증명하기',
      '낯선 사람과 점진적으로 익숙해지도록 돕기',
    ],
    dontList: [
      '아기 몰래 슬그머니 사라지기',
      '"왜 이렇게 질질 매달려" 핀잔 주기',
    ],
  },
  {
    slug: 'developmental-concern',
    titleKo: '발달이 또래보다 느린 것 같아요',
    summaryKo: '기거나 서는 시기가 늦는 것 같아 걱정될 때',
    emoji: '/icons/ic-stats.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '발달 정상 범위 확인', descriptionKo: '기기는 6~10개월, 서기는 9~12개월, 걷기는 9~18개월이 정상 범위입니다. 범위가 넓은 만큼 또래 비교보다 기준이 중요합니다.' },
      { order: 2, titleKo: '국가 영유아 건강검진 활용', descriptionKo: '6·9·12·18·24개월에 무료로 받을 수 있는 발달 검진을 빠짐없이 받으세요.' },
      { order: 3, titleKo: '걱정되면 소아과 발달 상담', descriptionKo: '"아직 괜찮겠지"보다 상담 한 번이 더 안심이 됩니다. 조기 발견이 중요합니다.' },
    ],
    doList: [
      '터미 타임, 기기 연습 환경 충분히 만들어주기',
      '발달 일지 앱으로 성장 기록하기',
    ],
    dontList: [
      '또래 아기와 매일 비교하기',
      '"느린 것 같아"라며 과도하게 자극 주기',
    ],
  },
  {
    slug: 'aggressive-behavior',
    titleKo: '아기가 물고 때려요',
    summaryKo: '놀다가 갑자기 공격적으로 행동할 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '말 대신 행동으로 표현하는 시기 이해', descriptionKo: '12~24개월 아기는 감정을 언어로 표현하지 못합니다. 물거나 때리는 것은 의사소통의 한 방법입니다.' },
      { order: 2, titleKo: '"아야" 반응 후 놀이 멈추기', descriptionKo: '과장되게 "아야!" 하고 반응하고, 즉시 놀이를 잠깐 멈추세요. 행동에는 결과가 따른다는 것을 경험하게 합니다.' },
      { order: 3, titleKo: '감정 언어 가르치기', descriptionKo: '"화났어? 싫어?" 감정 이름을 말로 표현해주세요. 언어가 늘수록 공격 행동은 자연스럽게 줄어듭니다.' },
    ],
    doList: [
      '물었을 때 큰 소리로 웃거나 과장 반응하지 않기',
      '충분한 신체 활동으로 에너지 발산시키기',
    ],
    dontList: [
      '"나쁜 아이야" 레이블 붙이기',
      '똑같이 물거나 때려서 가르치기',
    ],
  },
  {
    slug: 'speech-delay',
    titleKo: '말이 너무 늦는 것 같아요',
    summaryKo: '18개월인데 단어가 거의 없을 때',
    emoji: '/icons/ic-health.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '언어 발달 기준 확인', descriptionKo: '12개월: 의미 있는 단어 1~2개, 18개월: 단어 10~20개, 24개월: 두 단어 조합이 기준입니다.' },
      { order: 2, titleKo: '하루 30분 이상 대화 시간', descriptionKo: '눈을 맞추며 "공이야, 공", "밥 먹자, 밥"처럼 짧고 반복적으로 말을 걸어주세요. TV보다 직접 말 걸기가 훨씬 효과적입니다.' },
      { order: 3, titleKo: '18개월 넘어도 단어 없으면 상담', descriptionKo: '18개월에 의미 있는 단어가 거의 없다면 소아과 언어 발달 검진을 받아보세요.' },
    ],
    doList: [
      '책 읽어주기 하루 10~15분',
      '아이가 말하려 할 때 기다려주기',
      '스마트폰·TV 노출 줄이기',
    ],
    dontList: [
      '"왜 아직도 말을 못 해" 압박하기',
      '말 대신 다 해주기 — 말할 기회를 남겨주세요',
    ],
  },
  {
    slug: 'picky-eating',
    titleKo: '편식이 너무 심해요',
    summaryKo: '몇 가지 음식만 먹으려 하거나 아예 거부할 때',
    emoji: '/icons/ic-meal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '거부해도 계속 식탁에 올리기', descriptionKo: '싫어하는 음식도 15~20번 반복 노출하면 자연스럽게 수용하는 경우가 많습니다. 포기하지 마세요.' },
      { order: 2, titleKo: '싫어하는 재료 숨기기', descriptionKo: '채소를 갈거나 다져 좋아하는 음식에 섞는 방법도 효과적입니다. 단, 점차 눈에 보이게 노출하는 단계도 필요합니다.' },
      { order: 3, titleKo: '아이와 함께 요리하기', descriptionKo: '직접 만든 음식에 흥미를 보이는 경향이 있습니다. 간단한 재료 넣기, 섞기 등을 함께 해보세요.' },
    ],
    doList: [
      '식사 시간 스트레스 없게 분위기 유지',
      '새로운 음식은 좋아하는 음식 옆에 조금만 놓기',
    ],
    dontList: [
      '싫어하는 음식을 억지로 먹이거나 강요하기',
      '"밥 안 먹으면 디저트 없어" 조건 거래하기',
    ],
  },
  {
    slug: 'daycare-separation',
    titleKo: '어린이집에서 헤어질 때 너무 심하게 울어요',
    summaryKo: '매일 아침 등원할 때마다 아이도 아빠도 힘들 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '짧고 명확한 작별 인사', descriptionKo: '"아빠 이따 데리러 올게, 재미있게 놀아!" 짧고 긍정적으로 말하고 빠르게 돌아서세요. 길게 달래면 오히려 이별이 힘들어집니다.' },
      { order: 2, titleKo: '일관된 등원 루틴', descriptionKo: '매일 같은 시간, 같은 방식으로 등원하면 아이가 패턴을 예측할 수 있어 안정감이 생깁니다.' },
      { order: 3, titleKo: '하원 후 충분한 스킨십', descriptionKo: '데리러 갔을 때 반갑게 안아주고 오늘 어땠는지 이야기를 들어주세요. 등원의 긍정적 기억을 만들어줍니다.' },
    ],
    doList: [
      '선생님과 미리 적응 방법 상의하기',
      '이별 후 금방 우는 것이 멈추는 경우가 대부분 — 교사에게 확인 가능',
    ],
    dontList: [
      '아이 몰래 사라지기',
      '아이 앞에서 걱정스러운 표정 짓기',
    ],
  },
  {
    slug: 'late-walking',
    titleKo: '첫 걸음이 너무 늦는 것 같아요',
    summaryKo: '18개월이 다 됐는데 아직 혼자 걷지 않을 때',
    emoji: '/icons/ic-walk.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '정상 발달 범위 확인', descriptionKo: '독립 보행은 9~18개월 사이가 정상 범위입니다. 18개월까지는 지켜볼 수 있지만, 18개월이 넘으면 소아과 상담을 받으세요.' },
      { order: 2, titleKo: '걷기 연습 환경 만들기', descriptionKo: '안전한 공간에서 손을 살짝 잡아주며 걸음을 유도하세요. 푸시 워커 장난감이 도움이 되기도 합니다.' },
      { order: 3, titleKo: '기저 근육 발달 확인', descriptionKo: '충분히 기고, 서서 잡고 있는 연습이 되어 있으면 걷기로 자연스럽게 발전합니다. 아이가 잘 서는지 확인하세요.' },
    ],
    doList: [
      '보행기보다 자연스러운 발달 유도',
      '넘어져도 바로 달려가지 않기 — 스스로 일어나는 경험 필요',
    ],
    dontList: [
      '또래보다 늦다며 매일 비교하기',
      '보행기를 오랜 시간 사용하기 — 발달을 방해할 수 있음',
    ],
  },
  {
    slug: 'daycare-decision',
    titleKo: '어린이집을 보낼지 집에서 키울지 모르겠어요',
    summaryKo: '복직 시기가 다가오는데 결정이 안 될 때',
    emoji: '/icons/ic-goal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '현실적인 선택지 정리', descriptionKo: '어린이집, 가정 어린이집, 아이돌보미, 조부모 돌봄, 아내 휴직 연장 등 가능한 선택지를 재정·거리·시간 기준으로 정리하세요.' },
      { order: 2, titleKo: '정부 지원 혜택 먼저 확인', descriptionKo: '보육료 지원, 아이돌봄 서비스 정부 보조금, 어린이집 대기 신청 방법을 미리 확인하면 선택 범위가 넓어집니다.' },
      { order: 3, titleKo: '부부가 함께 결정하기', descriptionKo: '아내 혼자 결정하게 하지 마세요. 이 결정에 아빠도 당사자입니다.' },
    ],
    doList: [
      '어린이집 대기는 미리 넣어두는 게 유리',
      '결정 후에는 최선을 다해 지원하기',
    ],
    dontList: [
      '"네 마음대로 해"라며 결정 떠넘기기',
      '경제적 이유만으로 결정하기',
    ],
  },

  // ── 임신 추가 (pregnancy +10) ────────────────────────────────
  {
    slug: 'pregnancy-unexpected-feelings',
    titleKo: '임신 소식에 솔직히 기쁘지 않았어요',
    summaryKo: '계획에 없던 임신이거나, 기쁠 줄 알았는데 막막함이 앞섰을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '감정 자체를 인정하기', descriptionKo: '기쁨보다 두려움이 먼저 드는 건 이상한 게 아니에요. 많은 예비 아빠가 비슷한 감정을 경험합니다. 감정을 억누르지 마세요.' },
      { order: 2, titleKo: '아내 상태 먼저 확인하기', descriptionKo: '내 감정보다 지금 아내가 어떤 상태인지 먼저 물어보세요. "어때? 나한테 하고 싶은 말 있어?"라는 한 마디가 시작입니다.' },
      { order: 3, titleKo: '현실적인 걱정은 하나씩 풀기', descriptionKo: '경제, 집, 커리어 등 막막한 것들을 한꺼번에 해결하려 하지 마세요. 지금 당장 할 수 있는 것 하나부터 시작하면 됩니다.' },
    ],
    doList: [
      '감정을 신뢰하는 사람에게 솔직하게 털어놓기',
      '"기쁨은 나중에 와도 된다"고 스스로에게 허락하기',
      '지금 할 수 있는 작은 준비(산부인과 예약 등) 하나씩 시작하기',
    ],
    dontList: [
      '감정을 아내에게 숨기면서 혼자 삭이기',
      '"이러면 안 되는데"라며 자책하기',
    ],
  },
  {
    slug: 'ultrasound-confusion',
    titleKo: '초음파 설명을 하나도 못 알아들었어요',
    summaryKo: '의사 말이 너무 빨라서 뭐가 정상인지도 모르고 진료실을 나왔을 때',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '모르면 그 자리에서 바로 물어보기', descriptionKo: '"다시 설명해주세요"는 당연한 권리입니다. 진료가 끝난 후 간호사에게 물어봐도 됩니다.' },
      { order: 2, titleKo: '검진 전 질문 목록 준비하기', descriptionKo: '다음 검진 전날 궁금한 것 2~3가지를 메모해두세요. 아빠가 직접 질문하면 진료의 주체가 됩니다.' },
      { order: 3, titleKo: '기본 용어 미리 익혀두기', descriptionKo: '심박수, 태낭, CRL(머리·엉덩이 길이) 같은 기본 용어를 알아두면 설명을 훨씬 잘 이해할 수 있어요.' },
    ],
    doList: [
      '초음파 사진 촬영해두고 집에서 함께 찾아보기',
      '임신 주수별 태아 크기·특징 앱으로 같이 확인하기',
    ],
    dontList: [
      '모르면서 다 아는 척 넘어가기',
      '인터넷 후기만 보고 혼자 결론 내리기',
    ],
  },
  {
    slug: 'pregnancy-caffeine',
    titleKo: '아내가 카페인을 너무 그리워해요',
    summaryKo: '커피를 끊었는데 두통, 피로, 짜증이 쌓여서 힘들어할 때',
    emoji: '/icons/ic-drink.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '허용 기준 함께 확인하기', descriptionKo: '임신 중 하루 200mg 이하(아메리카노 1잔 분량)는 WHO·식약처 허용 범위예요. 무조건 끊는 게 정답이 아닙니다.' },
      { order: 2, titleKo: '디카페인 대안 같이 찾아보기', descriptionKo: '디카페인 커피, 보리차, 루이보스티 등 아내가 즐길 수 있는 대안 음료를 함께 찾아보세요.' },
      { order: 3, titleKo: '두통 대처법 알아두기', descriptionKo: '카페인 금단 두통이 심하면 수분 보충과 충분한 휴식이 먼저예요. 타이레놀(아세트아미노펜)은 임신 중 복용 가능하지만 의사 확인 후 사용하세요.' },
    ],
    doList: [
      '집에 디카페인 음료 구비해두기',
      '카페 방문 시 디카페인 메뉴 먼저 확인해주기',
    ],
    dontList: [
      '"커피는 절대 안 돼"라며 무조건 금지하기',
      '아내 몰래 마시다 들키기',
    ],
  },
  {
    slug: 'pregnancy-activity-fear',
    titleKo: '아내가 모든 신체 활동을 무서워해요',
    summaryKo: '뭔가 잘못될까봐 걷기도, 계단도 다 조심하려고 할 때',
    emoji: '/icons/ic-exercise.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '안전한 운동 목록 의사에게 받기', descriptionKo: '주치의에게 "지금 주수에 어떤 활동이 가능한가요?"라고 직접 물어보고, OK 받은 활동 목록을 같이 확인하세요.' },
      { order: 2, titleKo: '걷기부터 함께 시작하기', descriptionKo: '임신 중 걷기는 안전하고 혈액순환·체중 관리·기분 전환에 모두 효과적이에요. 저녁 식후 20분 산책을 루틴으로 만들어보세요.' },
      { order: 3, titleKo: '운동 중 멈춰야 할 신호 알아두기', descriptionKo: '어지러움, 호흡 곤란, 출혈, 복통이 생기면 즉시 멈추고 병원에 연락해야 합니다. 이 네 가지를 함께 숙지해두세요.' },
    ],
    doList: [
      '임산부 요가·수중 에어로빅 등 전문 프로그램 알아보기',
      '운동 전후 충분한 수분 보충 챙겨주기',
    ],
    dontList: [
      '"괜찮겠지"라며 아내 걱정을 무시하기',
      '과도한 고강도 운동을 권유하기',
    ],
  },
  {
    slug: 'pregnancy-dental',
    titleKo: '아내가 치과 치료를 계속 미뤄요',
    summaryKo: '충치가 생겼는데 마취가 태아에게 해로울까봐 치료를 포기하고 있을 때',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '안전한 치료 시기 확인하기', descriptionKo: '임신 14~28주 안정기에는 국소마취 치과 치료가 가능해요. 엑스레이는 납 방어복 착용 시 허용됩니다.' },
      { order: 2, titleKo: '치과에 임신 사실 반드시 알리기', descriptionKo: '치과 의사가 임신 사실을 알면 안전한 약재와 처치 방식을 선택해줍니다. 방문 전에 미리 알려주세요.' },
      { order: 3, titleKo: '방치의 위험성 함께 인식하기', descriptionKo: '임신 중 치주 질환은 조산 위험을 높일 수 있어요. 무조건 참는 것이 정답이 아닙니다.' },
    ],
    doList: [
      '치과 예약 대신 해주고 함께 동행하기',
      '임신 중 치과 치료 가능 여부 산부인과에도 확인하기',
    ],
    dontList: [
      '"임신 중엔 다 참아야 해"라며 방치하도록 두기',
      '치과 방문 자체를 무서워하게 방관하기',
    ],
  },
  {
    slug: 'wife-relies-on-mom',
    titleKo: '아내가 친정 엄마한테만 의존해요',
    summaryKo: '무슨 일이 생기면 나보다 친정에 먼저 연락하는 것 같아 서운할 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '서운함 표현 방식 바꾸기', descriptionKo: '"왜 나한테 안 말해?"보다 "나한테도 말해줘, 같이 해결하고 싶어"라는 방식으로 표현하면 다르게 전달돼요.' },
      { order: 2, titleKo: '먼저 믿을 수 있는 존재가 되기', descriptionKo: '아내가 가장 먼저 연락하는 상대는 가장 믿음직한 사람이에요. 작은 약속을 반복해서 지키는 것이 신뢰를 만들어요.' },
      { order: 3, titleKo: '역할을 구체적으로 제안하기', descriptionKo: '"내가 뭘 도와줄까?"보다 "이번 주 장 보는 건 내가 할게"처럼 구체적인 제안이 훨씬 실질적으로 느껴져요.' },
    ],
    doList: [
      '아내의 친정 의존을 적으로 보지 말고 협력 자원으로 활용하기',
      '내가 잘 할 수 있는 영역을 먼저 찾아 주도적으로 맡기',
    ],
    dontList: [
      '"왜 나보다 엄마를 더 믿어?"라며 경쟁하기',
      '친정 엄마의 도움을 막거나 불편하게 만들기',
    ],
  },
  {
    slug: 'pregnancy-pets',
    titleKo: '집에 고양이·강아지가 있어요',
    summaryKo: '반려동물이 임신 중 아내나 태아에게 영향을 줄까봐 걱정될 때',
    emoji: '/icons/ic-health.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '고양이 화장실 청소 아빠가 전담하기', descriptionKo: '고양이 배변에 톡소플라즈마 기생충이 있을 수 있어요. 임신 중에는 아빠가 화장실 청소를 전담해야 합니다.' },
      { order: 2, titleKo: '수의사에게 확인하기', descriptionKo: '강아지는 대부분 임신에 영향이 없지만, 예방접종·구충제 상태를 수의사에게 확인받으면 더 안심이 돼요.' },
      { order: 3, titleKo: '반려동물 아기 적응 준비하기', descriptionKo: '신생아 냄새가 나는 물건을 미리 반려동물에게 노출시키면 아기 탄생 후 적응이 훨씬 수월해요.' },
    ],
    doList: [
      '임신 중 고양이 화장실 청소 100% 아빠 담당',
      '반려동물 예방접종·구충 최신 상태 유지하기',
    ],
    dontList: [
      '아내에게 청소를 계속 맡기기',
      '반려동물을 갑자기 격리하거나 내보내기',
    ],
  },
  {
    slug: 'pregnancy-work-drinking',
    titleKo: '아내가 직장 음주 회식을 피하기 어려워해요',
    summaryKo: '임신 사실을 밝히기 애매한 상황에서 음주 압박이 있을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '밝히지 않아도 되는 멘트 준비하기', descriptionKo: '"위가 좋지 않아요", "약을 먹고 있어요"처럼 임신 사실을 굳이 공개하지 않아도 되는 자연스러운 표현을 함께 준비해주세요.' },
      { order: 2, titleKo: '회식 참석 최소화 전략 세우기', descriptionKo: '2부 이후 합류하거나 인사만 하고 일찍 나오는 방법을 미리 상사에게 양해 구해두면 부담이 줄어요.' },
      { order: 3, titleKo: '아내 결정을 무조건 지지하기', descriptionKo: '임신 사실 공개 여부는 아내가 결정할 문제예요. 아빠는 아내가 어떤 선택을 해도 지지하는 것이 역할입니다.' },
    ],
    doList: [
      '"밥 먼저 많이 먹어두면 덜 마실 수 있어" 같은 실용 팁 공유',
      '회식 당일 일찍 퇴근시켜 줄 수 있으면 픽업하러 가기',
    ],
    dontList: [
      '"그냥 안 가면 안 돼?"라며 해결책 강요하기',
      '"음료로 버텨"라는 무책임한 조언만 하기',
    ],
  },
  {
    slug: 'pregnancy-no-appetite',
    titleKo: '임신 중 아내 식욕이 아예 없어요',
    summaryKo: '입덧도 아닌데 먹고 싶은 게 없어서 영양 섭취가 걱정될 때',
    emoji: '/icons/ic-meal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '억지로 먹이려 하지 않기', descriptionKo: '"조금이라도 먹어"라는 강요는 오히려 역효과예요. 먹고 싶을 때, 먹을 수 있는 것부터 시작하는 게 맞아요.' },
      { order: 2, titleKo: '냄새 약한 음식 소량씩 챙기기', descriptionKo: '흰쌀밥, 두부, 과일, 크래커처럼 냄새가 약하고 소화가 잘 되는 음식을 작은 양으로 자주 준비해주세요.' },
      { order: 3, titleKo: '산부인과에서 상담받기', descriptionKo: '식욕 부진이 2주 이상 지속되면 영양 상태 확인이 필요합니다. 다음 검진 시 의사에게 반드시 이야기하세요.' },
    ],
    doList: [
      '아내가 조금이라도 먹었을 때 과하지 않게 반응해주기',
      '냉장고에 먹기 쉬운 간식 항상 채워두기',
    ],
    dontList: [
      '"그거라도 먹어야지"라며 강요하기',
      '식욕 없는 아내 앞에서 맛있는 음식 먼저 시키기',
    ],
  },
  {
    slug: 'dad-prenatal-class',
    titleKo: '아빠 산전 교육 어디서 받을 수 있어요?',
    summaryKo: '분만 과정과 신생아 돌봄을 미리 배우고 싶은데 방법을 몰랐을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'pregnancy',
    steps: [
      { order: 1, titleKo: '보건소·주민센터 무료 교육 신청', descriptionKo: '대부분 보건소에서 임산부·아빠 산전 교육을 무료로 운영해요. 동 주민센터나 보건소 홈페이지에서 일정을 확인하세요.' },
      { order: 2, titleKo: '분만 병원 부부 클래스 활용', descriptionKo: '분만 예정 병원에서 진행하는 부부 출산 준비 클래스에 함께 참여하면 실제 환경을 미리 익힐 수 있어요.' },
      { order: 3, titleKo: '아빠 커뮤니티·앱 활용하기', descriptionKo: '같은 상황의 아빠들과 교류할 수 있는 커뮤니티에 참여하면 현실적인 정보와 정서적 지지를 동시에 얻을 수 있어요.' },
    ],
    doList: [
      '아내와 함께 부부 클래스 등록하기',
      '신생아 목욕법·수유 자세 영상 미리 찾아보기',
    ],
    dontList: [
      '"어차피 병원에서 다 알려주겠지"라며 미루기',
      '혼자 공부하고 아내와 공유하지 않기',
    ],
  },

  // ── 병원 추가 (hospital +10) ──────────────────────────────────
  {
    slug: 'epidural-request',
    titleKo: '무통 주사, 어떻게 요청해야 해요?',
    summaryKo: '아내가 경막외 마취를 원하는데 타이밍과 요청 방법을 몰라 놓칠까봐 걱정될 때',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '진통 시작 즉시 요청하기', descriptionKo: '규칙적인 진통이 시작되면 바로 간호사에게 "무통 분만 원합니다"라고 말하세요. 자궁 경관이 많이 열리면 맞출 수 없어요.' },
      { order: 2, titleKo: '미리 의사에게 의향 전달하기', descriptionKo: '검진 시 "무통 분만 예정"이라고 미리 말해두면 당일 처리가 훨씬 빨라요. 분만 계획서에 적어두는 것도 방법입니다.' },
      { order: 3, titleKo: '맞춘 후 변화 체크하기', descriptionKo: '무통 주사 후 혈압이 낮아질 수 있어요. 아내가 어지럽거나 메슥거리면 바로 간호사에게 알려야 합니다.' },
    ],
    doList: [
      '무통 효과 나타나는 데 20~30분 걸린다는 것 미리 알아두기',
      '아내가 요청을 못하는 상황이면 아빠가 대신 요청하기',
    ],
    dontList: [
      '"그냥 참아봐"라며 결정 미루게 하기',
      '무통 주사에 대한 근거 없는 부작용 정보 흘리기',
    ],
  },
  {
    slug: 'choosing-hospital',
    titleKo: '분만 병원을 어디서 골라야 해요?',
    summaryKo: '산부인과가 너무 많아서 어떤 기준으로 선택해야 할지 막막할 때',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '위치·응급 대응 기준으로 좁히기', descriptionKo: '집에서 30분 이내, 야간·응급 분만 가능 여부가 가장 중요한 기준이에요. 밤에 진통이 오는 경우도 대비해야 합니다.' },
      { order: 2, titleKo: '분만 방식 옵션 확인하기', descriptionKo: '수중 분만, 가족 분만, 무통 분만 가능 여부를 미리 확인하고 아내가 원하는 방식과 맞는 병원을 고르세요.' },
      { order: 3, titleKo: '산후조리원 연계 여부 체크하기', descriptionKo: '병원 부설 또는 협력 산후조리원이 있으면 이동 부담이 훨씬 줄어요. 묶음 비용도 확인해두세요.' },
    ],
    doList: [
      '야간에 병원까지 실제 소요 시간 미리 테스트해보기',
      '건강보험심사평가원 사이트에서 평가 결과 확인하기',
    ],
    dontList: [
      '아내 혼자 알아보게 두기',
      '가격만 보고 선택하기',
    ],
  },
  {
    slug: 'baby-blues',
    titleKo: '아내가 병실에서 이유 없이 계속 울어요',
    summaryKo: '출산 직후 갑자기 눈물이 나고 예민해진 것 같아 당황스러울 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '베이비 블루스임을 이해하기', descriptionKo: '출산 후 3~5일 이내에 나타나는 감정 기복은 "베이비 블루스"라는 정상적인 현상이에요. 산후우울증과는 달리 1~2주 내에 자연스럽게 회복됩니다.' },
      { order: 2, titleKo: '조용히 곁에 있어주기', descriptionKo: '"왜 울어?", "뭐가 문제야?"라는 질문보다 그냥 손 잡아주거나 안아주는 것이 훨씬 효과적이에요.' },
      { order: 3, titleKo: '2주 이상 지속되면 전문 도움 받기', descriptionKo: '2주 이상 무기력, 아기에 대한 무관심, 수면 장애가 지속되면 산후우울증일 수 있어요. 산부인과에 먼저 이야기하세요.' },
    ],
    doList: [
      '"많이 힘들었지, 정말 수고했어"라고 진심으로 말해주기',
      '병실 방문객 수를 줄여 아내가 쉴 수 있게 조율하기',
    ],
    dontList: [
      '"아기 낳고 왜 이래?" 절대 금지',
      '감정을 과장이나 예민함으로 치부하기',
    ],
  },
  {
    slug: 'cord-blood-banking',
    titleKo: '제대혈 보관, 꼭 해야 하나요?',
    summaryKo: '줄기세포 보관 영업 연락이 계속 와서 꼭 필요한 건지 판단이 안 될 때',
    emoji: '/icons/ic-health.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '공공 기증과 사설 보관 차이 이해하기', descriptionKo: '공공 제대혈 기증은 무료이고 사회적 의미가 있어요. 사설 보관은 연간 비용이 발생하고, 실제 가족 내 사용률은 매우 낮습니다.' },
      { order: 2, titleKo: '소아과·산부인과 의사 의견 구하기', descriptionKo: '영업 자료보다 담당 의사의 의견이 더 신뢰할 수 있어요. 다음 검진 때 직접 물어보세요.' },
      { order: 3, titleKo: '결정은 부부가 함께', descriptionKo: '비용, 실효성, 가족력 등을 종합해서 부부가 함께 결정하세요. 영업 전화에 즉시 사인하지 마세요.' },
    ],
    doList: [
      '공공 제대혈 기증 등록 방법 미리 알아두기',
      '결정 전 최소 2~3일 여유를 두고 검토하기',
    ],
    dontList: [
      '영업 담당자 말만 듣고 당일 계약하기',
      '비용 부담에 아내 의견 묻지 않고 혼자 결정하기',
    ],
  },
  {
    slug: 'work-on-due-date',
    titleKo: '출산 당일 직장 연락을 어떻게 해야 해요?',
    summaryKo: '예정일 즈음 업무가 잡혀 있는데 갑자기 빠질 경우 어떻게 할지 몰랐을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '예정일 2주 전 인수인계 마무리하기', descriptionKo: '출산은 예정일보다 빨리 올 수 있어요. 2주 전에 업무 인수인계를 완료해두면 당일 당황할 일이 없어요.' },
      { order: 2, titleKo: '비상 연락 담당자 미리 정해두기', descriptionKo: '"내가 연락 못할 경우 ○○에게 알려달라"고 사전에 팀 내 담당자를 지정해두세요.' },
      { order: 3, titleKo: '배우자 출산 휴가 미리 신청하기', descriptionKo: '배우자 출산 휴가는 10일이에요. 출산 예정일 전후로 사용 가능하며, 사전 신청이 훨씬 유리합니다.' },
    ],
    doList: [
      '출산 당일 사용할 메시지 템플릿 미리 만들어두기',
      '팀장·인사팀에 출산 예정일 미리 공유해두기',
    ],
    dontList: [
      '"그때 가서 생각하지"라며 아무 준비 없이 두기',
      '출산 휴가 눈치 보여서 제대로 쓰지 않기',
    ],
  },
  {
    slug: 'nicu-admission',
    titleKo: '아기가 신생아 중환자실에 들어갔어요',
    summaryKo: 'NICU 입원 소식을 갑자기 들었을 때 막막하고 두려운 상황',
    emoji: '/icons/sit-fever.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '의료진에게 정확한 상황 파악하기', descriptionKo: '담당 의사에게 "현재 상태", "치료 계획", "면회 가능 시간"을 구체적으로 질문하세요. 막연한 불안보다 정보가 먼저입니다.' },
      { order: 2, titleKo: '아내 곁을 먼저 지키기', descriptionKo: '아기 걱정과 동시에 아내의 심리적 충격도 매우 큽니다. 지금 당장 가장 필요한 것은 옆에 있어주는 것이에요.' },
      { order: 3, titleKo: '면회를 최대한 활용하기', descriptionKo: 'NICU 면회 시간에 아기에게 말을 걸고 손을 잡아주세요. 부모의 목소리와 체온이 아기 회복에 실제로 도움이 됩니다.' },
    ],
    doList: [
      '모유 수유 계획이었다면 유축 시작 방법 간호사에게 물어보기',
      'NICU 부모 지원 그룹이나 상담 서비스 찾아보기',
    ],
    dontList: [
      '"왜 이렇게 됐어?"라며 서로 원망하기',
      '의료진 말보다 인터넷 후기를 더 믿기',
    ],
  },
  {
    slug: 'postpartum-care-cost',
    titleKo: '산후조리원 비용이 너무 부담돼요',
    summaryKo: '2주에 200~400만원인데 꼭 가야 하는지, 어떻게 줄일 수 있는지 모를 때',
    emoji: '/icons/ic-goal.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '정부 지원 먼저 확인하기', descriptionKo: '산모·신생아 건강관리 지원 사업으로 건강관리사 파견 서비스를 소득 기준에 따라 무료~저렴하게 이용할 수 있어요. 국민행복카드로도 조리원 비용 일부를 결제할 수 있어요.' },
      { order: 2, titleKo: '지역 공공 산후조리원 알아보기', descriptionKo: '일부 시·군·구에서 공공 산후조리원을 운영해요. 민간에 비해 비용이 30~50% 저렴하고 품질도 좋습니다.' },
      { order: 3, titleKo: '우선순위 따라 기간 조율하기', descriptionKo: '1~2주 조리원 후 가족 지원으로 이어가는 방법도 있어요. 100% 조리원이 아닌 혼합 방식도 충분히 현실적이에요.' },
    ],
    doList: [
      '복지로(www.bokjiro.go.kr)에서 지원 항목 확인하기',
      '조리원 비교 견학 다녀오기 (시설·인력 직접 확인)',
    ],
    dontList: [
      '"그냥 집에서 하면 되지"라며 아내 의견 무시하기',
      '비용만 보고 퀄리티 확인 없이 최저가로만 선택하기',
    ],
  },
  {
    slug: 'newborn-not-cute',
    titleKo: '아기가 처음엔 솔직히 예쁘지 않았어요',
    summaryKo: '예쁠 줄 알았는데 부어있고 낯설어서 당황했을 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '신생아 외형 정상 범위 이해하기', descriptionKo: '갓 태어난 신생아는 두개골 압박으로 머리가 뾰족하고, 피부가 붉거나 흰 태지로 덮여 있어요. 이는 모두 정상이며 며칠 내로 달라집니다.' },
      { order: 2, titleKo: '첫 감정에 죄책감 갖지 않기', descriptionKo: '"이게 맞나?"라는 첫 감정은 많은 아빠가 경험해요. 그 솔직함이 나쁜 아빠를 의미하지 않습니다.' },
      { order: 3, titleKo: '접촉을 늘려 애착 만들기', descriptionKo: '직접 안아보고, 눈을 맞추고, 말을 걸면 애착은 자연스럽게 생겨요. 기다리면 됩니다.' },
    ],
    doList: [
      '아내에게는 솔직한 감정 표현하되 표현 방식에 주의하기',
      '첫 며칠간 사진을 많이 찍어두기 — 나중에 소중한 기억이 돼요',
    ],
    dontList: [
      '"생각보다 별로네"라고 입 밖에 내기',
      '아이 외모에 대한 실망감을 아내에게 직접 표현하기',
    ],
  },
  {
    slug: 'breastfeeding-switch',
    titleKo: '아내가 모유 수유를 포기하고 싶어해요',
    summaryKo: '젖이 잘 안 나오거나 너무 힘들어서 분유로 전환하고 싶어할 때',
    emoji: '/icons/ic-health.png',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '아내의 결정을 존중하기', descriptionKo: '수유 방식은 아내가 결정할 권리가 있어요. "조금만 더 해봐"라는 말은 압박이 됩니다. 무조건 지지해주세요.' },
      { order: 2, titleKo: '분유 수유도 완전한 선택임을 확인하기', descriptionKo: '분유로 키운 아이도 완벽하게 건강하게 자라요. 모유냐 분유냐보다 엄마의 컨디션과 정서 상태가 더 중요합니다.' },
      { order: 3, titleKo: '수유 상담사 연결 도와주기', descriptionKo: '아내가 조금 더 시도해보고 싶다면 수유 상담사(병원, 보건소)를 연결해주세요. 자세나 방법 문제로 해결되는 경우도 많아요.' },
    ],
    doList: [
      '분유 수유 시 아빠가 야간 수유를 전담해서 아내 수면 확보하기',
      '"잘 결정한 거야"라는 말 한마디 건네기',
    ],
    dontList: [
      '"모유가 더 좋다는데"라며 마음 흔들기',
      '시댁·친정에서 압박하면 아내 편에서 막아주기',
    ],
  },
  {
    slug: 'carseat-check',
    titleKo: '카시트 설치가 제대로 됐는지 모르겠어요',
    summaryKo: '퇴원 당일 카시트를 설치했는데 올바른 건지 불안할 때',
    emoji: '/icons/sit-hospital-bag.svg',
    tag: 'hospital',
    steps: [
      { order: 1, titleKo: '퇴원 3일 전에 미리 설치하기', descriptionKo: '퇴원 당일 설치하면 실수가 생기기 쉬어요. 3일 전 설치 후 흔들림 여부를 충분히 테스트하세요.' },
      { order: 2, titleKo: '제품 전용 영상으로 확인하기', descriptionKo: '카시트 브랜드·모델명으로 유튜브 설치 영상을 검색해서 따라하세요. 좌우로 5cm 이상 흔들리면 다시 설치해야 합니다.' },
      { order: 3, titleKo: '각도와 방향 반드시 확인하기', descriptionKo: '신생아는 뒤보기(후향식) 설치가 필수예요. 각도 조절 없이 설치하면 머리가 앞으로 쏠릴 수 있습니다.' },
    ],
    doList: [
      '경찰서·소방서에서 카시트 설치 무료 점검 서비스 활용하기',
      '퇴원 전 차량에서 아기 탑승 연습 한 번 해보기',
    ],
    dontList: [
      '퇴원 당일 처음 설치하기',
      '중고 카시트 사용 — 사고 이력을 알 수 없어 위험해요',
    ],
  },

  // ── 신생아 추가 (newborn +10) ─────────────────────────────────
  {
    slug: 'no-burp',
    titleKo: '아기가 트림을 절대 안 해요',
    summaryKo: '수유 후 등을 아무리 두드려도 트림이 안 나와서 걱정될 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '자세를 바꿔서 시도하기', descriptionKo: '세워서 어깨에 얹기, 무릎에 엎드리기, 앉힌 상태로 등 문지르기 등 자세를 달리해보세요. 자세에 따라 트림이 더 잘 나오는 경우가 있어요.' },
      { order: 2, titleKo: '10~15분 기다리기', descriptionKo: '트림이 안 나와도 10~15분이 지나면 대부분 공기가 자연스럽게 빠져요. 너무 오래 두드리지 않아도 됩니다.' },
      { order: 3, titleKo: '수유 자세 점검하기', descriptionKo: '수유 중 공기를 많이 삼키면 트림이 더 자주 필요해져요. 젖병은 45도 기울여 공기 유입을 줄이고, 젖꼭지 크기가 맞는지 확인하세요.' },
    ],
    doList: [
      '트림 후 바로 눕히지 말고 5~10분 세워 안고 있기',
      '트림 안 해도 잘 자면 다음 수유까지 기다려도 됩니다',
    ],
    dontList: [
      '너무 세게 두드리기 — 살살 문지르는 게 더 효과적',
      '트림 못 한다고 수유를 미루기',
    ],
  },
  {
    slug: 'blue-hands-feet',
    titleKo: '신생아 손발이 파랗게 보여요',
    summaryKo: '아기 손발 끝이 파랗게 보여서 심장 문제인가 겁이 날 때',
    emoji: '/icons/sit-fever.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '말단 청색증 정상 범위 이해하기', descriptionKo: '신생아는 혈액순환이 아직 미성숙해서 손발 끝이 파랗게 보일 수 있어요. 생후 2~3일 내 흔하게 나타나는 현상입니다.' },
      { order: 2, titleKo: '입술·혀 색깔 확인하기', descriptionKo: '손발이 파래도 입술과 혀가 분홍색이면 대부분 정상이에요. 입술·혀까지 파래지면 즉시 응급실로 가야 합니다.' },
      { order: 3, titleKo: '체온과 수유 상태 함께 체크하기', descriptionKo: '몸이 차갑거나 수유를 잘 못하거나 축 처지는 증상이 동반되면 소아과에 연락하세요.' },
    ],
    doList: [
      '아기 몸통 온기 확인 — 손발보다 몸통 체온이 더 중요',
      '불안하면 소아과에 사진 찍어 전송해서 확인받기',
    ],
    dontList: [
      '손발 색깔만 보고 바로 응급실로 가기',
      '혼자 결론 내리고 방치하기',
    ],
  },
  {
    slug: 'spitting-up',
    titleKo: '먹고 나면 바로 토해요',
    summaryKo: '수유 직후 게워내서 제대로 먹인 건지 매번 불안할 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '소량 게워내기 vs 구토 구분하기', descriptionKo: '소량이 흘러나오는 것은 위식도 역류로 정상이에요. 하지만 수유량 전부를 분수처럼 뿜어내거나 색깔이 초록·빨강이면 소아과에 가야 합니다.' },
      { order: 2, titleKo: '수유 후 30분 세워두기', descriptionKo: '수유 후 바로 눕히면 역류가 심해져요. 최소 20~30분 세워서 안고 있어주세요.' },
      { order: 3, titleKo: '체중 증가 추이 확인하기', descriptionKo: '많이 게워내도 체중이 꾸준히 느는 중이라면 문제가 없어요. 체중이 줄거나 늘지 않으면 소아과에 가세요.' },
    ],
    doList: [
      '트림 충분히 시킨 후 눕히기',
      '수유 양을 조금 줄이고 횟수를 늘려보기',
    ],
    dontList: [
      '게워낸 만큼 바로 더 먹이기',
      '역류 방지 쿠션에 혼자 재우기 — 질식 위험 있음',
    ],
  },
  {
    slug: 'skin-rash',
    titleKo: '아기 피부에 갑자기 뭔가 올라왔어요',
    summaryKo: '붉은 점, 발진, 작은 돌기가 생겼을 때 뭔가 잘못된 건지 겁이 날 때',
    emoji: '/icons/sit-fever.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '신생아 피부 반응 정상 범위 알기', descriptionKo: '신생아 여드름, 태열, 피지 과분비, 중독성 홍반은 생후 2~4주에 흔하게 나타납니다. 대부분 4~6주면 자연스럽게 사라져요.' },
      { order: 2, titleKo: '아무것도 바르지 않기', descriptionKo: '로션, 오일, 민간 처방 등을 함부로 바르면 오히려 악화될 수 있어요. 일단 아무것도 바르지 말고 지켜보세요.' },
      { order: 3, titleKo: '소아과 방문 기준 알아두기', descriptionKo: '38도 이상 발열 동반, 물집 형태, 전신으로 빠르게 퍼지는 경우는 소아과에 가야 합니다.' },
    ],
    doList: [
      '사진 찍어두고 변화 양상 기록하기',
      '불안하면 소아과에 사진 전송해서 확인받기',
    ],
    dontList: [
      '인터넷 후기 보고 임의로 연고 바르기',
      '발열 없이 얼굴에만 있는 발진을 응급으로 판단하기',
    ],
  },
  {
    slug: 'flat-head',
    titleKo: '아기 머리가 한쪽으로 납작해요',
    summaryKo: '한쪽만 보고 자는지 머리가 찌그러진 것처럼 보일 때',
    emoji: '/icons/ic-health.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '자는 방향 번갈아가며 바꾸기', descriptionKo: '아기가 항상 같은 방향을 보고 자지 않도록 수유 후 번갈아 눕혀주세요. 방향 전환이 가장 효과적인 예방·개선법입니다.' },
      { order: 2, titleKo: '터미 타임(엎드리기 시간) 늘리기', descriptionKo: '하루 3~4회, 각 3~5분씩 깨어있는 상태에서 엎드리게 해주면 뒤통수 압박을 줄이고 목 근육도 강화돼요. 반드시 깨어있을 때만 진행하세요.' },
      { order: 3, titleKo: '심하면 소아과에서 평가받기', descriptionKo: '4개월까지 개선이 없거나 한쪽으로만 고개가 돌아가는 "사경" 증상이 있으면 소아과에서 물리치료 여부를 확인하세요.' },
    ],
    doList: [
      '수면 시 머리 위치 번갈아 기록해두기',
      '터미 타임은 항상 보호자가 지켜보는 상태에서 하기',
    ],
    dontList: [
      '머리 모양 교정 베개 임의로 사용하기 — 질식 위험',
      '자연스럽게 좋아지겠지 하며 수개월 방치하기',
    ],
  },
  {
    slug: 'day-night-reversal',
    titleKo: '아기 낮밤이 완전히 바뀌었어요',
    summaryKo: '낮에는 잘 자는데 밤에만 깨서 부부가 모두 지칠 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '낮에 빛과 자극 주기', descriptionKo: '낮에는 커튼을 열어 자연광을 쬐게 하고, 수유 후 5~10분 눈을 맞추며 상호작용해주세요. 낮이 활동 시간임을 신체가 인식하도록 도와주세요.' },
      { order: 2, titleKo: '밤 수유는 조용하고 어둡게', descriptionKo: '밤 수유 시 불을 밝히거나 말을 많이 걸지 마세요. 최소한의 자극으로 먹이고 바로 재우는 것이 밤을 밤으로 인식하게 합니다.' },
      { order: 3, titleKo: '6~8주 기다리기', descriptionKo: '신생아의 낮밤 교정은 보통 6~8주 사이에 자연스럽게 이루어져요. 지금은 버티는 것이 목표입니다.' },
    ],
    doList: [
      '낮잠 길이를 2시간 이내로 자연스럽게 제한하기',
      '부부 교대 수면 시스템 운영하기',
    ],
    dontList: [
      '낮잠을 억지로 깨워가며 교정 시도하기',
      '수면 교육을 신생아 시기부터 강행하기',
    ],
  },
  {
    slug: 'cries-with-dad',
    titleKo: '아빠가 안으면 아기가 바로 울어요',
    summaryKo: '엄마한테만 가고 아빠가 안으면 울어서 자신감이 떨어질 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '반복 접촉으로 애착 만들기', descriptionKo: '신생아는 가장 자주 접촉하는 사람에게 먼저 친숙해져요. 목욕·기저귀 교체·마사지 등 규칙적인 돌봄을 직접 맡으세요.' },
      { order: 2, titleKo: '목소리와 체온 먼저 익히게 하기', descriptionKo: '안기 전에 아기 시야에 들어오며 먼저 말을 걸어주세요. 갑자기 안아드는 것보다 예고하는 것이 덜 놀라요.' },
      { order: 3, titleKo: '울어도 내려놓지 않기', descriptionKo: '울기 시작하면 바로 엄마에게 넘기고 싶어지지만, 조금만 더 안고 달래는 연습을 해주세요. 포기하지 않는 것이 애착 형성의 핵심이에요.' },
    ],
    doList: [
      '매일 일정한 시간 아빠가 단독으로 돌봄 담당하기',
      '"울어도 괜찮아, 우리 익숙해질 수 있어"라고 스스로에게 말하기',
    ],
    dontList: [
      '"나는 안 되나봐"라고 포기하기',
      '울 때마다 즉시 엄마에게 넘기기',
    ],
  },
  {
    slug: 'neck-fold-smell',
    titleKo: '아기 목 주름에서 냄새가 나요',
    summaryKo: '목·겨드랑이·사타구니 접히는 부분이 빨갛거나 냄새가 날 때',
    emoji: '/icons/ic-health.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '목욕 후 접힌 부분 완전히 말리기', descriptionKo: '목욕 후 수건으로 접히는 부분을 살짝 벌려서 완전히 말려주세요. 습기가 남으면 짓무름과 염증이 생기기 쉬워요.' },
      { order: 2, titleKo: '주기적으로 확인하기', descriptionKo: '기저귀 교체나 목욕 때 접히는 부분을 주기적으로 열어 확인해주세요. 빨갛거나 진물이 있으면 소아과에 가야 합니다.' },
      { order: 3, titleKo: '필요하면 기저귀 크림 소량 사용', descriptionKo: '마찰이 심한 부위에 아기용 징크 크림 또는 기저귀 크림을 얇게 발라주면 보호 효과가 있어요.' },
    ],
    doList: [
      '목 지지 없이 안을 때 목 주름 접히지 않게 자세 조절하기',
      '로션보다 파우더가 효과적인 경우도 있음 — 소아과 확인 후 사용',
    ],
    dontList: [
      '냄새 난다고 과도하게 닦거나 세게 문지르기',
      '개선 없으면 임의로 다양한 제품 동시에 바르기',
    ],
  },
  {
    slug: 'falls-asleep-feeding',
    titleKo: '수유 중에 아기가 자꾸 잠들어요',
    summaryKo: '먹다가 졸아버려서 충분히 먹은 건지 알 수 없을 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '자극으로 깨우기', descriptionKo: '귓불 살짝 건드리기, 발바닥 자극, 옷을 벗겨 서늘하게 해주기 등으로 잠에서 깨워 수유를 이어가세요.' },
      { order: 2, titleKo: '충분히 먹었는지 기저귀로 확인하기', descriptionKo: '하루 소변 기저귀 6장 이상, 노란색 변이 규칙적으로 나오면 수유량이 충분하다는 신호예요.' },
      { order: 3, titleKo: '수유 간격 기록하기', descriptionKo: '먹기 시작한 시간, 양쪽 수유 시간을 기록해두면 얼마나 먹었는지 파악하기 쉬워요. 수유 앱을 활용해보세요.' },
    ],
    doList: [
      '졸리기 전에 수유 시작하기 — 배고픈 타이밍 놓치지 않기',
      '모유라면 수유 중 자세를 바꿔 자극 주기',
    ],
    dontList: [
      '잠든 아기를 깨우는 게 나쁘다고 생각해 그냥 두기',
      '먹은 양이 부족한데 체중 확인 없이 방치하기',
    ],
  },
  {
    slug: 'pacifier-refusal',
    titleKo: '공갈젖꼭지를 거부해요',
    summaryKo: '달래기 방법 중 공갈젖꼭지가 전혀 안 먹힐 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'newborn',
    steps: [
      { order: 1, titleKo: '여러 종류 시도해보기', descriptionKo: '모양, 크기, 재질이 다른 공갈젖꼭지가 다양해요. 한 가지가 안 맞는다고 포기하지 말고 2~3종류를 시도해보세요.' },
      { order: 2, titleKo: '수유 직후 타이밍 바꾸기', descriptionKo: '수유 직후보다 배가 조금 찬 상태에서 달래기용으로 사용할 때 더 잘 받아들여요.' },
      { order: 3, titleKo: '대체 달래기 방법 찾기', descriptionKo: '모든 아기가 공갈젖꼭지를 좋아하는 건 아니에요. 손가락 빨기, 흔들기, 백색소음 등 그 아기에게 맞는 방법을 찾아가면 됩니다.' },
    ],
    doList: [
      '처음 시도는 엄마 젖 냄새가 있을 때 해보기',
      '거부해도 며칠 뒤 다시 시도해보기',
    ],
    dontList: [
      '"이 아기는 공갈젖꼭지 못 쓰는구나"라고 단정하고 아예 포기하기',
      '억지로 입에 넣으려 하기',
    ],
  },

  // ── 관계 추가 (relationship +10) ─────────────────────────────
  {
    slug: 'not-dad-enough',
    titleKo: '아내가 "아빠답지 않다"고 해요',
    summaryKo: '육아 기대치와 현실의 차이로 아내가 반복적으로 실망감을 표현할 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '구체적으로 물어보기', descriptionKo: '"어떤 부분이 제일 힘들어?"라고 먼저 물어보세요. 모호한 불만보다 구체적인 요청이 나올 때 해결이 쉬워져요.' },
      { order: 2, titleKo: '방어하지 않기', descriptionKo: '"나도 열심히 하고 있잖아"라는 반응은 대화를 막아요. 일단 들어주고 "그랬구나, 미안해"라는 말로 받아주면 분위기가 달라져요.' },
      { order: 3, titleKo: '작은 변화 하나부터 시작하기', descriptionKo: '모든 걸 한꺼번에 바꾸려 하지 말고, 아내가 원하는 것 중 하나를 골라 1주일만 집중해서 실천해보세요.' },
    ],
    doList: [
      '아내가 힘들어하는 영역을 목록으로 함께 정리하기',
      '실천한 것을 말보다 행동으로 쌓아가기',
    ],
    dontList: [
      '"나는 이미 열심히 하는데"라며 점수 매기기 경쟁하기',
      '비판을 인신공격으로 받아들여 감정적으로 반응하기',
    ],
  },
  {
    slug: 'wife-ignores-husband',
    titleKo: '아이 생기고 아내가 나에게 관심이 없어요',
    summaryKo: '아내의 모든 에너지가 아이에게만 집중돼 남편인 내가 존재감이 사라진 것 같을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '지금 이 시기를 이해하기', descriptionKo: '출산 후 엄마의 뇌는 생물학적으로 아이에게 집중하도록 변해요. 남편에 대한 관심이 줄어드는 것은 의도적인 무시가 아니에요.' },
      { order: 2, titleKo: '육아에 함께 뛰어들기', descriptionKo: '"아이가 바쁘니 나는 기다릴게"가 아니라 육아 한가운데 함께 들어가는 것이 관계를 회복하는 가장 빠른 방법이에요.' },
      { order: 3, titleKo: '소통 창구 유지하기', descriptionKo: '하루 10분이라도 아이 이야기가 아닌 서로 이야기를 나누는 시간을 만들어보세요. 부부 대화가 사라지면 관계는 더 멀어져요.' },
    ],
    doList: [
      '불만을 쌓아두지 말고 부드럽게 "나도 챙겨줬으면 해"라고 표현하기',
      '아이를 재운 후 잠깐이라도 함께하는 시간 만들기',
    ],
    dontList: [
      '서운함을 말 없이 삭이다가 폭발하기',
      '"아이한테만 신경 쓰면 나는 뭐가 돼?"라고 비교하기',
    ],
  },
  {
    slug: 'more-fights-after-leave',
    titleKo: '육아휴직 이후 오히려 더 자주 다퉈요',
    summaryKo: '같이 있는 시간이 많아졌는데 갈등도 함께 늘어난 상황',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '기대치 차이 확인하기', descriptionKo: '육아휴직 중 집에 있는 사람과 출근하는 사람의 역할 기대가 다를 수 있어요. "나는 이걸 기대하고 있어"를 각자 솔직하게 말해보세요.' },
      { order: 2, titleKo: '가사·육아 분담 재합의하기', descriptionKo: '어느 쪽도 일방적으로 더 많이 하고 있다고 느끼지 않도록, 구체적인 역할을 목록으로 정리해 합의하세요.' },
      { order: 3, titleKo: '다툼의 패턴 파악하기', descriptionKo: '어떤 상황에서 자주 다투는지 패턴을 찾아보세요. 갈등이 특정 시간대·상황에 집중되어 있으면 그 구조를 바꾸는 게 빠릅니다.' },
    ],
    doList: [
      '"지금 대화하기 좋은 타이밍이야?"라고 먼저 확인하고 대화 시작하기',
      '서로 칭찬하는 말을 하루 한 번 의도적으로 하기',
    ],
    dontList: [
      '피곤하고 예민한 시간대에 무거운 주제 꺼내기',
      '지난 싸움 내용을 새로운 다툼에 끌어오기',
    ],
  },
  {
    slug: 'inlaw-not-defended',
    titleKo: '시댁 문제에서 아내 편을 못 들었어요',
    summaryKo: '시댁 갈등 상황에서 중간에서 눈치만 보다가 아내에게 서운하다는 말을 들었을 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '먼저 인정하기', descriptionKo: '"내가 그때 더 명확하게 말했어야 했어. 미안해"라고 먼저 인정하세요. 설명보다 인정이 훨씬 빨리 관계를 회복시켜요.' },
      { order: 2, titleKo: '다음 번엔 어떻게 할지 함께 정하기', descriptionKo: '같은 상황이 반복될 수 있어요. 미리 "이런 상황에서는 이렇게 말할게"라고 역할을 명확히 해두면 아내도 안심해요.' },
      { order: 3, titleKo: '내 부모님 문제는 내가 대화하기', descriptionKo: '시댁 관련 이야기는 아빠가 직접 부모님에게 전달하세요. 아내가 혼자 시댁과 싸우게 두지 마세요.' },
    ],
    doList: [
      '시댁 방문 전 아내와 대화 전략 미리 합의하기',
      '"우리 두 사람이 먼저야"라는 원칙 명확히 하기',
    ],
    dontList: [
      '"부모님도 이해해야지"라며 시댁 입장 대변하기',
      '아내 감정을 과민 반응으로 치부하기',
    ],
  },
  {
    slug: 'effort-not-recognized',
    titleKo: '열심히 하는데 아내가 인정을 안 해줘요',
    summaryKo: '나름대로 집안일, 육아를 하고 있는데 "안 보인다"는 말을 들을 때',
    emoji: '/icons/ic-goal.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '방향이 맞는지 확인하기', descriptionKo: '내가 열심히 하는 것이 아내가 원하는 것과 다를 수 있어요. "내가 뭘 더 하면 좋겠어?"라고 직접 물어보세요.' },
      { order: 2, titleKo: '보이게 하기', descriptionKo: '한 일을 말로 알리는 게 어색할 수 있지만 "청소 다 했어", "저녁 내가 할게"처럼 명확히 표현하면 서로의 노력이 더 잘 보여요.' },
      { order: 3, titleKo: '인정을 기다리기보다 먼저 인정하기', descriptionKo: '아내의 노력을 내가 먼저 구체적으로 칭찬해주세요. 인정 받고 싶다면 먼저 인정하는 것이 가장 빠른 방법이에요.' },
    ],
    doList: [
      '"오늘 이거 했어"라고 말로 공유하는 습관 만들기',
      '무엇을 하면 도움이 되는지 주기적으로 확인하기',
    ],
    dontList: [
      '"내가 이렇게 하는데 왜 모르냐"고 토라지기',
      '상대 노력은 당연히 여기면서 내 노력만 인정받으려 하기',
    ],
  },
  {
    slug: 'wife-vents-at-door',
    titleKo: '퇴근하면 아내가 바로 쏟아내요',
    summaryKo: '하루 종일 쌓인 육아 스트레스를 내가 문 열자마자 받아야 할 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '전환 시간을 서로 요청하기', descriptionKo: '퇴근 후 10~15분은 서로 "전환 시간"으로 약속하세요. 아내도, 나도 준비가 됐을 때 더 잘 듣고 말할 수 있어요.' },
      { order: 2, titleKo: '들을 준비가 됐을 때 신호 주기', descriptionKo: '"옷 갈아입고 올게, 그때 들을게"처럼 준비가 됐다는 신호를 주세요. 아내도 무시당하는 게 아니라 존중받고 있다고 느껴요.' },
      { order: 3, titleKo: '해결보다 공감 먼저', descriptionKo: '아내가 원하는 건 대부분 해결책이 아닌 공감이에요. "많이 힘들었겠다"라는 한마디로 충분한 경우가 많아요.' },
    ],
    doList: [
      '퇴근 전 "오늘 어땠어?"라고 먼저 문자 보내기',
      '들어주는 시간과 내 이야기하는 시간을 번갈아 가지기',
    ],
    dontList: [
      '힘들다고 즉시 핸드폰 켜고 피하기',
      '"나도 오늘 힘들었어"로 바로 화제 전환하기',
    ],
  },
  {
    slug: 'fight-in-front-of-kid',
    titleKo: '아이 앞에서 부부싸움을 했어요',
    summaryKo: '아이가 지켜보는 상황에서 목소리가 높아졌고 죄책감이 드는 상황',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '아이 앞에서 화해 장면 보여주기', descriptionKo: '싸우는 장면을 봤다면 화해하는 장면도 보여주세요. "엄마 아빠가 화가 났었는데, 이제 잘 해결했어"라고 말해주세요.' },
      { order: 2, titleKo: '아이에게 설명하기', descriptionKo: '"엄마 아빠가 의견이 달랐어. 싸움은 나쁜 게 아니야, 근데 목소리가 커진 건 미안해"처럼 연령에 맞게 설명해주세요.' },
      { order: 3, titleKo: '다음 번엔 자리를 바꾸기', descriptionKo: '감정이 격해지면 "잠깐 방에서 얘기하자"며 아이 시야 밖으로 이동하는 약속을 부부가 미리 정해두세요.' },
    ],
    doList: [
      '싸운 직후 아이를 안아주며 괜찮다고 안심시키기',
      '화해 후 부부가 함께 아이에게 다가가기',
    ],
    dontList: [
      '아이가 봤다는 걸 무시하고 그냥 넘어가기',
      '"애기는 몰라"라고 가볍게 여기기',
    ],
  },
  {
    slug: 'breadwinner-pressure',
    titleKo: '내가 혼자 생활비를 전담하는 게 서로 불편해요',
    summaryKo: '아내 육아휴직 기간 동안 경제적 역할이 바뀌면서 심리적 부담이 커질 때',
    emoji: '/icons/ic-goal.png',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '역할을 불평등이 아닌 시기적 선택으로 보기', descriptionKo: '지금의 역할 분담은 영구적인 구조가 아니에요. 서로 이 시기를 함께 통과하고 있다는 인식이 심리적 부담을 줄여줘요.' },
      { order: 2, titleKo: '수입·지출 함께 공유하기', descriptionKo: '돈 관리를 혼자 하면 불안감이 커져요. 월 예산을 함께 확인하고 지출 내역을 공유하면 아내도, 나도 덜 답답합니다.' },
      { order: 3, titleKo: '아내의 무급 노동을 인정하기', descriptionKo: '육아는 경제적 가치로 환산하면 상당한 노동이에요. "네가 아이 돌봐줘서 내가 일할 수 있어"라고 인식하고 표현해주세요.' },
    ],
    doList: [
      '월 가계부 함께 작성하고 소통 유지하기',
      '아내의 "용돈"이 아닌 생활비 공동 관리 방식 찾기',
    ],
    dontList: [
      '"내가 돈 버니까"라는 말 절대 금지',
      '지출 내역을 아내에게 숨기거나 혼자 결정하기',
    ],
  },
  {
    slug: 'no-intimacy',
    titleKo: '아이 낳고 부부 관계가 사라졌어요',
    summaryKo: '수개월째 부부 관계가 없어서 서로 불편하지만 먼저 말을 못 꺼내는 상황',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '회복 기간이 있다는 걸 이해하기', descriptionKo: '출산 후 6~8주는 의학적 회복 기간이에요. 이후에도 호르몬 변화, 수면 부족, 피로로 인해 관계를 원하지 않을 수 있어요.' },
      { order: 2, titleKo: '스킨십과 대화에서 다시 시작하기', descriptionKo: '갑자기 관계를 요구하기보다 손 잡기, 안아주기, 대화 나누기에서 다시 시작하세요. 친밀감이 먼저 회복돼야 자연스러워요.' },
      { order: 3, titleKo: '아내의 몸 상태를 먼저 배려하기', descriptionKo: '아내가 준비됐을 때 말할 수 있도록 안전한 분위기를 만드세요. "언제든 네가 원할 때"라는 말 한마디가 큰 안심이 돼요.' },
    ],
    doList: [
      '"부담 없어, 네 컨디션이 먼저야"라고 명확히 전하기',
      '부부만의 시간(드라이브, 짧은 외출)으로 친밀감 회복하기',
    ],
    dontList: [
      '압박하거나 삐치기',
      '"다른 부부들은 안 그렇다던데"라는 말 하기',
    ],
  },
  {
    slug: 'inlaw-parenting-clash',
    titleKo: '처가와 육아 방식이 달라서 매번 부딪혀요',
    summaryKo: '훈육 방식, 먹이는 음식, 미디어 노출 등에서 처부모님 의견과 충돌할 때',
    emoji: '/icons/sit-postpartum.svg',
    tag: 'relationship',
    steps: [
      { order: 1, titleKo: '부부 기준 먼저 합의하기', descriptionKo: '외부 갈등을 해결하기 전에 부부가 먼저 "우리 집 기준"을 합의해야 해요. 둘의 합의가 없으면 어떤 외부 갈등도 해결되지 않아요.' },
      { order: 2, titleKo: '아내가 직접 전달하게 하기', descriptionKo: '처가 문제는 아내가 직접 부모님에게 말하는 것이 효과적이에요. 아빠가 나서야 할 때는 아내와 충분히 협의한 뒤에 함께하세요.' },
      { order: 3, titleKo: '감사함과 경계를 동시에 전하기', descriptionKo: '"도와주셔서 감사한데, 저희 방식대로 할게요"라는 표현을 연습해두세요. 존중과 경계를 동시에 담을 수 있어요.' },
    ],
    doList: [
      '명확한 기준이 있으면 흔들리지 않고 일관되게 전달하기',
      '처가의 도움이 필요한 부분과 그렇지 않은 부분 구분해두기',
    ],
    dontList: [
      '"장인·장모님 말이 맞는 것 같은데"라며 아내 편 안 들기',
      '갈등을 피하려고 매번 아내에게 알아서 하라고 미루기',
    ],
  },

  // ── 영아/유아 추가 (toddler +10) ─────────────────────────────
  {
    slug: 'runs-during-meal',
    titleKo: '밥 먹다가 자꾸 돌아다녀요',
    summaryKo: '식사 자리에 5분도 못 앉아서 돌아다니며 먹으려 할 때',
    emoji: '/icons/ic-meal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '"앉아서 먹기" 원칙 일관되게 유지하기', descriptionKo: '"앉아서 먹어야 밥 먹을 수 있어"라는 원칙을 부모 둘 다 일관되게 적용하세요. 한 명이 봐주면 효과가 없어요.' },
      { order: 2, titleKo: '돌아다니면 밥 치우기', descriptionKo: '자리를 벗어나면 그 즉시 밥을 치우세요. "앉으면 줄게"라고 하면 아이는 규칙을 배워요. 처음엔 울어도 일관성이 중요합니다.' },
      { order: 3, titleKo: '식사 환경 먼저 점검하기', descriptionKo: '식탁 옆에 장난감이 있거나 TV가 켜져 있으면 주의가 분산돼요. 식사 시간에는 자극을 최소화하는 환경을 만들어주세요.' },
    ],
    doList: [
      '식사 시간 20분 이내로 짧게 유지하기',
      '앉아서 잘 먹었을 때 바로 칭찬해주기',
    ],
    dontList: [
      '돌아다니는 아이 쫓아다니며 떠먹여 주기',
      '"한 입만"이라며 계속 먹이려 애쓰기',
    ],
  },
  {
    slug: 'phone-tantrum',
    titleKo: '핸드폰을 달라고 매번 떼써요',
    summaryKo: '밥 먹을 때도, 자기 전에도 유튜브를 요구하며 울고 보챌 때',
    emoji: '/icons/ic-goal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '화면 시간 규칙 정하기', descriptionKo: '몇 시에, 얼마 동안 볼 수 있는지 구체적인 규칙을 만들어주세요. 부모 둘 다 같은 기준을 적용해야 효과가 있어요.' },
      { order: 2, titleKo: '빼앗기보다 대체 활동 제안하기', descriptionKo: '핸드폰을 갑자기 빼앗으면 더 큰 울음이 나와요. "5분 뒤에 끝내자, 그다음엔 같이 블록 하자"처럼 예고하고 전환하세요.' },
      { order: 3, titleKo: '아빠도 먼저 핸드폰 내려놓기', descriptionKo: '아이 앞에서 핸드폰을 보면 아이도 원하게 돼요. 아이와 함께하는 시간에는 핸드폰을 먼저 내려놓는 것이 가장 효과적인 모델링이에요.' },
    ],
    doList: [
      '식사·취침 시간엔 핸드폰 "충전소"에 두는 가족 규칙 만들기',
      '핸드폰 없이 함께하는 놀이 루틴 만들기',
    ],
    dontList: [
      '"오늘만"이라며 예외를 반복 허용하기',
      '아이가 울면 달래려고 바로 핸드폰 주기',
    ],
  },
  {
    slug: 'no-more-nap',
    titleKo: '갑자기 낮잠을 안 자려고 해요',
    summaryKo: '돌 이후 낮잠을 거부하거나 한참 걸려야 겨우 재울 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '연령별 수면 패턴 변화 이해하기', descriptionKo: '18개월~3세 사이에 자연스럽게 낮잠이 줄어요. 억지로 재우려 하면 오히려 밤 수면이 늦어질 수 있어요.' },
      { order: 2, titleKo: '조용한 쉬는 시간으로 대체하기', descriptionKo: '낮잠을 억지로 재우기보다 조용히 책 보거나 누워있는 "쉬는 시간"으로 대체해보세요. 아이도 부모도 한숨 돌릴 수 있어요.' },
      { order: 3, titleKo: '밤 수면 시간 조율하기', descriptionKo: '낮잠이 없어지면 밤에 더 일찍 재우는 것으로 총 수면 시간을 조율해주세요.' },
    ],
    doList: [
      '낮잠 없는 날은 오후 활동량을 늘려 밤에 더 잘 자게 하기',
      '낮잠 루틴 대신 조용한 놀이 루틴 만들기',
    ],
    dontList: [
      '낮잠 안 잔다고 벌주거나 강요하기',
      '낮잠 대신 TV로 때우기',
    ],
  },
  {
    slug: 'dad-i-hate-you',
    titleKo: '훈육했더니 "아빠 싫어"라고 해요',
    summaryKo: '혼낸 후 아이가 "아빠 나빠", "엄마한테 갈 거야"라고 말할 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '아이의 말을 너무 진지하게 받아들이지 않기', descriptionKo: '"아빠 싫어"는 지금 감정이 화났다는 표현이에요. 실제로 싫다는 게 아니라 감정 표현 능력이 아직 부족한 거예요.' },
      { order: 2, titleKo: '잠시 후 먼저 다가가기', descriptionKo: '훈육 후 5~10분이 지나면 먼저 다가가 "화가 났구나, 아빠는 네가 좋아"라고 말해주세요. 훈육과 사랑은 별개예요.' },
      { order: 3, titleKo: '감정 표현 언어 가르쳐주기', descriptionKo: '"싫어"말고 "나는 화가 났어", "이거 하기 싫어"처럼 감정을 표현하는 말을 함께 연습해주세요.' },
    ],
    doList: [
      '"아빠도 화가 날 수 있어, 하지만 너를 사랑해"라고 일관되게 전하기',
      '훈육 후 안아주기로 마무리하는 루틴 만들기',
    ],
    dontList: [
      '"그래, 엄마한테 가"라며 감정적으로 반응하기',
      '아이 말에 상처받아 훈육을 포기하기',
    ],
  },
  {
    slug: 'hitting-at-daycare',
    titleKo: '어린이집에서 친구를 때렸다고 연락이 왔어요',
    summaryKo: '선생님에게 연락을 받고 당황스럽고 부끄러운 마음이 먼저 들 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '맥락부터 파악하기', descriptionKo: '바로 혼내기보다 "어떤 일이 있었어?"라고 먼저 물어보세요. 이유 없이 때리는 경우는 드물어요. 맥락을 알아야 제대로 도울 수 있어요.' },
      { order: 2, titleKo: '감정 표현 방법 함께 연습하기', descriptionKo: '"화가 나면 때리는 게 아니라 말로 해"라고만 하면 부족해요. "화가 났어요", "하지 마세요"라고 말하는 연습을 구체적으로 함께 해주세요.' },
      { order: 3, titleKo: '선생님과 협력하기', descriptionKo: '어린이집 선생님과 공유해서 가정과 어린이집에서 일관된 방식으로 접근하는 게 가장 효과적이에요.' },
    ],
    doList: [
      '상대 아이와 부모에게 사과하는 방법도 함께 가르치기',
      '집에서 신체 놀이(레슬링, 쿠션 던지기)로 에너지 발산 돕기',
    ],
    dontList: [
      '"왜 때렸어! 사과해!"라며 상황 파악 없이 혼내기',
      '연락이 왔다고 부끄러워서 덮으려 하기',
    ],
  },
  {
    slug: 'food-fixation',
    titleKo: '같은 음식에만 집착해요',
    summaryKo: '국수면 국수만, 밥이면 밥만, 특정 음식만 반복해서 먹으려 할 때',
    emoji: '/icons/ic-meal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '새 음식을 식탁에 올려만 두기', descriptionKo: '먹이려 강요하지 말고 아이 그릇 옆에 새 음식을 조금 올려두기만 하세요. 15회 이상 노출되면 친숙함이 생긴다는 연구가 있어요.' },
      { order: 2, titleKo: '같이 요리하기', descriptionKo: '아이가 직접 만든 음식은 먹어볼 가능성이 높아요. 씻기, 섞기 같은 간단한 과정에 참여시켜보세요.' },
      { order: 3, titleKo: '식사에서 전쟁 만들지 않기', descriptionKo: '먹는 것에 너무 집중하면 오히려 역효과가 생겨요. 즐거운 식사 분위기를 유지하는 것이 장기적으로 더 효과적이에요.' },
    ],
    doList: [
      '좋아하는 음식 안에 새 재료를 조금씩 섞어보기',
      '"한 입만 먹어봐"라고 가볍게 권유하고 거부하면 넘어가기',
    ],
    dontList: [
      '먹지 않으면 간식도 주지 않는 방식으로 압박하기',
      '식사 시간에 TV 켜놓고 주의 분산으로 먹이기',
    ],
  },
  {
    slug: 'only-mom-for-sleep',
    titleKo: '엄마 없으면 잠을 안 자요',
    summaryKo: '아빠가 재우려 하면 울고 버티면서 엄마만 찾을 때',
    emoji: '/icons/ic-sleep.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '취침 루틴을 아빠가 담당하기', descriptionKo: '목욕 → 책 → 노래(또는 이야기) 순서의 취침 루틴을 아빠가 반복해서 해주세요. 2~3주 지나면 아이도 적응해요.' },
      { order: 2, titleKo: '처음엔 엄마가 곁에서 시작해주기', descriptionKo: '갑자기 엄마 없이 재우면 더 격렬하게 거부할 수 있어요. 처음엔 엄마가 방에 있다가 점차 아빠가 혼자 해결하는 방식으로 전환해보세요.' },
      { order: 3, titleKo: '일관성이 핵심', descriptionKo: '힘들어도 매일 같은 루틴과 방식으로 진행하세요. 아이가 울면 들어줘도 되지만 루틴 자체를 포기하면 처음부터 다시 시작해야 해요.' },
    ],
    doList: [
      '"아빠가 재워줄 거야"라고 낮에 미리 예고해두기',
      '잘 잔 날 아침에 칭찬해주기',
    ],
    dontList: [
      '울면 바로 엄마 불러오기',
      '"안 되면 엄마가 해"라며 중간에 포기하기',
    ],
  },
  {
    slug: 'why-why-why',
    titleKo: '"왜요?"를 하루 종일 반복해요',
    summaryKo: '모든 것에 "왜?", "그건 왜요?"를 끊임없이 물어봐서 지칠 때',
    emoji: '/icons/ic-goal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '아이의 사고력이 자라는 신호임을 알기', descriptionKo: '"왜?" 폭풍은 만 2~4세에 나타나는 정상 발달 신호예요. 세상을 이해하려는 뇌가 활발하게 작동하고 있다는 증거입니다.' },
      { order: 2, titleKo: '"너는 왜 그럴 것 같아?"로 되물어보기', descriptionKo: '모든 질문에 직접 답하지 않아도 돼요. "어떻게 생각해?"라고 되물으면 아이도 생각하고 대화가 이어져요.' },
      { order: 3, titleKo: '"모르겠어"도 괜찮다', descriptionKo: '"아빠도 모르겠어, 같이 찾아볼까?"라는 대답이 아이에게 정직한 탐구의 태도를 가르쳐줘요.' },
    ],
    doList: [
      '지치면 "지금은 생각해볼 시간 필요해, 이따가 같이 알아보자"라고 솔직히 말하기',
      '도서관에서 관련 책 함께 찾아보는 습관 만들기',
    ],
    dontList: [
      '"왜 이렇게 질문이 많아"라며 짜증 내기',
      '귀찮다고 "몰라"로 반복해서 끊기',
    ],
  },
  {
    slug: 'stranger-anxiety',
    titleKo: '낯선 사람을 극도로 무서워해요',
    summaryKo: '마트나 공원에서 모르는 사람만 보면 울거나 뒤로 숨으려 할 때',
    emoji: '/icons/sit-baby-crying.svg',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '기질 차이를 이해하기', descriptionKo: '낯을 많이 가리는 아이가 있고 그렇지 않은 아이가 있어요. 내향적 기질이 나쁜 게 아닙니다. 억지로 바꾸려 하면 오히려 불안이 커져요.' },
      { order: 2, titleKo: '억지로 인사시키지 않기', descriptionKo: '"인사해야지!"라고 강요하면 낯가림이 더 심해질 수 있어요. 아이가 준비됐을 때 스스로 할 수 있도록 기다려주세요.' },
      { order: 3, titleKo: '안전 기지가 되어주기', descriptionKo: '아빠·엄마 곁에 있으면 안전하다는 것을 반복 경험하면 서서히 세상에 대한 신뢰가 쌓여요. 새로운 환경에서 아이 손을 먼저 잡아주세요.' },
    ],
    doList: [
      '단골 가게·놀이터처럼 친숙한 장소부터 자주 방문하기',
      '낯선 사람과 처음엔 눈 마주치기 같은 작은 단계부터 시도해보기',
    ],
    dontList: [
      '"왜 이렇게 겁쟁이야"라고 창피 주기',
      '낯선 사람에게 갑자기 안기게 하기',
    ],
  },
  {
    slug: 'eats-for-grandma',
    titleKo: '할머니한테서는 잘 먹는데 저한테는 안 먹어요',
    summaryKo: '부모에게는 까다롭게 굴면서 조부모한테는 잘 따르는 상황이 억울할 때',
    emoji: '/icons/ic-meal.png',
    tag: 'toddler',
    steps: [
      { order: 1, titleKo: '경쟁이 아닌 관찰로 접근하기', descriptionKo: '할머니가 어떻게 먹이는지 관찰해보세요. 말투, 양, 식기, 분위기 중 힌트가 있을 수 있어요. 경쟁보다 배우는 게 빨라요.' },
      { order: 2, titleKo: '아이 입장에서 이해하기', descriptionKo: '부모에게 더 까다롭게 구는 건 그만큼 부모를 믿는다는 신호예요. 할머니 앞에서는 잘 보이고 싶고, 부모 앞에서는 솔직한 거예요.' },
      { order: 3, titleKo: '식사 환경 바꿔보기', descriptionKo: '그릇 모양, 식사 장소, 함께 먹는 사람, 식사 전 활동을 조금 바꿔보세요. 작은 변화가 의외의 효과를 낼 수 있어요.' },
    ],
    doList: [
      '할머니에게 방법을 솔직하게 물어보기',
      '아이가 좋아하는 그릇·수저 사용해보기',
    ],
    dontList: [
      '"할머니한테서는 잘 먹던데"라고 비교해서 압박하기',
      '"할머니가 더 좋아?"라며 경쟁 심리 드러내기',
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
