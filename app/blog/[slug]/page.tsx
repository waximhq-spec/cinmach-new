import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <div className="bg-black-primary">
        <div className="container-cin pt-16 pb-10 md:pt-24 md:pb-14 border-b border-border-dark">
          <Reveal>
            <Link href="/blog" className="text-label text-gray hover:text-gray-light transition-colors">
              ← Insights & Strategy
            </Link>
            <h1 className="text-h1 text-white-primary mt-6 max-w-3xl">{post.title}</h1>
            <div className="flex items-center gap-3 text-caption text-gray mt-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </div>

      <article className="bg-white-primary">
        <div className="container-cin py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal as="div" className="lg:col-span-8 lg:col-start-3">
              <MediaPlaceholder label={post.title} className="aspect-video mb-12" />
              <div className="flex flex-col gap-6">
                {post.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={i} className="text-h3 text-ink mt-6">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="font-editorial text-h4 text-red italic border-l-2 border-red pl-6 py-2"
                      >
                        &ldquo;{block.text}&rdquo;
                      </blockquote>
                    );
                  }
                  return (
                    <p key={i} className="text-body text-ink-muted">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="bg-black-secondary border-y border-border-dark">
        <div className="container-cin py-14 md:py-16">
          <h3 className="text-label text-gray mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="block border border-border-dark p-6 bg-black-primary hover:border-red transition-colors duration-200"
                >
                  <h4 className="text-h4 text-white-primary">{r.title}</h4>
                  <p className="text-body-sm text-gray-light mt-3">{r.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
