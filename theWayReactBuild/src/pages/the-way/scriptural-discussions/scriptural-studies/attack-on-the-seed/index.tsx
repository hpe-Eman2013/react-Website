import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import ProgressRail from "@/components/the-way/scriptural-discussions/ProgressRail";
import {
  getPartProgress,
  getSeriesBundle,
} from "@/services/scripturalDiscussionApi";
import { buildProgressRailItems } from "@/utils/scriptural-discussions/buildProgressRailItems";
import type {
  StudyPartProgress,
  StudyPart,
  StudySeriesSummary,
} from "@/types/scriptural-discussions";

type SeriesBundleState = {
  summary: StudySeriesSummary;
  parts: StudyPart[];
} | null;

const AttackOnTheSeedLayout = () => {
  const [bundle, setBundle] = useState<SeriesBundleState>(null);
  const [progressByPart, setProgressByPart] = useState<
    Record<number, StudyPartProgress>
  >({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await getSeriesBundle("attack-on-the-seed");

        if (!active || !result) {
          if (active) setBundle(result);
          return;
        }

        const progressEntries = await Promise.all(
          result.parts.map(async (part) => {
            const progress = await getPartProgress(
              "attack-on-the-seed",
              part.partNumber,
            );
            return [part.partNumber, progress] as const;
          }),
        );

        if (!active) return;

        setBundle(result);
        setProgressByPart(Object.fromEntries(progressEntries));
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
      progressByPart,
    });
  }, [activePartNumber, bundle, progressByPart]);

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
            <ProgressRail items={railItems} title="All 12 Parts" />
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
