import React from "react";
import "@/assets/css/who-are-we/MissionVision.css";

import heroImg from "@/assets/images/who-are-we/mission-vision/preview.jpg";

export default function MissionVision() {
  return (
    <main className="container py-4 mission-page">
      {/* PAGE HEADER / HERO */}
      <section className="mission-hero" aria-label="Mission and Vision">
        <div className="mission-hero__media">
          <img
            src={heroImg}
            alt=""
            className="mission-hero__img"
            aria-hidden="true"
            loading="eager"
          />
          <div className="mission-hero__overlay" />
        </div>

        <div className="mission-hero__content">
          <h1 className="mission-hero__title">
            Mission &amp; Vision Statement
          </h1>
          <p className="mission-hero__subtitle">
            The Way of Messiah — 508(c)(1)(A) Religious Ministry
          </p>
        </div>
      </section>

      {/* CONTENT CARD */}
      <div className="card shadow-sm">
        <div className="card-body">
          {/* OUR MISSION & VISION */}
          <section className="mission-section" aria-labelledby="mv-heading">
            <h2 id="mv-heading" className="h5 mb-3">
              Our Mission &amp; Vision
            </h2>

            <div className="mission-split">
              <div className="mission-panel">
                <h3 className="h6 text-uppercase text-muted mb-2">
                  The Vision
                </h3>
                <p className="mb-0">
                  To see a remnant restored to the ancient paths of Yahuah
                  Elohim, walking in the fullness of truth as revealed through
                  the Messiah Yahusha. We envision a community of believers who
                  are not only spiritually set apart but are also physically and
                  legally equipped to live as true stewards of the earth,
                  independent of worldly systems and grounded in the Covenant.
                </p>
              </div>

              <div className="mission-panel">
                <h3 className="h6 text-uppercase text-muted mb-2">
                  The Mission
                </h3>
                <p className="mb-3">
                  Our mission is to provide a comprehensive education for the
                  whole man—spirit, mind, and body. We are dedicated to:
                </p>

                <ul className="mb-0">
                  <li>
                    <strong>Restoring the Name:</strong> Proclaiming the
                    set-apart names of our Creator, Yahuah, and His Son,
                    Yahusha, as we strip away the traditions of men to return to
                    the pure language of the Scriptures.
                  </li>
                  <li className="mt-2">
                    <strong>The Way of Truth:</strong> Teaching the faith of The
                    Way (Acts 24:14), acknowledging the Torah as our living
                    instructions for righteous conduct.
                  </li>
                  <li className="mt-2">
                    <strong>Kingdom Governance:</strong> Educating believers in
                    the Law of Equity and Trust Law, empowering them to navigate
                    worldly jurisdictions with wisdom and to manage their
                    affairs according to the higher principles of the Kingdom.
                  </li>
                  <li className="mt-2">
                    <strong>Sustainable Stewardship:</strong> Teaching the
                    foundations of Agriculture to ensure the remnant can
                    cultivate the land, provide for their families, and honor
                    Yahuah’s creation through biblical land sabbaths and natural
                    growth.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CONCISE BLENDED SUMMARY */}
          <section
            className="mission-section"
            aria-label="Public outreach summary"
          >
            <div className="alert alert-light border mb-4" role="note">
              <p className="mb-2">
                The mission of The Way of Messiah is to proclaim the truth of
                Yahuah by reaching the public through:
              </p>
              <ul className="mb-2">
                <li>
                  Online teaching and messages shared via The Way of Messiah
                  Website, and
                </li>
                <li>
                  Community outreach that reflects the love, justice, and mercy
                  of Yahuah.
                </li>
              </ul>
              <p className="mb-0">
                Through these efforts, we seek to call individuals into covenant
                relationship, strengthen the faith of believers, and provide
                spiritual and practical support to our communities.
              </p>
            </div>
          </section>

          <hr className="my-4" />

          {/* CORE PILLARS */}
          <section
            className="mission-section"
            aria-labelledby="pillars-heading"
          >
            <h2 id="pillars-heading" className="h5 mb-3">
              Our Core Pillars
            </h2>

            <div className="table-responsive mb-4">
              <table className="table table-sm align-middle mission-table">
                <thead>
                  <tr>
                    <th scope="col">Pillar</th>
                    <th scope="col">Focus</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Spiritual Restoration</strong>
                    </td>
                    <td>The Word of Yahuah</td>
                    <td>
                      Returning to the Paleo Hebrew foundations and the
                      testimony of Yahusha.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Jurisdictional Wisdom</strong>
                    </td>
                    <td>Equity &amp; Trust Law</td>
                    <td>
                      Moving from “debtors” to “creditors” and stewards under
                      the Most High.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Physical Provision</strong>
                    </td>
                    <td>Agriculture</td>
                    <td>
                      Achieving food sovereignty and honoring the soil as a
                      divine inheritance.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="blockquote mission-quote mb-4">
              <p className="mb-2">
                “But this I confess unto thee, that after The Way which they
                call heresy, so worship I the Elohim of my fathers, believing
                all things which are written in the Law and in the Prophets.”
              </p>
              <footer className="blockquote-footer mb-0">Acts 24:14</footer>
            </blockquote>
          </section>

          {/* WHY THESE THREE */}
          <section className="mission-section" aria-labelledby="why-heading">
            <h2 id="why-heading" className="h5 mb-3">
              Why These Three?
            </h2>
            <p className="mb-3">
              We believe that true faith is not a one day a week event, but a
              lifestyle of Equity.
            </p>
            <ul className="mb-4">
              <li>
                <strong>The Word</strong> provides the moral compass.
              </li>
              <li className="mt-2">
                <strong>Trust Law</strong> provides the legal framework to
                protect the ministry&apos;s assets and the family&apos;s
                inheritance from secular encroachment.
              </li>
              <li className="mt-2">
                <strong>Agriculture</strong> provides the literal fruit of our
                labor, ensuring we are beholden to no one but Yahuah.
              </li>
            </ul>
          </section>

          {/* FOUNDATIONS (DETAILS) */}
          <section
            className="mission-section"
            aria-labelledby="foundations-heading"
          >
            <h2 id="foundations-heading" className="h5 mb-3">
              Foundations of Equity
            </h2>

            <details className="mission-details mb-4">
              <summary className="mission-summary">
                The Foundations of Equity: A Biblical Framework
              </summary>

              <div className="mt-3">
                <p className="mb-3">
                  Connecting the Law of Equity and Trust Law, to the parables of
                  Yahusha, shows that these are not modern legal “hacks,” but
                  ancient principles of Kingdom governance. In the Kingdom of
                  Yahuah, we are not “owners”; we are Trustees of His creation.
                </p>

                <ol className="mb-4">
                  <li className="mb-3">
                    <strong>
                      The Parable of the Talents: The Ultimate Trust
                    </strong>
                    <ul className="mt-2">
                      <li>
                        <strong>The Settlor:</strong> Yahuah Elohim, who owns
                        the earth and everything in it (Tehillim / Psalms 24:1).
                      </li>
                      <li>
                        <strong>The Trustee:</strong> You — given “talents”
                        (assets/property) to manage.
                      </li>
                      <li>
                        <strong>The Mandate:</strong> In Mattithyahu / Matthew
                        25, the master leaves his goods with his servants. The
                        one who sat on the asset was rebuked, while those who
                        put the assets to work for the benefit of the
                        Master&apos;s estate were rewarded.
                      </li>
                      <li>
                        <strong>The Lesson:</strong> Operating in a Trust is a
                        divine duty. We manage Yahuah&apos;s assets for His
                        glory, not our own.
                      </li>
                    </ul>
                  </li>

                  <li className="mb-3">
                    <strong>
                      Equity Does Not Suffer a Wrong Without a Remedy
                    </strong>
                    <ul className="mt-2">
                      <li>
                        One maxim of Equity is that it will not allow a wrong to
                        go uncorrected.
                      </li>
                      <li>
                        Yahusha demonstrated this when He healed on the Sabbath.
                        The “Letter of the Law” (as interpreted by the
                        Pharisees) suggested no work should be done.
                      </li>
                      <li>
                        Yahusha applied Equity: “Is it lawful to do good or to
                        do evil on the Sabbath?” (Markos / Mark 3:4).
                      </li>
                      <li>
                        <strong>The Lesson:</strong> Equity teaches believers to
                        seek the spirit of the matter and pursue legal and moral
                        remedies when worldly systems attempt unjust bondage.
                      </li>
                    </ul>
                  </li>

                  <li className="mb-3">
                    <strong>Clean Hands and Good Conscience</strong>
                    <ul className="mt-2">
                      <li>
                        A fundamental rule in Equity: “He who comes into Equity
                        must come with clean hands.”
                      </li>
                      <li>
                        Yahusha taught reconciliation as a prerequisite for
                        offering (Mattithyahu / Matthew 5:24).
                      </li>
                      <li>
                        <strong>The Lesson:</strong> Integrity is the “fuel” of
                        an equitable claim. We cannot seek remedy while acting
                        in fraud or malice.
                      </li>
                    </ul>
                  </li>

                  <li className="mb-0">
                    <strong>Agriculture as the “Living Trust”</strong>
                    <ul className="mt-2">
                      <li>
                        When Trust Law and Agriculture unite, we fulfill the
                        Dominion Mandate (Berashith / Genesis 1:28).
                      </li>
                      <li>
                        <strong>The Soil is the Corpus:</strong> By holding land
                        in Trust for biblical agriculture, we remove it from the
                        “merchant” system and place it back into the
                        jurisdiction of The Way.
                      </li>
                      <li>
                        <strong>Equity in Harvest:</strong> Leaving the corners
                        of the field for the poor (Wayyiqra / Leviticus 19:9) is
                        an equitable distribution that cares for the community
                        without creating debt.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </details>
          </section>

          {/* JURISDICTION TABLE */}
          <section className="mission-section" aria-labelledby="jur-heading">
            <h2 id="jur-heading" className="h5 mb-3">
              Kingdom vs. Worldly Jurisdiction
            </h2>

            <div className="table-responsive">
              <table className="table table-sm align-middle mission-table">
                <thead>
                  <tr>
                    <th scope="col">Concept</th>
                    <th scope="col">Worldly System (Statutory)</th>
                    <th scope="col">The Way (Equitable/Trust)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Identity</strong>
                    </td>
                    <td>Debtor / Citizen / Subject</td>
                    <td>Trustee / Steward / Son</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Ownership</strong>
                    </td>
                    <td>Legal Title (Subject to Tax)</td>
                    <td>Equitable Title (Held for Yahuah)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Law</strong>
                    </td>
                    <td>The Letter / Codes / Statutes</td>
                    <td>The Torah / Equity / Conscience</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Provision</strong>
                    </td>
                    <td>Debt-based Commerce</td>
                    <td>Agriculture / Kingdom Increase</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-4" />

          {/* CLOSEOUT */}
          <section className="mission-section" aria-label="Closeout">
            <p className="mb-0">
              We envision a restored people living in covenant faithfulness,
              guided by Yahuah’s Word, practicing equity in all dealings, and
              preserving life through stewardship of the earth.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
