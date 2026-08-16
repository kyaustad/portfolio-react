import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio.kyleaustad.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/sales",
    "/software",
    "/3d-art",
    "/game-dev",
    "/snippets",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
