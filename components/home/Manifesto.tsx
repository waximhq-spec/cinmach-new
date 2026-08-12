import Reveal from "@/components/Reveal";
import { industries } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="bg-white-primary border-y border-border-light">
      <div className="container-cin py-24 md:py-36">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-mono text-red">(01)</span>
          <span className="h-px w-8 bg-red/50" />
          <span className="text-label text-ink-muted">What we do</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <h2 className="text-h1 text-ink">
              Content that <span className="text-red">converts.</span>
              <br />
              Brands that <span className="text-red">last.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lead text-ink-muted">
              We produce cinematic content and build brand identities that turn viewers into paying customers —
              for restaurants, hotels, real estate and luxury brands across Bahrain and the Gulf.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-16 pt-10 border-t border-border-light">
          <p className="text-label text-ink-muted mb-6">Industries we serve</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {industries.map((ind, i) => (
              <span key={ind} className="text-h4 text-ink flex items-baseline gap-2">
                <span className="text-mono text-red">{String(i + 1).padStart(2, "0")}</span>
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
