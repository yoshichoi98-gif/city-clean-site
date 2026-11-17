import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { Container, Label, PageHeader } from "@/components/ui";
import { SiteForm, type FieldSpec } from "@/components/site-form";

export const metadata: Metadata = {
  title: "Book a unit",
  description:
    "Residents and property managers: book a unit clean or turn. Confirmed within the hour during business hours.",
};

const fields: FieldSpec[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Alex Rivera" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(206) 555-0100" },
  { name: "building", label: "Building or community", required: true, placeholder: "Ballard apartment community" },
  { name: "unit", label: "Unit number", required: true, placeholder: "412" },
  {
    name: "requestedBy",
    label: "You are a",
    type: "select",
    options: ["Resident", "Property manager", "Leasing agent", "Owner"],
  },
  {
    name: "cleanType",
    label: "Type of clean",
    type: "select",
    options: ["Standard clean", "Deep clean", "Move-out / turn", "Post-construction touch-up"],
  },
  {
    name: "when",
    label: "When do you need it?",
    type: "select",
    options: ["Today or tomorrow", "This week", "Next week", "Pick a date with me"],
  },
  { name: "access", label: "Access instructions", type: "textarea", placeholder: "Lockbox code, front desk, key handoff, parking, or anything the crew needs to get in." },
];

export default function BookUnitPage() {
  return (
    <>
      <PageHeader
        label="Book a unit"
        title={<>One unit, <span className="italic">booked in a minute.</span></>}
        lede="For residents in a building we already service and for managers sending a work order. Requests are confirmed within the hour during business hours."
      />

      <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <Label>Unit request</Label>
          <div className="mt-8">
            <SiteForm
              form="book-a-unit"
              fields={fields}
              submitLabel="Request this unit"
              successTitle="Unit request received"
              successMessage="We will confirm the date and crew by email, usually within the hour during business hours. Partner buildings are billed on the monthly property invoice."
            />
          </div>
        </div>

        <aside>
          <div className="border border-line bg-card p-8">
            <Label>How billing works</Label>
            <ul className="mt-6">
              {[
                ["Partner buildings", "Added to the monthly property invoice, itemized by unit."],
                ["Residents", "Paid directly by card, quoted before the crew is dispatched."],
                ["Documentation", "Photos of the finished unit are sent with the confirmation."],
              ].map(([title, detail]) => (
                <li key={title} className="border-b border-line py-4 last:border-0 last:pb-0">
                  <h2 className="font-sans font-semibold tracking-tight text-ink">
                    {title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border border-line bg-accent-wash p-8">
            <p className="label-mono">Building not listed</p>
            <p className="mt-3 leading-relaxed text-muted">
              If we do not service your building yet, ask your property manager to
              book a walkthrough. Most partnerships start that way.
            </p>
            <a
              href={business.phoneHref}
              className="mt-3 inline-block cursor-pointer py-1.5 font-display text-2xl text-ink transition-colors duration-200 hover:text-accent"
            >
              {business.phone}
            </a>
          </div>
        </aside>
      </Container>
    </>
  );
}
