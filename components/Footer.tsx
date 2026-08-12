import Link from "next/link";
import Marquee from "@/components/Marquee";
import BookCallButton from "@/components/BookCallButton";
import { company, contact, footerNav, social } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-black-primary border-t border-border-dark">
      {/* Big CTA marquee */}
      <Link href="/estimate" className="block group">
        <Marquee
          items={["LET'S BUILD SOMETHING", "BOOK A STRATEGY CALL", "START YOUR PROJECT"]}
          duration={28}
          tone="dark"
          className="border-t-0"
        />
      </Link>

      <div className="container-cin py-16 md:py-24">
        {/* Top: statement + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-border-dark">
          <div className="lg:col-span-8">
            <p className="text-label text-gray mb-6">(Get in touch)</p>
            <h2 className="text-display text-white-primary">
              Ready when <span className="text-red">you are.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-6">
            <a href={`mailto:${contact.emailContact}`} className="text-h4 text-white-primary link-sweep w-fit">
              {contact.emailContact}
            </a>
            <BookCallButton className="btn btn-primary w-full sm:w-fit" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 pt-16">
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="text-h4 text-white-primary">
              CIN<span className="text-red">MACH</span>
            </Link>
            <p className="text-body-sm text-gray-light mt-4 max-w-xs">{company.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {social.map((s) => (
                <span key={s.name} className="text-mono text-gray flex items-center gap-1.5">
                  {s.name}
                  {s.soon && <span className="text-red">°</span>}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Index" className="lg:col-span-3">
            {footerNav.navigate.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Expertise" className="lg:col-span-3">
            {footerNav.expertise.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-2">
            <FooterLink href={`mailto:${contact.emailTeam}`}>{contact.emailTeam}</FooterLink>
            <FooterLink href={contact.whatsappHref}>WhatsApp</FooterLink>
            <span className="text-body-sm text-gray-light">{contact.location}</span>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="container-cin py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mono text-gray">© 2026 CINMACH PRODUCTIONS — ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-mono text-gray hover:text-gray-light transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-mono text-gray hover:text-gray-light transition-colors">
              Terms
            </Link>
            <span className="text-mono text-gray">Bahrain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h3 className="text-mono text-gray">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-body-sm text-gray-light hover:text-white-primary transition-colors w-fit">
      {children}
    </Link>
  );
}
