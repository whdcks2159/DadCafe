'use client';

import BottomNav from '@/components/layout/BottomNav';
import Sidebar from '@/components/layout/Sidebar';
import SiteFooter from '@/components/layout/SiteFooter';
import NicknameSetupModal from '@/components/NicknameSetupModal';
import { useAuth } from '@/context/AuthContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { needsNickname, refreshProfile } = useAuth();

  return (
    <div className="min-h-screen bg-warm-50">
      <Sidebar />

      <div className="md:ml-60">
        <div className="md:max-w-3xl md:mx-auto md:px-6 md:py-6">
          <div className="bg-white md:rounded-2xl md:shadow-sm min-h-screen md:min-h-0">
            <main className="pb-20 md:pb-8">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </div>

      <BottomNav />

      {/* 닉네임 미설정 시 모달 */}
      {needsNickname && (
        <NicknameSetupModal onComplete={refreshProfile} />
      )}
    </div>
  );
}
