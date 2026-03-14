import { useCallback, useEffect, useMemo, useState } from "react";

import type { StudyPartProgress } from "@/types/scriptural-discussions";

type StoredProgressMap = Record<number, StudyPartProgress>;

interface UseStudyProgressArgs {
  seriesSlug: string;
  totalParts: number;
}

interface CompleteQuizArgs {
  partNumber: number;
  passed: boolean;
  scorePercent: number;
}

const buildStorageKey = (seriesSlug: string) =>
  `scriptural-discussions:progress:${seriesSlug}`;

const buildDefaultProgressMap = (
  seriesSlug: string,
  totalParts: number,
): StoredProgressMap => {
  const result: StoredProgressMap = {};

  for (let partNumber = 1; partNumber <= totalParts; partNumber += 1) {
    result[partNumber] = {
      seriesSlug,
      partNumber,
      unlocked: partNumber === 1,
      completed: false,
      quizPassed: false,
      scorePercent: undefined,
      notesDownloadEnabled: false,
    };
  }

  return result;
};

export function useStudyProgress({
  seriesSlug,
  totalParts,
}: UseStudyProgressArgs) {
  const storageKey = useMemo(() => buildStorageKey(seriesSlug), [seriesSlug]);

  const [progressMap, setProgressMap] = useState<StoredProgressMap>(() =>
    buildDefaultProgressMap(seriesSlug, totalParts),
  );

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);

      if (!raw) {
        const defaults = buildDefaultProgressMap(seriesSlug, totalParts);
        setProgressMap(defaults);
        return;
      }

      const parsed = JSON.parse(raw) as StoredProgressMap;
      const defaults = buildDefaultProgressMap(seriesSlug, totalParts);

      setProgressMap({
        ...defaults,
        ...parsed,
      });
    } catch {
      setProgressMap(buildDefaultProgressMap(seriesSlug, totalParts));
    }
  }, [seriesSlug, storageKey, totalParts]);

  const persist = useCallback(
    (next: StoredProgressMap) => {
      setProgressMap(next);
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    },
    [storageKey],
  );

  const getPartProgress = useCallback(
    (partNumber: number): StudyPartProgress => {
      return (
        progressMap[partNumber] ?? {
          seriesSlug,
          partNumber,
          unlocked: partNumber === 1,
          completed: false,
          quizPassed: false,
          scorePercent: undefined,
          notesDownloadEnabled: false,
        }
      );
    },
    [progressMap, seriesSlug],
  );

  const completeQuiz = useCallback(
    ({ partNumber, passed, scorePercent }: CompleteQuizArgs) => {
      const next = { ...progressMap };

      const current = next[partNumber] ?? {
        seriesSlug,
        partNumber,
        unlocked: partNumber === 1,
        completed: false,
        quizPassed: false,
        scorePercent: undefined,
        notesDownloadEnabled: false,
      };

      next[partNumber] = {
        ...current,
        completed: true,
        quizPassed: passed,
        scorePercent,
        notesDownloadEnabled: passed,
      };

      if (passed && partNumber < totalParts) {
        const nextPart = next[partNumber + 1] ?? {
          seriesSlug,
          partNumber: partNumber + 1,
          unlocked: false,
          completed: false,
          quizPassed: false,
          scorePercent: undefined,
          notesDownloadEnabled: false,
        };

        next[partNumber + 1] = {
          ...nextPart,
          unlocked: true,
        };
      }

      persist(next);
    },
    [persist, progressMap, seriesSlug, totalParts],
  );

  const resetSeriesProgress = useCallback(() => {
    const defaults = buildDefaultProgressMap(seriesSlug, totalParts);
    persist(defaults);
  }, [persist, seriesSlug, totalParts]);

  return {
    progressMap,
    getPartProgress,
    completeQuiz,
    resetSeriesProgress,
  };
}
