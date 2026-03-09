const skillGroups = [
  {
    label: "Programming",
    skills: ["JavaScript", "TypeScript", "Python", "C#"],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "NextJS",
      "React Native",
      "Redux",
      "Tailwind",
      "Material UI",
    ],
  },
  {
    label: "Backend",
    skills: ["NestJS", "ASP.NET Core", "NodeJS"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
  },
  {
    label: "DevOps",
    skills: ["Azure DevOps", "Terraform", "CI/CD", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Expertise
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
