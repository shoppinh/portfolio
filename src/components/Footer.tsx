export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,245,255,0.2)",
        boxShadow: "0 -1px 20px rgba(0,245,255,0.05)",
        padding: "2rem 0",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--color-cyber-muted)",
          letterSpacing: "0.08em",
        }}
      >
        <span className="neon-cyan" style={{ opacity: 0.5 }}>
          //
        </span>
        <span>&copy; 2026 KIEN MAC TRUNG</span>
        <span style={{ color: "rgba(0,245,255,0.2)" }}>|</span>
        <span style={{ color: "rgba(74,122,155,0.5)" }}>
          ALL SYSTEMS OPERATIONAL
        </span>
      </div>
    </footer>
  );
}
