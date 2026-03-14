import type {
  StudyPart,
  StudyPartProgress,
} from "@/types/scriptural-discussions";
import type { ProgressRailItem } from "@/components/the-way/scriptural-discussions/ProgressRail";

interface BuildProgressRailItemsArgs {
  seriesSlug: string;
  parts: StudyPart[];
  currentPartNumber: number;
  progressByPart: Record<number, StudyPartProgress | undefined>;
}

export function buildProgressRailItems({
  seriesSlug,
  parts,
  currentPartNumber,
  progressByPart,
}: BuildProgressRailItemsArgs): ProgressRailItem[] {
  return parts.map((part) => {
    const progress = progressByPart[part.partNumber];

    return {
      partNumber: part.partNumber,
      title: part.title,
      durationLabel: part.durationLabel,
      href: `/the-way/scriptural-discussions/scriptural-studies/${seriesSlug}/part-${part.partNumber}`,
      unlocked: progress?.unlocked ?? part.partNumber === 1,
      completed: progress?.quizPassed ?? false,
      current: currentPartNumber === part.partNumber,
    };
  });
}
