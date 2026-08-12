import SectionHeader from "@/components/SectionHeader";
import { process } from "@/lib/content";

/**
 * Two-column scroll section.
 *
 * Desktop: the black left rail is `position: sticky` inside a grid item that
 * stretches to the full height of the right column, so it stays anchored in
 * the viewport while the white right column -- one full screen per step --
 * scrolls past it. The right column is what gives the section its height, so
 * the rail releases on its own once the last step has been read and the next
 * section continues normally. No fixed positioning, no scroll listeners, no
 * nested scroll container: the page stays the scrolling element.
 *
 * Mobile/tablet: sticky is dropped entirely and the whole thing collapses to a
 * single column with normal section padding.
 */
export default function ProcessSection() {
  return (
    <section className="bg-black-primary">
      <div className="lg:grid lg:grid-cols-12">
        {/* Left rail -- sticky for the length of the right column */}
        <div className="lg:col-span-5">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 md:py-28 lg:sticky lg:top-0 lg:h-screen lg:py-16 xl:px-16">
            <SectionHeader
              index="(04)"
              label="Process"
              title={<>How we <span className="text-red">scale you.</span></>}
              intro="Four steps, repeated on every project — from the first conversation to the final cinematic export."
            />
          </div>
        </div>

        {/* Right column -- drives the height of the section */}
        <div className="border-y border-border-light bg-white-primary lg:col-span-7">
          {process.map((step) => (
            <article
              key={step.step}
              className="flex flex-col justify-center border-t border-border-light px-5 py-16 first:border-t-0 md:px-10 md:py-20 lg:min-h-screen lg:py-24 xl:px-16"
            >
              <span className="text-mono text-red">{step.step}</span>
              <h3 className="text-h1 text-ink mt-6">{step.title}</h3>
              <p className="text-body text-ink-muted mt-6 max-w-xl">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
