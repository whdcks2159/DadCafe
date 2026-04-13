import type { Metadata } from 'next';
import TopHeader from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: '이용약관',
  description: '파파플랜 이용약관 — 서비스 이용 조건, 금지 행위, 면책 조항 등을 안내합니다.',
  robots: { index: true, follow: true },
};

const SECTION_CLASS = 'mb-8';
const H2_CLASS = 'text-base font-black text-neutral-900 mb-3';
const P_CLASS = 'text-sm text-neutral-600 leading-relaxed mb-2';
const UL_CLASS = 'list-disc list-inside space-y-1 text-sm text-neutral-600 leading-relaxed mb-2 pl-1';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader title="이용약관" />

      <article className="px-6 py-8 max-w-2xl">
        <h1 className="text-xl font-black text-neutral-900 mb-1">이용약관</h1>
        <p className="text-xs text-neutral-400 mb-8">최종 수정일: 2026년 4월 1일 · 시행일: 2026년 4월 1일</p>

        <div className={SECTION_CLASS}>
          <p className={P_CLASS}>
            본 약관은 파파플랜(이하 &quot;서비스&quot; 또는 &quot;회사&quot;)이 제공하는 육아 가이드 플랫폼 서비스의
            이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정합니다.
            서비스를 이용함으로써 본 약관에 동의한 것으로 간주합니다.
          </p>
        </div>

        {/* 제1조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제1조 목적</h2>
          <p className={P_CLASS}>
            본 약관은 파파플랜이 제공하는 임신·출산·육아 관련 정보 서비스, AI 맞춤 플랜, 커뮤니티,
            육아일기 등 모든 서비스(이하 &quot;서비스&quot;)의 이용에 관한 사항을 정함을 목적으로 합니다.
          </p>
        </div>

        {/* 제2조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제2조 용어 정의</h2>
          <ul className={UL_CLASS}>
            <li>&quot;서비스&quot;: 파파플랜이 운영하는 웹/앱 플랫폼 및 모든 기능</li>
            <li>&quot;이용자&quot;: 서비스에 접속하여 이용하는 모든 사람</li>
            <li>&quot;회원&quot;: Google 계정으로 가입하여 서비스를 이용하는 이용자</li>
            <li>&quot;콘텐츠&quot;: 서비스 내 텍스트, 이미지, 가이드 등 모든 정보</li>
          </ul>
        </div>

        {/* 제3조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제3조 서비스 이용 계약</h2>
          <p className={P_CLASS}>
            이용 계약은 이용자가 본 약관에 동의하고 Google 소셜 로그인을 완료한 시점에 성립합니다.
            만 14세 미만의 아동은 법정대리인의 동의 없이 서비스를 이용할 수 없습니다.
          </p>
        </div>

        {/* 제4조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제4조 서비스의 내용</h2>
          <p className={P_CLASS}>파파플랜은 아래 서비스를 제공합니다.</p>
          <ul className={UL_CLASS}>
            <li>임신·출산·육아 상황별/단계별 가이드 콘텐츠</li>
            <li>Claude AI 기반 맞춤 육아 플랜 제공</li>
            <li>10초 체크리스트 및 응급 가이드</li>
            <li>정부 지원 정보 (출산지원금, 육아휴직 등)</li>
            <li>아빠 육아일기 (AI 요약 포함)</li>
            <li>아빠 커뮤니티 게시판</li>
            <li>PWA 앱 설치 및 오프라인 이용 (일부 기능)</li>
          </ul>
        </div>

        {/* 제5조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제5조 이용자의 의무</h2>
          <p className={P_CLASS}>이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul className={UL_CLASS}>
            <li>타인을 사칭하거나 허위 정보를 등록하는 행위</li>
            <li>서비스의 안정적 운영을 방해하는 행위 (해킹, 과부하 유발 등)</li>
            <li>커뮤니티에 음란물, 혐오 발언, 스팸, 광고성 게시물을 게재하는 행위</li>
            <li>다른 이용자의 개인정보를 수집·이용하는 행위</li>
            <li>서비스 콘텐츠를 무단 복제·배포·상업적으로 이용하는 행위</li>
            <li>관련 법령을 위반하는 행위</li>
          </ul>
        </div>

        {/* 제6조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제6조 콘텐츠 저작권</h2>
          <p className={P_CLASS}>
            서비스 내 가이드, 아티클, UI 등 파파플랜이 제작한 모든 콘텐츠의 저작권은 파파플랜에 귀속됩니다.
            이용자가 작성한 육아일기, 커뮤니티 게시물의 저작권은 해당 이용자에게 귀속되나,
            서비스 개선 및 AI 학습 목적으로 비식별화하여 활용할 수 있습니다.
          </p>
        </div>

        {/* 제7조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제7조 광고</h2>
          <p className={P_CLASS}>
            서비스는 Google AdSense 등을 통해 광고를 게재할 수 있습니다.
            광고 콘텐츠에 대한 책임은 해당 광고주에게 있으며, 파파플랜은 광고 내용에 대해 책임지지 않습니다.
          </p>
        </div>

        {/* 제8조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제8조 면책 조항</h2>
          <p className={P_CLASS}>
            파파플랜은 다음 사항에 대해 책임을 지지 않습니다.
          </p>
          <ul className={UL_CLASS}>
            <li>
              서비스 내 정보는 일반적인 육아 참고용이며, 의학적 진단·처방을 대체하지 않습니다.
              건강 문제는 반드시 전문 의료진과 상담하세요.
            </li>
            <li>천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단</li>
            <li>이용자의 귀책으로 인한 손해</li>
            <li>제3자 서비스(Google, Anthropic 등)의 장애로 인한 서비스 중단</li>
          </ul>
        </div>

        {/* 제9조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제9조 서비스 변경 및 중단</h2>
          <p className={P_CLASS}>
            회사는 서비스 내용을 변경하거나 중단할 수 있으며, 중요한 변경 사항은 서비스 내 공지를 통해
            사전에 안내합니다. 서비스 중단으로 인한 이용자의 직접적인 손해에 대해서는 관련 법령이 정하는
            바에 따릅니다.
          </p>
        </div>

        {/* 제10조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제10조 약관의 변경</h2>
          <p className={P_CLASS}>
            회사는 약관을 변경할 수 있으며, 변경 시 시행일 7일 전부터 서비스 내 공지합니다.
            변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.
            변경 후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.
          </p>
        </div>

        {/* 제11조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제11조 분쟁 해결 및 관할 법원</h2>
          <p className={P_CLASS}>
            본 약관은 대한민국 법률에 따라 해석·적용됩니다.
            서비스 이용과 관련한 분쟁은 상호 협의를 통해 해결하며, 협의가 이루어지지 않는 경우
            대한민국 법원을 관할 법원으로 합니다.
          </p>
        </div>

        {/* 제12조 */}
        <div className={SECTION_CLASS}>
          <h2 className={H2_CLASS}>제12조 문의</h2>
          <p className={P_CLASS}>이용약관 관련 문의는 아래 이메일로 연락해 주세요.</p>
          <a href="mailto:papaplan.kr@gmail.com" className="text-sm font-bold text-brand-500">
            papaplan.kr@gmail.com
          </a>
        </div>

        <p className="text-xs text-neutral-400 mt-8">본 약관은 2026년 4월 1일부터 적용됩니다.</p>
      </article>
    </div>
  );
}
