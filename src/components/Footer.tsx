export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "var(--space-8) 0",
        marginTop: "var(--space-12)",
        backgroundColor: "var(--bg-soft)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-4)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--muted)",
            letterSpacing: "0.03em",
          }}
        >
          © 2026 Kien Mac Trung
        </span>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--border)",
            letterSpacing: "0.05em",
          }}
        >
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
