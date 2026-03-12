"use client";

const skillGroups = [
  {
    category: "SYS.LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Python", "C#"],
  },
  {
    category: "SYS.FRONTEND",
    skills: ["React", "Next.js", "React Native", "TailwindCSS"],
  },
  {
    category: "SYS.BACKEND",
    skills: ["NestJS", "ASP.NET Core", "Node.js", "Express"],
  },
  {
    category: "SYS.DATA",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    category: "SYS.OPS",
    skills: ["Docker", "Terraform", "Azure DevOps", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial" style={{ marginBottom: "var(--space-12)" }}>
          <div>
            <span className="section-label">Capabilities</span>
            <h2 style={{ borderBottom: "none" }}>Technical Specs</h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>
              Initialized stack parameters.
            </p>
          </div>
        </div>

        {/* Skills dense spec-sheet */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px", // 1px gap for border effect
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {skillGroups.map((group) => (
            <div 
              key={group.category}
              style={{
                background: "var(--bg)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-5)"
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)"
                }}
              >
                <span style={{ display: "inline-block", width: "8px", height: "8px", background: "var(--accent)" }} />
                {group.category}
              </h3>
              
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                }}
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      background: "var(--surface)",
                      padding: "var(--space-2) var(--space-3)",
                      border: "1px solid transparent",
                      transition: "all var(--duration) var(--ease)",
                      cursor: "crosshair",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLLIElement).style.color = "var(--bg)";
                      (e.currentTarget as HTMLLIElement).style.background = "var(--text)";
                      (e.currentTarget as HTMLLIElement).style.borderColor = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLLIElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLLIElement).style.background = "var(--surface)";
                      (e.currentTarget as HTMLLIElement).style.borderColor = "transparent";
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
