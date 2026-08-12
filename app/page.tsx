import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Marquee from "@/components/Marquee";
import FeaturedWork from "@/components/home/FeaturedWork";
import ServicesTable from "@/components/home/ServicesTable";
import ProcessSection from "@/components/home/ProcessSection";
import EngagementModels from "@/components/home/EngagementModels";
import SocialProof from "@/components/home/SocialProof";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={["Cinematic Content", "Brand Identity", "Video Production", "Creative Marketing"]}
        tone="red"
        duration={30}
      />
      <Manifesto />
      <FeaturedWork />
      <ServicesTable />
      <ProcessSection />
      <EngagementModels />
      <SocialProof />
      <FAQSection />
      <CTASection />
    </>
  );
}
