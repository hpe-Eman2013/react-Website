import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import ProgressRail from "@/components/the-way/scriptural-discussions/ProgressRail";
import { getSeriesBundle } from "@/services/scripturalDiscussionApi";
import { useStudyProgress } from "@/hooks/useStudyProgress";
import { buildProgressRailItems } from "@/utils/scriptural-discussions/buildProgressRailItems";
import type {
  StudyPart,
  StudySeriesSummary,
} from "@/types/scriptural-discussions";

type SeriesBundleState = {
  summary: StudySeriesSummary;
  parts: StudyPart[];
} | null;

const AttackOnTheSeedLayout = () => {
  const [bundle, setBundle] = useState<SeriesBundleState>(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const { progressMap } = useStudyProgress({
    seriesSlug: "attack-on-the-seed",
    totalParts: 12,
  });

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await getSeriesBundle("attack-on-the-seed");

        if (!active) return;
        setBundle(result);
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

  useEffect(() => {
    if (loading || !bundle) return;

    const basePath =
      "/the-way/scriptural-discussions/scriptural-studies/attack-on-the-seed";

    if (location.pathname === basePath) {
      navigate(`${basePath}/part-1`, { replace: true });
    }
  }, [bundle, loading, location.pathname, navigate]);

  const activePartNumber = useMemo(() => {
    const match = location.pathname.match(/part-(\d+)/);
    return match ? Number(match[1]) : 1;
  }, [location.pathname]);

  const railItems = useMemo(() => {
    if (!bundle) return [];

    return buildProgressRailItems({
      seriesSlug: "attack-on-the-seed",
      parts: bundle.parts,
      currentPartNumber: activePartNumber,
      progressByPart: progressMap,
    });
  }, [activePartNumber, bundle, progressMap]);

  if (loading) {
    return (
      <section className="scriptural-discussions-page attack-seed-layout">
        <div className="container py-5">
          <p>Loading study series...</p>
        </div>
      </section>
    );
  }

  if (!bundle) {
    return (
      <section className="scriptural-discussions-page attack-seed-layout">
        <div className="container py-5">
          <h1>Series not found</h1>
          <p>The requested study series could not be located.</p>
          <Link to="/the-way/scriptural-discussions/scriptural-studies">
            Back to Scriptural Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="scriptural-discussions-page attack-seed-layout">
      <header className="attack-seed-layout__hero">
        <div className="container">
          <div className="attack-seed-layout__hero-inner">
            <p className="eyebrow">Scriptural Studies</p>
            <h1>{bundle.summary.title}</h1>
            <p className="lead">{bundle.summary.subtitle}</p>
            <p className="attack-seed-layout__description">
              {bundle.summary.description}
            </p>

            <div
              className="attack-seed-layout__tags"
              aria-label="Series topics"
            >
              {bundle.summary.tags.map((tag) => (
                <span key={tag} className="attack-seed-layout__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/the-way/scriptural-discussions">
                Scriptural Discussions
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/the-way/scriptural-discussions/scriptural-studies">
                Scriptural Studies
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Attack on the Seed
            </li>
          </ol>
        </nav>

        <div className="attack-seed-layout__main">
          <aside
            className="attack-seed-layout__rail"
            aria-label="Series progression"
          >
            <ProgressRail
              items={railItems}
              title="All 12 Parts"
              description="Pass each quiz with at least 70% to unlock the next lesson and enable notes access."
            />

            <div className="mt-3">
              <Link
                className="btn btn-outline-secondary w-100"
                to="/the-way/scriptural-discussions/overview"
              >
                Back to Overview
              </Link>
            </div>
          </aside>

          <main className="attack-seed-layout__content">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
};

export default AttackOnTheSeedLayout;
