import React from "react";
import "@/assets/css/who-are-we/Education.css";

import heroImg from "@/assets/images/who-are-we/education/preview.jpg";

export default function Education() {
  return (
    <main className="container py-4 education-page">
      {/* HERO */}
      <section className="education-hero" aria-label="Education">
        <div className="education-hero__media">
          <img
            src={heroImg}
            alt=""
            className="education-hero__img"
            aria-hidden="true"
            loading="eager"
          />
          <div className="education-hero__overlay" />
        </div>

        <div className="education-hero__content">
          <h1 className="education-hero__title">Education</h1>
          <p className="education-hero__subtitle">
            The Way of Messiah — 508(c)(1)(A) Religious Ministry
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        className="card shadow-sm mb-4"
        aria-label="Curriculum introduction"
      >
        <div className="card-body">
          <p className="mb-0">
            This curriculum is designed to move a believer from the status of a{" "}
            <strong>“legal subject”</strong> to a{" "}
            <strong>“Kingdom Trustee.”</strong> It bridges the gap between the
            spiritual requirements of Yahuah and the functional mechanics of
            managing His estate on earth.
          </p>
        </div>
      </section>

      {/* PART 1 */}
      <section
        className="card shadow-sm mb-4 education-section"
        aria-labelledby="edu-part1"
      >
        <div className="card-body">
          <div className="education-head">
            <h2 id="edu-part1" className="h5 mb-1">
              Part 1: The Law of Equity &amp; Trust
            </h2>
            <div className="text-muted">Jurisdictional Wisdom</div>
          </div>

          <blockquote className="blockquote education-quote mb-4">
            <p className="mb-2">
              “My people are destroyed for lack of knowledge.”
            </p>
            <footer className="blockquote-footer mb-0">Huša (Hosea) 4:6</footer>
          </blockquote>

          <div className="education-module mb-3">
            <h3 className="h6 mb-2">
              Module 1: The Three-Party Contract (The Biblical Trust)
            </h3>
            <ul className="mb-0">
              <li>
                <strong>The Trinity of the Trust:</strong> Understanding the
                roles of the Settlor (Yahuah), the Trustee (The Believer), and
                the Beneficiary (The Kingdom/Family/Poor).
              </li>
              <li className="mt-2">
                <strong>The Origin of Title:</strong> Distinguishing between
                “Legal Title” (possession) and “Equitable Title” (the right to
                use and enjoy).
              </li>
              <li className="mt-2">
                <strong>The Garden of Aydan (Eden):</strong> Analyzing the first
                Trust agreement and where the “breach of trust” occurred.
              </li>
            </ul>
          </div>

          <div className="education-module mb-3">
            <h3 className="h6 mb-2">
              Module 2: Moving from Statutes to Equity
            </h3>
            <ul className="mb-0">
              <li>
                <strong>The Two Courts:</strong> Understanding the difference
                between a Court of Law (Rules/Statutes) and a Court of Equity
                (Conscience/Fairness).
              </li>
              <li className="mt-2">
                <strong>The Maxims of Equity:</strong> Learning the 12 primary
                rules, such as “Equity regards that as done which ought to be
                done” and how they align with the teachings of Yahusha.
              </li>
              <li className="mt-2">
                <strong>The Power of the Private:</strong> How to move your
                ministry affairs from the “Public” (State-controlled) to the
                “Private” (Ecclesiastical/Kingdom-controlled).
              </li>
            </ul>
          </div>

          <div className="education-module">
            <h3 className="h6 mb-2">
              Module 3: Fiduciary Duties &amp; The Clean Hands Doctrine
            </h3>
            <ul className="mb-0">
              <li>
                <strong>The Duty of Loyalty:</strong> Why a Trustee cannot serve
                two masters (Yahuah and Mammon).
              </li>
              <li className="mt-2">
                <strong>The Duty of Care:</strong> The legal and spiritual
                consequences of negligence in stewardship.
              </li>
              <li className="mt-2">
                <strong>Correcting the Record:</strong> How to document your
                status as a “Minister of the Trust” rather than a
                “Taxpayer/Employee” of a worldly system.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PART 2 */}
      <section
        className="card shadow-sm mb-4 education-section"
        aria-labelledby="edu-part2"
      >
        <div className="card-body">
          <div className="education-head">
            <h2 id="edu-part2" className="h5 mb-1">
              Part 2: Biblical Agriculture
            </h2>
            <div className="text-muted">The Living Estate</div>
          </div>

          <blockquote className="blockquote education-quote mb-4">
            <p className="mb-2">
              “And Yahuah Elohim took the man, and put him into the garden of
              Aydan to dress it and to keep it.”
            </p>
            <footer className="blockquote-footer mb-0">
              Berashith (Genesis) 2:15
            </footer>
          </blockquote>

          <div className="education-module mb-3">
            <h3 className="h6 mb-2">Module 4: The Torah of the Soil</h3>
            <ul className="mb-0">
              <li>
                <strong>The Land Sabbath (Shemitah):</strong> The spiritual and
                scientific necessity of letting the land rest every seven years
                (Wayyiqra / Leviticus 25).
              </li>
              <li className="mt-2">
                <strong>Prohibitions on Mixtures:</strong> Understanding Kilayim
                (diverse seeds/cross-breeding) and maintaining the purity of
                Yahuah’s original design.
              </li>
              <li className="mt-2">
                <strong>Soil Life:</strong> Viewing the soil as a living
                organism (a “corpus”) that must be fed and protected, not just
                mined for nutrients.
              </li>
            </ul>
          </div>

          <div className="education-module mb-3">
            <h3 className="h6 mb-2">Module 5: Regenerative Stewardship</h3>
            <ul className="mb-0">
              <li>
                <strong>Composting &amp; Life Cycles:</strong> Turning “death”
                (waste) into “life” (fertility) as a physical metaphor for the
                Resurrection.
              </li>
              <li className="mt-2">
                <strong>Water Management:</strong> Biblical hydrology—capturing
                the “Blessings from Above” (rainwater) and managing the “Deep
                below” (springs/wells).
              </li>
              <li className="mt-2">
                <strong>Seed Saving:</strong> Establishing a “Seed Trust” to
                ensure the community is never dependent on corporate,
                genetically modified supply chains.
              </li>
            </ul>
          </div>

          <div className="education-module">
            <h3 className="h6 mb-2">Module 6: The Harvest of Equity</h3>
            <ul className="mb-0">
              <li>
                <strong>The Corners of the Field:</strong> Integrating the “Law
                of the Poor” into your business model.
              </li>
              <li className="mt-2">
                <strong>First Fruits:</strong> The practical application of
                giving the first and best to Yahuah to sanctify the entire
                harvest.
              </li>
              <li className="mt-2">
                <strong>The Marketplace of The Way:</strong> Building a
                community barter and trade system that operates outside the
                debt-based fiat currency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTEGRATION PROJECT */}
      <section
        className="card shadow-sm mb-4 education-section"
        aria-labelledby="edu-project"
      >
        <div className="card-body">
          <h2 id="edu-project" className="h5 mb-3">
            Integration Project: “The Homestead Trust”
          </h2>
          <p className="mb-3">
            As a final project, students will create a Trust Indenture for a
            hypothetical (or real) piece of land. They must outline:
          </p>
          <ul className="mb-0">
            <li>Who the Trustees are.</li>
            <li>How the land will be farmed according to Torah.</li>
            <li>
              How the Equity (the profit/harvest) will be distributed to the
              beneficiaries.
            </li>
          </ul>
        </div>
      </section>

      {/* EXPANDED CURRICULUM (DETAILS) */}
      <details className="education-details card shadow-sm">
        <summary className="card-body education-summary">
          Expanded Curriculum Notes (Scriptural, Examples, Paleo Hebrew Focus)
        </summary>

        <div className="card-body pt-0">
          {/* Your existing expanded notes remain unchanged below */}
          <p className="text-muted mb-4">
            This expanded curriculum integrates the legal mechanics of Equity
            with the spiritual mandates of The Way, using the ancient Hebrew
            context to ground each lesson.
          </p>

          {/* keep everything below exactly as you already have it */}
          {/* (paste the remaining expanded curriculum content here unchanged) */}
        </div>
      </details>
    </main>
  );
}
