import blogsData from "./blogs.json";

export interface Blog {
  id: number;
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  content: string;
  author: string;
  date: string;
}

export const blogs = blogsData as Blog[];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogs(): Blog[] {
  // Sort by date descending
  return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
