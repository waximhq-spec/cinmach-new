import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the Cinmach Productions website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="April 1, 2026"
      intro="These terms govern your use of the Cinmach Productions website and the engagement of our production and creative services. By using this site or engaging our services, you agree to the terms below."
      sections={[
        {
          title: "Use of This Website",
          body: [
            "This website is provided for the purpose of showcasing our work and services and enabling prospective clients to get in touch. You agree not to misuse this site, including attempting unauthorized access, disrupting normal operation, or scraping content for commercial redistribution.",
          ],
        },
        {
          title: "Service Engagements",
          body: [
            "Submitting an inquiry through our project form or booking a strategy call does not constitute a binding agreement for services. A formal engagement begins only once both parties agree to a scope of work, timeline, and pricing in writing.",
            "Estimated budgets, timelines, and deliverables discussed during initial inquiries are indicative and subject to confirmation once project details are finalized.",
          ],
        },
        {
          title: "Intellectual Property",
          body: [
            "All content on this website -- including video, photography, copy, and brand assets -- is the property of Cinmach Productions or its clients, and may not be reproduced or redistributed without permission.",
            "Ownership and usage rights for content produced under a client engagement are defined in the applicable service agreement for that project.",
          ],
        },
        {
          title: "Client Content",
          body: [
            "Where clients supply materials, footage, or brand assets for use in a production, the client warrants that they hold the necessary rights to that material and grants Cinmach Productions permission to use it for the agreed project.",
          ],
        },
        {
          title: "Portfolio Use",
          body: [
            "Unless otherwise agreed in writing, Cinmach Productions retains the right to showcase completed work -- including video, photography, and case studies -- in our portfolio, website, and marketing materials.",
          ],
        },
        {
          title: "Limitation of Liability",
          body: [
            "Cinmach Productions provides this website and general information in good faith, but makes no warranties regarding the completeness or accuracy of content. We are not liable for any indirect or consequential loss arising from use of this website.",
          ],
        },
        {
          title: "Governing Law",
          body: [
            "These terms are governed by the laws of the Kingdom of Bahrain. Any disputes arising from the use of this website or our services will be subject to the jurisdiction of the courts of Bahrain.",
          ],
        },
        {
          title: "Contact Us",
          body: [
            "Questions about these terms can be directed to contact@cinmachproductions.com.",
          ],
        },
      ]}
    />
  );
}
