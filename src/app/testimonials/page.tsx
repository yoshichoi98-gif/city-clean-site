import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { testimonials } from "@/lib/data/testimonials";
import { Label, PageHeader, Section } from "@/components/ui";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Seattle homeowners, renters and property managers say about working with City Clean.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title={<>Homeowners, renters, <span className="italic">and the people who run buildings.</span></>}
        lede={`What property managers and homeowners say about working with us.`}
      />

      <Section>
        <ul className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={item.name} className="flex flex-col bg-paper p-9 lg:p-11">
              <Label>{item.role}</Label>
              <blockquote className="mt-6 flex-1 font-display text-2xl leading-[1.3] text-ink lg:text-[1.75rem]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 border-t border-line pt-5">
                <p className="font-medium text-ink">{item.name}</p>
                <p className="label-mono mt-1.5">{item.context}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
