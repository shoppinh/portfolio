const experiences = [
  {
    id: "niteco",
    company: "Niteco",
    role: "Full‑Stack Developer",
    period: "2022 — Present",
    summary:
      "Developing scalable web and mobile applications for enterprise clients using modern frontend frameworks and backend microservices.",
    isCurrent: true,
  },
  {
    id: "satsi",
    company: "SATSi",
    role: "Frontend Developer",
    period: "2021 — 2022",
    summary:
      "Built and maintained frontend interfaces for client-facing web applications.",
    isCurrent: false,
  },
  {
    id: "vmg",
    company: "VMG Media",
    role: "Web Development Intern",
    period: "2020",
    summary:
      "Contributed to web development projects, gaining hands-on industry experience.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(0,245,255,0.1)",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div style={{ marginBottom: "3.5rem" }}>
          <p className="sys-label" style={{ marginBottom: "0.5rem" }}>
            &gt; SYS::CAREER
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
            EXPERIENCE
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* Vertical neon timeline line */}
          <div
            style={{
              position: "absolute",
              left: "15px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--color-cyber-cyan), rgba(0,245,255,0.1))",
              boxShadow: "0 0 6px rgba(0,245,255,0.4)",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                style={{
                  position: "relative",
                  paddingLeft: "52px",
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "4px",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Outer ring */}
                  <div
                    style={{
                      position: "absolute",
                      width: "26px",
                      height: "26px",
                      border: `1px solid ${exp.isCurrent ? "var(--color-cyber-cyan)" : "rgba(0,245,255,0.2)"}`,
                      background: "var(--color-cyber-bg)",
                    }}
                  />
                  {/* Inner dot */}
                  <div
                    style={{
                      position: "relative",
                      width: "10px",
                      height: "10px",
                      background: exp.isCurrent
                        ? "var(--color-cyber-cyan)"
                        : "rgba(0,245,255,0.25)",
                      boxShadow: exp.isCurrent
                        ? "0 0 10px var(--color-cyber-cyan), 0 0 20px rgba(0,245,255,0.4)"
                        : "none",
                      animation: exp.isCurrent
                        ? "neon-pulse 2s ease-in-out infinite"
                        : undefined,
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-cyber-text)",
                          letterSpacing: "0.04em",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="neon-pink"
                        style={{
                          fontSize: "0.8rem",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        padding: "0.25rem 0.75rem",
                        border: `1px solid ${exp.isCurrent ? "var(--color-cyber-cyan)" : "rgba(0,245,255,0.15)"}`,
                        color: exp.isCurrent
                          ? "var(--color-cyber-cyan)"
                          : "var(--color-cyber-muted)",
                        background: exp.isCurrent
                          ? "rgba(0,245,255,0.06)"
                          : "transparent",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.83rem",
                      color: "var(--color-cyber-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
