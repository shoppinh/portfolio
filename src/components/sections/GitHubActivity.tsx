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
  TypeScript: "#3178c6",
  JavaScript: "#f0db4f",
  Python: "#3572A5",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  Go: "#00ADD8",
  Java: "#b07219",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Rust: "#dea584",
};

function getLangColor(lang: string) {
  return LANG_COLORS[lang] ?? "#6b7280";
}

export default async function GitHubActivity() {
  const username = "shoppinh";
  const stats = await getGitHubStats(username);

  return (
    <section id="github" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Activity
          </p>
          <h2 className="text-3xl font-bold text-gray-900">GitHub Activity</h2>
        </div>

        {stats ? (
          <div className="space-y-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Public Repos", value: stats.repos },
                { label: "Total Stars", value: stats.stars },
                { label: "Total Forks", value: stats.forks },
                { label: "Followers", value: stats.followers },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-gray-100 rounded-xl p-5 text-center hover:border-blue-100 transition-colors"
                >
                  <p className="text-3xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Top languages */}
            {stats.topLanguages.length > 0 && (
              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-400 mb-5">
                  Most Used Languages
                </h3>

                {/* Stacked bar */}
                <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-0.5">
                  {stats.topLanguages.map(({ lang, pct }) => (
                    <div
                      key={lang}
                      style={{
                        width: `${pct}%`,
                        backgroundColor: getLangColor(lang),
                      }}
                      title={`${lang}: ${pct}%`}
                      className="transition-all"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {stats.topLanguages.map(({ lang, pct }) => (
                    <div key={lang} className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: getLangColor(lang) }}
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {lang}
                      </span>
                      <span className="text-xs text-gray-400">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Link to profile */}
            <div className="text-center">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View full profile on GitHub
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400 text-sm">
            GitHub stats unavailable at this time.
          </div>
        )}
      </div>
    </section>
  );
}
