"use client";

const interests = [
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    description:
      "Designing fault-tolerant systems that scale horizontally across multiple nodes.",
    icon: "⚡",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Leveraging cloud-native infrastructure for scalable, cost-efficient deployments.",
    icon: "☁",
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Crafting clean, modular architectures that balance complexity with maintainability.",
    icon: "🏗",
  },
  {
    id: "microservices",
    title: "Microservices",
    description:
      "Breaking monoliths into independently deployable, loosely coupled services.",
    icon: "⚙",
  },
  {
    id: "scalable-backend",
    title: "Scalable Backend Systems",
    description:
      "Building high-throughput APIs and data pipelines designed to handle demanding loads.",
    icon: "📈",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem", maxWidth: "var(--max-content)" }}>
          <span className="section-label">Research Interests</span>
          <h2>Engineering Focus Areas</h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "var(--space-4)",
            maxWidth: "var(--max-content)",
          }}
        >
          {interests.map((item) => (
            <div
              key={item.id}
              id={`interest-${item.id}`}
              className="card"
              style={{ cursor: "default" }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--accent-subtle)",
                  border: "1px solid rgba(37,99,235,0.15)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginBottom: "var(--space-4)",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "var(--space-3)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
