import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TestimonyCard from "../../../components/TestimonyCard";
import {
  fetchApprovedTestimonies,
  fetchVoteMap,
} from "../../../services/testimonyService";

type ViewStatus = "idle" | "loading" | "success" | "error";
type Vote = "like" | "dislike" | null;

type Testimony = {
  _id?: string;
  id?: string;
  name?: string;
  message?: string;
  likes?: number;
  dislikes?: number;
  approved?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

type VoteMap = Record<string, Exclude<Vote, null>>;

function getId(t: Testimony): string {
  return (t._id || t.id || "").toString();
}

export default function Testimonies() {
  const [items, setItems] = useState<Testimony[]>([]);
  const [status, setStatus] = useState<ViewStatus>("idle");
  const [error, setError] = useState<string>("");
  const [votesById, setVotesById] = useState<VoteMap>({});

  const [searchParams, setSearchParams] = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";

  // For accessibility: move focus to the banner when arriving here after submit
  const submittedBannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (submitted) {
      submittedBannerRef.current?.focus();
    }
  }, [submitted]);

  useEffect(() => {
    const load = async () => {
      try {
        setStatus("loading");
        setError("");

        const [testimoniesData, votesData] = await Promise.all([
          fetchApprovedTestimonies(),
          fetchVoteMap().catch(() => ({ ok: true, votes: {} })),
        ]);

        // Be tolerant of different response shapes:
        // - testimoniesData may be array OR { ok, data: [] } OR { data: [] }
        const testimoniesArray: Testimony[] = Array.isArray(testimoniesData)
          ? testimoniesData
          : Array.isArray((testimoniesData as any)?.data)
            ? (testimoniesData as any).data
            : [];

        // votesData may be { votes: {...} } OR { data: { votes: {...} } }
        const v =
          (votesData as any)?.votes ??
          (votesData as any)?.data?.votes ??
          (votesData as any)?.data ??
          {};

        setItems(testimoniesArray);
        setVotesById((v || {}) as VoteMap);
        setStatus("success");
      } catch (e: unknown) {
        setStatus("error");
        const msg =
          e instanceof Error ? e.message : "Failed to load testimonies.";
        setError(msg);
      }
    };

    load();
  }, []);

  const apiBase = useMemo(() => import.meta.env.VITE_API_BASE_URL ?? "", []);

  function dismissSubmittedBanner() {
    const next = new URLSearchParams(searchParams);
    next.delete("submitted");
    setSearchParams(next, { replace: true });
  }

  function onVoteUpdated(id: string, vote: Vote) {
    setVotesById((prev) => {
      // if vote cleared, remove key
      if (!vote) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: vote };
    });
  }

  function onCountsUpdated(id: string, likes: number, dislikes: number) {
    setItems((prev) =>
      prev.map((t) => {
        const tid = getId(t);
        return tid === id ? { ...t, likes, dislikes } : t;
      }),
    );
  }

  // Build cards once (avoids duplicated map + keeps TS happy)
  const cards = items.map((t) => {
    const tid = getId(t);
    return (
      <TestimonyCard
        key={tid || Math.random().toString(36)}
        testimony={t}
        userVote={tid ? (votesById[tid] ?? null) : null}
        onVoteUpdated={onVoteUpdated}
        onCountsUpdated={onCountsUpdated}
      />
    );
  });

  return (
    <main className="container py-4" id="main-content">
      <h1 className="mb-3">Testimonies</h1>

      {/* Submitted banner (shows after redirect from /submit) */}
      {submitted && (
        <div
          className="alert alert-success d-flex justify-content-between align-items-start gap-3"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={submittedBannerRef}
        >
          <div>
            <div className="fw-bold">Thank you for sharing.</div>
            <div className="small">
              Your testimony was submitted and will appear here after admin
              approval.
            </div>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={dismissSubmittedBanner}
            aria-label="Dismiss submission confirmation"
          >
            Dismiss
          </button>
        </div>
      )}

      {status === "loading" && (
        <div className="alert alert-info" role="status" aria-live="polite">
          Loading…
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-danger" role="alert">
          <div className="fw-bold">Could not load testimonies</div>
          <div className="small">{error}</div>

          <div className="small mt-2">
            This is expected until the Node/Express API is running at{" "}
            <code>{apiBase || "(VITE_API_BASE_URL not set)"}</code>.
          </div>
        </div>
      )}

      {status === "success" && items.length === 0 && (
        <div className="alert alert-secondary" role="status" aria-live="polite">
          No testimonies yet.
        </div>
      )}

      {/* Cards (Axe-safe aria-busy: literal when loading, omitted otherwise) */}
      {status === "loading" ? (
        <div className="d-grid gap-3" aria-busy="true">
          {cards}
        </div>
      ) : (
        <div className="d-grid gap-3">{cards}</div>
      )}
    </main>
  );
}
