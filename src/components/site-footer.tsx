import Link from "next/link";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { Container, Label } from "./ui";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/before-after", label: "Before / after" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
  { href: "/book-a-unit", label: "Book a unit" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-warm">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex cursor-pointer items-center gap-2.5 py-2.5">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden>
                <path d="M12 2.5 21 7v10l-9 4.5L3 17V7Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M8 12.2l2.6 2.6L16.2 9.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-xl tracking-tight text-ink">
                {business.name}
              </span>
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-muted">
              {business.tagline}. Employee crews, flat pricing, and a walkthrough
              before every contract.
            </p>
            <p className="label-mono mt-6">
              Est. {business.founded} · Seattle, WA
            </p>
          </div>

          <div>
            <Label>Services</Label>
            <ul className="mt-5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block cursor-pointer py-3 text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>Company</Label>
            <ul className="mt-5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block cursor-pointer py-3 text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>Contact</Label>
            <ul className="mt-5 text-sm">
              <li>
                <a
                  href={business.phoneHref}
                  className="inline-block cursor-pointer py-3 text-ink transition-colors duration-200 hover:text-accent"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-block cursor-pointer py-3 break-all text-muted transition-colors duration-200 hover:text-ink"
                >
                  {business.email}
                </a>
              </li>
              <li className="py-2.5 text-muted">
                {business.addressLine}
                <br />
                {business.city}, {business.state} {business.zip}
              </li>
            </ul>

            <Label className="mt-6">Hours</Label>
            <ul className="mt-4 text-sm text-muted">
              {business.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 py-1.5">
                  <span>{h.days}</span>
                  <span className="tabular-nums text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col justify-between gap-2 py-6 sm:flex-row">
          <p className="label-mono">
            © {new Date().getFullYear()} {business.legalName}
          </p>
          <p className="label-mono">Licensed · Bonded · Insured · WA</p>
        </Container>
      </div>
    </footer>
  );
}
