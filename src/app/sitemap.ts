import type { MetadataRoute } from "next";
import { NAV } from "@/lib/site-data";

const BASE = "https://shriaradhyam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return NAV.map((item) => ({
    url: `${BASE}${item.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
