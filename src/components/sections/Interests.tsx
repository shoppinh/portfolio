"use client";

const interests = [
  {
    id: "DISTRIBUTED_SYS",
    title: "Distributed Systems",
    description: "Designing fault-tolerant systems scaling horizontally across multiple operational nodes.",
  },
  {
    id: "CLOUD_NAT",
    title: "Cloud Computing",
    description: "Orchestrating cloud-native infrastructure for aggressive, scalable deployments.",
  },
  {
    id: "SOFT_ARCH",
    title: "System Architecture",
    description: "Drafting strict, modular architectures balancing severe complexity with ultimate maintainability.",
  },
  {
    id: "MICRO_SVCS",
    title: "Microservices",
    description: "Fracturing monoliths into independently deployable, brutally decoupled services.",
  },
  {
    id: "HIGH_TPUT",
    title: "Scalable Backends",
    description: "Engineering high-throughput data pipelines designed to withstand absolute load.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial" style={{ marginBottom: "var(--space-12)" }}>
          <div>
            <span className="section-label">Research_Domains</span>
            <h2 style={{ borderBottom: "none" }}>Engineering Focus</h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>
              Core focus vectors.
            </p>
          </div>
        </div>

        {/* Data Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {interests.map((item, index) => (
            <div
              key={item.id}
              className="fade-up"
              style={{
                background: "var(--bg)",
                padding: "var(--space-8) var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "var(--text)",
                    margin: 0,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase"
                  }}
                >
                  {item.title}
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)" }}>
                  [{item.id}]
                </span>
              </div>
              
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "var(--font-mono)"
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
