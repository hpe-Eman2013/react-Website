import ScriptureQuotes from "../../components/the-way/ScriptureQuotes";
import PillarGrid from "../../components/the-way/PillarGrid";
import "@/assets/css/the-way/TheWay.css";

export default function TheWayPage() {
  return (
    <div className="tw-page">
      <header className="tw-hero">
        <div className="tw-hero-inner">
          <h1 className="tw-title">THE WAY</h1>
          <p className="tw-subtitle">Come learn with us!</p>
        </div>
      </header>

      <main className="tw-main">
        <section className="tw-overview" aria-label="Overview">
          <h2>Why this website exists</h2>
          <p>
            We believe Hellenization has replaced the worship and traditions of
            the Hebrew people with Greek cultural frameworks—obscuring key
            truths and even changing the Names of the Most High and His Son, the
            Messiah. This has led to confusion and idolatry among the Gentiles.
          </p>
          <p>
            We seek to rectify this error by returning to the ancient paths,
            beginning with the faith of the first-century disciples of the
            Messiah, Yahusha.
          </p>
        </section>

        <ScriptureQuotes />

        <PillarGrid />
      </main>
    </div>
  );
}
