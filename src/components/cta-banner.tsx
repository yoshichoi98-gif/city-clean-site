import { business } from "@/lib/data/business";
import { Container, Label } from "./ui";

export function CtaBanner({
  title = "Every contract starts with a walkthrough",
  lede = "We tour the space, price each area, and send a written scope. No obligation, and no one gets a quote over the phone without seeing the place first.",
  primaryHref = "/schedule-walkthrough",
  primaryLabel = "Book a walkthrough",
}: {
  title?: string;
  lede?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Label className="!text-accent-light">Next step</Label>
            <h2 className="mt-5 max-w-2xl text-[2.5rem] leading-[1.03] !text-paper sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
              {lede}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              href={primaryHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent-light hover:text-ink"
            >
              {primaryLabel}
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-accent-light/40 px-7 py-4 text-sm font-medium text-accent-light transition-colors duration-200 hover:border-accent-light hover:bg-accent-light hover:text-ink"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
