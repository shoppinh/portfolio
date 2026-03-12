"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--nav-height)",
        backgroundColor: scrolled ? "var(--surface)" : "transparent",
        borderBottom: "1px solid",
        borderColor: scrolled ? "var(--border)" : "transparent",
        transition: "background-color 0.3s var(--ease), border-color 0.3s var(--ease)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-layout)",
          margin: "0 auto",
          padding: "0 var(--space-6)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brutalist Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.25rem",
            letterSpacing: "-0.05em",
            color: "var(--text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          K<span style={{ color: "var(--accent)" }}>M</span>T
          <span style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.6rem", 
            marginLeft: "var(--space-2)",
            color: "var(--muted)",
            fontWeight: "normal"
          }}>
            [SYS_RDY]
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-6)",
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                transition: "color var(--duration) var(--ease)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                borderBottom: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                (e.currentTarget.querySelector('.nav-index') as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                (e.currentTarget.querySelector('.nav-index') as HTMLElement).style.color = "var(--muted)";
              }}
            >
              <span 
                className="nav-index"
                style={{ 
                  fontSize: "0.65rem", 
                  color: "var(--muted)",
                  transition: "color var(--duration) var(--ease)"
                }}
              >
                0{index + 1}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger (Industrial lines) */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            cursor: "pointer",
            display: "none",
            padding: "var(--space-2)",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "2px",
                  background: "currentColor",
                  transition: "all 0.3s var(--ease)",
                  transform:
                    i === 0 && isOpen
                      ? "rotate(45deg) translate(2px, 2px)"
                      : i === 1 && isOpen
                      ? "rotate(-45deg) translate(4px, -3px)"
                      : undefined,
                  transformOrigin: "left center"
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu - Drop down severe box */}
      <div
        className="nav-mobile"
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "400px" : "0",
          transition: "max-height 0.4s var(--ease)",
          backgroundColor: "var(--surface)",
          borderBottom: isOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "var(--space-6)",
          }}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--text)",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "var(--space-3) 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {link.label}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "var(--accent)" }}>
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .nav-hamburger { display: none !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
