import BottomNav from '@/components/layout/BottomNav';
import Sidebar from '@/components/layout/Sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 데스크탑 사이드바 */}
      <Sidebar />

      {/* 컨텐츠 영역 */}
      <div className="md:ml-60">
        {/* 데스크탑: 가운데 정렬된 넓은 컨텐츠 */}
        <div className="md:max-w-3xl md:mx-auto md:px-6 md:py-6">
          <div className="bg-white md:rounded-2xl md:shadow-sm min-h-screen md:min-h-0">
            <main className="pb-20 md:pb-8">{children}</main>
          </div>
        </div>
      </div>

      {/* 모바일 하단 탭 */}
      <BottomNav />
    </div>
  );
}
