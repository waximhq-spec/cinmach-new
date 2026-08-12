import type { Metadata } from "next";
import SeoLanding from "@/components/SeoLanding";
import { seoLandingPages } from "@/lib/content";

const page = seoLandingPages.find((p) => p.slug === "video-production-company-bahrain")!;

export const metadata: Metadata = {
  title: page.h1,
  description: page.intro,
};

export default function Page() {
  return <SeoLanding page={page} />;
}
