import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Content Production",
  description:
    "Cinematic video and photography production for restaurants, hotels, real estate and fitness brands in Bahrain -- Reels, commercials, walkthroughs and hospitality shoots.",
};

export default function ContentProductionPage() {
  return <ServiceDetail slug="content-production" />;
}
