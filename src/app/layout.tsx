import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
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

export const metadata: Metadata = {
  title: '파파플랜 — 아빠의 육아 플랜, 여기서 시작',
  description: '남편을 위한 임신·출산·육아 가이드 플랫폼',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '파파플랜',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2764985690023492"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AuthProvider>
          <BabyProvider>
            {children}
          </BabyProvider>
        </AuthProvider>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
