import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/data/blogs";
import { siteConfig } from "@/data/site";
import { articleSchema } from "@/lib/schema";
import PageTransition from "@/components/shared/PageTransition";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  if (!blog) return {};

  const url = `${siteConfig.domain}/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.metaDescription,
      authors: [blog.author],
      publishedTime: blog.date,
    },
    twitter: {
      title: blog.title,
      description: blog.metaDescription,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(blog)) }}
      />
      <div className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <header className="mb-10 text-center">
            <time dateTime={blog.date} className="text-sm leading-6 text-[var(--muted)] block mb-2">
              {new Date(blog.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-5xl font-sora">
              {blog.title}
            </h1>
            <p className="mt-4 text-sm text-[var(--brand)] font-medium">By {blog.author}</p>
          </header>
          
          <div className="prose prose-lg max-w-none prose-headings:font-sora prose-headings:text-[var(--text)] prose-p:text-[var(--text-2)] prose-a:text-[var(--brand)] hover:prose-a:text-[var(--brand-2)] prose-strong:text-[var(--text)] prose-ul:text-[var(--text-2)] prose-li:text-[var(--text-2)] mt-12">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
