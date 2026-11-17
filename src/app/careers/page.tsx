import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { Container, Label, PageHeader } from "@/components/ui";
import { SiteForm, type FieldSpec } from "@/components/site-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "City Clean hires W-2 cleaners and crew leads in Seattle. Paid training, real benefits, and no subcontracting.",
};

const fields: FieldSpec[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Alex Rivera" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(206) 555-0100" },
  { name: "neighborhood", label: "Where do you live?", placeholder: "Beacon Hill" },
  {
    name: "role",
    label: "Role you are interested in",
    type: "select",
    options: ["Cleaner", "Crew lead", "Post-construction crew", "Scheduler / office", "Not sure"],
  },
  {
    name: "experience",
    label: "Cleaning experience",
    type: "select",
    options: ["None yet", "Under 1 year", "1 – 3 years", "3 – 5 years", "5+ years"],
  },
  {
    name: "availability",
    label: "Availability",
    type: "select",
    options: ["Full time", "Part time", "Weekends only", "Flexible"],
    full: true,
  },
  { name: "about", label: "Tell us about yourself", type: "textarea", placeholder: "What you have done, what you are looking for, and whether you have a driver's license." },
];

const benefits = [
  ["W-2 employment", "Not contract work. Payroll taxes, workers' comp, the whole thing."],
  ["Paid training", "Eight days, paid from day one, before you are sent to a client."],
  ["Health coverage", "Medical and dental for full-time crew after 60 days."],
  ["Paid time off", "Accrued from your first shift, plus paid holidays."],
  ["Mileage and supplies", "Covered. You never buy your own products."],
  ["Real advancement", "Every crew lead we have was promoted from cleaner."],
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Careers"
        title={<>We hire employees, <span className="italic">not contractors.</span></>}
        lede={`That is an unusual choice in this industry and it is the reason ${business.crewSize} people work here. Paid training, benefits, and a crew that stays together.`}
      />

      <Container className="grid gap-16 py-20 lg:grid-cols-[1fr_1.1fr] lg:py-28">
        <aside>
          <Label>What we offer</Label>
          <ul className="mt-8 border-t border-line">
            {benefits.map(([title, detail]) => (
              <li key={title} className="border-b border-line py-6">
                <h2 className="font-sans text-lg font-semibold tracking-tight text-ink">
                  {title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted">{detail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-line bg-accent-wash p-8">
            <p className="label-mono">Questions about a role</p>
            <a
              href={business.phoneHref}
              className="mt-1.5 inline-block cursor-pointer py-1 font-display text-3xl text-ink transition-colors duration-200 hover:text-accent"
            >
              {business.phone}
            </a>
          </div>
        </aside>

        <div>
          <Label>Apply</Label>
          <div className="mt-8">
            <SiteForm
              form="careers"
              fields={fields}
              submitLabel="Send application"
              successTitle="Application received"
              successMessage="Thanks for applying. We read every application and reply within a few business days, whether or not there is a fit right now."
            />
          </div>
        </div>
      </Container>
    </>
  );
}
