"use client";

import { FormEvent, useMemo, useState } from "react";

const bands = [
{
  id: 1,
  name: "TECHNICAL DEATH METAL",
  description: "Complex riffs. Extreme precision. No limits.",
  tags: ["Technical", "Death Metal", "Extreme Metal"],
},
{
  id: 2,
  name: "DEATHCORE",
  description: "Heavy breakdowns. Brutal energy. Modern metal.",
  tags: ["Deathcore", "Metalcore", "Extreme Metal"],
},
{
  id: 3,
  name: "DJENT",
  description: "Low tunings. Tight grooves. Technical riffs.",
  tags: ["Djent", "Progressive Metal", "Technical"],
},
];

export default function JoinPage() {
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("Guitar");
  const [level, setLevel] = useState("Beginner");
  const [intent, setIntent] = useState("Band");
  const [sound, setSound] = useState("");
  const [email, setEmail] = useState("");
  const [selectedBand, setSelectedBand] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const matches = useMemo(() => {
    const text = sound.toLowerCase();

    return bands
      .map((band) => {
        let score = 55;

        if (text.includes("rock")) score += 15;
        if (text.includes("grunge") && band.id === 2) score += 20;
        if (text.includes("funk") && band.id === 3) score += 20;
        if (
          (text.includes("alternative") || text.includes("alt")) &&
          band.id === 1
        ) {
          score += 20;
        }

        if (intent === "Jam") score += 5;

        return { ...band, score: Math.min(score, 98) };
      })
      .sort((a, b) => b.score - a.score);
  }, [sound, intent]);

  async function submitApplication(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          instrument,
          level,
          intent,
          sound,
          email,
          bandId: selectedBand,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send application");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="join-page">
        <div className="join-success">
          <div className="section-label">APPLICATION RECEIVED</div>
          <h1>LET&apos;S MAKE SOME NOISE.</h1>
          <p>
            Your request is now pending. Ivan will review your application and
            decide whether the match is right.
          </p>
          <a href="/" className="outline-button">
            ← BACK HOME
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="join-page">
      <div className="join-header">
        <a href="/" className="back-link">
          ← IVANR.OCKS
        </a>
        <div className="section-label">FIND YOUR MATES</div>
      </div>

      <div className="join-layout">
        <section className="join-form-panel">
          <div className="section-label">01 / YOUR DETAILS</div>

          <h1>WHO ARE YOU?</h1>

          <form onSubmit={submitApplication}>
            <label>
              NAME / NICKNAME *
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </label>

            <div className="form-row">
              <label>
                INSTRUMENT *
                <select
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                >
                  <option>Guitar</option>
                  <option>Bass</option>
                  <option>Drums</option>
                  <option>Vocals</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                LEVEL *
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>
            </div>

            <label>
              LOOKING FOR *
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
              >
                <option>Band</option>
                <option>Jam</option>
                <option>Collaborate</option>
              </select>
            </label>

            <label>
              YOUR SOUND / INFLUENCES
              <textarea
                value={sound}
                onChange={(e) => setSound(e.target.value)}
                placeholder="Nirvana, RHCP, metal, funk, alternative..."
                rows={5}
              />
            </label>

            <label>
              EMAIL *
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </label>

            {error && <div className="form-error">{error}</div>}

            <button
              type="submit"
              className="primary-button full-width"
              disabled={loading}
            >
              {loading ? "SENDING..." : "REQUEST TO JOIN →"}
            </button>
          </form>
        </section>

        <aside className="matches-panel">
          <div className="section-label">02 / YOUR MATCHES</div>

          <h2>WHO FEELS THE SAME?</h2>

          <div className="match-list">
            {matches.map((band) => (
              <button
                key={band.id}
                type="button"
                className={`match-card ${
                  selectedBand === band.id ? "selected" : ""
                }`}
                onClick={() => setSelectedBand(band.id)}
              >
                <div className="match-top">
                  <span>{band.name}</span>
                  <strong>{band.score}%</strong>
                </div>

                <p>{band.description}</p>

                <div className="tags">
                  {band.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {selectedBand === band.id && (
                  <div className="selected-label">SELECTED ✓</div>
                )}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
