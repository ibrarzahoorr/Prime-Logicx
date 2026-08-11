import { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/data/blogs";
import PageTransition from "@/components/shared/PageTransition";

export const metadata: Metadata = {
  title: "Blog & Insights | Prime Logicx",
  description: "Read the latest insights on custom software development, web & app development, AI automation, and digital marketing from Prime Logicx.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const allBlogs = getAllBlogs();

  return (
    <PageTransition>
      <div className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] sm:text-6xl font-sora">
              Insights & Articles
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--text-2)]">
              Expert advice, trends, and strategies in software development, AI, and marketing.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allBlogs.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--brand)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow)] transition-all">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-[var(--muted)]">
                    {new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-[var(--text)] group-hover:text-[var(--brand)] font-sora transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-[var(--text-2)]">
                    {post.metaDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
