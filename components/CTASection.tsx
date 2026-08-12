import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import Reveal from "@/components/Reveal";

export default function CTASection({
  title,
  subtitle = "Tell us about your project — our team responds within 24 hours.",
}: {
  title?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="bg-red grain relative overflow-hidden">
      <div className="container-cin py-24 md:py-36">
        <Reveal>
          <p className="text-label text-white-primary/70 mb-8">(Let&apos;s talk)</p>
          <h2 className="text-mega text-white-primary max-w-[14ch]">
            {title ?? (
              <>
                Ready to <span className="text-black-primary">elevate?</span>
              </>
            )}
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 text-lead text-white-primary/85 max-w-xl">{subtitle}</p>
          <div className="lg:col-span-6 lg:justify-self-end flex flex-col sm:flex-row gap-4">
            <BookCallButton className="btn btn-solid-dark" />
            <Link
              href="/work"
              className="btn btn-outline-dark border-white-primary/40 text-white-primary hover:border-white-primary"
            >
              View Our Work →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
