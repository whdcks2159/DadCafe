/**
 * FruitIcon — 나노 바나나 스타일 flat SVG 과일 아이콘
 * 임신 주차별 아기 크기 비교에 사용
 */
import type { ReactNode } from 'react';

interface FruitIconProps {
  fruit: string;
  size?: number;
  className?: string;
}

export default function FruitIcon({ fruit, size = 48, className = '' }: FruitIconProps) {
  const icon = FRUIT_ICONS[fruit] ?? FRUIT_ICONS['default'];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={fruit}
      role="img"
    >
      {icon}
    </svg>
  );
}

// ── SVG path 모음 ────────────────────────────────────────────────────────────

const FRUIT_ICONS: Record<string, ReactNode> = {

  // 🌸 양귀비씨 — 작은 씨앗
  '양귀비씨': (
    <>
      <ellipse cx="24" cy="28" rx="9" ry="11" fill="#D4A8E0" />
      <ellipse cx="24" cy="27" rx="7" ry="9" fill="#E8C5F0" />
      <ellipse cx="21" cy="25" rx="2.5" ry="3" fill="#F0DCF8" opacity="0.7" />
      <path d="M24 17 Q26 12 24 9 Q22 12 24 17Z" fill="#6BAF6B" strokeLinecap="round" />
    </>
  ),

  // 🌾 참깨 — 타원형 씨앗
  '참깨': (
    <>
      <ellipse cx="24" cy="27" rx="8" ry="12" fill="#E8D5A0" />
      <ellipse cx="24" cy="26" rx="6" ry="10" fill="#F5E8C0" />
      <ellipse cx="21.5" cy="24" rx="2" ry="3" fill="#FFF5D8" opacity="0.8" />
      <path d="M24 15 Q25 11 24 9 Q23 11 24 15Z" fill="#8B7355" />
    </>
  ),

  // 🟢 완두콩
  '완두콩': (
    <>
      <rect x="8" y="18" width="32" height="14" rx="7" fill="#6BAF6B" />
      <rect x="9" y="19" width="30" height="12" rx="6" fill="#7DC87D" />
      <circle cx="17" cy="25" r="4" fill="#52A052" />
      <circle cx="24" cy="25" r="4" fill="#52A052" />
      <circle cx="31" cy="25" r="4" fill="#52A052" />
      <circle cx="16" cy="23.5" r="1.5" fill="#8FD08F" opacity="0.7" />
      <circle cx="23" cy="23.5" r="1.5" fill="#8FD08F" opacity="0.7" />
      <circle cx="30" cy="23.5" r="1.5" fill="#8FD08F" opacity="0.7" />
    </>
  ),

  // 🫐 블루베리
  '블루베리': (
    <>
      <circle cx="24" cy="26" r="13" fill="#5B4F9C" />
      <circle cx="24" cy="25" r="12" fill="#7B6FBC" />
      <circle cx="19" cy="22" r="4" fill="#6B5FAC" opacity="0.7" />
      <circle cx="18" cy="21" r="2" fill="#9B8FDC" opacity="0.5" />
      <path d="M20 13 Q24 10 28 13" stroke="#4A4080" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="13" r="2" fill="#4A4080" />
    </>
  ),

  // 🍓 라즈베리
  '라즈베리': (
    <>
      <circle cx="24" cy="26" r="12" fill="#E8385A" />
      <circle cx="18" cy="22" r="5" fill="#E8385A" />
      <circle cx="30" cy="22" r="5" fill="#E8385A" />
      <circle cx="24" cy="18" r="5" fill="#E8385A" />
      {/* 알갱이 패턴 */}
      <circle cx="24" cy="26" r="3" fill="#C42040" />
      <circle cx="18" cy="22" r="3" fill="#C42040" />
      <circle cx="30" cy="22" r="3" fill="#C42040" />
      <circle cx="24" cy="18" r="3" fill="#C42040" />
      <circle cx="22.5" cy="24.5" r="1.2" fill="#F06070" opacity="0.7" />
      <circle cx="16.5" cy="21" r="1.2" fill="#F06070" opacity="0.7" />
      <circle cx="28.5" cy="21" r="1.2" fill="#F06070" opacity="0.7" />
      <path d="M24 13 L22 9 M24 13 L26 9 M24 13 L24 8" stroke="#5A9A3A" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),

  // 🫒 올리브
  '올리브': (
    <>
      <ellipse cx="24" cy="27" rx="10" ry="13" fill="#7A9A40" />
      <ellipse cx="24" cy="26" rx="8" ry="11" fill="#98B858" />
      <ellipse cx="21" cy="23" rx="3" ry="4" fill="#B0D070" opacity="0.6" />
      <path d="M24 14 Q27 10 25 7" stroke="#5A7A28" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍓 딸기
  '딸기': (
    <>
      <path d="M24 38 Q12 28 12 20 Q12 12 24 12 Q36 12 36 20 Q36 28 24 38Z" fill="#E8385A" />
      <path d="M24 35 Q15 27 15 20 Q15 15 24 15 Q33 15 33 20 Q33 27 24 35Z" fill="#F05070" />
      {/* 씨앗들 */}
      <ellipse cx="20" cy="22" rx="1.2" ry="1.8" fill="#C42040" transform="rotate(-10 20 22)" />
      <ellipse cx="28" cy="22" rx="1.2" ry="1.8" fill="#C42040" transform="rotate(10 28 22)" />
      <ellipse cx="24" cy="26" rx="1.2" ry="1.8" fill="#C42040" />
      <ellipse cx="21" cy="30" rx="1" ry="1.5" fill="#C42040" transform="rotate(-5 21 30)" />
      <ellipse cx="27" cy="30" rx="1" ry="1.5" fill="#C42040" transform="rotate(5 27 30)" />
      {/* 꼭지 */}
      <path d="M24 12 L20 7 M24 12 L28 7 M24 12 L24 6 M24 12 L18 9 M24 12 L30 9" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍈 무화과
  '무화과': (
    <>
      <ellipse cx="24" cy="28" rx="13" ry="14" fill="#8B5E8B" />
      <ellipse cx="24" cy="27" rx="11" ry="12" fill="#A070A0" />
      <ellipse cx="20" cy="24" rx="4" ry="5" fill="#BC88BC" opacity="0.5" />
      <path d="M24 14 Q26 10 24 8" stroke="#5A7A28" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="14.5" r="3" fill="#5A9A3A" />
    </>
  ),

  // 🍋 레몬
  '레몬': (
    <>
      <ellipse cx="24" cy="26" rx="15" ry="13" fill="#F5D020" />
      <ellipse cx="24" cy="25" rx="13" ry="11" fill="#FAE050" />
      <ellipse cx="19" cy="21" rx="5" ry="4" fill="#FFEC80" opacity="0.6" />
      <ellipse cx="10" cy="25" rx="3" ry="4" fill="#F5D020" />
      <ellipse cx="38" cy="25" rx="3" ry="4" fill="#F5D020" />
      <path d="M24 13 Q26 9 24 7" stroke="#D4A820" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍑 복숭아
  '복숭아': (
    <>
      <circle cx="24" cy="26" r="14" fill="#F4845F" />
      <circle cx="22" cy="24" r="12" fill="#F9A88A" />
      <ellipse cx="19" cy="21" rx="5" ry="4" fill="#FFCAB0" opacity="0.6" />
      <path d="M24 12 Q28 8 31 10" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M22 12 Q20 8 18 10" stroke="#5A9A3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M17 26 Q24 24 31 26" stroke="#F4845F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🥝 키위
  '키위': (
    <>
      <ellipse cx="24" cy="26" rx="14" ry="15" fill="#8B6914" />
      <ellipse cx="24" cy="26" rx="12" ry="13" fill="#A08028" />
      {/* 단면 */}
      <circle cx="24" cy="26" r="10" fill="#6BAF40" />
      <circle cx="24" cy="26" r="3" fill="#F5F0D0" />
      {/* 씨앗 패턴 */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 24 + Math.cos(rad) * 7;
        const y = 26 + Math.sin(rad) * 7;
        return <ellipse key={i} cx={x} cy={y} rx="1.2" ry="2" fill="#2A1F0A" transform={`rotate(${angle} ${x} ${y})`} />;
      })}
    </>
  ),

  // 🍎 사과
  '사과': (
    <>
      <path d="M24 38 Q10 32 10 22 Q10 12 20 12 Q24 14 24 14 Q24 14 28 12 Q38 12 38 22 Q38 32 24 38Z" fill="#E83030" />
      <path d="M24 36 Q13 30 13 22 Q13 15 20 15 Q24 17 24 17 Q24 17 28 15 Q35 15 35 22 Q35 30 24 36Z" fill="#F05050" />
      <ellipse cx="19" cy="20" rx="4" ry="3" fill="#F87878" opacity="0.6" />
      {/* 꼭지와 잎 */}
      <path d="M24 12 Q24 8 24 7" stroke="#6B4520" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 9 Q29 6 30 10" fill="#5A9A3A" />
      {/* 가운데 홈 */}
      <path d="M24 38 Q24 34 24 14" stroke="#C82020" strokeWidth="1" opacity="0.5" />
    </>
  ),

  // 🥑 아보카도
  '아보카도': (
    <>
      <path d="M24 40 Q14 33 14 22 Q14 10 24 8 Q34 10 34 22 Q34 33 24 40Z" fill="#2D5A1B" />
      <path d="M24 38 Q16 31 16 22 Q16 12 24 10 Q32 12 32 22 Q32 31 24 38Z" fill="#4A7A2D" />
      {/* 씨앗 */}
      <ellipse cx="24" cy="26" rx="7" ry="8" fill="#C88A40" />
      <ellipse cx="24" cy="25" rx="5" ry="6" fill="#D8A050" />
      <ellipse cx="22" cy="23" rx="2" ry="2.5" fill="#E8B868" opacity="0.7" />
    </>
  ),

  // 무 (radish)
  '무': (
    <>
      <ellipse cx="24" cy="25" rx="12" ry="16" fill="#F0F0F5" />
      <ellipse cx="24" cy="24" rx="10" ry="14" fill="#FAFAFA" />
      <ellipse cx="20" cy="20" rx="4" ry="5" fill="#FFFFFF" opacity="0.8" />
      {/* 잎들 */}
      <path d="M18 10 Q14 4 16 2 Q20 6 18 10Z" fill="#5A9A3A" />
      <path d="M24 9 Q24 3 26 2 Q27 6 24 9Z" fill="#5A9A3A" />
      <path d="M30 10 Q34 4 32 2 Q28 6 30 10Z" fill="#5A9A3A" />
      <path d="M24 9 L24 10" stroke="#3A7A1A" strokeWidth="1.5" />
      {/* 꼬리 */}
      <path d="M24 41 Q23 44 24 46" stroke="#D0D0D5" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),

  // 🫑 피망
  '피망': (
    <>
      <path d="M16 38 Q10 30 12 20 Q14 12 20 11 L24 13 L28 11 Q34 12 36 20 Q38 30 32 38Z" fill="#E83030" />
      <path d="M17 36 Q13 28 15 20 Q17 15 21 14 L24 15.5 L27 14 Q31 15 33 20 Q35 28 31 36Z" fill="#F05050" />
      <ellipse cx="20" cy="20" rx="3" ry="4" fill="#F87878" opacity="0.5" />
      {/* 줄기 */}
      <rect x="22" y="8" width="4" height="5" rx="2" fill="#5A9A3A" />
      <path d="M24 8 Q28 4 30 6" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🥭 망고
  '망고': (
    <>
      <path d="M24 40 Q11 33 11 22 Q11 10 24 9 Q37 10 37 22 Q37 33 24 40Z" fill="#F5A020" />
      <path d="M24 38 Q14 31 14 22 Q14 13 24 12 Q34 13 34 22 Q34 31 24 38Z" fill="#FFBE40" />
      <ellipse cx="19" cy="20" rx="5" ry="4" fill="#FFD870" opacity="0.6" />
      <path d="M24 9 Q26 5 25 3" stroke="#5A7A28" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M23 9 Q20 5 21 3" stroke="#5A9A3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍌 바나나
  '바나나': (
    <>
      <path d="M8 34 Q10 18 22 12 Q30 8 38 14 Q34 14 28 16 Q18 22 14 36Z" fill="#F5D020" />
      <path d="M10 33 Q12 19 22 14 Q29 10 36 15 Q32 15 27 17 Q18 23 15 34Z" fill="#FAE050" />
      <path d="M8 34 Q10 30 14 36" fill="#E8B820" />
      <path d="M38 14 Q36 14 36 15" stroke="#C8980A" strokeWidth="2" strokeLinecap="round" />
    </>
  ),

  // 🥕 당근
  '당근': (
    <>
      <path d="M24 42 Q16 35 16 24 L24 10 L32 24 Q32 35 24 42Z" fill="#F07820" />
      <path d="M24 40 Q18 33 18 24 L24 13 L30 24 Q30 33 24 40Z" fill="#F89840" />
      <ellipse cx="21" cy="22" rx="3" ry="5" fill="#FAB060" opacity="0.5" transform="rotate(-10 21 22)" />
      {/* 잎들 */}
      <path d="M22 10 Q18 4 20 2 Q23 6 22 10Z" fill="#5A9A3A" />
      <path d="M24 9 Q24 3 26 2 Q25 6 24 9Z" fill="#5A9A3A" />
      <path d="M26 10 Q30 4 28 2 Q25 6 26 10Z" fill="#5A9A3A" />
      <path d="M20 10 Q16 5 17 3 Q20 7 20 10Z" fill="#3A7A1A" />
    </>
  ),

  // 🫑 파프리카 (빨간색과 구분해서 노란색으로)
  '파프리카': (
    <>
      <path d="M16 38 Q10 30 12 20 Q14 12 20 11 L24 13 L28 11 Q34 12 36 20 Q38 30 32 38Z" fill="#F5C820" />
      <path d="M17 36 Q13 28 15 20 Q17 15 21 14 L24 15.5 L27 14 Q31 15 33 20 Q35 28 31 36Z" fill="#FAD840" />
      <ellipse cx="20" cy="20" rx="3" ry="4" fill="#FFE870" opacity="0.5" />
      <rect x="22" y="8" width="4" height="5" rx="2" fill="#5A9A3A" />
      <path d="M24 8 Q28 4 30 6" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍇 포도송이
  '포도송이': (
    <>
      <path d="M24 8 L22 12 M24 8 L26 12" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 12 Q16 10 14 14" stroke="#5A9A3A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* 포도알들 */}
      <circle cx="18" cy="17" r="5" fill="#7855B0" /><circle cx="18" cy="17" r="4" fill="#9070C8" /><circle cx="17" cy="15.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="30" cy="17" r="5" fill="#7855B0" /><circle cx="30" cy="17" r="4" fill="#9070C8" /><circle cx="29" cy="15.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="24" cy="22" r="5" fill="#7855B0" /><circle cx="24" cy="22" r="4" fill="#9070C8" /><circle cx="23" cy="20.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="18" cy="27" r="5" fill="#7855B0" /><circle cx="18" cy="27" r="4" fill="#9070C8" /><circle cx="17" cy="25.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="30" cy="27" r="5" fill="#7855B0" /><circle cx="30" cy="27" r="4" fill="#9070C8" /><circle cx="29" cy="25.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="24" cy="32" r="5" fill="#7855B0" /><circle cx="24" cy="32" r="4" fill="#9070C8" /><circle cx="23" cy="30.5" r="1.5" fill="#B090E0" opacity="0.6" />
      <circle cx="24" cy="41" r="4" fill="#7855B0" /><circle cx="24" cy="41" r="3" fill="#9070C8" />
    </>
  ),

  // 🌽 옥수수
  '옥수수': (
    <>
      {/* 잎 */}
      <path d="M14 28 Q8 20 12 14 Q16 22 14 28Z" fill="#8BC850" />
      <path d="M34 28 Q40 20 36 14 Q32 22 34 28Z" fill="#8BC850" />
      {/* 알맹이 몸통 */}
      <rect x="16" y="10" width="16" height="28" rx="8" fill="#F5C820" />
      {/* 알맹이 패턴 */}
      {[0,1,2,3].map(col =>
        [0,1,2,3,4].map(row => (
          <ellipse key={`${col}-${row}`} cx={18.5 + col * 3.5} cy={15 + row * 5} rx="1.5" ry="1.8" fill="#E8AE10" />
        ))
      )}
      {/* 수염 */}
      <path d="M20 10 Q18 5 16 3 M22 10 Q21 5 20 3 M24 10 Q24 5 24 3 M26 10 Q27 5 28 3 M28 10 Q30 5 32 3" stroke="#D4A020" strokeWidth="1" strokeLinecap="round" />
    </>
  ),

  // 순무
  '순무': (
    <>
      <circle cx="24" cy="30" r="14" fill="#D070C0" />
      <circle cx="24" cy="29" r="12" fill="#E090D8" />
      <ellipse cx="19" cy="25" rx="5" ry="4" fill="#F0B0E8" opacity="0.6" />
      {/* 흰 아랫부분 */}
      <path d="M12 32 Q24 44 36 32 Q30 40 24 40 Q18 40 12 32Z" fill="#F5EEF5" />
      {/* 잎들 */}
      <path d="M20 16 Q16 8 18 5 Q22 10 20 16Z" fill="#5A9A3A" />
      <path d="M24 15 Q24 7 26 5 Q26 10 24 15Z" fill="#5A9A3A" />
      <path d="M28 16 Q32 8 30 5 Q26 10 28 16Z" fill="#5A9A3A" />
      <path d="M24 42 L24 46" stroke="#D0C0C0" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),

  // 🥬 상추 한포기
  '상추 한포기': (
    <>
      <ellipse cx="24" cy="28" rx="18" ry="14" fill="#5A9A3A" />
      <ellipse cx="24" cy="27" rx="15" ry="11" fill="#78B850" />
      {/* 잎 레이어들 */}
      <path d="M8 26 Q10 16 18 14 Q14 22 16 30 Q12 30 8 26Z" fill="#6AB048" />
      <path d="M40 26 Q38 16 30 14 Q34 22 32 30 Q36 30 40 26Z" fill="#6AB048" />
      <path d="M12 20 Q18 10 24 12 Q20 18 22 26 Q16 26 12 20Z" fill="#90C870" />
      <path d="M36 20 Q30 10 24 12 Q28 18 26 26 Q32 26 36 20Z" fill="#90C870" />
      <path d="M18 16 Q24 8 30 16 Q28 22 24 24 Q20 22 18 16Z" fill="#A8D888" />
      {/* 잎맥 */}
      <path d="M24 24 L24 12" stroke="#5A9A3A" strokeWidth="1" opacity="0.5" />
    </>
  ),

  // 🥦 콜리플라워
  '콜리플라워': (
    <>
      {/* 작은 꽃봉오리들 */}
      <circle cx="24" cy="18" r="8" fill="#F8F0E0" />
      <circle cx="16" cy="22" r="7" fill="#F8F0E0" />
      <circle cx="32" cy="22" r="7" fill="#F8F0E0" />
      <circle cx="20" cy="28" r="6" fill="#F8F0E0" />
      <circle cx="28" cy="28" r="6" fill="#F8F0E0" />
      <circle cx="24" cy="26" r="6" fill="#F8F0E0" />
      {/* 질감 */}
      <circle cx="24" cy="18" r="6" fill="#F0E8D0" />
      <circle cx="16" cy="22" r="5" fill="#F0E8D0" />
      <circle cx="32" cy="22" r="5" fill="#F0E8D0" />
      {/* 잎 */}
      <path d="M12 30 Q8 38 14 40 Q16 34 20 32Z" fill="#5A9A3A" />
      <path d="M36 30 Q40 38 34 40 Q32 34 28 32Z" fill="#5A9A3A" />
      <path d="M20 32 Q16 40 22 42 Q24 36 26 32Z" fill="#5A9A3A" />
      <path d="M28 32 Q32 40 26 42 Q24 36 22 32Z" fill="#78B850" />
    </>
  ),

  // 🍆 가지
  '가지': (
    <>
      <path d="M24 42 Q13 35 12 24 Q12 12 24 10 Q36 12 36 24 Q36 35 24 42Z" fill="#5A2080" />
      <path d="M24 40 Q15 33 15 24 Q15 15 24 13 Q33 15 33 24 Q33 33 24 40Z" fill="#7838A8" />
      <ellipse cx="19" cy="21" rx="5" ry="4" fill="#9858C8" opacity="0.5" />
      {/* 꼭지 */}
      <path d="M18 10 Q14 5 16 3 Q20 7 18 10Z" fill="#3A7820" />
      <path d="M24 10 Q24 4 26 3 Q25 7 24 10Z" fill="#5A9A3A" />
      <path d="M30 10 Q34 5 32 3 Q28 7 30 10Z" fill="#3A7820" />
    </>
  ),

  // 🎃 버터넛 호박
  '버터넛 호박': (
    <>
      {/* 몸통 윗부분 (좁은) */}
      <ellipse cx="24" cy="20" rx="8" ry="10" fill="#E89840" />
      {/* 몸통 아랫부분 (둥근) */}
      <ellipse cx="24" cy="34" rx="12" ry="10" fill="#E89840" />
      <ellipse cx="24" cy="19" rx="6" ry="8" fill="#F0AE58" />
      <ellipse cx="24" cy="33" rx="10" ry="8" fill="#F0AE58" />
      <ellipse cx="20" cy="31" rx="4" ry="4" fill="#F8C870" opacity="0.5" />
      {/* 세로 줄 */}
      <path d="M24 44 L24 10" stroke="#D07820" strokeWidth="0.8" opacity="0.4" />
      {/* 꼭지 */}
      <rect x="22" y="8" width="4" height="5" rx="2" fill="#6B4520" />
      <path d="M24 8 Q28 5 30 7" stroke="#5A9A3A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🥬 양배추
  '양배추': (
    <>
      <circle cx="24" cy="26" r="15" fill="#78B850" />
      <circle cx="24" cy="25" r="12" fill="#98C870" />
      <circle cx="24" cy="24" r="9" fill="#B8D890" />
      <circle cx="24" cy="23" r="6" fill="#D0E8A8" />
      <ellipse cx="21" cy="21" rx="3" ry="2.5" fill="#E8F8C8" opacity="0.7" />
      {/* 바깥 잎 */}
      <path d="M10 28 Q8 22 12 18 Q14 24 12 30Z" fill="#5A9A3A" opacity="0.7" />
      <path d="M38 28 Q40 22 36 18 Q34 24 36 30Z" fill="#5A9A3A" opacity="0.7" />
    </>
  ),

  // 🥥 코코넛
  '코코넛': (
    <>
      <circle cx="24" cy="26" r="15" fill="#8B5E3C" />
      <circle cx="24" cy="25" r="13" fill="#A87850" />
      {/* 섬유 텍스쳐 */}
      <path d="M12 20 Q20 24 12 30" stroke="#6B4020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 20 Q28 24 36 30" stroke="#6B4020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18 12 Q24 18 18 26" stroke="#6B4020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 12 Q24 18 30 26" stroke="#6B4020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* 눈 3개 */}
      <circle cx="18" cy="18" r="2.5" fill="#3A1A08" />
      <circle cx="24" cy="16" r="2.5" fill="#3A1A08" />
      <circle cx="30" cy="18" r="2.5" fill="#3A1A08" />
    </>
  ),

  // 🍍 파인애플
  '파인애플': (
    <>
      {/* 잎 */}
      <path d="M20 12 Q16 4 18 2 Q22 8 20 12Z" fill="#5A9A3A" />
      <path d="M24 10 Q24 2 26 1 Q26 7 24 10Z" fill="#5A9A3A" />
      <path d="M28 12 Q32 4 30 2 Q26 8 28 12Z" fill="#5A9A3A" />
      <path d="M18 13 Q13 6 15 4 Q19 10 18 13Z" fill="#78B850" />
      <path d="M30 13 Q35 6 33 4 Q29 10 30 13Z" fill="#78B850" />
      {/* 몸통 */}
      <rect x="14" y="12" width="20" height="28" rx="10" fill="#F5C820" />
      {/* 마름모 패턴 */}
      {[0,1,2,3,4].map(row =>
        [0,1,2].map(col => (
          <path
            key={`${row}-${col}`}
            d={`M${17 + col*6} ${17 + row*5} L${20 + col*6} ${14 + row*5} L${23 + col*6} ${17 + row*5} L${20 + col*6} ${20 + row*5}Z`}
            fill="#E8A810"
            stroke="#D09000"
            strokeWidth="0.5"
          />
        ))
      )}
    </>
  ),

  // 🍈 멜론
  '멜론': (
    <>
      <circle cx="24" cy="26" r="16" fill="#98C850" />
      <circle cx="24" cy="25" r="14" fill="#B8D870" />
      <ellipse cx="19" cy="21" rx="6" ry="5" fill="#C8E888" opacity="0.6" />
      {/* 줄무늬 */}
      {[-8,-4,0,4,8].map((offset, i) => (
        <path key={i} d={`M${24+offset} 10 Q${24+offset+3} 26 ${24+offset} 42`} stroke="#78A830" strokeWidth="1" fill="none" opacity="0.5" />
      ))}
      {/* 꼭지 */}
      <path d="M24 10 Q26 6 25 4" stroke="#78A830" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍈 파파야
  '파파야': (
    <>
      <path d="M24 42 Q14 36 13 24 Q13 10 24 8 Q35 10 35 24 Q35 36 24 42Z" fill="#F07820" />
      <path d="M24 40 Q16 34 16 24 Q16 13 24 11 Q32 13 32 24 Q32 34 24 40Z" fill="#F89840" />
      <ellipse cx="19" cy="21" rx="5" ry="4" fill="#FAB060" opacity="0.5" />
      {/* 씨앗들 */}
      <ellipse cx="24" cy="26" rx="2" ry="2.5" fill="#5A3020" />
      <ellipse cx="20" cy="24" rx="1.5" ry="2" fill="#5A3020" />
      <ellipse cx="28" cy="24" rx="1.5" ry="2" fill="#5A3020" />
      <ellipse cx="22" cy="30" rx="1.5" ry="2" fill="#5A3020" />
      <ellipse cx="26" cy="30" rx="1.5" ry="2" fill="#5A3020" />
      {/* 꼭지 */}
      <path d="M24 8 Q26 4 25 3" stroke="#5A7A28" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),

  // 🍉 수박 (소)
  '수박 (소)': (
    <>
      <circle cx="24" cy="26" r="14" fill="#5A9A3A" />
      <circle cx="24" cy="26" r="12" fill="#78B850" />
      {/* 줄무늬 */}
      <path d="M15 20 Q18 26 15 32" stroke="#5A9A3A" strokeWidth="2.5" fill="none" />
      <path d="M33 20 Q30 26 33 32" stroke="#5A9A3A" strokeWidth="2.5" fill="none" />
      {/* 속 */}
      <circle cx="24" cy="26" r="9" fill="#F04050" />
      <circle cx="24" cy="25" r="7" fill="#F86070" />
      {/* 씨앗 */}
      <ellipse cx="20" cy="24" rx="1.2" ry="2" fill="#2A1A18" transform="rotate(-15 20 24)" />
      <ellipse cx="28" cy="24" rx="1.2" ry="2" fill="#2A1A18" transform="rotate(15 28 24)" />
      <ellipse cx="24" cy="28" rx="1.2" ry="2" fill="#2A1A18" />
      <ellipse cx="20" cy="30" rx="1" ry="1.7" fill="#2A1A18" transform="rotate(-10 20 30)" />
      <ellipse cx="28" cy="30" rx="1" ry="1.7" fill="#2A1A18" transform="rotate(10 28 30)" />
    </>
  ),

  // 🍉 수박
  '수박': (
    <>
      <ellipse cx="24" cy="28" rx="18" ry="14" fill="#5A9A3A" />
      <ellipse cx="24" cy="27" rx="16" ry="12" fill="#78B850" />
      {/* 줄무늬 */}
      <path d="M10 22 Q14 28 10 34" stroke="#5A9A3A" strokeWidth="2" fill="none" />
      <path d="M38 22 Q34 28 38 34" stroke="#5A9A3A" strokeWidth="2" fill="none" />
      <path d="M17 16 Q18 28 17 38" stroke="#5A9A3A" strokeWidth="2" fill="none" />
      <path d="M31 16 Q30 28 31 38" stroke="#5A9A3A" strokeWidth="2" fill="none" />
      {/* 속 (반으로 자른 단면) */}
      <ellipse cx="24" cy="27" rx="13" ry="10" fill="#F04050" />
      <ellipse cx="24" cy="26" rx="10" ry="7.5" fill="#F86070" />
      <ellipse cx="20" cy="24" rx="4" ry="3" fill="#F88090" opacity="0.5" />
      {/* 씨앗 */}
      <ellipse cx="18" cy="26" rx="1.2" ry="2" fill="#2A1A18" transform="rotate(-15 18 26)" />
      <ellipse cx="30" cy="26" rx="1.2" ry="2" fill="#2A1A18" transform="rotate(15 30 26)" />
      <ellipse cx="24" cy="30" rx="1.2" ry="2" fill="#2A1A18" />
      <ellipse cx="20" cy="32" rx="1" ry="1.7" fill="#2A1A18" />
      <ellipse cx="28" cy="32" rx="1" ry="1.7" fill="#2A1A18" />
    </>
  ),

  // 기본 (fallback)
  'default': (
    <>
      <circle cx="24" cy="26" r="14" fill="#E8C870" />
      <circle cx="24" cy="25" r="12" fill="#F0D888" />
      <ellipse cx="20" cy="22" rx="4" ry="3" fill="#FAE8A0" opacity="0.6" />
      <path d="M24 12 Q26 8 24 6" stroke="#78B850" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  ),
};
