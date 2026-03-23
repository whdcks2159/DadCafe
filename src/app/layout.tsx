import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import './globals.css';

const AuthProvider = dynamic(
  () => import('@/context/AuthContext').then((m) => m.AuthProvider),
  { ssr: false }
);

export const metadata: Metadata = {
  title: '파파플랜 — 아빠의 육아 플랜, 여기서 시작',
  description: '남편을 위한 임신·출산·육아 가이드 플랫폼',
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
