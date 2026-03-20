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
