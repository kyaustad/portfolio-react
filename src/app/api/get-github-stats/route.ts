import { getGitHubStats } from "@/lib/github-stats";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const result = await getGitHubStats();

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, code: result.code },
      { status: 502 }
    );
  }

  return NextResponse.json(result.data, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
