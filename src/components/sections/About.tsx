export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 0",
        borderTop: "1px solid rgba(0,245,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Label + heading */}
          <div>
            <p className="sys-label" style={{ marginBottom: "0.5rem" }}>
              &gt; SYS::ABOUT
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "var(--color-cyber-text)",
                letterSpacing: "0.03em",
                marginBottom: 0,
              }}
            >
              WHO I AM
            </h2>
          </div>

          {/* Content */}
          <div
            className="neon-border-left"
            style={{
              gridColumn: "span 2",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              color: "var(--color-cyber-muted)",
              lineHeight: 1.9,
              fontSize: "0.95rem",
            }}
          >
            <p>
              I am a full-stack software engineer with professional experience
              in building scalable web and mobile applications.
            </p>
            <p>
              My work focuses on modern frontend frameworks such as{" "}
              <span className="neon-cyan" style={{ fontWeight: 600 }}>
                React
              </span>{" "}
              and{" "}
              <span className="neon-cyan" style={{ fontWeight: 600 }}>
                Next.js
              </span>
              , backend systems using{" "}
              <span className="neon-pink" style={{ fontWeight: 600 }}>
                NestJS
              </span>{" "}
              and{" "}
              <span className="neon-pink" style={{ fontWeight: 600 }}>
                ASP.NET Core
              </span>
              , and cloud infrastructure automation using{" "}
              <span
                style={{ color: "var(--color-cyber-yellow)", fontWeight: 600 }}
              >
                Azure DevOps
              </span>{" "}
              and{" "}
              <span
                style={{ color: "var(--color-cyber-yellow)", fontWeight: 600 }}
              >
                Terraform
              </span>
              .
            </p>
            <p>
              I am particularly interested in distributed systems, scalable
              architectures and cloud computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
