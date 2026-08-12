import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import CalEmbed from "@/components/CalEmbed";
import BookCallButton from "@/components/BookCallButton";
import Reveal from "@/components/Reveal";
import { contact, social } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Estimate",
  description:
    "Get in touch with Cinmach Productions -- email, WhatsApp, phone, working hours and a direct strategy call booking link.",
};

export default function EstimatePage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Ready to start a project?"
        subtitle="Reach us directly, or pick a time below for a live strategy call with our team."
        compact
      />

      <section className="bg-black-primary">
        <div className="container-cin py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5 flex flex-col gap-12">
              <div>
                <SectionLabel number="01">Reach Us Directly</SectionLabel>
                <div className="mt-6 flex flex-col divide-y divide-border-dark">
                  <ContactRow label="Project Inquiries" value={contact.emailContact} href={`mailto:${contact.emailContact}`} />
                  <ContactRow label="Team Support" value={contact.emailTeam} href={`mailto:${contact.emailTeam}`} />
                  <ContactRow label="WhatsApp" value={contact.whatsappDisplay} href={contact.whatsappHref} />
                  <ContactRow label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} />
                </div>
              </div>

              <div>
                <SectionLabel number="02">Follow Us</SectionLabel>
                <div className="mt-6 flex flex-col divide-y divide-border-dark">
                  {social.map((s) => (
                    <div key={s.name} className="flex items-center justify-between py-4">
                      <span className="text-body text-white-primary">{s.name}</span>
                      <span className="text-caption text-gray flex items-center gap-2">
                        {s.handle}
                        {s.soon && <span className="text-red">(Soon)</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                <div className="border border-border-dark p-6">
                  <SectionLabel number="03">Location</SectionLabel>
                  <p className="text-body text-white-primary mt-4">{contact.location}</p>
                  <p className="text-body-sm text-gray-light mt-2">
                    On-location shoots across Bahrain and the wider GCC.
                  </p>
                </div>
                <div className="border border-border-dark p-6">
                  <SectionLabel number="04">Working Hours</SectionLabel>
                  <div className="mt-4 flex flex-col gap-2">
                    {contact.hours.map((h) => (
                      <div key={h.days} className="flex flex-col">
                        <span className="text-body-sm text-white-primary">{h.days}</span>
                        <span className="text-caption text-gray-light">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <BookCallButton className="btn btn-primary w-full" />
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <SectionLabel number="05">Book A Strategy Call</SectionLabel>
              <p className="text-body-sm text-gray-light mt-4 mb-6 max-w-md">
                Pick a slot directly on our calendar -- no back-and-forth, just a live conversation with our team.
              </p>
              <CalEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center justify-between py-4 group">
      <span className="text-body-sm text-gray-light">{label}</span>
      <span className="text-body text-white-primary group-hover:text-red transition-colors">{value}</span>
    </a>
  );
}
