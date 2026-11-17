import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { Container, Label, Ordinal, PageHeader } from "@/components/ui";
import { SiteForm, type FieldSpec } from "@/components/site-form";

export const metadata: Metadata = {
  title: "Schedule a walkthrough",
  description:
    "Book a free on-site walkthrough. We tour the space, price each area and send a written scope with no obligation.",
};

const fields: FieldSpec[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Alex Rivera" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(206) 555-0100" },
  { name: "address", label: "Property address", required: true, placeholder: "123 Example St, Seattle" },
  {
    name: "propertyType",
    label: "Property type",
    type: "select",
    options: ["Single-family home", "Condo or apartment", "Apartment community", "Commercial or mixed use", "New construction"],
  },
  {
    name: "size",
    label: "Approximate size",
    type: "select",
    options: ["Under 1,000 sq ft", "1,000 – 2,000 sq ft", "2,000 – 3,500 sq ft", "Over 3,500 sq ft", "Multiple units"],
  },
  {
    name: "timing",
    label: "When works for a visit?",
    type: "select",
    options: ["This week", "Next week", "Within the month", "Just gathering quotes"],
    full: true,
  },
  { name: "notes", label: "Anything we should know", type: "textarea", placeholder: "Access, parking, pets, problem areas, or a deadline you are working against." },
];

const steps = [
  { title: "We visit", detail: "Fifteen to thirty minutes on site, depending on the size of the space." },
  { title: "We measure and note", detail: "Square footage, surfaces, condition and anything that needs special handling." },
  { title: "You get a written scope", detail: "A flat price and a checklist, usually the same day. No obligation." },
];

export default function WalkthroughPage() {
  return (
    <>
      <PageHeader
        label="Schedule a walkthrough"
        title={<>Nobody gets a quote <span className="italic">over the phone.</span></>}
        lede="A quote given sight-unseen is a guess, and guesses get corrected upward on cleaning day. Fifteen minutes on site gets you a flat price we will honor."
      />

      <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <Label>Request a visit</Label>
          <div className="mt-8">
            <SiteForm
              form="schedule-walkthrough"
              fields={fields}
              submitLabel="Request walkthrough"
              successTitle="Walkthrough requested"
              successMessage="We will call to confirm a time, usually within a few hours during business hours. Bring any questions about scope and we will answer them on site."
            />
          </div>
        </div>

        <aside>
          <div className="border border-line bg-card p-8">
            <Label>What happens</Label>
            <ol className="mt-6">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 last:border-0 last:pb-0"
                >
                  <Ordinal n={i + 1} />
                  <div>
                    <h2 className="font-sans font-semibold tracking-tight text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 border border-line bg-accent-wash p-8">
            <p className="label-mono">Prefer to talk first</p>
            <a
              href={business.phoneHref}
              className="mt-1.5 inline-block cursor-pointer py-1 font-display text-3xl text-ink transition-colors duration-200 hover:text-accent"
            >
              {business.phone}
            </a>
            <p className="mt-2 text-sm text-muted">
              {business.hours[0].days}, {business.hours[0].time}
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
