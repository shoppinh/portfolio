const experiences = [
  {
    id: "niteco",
    company: "Niteco",
    role: "Full‑Stack Developer",
    period: "2022 — Present",
    summary:
      "Developing scalable web and mobile applications for enterprise clients using modern frontend frameworks and backend microservices.",
    isCurrent: true,
  },
  {
    id: "satsi",
    company: "SATSi",
    role: "Frontend Developer",
    period: "2021 — 2022",
    summary:
      "Built and maintained frontend interfaces for client-facing web applications.",
    isCurrent: false,
  },
  {
    id: "vmg",
    company: "VMG Media",
    role: "Web Development Intern",
    period: "2020",
    summary:
      "Contributed to web development projects, gaining hands-on industry experience.",
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Career
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-100 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                id={`exp-${exp.id}`}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-gray-200 items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? "bg-blue-600" : "bg-gray-300"}`}
                  />
                </div>

                <div className="group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        exp.isCurrent
                          ? "bg-blue-50 text-blue-600"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
