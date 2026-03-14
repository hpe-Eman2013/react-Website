import { Link } from "react-router-dom";
import "@/assets/css/home/Home.css";
import "@/assets/css/ui/Accordion.css";

import Yod from "@/assets/images/home/yod.png";
import Hey from "@/assets/images/home/hey.png";
import Vav from "@/assets/images/home/vav.png";
import Shin from "@/assets/images/home/shin.png";
import Ayin from "@/assets/images/home/ayin.png";

import { AccordionGroup } from "@/components/ui/AccordionGroup";
import AccordionSection from "@/components/ui/AccordionSection";
export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1 className="home-hero-title">The Way of Messiah</h1>

          <p className="home-hero-text">
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
          We begin with the name of Elohiym. When Elohiym commanded Mosheh to go
          to Mitsrayim and bring the children of Yashar'el out, Mosheh wanted to
          know what name would he give them, in case they wanted to know in
          whose name and authority was he speaking in. This is what Elohiym told
          Mosheh:
        </p>

        <blockquote>
          "And Elohiym said unto El-Mosheh, Ehayah Asher Ehayah (I AM THAT I AM)
          ; and he said: Thus shall you say unto the children of Yashar'el,
          Ehayah has sent me unto you. And Elohiym said moreover unto El-Mosheh:
          Thus shall you say unto the children of Yashar'el, Yahuah Elohai of
          your fathers, the Elohai of Avraham, the Elohai of Yitschaq, and the
          Elohai of Ya'aqov, has sent me unto you: this is my name forever, and
          this is my mention unto all generations." (Exodus 3:14-15)
        </blockquote>

        <blockquote>
          “Sing unto Elohiym... extol him that rides upon the heavens by his
          name Yah.” (Psalm 68:4)
        </blockquote>

        <p>
          The Tetragrammaton (YHWH), written in Paleo Hebrew as 𐤉𐤄𐤅𐤄, produces
          the sound: Yahuah. This is not translation but{" "}
          <strong>transliteration</strong> — preserving the original
          pronunciation rather than replacing it with a title.
        </p>

        <AccordionGroup>
          <AccordionSection
            id="tetragrammaton-letters"
            title="Paleo Hebrew letters of the Tetragrammaton (𐤉𐤄𐤅𐤄)"
          >
            <p>
              The Hebrew language is read from right to left. The characters are
              explained as:
            </p>

            <ul>
              <li>𐤉 = Yad (Ya sound)</li>
              <li>𐤄 = Hay (Ah sound)</li>
              <li>𐤅 = uau (oo sound)</li>
              <li>𐤄 = Hay (Ah sound)</li>
            </ul>

            <p>
              Placed together produces the (Ya-ah-oo-ah) sound:{" "}
              <strong>Yahuah</strong>.
            </p>
          </AccordionSection>

          <AccordionSection
            id="transliteration-definition"
            title="What is transliteration (and why it matters)?"
          >
            <p>
              The definition of transliteration is: the process of converting
              text from one writing system or alphabet into another, typically
              on a character-by-character basis, to preserve the original
              spelling and allow approximate pronunciation in the target script.
            </p>

            <p>
              <strong>
                Unlike translation, which conveys meaning, transliteration
                focuses on representing how words are written and pronounced in
                the source language.
              </strong>{" "}
              The pronunciation does not change.
            </p>
          </AccordionSection>

          <AccordionSection
            id="pictogram-meaning"
            title="Pictogram meaning and the Messiah connection"
          >
            <p>
              In pictogram form, these characters convey the idea: “Behold, the
              nail, behold, the hands.”
            </p>

            <div>
              <img src={Yod} alt="Hand" aria-hidden="true" />
              <img src={Hey} alt="Behold" aria-hidden="true" />
              <img src={Vav} alt="Nail" aria-hidden="true" />
              <img src={Hey} alt="Behold" aria-hidden="true" />
            </div>

            <p>
              This is a prophecy of the death of the Messiah, which means
              "Behold, the nail, behold, the hands". Yahusha said this to his
              disciples after he rose from the dead:
            </p>

            <blockquote>
              "Behold my hands and my feet, that it is I myself: handle me, and
              see; for a ruach (spirit) has not flesh and bones, as ye see me
              have." (Luke 24:39)
            </blockquote>
          </AccordionSection>
        </AccordionGroup>
      </section>

      {/* SON NAME SECTION */}
      <section className="home-section alt">
        <h2>The Name of the Son</h2>

        <p>
          Now, we turn our attention to the Son of Adam and Son of Elohiym. His
          name is prophecied in the book of Mattithyahu (Matthew) 1:20-21 which
          says:
        </p>

        <blockquote>
          “But while he thought on these things, behold, the angel of Yah
          appeared unto him in a dream, saying: Yoceph, son of David, fear not
          to take unto you Miryam your woman: for that which is conceived in her
          is of the Ruach Ha'Qodesh. And she shall bring forth a son, and you
          shall call his name Yahusha: for he whall save his people from their
          sins.” (Matthew 1:20–21)
        </blockquote>

        <p>
          That name give to the Messiah from heaven is so important, that Kepha
          (Peter) declared:
        </p>

        <blockquote>
          "This is the stone which was set at naught of you builders, which is
          become the head of the corner. Neither is there salvation in any
          other: for there is no other name under heaven given among men,
          whereby we must be saved." (Acts 4:11-12)
        </blockquote>

        <p>
          The name Yahusha carries the declaration that Yahuah is salvation.
        </p>

        <AccordionGroup>
          <AccordionSection
            id="yahusha-letter-sounds"
            title="Hebrew character sounds for the Messiah’s name (Yahusha)"
          >
            <p>
              The sound of characters for the name of the Messiah is: Yod He Waw
              Sin (or Shin) Ayin.
            </p>

            <ul>
              <li>Yod = Ya / Yay</li>
              <li>He = a / eh</li>
              <li>Vav = oo / u</li>
              <li>Sin/Shin = sh</li>
              <li>Ayin = ah</li>
            </ul>

            <p>
              Putting together the sounds: <strong>Ya-a-u-sh-ah</strong> →{" "}
              <strong>Yahusha</strong>.
            </p>

            <div>
              <span>The Hebrew pictograph is:</span>{" "}
              <img src={Yod} alt="Hand" aria-hidden="true" />
              <img src={Hey} alt="Behold" aria-hidden="true" />
              <img src={Vav} alt="Nail" aria-hidden="true" />
              <img src={Shin} alt="Destroy" aria-hidden="true" />
              <img src={Ayin} alt="See" aria-hidden="true" />
              <p>
                Which means: See, destroy nail behold hand. This points to the
                Messiah being destroyed or consumed by the nail in his hand.
              </p>
            </div>
          </AccordionSection>
        </AccordionGroup>
      </section>

      {/* INVITATION */}
      <section className="home-invite">
        <p className="home-invite-text">
          Come learn more with us in a community of trust, education and growing
          in The Way of the Messiah!
        </p>
        <Link to="/the-way" className="home-cta">
          Begin Your Journey
        </Link>
      </section>
    </div>
  );
}
