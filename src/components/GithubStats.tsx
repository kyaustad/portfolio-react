import { Suspense } from "react";
import { env } from "@/env";
interface GitHubStats {
  totalCommits: number;
  repoStats: Array<{
    name: string;
    commits: number;
    stars: number;
    isPrivate: boolean;
    organization: string;
  }>;
}

async function fetchGitHubStats(): Promise<GitHubStats | null> {
  const response = await fetch(
    `${env.NEXT_PUBLIC_BASE_URL}/api/get-github-stats`,
    {
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

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
      className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="text-blue-400 text-2xl">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">
            {value.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded w-32 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
              <div>
                <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Additional skeleton elements to match the full content height */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-700 rounded w-32 mx-auto animate-pulse"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 bg-gray-800 border border-gray-700 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorSkeleton() {
  return (
    <div className="space-y-6 w-full">
      <div className="text-center">
        <h3 className="  text-red-400 mb-8">
          Error fetching GitHub stats right now. Try again later.
        </h3>
        <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-32 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
              <div>
                <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Additional skeleton elements to match the full content height */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-700 rounded w-32 mx-auto"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 bg-gray-800 border border-gray-700 rounded-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function GitHubStatsContent() {
  const stats = await fetchGitHubStats();
  if (!stats) {
    return <ErrorSkeleton />;
  }

  // Calculate additional stats
  const totalRepos = stats.repoStats.length;
  const avgCommitsPerRepo = Math.round(stats.totalCommits / totalRepos);
  const mostActiveRepo = stats.repoStats.reduce(
    (max, repo) => (repo.commits > max.commits ? repo : max),
    { name: "", commits: 0, organization: "" }
  );

  // Group repos by organization
  const reposByOrg = stats.repoStats.reduce((acc, repo) => {
    if (!acc[repo.organization]) {
      acc[repo.organization] = [];
    }
    acc[repo.organization].push(repo);
    return acc;
  }, {} as Record<string, typeof stats.repoStats>);

  // Calculate organization stats
  const orgStats = Object.entries(reposByOrg).map(([org, repos]) => ({
    name: org,
    repoCount: repos.length,
    totalCommits: repos.reduce((sum, repo) => sum + repo.commits, 0),
    avgCommits: Math.round(
      repos.reduce((sum, repo) => sum + repo.commits, 0) / repos.length
    ),
  }));

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">GitHub Activity</h3>
        <p className="text-gray-400">{`My coding journey in numbers, including private and public repositories`}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Commits"
          value={stats.totalCommits}
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Organization Stats */}
      {orgStats.length > 1 && (
        <div
          className="space-y-4 animate-fade-in-up"
          style={{
            animationDelay: "600ms",
          }}
        >
          <h4 className="text-lg font-semibold text-white">By Organization</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {orgStats.map((org) => (
              <div
                key={org.name}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-white font-semibold capitalize">
                    {org.name === "personal" ? "Personal" : org.name}
                  </h5>
                  <span className="text-blue-400 text-sm font-mono">
                    {org.repoCount} repos
                  </span>
                </div>
                <div className="text-gray-300 text-sm">
                  {org.totalCommits.toLocaleString()} commits • {org.avgCommits}{" "}
                  avg/repo
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Most Active Repo */}
      {mostActiveRepo.commits > 0 && (
        <div
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 animate-fade-in-up"
          style={{
            animationDelay: "800ms",
          }}
        >
          <div className="flex items-center gap-4">
            <div className="text-yellow-400 text-2xl">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <div className="text-white text-start font-semibold text-lg">
                Most Active Repository
              </div>
              <div className="text-blue-300 text-sm">
                <span className="font-mono">{mostActiveRepo.name}</span>
                {mostActiveRepo.organization !== "personal" && (
                  <span className="text-gray-400">
                    {" "}
                    • {mostActiveRepo.organization}
                  </span>
                )}
                <span>
                  {" "}
                  • {mostActiveRepo.commits.toLocaleString()} commits
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Repositories */}
      <div
        className="space-y-4 animate-fade-in-up"
        style={{
          animationDelay: "1000ms",
        }}
      >
        <h4 className="text-lg font-semibold text-white">Top Repositories</h4>
        <div className="space-y-2">
          {stats.repoStats
            .sort((a, b) => b.commits - a.commits)
            .slice(0, 10)
            .map((repo, index) => (
              <div
                key={repo.name}
                className="flex items-center justify-between bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-500 text-sm font-mono w-6">
                    #{index + 1}
                  </div>
                  <div className="text-white font-mono text-sm">
                    {repo.name}
                  </div>
                  {repo.organization !== "personal" && (
                    <span className="text-gray-400 text-xs bg-gray-700 px-2 py-1 rounded">
                      {repo.organization}
                    </span>
                  )}
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      repo.isPrivate
                        ? "text-amber-400 bg-amber-900/20 border border-amber-500/30"
                        : "text-green-400 bg-green-900/20 border border-green-500/30"
                    }`}
                  >
                    {repo.isPrivate ? "Private" : "Public"}
                  </span>
                  {repo.stars > 0 && (
                    <div className="flex items-center gap-1 text-yellow-400 text-xs">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stars}
                    </div>
                  )}
                </div>
                <div className="text-blue-400 text-sm font-semibold">
                  {repo.commits.toLocaleString()}
                  {` commits`}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function GitHubStats() {
  return (
    <section className="bg-gray-900 min-h-[800px]" id="github">
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-muted-foreground mb-4">
            GitHub Activity
            <span className="block w-32 h-1 bg-red-500 mx-auto mt-4"></span>
          </h2>
        </div>
        <div className="min-h-[600px] flex items-center justify-center w-full">
          <Suspense fallback={<LoadingSkeleton />}>
            <GitHubStatsContent />
          </Suspense>
        </div>
      </div>
      <div className="text-gray-400 mt-12 text-center">
        <p>&copy; 2025 Kyle Austad. All rights reserved.</p>
      </div>
    </section>
  );
}
