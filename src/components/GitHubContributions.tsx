import { GitBranch } from "lucide-react";

export default function GitHubContributions() {
  const username = "KennethMelendez";

  return (
    <section id="github" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-[#909090] hover:text-white transition-colors"
        >
          <GitBranch size={18} />
          <span>View Profile</span>
        </a>
      </div>
      <div className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-lg p-6 overflow-x-auto">
        <img
          src={`https://ghchart.rshah.org/aaaaaa/${username}`}
          alt="GitHub Contribution Graph"
          className="w-full max-w-full"
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>
    </section>
  );
}
