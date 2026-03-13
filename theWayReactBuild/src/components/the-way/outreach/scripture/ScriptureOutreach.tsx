import React from "react";
import scriptureImg from "@/assets/images/the-way/outreach/bibleSharing.jpg";
import givingBiblesImg from "@/assets/images/the-way/outreach/givingBibles.jpg";

export default function ScriptureOutreach() {
  return (
    <article className="pillar-card" aria-labelledby="pillar-word">
      <div className="pillar-card__media" aria-hidden="true">
        <img src={scriptureImg} alt="" loading="lazy" />
        <div className="pillar-card__overlay" />
      </div>

      <div className="pillar-card__content">
        <p className="pillar-card__tag">Pillar 1</p>
        <h3 id="pillar-word" className="pillar-card__title">
          The Word{" "}
          <span className="pillar-card__muted">
            (Restoring the Name &amp; The Way)
          </span>
        </h3>

        <div className="pillar-split pillar-split--bg pillar-split--word">
          <img
            className="pillar-split__bgimg"
            src={givingBiblesImg}
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
          <div className="pillar-split__bgshade" aria-hidden="true" />

          <section className="pillar-box" aria-label="Virtual Word Outreach">
            <h4>Virtual: “Ancient Paths” Digital Library</h4>
            <ul>
              <li>
                <strong>The Method:</strong> Short (60-second) videos or
                carousels explaining one Paleo Hebrew word per week (e.g.,
                Elohiym, Barakah, Shalom).
              </li>
              <li>
                <strong>The Goal:</strong> Introduce the name of Yahuah and
                Yahusha in an educational, non-confrontational way.
              </li>
              <li>
                <strong>Scripture:</strong> Yirmeyahu (Jeremiah) 6:16 — Ask for
                the ancient paths and walk therein.
              </li>
            </ul>
          </section>

          <section className="pillar-box" aria-label="In-person Word Outreach">
            <h4>In-Person: “Scripture &amp; Tea” Home Fellowships</h4>
            <ul>
              <li>
                <strong>The Method:</strong> Informal gatherings (not a “church
                service”) centered on a Torah portion or a “Hard Saying” of
                Yahusha.
              </li>
              <li>
                <strong>The Goal:</strong> Build community through
                hospitality—especially for neighbors who are weary of
                traditional religion.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
