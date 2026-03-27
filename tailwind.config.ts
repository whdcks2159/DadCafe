import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* 메인 브랜드 — 따뜻한 스카이블루 */
        brand: {
          50:  '#f0f8ff',
          100: '#e0f1ff',
          200: '#b9e2ff',
          300: '#7ccbff',
          400: '#36b0fa',
          500: '#5b90e0',
          600: '#4a7acc',
          700: '#3b64b5',
          900: '#1e3d74',
        },
        /* 따뜻한 피치/크림 계열 */
        warm: {
          50:  '#fffbf7',
          100: '#fff5ee',
          200: '#ffe8d4',
          300: '#ffd4b0',
          400: '#ffb77c',
          500: '#ff9a48',
        },
        /* 파스텔 팔레트 */
        pastel: {
          yellow:   '#FFF9C4',
          pink:     '#FFE4E6',
          blue:     '#EBF5FF',
          mint:     '#DCFCE7',
          lavender: '#EDE9FE',
          peach:    '#FFF3E0',
          sky:      '#E0F2FE',
          rose:     '#FDE8E8',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(0,0,0,0.08), 0 8px 24px -8px rgba(0,0,0,0.05)',
        warm: '0 4px 20px -4px rgba(91,144,224,0.22)',
        card: '0 1px 8px -2px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
