const projects = [
  {
    id: "syncnsweat",
    type: "Personal Project",
    title: "SyncNSweat",
    description:
      "A scalable fitness tracking platform designed with a microservices architecture.",
    stack: ["React Native", "NestJS", "MongoDB", "Message Broker"],
    highlights: [
      "Workout tracking system",
      "Exercise library",
      "Playlist generator",
      "Distributed service architecture",
    ],
    link: "https://github.com/shoppinh",
    linkLabel: "GitHub Repository",
    hasPublicCode: true,
  },
  {
    id: "hustle",
    type: "Enterprise System",
    title: "Hustle App",
    description:
      "Internal enterprise super app used by employees for time tracking, event management and internal services.",
    stack: ["React Native", "React", ".NET Core"],
    highlights: [
      "Designed mobile frontend architecture",
      "Developed backend services",
      "Integrated internal enterprise systems",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
  {
    id: "ekoin",
    type: "Web App",
    title: "eKoin Loyalty Platform",
    description:
      "Customer loyalty platform integrated with the Zalo Mini App ecosystem.",
    stack: ["NextJS", "TailwindCSS", "OAuth2"],
    highlights: [
      "QR-based reward system",
      "API integrations",
      "Scalable frontend architecture",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
  {
    id: "perf-monitor",
    type: "Internal Tool",
    title: "Performance Monitoring Tool",
    description:
      "Web-based system used to analyze SEO, performance, accessibility and traffic metrics.",
    stack: ["React", "NodeJS", "Azure Pipeline"],
    highlights: [
      "Data visualization dashboard",
      "Automated reporting system",
      "Performance analytics",
    ],
    link: null,
    linkLabel: null,
    hasPublicCode: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Work
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Selected Projects
          </h2>
          <p className="text-gray-500 mt-2">
            Systems I&apos;ve designed and built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="group border border-gray-100 rounded-xl p-7 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Link or confidentiality note */}
              {project.hasPublicCode && project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.linkLabel}
                </a>
              ) : (
                <span className="text-xs text-gray-400 italic">
                  Source code confidential
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
