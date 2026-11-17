"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business } from "@/lib/data/business";
import { Container } from "./ui";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/before-after", label: "Before / after" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-8 py-4">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5 py-2.5"
          aria-label={`${business.name} home`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden>
            <path
              d="M12 2.5 21 7v10l-9 4.5L3 17V7Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M8 12.2l2.6 2.6L16.2 9.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-xl tracking-tight text-ink">
            {business.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block cursor-pointer py-3 text-sm transition-colors duration-200 ${
                      active
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="label-mono hidden cursor-pointer px-3 py-3.5 transition-colors duration-200 hover:text-ink lg:inline-block"
          >
            {business.phone}
          </a>
          <Link
            href="/schedule-walkthrough"
            className="hidden cursor-pointer rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent sm:inline-block"
          >
            Book a walkthrough
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line-strong text-ink transition-colors duration-200 hover:border-ink xl:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              {open ? <path d="M6 6 18 18M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-paper xl:hidden"
        >
          <Container className="py-2">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer py-4 text-lg text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 py-4 sm:hidden">
              <a
                href={business.phoneHref}
                className="cursor-pointer rounded-full border border-line-strong py-3.5 text-center font-medium text-ink"
              >
                {business.phone}
              </a>
              <Link
                href="/schedule-walkthrough"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-full bg-ink py-3.5 text-center font-medium text-paper"
              >
                Book a walkthrough
              </Link>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
