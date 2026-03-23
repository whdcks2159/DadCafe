export type DadLevel = 'beginner' | 'ready' | 'experienced';
export type StageSlug = 'pre-pregnancy' | 'pregnant' | 'newborn' | 'toddler';

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string | null;
  dadLevel: DadLevel | null;
  currentStage: StageSlug | null;
  joinedAt: Date;
  postCount: number;
}

export interface GuideSection {
  headingKo: string;
  bodyKo: string;
  tips?: string[];
}

export interface GuideTopic {
  slug: string;
  titleKo: string;
  summaryKo: string;
  content: GuideSection[];
  estimatedReadMin: number;
}

export interface Stage {
  slug: StageSlug;
  labelKo: string;
  descriptionKo: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
  topics: GuideTopic[];
}

export interface ChecklistItem {
  id: string;
  textKo: string;
  noteKo?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ChecklistCategory {
  id: string;
  titleKo: string;
  stage: StageSlug;
  items: ChecklistItem[];
}

export interface SituationStep {
  order: number;
  titleKo: string;
  descriptionKo: string;
}

export interface SituationGuide {
  slug: string;
  titleKo: string;
  summaryKo: string;
  emoji: string;
  tag: 'pregnancy' | 'newborn' | 'toddler' | 'hospital' | 'relationship';
  steps: SituationStep[];
  doList: string[];
  dontList: string[];
}

export interface Post {
  id: string;
  authorUid: string;
  authorName: string;
  authorPhotoURL: string | null;
  titleKo: string;
  bodyKo: string;
  tags: string[];
  likeCount: number;
  commentCount: number;
  createdAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  authorUid: string;
  authorName: string;
  authorPhotoURL: string | null;
  bodyKo: string;
  createdAt: Date;
}

export interface QuizOption {
  id: string;
  textKo: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  questionKo: string;
  options: QuizOption[];
}

export interface QuizResult {
  level: DadLevel;
  titleKo: string;
  descriptionKo: string;
  badgeEmoji: string;
  tips: string[];
}

// Tips
export type TipCategory = 'preparation' | 'pregnancy' | 'birth' | 'newborn';

export interface TipItem {
  slug: string;
  titleKo: string;
  summaryKo: string;
  category: TipCategory;
  icon: string;
  body: string[];           // 행동 중심 본문 bullet
  dadActions: string[];     // 남편이 해야 할 것
  relatedSlugs?: string[];  // 연관 꿀팁
  viewCount?: number;
}

// Fertility
export interface FertilityStep {
  order: number;
  labelKo: string;
  descriptionKo: string;
}

export interface FertilitySection {
  slug: string;
  titleKo: string;
  summaryKo: string;
  icon: string;
  body: string[];
  steps?: FertilityStep[];
  dadActions: string[];
  govSupportSlug?: string;  // 연관 정부지원
}

export type GovStage = 'pre-pregnancy' | 'pregnant' | 'newborn' | 'infant';
export type GovCategory = 'health' | 'finance' | 'leave' | 'care';

export interface GovFlowStep {
  order: number;
  labelKo: string;
}

export interface GovSupportItem {
  slug: string;
  titleKo: string;
  summaryKo: string;
  icon: string;
  stage: GovStage[];
  category: GovCategory;
  amount: string;
  targetKo: string;
  howToKo: string;
  documents: string[];
  applyUrl: string;
  applyLabel: string;
  deadline?: string;
  flow: GovFlowStep[];
  dadActions: string[];
  isUrgent?: boolean;
  minWeek?: number;
  maxWeek?: number;
}
