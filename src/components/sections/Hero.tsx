"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        backgroundColor: "var(--bg)",
        position: "relative",
      }}
    >
      <div
        className="container"
        style={{
          padding: "var(--space-10) var(--space-6) var(--space-20)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "100%", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {/* Eyebrow - Tech Specs Style */}
          <div 
            className="fade-up"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "var(--space-4)", 
              marginBottom: "var(--space-6)" 
            }}
          >
            <span 
              className="tag" 
              style={{ 
                color: "var(--accent)", 
                borderColor: "var(--accent)",
                padding: "2px 6px" 
              }}
            >
              SYS.ACTIVE
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
              LOC://VIETNAM_REMOTE
            </span>
          </div>

          {/* Massive Typography Name */}
          <h1
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
              textTransform: "uppercase",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              marginLeft: "-0.5vw" // optical alignment
            }}
          >
            <div className={`reveal-text ${mounted ? 'is-visible' : ''}`} style={{ overflow: "hidden" }}>
              <span>KIEN MAC</span>
            </div>
            <div className={`reveal-text ${mounted ? 'is-visible' : ''}`} style={{ overflow: "hidden" }}>
              <span style={{ transitionDelay: "0.1s", color: "var(--text)" }}>TRUNG</span>
            </div>
            <div className={`reveal-text ${mounted ? 'is-visible' : ''}`} style={{ overflow: "hidden" }}>
              <span style={{ 
                transitionDelay: "0.2s", 
                WebkitTextStroke: "1px var(--text-secondary)", 
                color: "transparent" 
              }}>
                ENGINEER
              </span>
            </div>
          </h1>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: "var(--space-8)", 
            marginTop: "var(--space-12)",
            borderTop: "1px solid var(--border)",
            paddingTop: "var(--space-8)"
          }}>
            {/* Description */}
            <p
              className="fade-up-2"
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: 0,
              }}
            >
              Building scalable infrastructure and relentless frontends. Focused on creating uncompromising digital experiences through precise engineering and aggressive design. 
            </p>

            {/* CTAs */}
            <div
              className="fade-up-3"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-4)",
                alignItems: "center",
              }}
            >
              <a
                id="hero-view-projects"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-accent"
              >
                Execute: View Projects
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                id="hero-contact"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn"
              >
                Init: Contact
              </a>
            </div>
            
            {/* Social Links Grid */}
            <div className="fade-up-4" style={{ display: "flex", gap: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <a
                id="hero-github"
                href="https://github.com/shoppinh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  borderBottom: "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color var(--duration) var(--ease), border-color var(--duration) var(--ease)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                }}
              >
                {/* GitHub */}
                [GITHUB]
              </a>
              <a
                id="hero-linkedin"
                href="https://linkedin.com/in/kien-mac-trung-679829193"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  borderBottom: "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color var(--duration) var(--ease), border-color var(--duration) var(--ease)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
                }}
              >
                {/* LinkedIn */}
                [LINKEDIN]
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background structural lines */}
      <div style={{
        position: "absolute",
        top: 0, right: "20%", width: "1px", height: "100%",
        background: "var(--border)",
        zIndex: 1,
        opacity: 0.5
      }} />
      <div style={{
        position: "absolute",
        top: "60%", right: 0, width: "30%", height: "1px",
        background: "var(--border)",
        zIndex: 1,
        opacity: 0.5
      }} />
    </section>
  );
}
