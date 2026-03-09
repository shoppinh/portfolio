"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
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
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(5,10,15,0.97)" : "rgba(5,10,15,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,245,255,0.25)",
        boxShadow: scrolled ? "0 2px 32px rgba(0,245,255,0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="glitch"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.4rem",
            letterSpacing: "0.05em",
            color: "var(--color-cyber-cyan)",
            textDecoration: "none",
            textShadow:
              "0 0 10px var(--color-cyber-cyan), 0 0 30px rgba(0,245,255,0.3)",
          }}
        >
          KM<span style={{ color: "var(--color-cyber-pink)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden-mobile"
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
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-cyber-muted)",
                textDecoration: "none",
                transition: "color 0.2s, text-shadow 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "var(--color-cyber-cyan)";
                (e.target as HTMLAnchorElement).style.textShadow =
                  "0 0 8px var(--color-cyber-cyan)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "var(--color-cyber-muted)";
                (e.target as HTMLAnchorElement).style.textShadow = "none";
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
          style={{
            background: "none",
            border:
              "1px solid " +
              (isOpen ? "var(--color-cyber-cyan)" : "rgba(0,245,255,0.3)"),
            color: "var(--color-cyber-cyan)",
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          <div
            style={{
              width: "18px",
              height: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display: "block",
                height: "1px",
                background: "currentColor",
                transition: "all 0.3s",
                transform: isOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : undefined,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1px",
                background: "currentColor",
                transition: "all 0.3s",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1px",
                background: "currentColor",
                transition: "all 0.3s",
                transform: isOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : undefined,
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "280px" : "0",
          transition: "max-height 0.3s ease",
          borderTop: isOpen ? "1px solid rgba(0,245,255,0.15)" : "none",
          backgroundColor: "rgba(5,10,15,0.98)",
        }}
        className="mobile-nav"
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem 1.5rem 1rem",
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
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-cyber-muted)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(0,245,255,0.08)",
              }}
            >
              <span
                style={{
                  color: "var(--color-cyber-cyan)",
                  marginRight: "0.5rem",
                }}
              >
                &gt;
              </span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
