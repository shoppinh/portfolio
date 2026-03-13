export default function Footer() {
  return (
    <footer
      className="section"
      style={{
        paddingTop: "var(--space-20)",
        paddingBottom: "var(--space-6)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Massive Typography Element */}
        <div 
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 15vw, 15rem)",
            fontWeight: 800,
            lineHeight: 0.8,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "var(--bg)",
            WebkitTextStroke: "1px var(--border-hover)",
            whiteSpace: "nowrap",
            marginBottom: "var(--space-16)",
            marginLeft: "-2vw", // Push outside bounds a bit
            opacity: 0.5,
          }}
        >
          Kien  Mac  Trung
        </div>

        {/* Engineered Meta Data Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-6)",
            borderTop: "1px solid var(--border)",
            paddingTop: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              System.Status( <span style={{ color: "var(--accent)" }}>Online</span> )
            </span>
          </div>

          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.05em",
              }}
            >
              [ © 2026 KMT ]
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.05em",
              }}
            >
              v2.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

