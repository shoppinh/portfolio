"use client";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C#"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "React Native", "Redux", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    skills: ["NestJS", "ASP.NET Core", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Azure DevOps", "Terraform", "Docker", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem", maxWidth: "var(--max-content)" }}>
          <span className="section-label">Expertise</span>
          <h2>Technical Skills</h2>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "var(--space-10)",
            maxWidth: "var(--max-content)",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "var(--space-4)",
                  paddingBottom: "var(--space-3)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {group.category}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                      transition: "color var(--duration) var(--ease)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLLIElement).style.color =
                        "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLLIElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
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
