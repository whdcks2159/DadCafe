import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts}',
  ],
  safelist: [
    'from-emerald-400', 'via-teal-400', 'to-green-300',
    'from-amber-400', 'via-orange-300', 'to-yellow-300',
    'from-blue-500', 'via-indigo-400', 'to-blue-400',
    'from-rose-400', 'via-pink-400', 'to-fuchsia-300',
    'from-sky-400', 'via-blue-400', 'to-indigo-400',
    'from-violet-400', 'via-purple-400', 'to-pink-400',
  ],
  theme: {
    extend: {
      colors: {
        /* ── 메인 브랜드 — 웜 미드 블루 ── */
        brand: {
          50:  '#EEF4FF',
          100: '#D9E8FF',
          200: '#B3CEFF',
          300: '#7AABF5',
          400: '#4E84E0',
          500: '#3567C8',   /* Primary — 기존 #5b90e0에서 웜·딥 조정 */
          600: '#2A53A8',
          700: '#1F3D84',
          900: '#101E46',
        },
        /* ── 따뜻한 중립 계열 (배경·텍스트 계층) ── */
        neutral: {
          0:   '#FFFFFF',
          50:  '#FFFBF7',   /* = 메인 배경 (기존 warm-50 동일) */
          100: '#F5EFE8',
          200: '#E8DFD5',
          300: '#CEC4B8',
          400: '#A89D93',
          500: '#7D7167',
          700: '#4A3F36',
          900: '#2A1F18',
        },
        /* ── 보조 강조 — 웜 앰버 ── */
        accent: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          300: '#FBD14B',
          500: '#F59E0B',
          600: '#D97706',
        },
        /* ── 따뜻한 피치/크림 (기존 호환 유지) ── */
        warm: {
          50:  '#FFFBF7',
          100: '#FFF5EE',
          200: '#FFE8D4',
          300: '#FFD4B0',
          400: '#FFB77C',
          500: '#FF9A48',
        },
        /* ── 파스텔 — 메인 화면 기준 통일 ── */
        pastel: {
          yellow:   '#FFF8DC',   /* 부드러운 크림 옐로 */
          pink:     '#FFE8EE',   /* 소프트 핑크 */
          blue:     '#EEF4FF',   /* brand-50 동일 (하늘) */
          mint:     '#E8F9F0',   /* 부드러운 민트 */
          lavender: '#F0EEFF',   /* 소프트 라벤더 */
          peach:    '#FFF5E8',   /* 크림 피치 */
          sky:      '#E8F4FF',   /* 라이트 스카이 */
          rose:     '#FFE8EE',   /* = pink 동일 계열 */
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(42,31,24,0.08), 0 8px 24px -8px rgba(42,31,24,0.05)',
        warm: '0 4px 20px -4px rgba(53,103,200,0.20)',   /* brand-500 기반 */
        card: '0 1px 8px -2px rgba(42,31,24,0.07)',
      },
    },
  },
  plugins: [],
};

export default config;
