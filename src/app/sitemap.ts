import type { MetadataRoute } from "next";
import { OUTLETS } from "@/lib/site-data";

const BASE = "https://shriaradhyam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/story`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/franchise`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const outlets: MetadataRoute.Sitemap = OUTLETS.map((outlet) => ({
    url: `${BASE}/locations/${outlet.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...outlets];
}
