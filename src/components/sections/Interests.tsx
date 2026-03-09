const interests = [
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    description:
      "Designing fault-tolerant systems that scale horizontally across multiple nodes.",
    icon: "⚡",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Leveraging cloud-native infrastructure for scalable, cost-efficient deployments.",
    icon: "☁️",
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Crafting clean, modular architectures that balance complexity and maintainability.",
    icon: "🏗️",
  },
  {
    id: "microservices",
    title: "Microservices",
    description:
      "Breaking monoliths into independently deployable, loosely coupled services.",
    icon: "🔧",
  },
  {
    id: "scalable-backend",
    title: "Scalable Backend Systems",
    description:
      "Building high-throughput APIs and data pipelines designed to handle demanding loads.",
    icon: "📈",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Research Focus
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Engineering Interests
          </h2>
          <p className="text-gray-500 mt-2">
            Areas of deep technical interest relevant to graduate research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((item) => (
            <div
              key={item.id}
              id={`interest-${item.id}`}
              className="border border-gray-100 rounded-xl p-6 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
