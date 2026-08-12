import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/content";

export default function ProcessSection() {
  return (
    <section className="bg-black-primary">
      <div className="container-cin py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                index="(04)"
                label="Process"
                title={<>How we <span className="text-red">scale you.</span></>}
                intro="Four steps, repeated on every project — from the first conversation to the final cinematic export."
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {process.map((step, i) => (
              <Reveal
                key={step.step}
                className="group border-t border-border-dark py-10 md:py-14 first:pt-0 last:border-b flex flex-col sm:flex-row gap-6 sm:gap-12"
              >
                <span className="text-display text-5xl sm:text-6xl text-border-dark group-hover:text-red transition-colors duration-500 shrink-0 leading-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-h2 text-white-primary">{step.title}</h3>
                  <p className="text-body text-gray-light mt-4 max-w-md">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
