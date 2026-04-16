# dadcafe (파파플랜) — Claude 프로젝트 가이드

## 프로젝트 개요

**앱명:** 파파플랜 (dadcafe)
**대상:** 예비아빠 / 초보아빠
**목표:** 급한 상황에서도 읽지 않고 행동할 수 있는 아빠 전용 육아 가이드
**배포:** https://dadcafe.vercel.app
**스택:** Next.js 14 (App Router) / TypeScript / Tailwind CSS / Firebase / Vercel

---

## 팀 운영 방식

기능 요청 시 아래 5개 역할로 순서대로 분석 후 구현한다.

| 역할 | 담당 |
|------|------|
| **PM** | 기능 목적 / 사용자 문제 / 시나리오 |
| **UX/UI** | 화면 구조 / 사용자 흐름 / UI 구성 요소 |
| **프론트엔드** | 컴포넌트 / 상태 관리 / 화면 로직 |
| **백엔드** | API 목록 / DB 설계 / 데이터 흐름 |
| **QA** | 예외 케이스 / 테스트 포인트 |

---

## 핵심 설계 원칙

1. **읽지 않아도 행동할 수 있어야 한다** — 설명보다 행동 중심
2. **탭 2번 이내에 원하는 정보에 도달** — 뎁스 최소화
3. **급한 상황 우선** — 에스컬레이션(병원/응급) 항목은 항상 분리 강조
4. **dadcafe 톤 유지** — 권위적이지 않고, 아빠 옆에서 조용히 도와주는 느낌

---

## 프로젝트 구조

```
src/
├── app/
│   ├── (main)/               # 주요 페이지 그룹
│   │   ├── situations/       # 상황별 가이드
│   │   ├── guide/            # 단계별 가이드
│   │   ├── checklist/        # 체크리스트
│   │   ├── ai-guide/         # AI 맞춤 플랜
│   │   ├── diary/            # 육아일기
│   │   ├── tips/             # 임신 꿀팁
│   │   ├── fertility/        # 난임 가이드
│   │   ├── gov-support/      # 정부 지원
│   │   ├── community/        # 커뮤니티
│   │   ├── dad-level/        # 아빠 레벨 퀴즈
│   │   ├── baby/             # 아기 등록/관리
│   │   └── profile/          # 내 정보
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── TopHeader.tsx     # 모바일 상단 헤더 (검색 아이콘 포함)
│   │   ├── BottomNav.tsx     # 모바일 하단 탭 (가운데 검색 버튼)
│   │   └── Sidebar.tsx       # 데스크탑 좌측 사이드바
│   ├── SearchOverlay.tsx     # 키워드 검색 오버레이 (fuse.js)
│   ├── SituationDetail.tsx   # 상황 상세 (가이드/체크리스트 토글)
│   ├── ChecklistMode.tsx     # 10초 체크리스트 모드
│   ├── AIGuideChat.tsx       # AI 채팅 컴포넌트
│   └── BabyCard.tsx          # 아기 카드
├── data/
│   ├── situations.ts         # 상황별 가이드 데이터 (~60개)
│   ├── stages.ts             # 단계별 가이드 (4단계 / 14토픽)
│   ├── checklist.ts          # 체크리스트 데이터
│   ├── searchIndex.ts        # 검색 인덱스 + 키워드 동의어 사전
│   ├── tips.ts               # 임신 꿀팁
│   ├── fertility.ts          # 난임 가이드
│   └── govSupport.ts         # 정부 지원 항목
├── types/
│   └── index.ts              # 전체 TypeScript 타입 정의
├── lib/
│   ├── firebase/             # Firebase 연동
│   └── baby.ts               # 아기 관련 유틸
└── context/
    └── BabyContext.tsx       # 아기 상태 Context
```

---

## 주요 데이터 타입

```typescript
// 상황별 가이드
interface SituationGuide {
  slug: string;
  titleKo: string;
  summaryKo: string;
  emoji: string;
  tag: 'pregnancy' | 'newborn' | 'toddler' | 'hospital' | 'relationship';
  steps: SituationStep[];   // 체크리스트 순서 = 행동 순서
  doList: string[];
  dontList: string[];
}

// 단계별 가이드
interface Stage {
  slug: StageSlug;           // 'pre-pregnancy' | 'pregnant' | 'newborn' | 'toddler'
  topics: GuideTopic[];
}

// 검색 인덱스
interface SearchItem {
  id: string;
  type: 'situation' | 'guide';
  titleKo: string;
  summaryKo: string;
  href: string;
  tag: string;
  tagLabel: string;
  keywords: string;
  previewSteps: string[];
}
```

---

## 구현된 기능 목록

### 콘텐츠
| 기능 | 경로 | 비고 |
|------|------|------|
| 단계별 가이드 | `/guide/[stage]/[topic]` | 4단계 14토픽 |
| 상황별 가이드 | `/situations/[slug]` | ~60개 상황 |
| 임신 꿀팁 | `/tips/[slug]` | |
| 난임 가이드 | `/fertility` | |
| 정부 지원 | `/gov-support/[slug]` | 2026 정책 기준 |
| 아빠 레벨 퀴즈 | `/dad-level` | beginner/ready/experienced |
| 블로그 | `/blog` / `/blog/[slug]` | 1000자+ 심층 아티클, JSON-LD Article 스키마 |
| 서비스 소개 | `/about` | 미션·기능·연락처 |
| 개인정보처리방침 | `/privacy` | 애드센스/앱스토어 필수 |
| 이용약관 | `/terms` | 앱스토어 심사 필수 |

### UX 기능
| 기능 | 구현 파일 | 설명 |
|------|-----------|------|
| 상황 키워드 검색 | `SearchOverlay.tsx` / `searchIndex.ts` | fuse.js 퍼지 검색, 오타·유사어 대응 |
| 10초 체크리스트 모드 | `ChecklistMode.tsx` / `SituationDetail.tsx` | 상황 상세에서 토글, 에스컬레이션 분리 |
| 하단 검색 버튼 | `BottomNav.tsx` | 가운데 brand-500 원형 플로팅 버튼 |
| 사이트 푸터 | `SiteFooter.tsx` | 법적 링크(privacy/terms/about) + 서비스 네비게이션 |

### PWA / 앱 배포
| 기능 | 파일 | 설명 |
|------|------|------|
| PWA manifest | `public/manifest.json` | 앱 이름/아이콘/shortcuts/display:standalone |
| Service Worker | `public/sw.js` | 오프라인 캐싱, Network First 전략 |
| SW 등록 | `ServiceWorkerRegistrar.tsx` | 클라이언트 사이드 SW 등록 |
| TWA 인증 파일 | `public/.well-known/assetlinks.json` | Android TWA 도메인 인증 |
| PWA 아이콘 | `public/icons/icon-*x*.png` | 72~512px 8종 |

### 사용자 기능
| 기능 | 경로 | 비고 |
|------|------|------|
| AI 맞춤 플랜 | `/ai-guide` | Claude API 스트리밍 |
| 육아일기 | `/diary` | Firebase 저장, AI 요약 |
| 커뮤니티 | `/community` | Firebase Firestore |
| 아기 등록/관리 | `/baby` | Firebase |
| 내 정보 | `/profile` | Firebase Auth |

---

## 검색 시스템

- **엔진:** fuse.js (클라이언트 퍼지 검색)
- **인덱스:** situations(60개) + guide topics(14개) = 74개 항목
- **가중치:** 제목(50%) + 요약(30%) + 키워드(20%)
- **유사어 사전:** `searchIndex.ts` 내 `KEYWORD_SYNONYMS` (30개+)
- **진입점:** TopHeader 검색 아이콘 / BottomNav 가운데 버튼

---

## 10초 체크리스트 모드

- **위치:** 상황 상세 페이지 (`/situations/[slug]`)
- **토글:** 가이드 모드 ↔ 체크리스트 모드 세그먼트 컨트롤
- **에스컬레이션 감지:** `ESCALATION_KEYWORDS` 포함 step → 빨간 경고 섹션 분리
- **완료 흐름:** 진행 바 → 전체 완료 → AI 가이드 연결
- **상태:** 클라이언트 useState (세션 내 유지, 미저장)

---

## 스타일 가이드

- **색상:** brand-500 (주색), slate-* (텍스트), green/red (do/don't)
- **둥근 모서리:** 카드 rounded-2xl, 버튼 rounded-xl/rounded-full
- **폰트 강조:** font-black (제목), font-bold (소제목), font-medium (본문)
- **모바일 우선:** md: 접두사로 데스크탑 대응
- **이모지 사용 금지** (2026-03 전체 제거됨)

---

## 배포

```bash
bash deploy.sh   # Vercel 프로덕션 배포 + dadcafe.vercel.app alias
```

- 빌드 전 `npx tsc --noEmit` 타입 체크 필수
- 배포 후 https://dadcafe.vercel.app 에서 확인

---

## TWA APK 생성 방법 (로컬에서 실행)

PWA 배포 후 Android APK를 생성하려면 **본인 PC**에서 진행:

```bash
# 1. Bubblewrap 설치
npm install -g @bubblewrap/cli

# 2. TWA 프로젝트 초기화
mkdir papaplan-twa && cd papaplan-twa
bubblewrap init --manifest https://dadcafe.vercel.app/manifest.json

# 3. 설정값 입력
#    - Package ID: com.dadcafe.papaplan
#    - App name: 파파플랜
#    - Start URL: https://dadcafe.vercel.app/
#    - Display: standalone

# 4. APK 빌드
bubblewrap build

# 5. SHA256 fingerprint 추출 (assetlinks.json 업데이트용)
keytool -list -v -keystore android.keystore | grep SHA256
```

SHA256 fingerprint를 받아서 `public/.well-known/assetlinks.json`의
`PLACEHOLDER_SHA256_FINGERPRINT` 자리에 교체 후 재배포하면 TWA 완성.

### Play Store 등록 순서
1. `bubblewrap build` → `app-release-signed.apk` 생성
2. Google Play Console 계정 생성 (1회 $25)
3. 새 앱 등록 → APK/AAB 업로드
4. 심사 제출

---

## 앞으로 구현 예정

- [ ] 10초 체크리스트 완료 기록 저장 (Firebase)
- [ ] 검색 히스토리 (localStorage)
- [ ] 아기 성장 추적 대시보드
- [ ] 푸시 알림 (예방접종 / 검진 일정)
- [ ] TWA SHA256 fingerprint 교체 후 Play Store 제출
- [ ] 블로그 포스트 추가 (현재 4개 → 20개+ 목표)
- [ ] 블로그에 Firebase 기반 CMS 또는 MDX 파일 방식 도입 검토
- [ ] Google Search Console에서 sitemap.xml 재제출 (dadcafe.vercel.app 도메인으로 변경됨)

## Design System

UI나 시각적 결정을 내리기 전에 항상 `DESIGN.md`를 먼저 읽어라.
색상, 폰트, 간격, 보더 반경, 컴포넌트 패턴이 모두 정의되어 있다.

**핵심 규칙:**
- `slate-*` 사용 금지 — `neutral-*`로 통일
- Hero 섹션에 장식용 blob (내용 없는 absolute 원형) 금지
- 이모지를 UI 장식으로 사용 금지 (FruitIcon처럼 기능적 역할은 예외)
- 배경은 항상 `warm-50` (#FFFBF7), white 직접 사용 금지
- 새 컴포넌트 작성 시 DESIGN.md의 border radius 계층 참조 (카드=rounded-3xl, 버튼=rounded-2xl)
- All font choices, colors, spacing, and aesthetic direction are defined in DESIGN.md.
- In QA mode, flag any code that doesn't match DESIGN.md.
`DESIGN.md`에서 벗어나려면 사용자의 명시적 승인이 필요하다.
`slate-*` 대신 `neutral-*` 사용. Hero 섹션에 장식용 blob 금지.

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.

### Available skills

/office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation,
/review, /ship, /land-and-deploy, /canary, /benchmark, /browse, /qa, /qa-only, /design-review,
/setup-browser-cookies, /setup-deploy, /retro, /investigate, /document-release, /codex, /cso,
/autoplan, /careful, /freeze, /guard, /unfreeze, /gstack-upgrade

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke checkpoint
- Code quality, health check → invoke health