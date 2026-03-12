"use client";

const experiences = [
  {
    id: "niteco",
    company: "Niteco",
    role: "Full‑Stack Developer",
    period: "2022 — Present",
    summary:
      "Developing scalable web and mobile applications for enterprise clients using modern frontend frameworks and backend microservices. Responsible for frontend architecture decisions and backend service design.",
    isCurrent: true,
  },
  {
    id: "satsi",
    company: "SATSi",
    role: "Frontend Developer",
    period: "2021 — 2022",
    summary:
      "Built and maintained frontend interfaces for client-facing web applications. Implemented responsive layouts and component libraries.",
    isCurrent: false,
  },
  {
    id: "vmg",
    company: "VMG Media",
    role: "Web Development Intern",
    period: "2020",
    summary:
      "Contributed to web development projects, gaining hands-on industry experience with production codebases.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem", maxWidth: "var(--max-content)" }}>
          <span className="section-label">Career</span>
          <h2>Experience</h2>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "var(--max-content)",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "12px",
              bottom: "12px",
              width: "1px",
              background: "var(--border)",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-10)",
            }}
          >
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                style={{
                  position: "relative",
                  paddingLeft: "var(--space-8)",
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "12px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: exp.isCurrent ? "var(--accent)" : "var(--bg)",
                    border: `2px solid ${exp.isCurrent ? "var(--accent)" : "var(--border)"}`,
                    boxShadow: exp.isCurrent
                      ? "0 0 0 3px rgba(37,99,235,0.15)"
                      : "none",
                  }}
                />

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "var(--space-4)",
                      flexWrap: "wrap",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: "2px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: exp.isCurrent ? "var(--accent)" : "var(--muted)",
                          fontWeight: 500,
                        }}
                      >
                        {exp.role}
                      </p>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--muted)",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "0.25rem 0.6rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
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
