import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Paid Advertising",
  description:
    "Performance-driven Meta and Google ad campaigns built for sales -- launching soon from Cinmach Productions.",
};

export default function PaidAdvertisingPage() {
  return <ServiceDetail slug="paid-advertising" />;
}
