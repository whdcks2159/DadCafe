import type { Metadata } from 'next';
import TopHeader from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '파파플랜 개인정보처리방침 — 수집하는 정보, 이용 목적, 보유 기간, 제3자 제공 내역을 안내합니다.',
  robots: { index: true, follow: true },
};

const SECTION_CLASS = 'mb-8';
const H2_CLASS = 'text-base font-black text-neutral-900 mb-3';
const P_CLASS = 'text-sm text-neutral-600 leading-relaxed mb-2';
const UL_CLASS = 'list-disc list-inside space-y-1 text-sm text-neutral-600 leading-relaxed mb-2 pl-1';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader title="개인정보처리방침" />

      <article className="px-6 py-8 max-w-2xl">
        <h1 className="text-xl font-black text-neutral-900 mb-1">개인정보처리방침</h1>
        <p className="text-xs text-neutral-400 mb-8">최종 수정일: 2026년 4월 1일 · 시행일: 2026년 4월 1일</p>

        <div className={SECTION_CLASS}>
          <p className={P_CLASS}>
            파파플랜(이하 &quot;서비스&quot;)은 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」,
            「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수합니다.
            본 방침은 서비스가 어떤 정보를 수집하고, 어떻게 이용하며, 어떻게 보호하는지를 안내합니다.
          </p>
        </div>

        {/* 1 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제1조 수집하는 개인정보 항목</h2>
          <p className={P_CLASS}>서비스는 아래와 같은 개인정보를 수집합니다.</p>
          <p className="text-sm font-bold text-neutral-700 mb-1">가. 회원가입 시 (Google 소셜 로그인)</p>
          <ul className={UL_CLASS}>
            <li>이메일 주소, 프로필 이름, 프로필 사진 (Google 계정에서 제공)</li>
            <li>서비스 내 닉네임 (사용자 직접 입력)</li>
          </ul>
          <p className="text-sm font-bold text-neutral-700 mb-1">나. 서비스 이용 시 자동 수집</p>
          <ul className={UL_CLASS}>
            <li>서비스 접속 일시, 기기 정보(OS, 브라우저 종류)</li>
            <li>IP 주소, 쿠키, 방문 페이지 및 이용 기록</li>
            <li>육아일기 내용 (사용자가 직접 입력한 텍스트 및 이미지)</li>
            <li>아기 정보 (이름, 생년월일 — 사용자 직접 입력)</li>
          </ul>
          <p className="text-sm font-bold text-neutral-700 mb-1">다. 민감정보</p>
          <p className={P_CLASS}>
            서비스는 민감정보(건강정보, 종교, 정치적 성향 등)를 별도로 수집하지 않습니다.
            다만, 육아일기 등 사용자가 자발적으로 입력하는 텍스트에 건강 관련 내용이 포함될 수 있으며,
            이는 사용자 본인의 선택에 의한 것입니다.
          </p>
        </div>

        {/* 2 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제2조 개인정보의 수집 및 이용 목적</h2>
          <ul className={UL_CLASS}>
            <li>회원 식별 및 서비스 제공 (로그인, 마이페이지, 육아일기 저장)</li>
            <li>AI 맞춤 플랜 및 일기 요약 서비스 제공</li>
            <li>커뮤니티 게시물 작성자 식별</li>
            <li>서비스 품질 개선 및 통계 분석</li>
            <li>법령상 의무 이행 및 분쟁 해결</li>
          </ul>
        </div>

        {/* 3 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제3조 개인정보 보유 및 이용 기간</h2>
          <ul className={UL_CLASS}>
            <li>회원탈퇴 시 즉시 삭제 (단, 법령에 따라 일정 기간 보관이 필요한 경우 예외)</li>
            <li>전자상거래법에 따른 소비자 분쟁 기록: 3년</li>
            <li>통신비밀보호법에 따른 로그인 기록: 3개월</li>
          </ul>
        </div>

        {/* 4 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제4조 개인정보의 제3자 제공</h2>
          <p className={P_CLASS}>
            서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
            다음의 경우에 한하여 예외를 둡니다.
          </p>
          <ul className={UL_CLASS}>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정 또는 수사기관의 요청이 있는 경우</li>
          </ul>
        </div>

        {/* 5 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제5조 개인정보 처리 위탁</h2>
          <p className={P_CLASS}>서비스는 아래 업체에 개인정보 처리를 위탁합니다.</p>
          <div className="overflow-x-auto mb-2">
            <table className="text-xs text-neutral-600 border-collapse w-full">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border border-neutral-200 px-3 py-2 text-left font-bold">수탁 업체</th>
                  <th className="border border-neutral-200 px-3 py-2 text-left font-bold">위탁 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-3 py-2">Google Firebase</td>
                  <td className="border border-neutral-200 px-3 py-2">회원 인증, 데이터베이스 저장, 파일 스토리지</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-3 py-2">Anthropic (Claude API)</td>
                  <td className="border border-neutral-200 px-3 py-2">AI 맞춤 플랜 생성, 육아일기 요약 (입력 텍스트 전달)</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-3 py-2">Vercel</td>
                  <td className="border border-neutral-200 px-3 py-2">웹 서비스 호스팅 및 서버 운영</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제6조 광고 서비스 (Google AdSense)</h2>
          <p className={P_CLASS}>
            서비스는 Google AdSense를 통한 맞춤 광고를 제공합니다. Google은 쿠키를 사용하여
            이용자의 관심사에 기반한 광고를 제공합니다. Google의 광고 개인화는
            Google 계정 설정에서 관리하거나 opt-out 할 수 있습니다.
          </p>
          <ul className={UL_CLASS}>
            <li>Google 개인정보처리방침: https://policies.google.com/privacy</li>
            <li>광고 맞춤 설정 해제: https://adssettings.google.com</li>
          </ul>
        </div>

        {/* 7 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제7조 이용자의 권리</h2>
          <p className={P_CLASS}>이용자는 언제든지 아래 권리를 행사할 수 있습니다.</p>
          <ul className={UL_CLASS}>
            <li>개인정보 열람 요청</li>
            <li>개인정보 정정·삭제 요청</li>
            <li>개인정보 처리 정지 요청</li>
            <li>서비스 탈퇴 (내 정보 페이지 또는 이메일 요청)</li>
          </ul>
          <p className={P_CLASS}>요청은 아래 이메일로 접수하며, 10일 이내에 처리합니다.</p>
          <a href="mailto:papaplan.kr@gmail.com" className="text-sm font-bold text-brand-500">
            papaplan.kr@gmail.com
          </a>
        </div>

        {/* 8 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제8조 쿠키 정책</h2>
          <p className={P_CLASS}>
            서비스는 로그인 상태 유지, 광고 제공, 서비스 개선을 위해 쿠키를 사용합니다.
            브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 서비스 이용이 제한될 수 있습니다.
          </p>
        </div>

        {/* 9 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제9조 개인정보 보호책임자</h2>
          <ul className={UL_CLASS}>
            <li>담당자: 파파플랜 운영팀</li>
            <li>이메일: papaplan.kr@gmail.com</li>
          </ul>
          <p className={P_CLASS}>
            개인정보 침해 관련 신고는 개인정보분쟁조정위원회(www.kopico.go.kr),
            개인정보침해신고센터(privacy.kisa.or.kr)에 문의하실 수 있습니다.
          </p>
        </div>

        <p className="text-xs text-neutral-400 mt-8">본 방침은 2026년 4월 1일부터 적용됩니다.</p>
      </article>
    </div>
  );
}
