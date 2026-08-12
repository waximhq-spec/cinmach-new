import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights & Strategy",
  description:
    "Industry insights, videography guides, and marketing strategy articles for Gulf businesses from the Cinmach Productions team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero kicker="Blog" title="Insights & Strategy" subtitle="Videography guides and marketing strategy for Gulf businesses." compact />

      <section className="bg-white-primary">
        <div className="container-cin py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col">
                  <MediaPlaceholder label="Cinmach Insights" className="aspect-video" />
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-caption text-gray">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-h3 text-ink mt-3 group-hover:text-red transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-body-sm text-ink-muted mt-3">{post.excerpt}</p>
                    <span className="link-red text-body-sm mt-4 inline-block">Read article →</span>
                  </div>
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
