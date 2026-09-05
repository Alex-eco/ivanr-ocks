export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">IVANR.OCKS</div>

        <div className="nav-links">
          <a href="#sound">SOUND</a>
          <a href="#crew">JOIN US</a>
          <a href="mailto:ivanr.music@proton.me">EMAIL</a>
          <a href="https://x.com/ivanrrock" target="_blank">
            𝕏
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">IVANR.OCKS / MUSIC PROJECT</p>

          <h1>
            BUILDING
            <br />
            MY SOUND.
          </h1>

          <p className="subtitle">
            Play the music you love.
            <br />
            Find people who feel the same.
          </p>

          <a className="cta" href="#crew">
            JOIN US — FIND YOUR MATES
          </a>
        </div>

        <div className="guitar-placeholder">
          <span>ELECTRIC</span>
          <span>GUITAR</span>
        </div>
      </section>

      <section id="sound" className="section">
        <p className="eyebrow">01 / THE SOUND</p>

        <h2>NOT A GENRE.<br />A SOUND.</h2>

        <div className="tags">
          <span>RAW</span>
          <span>LOUD</span>
          <span>MELODIC</span>
          <span>TECHNICAL</span>
          <span>GRUNGE</span>
          <span>ALTERNATIVE</span>
          <span>FUNK ROCK</span>
        </div>

        <p className="influences">
          NIRVANA · RED HOT CHILI PEPPERS · PAUL GILBERT ·
          JASON BECKER · YNGWIE MALMSTEEN
        </p>
      </section>

      <section id="crew" className="section crew-section">
        <p className="eyebrow">02 / JOIN THE CREW</p>

        <h2>FIND YOUR<br />MATES.</h2>

        <div className="bands">

          <article className="band">
            <div className="band-number">01</div>
            <h3>RAW / ALT ROCK</h3>

            <div className="members">
              <p>GUITAR — IVAN</p>
              <p>BASS — OPEN</p>
              <p>DRUMS — OPEN</p>
              <p>VOCALS — OPEN</p>
            </div>

            <button>JOIN</button>
          </article>

          <article className="band">
            <div className="band-number">02</div>
            <h3>GRUNGE / ROCK</h3>

            <div className="members">
              <p>GUITAR — OPEN</p>
              <p>BASS — OPEN</p>
              <p>DRUMS — OPEN</p>
              <p>VOCALS — OPEN</p>
            </div>

            <button>JOIN</button>
          </article>

          <article className="band">
            <div className="band-number">03</div>
            <h3>ROCK / FUNK</h3>

            <div className="members">
              <p>GUITAR — OPEN</p>
              <p>BASS — OPEN</p>
              <p>DRUMS — OPEN</p>
              <p>VOCALS — OPEN</p>
            </div>

            <button>JOIN</button>
          </article>

        </div>
      </section>

      <section className="section contact">
        <p className="eyebrow">03 / CONTACT</p>

        <h2>MAKE<br />SOME NOISE.</h2>

        <div className="contact-links">
          <a href="mailto:ivanr.music@proton.me">
            EMAIL ↗
          </a>

          <a href="https://x.com/ivanrrock" target="_blank">
            X / @IVANRROCK ↗
          </a>

          <div className="support">
            <p>SUPPORT IVANR.OCKS</p>
            <small>ETH / Ethereum</small>
            <code>
              0x3d889745e2eFDE640EdbAd90C3D6Fff2860C9F8f
            </code>
          </div>
        </div>
      </section>

      <footer>
        <span>IVANR.OCKS</span>
        <span>BUILDING MY SOUND.</span>
      </footer>
    </main>
  );
}
