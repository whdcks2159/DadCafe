import type { Metadata } from 'next';
import TopHeader from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: '데이터 삭제 요청',
  description: '파파플랜 계정 데이터 삭제 요청 페이지입니다.',
  robots: { index: false, follow: false },
};

const DATA_TYPES = [
  { label: '계정 정보', desc: '이름, 이메일, 프로필 사진 (Google 로그인 정보)' },
  { label: '육아일기', desc: '작성한 모든 일기 텍스트 및 첨부 사진' },
  { label: '아기 정보', desc: '등록한 아기 이름, 생년월일' },
  { label: '커뮤니티 게시물', desc: '작성한 게시글 및 댓글' },
];

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader title="데이터 삭제 요청" />

      <div className="px-6 py-8 max-w-2xl">
        <h1 className="text-xl font-black text-neutral-900 mb-2">데이터 삭제 요청</h1>
        <p className="text-sm text-neutral-500 leading-relaxed mb-8">
          파파플랜에서 수집한 개인 데이터의 전체 또는 일부 삭제를 요청할 수 있습니다.
          계정을 삭제하지 않고도 특정 데이터만 삭제 요청이 가능합니다.
        </p>

        {/* 삭제 가능한 데이터 목록 */}
        <section className="mb-8">
          <p className="text-xs font-bold text-brand-400 tracking-widest mb-4">삭제 가능한 데이터</p>
          <div className="space-y-3">
            {DATA_TYPES.map((item) => (
              <div key={item.label} className="p-4 border border-slate-100 rounded-2xl">
                <p className="font-bold text-sm text-neutral-900 mb-0.5">{item.label}</p>
                <p className="text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 삭제 요청 방법 */}
        <section className="mb-8">
          <p className="text-xs font-bold text-brand-400 tracking-widest mb-4">요청 방법</p>
          <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-brand-500 text-white text-xs font-black rounded-full flex items-center justify-center">1</span>
              <p className="text-sm text-neutral-700 leading-relaxed">아래 이메일로 삭제 요청 메일을 보내주세요.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-brand-500 text-white text-xs font-black rounded-full flex items-center justify-center">2</span>
              <p className="text-sm text-neutral-700 leading-relaxed">메일에 <strong>가입한 이메일 주소</strong>와 <strong>삭제를 원하는 데이터 종류</strong>를 명시해주세요.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-brand-500 text-white text-xs font-black rounded-full flex items-center justify-center">3</span>
              <p className="text-sm text-neutral-700 leading-relaxed">요청 접수 후 <strong>7일 이내</strong>에 처리 완료 및 결과를 회신드립니다.</p>
            </div>
          </div>
        </section>

        {/* 이메일 버튼 */}
        <a
          href="mailto:papaplan.kr@gmail.com?subject=데이터 삭제 요청&body=안녕하세요.%0A%0A가입 이메일: %0A삭제 요청 데이터: %0A%0A감사합니다."
          className="flex items-center justify-center gap-2 w-full py-4 bg-brand-500 text-white font-black text-sm rounded-2xl hover:bg-brand-600 transition-colors active:scale-[0.98]"
        >
          이메일로 삭제 요청하기
        </a>

        <p className="text-xs text-neutral-400 text-center mt-3">
          papaplan.kr@gmail.com
        </p>

        {/* 계정 전체 삭제 안내 */}
        <div className="mt-8 p-4 bg-slate-50 rounded-2xl">
          <p className="text-xs font-bold text-neutral-700 mb-1">계정 전체 삭제를 원하시나요?</p>
          <p className="text-xs text-neutral-500 leading-relaxed">
            계정 및 모든 데이터를 완전히 삭제하려면 동일한 이메일로 "계정 전체 삭제 요청"을 보내주세요.
            탈퇴 후 모든 데이터는 30일 이내에 완전히 삭제됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
