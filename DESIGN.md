# Design System — 파파플랜 (PapaPlan)

## Product Context
- **What this is:** 한국 예비아빠 / 초보아빠를 위한 임신·출산·육아 가이드 앱
- **Who it's for:** 20~40대 남성, 첫째 자녀를 준비하거나 막 얻은 아빠
- **Space/industry:** 육아 / 모바일 헬스 / 라이프스타일
- **Project type:** 모바일 우선 PWA (Android TWA 배포 예정)

---

## Aesthetic Direction
- **Direction:** Warm & Calm — 권위적이지 않고, 아빠 옆에서 조용히 도와주는 느낌
- **Decoration level:** Intentional — 그라디언트 카드와 단색 배경 조합. 장식은 기능을 보조할 때만.
- **Mood:** 따뜻하고 신뢰감 있는 크림/블루 톤. 맘카페 느낌이 아니라 아빠가 열어볼 수 있는 앱.
- **Anti-patterns:** 장식용 blob/원형, 보라 그라디언트, 3열 아이콘 그리드 금지.

---

## Typography
- **Primary (UI 전반):** Noto Sans KR — 한국어 가독성 최우선. `fontFamily.sans` 기본값.
- **강조 (제목·CTA):** `font-black` (900 weight) — Noto Sans KR Black
- **소제목:** `font-bold` (700 weight)
- **본문:** `font-medium` (500 weight) 또는 `font-normal` (400 weight)
- **Scale:**

| 역할 | 클래스 | 크기 |
|------|--------|------|
| 메인 제목 | `text-3xl font-black` | 30px |
| 카드 제목 | `text-lg font-black` | 18px |
| 섹션 제목 | `text-sm font-bold` | 14px |
| 본문 | `text-sm font-medium` | 14px |
| 보조 | `text-xs font-medium` | 12px |
| 레이블/배지 | `text-[10px] font-black` | 10px |

---

## Color

Primary: `brand-500` (#3567C8)

```
brand-50:  #EEF4FF  — 카드 배경, 연한 강조 배경
brand-100: #D9E8FF  — 보더, 연한 섹션
brand-200: #B3CEFF  — 비활성 보더
brand-400: #4E84E0  — 아이콘 배경, secondary 텍스트
brand-500: #3567C8  — 주요 버튼, 강조 텍스트 (Primary)
brand-600: #2A53A8  — hover 상태
brand-700: #1F3D84  — 다크 버전 primary
```

텍스트 계층:
```
neutral-900: #2A1F18  — 주요 제목 텍스트
neutral-700: #4A3F36  — 본문
neutral-500: #7D7167  — 보조 텍스트
neutral-400: #A89D93  — 플레이스홀더, 라벨
neutral-200: #E8DFD5  — 구분선
neutral-50:  #FFFBF7  — 메인 배경 (= warm-50)
```

시맨틱:
```
성공: emerald-400 / green    — 체크리스트 완료, 알림 허용
경고: amber-500 / orange     — D-day 임박
에러: rose-500 / red         — 에스컬레이션, 병원 권고
정보: brand-400              — 일반 안내
```

Phase별 그라디언트 (BabyCard):
```
임신 초기:  from-emerald-400 via-teal-400 to-green-300
임신 중기:  from-amber-400 via-orange-300 to-yellow-300
임신 후기:  from-blue-500 via-indigo-400 to-blue-400
신생아:     from-rose-400 via-pink-400 to-fuchsia-300  (0~30일)
신생아:     from-sky-400 via-blue-400 to-indigo-400   (30~100일)
영아기:     from-violet-400 via-purple-400 to-pink-400
```

다크 모드: 미구현. 필요 시 surface 색상 반전, brand 채도 10~15% 감소.

---

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable (모바일 터치 우선)
- **Scale:**

| 토큰 | 값 |
|------|-----|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-3` | 12px |
| `p-4` | 16px |
| `p-5` | 20px |
| `p-6` | 24px |
| `px-5 py-4` | 메인 섹션 내부 여백 기본값 |

터치 타겟 최소: 44px (`py-3` 버튼 기준).

---

## Layout
- **Approach:** Grid-disciplined (모바일 단열 기본, 2열은 기능 그리드에만)
- **Max content width:** `max-w-md` (448px) — 카드·폼 컴포넌트
- **페이지 좌우 패딩:** `px-5` (20px)
- **Border radius:**

| 역할 | 클래스 | 값 |
|------|--------|----|
| 주요 카드 | `rounded-3xl` | 24px |
| 버튼 (primary) | `rounded-2xl` | 16px |
| 버튼 (pill/tag) | `rounded-full` | 999px |
| 입력 필드 | `rounded-2xl` | 16px |
| 배지/칩 | `rounded-full` | 999px |
| 정보 박스 | `rounded-2xl` | 16px |

---

## Shadows
```
shadow-card: 0 1px 8px -2px rgba(42,31,24,0.07)    — 기본 카드
shadow-warm: 0 4px 20px -4px rgba(53,103,200,0.20)  — brand 강조
shadow-soft: 0 2px 16px -4px rgba(42,31,24,0.08)    — 모달/시트
```

---

## Components Patterns

**Primary Button:**
```
bg-brand-500 text-white font-bold rounded-2xl py-3.5 px-5
hover:bg-brand-600
active:scale-[0.98]
disabled:opacity-60
```

**Ghost/Secondary Button:**
```
text-neutral-400 font-medium text-sm rounded-2xl py-3 px-4
```

**Card:**
```
bg-white border border-neutral-100 rounded-3xl shadow-card
내부 패딩: p-4 ~ p-5
```

**Gradient Card (BabyCard 등):**
```
bg-gradient-to-br ${phaseGradient} rounded-3xl p-5 text-white shadow-warm
```

**정보 박스 (빈 상태·안내):**
```
bg-brand-50 rounded-2xl border border-brand-100 p-4
제목: text-sm font-bold text-brand-600
설명: text-xs text-neutral-500
```

**배지:**
```
text-[10px] font-black bg-white/20 px-2 py-0.5 rounded-full  — 카드 위 (흰 배경)
text-[10px] font-black bg-brand-200 text-brand-700 px-1.5 py-0.5 rounded-full  — 일반 배지
```

**Bottom Sheet Modal:**
```
fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-24
내부: w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl animate-fade-in-up
```

---

## Motion
- **Approach:** Minimal-functional
- **기본 전환:** `transition-colors`, `transition-all` (100~200ms)
- **스케일:** `active:scale-[0.98]` — 터치 피드백
- **Float 애니메이션:** `animate-float` — 아이콘 장식용 (가볍게)
- **로딩 스피너:** `border-t-transparent rounded-full animate-spin`
- **진입 애니메이션:** `animate-fade-in-up` — 모달/시트
- **금지:** 불필요한 장식 애니메이션, 장시간 transition

---

## Accessibility
- 터치 타겟: 최소 44px
- 색상 대비: brand-500 on white = 4.5:1 이상 (WCAG AA)
- 이미지 alt: 장식용 이미지는 `alt=""`, 의미 있는 이미지는 설명 필수
- 폼 레이블: 모든 input에 `label` 또는 `placeholder` (둘 다 있으면 label 우선)

---

## Decisions Log
| 날짜 | 결정 | 근거 |
|------|------|------|
| 2026-04-16 | DESIGN.md 최초 작성 | /design-consultation 기반, 기존 코드 패턴 추출 |
| 2026-04-16 | Hero blob 장식 제거 | AI 슬롭 패턴 6번 (내용 없는 absolute 원형) |
| 2026-04-16 | slate → neutral 통일 | 동일 색상에 두 토큰명 혼용 방지 |
| 2026-04-16 | neutral 텍스트 계층 정의 | 900/700/500/400 4단계 계층 확립 |
| 2026-04-10 | 이모지 전체 제거 | 앱 톤 통일 (2026-03 결정 유지) |
