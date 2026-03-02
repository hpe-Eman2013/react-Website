import { Link } from "react-router-dom";
import "@/assets/css/home/Home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1>The Way of Messiah</h1>
          <p>
            Returning to the ancient paths and restoring the Name of the Father
            and His Son.
          </p>
          <Link to="/the-way" className="home-cta">
            Begin Your Journey
          </Link>
        </div>
      </section>

      {/* FATHER NAME SECTION */}
      <section className="home-section">
        <h2>The Name of the Father</h2>

        <p>
          When Elohim commanded Mosheh to bring the children of Yashar'el out of
          Mitsrayim, Mosheh asked in whose name he should speak. Elohim revealed
          His eternal Name:
        </p>

        <blockquote>
          “And Elohiym said unto El-Mosheh, Ehayah Asher Ehayah (I AM THAT I
          AM)... Yahuah Elohai of your fathers... this is my name forever, and
          this is my mention unto all generations.” (Exodus 3:14–15)
        </blockquote>

        <blockquote>
          “Sing unto Elohiym... extol him that rides upon the heavens by his
          name Yah.” (Psalm 68:4)
        </blockquote>

        <p>
          The Tetragrammaton (YHWH), written in Paleo Hebrew as 𐤉𐤄𐤅𐤄, produces
          the sound: Yahuah.
        </p>

        <p>
          This is not translation but <strong>transliteration</strong> —
          preserving the original pronunciation rather than replacing it with a
          title.
        </p>
      </section>

      {/* SON NAME SECTION */}
      <section className="home-section alt">
        <h2>The Name of the Son</h2>

        <blockquote>
          “You shall call his name Yahusha: for he shall save his people from
          their sins.” (Matthew 1:20–21)
        </blockquote>

        <blockquote>
          “Neither is there salvation in any other: for there is no other name
          under heaven given among men, whereby we must be saved.” (Acts
          4:11–12)
        </blockquote>

        <p>
          The name Yahusha carries the declaration that Yahuah is salvation.
        </p>
      </section>

      {/* INVITATION */}
      <section className="home-invite">
        <p>
          Come learn more with us in a community of trust, education and growing
          in The Way of the Messiah!
        </p>
        <Link to="/the-way" className="home-cta secondary">
          Begin Your Journey
        </Link>
      </section>
    </div>
  );
}
