import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.domain}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.domain}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.domain}/work`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.domain}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.domain}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
