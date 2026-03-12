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
    linkLabel: "GitHub",
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
    title: "eKoin Loyalty",
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
    title: "PerfMonitor",
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
              style={{ padding: "var(--space-8) 0", animationDelay: `${index * 0.1}s` }}
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
                    <span key={tech} className="tag tag-accent">
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
                  >
                     EXEC:{project.linkLabel}
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
