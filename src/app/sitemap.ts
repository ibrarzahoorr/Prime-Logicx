import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getAllBlogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.domain}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.domain}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.domain}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.domain}/work`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.domain}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.domain}/blog`, changeFrequency: "daily", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.domain}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogs().map((b) => ({
    url: `${siteConfig.domain}/blog/${b.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
