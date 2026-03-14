import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { getPartQuiz } from "@/services/scripturalDiscussionApi";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import type { StudyQuiz } from "@/types/scriptural-discussions";

type AnswersState = Record<string, string>;

const PASSING_PERCENT = 70;

const AttackOnTheSeedPart1QuizPage = () => {
  const [quiz, setQuiz] = useState<StudyQuiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [submitted, setSubmitted] = useState(false);

  const { completeQuiz, getPartProgress } = useStudyProgress({
    seriesSlug: "attack-on-the-seed",
    totalParts: 12,
  });

  const savedProgress = getPartProgress(1);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await getPartQuiz("attack-on-the-seed", 1);
        if (!active) return;
        setQuiz(result);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      active = false;
    };
  }, []);

  const totalQuestions = quiz?.questions.length ?? 0;

  const correctCount = useMemo(() => {
    if (!quiz) return 0;

    return quiz.questions.reduce((count, question) => {
      return answers[question.id] === question.correctOptionId
        ? count + 1
        : count;
    }, 0);
  }, [answers, quiz]);

  const scorePercent = useMemo(() => {
    if (!totalQuestions) return 0;
    return Math.round((correctCount / totalQuestions) * 100);
  }, [correctCount, totalQuestions]);

  const passedCurrentAttempt = submitted && scorePercent >= PASSING_PERCENT;
  const alreadyPassed = savedProgress.quizPassed;
  const effectivePassed = alreadyPassed || passedCurrentAttempt;

  const allAnswered = useMemo(() => {
    if (!quiz) return false;
    return quiz.questions.every((question) => Boolean(answers[question.id]));
  }, [answers, quiz]);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!quiz || !allAnswered) return;

    setSubmitted(true);

    completeQuiz({
      partNumber: 1,
      passed: scorePercent >= PASSING_PERCENT,
      scorePercent,
    });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  if (loading) {
    return (
      <section className="attack-seed-quiz">
        <div className="scriptural-panel">
          <p>Loading quiz...</p>
        </div>
      </section>
    );
  }

  if (!quiz) {
    return (
      <section className="attack-seed-quiz">
        <div className="scriptural-panel">
          <h2>Quiz unavailable</h2>
          <p>The Part 1 quiz could not be loaded.</p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link
              className="btn btn-outline-secondary"
              to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1"
            >
              Back to Part 1
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="attack-seed-quiz">
      <header className="scriptural-panel mb-4">
        <p className="eyebrow">Part 1 Quiz</p>
        <h2>{quiz.title}</h2>
        <p>
          Complete all questions and score at least{" "}
          <strong>{quiz.passPercent}%</strong> to unlock the next lesson and
          enable study notes download.
        </p>

        {alreadyPassed ? (
          <div className="mt-3">
            <strong>Status:</strong> Passed previously
          </div>
        ) : null}
      </header>

      <form onSubmit={handleSubmit} className="d-grid gap-4">
        {quiz.questions.map((question, index) => (
          <article key={question.id} className="scriptural-panel">
            <div className="mb-3">
              <p className="eyebrow mb-1">Question {index + 1}</p>
              <h3 className="h5 mb-0">{question.prompt}</h3>
            </div>

            <div className="d-grid gap-2">
              {question.options.map((option) => {
                const checked = answers[question.id] === option.id;

                return (
                  <label
                    key={option.id}
                    className={`attack-seed-quiz__option${checked ? " is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={checked}
                      onChange={() => handleSelect(question.id, option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
          </article>
        ))}

        <section className="scriptural-panel">
          <p className="eyebrow">Submission</p>
          <h3 className="h5">Ready to grade?</h3>
          <p>
            You must answer all {totalQuestions} questions before submitting.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!allAnswered}
            >
              Submit Quiz
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              Reset Answers
            </button>

            <Link
              className="btn btn-outline-secondary"
              to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1"
            >
              Back to Lesson
            </Link>
          </div>
        </section>
      </form>

      {submitted ? (
        <section className="scriptural-panel mt-4">
          <p className="eyebrow">Results</p>
          <h3 className="h4">
            Score: {correctCount}/{totalQuestions} ({scorePercent}%)
          </h3>

          {effectivePassed ? (
            <>
              <p className="mb-3">
                You passed Part 1. The notes download is now enabled, and Part 2
                is unlocked in the study progression.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link
                  className="btn btn-primary"
                  to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1/notes"
                >
                  View Notes Access
                </Link>

                <Link
                  className="btn btn-outline-secondary"
                  to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-2"
                >
                  Continue to Part 2
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="mb-3">
                You did not reach the required {PASSING_PERCENT}%. Review the
                lesson and retake the quiz.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link
                  className="btn btn-outline-secondary"
                  to="/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed/part-1"
                >
                  Review Part 1
                </Link>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReset}
                >
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </section>
      ) : null}
    </section>
  );
};

export default AttackOnTheSeedPart1QuizPage;
