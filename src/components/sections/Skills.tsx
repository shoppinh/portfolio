"use client";

const skillGroups = [
  {
    label: "Programming",
    skills: ["JavaScript", "TypeScript", "Python", "C#"],
    accent: "#00f5ff",
    accentVar: "var(--color-cyber-cyan)",
    pillClass: "skill-pill skill-pill-cyan",
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "NextJS",
      "React Native",
      "Redux",
      "Tailwind",
      "Material UI",
    ],
    accent: "#ff00aa",
    accentVar: "var(--color-cyber-pink)",
    pillClass: "skill-pill skill-pill-pink",
  },
  {
    label: "Backend",
    skills: ["NestJS", "ASP.NET Core", "NodeJS"],
    accent: "#eeff00",
    accentVar: "var(--color-cyber-yellow)",
    pillClass: "skill-pill skill-pill-yellow",
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
    accent: "#00f5ff",
    accentVar: "var(--color-cyber-cyan)",
    pillClass: "skill-pill skill-pill-cyan",
  },
  {
    label: "DevOps",
    skills: ["Azure DevOps", "Terraform", "CI/CD", "Docker"],
    accent: "#ff00aa",
    accentVar: "var(--color-cyber-pink)",
    pillClass: "skill-pill skill-pill-pink",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(0,245,255,0.1)",
      }}
    >
      <style>{`
        .skill-pill {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-cyber-muted);
          background: rgba(0,245,255,0.04);
          border: 1px solid rgba(0,245,255,0.15);
          padding: 0.3rem 0.7rem;
          letter-spacing: 0.04em;
          cursor: default;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .skill-pill-cyan:hover {
          border-color: var(--color-cyber-cyan);
          color: var(--color-cyber-cyan);
          box-shadow: 0 0 8px rgba(0,245,255,0.25);
        }
        .skill-pill-pink:hover {
          border-color: var(--color-cyber-pink);
          color: var(--color-cyber-pink);
          box-shadow: 0 0 8px rgba(255,0,170,0.25);
        }
        .skill-pill-yellow:hover {
          border-color: var(--color-cyber-yellow);
          color: var(--color-cyber-yellow);
          box-shadow: 0 0 8px rgba(238,255,0,0.25);
        }
      `}</style>

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="sys-label" style={{ marginBottom: "0.5rem" }}>
            &gt; SYS::EXPERTISE
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
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: group.accentVar,
                  marginBottom: "1rem",
                  textShadow: `0 0 6px ${group.accent}`,
                  borderBottom: `1px solid ${group.accent}50`,
                  paddingBottom: "0.4rem",
                  opacity: 0.9,
                }}
              >
                :: {group.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span key={skill} className={group.pillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
