import { unstable_cache } from "next/cache";
import { env } from "@/env";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const FETCH_TIMEOUT_MS = 15_000;
const MAX_ATTEMPTS = 4;
const REPO_PAGE_SIZE = 25;
const ORG_PAGE_SIZE = 10;
const MAX_PAGES = 12;

export interface RepoStat {
  name: string;
  commits: number;
  stars: number;
  isPrivate: boolean;
  organization: string;
}

export interface GitHubStatsPayload {
  totalCommits: number;
  repoStats: RepoStat[];
  truncated: boolean;
  fetchedAt: string;
}

export type GitHubStatsResult =
  | { ok: true; data: GitHubStatsPayload }
  | { ok: false; error: string; code?: string };

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string; type?: string }>;
};

class RetryableError extends Error {}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestOnce<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<GraphQLResponse<T>> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "kyleaustad-portfolio",
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
      cache: "no-store",
    });

    // GitHub returns 502 for queries it fails to resolve in time, and
    // 403/429 when rate limited. Both are worth retrying.
    if ([429, 500, 502, 503, 504].includes(response.status)) {
      throw new RetryableError(`GitHub GraphQL HTTP ${response.status}`);
    }

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(
        `GitHub GraphQL HTTP ${response.status}: ${text.slice(0, 160)}`
      );
    }

    const json = (await response.json()) as GraphQLResponse<T>;

    const timeoutError = json.errors?.find(
      (e) => e.type === "TIMEOUT" || /timed? ?out/i.test(e.message)
    );
    if (timeoutError) {
      throw new RetryableError(`GitHub GraphQL timeout: ${timeoutError.message}`);
    }

    return json;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new RetryableError("GitHub GraphQL request timed out locally");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function githubGraphQL<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<GraphQLResponse<T>> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      return await requestOnce<T>(query, variables);
    } catch (error) {
      lastError = error;
      if (!(error instanceof RetryableError) || attempt === MAX_ATTEMPTS) {
        throw error;
      }
      await sleep(400 * 2 ** (attempt - 1));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("GitHub GraphQL request failed");
}

type RepoNode = {
  name: string;
  stargazerCount: number;
  isPrivate: boolean;
  defaultBranchRef: {
    target: { history: { totalCount: number } | null } | null;
  } | null;
};

type PageInfo = { hasNextPage: boolean; endCursor: string | null };

type RepoPage = { pageInfo: PageInfo; nodes: RepoNode[] };

type OwnedReposData = { user: { repositories: RepoPage } | null };

type OrgListData = {
  user: {
    organizations: {
      pageInfo: PageInfo;
      nodes: { login: string; name: string | null }[];
    };
  } | null;
};

type OrgReposData = { organization: { repositories: RepoPage } | null };

const REPO_FIELDS = `
  name
  stargazerCount
  isPrivate
  defaultBranchRef {
    target {
      ... on Commit {
        history(author: { id: $userId }) {
          totalCount
        }
      }
    }
  }
`;

function mapRepos(nodes: RepoNode[], organization: string): RepoStat[] {
  return nodes
    .map((r) => ({
      name: r.name,
      commits: r.defaultBranchRef?.target?.history?.totalCount ?? 0,
      stars: r.stargazerCount ?? 0,
      isPrivate: r.isPrivate ?? false,
      organization,
    }))
    .filter((r) => r.commits > 0);
}

async function fetchOwnedRepos(userId: string) {
  const query = `
    query($username: String!, $userId: ID!, $cursor: String, $pageSize: Int!) {
      user(login: $username) {
        repositories(
          first: $pageSize
          after: $cursor
          ownerAffiliations: OWNER
          orderBy: { field: PUSHED_AT, direction: DESC }
        ) {
          pageInfo { hasNextPage endCursor }
          nodes { ${REPO_FIELDS} }
        }
      }
    }
  `;

  const repos: RepoStat[] = [];
  let cursor: string | null = null;
  let pages = 0;
  let truncated = false;

  while (pages < MAX_PAGES) {
    const result: GraphQLResponse<OwnedReposData> =
      await githubGraphQL<OwnedReposData>(query, {
        username: env.GITHUB_USERNAME,
        userId,
        cursor,
        pageSize: REPO_PAGE_SIZE,
      });

    if (result.errors?.length) {
      throw new Error(result.errors.map((e) => e.message).join("; "));
    }

    const page: RepoPage | undefined = result.data?.user?.repositories;
    if (!page) break;

    repos.push(...mapRepos(page.nodes, "personal"));
    pages += 1;

    if (!page.pageInfo.hasNextPage) break;
    cursor = page.pageInfo.endCursor;
    if (pages >= MAX_PAGES) truncated = true;
  }

  return { repos, truncated };
}

async function fetchOrgRepos(userId: string) {
  const orgsQuery = `
    query($username: String!, $cursor: String, $pageSize: Int!) {
      user(login: $username) {
        organizations(first: $pageSize, after: $cursor) {
          pageInfo { hasNextPage endCursor }
          nodes { login name }
        }
      }
    }
  `;

  const orgs: { login: string; name: string | null }[] = [];
  let cursor: string | null = null;
  let truncated = false;

  for (let page = 0; page < 3; page++) {
    const result: GraphQLResponse<OrgListData> =
      await githubGraphQL<OrgListData>(orgsQuery, {
        username: env.GITHUB_USERNAME,
        cursor,
        pageSize: ORG_PAGE_SIZE,
      });

    if (result.errors?.length) {
      throw new Error(result.errors.map((e) => e.message).join("; "));
    }

    const orgPage = result.data?.user?.organizations;
    if (!orgPage) break;

    orgs.push(...orgPage.nodes);
    if (!orgPage.pageInfo.hasNextPage) break;
    cursor = orgPage.pageInfo.endCursor;
  }

  const orgReposQuery = `
    query($login: String!, $userId: ID!, $cursor: String, $pageSize: Int!) {
      organization(login: $login) {
        repositories(
          first: $pageSize
          after: $cursor
          orderBy: { field: PUSHED_AT, direction: DESC }
        ) {
          pageInfo { hasNextPage endCursor }
          nodes { ${REPO_FIELDS} }
        }
      }
    }
  `;

  const repos: RepoStat[] = [];

  for (const org of orgs) {
    const label = org.name || org.login;
    let orgCursor: string | null = null;
    let pages = 0;

    while (pages < MAX_PAGES) {
      const result: GraphQLResponse<OrgReposData> =
        await githubGraphQL<OrgReposData>(orgReposQuery, {
          login: org.login,
          userId,
          cursor: orgCursor,
          pageSize: REPO_PAGE_SIZE,
        });

      // Missing org scope shows up as errors; skip that org instead of failing.
      if (result.errors?.length) break;

      const page: RepoPage | undefined = result.data?.organization?.repositories;
      if (!page) break;

      repos.push(...mapRepos(page.nodes, label));
      pages += 1;

      if (!page.pageInfo.hasNextPage) break;
      orgCursor = page.pageInfo.endCursor;
      if (pages >= MAX_PAGES) truncated = true;
    }
  }

  return { repos, truncated };
}

async function fetchGitHubStatsUncached(): Promise<GitHubStatsResult> {
  try {
    const userQuery = `
      query($username: String!) {
        user(login: $username) { id }
      }
    `;

    const userResult = await githubGraphQL<{ user: { id: string } | null }>(
      userQuery,
      { username: env.GITHUB_USERNAME }
    );

    if (userResult.errors?.length) {
      return {
        ok: false,
        error: userResult.errors.map((e) => e.message).join("; "),
        code: "GRAPHQL_USER_ERROR",
      };
    }

    const userId = userResult.data?.user?.id;
    if (!userId) {
      return {
        ok: false,
        error: `GitHub user "${env.GITHUB_USERNAME}" not found or token lacks access`,
        code: "USER_NOT_FOUND",
      };
    }

    const owned = await fetchOwnedRepos(userId);
    const orgOwned = await fetchOrgRepos(userId);

    const seen = new Set<string>();
    const repoStats: RepoStat[] = [];
    for (const repo of [...owned.repos, ...orgOwned.repos]) {
      const key = `${repo.organization}:${repo.name}`;
      if (seen.has(key)) continue;
      seen.add(key);
      repoStats.push(repo);
    }

    const totalCommits = repoStats.reduce((sum, r) => sum + r.commits, 0);

    return {
      ok: true,
      data: {
        totalCommits,
        repoStats,
        truncated: owned.truncated || orgOwned.truncated,
        fetchedAt: new Date().toISOString(),
      },
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown GitHub stats error";
    console.error("[github-stats]", message);
    return { ok: false, error: message, code: "FETCH_FAILED" };
  }
}

const getGitHubStatsCached = unstable_cache(
  async (): Promise<GitHubStatsPayload> => {
    const result = await fetchGitHubStatsUncached();
    // Throw on failure so Next does not cache error payloads for the full TTL.
    if (!result.ok) {
      throw new Error(result.error);
    }
    return result.data;
  },
  ["github-stats-v3", env.GITHUB_USERNAME],
  { revalidate: 3600, tags: ["github-stats"] }
);

export async function getGitHubStats(): Promise<GitHubStatsResult> {
  try {
    const data = await getGitHubStatsCached();
    return { ok: true, data };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown GitHub stats error";
    return { ok: false, error: message, code: "FETCH_FAILED" };
  }
}
