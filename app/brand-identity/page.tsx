import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Brand Identity",
  description:
    "Visual branding, logo design, positioning, brand guidelines and collateral design for ambitious brands in Bahrain and the GCC.",
};

export default function BrandIdentityPage() {
  return <ServiceDetail slug="brand-identity" />;
}
