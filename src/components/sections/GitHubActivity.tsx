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

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#00f5ff",
  JavaScript: "#eeff00",
  Python: "#ff00aa",
  "C#": "#7fff00",
  HTML: "#ff6b35",
  CSS: "#9f5fff",
  Dart: "#00f5d4",
  Go: "#00d9ff",
  Java: "#ffaa00",
  Swift: "#ff4466",
  Kotlin: "#a97bff",
  Rust: "#ff8c57",
};

function getLangColor(lang: string) {
  return LANG_COLORS[lang] ?? "rgba(0,245,255,0.5)";
}

export default async function GitHubActivity() {
  const username = "shoppinh";
  const stats = await getGitHubStats(username);

  const statItems = stats
    ? [
        {
          label: "PUBLIC REPOS",
          value: stats.repos,
          accent: "var(--color-cyber-cyan)",
        },
        {
          label: "TOTAL STARS",
          value: stats.stars,
          accent: "var(--color-cyber-yellow)",
        },
        {
          label: "TOTAL FORKS",
          value: stats.forks,
          accent: "var(--color-cyber-pink)",
        },
        {
          label: "FOLLOWERS",
          value: stats.followers,
          accent: "var(--color-cyber-cyan)",
        },
      ]
    : [];

  return (
    <section
      id="github"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(0,245,255,0.1)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-cyber-cyan)",
              marginBottom: "0.5rem",
            }}
          >
            &gt; SYS::ACTIVITY
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "var(--color-cyber-text)",
              letterSpacing: "0.03em",
            }}
          >
            GITHUB ACTIVITY
          </h2>
        </div>

        {stats ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Stat boxes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {statItems.map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="cyber-card"
                  style={{
                    borderRadius: "4px",
                    padding: "1.25rem",
                    textAlign: "center",
                    borderTopColor: accent,
                    borderTopWidth: "2px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: accent,
                      textShadow: `0 0 16px ${accent}60`,
                      lineHeight: 1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      color: "var(--color-cyber-muted)",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Top languages */}
            {stats.topLanguages.length > 0 && (
              <div
                className="cyber-card"
                style={{ borderRadius: "4px", padding: "1.5rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-cyber-cyan)",
                    marginBottom: "1.25rem",
                    opacity: 0.8,
                  }}
                >
                  :: MOST USED LANGUAGES
                </h3>

                {/* Segmented bar */}
                <div
                  style={{
                    display: "flex",
                    height: "6px",
                    marginBottom: "1.25rem",
                    gap: "2px",
                    overflow: "hidden",
                  }}
                >
                  {stats.topLanguages.map(({ lang, pct }) => (
                    <div
                      key={lang}
                      style={{
                        width: `${pct}%`,
                        backgroundColor: getLangColor(lang),
                        boxShadow: `0 0 6px ${getLangColor(lang)}`,
                      }}
                      title={`${lang}: ${pct}%`}
                    />
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {stats.topLanguages.map(({ lang, pct }) => (
                    <div
                      key={lang}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          background: getLangColor(lang),
                          boxShadow: `0 0 6px ${getLangColor(lang)}`,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--color-cyber-text)",
                        }}
                      >
                        {lang}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--color-cyber-muted)",
                        }}
                      >
                        {pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile link */}
            <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.11.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                VIEW FULL PROFILE
              </a>
            </div>
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--color-cyber-muted)",
            }}
          >
            // GitHub stats unavailable at this time.
          </div>
        )}
      </div>
    </section>
  );
}
