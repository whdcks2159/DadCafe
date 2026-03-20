import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: '애는 우리 함께 키워 — DadCafe',
  description: '남편을 위한 임신·출산·육아 가이드 플랫폼',
  manifest: '/manifest.json',
  themeColor: '#f97316',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <div className="max-w-md mx-auto min-h-screen bg-white shadow-sm relative">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
