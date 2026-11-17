import type { Metadata } from "next";
import Link from "next/link";
import { faqGroups, faqs } from "@/lib/data/faqs";
import { business } from "@/lib/data/business";
import { Label, PageHeader, Section } from "@/components/ui";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on pricing, insurance, crews, guarantees and how City Clean works with property managers.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title={<>The questions <span className="italic">we actually get asked.</span></>}
        lede="If yours is not here, call us. We would rather answer it before you book than after."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[16rem_1fr]">
          <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
            <Label>Sections</Label>
            <ul className="mt-5">
              {faqGroups.map((group) => (
                <li key={group}>
                  <a
                    href={`#${group.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-block cursor-pointer py-3 text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {group}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {faqGroups.map((group) => (
              <section
                key={group}
                id={group.toLowerCase().replace(/\s+/g, "-")}
                className="mb-14 scroll-mt-28 last:mb-0"
              >
                <h2 className="font-display text-3xl tracking-tight">{group}</h2>
                <div className="mt-6 border-t border-line">
                  {faqs
                    .filter((faq) => faq.group === group)
                    .map((faq) => (
                      <details
                        key={faq.q}
                        className="group border-b border-line [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink">
                          {faq.q}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            aria-hidden
                            className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </summary>
                        <p className="max-w-2xl pb-6 leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                </div>
              </section>
            ))}

            <div className="mt-16 border border-line bg-card p-8">
              <h2 className="font-display text-2xl tracking-tight">
                Still deciding?
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Call {business.phone} and ask directly, or book a walkthrough and
                get a written scope with no obligation.
              </p>
              <Link
                href="/schedule-walkthrough"
                className="mt-6 inline-flex cursor-pointer rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent"
              >
                Book a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
