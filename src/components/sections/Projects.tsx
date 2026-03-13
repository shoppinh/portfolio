const projects = [
  {
    id: "syncnsweat",
    type: "Personal Project",
    title: "SyncNSweat",
    description:
      "A scalable fitness tracking platform architected with microservices to support distributed data synchronization and high-availability workout telemetry.",
    stack: ["React Native", "NestJS", "MongoDB", "Microservices"],
    highlights: [
      "Designed for distributed system performance",
      "Real-time state synchronization across platforms",
      "Integrated health metrics processing engine",
    ],
    link: "https://github.com/shoppinh",
    linkLabel: "GitHub",
    hasPublicCode: true,
  },
  {
    id: "hustle",
    type: "Enterprise",
    title: "Hustle App",
    description:
      "Internal enterprise super-application streamlining employee operations including real-time time tracking and event management services.",
    stack: ["React Native", "React", ".NET Core"],
    highlights: [
      "Engineered mobile-first architecture for enterprise scale",
      "Integrated proprietary HR data synchronization protocols",
      "Optimized for high-concurrency internal usage",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
  {
    id: "ekoin",
    type: "Web App",
    title: "eKoin Loyalty",
    description:
      "Scalable loyalty engine integrated with the Zalo Mini App ecosystem, utilizing high-performance Next.js architectures for heavy seasonal traffic.",
    stack: ["Next.js", "TailwindCSS", "OAuth2", "Zalo SDK"],
    highlights: [
      "QR-based reward redemption with real-time validation",
      "High-traffic frontend architecture optimized for Vercel",
      "Seamless Zalo ecosystem integration",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial" style={{ marginBottom: "var(--space-12)" }}>
          <div>
            <span className="section-label">Log.Projects</span>
            <h2 style={{ borderBottom: "none" }}>Systems Built</h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Selected architecture catalog.
            </p>
          </div>
        </div>

        {/* Rows List */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="row-item fade-up"
              style={{ paddingTop: "var(--space-8)", paddingBottom: "var(--space-8)", animationDelay: `${index * 0.1}s` }}
            >
              {/* Type Grid */}
              <div style={{ flex: "0 0 200px", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <span className="tag" style={{ alignSelf: "flex-start", color: "var(--text)" }}>
                  {project.type}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)" }}>
                  ID: {project.id.toUpperCase()}
                </span>
              </div>

              {/* Subject Grid */}
              <div style={{ flex: "1" }}>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--text)",
                    lineHeight: 1,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    margin: "0 0 var(--space-4) 0",
                  }}
                >
                  {project.title}
                </h3>
                
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "80%", marginBottom: "var(--space-4)" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Grid */}
              <div style={{ flex: "0 0 150px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                {project.hasPublicCode && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                    style={{ padding: "var(--space-2) var(--space-4)", fontSize: "0.7rem" }}
                  >EXEC:{project.linkLabel}
                  </a>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--border-hover)",
                      border: "1px solid var(--border)",
                      padding: "var(--space-2) var(--space-3)",
                      background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)"
                    }}
                  >
                    ACCESS_DENIED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
