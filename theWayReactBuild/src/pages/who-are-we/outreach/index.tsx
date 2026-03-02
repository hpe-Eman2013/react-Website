import React from "react";
import "@/assets/css/who-are-we/Outreach.css";

import heroImg from "@/assets/images/who-are-we/outreach/preview.jpg";

export default function Outreach() {
  return (
    <main className="container py-4 outreach-page">
      {/* HERO */}
      <section className="outreach-hero" aria-label="Outreach">
        <div className="outreach-hero__media">
          <img
            src={heroImg}
            alt=""
            className="outreach-hero__img"
            aria-hidden="true"
            loading="eager"
          />
          <div className="outreach-hero__overlay" />
        </div>

        <div className="outreach-hero__content">
          <h1 className="outreach-hero__title">Outreach</h1>
          <p className="outreach-hero__subtitle">
            The Way of Messiah — 508(c)(1)(A) Religious Ministry
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        className="card shadow-sm mb-4"
        aria-label="Outreach introduction"
      >
        <div className="card-body">
          <p className="mb-0">
            Outreach for a ministry grounded in The Way, Equity, and Agriculture
            should be as practical as it is spiritual. Since the mission is to
            move people from “the system” back to the “Household of Yahuah,” our
            outreach demonstrates the tangible benefits of that transition.
          </p>
        </div>
      </section>

      {/* PILLAR 1 */}
      <section
        className="card shadow-sm mb-4 outreach-section"
        aria-labelledby="pillar1"
      >
        <div className="card-body">
          <h2 id="pillar1" className="h5 mb-2">
            Pillar 1: The Word{" "}
            <span className="text-muted">
              (Restoring the Name &amp; The Way)
            </span>
          </h2>

          <div className="row g-3 mt-1">
            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">
                  Virtual: The “Ancient Paths” Digital Library
                </h3>
                <ul className="mb-2">
                  <li>
                    <strong>The Method:</strong> Members create or share short
                    (60-second) videos or “carousels” explaining one Paleo
                    Hebrew word per week (e.g., Elohim, Barakah, Shalom).
                  </li>
                  <li>
                    <strong>The Goal:</strong> To de-mystify the “Greek”
                    translations and introduce the name of Yahuah and Yahusha in
                    a non-confrontational, educational way.
                  </li>
                  <li>
                    <strong>Scripture:</strong> Yirmeyahu (Jeremiah) 6:16 — “Ask
                    for the ancient paths, where the good way is, and walk
                    therein.”
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">
                  In-Person: “Scripture &amp; Tea” Home Fellowships
                </h3>
                <ul className="mb-0">
                  <li>
                    <strong>The Method:</strong> Members host small, informal
                    gatherings (not a “church service”) centered on a specific
                    Torah portion or a “Hard Saying” of Yahusha.
                  </li>
                  <li>
                    <strong>The Goal:</strong> Build community through
                    hospitality—especially for neighbors who are unchurched or
                    weary of traditional religion.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2 */}
      <section
        className="card shadow-sm mb-4 outreach-section"
        aria-labelledby="pillar2"
      >
        <div className="card-body">
          <h2 id="pillar2" className="h5 mb-2">
            Pillar 2: The Law of Equity &amp; Trust{" "}
            <span className="text-muted">(Kingdom Governance)</span>
          </h2>

          <div className="row g-3 mt-1">
            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">
                  Virtual: “Debt to Stewardship” Webinars
                </h3>
                <ul className="mb-2">
                  <li>
                    <strong>The Method:</strong> Host monthly virtual workshops
                    teaching the basics of Trust Law. Topics include “The Bible
                    as a Trust Document” or “How to Move from Debtor to
                    Trustee.”
                  </li>
                  <li>
                    <strong>The Goal:</strong> Provide a “remedy” for people
                    overwhelmed by worldly debt and legal confusion.
                  </li>
                  <li>
                    <strong>Scripture:</strong> Mishle (Proverbs) 22:7 — “The
                    borrower is servant to the lender.” We teach how to return
                    to being servants only to Yahuah.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">In-Person: Private “Equity Clinics”</h3>
                <ul className="mb-0">
                  <li>
                    <strong>The Method:</strong> Members well-versed in the
                    Trust Law curriculum offer free 1-on-1 sessions to help
                    people organize their family affairs (estate planning from a
                    Biblical perspective).
                  </li>
                  <li>
                    <strong>The Goal:</strong> Practical service—showing that
                    The Way has answers for the world’s legal complexities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3 */}
      <section
        className="card shadow-sm mb-4 outreach-section"
        aria-labelledby="pillar3"
      >
        <div className="card-body">
          <h2 id="pillar3" className="h5 mb-2">
            Pillar 3: Agriculture{" "}
            <span className="text-muted">(The Living Estate)</span>
          </h2>

          <div className="row g-3 mt-1">
            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">Virtual: The “Seed Swap” Network</h3>
                <ul className="mb-0">
                  <li>
                    <strong>The Method:</strong> Use a social media group or app
                    to facilitate a national seed exchange among believers.
                    Members mail heirloom seeds to one another with a printed
                    “Covenant of Stewardship” card.
                  </li>
                  <li>
                    <strong>The Goal:</strong> Establish a parallel food system
                    and spread the ministry’s message through the physical seed.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="border rounded p-3 h-100 outreach-box">
                <h3 className="h6 mb-2">
                  In-Person: “The Corner of the Field” Giveaways
                </h3>
                <ul className="mb-0">
                  <li>
                    <strong>The Method:</strong> Members who garden or farm set
                    up a stand in a local park or driveway with a sign: “Free
                    Harvest — In Honor of Yahuah.”
                  </li>
                  <li>
                    <strong>The Goal:</strong> Direct fulfillment of Wayyiqra
                    (Leviticus) 19:9. Giving away the “corners” sparks
                    conversations about why we give and who Yahuah is.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES TABLE */}
      <section
        className="card shadow-sm mb-4 outreach-section"
        aria-labelledby="roles"
      >
        <div className="card-body">
          <h2 id="roles" className="h5 mb-3">
            Summary of Outreach Roles
          </h2>

          <div className="table-responsive">
            <table className="table table-sm align-middle outreach-table">
              <thead>
                <tr>
                  <th scope="col">Member Type</th>
                  <th scope="col">Virtual Outreach</th>
                  <th scope="col">In-Person Outreach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>The Teacher</strong>
                  </td>
                  <td>Record “Hebrew Word of the Day”</td>
                  <td>Lead a Home Fellowship study</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Steward</strong>
                  </td>
                  <td>Manage the Digital Seed Exchange</td>
                  <td>Host a Garden/Homestead tour</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Counselor</strong>
                  </td>
                  <td>Answer legal/Trust law questions</td>
                  <td>Offer “Equity” consultations</td>
                </tr>
                <tr>
                  <td>
                    <strong>The Helper</strong>
                  </td>
                  <td>Share ministry graphics/posts</td>
                  <td>Distribute “Free Corners” produce</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOW PRESSURE FIRST STEP */}
      <section
        className="card shadow-sm mb-4 outreach-section"
        aria-labelledby="first-step"
      >
        <div className="card-body">
          <h2 id="first-step" className="h5 mb-3">
            A Low-Pressure First Step for All Members
          </h2>

          <p className="mb-3">
            Create a <strong>Ministry Card</strong> that members can carry. On
            one side, it has the names <strong>Yahuah</strong> and{" "}
            <strong>Yahusha</strong> in Paleo Hebrew. On the other, it says:
          </p>

          <blockquote className="blockquote outreach-quote mb-0">
            <p className="mb-0">
              “Seeking the Ancient Paths: Education in Word, Law, and Land.”
            </p>
            <footer className="blockquote-footer mt-2 mb-0">
              Include a QR code linking to your website or virtual modules
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PRINT MATERIALS + BROCHURE */}
      <details className="outreach-details card shadow-sm">
        <summary className="card-body outreach-summary">
          Print Materials &amp; Implementation Guides (Cards, Flyers, Brochure)
        </summary>
        <div className="outreach-actions mb-3">
          <a
            className="btn-tertiary"
            href="/print/ministry-card"
            target="_blank"
            rel="noreferrer"
          >
            View Ministry Card
          </a>
          <a
            className="btn-tertiary"
            href="/print/seed-flyer"
            target="_blank"
            rel="noreferrer"
          >
            View Seed &amp; Harvest Flyer
          </a>
          <a
            className="btn-tertiary"
            href="/print/brochure"
            target="_blank"
            rel="noreferrer"
          >
            View Tri-Fold Brochure
          </a>
        </div>
        <div className="card-body pt-0">
          {/* Your existing content unchanged below */}
          <h2 className="h5 mb-3">1) The Ministry Card (Business Card Size)</h2>
          <p className="mb-2">
            Perfect for members to carry and hand out during daily interactions
            or when giving away produce.
          </p>

          {/* ... keep the rest of your existing details content exactly as-is ... */}
        </div>
      </details>
    </main>
  );
}
