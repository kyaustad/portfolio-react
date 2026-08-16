import { Suspense } from "react";
import { getGitHubStats, type GitHubStatsPayload } from "@/lib/github-stats";

function StatsCard({
  title,
  value,
  icon,
  delay = 0,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="cyber-panel animate-fade-in-up border-cyber-cyan/30 p-4 transition-all duration-300 hover:border-cyber-cyan/60 sm:p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl text-cyber-cyan">{icon}</div>
        <div className="min-w-0">
          <div className="mb-1 break-words text-2xl font-bold text-white sm:text-3xl">
            {Number.isFinite(value) ? value.toLocaleString() : "0"}
          </div>
          <div className="font-cyber-mono text-xs tracking-wider text-cyber-muted">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <div className="mx-auto mb-2 h-8 w-48 animate-pulse rounded bg-cyber-elevated" />
        <div className="mx-auto h-4 w-32 animate-pulse rounded bg-cyber-elevated" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="cyber-panel animate-pulse border-cyber-line p-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded bg-muted" />
              <div>
                <div className="mb-2 h-8 w-16 rounded bg-muted" />
                <div className="h-4 w-20 rounded bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ErrorSkeleton({ message }: { message?: string }) {
  return (
    <div className="w-full space-y-4 text-center">
      <h3 className="font-cyber-mono text-sm tracking-wide text-cyber-orange">
        {message ||
          "Error fetching GitHub stats right now. Try again later."}
      </h3>
      <p className="font-cyber-mono text-[10px] tracking-wider text-cyber-muted">
        The API route remains available at /api/get-github-stats
      </p>
    </div>
  );
}

function GitHubStatsView({ stats }: { stats: GitHubStatsPayload }) {
  const totalRepos = stats.repoStats.length;
  const avgCommitsPerRepo =
    totalRepos > 0 ? Math.round(stats.totalCommits / totalRepos) : 0;

  const mostActiveRepo = stats.repoStats.reduce(
    (max, repo) => (repo.commits > max.commits ? repo : max),
    { name: "", commits: 0, organization: "", stars: 0, isPrivate: false }
  );

  const reposByOrg = stats.repoStats.reduce(
    (acc, repo) => {
      if (!acc[repo.organization]) acc[repo.organization] = [];
      acc[repo.organization].push(repo);
      return acc;
    },
    {} as Record<string, typeof stats.repoStats>
  );

  const orgStats = Object.entries(reposByOrg).map(([org, repos]) => ({
    name: org,
    repoCount: repos.length,
    totalCommits: repos.reduce((sum, repo) => sum + repo.commits, 0),
    avgCommits: Math.round(
      repos.reduce((sum, repo) => sum + repo.commits, 0) / Math.max(repos.length, 1)
    ),
  }));

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-cyber-display text-2xl font-bold text-white">
          GitHub Activity
        </h3>
        <p className="font-cyber-mono text-xs tracking-wide text-cyber-muted">
          Coding journey in numbers — private, public, and org repos
        </p>
        {stats.truncated && (
          <p className="mt-2 font-cyber-mono text-[10px] text-cyber-yellow">
            Note: results truncated at GraphQL page caps (100 repos / query).
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatsCard
          title="Total Commits"
          value={stats.totalCommits}
          icon={
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          }
          delay={0}
        />
        <StatsCard
          title="Repositories"
          value={totalRepos}
          icon={
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          }
          delay={200}
        />
        <StatsCard
          title="Avg Commits/Repo"
          value={avgCommitsPerRepo}
          icon={
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          }
          delay={400}
        />
      </div>

      {orgStats.length > 1 && (
        <div className="animate-fade-in-up space-y-4" style={{ animationDelay: "600ms" }}>
          <h4 className="font-cyber-mono text-sm tracking-wider text-white">
            By Organization
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {orgStats.map((org) => (
              <div
                key={org.name}
                className="cyber-panel border-cyber-line p-4"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h5 className="min-w-0 break-words font-semibold capitalize text-white">
                    {org.name === "personal" ? "Personal" : org.name}
                  </h5>
                  <span className="font-cyber-mono text-xs text-cyber-cyan">
                    {org.repoCount} repos
                  </span>
                </div>
                <div className="text-sm text-cyber-muted">
                  {org.totalCommits.toLocaleString()} commits · {org.avgCommits}{" "}
                  avg/repo
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mostActiveRepo.commits > 0 && (
        <div
          className="animate-fade-in-up border border-cyber-cyan/30 bg-gradient-to-r from-cyan-950/20 to-purple-950/20 p-4 sm:p-6"
          style={{ animationDelay: "800ms" }}
        >
          <div className="text-left">
            <div className="font-semibold text-white">Most Active Repository</div>
            <div className="mt-1 break-words font-cyber-mono text-xs leading-relaxed text-cyber-cyan sm:text-sm">
              <span>{mostActiveRepo.name}</span>
              {mostActiveRepo.organization !== "personal" && (
                <span className="text-cyber-muted">
                  {" "}
                  · {mostActiveRepo.organization}
                </span>
              )}
              <span>
                {" "}
                · {mostActiveRepo.commits.toLocaleString()} commits
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="animate-fade-in-up space-y-4" style={{ animationDelay: "1000ms" }}>
        <h4 className="font-cyber-mono text-sm tracking-wider text-white">
          Top Repositories
        </h4>
        {totalRepos === 0 ? (
          <p className="font-cyber-mono text-xs text-cyber-muted">
            No repositories with authored commits found.
          </p>
        ) : (
          <div className="space-y-2">
            {stats.repoStats
              .slice()
              .sort((a, b) => b.commits - a.commits)
              .slice(0, 10)
              .map((repo, index) => (
                <div
                  key={`${repo.organization}:${repo.name}`}
                  className="flex flex-col items-stretch gap-3 border border-cyber-line bg-cyber-elevated/50 p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                    <div className="w-6 text-left font-cyber-mono text-xs text-cyber-muted">
                      #{index + 1}
                    </div>
                    <div className="min-w-0 break-all font-cyber-mono text-sm text-white">
                      {repo.name}
                    </div>
                    {repo.organization !== "personal" && (
                      <span className="bg-muted px-2 py-0.5 font-cyber-mono text-[10px] text-cyber-muted">
                        {repo.organization}
                      </span>
                    )}
                    <span
                      className={`px-2 py-0.5 font-cyber-mono text-[10px] ${
                        repo.isPrivate
                          ? "border border-amber-500/30 text-amber-400"
                          : "border border-cyber-green/30 text-cyber-green"
                      }`}
                    >
                      {repo.isPrivate ? "Private" : "Public"}
                    </span>
                  </div>
                  <div className="shrink-0 self-end font-cyber-mono text-xs text-cyber-cyan sm:self-auto">
                    {repo.commits.toLocaleString()} commits
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

async function GitHubStatsContent() {
  const result = await getGitHubStats();
  if (!result.ok) {
    return <ErrorSkeleton message={result.error} />;
  }
  return <GitHubStatsView stats={result.data} />;
}

export default function GitHubStats() {
  return (
    <section className="mx-auto min-h-[480px] max-w-5xl" id="github-stats">
      <div className="mb-12 text-center">
        <h2 className="font-cyber-display text-3xl font-bold text-cyber-cyan text-glow-cyan sm:text-4xl md:text-5xl">
          GITHUB ACTIVITY
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-cyber-cyan/60" />
      </div>
      <div className="flex min-h-[320px] w-full items-center justify-center">
        <Suspense fallback={<LoadingSkeleton />}>
          <GitHubStatsContent />
        </Suspense>
      </div>
    </section>
  );
}
