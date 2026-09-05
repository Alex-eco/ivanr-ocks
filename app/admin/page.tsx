"use client";

import { useEffect, useState } from "react";

type Application = {
  id: number;
  name: string;
  instrument: string;
  level: string;
  intent: string;
  sound: string | null;
  email: string;
  band_id: number | null;
  band_name: string | null;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  async function loadApplications() {
    const response = await fetch("/api/admin/applications");

    if (response.status === 401) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }

    const data = await response.json();

    setApplications(data.applications || []);
    setLoggedIn(true);
    setLoading(false);
  }

  useEffect(() => {
    loadApplications();
  }, []);

  async function login() {
    setLoginError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setLoginError("Wrong password");
      return;
    }

    setLoggedIn(true);
    setPassword("");
    await loadApplications();
  }

  async function updateStatus(
    id: number,
    status: "ACCEPTED" | "DECLINED"
  ) {
    const response = await fetch(`/api/admin/applications/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (response.ok) {
      await loadApplications();
    }
  }

  async function logout() {
    await fetch("/api/admin/login", {
      method: "DELETE",
    });

    setLoggedIn(false);
    setApplications([]);
  }

  if (loading) {
    return (
      <main className="admin-page">
        <div className="admin-login">
          <div className="section-label">IVANR.OCKS / ADMIN</div>
          <h1>LOADING...</h1>
        </div>
      </main>
    );
  }

  if (!loggedIn) {
    return (
      <main className="admin-page">
        <div className="admin-login">
          <div className="section-label">IVANR.OCKS / ADMIN</div>

          <h1>ADMIN.</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              login();
            }}
          >
            <label>
              PASSWORD
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoFocus
              />
            </label>

            {loginError && (
              <div className="form-error">{loginError}</div>
            )}

            <button className="primary-button full-width" type="submit">
              ENTER →
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <div className="section-label">IVANR.OCKS / ADMIN</div>
          <h1>APPLICATIONS.</h1>
        </div>

        <button className="outline-button" onClick={logout}>
          LOG OUT
        </button>
      </header>

      <section className="admin-list">
        <div className="section-label">
          {applications.length} APPLICATION
          {applications.length === 1 ? "" : "S"}
        </div>

        <div style={{ marginTop: 25 }}>
          {applications.length === 0 && (
            <p style={{ color: "var(--muted)" }}>
              No applications yet.
            </p>
          )}

          {applications.map((application) => (
            <article className="application" key={application.id}>
              <div className="application-top">
                <div className="application-name">
                  {application.name}
                </div>

                <div className="status">{application.status}</div>
              </div>

              <div className="application-grid">
                <div className="application-item">
                  <span>INSTRUMENT</span>
                  <strong>{application.instrument}</strong>
                </div>

                <div className="application-item">
                  <span>LEVEL</span>
                  <strong>{application.level}</strong>
                </div>

                <div className="application-item">
                  <span>LOOKING FOR</span>
                  <strong>{application.intent}</strong>
                </div>

                <div className="application-item">
                  <span>MATCH</span>
                  <strong>{application.band_name || "—"}</strong>
                </div>
              </div>

              <div className="application-sound">
                <strong>{application.email}</strong>
                {application.sound && (
                  <>
                    <br />
                    <br />
                    {application.sound}
                  </>
                )}
              </div>

              {application.status === "PENDING" && (
                <div className="application-actions">
                  <button
                    className="accept-button"
                    onClick={() =>
                      updateStatus(application.id, "ACCEPTED")
                    }
                  >
                    ACCEPT
                  </button>

                  <button
                    className="decline-button"
                    onClick={() =>
                      updateStatus(application.id, "DECLINED")
                    }
                  >
                    DECLINE
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
