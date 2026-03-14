import type {
  StudyNotesMeta,
  StudyPart,
  StudyPartProgress,
  StudyQuiz,
  StudySeriesBundle,
  StudySeriesSummary,
} from "@/types/scriptural-discussions";

const attackOnTheSeedSummary: StudySeriesSummary = {
  slug: "attack-on-the-seed",
  title: "Attack on the Seed",
  subtitle:
    "A visual study series tracing corruption, deception, and enmity against the promised seed.",
  description:
    "This series follows the unfolding conflict against the righteous seed line, drawing from Scripture and ancient witnesses to show how corruption, violence, and deception spread through the generations.",
  collection: "scriptural-studies",
  heroImage:
    "/src/assets/images/the-way/scriptural-discussions/attack-on-the-seed/hero.jpg",
  posterImage:
    "/src/assets/images/the-way/scriptural-discussions/attack-on-the-seed/poster.jpg",
  totalParts: 12,
  accessTier: "website-member",
  tags: ["Genesis", "Seed Line", "Enmity", "Ancient Witnesses", "Deception"],
  featured: true,
};

const attackOnTheSeedParts: StudyPart[] = [
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 1,
    slug: "part-1",
    title: "Part 1 — The Enmity Declared",
    durationLabel: "18 min",
    summary:
      "Introduces the war against the seed through Genesis 3:15 and establishes the study framework.",
    heroImage:
      "/src/assets/images/the-way/scriptural-discussions/attack-on-the-seed/part-1.jpg",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: false,
    segments: [
      {
        id: "p1-seg-1",
        heading: "The first declaration of conflict",
        speaker: "AI Lecturer",
        body: [
          "The study begins with the declaration of enmity between the serpent and the woman, and between two seed lines.",
          "This is not a minor statement. It becomes the interpretive foundation for the struggle that unfolds across generations.",
        ],
        scripture: {
          reference: "Genesis 3:15",
          text: "And I will put enmity between you and the woman, and between your seed and her seed...",
        },
      },
      {
        id: "p1-seg-2",
        heading: "Seed language is covenantal and historical",
        speaker: "AI Lecturer",
        body: [
          "The word seed must be read carefully in context. It can point to posterity, lineage, inheritance, and mission.",
          "In this series, we trace how rebellion seeks to corrupt what Yahuah has set apart.",
        ],
      },
      {
        id: "p1-seg-3",
        heading: "Why the conflict matters",
        speaker: "AI Lecturer",
        body: [
          "If the seed line is compromised, the promise appears threatened.",
          "That is why this study tracks violence, seduction, false worship, and unlawful knowledge as coordinated instruments of corruption.",
        ],
      },
      {
        id: "p1-seg-4",
        heading: "Study roadmap",
        speaker: "AI Lecturer",
        body: [
          "The twelve parts move from the original declaration of enmity to the escalation of corruption in the generations before the flood and beyond.",
          "Each part is paired with a quiz, and quiz passage governs progression to the next lesson.",
        ],
      },
    ],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 2,
    slug: "part-2",
    title: "Part 2 — Cain, Abel, and the First Bloodshed",
    durationLabel: "21 min",
    summary:
      "Examines the murder of Abel and the early manifestation of hostility toward the righteous line.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 3,
    slug: "part-3",
    title: "Part 3 — Seth and the Preserved Line",
    durationLabel: "17 min",
    summary:
      "Explores how Seth functions in the preservation of a distinct line after Abel’s death.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 4,
    slug: "part-4",
    title: "Part 4 — Corruption in the Generations",
    durationLabel: "20 min",
    summary:
      "Introduces the spread of corruption through the generations and the increasing pressure against righteousness.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 5,
    slug: "part-5",
    title: "Part 5 — Forbidden Knowledge and Seduction",
    durationLabel: "22 min",
    summary:
      "Traces how unlawful instruction and seduction are used to destabilize obedience.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 6,
    slug: "part-6",
    title: "Part 6 — Violence Filled the Earth",
    durationLabel: "19 min",
    summary:
      "Shows how corruption matures into a culture of violence and defilement.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 7,
    slug: "part-7",
    title: "Part 7 — The Watchers Narrative",
    durationLabel: "24 min",
    summary:
      "Introduces ancient witness material relevant to pre-flood corruption themes.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 8,
    slug: "part-8",
    title: "Part 8 — Weaponry, Music, and Cultural Corruption",
    durationLabel: "18 min",
    summary:
      "Examines how civilization tools can be turned toward rebellion and destruction.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 9,
    slug: "part-9",
    title: "Part 9 — Noah in a Corrupt Generation",
    durationLabel: "19 min",
    summary:
      "Focuses on Noah as a preserved figure in contrast to a corrupted world.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 10,
    slug: "part-10",
    title: "Part 10 — Judgment and Separation",
    durationLabel: "16 min",
    summary:
      "Explores how judgment functions as both punishment and preservation.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 11,
    slug: "part-11",
    title: "Part 11 — The Pattern Continues",
    durationLabel: "20 min",
    summary:
      "Shows how the attack on the seed persists after the flood in renewed forms.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
  {
    seriesSlug: "attack-on-the-seed",
    partNumber: 12,
    slug: "part-12",
    title: "Part 12 — The Preserved Promise",
    durationLabel: "23 min",
    summary:
      "Concludes the series by tying preservation, promise, and endurance together.",
    notesAvailable: true,
    quizAvailable: true,
    unlockRequiresPreviousQuizPass: true,
    segments: [],
  },
];

const attackOnTheSeedQuizzes: Record<number, StudyQuiz> = {
  1: {
    seriesSlug: "attack-on-the-seed",
    partNumber: 1,
    title: "Attack on the Seed — Part 1 Quiz",
    passPercent: 70,
    questions: [
      {
        id: "p1-q1",
        prompt:
          "Which passage establishes the enmity between the serpent and the woman?",
        type: "multiple-choice",
        options: [
          { id: "a", label: "Genesis 1:26" },
          { id: "b", label: "Genesis 3:15" },
          { id: "c", label: "Genesis 6:5" },
          { id: "d", label: "Exodus 20:3" },
        ],
        correctOptionId: "b",
      },
      {
        id: "p1-q2",
        prompt:
          "True or False: The series treats the conflict over the seed as central, not incidental.",
        type: "true-false",
        options: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctOptionId: "true",
      },
      {
        id: "p1-q3",
        prompt: "According to Part 1, the promised conflict unfolds across:",
        type: "multiple-choice",
        options: [
          { id: "a", label: "Only one family meal" },
          { id: "b", label: "A single battle" },
          { id: "c", label: "Generations" },
          { id: "d", label: "One dream only" },
        ],
        correctOptionId: "c",
      },
      {
        id: "p1-q4",
        prompt:
          "True or False: Seed language can include lineage and posterity.",
        type: "true-false",
        options: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctOptionId: "true",
      },
      {
        id: "p1-q5",
        prompt:
          "Which of the following is NOT one of the corruption themes introduced in Part 1?",
        type: "multiple-choice",
        options: [
          { id: "a", label: "Violence" },
          { id: "b", label: "Seduction" },
          { id: "c", label: "False worship" },
          { id: "d", label: "Roman taxation" },
        ],
        correctOptionId: "d",
      },
      {
        id: "p1-q6",
        prompt:
          "True or False: Part 1 says quiz passage should unlock the next study part.",
        type: "true-false",
        options: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctOptionId: "true",
      },
      {
        id: "p1-q7",
        prompt: "The study describes Genesis 3:15 as:",
        type: "multiple-choice",
        options: [
          { id: "a", label: "A dietary law only" },
          { id: "b", label: "An interpretive foundation" },
          { id: "c", label: "A temple blueprint" },
          { id: "d", label: "A census record" },
        ],
        correctOptionId: "b",
      },
      {
        id: "p1-q8",
        prompt:
          "True or False: The series argues that the promise appears threatened when the seed line is compromised.",
        type: "true-false",
        options: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctOptionId: "true",
      },
      {
        id: "p1-q9",
        prompt: "Part 1 primarily serves as:",
        type: "multiple-choice",
        options: [
          { id: "a", label: "A study framework and introduction" },
          { id: "b", label: "A genealogy chart only" },
          { id: "c", label: "A legal disclaimer" },
          { id: "d", label: "A final exam review" },
        ],
        correctOptionId: "a",
      },
      {
        id: "p1-q10",
        prompt:
          "True or False: This series is presented as visual and progressive in structure.",
        type: "true-false",
        options: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctOptionId: "true",
      },
    ],
  },
};

const attackOnTheSeedNotes: Record<number, StudyNotesMeta> = {
  1: {
    seriesSlug: "attack-on-the-seed",
    partNumber: 1,
    title: "Attack on the Seed — Part 1 Notes",
    description:
      "A downloadable study companion for Part 1. Access is enabled after passing the quiz with 70% or better.",
    downloadEnabledOnPass: true,
    fileName: "attack-on-the-seed-part-1-notes.pdf",
  },
};

function wait<T>(value: T, delay = 120): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(value), delay);
  });
}

export async function getSeriesSummaries(): Promise<StudySeriesSummary[]> {
  return wait([attackOnTheSeedSummary]);
}

export async function getSeriesBySlug(
  slug: string,
): Promise<StudySeriesSummary | null> {
  if (slug === "attack-on-the-seed") {
    return wait(attackOnTheSeedSummary);
  }

  return wait(null);
}

export async function getSeriesBundle(
  slug: string,
): Promise<StudySeriesBundle | null> {
  if (slug !== "attack-on-the-seed") {
    return wait(null);
  }

  return wait({
    summary: attackOnTheSeedSummary,
    parts: attackOnTheSeedParts,
  });
}

export async function getSeriesParts(slug: string): Promise<StudyPart[]> {
  if (slug === "attack-on-the-seed") {
    return wait(attackOnTheSeedParts);
  }

  return wait([]);
}

export async function getPart(
  slug: string,
  partNumber: number,
): Promise<StudyPart | null> {
  if (slug !== "attack-on-the-seed") {
    return wait(null);
  }

  const part =
    attackOnTheSeedParts.find((item) => item.partNumber === partNumber) ?? null;
  return wait(part);
}

export async function getPartNotesMeta(
  slug: string,
  partNumber: number,
): Promise<StudyNotesMeta | null> {
  if (slug !== "attack-on-the-seed") {
    return wait(null);
  }

  return wait(attackOnTheSeedNotes[partNumber] ?? null);
}

export async function getPartQuiz(
  slug: string,
  partNumber: number,
): Promise<StudyQuiz | null> {
  if (slug !== "attack-on-the-seed") {
    return wait(null);
  }

  return wait(attackOnTheSeedQuizzes[partNumber] ?? null);
}

/**
 * Temporary mock progression rules:
 * - Part 1 is always unlocked
 * - Remaining parts require the previous quiz to be passed
 * - Progress persistence can later move to backend or localStorage-backed hook
 */
export async function getPartProgress(
  slug: string,
  partNumber: number,
): Promise<StudyPartProgress> {
  const defaultProgress: StudyPartProgress = {
    seriesSlug: slug,
    partNumber,
    unlocked: partNumber === 1,
    completed: false,
    quizPassed: false,
    notesDownloadEnabled: false,
  };

  if (slug !== "attack-on-the-seed") {
    return wait(defaultProgress);
  }

  return wait(defaultProgress);
}
