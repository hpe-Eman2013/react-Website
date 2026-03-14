export type StudyAccessTier = "public" | "website-member" | "assembly-member";

export type StudyCollection =
  | "scriptural-studies"
  | "genesis"
  | "revelation"
  | "ancient-witnesses"
  | "lectures-sermons";

export interface ScriptureCallout {
  reference: string;
  text: string;
}

export interface VisualSegment {
  id: string;
  heading: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  speaker?: string;
  scripture?: ScriptureCallout;
}

export interface StudySeriesSummary {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  collection: StudyCollection;
  heroImage: string;
  posterImage?: string;
  totalParts: number;
  accessTier: StudyAccessTier;
  tags: string[];
  featured?: boolean;
}

export interface StudyPart {
  seriesSlug: string;
  partNumber: number;
  slug: string;
  title: string;
  durationLabel: string;
  summary: string;
  heroImage?: string;
  notesAvailable: boolean;
  quizAvailable: boolean;
  unlockRequiresPreviousQuizPass: boolean;
  segments: VisualSegment[];
}

export interface StudyNotesMeta {
  seriesSlug: string;
  partNumber: number;
  title: string;
  description: string;
  downloadEnabledOnPass: boolean;
  fileName?: string;
}

export interface QuizQuestionOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  type: "multiple-choice" | "true-false";
  options: QuizQuestionOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface StudyQuiz {
  seriesSlug: string;
  partNumber: number;
  title: string;
  passPercent: number;
  questions: QuizQuestion[];
}

export interface StudyPartProgress {
  seriesSlug: string;
  partNumber: number;
  unlocked: boolean;
  completed: boolean;
  quizPassed: boolean;
  scorePercent?: number;
  notesDownloadEnabled: boolean;
}

export interface StudySeriesBundle {
  summary: StudySeriesSummary;
  parts: StudyPart[];
}
