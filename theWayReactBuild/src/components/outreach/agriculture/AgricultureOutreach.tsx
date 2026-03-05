import React from "react";
import agricultureImg from "@/assets/images/the-way/outreach/agriculture.jpg";
import lettuceImg from "@/assets/images/the-way/outreach/lettuceCrop.jpg";
import cornImg from "@/assets/images/the-way/outreach/cornCrop.jpg";

export default function AgricultureOutreach() {
  return (
    <article className="pillar-card" aria-labelledby="pillar-ag">
      <div className="pillar-card__media" aria-hidden="true">
        <img src={agricultureImg} alt="" loading="lazy" />
        <div className="pillar-card__overlay" />
      </div>

      <div className="pillar-card__content">
        <p className="pillar-card__tag">Pillar 3</p>
        <h3 id="pillar-ag" className="pillar-card__title">
          Agriculture{" "}
          <span className="pillar-card__muted">(The Living Estate)</span>
        </h3>

        {/* Two image slabs (Virtual + In-Person) */}
        <div
          className="pillar-slab-grid"
          role="group"
          aria-label="Agriculture outreach options"
        >
          <section
            className="pillar-slab"
            data-bg="lettuce"
            aria-label="Virtual Agriculture Outreach"
          >
            <img
              className="pillar-slab__bg"
              src={lettuceImg}
              alt=""
              loading="lazy"
            />
            <div className="pillar-slab__shade" aria-hidden="true" />

            <div className="pillar-slab__content">
              <h4>Virtual: The “Seed Swap” Network</h4>
              <ul>
                <li>
                  <strong>The Method:</strong> Facilitate a seed exchange among
                  believers. Members mail heirloom seeds with a printed
                  “Covenant of Stewardship” card.
                </li>
                <li>
                  <strong>The Goal:</strong> Establish a parallel food system
                  and spread the message through the physical seed.
                </li>
              </ul>
            </div>
          </section>

          <section
            className="pillar-slab"
            data-bg="corn"
            aria-label="In-person Agriculture Outreach"
          >
            <img
              className="pillar-slab__bg"
              src={cornImg}
              alt=""
              loading="lazy"
            />
            <div className="pillar-slab__shade" aria-hidden="true" />

            <div className="pillar-slab__content">
              <h4>In-Person: “The Corner of the Field” Giveaways</h4>
              <ul>
                <li>
                  <strong>The Method:</strong> Members set up a stand with a
                  sign: “Free Harvest — In Honor of Yahuah.”
                </li>
                <li>
                  <strong>The Goal:</strong> Fulfill Wayyiqra (Leviticus)
                  19:9—giving away the corners sparks conversations.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
