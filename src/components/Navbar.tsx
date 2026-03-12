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
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        transition: "box-shadow 0.25s var(--ease), background-color 0.25s var(--ease)",
        boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
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
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "var(--text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          KM
          <span style={{ color: "var(--accent)", fontWeight: 700 }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-8)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color var(--duration) var(--ease)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-secondary)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--text-secondary)",
            padding: "0.45rem 0.65rem",
            cursor: "pointer",
            display: "none",
            lineHeight: 1,
          }}
        >
          <div
            style={{
              width: "18px",
              height: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "currentColor",
                  borderRadius: "2px",
                  transition: "all 0.25s var(--ease)",
                  transform:
                    i === 0 && isOpen
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2 && isOpen
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : undefined,
                  opacity: i === 1 && isOpen ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="nav-mobile"
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "320px" : "0",
          transition: "max-height 0.3s var(--ease)",
          backgroundColor: "var(--bg)",
          borderTop: isOpen ? "1px solid var(--border)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "var(--space-3) var(--space-6) var(--space-5)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "color var(--duration) var(--ease)",
              }}
            >
              {link.label}
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
