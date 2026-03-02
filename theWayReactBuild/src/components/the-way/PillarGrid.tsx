import { Link } from "react-router-dom";
import { PILLARS } from "./pillars";

export default function PillarGrid() {
  return (
    <section className="tw-pillars" aria-label="Main sections">
      <div className="tw-pillars-grid">
        {PILLARS.map((p) => (
          <article key={p.key} className="tw-card">
            <h3 className="tw-card-title">{p.title}</h3>
            <p className="tw-card-text">{p.blurb}</p>
            <Link className="tw-card-link" to={p.href}>
              Learn More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
