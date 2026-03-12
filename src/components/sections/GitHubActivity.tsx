interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

async function getGitHubStats(username: string) {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 86400 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
        {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 86400 },
        },
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    const ownRepos = repos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce((acc, r) => acc + r.stargazers_count, 0);
    const totalForks = ownRepos.reduce((acc, r) => acc + r.forks_count, 0);

    const langCount: Record<string, number> = {};
    ownRepos.forEach((r) => {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    });

    const topLanguages = Object.entries(langCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6);

    const total = topLanguages.reduce((s, [, c]) => s + c, 0);

    return {
      repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      stars: totalStars,
      forks: totalForks,
      topLanguages: topLanguages.map(([lang, count]) => ({
        lang,
        pct: Math.round((count / total) * 100),
      })),
    };
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const username = "shoppinh";
  const stats = await getGitHubStats(username);

  const statItems = stats
    ? [
        { label: "REP.PUBLIC", value: stats.repos },
        { label: "STR.TOTAL", value: stats.stars },
        { label: "FRK.TOTAL", value: stats.forks },
        { label: "USR.FOLLOW", value: stats.followers },
      ]
    : [];

  return (
    <section id="github" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial" style={{ marginBottom: "var(--space-12)" }}>
          <div>
            <span className="section-label">Telemetry</span>
            <h2 style={{ borderBottom: "none" }}>GitHub Metrics</h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>
              Live repository statistics and language distribution.
            </p>
          </div>
        </div>

        {stats ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            
            {/* Stat Matrix */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {statItems.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg)",
                    padding: "var(--space-6)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-2)"
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    [{label}]
                  </p>
                  <p
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0,
                      lineHeight: 1
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Top Languages */}
            {stats.topLanguages.length > 0 && (
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-6)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>{"//"}</span> LANGUAGE_DISTRIBUTION
                </h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
                  {stats.topLanguages.map(({ lang, pct }) => (
                    <div
                      key={lang}
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "var(--space-2)",
                        background: "var(--surface)",
                        padding: "var(--space-2) var(--space-3)",
                        border: "1px solid var(--border)"
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.80rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-secondary)",
                          textTransform: "uppercase"
                        }}
                      >
                        {lang}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--accent)",
                        }}
                      >
                        {pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action */}
            <div style={{ marginTop: "var(--space-4)" }}>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ padding: "var(--space-3) var(--space-6)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                ACCESS_GITHUB_PROFILE
              </a>
            </div>

          </div>
        ) : (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--red)", borderLeft: "2px solid var(--red)", paddingLeft: "var(--space-4)" }}>
            ERR_FETCH_FAILED: Unable to retrieve telemetry data.
          </p>
        )}
      </div>
    </section>
  );
}
