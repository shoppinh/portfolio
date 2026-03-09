const interests = [
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    description:
      "Designing fault-tolerant systems that scale horizontally across multiple nodes.",
    icon: "⚡",
    accent: "var(--color-cyber-cyan)",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Leveraging cloud-native infrastructure for scalable, cost-efficient deployments.",
    icon: "☁",
    accent: "var(--color-cyber-pink)",
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Crafting clean, modular architectures that balance complexity and maintainability.",
    icon: "🏗",
    accent: "var(--color-cyber-yellow)",
  },
  {
    id: "microservices",
    title: "Microservices",
    description:
      "Breaking monoliths into independently deployable, loosely coupled services.",
    icon: "🔧",
    accent: "var(--color-cyber-cyan)",
  },
  {
    id: "scalable-backend",
    title: "Scalable Backend Systems",
    description:
      "Building high-throughput APIs and data pipelines designed to handle demanding loads.",
    icon: "📈",
    accent: "var(--color-cyber-pink)",
  },
];

export default function Interests() {
  return (
    <section
      id="interests"
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
            &gt; SYS::RESEARCH
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "var(--color-cyber-text)",
              letterSpacing: "0.03em",
              marginBottom: "0.5rem",
            }}
          >
            ENGINEERING INTERESTS
          </h2>
          <p style={{ color: "var(--color-cyber-muted)", fontSize: "0.85rem" }}>
            // Areas of deep technical interest relevant to graduate research.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {interests.map((item) => (
            <div
              key={item.id}
              id={`interest-${item.id}`}
              className="cyber-card"
              style={{
                borderRadius: "4px",
                padding: "1.5rem",
                cursor: "default",
              }}
            >
              {/* Icon with neon bg */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: `${item.accent}18`,
                  border: `1px solid ${item.accent}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--color-cyber-text)",
                  letterSpacing: "0.03em",
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--color-cyber-muted)",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>

              {/* Bottom accent bar */}
              <div
                style={{
                  marginTop: "1.25rem",
                  height: "1px",
                  background: `linear-gradient(to right, ${item.accent}60, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
