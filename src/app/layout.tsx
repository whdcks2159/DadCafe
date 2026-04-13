import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import './globals.css';
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar';

const AuthProvider = dynamic(
  () => import('@/context/AuthContext').then((m) => m.AuthProvider),
  { ssr: false }
);

const BabyProvider = dynamic(
  () => import('@/context/BabyContext').then((m) => m.BabyProvider),
  { ssr: false }
);

const BASE_URL = 'https://dadcafe.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '파파플랜 — 아빠의 육아 플랜, 여기서 시작',
    template: '%s | 파파플랜',
  },
  description: '남편을 위한 임신·출산·육아 가이드 플랫폼. 임신부터 영아기까지 아빠가 해야 할 일을 단계별로 친절하게 안내합니다.',
  keywords: ['아빠 육아', '임신 가이드', '신생아', '출산 준비', '육아일기', '파파플랜', '예비아빠', '초보아빠'],
  authors: [{ name: '파파플랜' }],
  creator: '파파플랜',
  publisher: '파파플랜',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '파파플랜',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: BASE_URL,
    siteName: '파파플랜',
    title: '파파플랜 — 아빠의 육아 플랜, 여기서 시작',
    description: '남편을 위한 임신·출산·육아 가이드 플랫폼. 임신부터 영아기까지 아빠가 해야 할 일을 단계별로 안내합니다.',
    images: [{ url: '/icons/mainLogo.png', width: 512, height: 512, alt: '파파플랜' }],
  },
  twitter: {
    card: 'summary',
    title: '파파플랜 — 아빠의 육아 플랜',
    description: '남편을 위한 임신·출산·육아 가이드 플랫폼',
    images: ['/icons/mainLogo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png',                 type: 'image/png' },
      { url: '/icons/favicon-32x32.png',     sizes: '32x32',   type: 'image/png' },
      { url: '/icons/favicon-16x16.png',     sizes: '16x16',   type: 'image/png' },
      { url: '/icons/icon-192x192.png',      sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png',      sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png',  sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'naver-site-verification': '729da710a20759e3ae78c31a3bc9b910c293b63a',
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '파파플랜',
  alternateName: 'PapaPlan',
  url: BASE_URL,
  description: '예비아빠·초보아빠를 위한 임신·출산·육아 가이드 플랫폼',
  inLanguage: 'ko-KR',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/situations?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '파파플랜',
  url: BASE_URL,
  logo: `${BASE_URL}/icons/mainLogo.png`,
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'papaplan.kr@gmail.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <AuthProvider>
          <BabyProvider>
            {children}
          </BabyProvider>
        </AuthProvider>
        <ServiceWorkerRegistrar />
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2764985690023492"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
