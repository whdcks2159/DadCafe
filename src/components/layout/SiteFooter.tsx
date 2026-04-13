import Link from 'next/link';

const NAV_LINKS = [
  { label: '가이드',      href: '/guide'      },
  { label: '상황별 가이드', href: '/situations' },
  { label: 'AI 맞춤 플랜', href: '/ai-guide'  },
  { label: '정부 지원',   href: '/gov-support' },
  { label: '커뮤니티',    href: '/community'  },
  { label: '블로그',      href: '/blog'       },
];

const LEGAL_LINKS = [
  { label: '서비스 소개',      href: '/about'   },
  { label: '개인정보처리방침',  href: '/privacy' },
  { label: '이용약관',         href: '/terms'   },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 px-5 py-8 pb-24 md:pb-8">
      {/* 로고 */}
      <div className="flex items-center gap-2 mb-5">
        <img src="/icons/mainLogo.png" alt="" className="w-7 h-7" />
        <div>
          <p className="font-black text-sm text-neutral-800">파파플랜</p>
          <p className="text-[10px] text-neutral-400">PapaPlan · 아빠 육아 가이드</p>
        </div>
      </div>

      {/* 서비스 내비게이션 */}
      <nav aria-label="서비스 메뉴">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-neutral-500 hover:text-brand-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 법적 링크 */}
      <nav aria-label="법적 정보">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-neutral-400 hover:text-brand-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 면책 고지 */}
      <p className="text-[11px] text-neutral-400 leading-relaxed mb-4">
        파파플랜의 정보는 일반적인 참고용이며 의학적 진단·처방을 대체하지 않습니다.
        건강 문제는 반드시 전문 의료진과 상담하세요.
      </p>

      {/* 카피라이트 */}
      <p className="text-[11px] text-neutral-400">
        © 2026 파파플랜 · 아이와 함께하는 모든 순간
      </p>
    </footer>
  );
}
