import Link from "next/link";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand">IVANR.OCKS</div>
        <div className="topbar-note">BUILDING MY SOUND.</div>
      </header>

      <section className="hero">
        <div className="hero-kicker">GUITAR / ROCK / BEGINNER</div>

        <h1>
          PLAY THE MUSIC
          <br />
          YOU LOVE.
        </h1>

        <p className="hero-copy">
          Find people who feel the same.
          <br />
          Build a band. Make some noise.
        </p>

        <Link href="/join" className="primary-button">
          JOIN US — FIND YOUR MATES
        </Link>
      </section>

      <section className="manifesto">
        <div className="section-label">01 / THE IDEA</div>

        <div>
          <h2>
            RAW.
            <br />
            LOUD.
            <br />
            MELODIC.
          </h2>

          <p>
            I&apos;m learning guitar, building my sound and looking for people
            who want to play rock together.
          </p>
        </div>
      </section>

      <section className="bands-preview">
        <div className="section-label">02 / THE SOUND</div>

        <div className="sound-grid">
          <div>
            <span>01</span>
<h3>TECHNICAL DEATH METAL</h3>
<p>Complex riffs. Extreme precision. No limits.</p>
          </div>

          <div>
            <span>02</span>
<h3>DEATHCORE</h3>
<p>Heavy breakdowns. Brutal energy. Modern metal.</p>
          </div>

          <div>
            <span>03</span>
            <strong>ROCK / FUNK</strong>
            <p>Technical playing. Groove. Melodic chaos.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <div className="section-label">03 / LET&apos;S PLAY</div>
          <h2>FIND YOUR MATES.</h2>
        </div>

        <Link href="/join" className="outline-button">
          JOIN THE PROJECT →
        </Link>
      </section>

      <footer>
        <span>IVANR.OCKS</span>

        <div className="footer-links">
          <span>© 2026</span>

          <a
            href="https://x.com/ivanrrock"
            target="_blank"
            rel="noopener noreferrer"
          >
            X / @ivanrrock
          </a>

          <a href="mailto:ivanr.music@proton.me">
            ivanr.music@proton.me
          </a>
        </div>
      </footer>
    </main>
  );
}
