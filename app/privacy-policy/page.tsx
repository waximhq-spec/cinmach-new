import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Cinmach Productions collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="April 1, 2026"
      intro="This policy explains what information Cinmach Productions collects when you use this website, why we collect it, and the choices you have."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "When you submit an inquiry through our project form or contact us directly, we collect the information you provide -- including your name, brand name, WhatsApp number, industry, estimated budget, and any project details you share.",
            "When you book a strategy call through our scheduling tool, we collect the information required to confirm and manage that appointment, such as your name, email address, and preferred meeting time.",
            "Like most websites, we may automatically collect limited technical information such as browser type, device type, and pages visited, in order to understand how our site is used and improve it over time.",
          ],
        },
        {
          title: "How We Use Your Information",
          body: [
            "We use the information you provide to respond to your inquiry, prepare a proposal, schedule a strategy call, and deliver the services you've requested.",
            "We do not sell your personal information to third parties. We do not use your information for purposes beyond responding to your inquiry and delivering our services, unless you separately opt in to marketing communications.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "Our project inquiry form is processed through FormSubmit, a third-party form-handling service, which delivers submissions directly to our team's inbox.",
            "Strategy call bookings are managed through Cal.com, a third-party scheduling platform. When you book a call, your booking details are processed according to Cal.com's own privacy practices in addition to ours.",
            "We may use standard web analytics and content delivery services to operate and improve this website.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "This website may use cookies and similar technologies to remember your preferences and understand how visitors use our site. You can control cookies through your browser settings; disabling cookies may affect some site functionality.",
          ],
        },
        {
          title: "Data Retention",
          body: [
            "We retain inquiry and project information for as long as necessary to respond to your request, deliver services, and comply with our legal and accounting obligations.",
          ],
        },
        {
          title: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by contacting us at contact@cinmachproductions.com. We will respond to reasonable requests within a reasonable timeframe.",
          ],
        },
        {
          title: "Contact Us",
          body: [
            "If you have questions about this privacy policy or how your information is handled, please reach out to us at contact@cinmachproductions.com or team@cinmachproductions.com.",
          ],
        },
      ]}
    />
  );
}
