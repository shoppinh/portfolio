"use client";

const projects = [
  {
    id: "syncnsweat",
    type: "Personal Project",
    title: "SyncNSweat",
    description:
      "A scalable fitness tracking platform built with a microservices architecture, enabling real-time workout sync across devices.",
    stack: ["React Native", "NestJS", "MongoDB", "Message Broker"],
    highlights: [
      "Workout tracking system with distributed service architecture",
      "Exercise library with personalized recommendations",
      "Playlist generator integrated with music APIs",
    ],
    link: "https://github.com/shoppinh",
    linkLabel: "GitHub Repository",
    hasPublicCode: true,
  },
  {
    id: "hustle",
    type: "Enterprise",
    title: "Hustle App",
    description:
      "Internal enterprise super app used by employees for time tracking, event management, and internal services.",
    stack: ["React Native", "React", ".NET Core"],
    highlights: [
      "Designed mobile frontend architecture from the ground up",
      "Developed backend services and REST APIs",
      "Integrated proprietary enterprise HR systems",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
  {
    id: "ekoin",
    type: "Web App",
    title: "eKoin Loyalty Platform",
    description:
      "Customer loyalty platform integrated with the Zalo Mini App ecosystem, enabling QR-based point redemption.",
    stack: ["Next.js", "TailwindCSS", "OAuth2"],
    highlights: [
      "QR-based reward system with real-time validation",
      "OAuth2 API integrations with third-party services",
      "Scalable frontend architecture for high-traffic events",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
  {
    id: "perf-monitor",
    type: "Internal Tool",
    title: "Performance Monitoring Tool",
    description:
      "Web-based analytics system for tracking SEO, accessibility, performance, and traffic metrics across client pages.",
    stack: ["React", "Node.js", "Azure Pipeline"],
    highlights: [
      "Data visualization dashboard with automated reporting",
      "Lighthouse-integrated performance scoring pipeline",
      "Scheduled CI/CD-driven metric collection",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem", maxWidth: "var(--max-content)" }}>
          <span className="section-label">Selected Work</span>
          <h2 style={{ marginBottom: "0.75rem" }}>Projects</h2>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            A selection of systems I&apos;ve designed and built — personal and professional.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: "var(--space-5)",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Type + Title */}
              <div style={{ marginBottom: "var(--space-4)" }}>
                <span className="tag" style={{ marginBottom: "var(--space-3)", display: "inline-block" }}>
                  {project.type}
                </span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-5)",
                }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 var(--space-5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  flex: 1,
                }}
              >
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--space-3)",
                      fontSize: "0.83rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        marginTop: "0.45rem",
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-5)",
                }}
              >
                {project.stack.map((tech) => (
                  <span key={tech} className="tag tag-accent">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer link */}
              {project.hasPublicCode && project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--accent)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(37,99,235,0.3)",
                    paddingBottom: "1px",
                    alignSelf: "flex-start",
                    transition: "border-color var(--duration) var(--ease)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                      "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                      "rgba(37,99,235,0.3)")
                  }
                >
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
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
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Source confidential
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
