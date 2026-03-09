const projects = [
  {
    id: "syncnsweat",
    type: "Personal Project",
    title: "SyncNSweat",
    description:
      "A scalable fitness tracking platform designed with a microservices architecture.",
    stack: ["React Native", "NestJS", "MongoDB", "Message Broker"],
    highlights: [
      "Workout tracking system",
      "Exercise library",
      "Playlist generator",
      "Distributed service architecture",
    ],
    link: "https://github.com/shoppinh",
    linkLabel: "GitHub Repository",
    hasPublicCode: true,
    accentColor: "var(--color-cyber-cyan)",
  },
  {
    id: "hustle",
    type: "Enterprise System",
    title: "Hustle App",
    description:
      "Internal enterprise super app used by employees for time tracking, event management and internal services.",
    stack: ["React Native", "React", ".NET Core"],
    highlights: [
      "Designed mobile frontend architecture",
      "Developed backend services",
      "Integrated internal enterprise systems",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
    accentColor: "var(--color-cyber-pink)",
  },
  {
    id: "ekoin",
    type: "Web App",
    title: "eKoin Loyalty Platform",
    description:
      "Customer loyalty platform integrated with the Zalo Mini App ecosystem.",
    stack: ["NextJS", "TailwindCSS", "OAuth2"],
    highlights: [
      "QR-based reward system",
      "API integrations",
      "Scalable frontend architecture",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
    accentColor: "var(--color-cyber-yellow)",
  },
  {
    id: "perf-monitor",
    type: "Internal Tool",
    title: "Performance Monitoring Tool",
    description:
      "Web-based system used to analyze SEO, performance, accessibility and traffic metrics.",
    stack: ["React", "NodeJS", "Azure Pipeline"],
    highlights: [
      "Data visualization dashboard",
      "Automated reporting system",
      "Performance analytics",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
    accentColor: "var(--color-cyber-cyan)",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(0,245,255,0.1)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="sys-label" style={{ marginBottom: "0.5rem" }}>
            &gt; SYS::WORK
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "var(--color-cyber-text)",
              letterSpacing: "0.03em",
              marginBottom: "0.5rem",
            }}
          >
            SELECTED PROJECTS
          </h2>
          <p style={{ color: "var(--color-cyber-muted)", fontSize: "0.85rem" }}>
            // Systems I&apos;ve designed and built.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="cyber-card"
              style={{
                borderRadius: "4px",
                padding: "1.75rem",
                borderTopColor: project.accentColor,
                borderTopWidth: "2px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "40px",
                  height: "40px",
                  borderBottom: `1px solid ${project.accentColor}`,
                  borderLeft: `1px solid ${project.accentColor}`,
                  opacity: 0.3,
                }}
              />

              {/* Type tag */}
              <div style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}`,
                    padding: "0.2rem 0.6rem",
                    opacity: 0.8,
                    textTransform: "uppercase",
                  }}
                >
                  [{project.type}]
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--color-cyber-text)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.03em",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--color-cyber-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "1.25rem",
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--color-cyber-pink)",
                      background: "rgba(255,0,170,0.08)",
                      border: "1px solid rgba(255,0,170,0.3)",
                      padding: "0.2rem 0.5rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    --{tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.83rem",
                      color: "var(--color-cyber-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <span style={{ color: project.accentColor, flexShrink: 0 }}>
                      &gt;
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Link or confidential */}
              {project.hasPublicCode && project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-cyber-cyan)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    borderBottom: "1px solid rgba(0,245,255,0.4)",
                    paddingBottom: "2px",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.linkLabel}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "rgba(74,122,155,0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  // SOURCE CONFIDENTIAL
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
