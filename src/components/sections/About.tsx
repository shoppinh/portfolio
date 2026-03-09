export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
              About
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Who I am</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I am a full-stack software engineer with professional experience
              in building scalable web and mobile applications.
            </p>
            <p>
              My work focuses on modern frontend frameworks such as{" "}
              <span className="font-medium text-gray-800">React</span> and{" "}
              <span className="font-medium text-gray-800">Next.js</span>,
              backend systems using{" "}
              <span className="font-medium text-gray-800">NestJS</span> and{" "}
              <span className="font-medium text-gray-800">ASP.NET Core</span>,
              and cloud infrastructure automation using{" "}
              <span className="font-medium text-gray-800">Azure DevOps</span>{" "}
              and <span className="font-medium text-gray-800">Terraform</span>.
            </p>
            <p>
              I am particularly interested in distributed systems, scalable
              architectures and cloud computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
