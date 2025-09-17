import { env } from "@/env";
import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

export async function GET(request: Request) {
  const { GITHUB_ACCESS_TOKEN, GITHUB_USERNAME } = env;

  // First, get the user's ID
  const userQuery = `
    query($username: String!) {
      user(login: $username) {
        id
      }
    }
  `;

  const userResponse = await fetch(GITHUB_GRAPHQL_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: userQuery,
      variables: { username: GITHUB_USERNAME },
    }),
  });

  const { data: userData, errors: userErrors } = await userResponse.json();

  if (userErrors) {
    console.error(userErrors);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }

  const userId = userData.user.id;

  const query = `
    query($username: String!, $userId: ID!) {
      user(login: $username) {
        repositories(first: 100, ownerAffiliations: OWNER, privacy: PRIVATE) {
          nodes {
            name
            stargazerCount
            isPrivate
            defaultBranchRef {
              target {
                ... on Commit {
                  history(author: {id: $userId}) {
                    totalCount
                  }
                }
              }
            }
          }
        }
        repositoriesPublic: repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
          nodes {
            name
            stargazerCount
            isPrivate
            defaultBranchRef {
              target {
                ... on Commit {
                  history(author: {id: $userId}) {
                    totalCount
                  }
                }
              }
            }
          }
        }
        organizations(first: 10) {
          nodes {
            name
            repositories(first: 100) {
              nodes {
                name
                stargazerCount
                isPrivate
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history(author: {id: $userId}) {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username: GITHUB_USERNAME, userId },
    }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    console.error(errors);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }

  const privateRepos = data.user.repositories.nodes;
  const publicRepos = data.user.repositoriesPublic.nodes;

  // Get repositories from organizations (including Voyyance)
  const orgRepos = data.user.organizations.nodes.flatMap((org: any) =>
    org.repositories.nodes.map((repo: any) => ({
      ...repo,
      organization: org.name,
    }))
  );

  const allRepos = [...privateRepos, ...publicRepos, ...orgRepos];

  const repoStats = allRepos
    .map((r) => ({
      name: r.name,
      commits: r.defaultBranchRef?.target?.history?.totalCount ?? 0,
      stars: r.stargazerCount ?? 0,
      isPrivate: r.isPrivate ?? false,
      organization: r.organization || "personal",
    }))
    .filter((r) => r.commits > 0); // Include repos where you have commits

  const totalCommits = repoStats.reduce((sum, r) => sum + r.commits, 0);

  return NextResponse.json({
    totalCommits,
    repoStats,
  });
}
