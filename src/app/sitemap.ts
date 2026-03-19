import { MetadataRoute } from "next";
import { forms } from "@/lib/forms";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = "https://usformfiller.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${siteUrl}/forms`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${siteUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const formPages = forms.map((form) => ({
    url: `${siteUrl}/forms/${form.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...formPages, ...blogPages];
}
