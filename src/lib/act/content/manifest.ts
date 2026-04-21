// Auto-generated content manifest for Cambridge B2 First
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "cambridge-b2-first",
  examName: "Cambridge B2 First",
  totalQuestions: 2200,
  category: "language_cert",
  topics: [
  {
    id: "reading-use-of-english",
    domain: "reading-use-of-english",
    title: "Reading & Use of English",
    icon: "📖",
    color: "#059669",
    questionTarget: 900,
    activityTypes: ["multiple_choice", "cloze_deletion", "word_formation"],
  },
  {
    id: "writing",
    domain: "writing",
    title: "Writing",
    icon: "✍️",
    color: "#1E40AF",
    questionTarget: 400,
    activityTypes: ["essay", "report", "review"],
  },
  {
    id: "listening",
    domain: "listening",
    title: "Listening",
    icon: "🎧",
    color: "#D97706",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "fill_in_blank"],
  },
  {
    id: "speaking",
    domain: "speaking",
    title: "Speaking",
    icon: "🗣️",
    color: "#7C3AED",
    questionTarget: 300,
    activityTypes: ["voice_explanation"],
  }
  ],
};
