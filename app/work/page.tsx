import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Cinmach Productions' portfolio of cinematic video and photography -- restaurants, hotels, real estate and sports brands across Bahrain.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Our Work"
        index="(W)"
        title={<>Selected <span className="text-red">archive.</span></>}
        subtitle="Seven projects. Three industries. One standard — content that performs."
        compact
      />
      <WorkGrid />
      <CTASection />
    </>
  );
}
