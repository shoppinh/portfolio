"use client";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "var(--space-16)",
            alignItems: "start",
            maxWidth: "var(--max-content)",
          }}
          className="about-grid"
        >
          {/* Label + heading */}
          <div>
            <span className="section-label">About</span>
            <h2 style={{ fontSize: "1.6rem" }}>Who I Am</h2>
          </div>

          {/* Content */}
          <div
            className="border-accent"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-5)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              fontSize: "0.95rem",
            }}
          >
            <p>
              I am a full-stack software engineer with professional experience
              building scalable web and mobile applications for enterprise and
              consumer products.
            </p>
            <p>
              My focus spans modern frontend frameworks—{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                React
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Next.js
              </strong>
              —backend services with{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                NestJS
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                ASP.NET Core
              </strong>
              , and cloud infrastructure automation using{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Azure DevOps
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Terraform
              </strong>
              .
            </p>
            <p>
              I am particularly interested in distributed systems, event-driven
              architecture, and the engineering decisions that make systems
              reliable at scale.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
        }
      `}</style>
    </section>
  );
}
