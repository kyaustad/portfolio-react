import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio.kyleaustad.com";

  return [
    {
      url: baseUrl,
      lastModified: "2025-09-17T23:29:49.493Z",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: "2025-09-17T23:29:49.493Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#work`,
      lastModified: "2025-09-17T23:29:49.493Z",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: "2025-09-17T23:29:49.493Z",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#github`,
      lastModified: "2025-09-17T23:29:49.493Z",
      changeFrequency: "daily",
      priority: 0.6,
    },
  ];
}
