"use client";

import { useState } from "react";

type Instrument =
  | "Guitar"
  | "Bass"
  | "Drums"
  | "Vocals"
  | "Other"
  | "";

type Intent = "Band" | "Jam" | "Collaborate" | "";

const bands = [
  {
    id: 1,
    name: "RAW / ALT ROCK",
    description: "Loud guitars. Raw energy. Melodic hooks.",
    instruments: ["Guitar", "Bass", "Drums", "Vocals"],
    tags: ["Rock", "Alternative", "Grunge"],
  },
  {
    id: 2,
    name: "GRUNGE / ROCK",
    description: "Dirty riffs. Heavy groove. No polish.",
    instruments: ["Guitar", "Bass", "Drums", "Vocals"],
    tags: ["Grunge", "Rock", "Alternative"],
  },
  {
    id: 3,
    name: "ROCK / FUNK",
    description: "Technical playing. Groove. Melodic chaos.",
    instruments: ["Guitar", "Bass", "Drums", "Vocals"],
    tags: ["Rock", "Funk Rock", "Technical"],
  },
];

export default function Home() {
  const [showJoin, setShowJoin] = useState(false);
  const [instrument, setInstrument] = useState<Instrument>("");
  const [level, setLevel] = useState("");
  const [intent, setIntent] = useState<Intent>("");
  const [sound, setSound] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [x, setX] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = () => {
    if (!instrument || !level || !intent || !name || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  };

  const sendRequest = (bandName: string) => {
    const subject = encodeURIComponent(
      `IVANR.OCKS — JOIN REQUEST — ${bandName}`
    );

    const body = encodeURIComponent(
      `Hi Ivan,

I want to join ${bandName}.

Name: ${name}
Instrument: ${instrument}
Level: ${level}
Intent: ${intent}
Sound / influences: ${sound || "Not specified"}
X: ${x || "Not specified"}
Email: ${email}

Let's make some noise.
`
    );

    window.location.href = `mailto:ivanr.music@proton.me?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setSubmitted(false);
    setInstrument("");
    setLevel("");
    setIntent("");
    setSound("");
    setName("");
    setEmail("");
    setX("");
  };

  return (
    <main>
      <nav>
        <div className="logo">IVANR.OCKS</div>

        <div className="nav-links">
          <a href="#sound">SOUND</a>

          <button
            className="nav-button"
            onClick={() => {
              setShowJoin(true);
              setTimeout(() => {
                document
                  .getElementById("join")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            JOIN US
          </button>

          <a href="mailto:ivanr.music@proton.me">EMAIL</a>

          <a
            href="https://x.com/ivanrrock"
            target="_blank"
            rel="noreferrer"
          >
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

          <button
            className="cta"
            onClick={() => {
              setShowJoin(true);
              setTimeout(() => {
                document
                  .getElementById("join")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            JOIN US — FIND YOUR MATES
          </button>
        </div>

        <div className="hero-mark">
          <div>IVAN</div>
          <div>R.</div>
          <div>OCKS</div>
        </div>
      </section>

      <section id="sound" className="section">
        <p className="eyebrow">01 / THE SOUND</p>

        <h2>
          NOT A GENRE.
          <br />
          A SOUND.
        </h2>

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
          THE SOUND THAT SHAPED THE PROJECT:
          <br />
          90s GRUNGE · FUNK ROCK · SHRED · MELODIC ROCK
        </p>
      </section>

      <section id="crew" className="section crew-section">
        <p className="eyebrow">02 / THE CREW</p>

        <h2>
          FIND YOUR
          <br />
          MATES.
        </h2>

        <div className="bands">
          {bands.map((band) => (
            <article className="band" key={band.id}>
              <div className="band-number">
                0{band.id}
              </div>

              <h3>{band.name}</h3>

              <p className="band-description">
                {band.description}
              </p>

              <div className="members">
                <p>GUITAR — {band.id === 1 ? "IVAN" : "OPEN"}</p>
                <p>BASS — OPEN</p>
                <p>DRUMS — OPEN</p>
                <p>VOCALS — OPEN</p>
              </div>

              <button
                className="join-band"
                onClick={() => {
                  setShowJoin(true);

                  setTimeout(() => {
                    document
                      .getElementById("join")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
              >
                JOIN →
              </button>
            </article>
          ))}
        </div>
      </section>

      {showJoin && (
        <section id="join" className="section join-section">
          <p className="eyebrow">03 / JOIN THE PROJECT</p>

          {!submitted ? (
            <>
              <h2>
                LET&apos;S
                <br />
                PLAY.
              </h2>

              <p className="join-intro">
                Tell us a little about yourself.
                <br />
                We&apos;ll find where you fit.
              </p>

              <div className="form">
                <label>
                  YOUR NAME *
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name / nickname"
                  />
                </label>

                <label>
                  INSTRUMENT *
                  <select
                    value={instrument}
                    onChange={(e) =>
                      setInstrument(e.target.value as Instrument)
                    }
                  >
                    <option value="">Choose</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Bass">Bass</option>
                    <option value="Drums">Drums</option>
                    <option value="Vocals">Vocals</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  LEVEL *
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="">Choose</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">
                      Intermediate
                    </option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </label>

                <label>
                  WHAT ARE YOU LOOKING FOR? *
                  <select
                    value={intent}
                    onChange={(e) =>
                      setIntent(e.target.value as Intent)
                    }
                  >
                    <option value="">Choose</option>
                    <option value="Band">Form a band</option>
                    <option value="Jam">Jam</option>
                    <option value="Collaborate">
                      Collaborate
                    </option>
                  </select>
                </label>

                <label>
                  YOUR SOUND
                  <textarea
                    value={sound}
                    onChange={(e) => setSound(e.target.value)}
                    placeholder="Bands, artists, riffs, sounds..."
                  />
                </label>

                <label>
                  EMAIL *
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </label>

                <label>
                  X / TWITTER
                  <input
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                    placeholder="@yourhandle"
                  />
                </label>

                <button
                  className="submit-button"
                  onClick={handleJoin}
                >
                  FIND MY MATES →
                </button>
              </div>
            </>
          ) : (
            <div className="matches">
              <div className="match-header">
                <p className="match-label">MATCH FOUND</p>

                <h2>
                  YOUR
                  <br />
                  CREW.
                </h2>

                <p>
                  Based on your instrument and musical direction,
                  these projects could be a good fit.
                </p>
              </div>

              {bands.map((band) => (
                <article className="match-card" key={band.id}>
                  <div>
                    <span>0{band.id}</span>
                    <h3>{band.name}</h3>
                    <p>{band.description}</p>
                  </div>

                  <button
                    onClick={() => sendRequest(band.name)}
                  >
                    JOIN THIS CREW →
                  </button>
                </article>
              ))}

              <button
                className="reset-button"
                onClick={resetForm}
              >
                ← CHANGE MY ANSWERS
              </button>
            </div>
          )}
        </section>
      )}

      <section className="section contact">
        <p className="eyebrow">04 / CONTACT</p>

        <h2>
          MAKE
          <br />
          SOME NOISE.
        </h2>

        <div className="contact-links">
          <a href="mailto:ivanr.music@proton.me">
            EMAIL ↗
          </a>

          <a
            href="https://x.com/ivanrrock"
            target="_blank"
            rel="noreferrer"
          >
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
