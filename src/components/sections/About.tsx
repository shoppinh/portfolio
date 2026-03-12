"use client";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid-editorial">
          {/* Label + heading */}
          <div>
            <span className="section-label">Identity_Module</span>
            <h2 style={{ borderBottom: "none", marginBottom: "var(--space-4)" }}>Who I Am</h2>
            <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginBottom: "var(--space-8)" }} />
          </div>

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
              paddingLeft: "var(--space-6)",
              borderLeft: "1px solid var(--border)",
            }}
          >
            <p style={{ fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.6, maxWidth: "100%" }}>
              I am a full-stack software engineer with more than four years of professional experience building resilient web and mobile applications for enterprise environments.
            </p>
            
            <p style={{ fontSize: "0.9rem", maxWidth: "100%" }}>
              My engineering focus is distributed across modern frontend architectures—<strong style={{ color: "var(--accent)" }}>React</strong> and <strong style={{ color: "var(--accent)" }}>Next.js</strong>—and scalable backend services powered by <strong style={{ color: "var(--text)" }}>NestJS</strong> and <strong style={{ color: "var(--text)" }}>ASP.NET Core</strong>. 
              I automate cloud infrastructure seamlessly using <span className="tag">Azure DevOps</span> and <span className="tag">Terraform</span>.
            </p>
            
            <p style={{ fontSize: "0.9rem", maxWidth: "100%" }}>
              I am obsessed with distributed systems, cloud computing, and the severe, uncompromising engineering decisions required to make systems reliable under absolute scale. 
              Currently seeking to deepen theoretical knowledge through graduate studies in computer science.
            </p>

            <div style={{ marginTop: "var(--space-4)" }}>
              <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
                <span className="tag" style={{ color: "var(--text)" }}>[STATUS] ACTIVE_SEEKING</span>
                <span className="tag" style={{ color: "var(--text)" }}>[BASE] VIETNAM_HANOI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
