"use client";

const contactLinks = [
  {
    id: "contact-email",
    label: "Email Protocol",
    value: "mactrungkien2000@gmail.com",
    href: "mailto:mactrungkien2000@gmail.com",
  },
  {
    id: "contact-github",
    label: "Git Repository",
    value: "github.com/shoppinh",
    href: "https://github.com/shoppinh",
  },
  {
    id: "contact-linkedin",
    label: "Professional Network",
    value: "linkedin.com/in/kien-mac-trung",
    href: "https://linkedin.com/in/kien-mac-trung-679829193",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="grid-editorial">
          {/* Label + heading */}
          <div>
            <span className="section-label">Communication_Interface</span>
            <h2 style={{ borderBottom: "none", marginBottom: "var(--space-4)" }}>Initialize Connect</h2>
            <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginBottom: "var(--space-8)" }} />
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {contactLinks.map((item) => (
              <a
                key={item.id}
                id={item.id}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="row-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  gap: "var(--space-4)",
                  alignItems: "center",
                  padding: "var(--space-6) var(--space-4)",
                  borderBottom: "1px solid var(--border)", // Re-apply for inner items
                  textDecoration: "none",
                  margin: 0
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  [{item.label}]
                </div>
                
                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text)",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </div>
                
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                  }}
                >
                  CONNECT
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
