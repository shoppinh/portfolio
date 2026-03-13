const experiences = [
  {
    id: "niteco",
    company: "Niteco",
    role: "Full‑Stack Developer",
    period: "2022 — Present",
    summary:
      "Engineered scalable e-commerce platforms and high-traffic backend services using NestJS and ASP.NET Core. Optimized infrastructure availability through Azure DevOps automation and Terraform-led IaaS deployments.",
    isCurrent: true,
  },
  {
    id: "satsi",
    company: "SATSi",
    role: "Frontend Developer",
    period: "2021 — 2022",
    summary:
      "Constructed high-performance web interfaces with modern JavaScript frameworks. Focused on cross-browser compatibility and sub-second load optimizations for client-facing systems.",
    isCurrent: false,
  },
  {
    id: "vmg",
    company: "VMG Media",
    role: "Web Dev Intern",
    period: "2020",
    summary:
      "Assimilated into production workflows, developing monitoring interfaces for autonomous driving systems. Implemented real-time data visualization using Java and HTML/CSS/JS.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial" style={{ marginBottom: "var(--space-12)" }}>
          <div>
            <span className="section-label">Log.Career</span>
            <h2 style={{ borderBottom: "none" }}>Experience</h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Professional deployment history. Sorted chronologically, descending.
            </p>
          </div>
        </div>

        {/* Data Rows */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {experiences.map((exp) => (
            <div key={exp.id} className="row-item" style={{ gap: "var(--space-6)" }}>
              {/* Meta column */}
              <div style={{ flex: "0 0 250px", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <h3 style={{ fontSize: "1.5rem", margin: 0, color: exp.isCurrent ? "var(--text)" : "var(--text-secondary)" }}>
                  {exp.company}
                </h3>
                <span style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "0.75rem", 
                  color: exp.isCurrent ? "var(--accent)" : "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}>
                  {exp.period}
                </span>
                {exp.isCurrent && (
                  <span className="tag" style={{ alignSelf: "flex-start", marginTop: "var(--space-2)", borderColor: "var(--accent)", color: "var(--accent)" }}>
                    ACTIVE
                  </span>
                )}
              </div>

              {/* Data column */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <div style={{ fontSize: "1rem", fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--text)" }}>
                  {exp.role}
                </div>
                <p style={{ margin: 0, maxWidth: "100%", fontSize: "0.95rem" }}>
                  {exp.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
