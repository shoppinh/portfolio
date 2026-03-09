export default function GitHubActivity() {
  const username = "shoppinh";

  return (
    <section id="github" className="py-24 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            Activity
          </p>
          <h2 className="text-3xl font-bold text-gray-900">GitHub Activity</h2>
        </div>

        <div className="space-y-6">
          {/* Contribution graph */}
          <div className="border border-gray-100 rounded-xl p-6 overflow-hidden">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Contribution Graph
            </h3>
            <img
              src={`https://ghchart.ssh.surf/${username}`}
              alt="GitHub contribution chart for shoppinh"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Stats cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=2563eb&icon_color=2563eb&text_color=374151`}
                alt="GitHub stats for shoppinh"
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=2563eb&text_color=374151`}
                alt="Top languages for shoppinh"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
