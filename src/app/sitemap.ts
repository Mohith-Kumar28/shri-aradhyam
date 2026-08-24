import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Every indexable route, listed by hand rather than derived from NAV.
 *
 * NAV is the header, and the header is an editorial choice — the outlet page
 * and the long regional page are deliberately not in it. A sitemap built from
 * NAV would silently drop exactly the pages that most need to be crawled.
 */
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/menu", priority: 0.9 },
  { path: "/locations/banashankari", priority: 0.9 },
  { path: "/locations", priority: 0.8 },
  { path: "/traditions", priority: 0.8 },
  { path: "/story", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/gallery", priority: 0.6 },
  { path: "/partner", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
