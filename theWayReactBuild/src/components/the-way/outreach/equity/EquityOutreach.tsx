import React from "react";
import lawImg from "@/assets/images/the-way/outreach/law.jpg";

export default function EquityOutreach() {
  return (
    <article className="pillar-card" aria-labelledby="pillar-equity">
      <div className="pillar-card__content">
        <p className="pillar-card__tag">Pillar 2</p>
        <h3 id="pillar-equity" className="pillar-card__title">
          The Law of Equity &amp; Trust{" "}
          <span className="pillar-card__muted">(Kingdom Governance)</span>
        </h3>

        <div className="pillar-split pillar-split--bg pillar-split--law">
          <img
            className="pillar-split__bgimg"
            src={lawImg}
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
          <div className="pillar-split__bgshade" aria-hidden="true" />

          <section className="pillar-box" aria-label="Virtual Equity Outreach">
            <h4>Virtual: “Debt to Stewardship” Webinars</h4>
            <ul>
              <li>
                <strong>The Method:</strong> Monthly virtual workshops teaching
                the basics of Trust Law (e.g., “The Bible as a Trust Document”
                or “How to Move from Debtor to Trustee”).
              </li>
              <li>
                <strong>The Goal:</strong> Provide a remedy for people
                overwhelmed by debt and legal confusion.
              </li>
              <li>
                <strong>Scripture:</strong> Mishle (Proverbs) 22:7 — The
                borrower is servant to the lender.
              </li>
            </ul>
          </section>

          <section
            className="pillar-box"
            aria-label="In-person Equity Outreach"
          >
            <h4>In-Person: Private “Equity Clinics”</h4>
            <ul>
              <li>
                <strong>The Method:</strong> 1-on-1 sessions helping families
                organize affairs and plan with Biblical stewardship.
              </li>
              <li>
                <strong>The Goal:</strong> Practical service—showing that The
                Way has answers for real legal complexity.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
