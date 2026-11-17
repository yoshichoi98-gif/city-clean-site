import type { Metadata } from "next";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { Container, Label, PageHeader } from "@/components/ui";
import { SiteForm, type FieldSpec } from "@/components/site-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${business.phone} or send a message. City Clean serves Seattle and the Eastside.`,
};

const fields: FieldSpec[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Alex Rivera" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com", help: "Where we reply." },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(206) 555-0100" },
  { name: "neighborhood", label: "Neighborhood or building", placeholder: "Ballard" },
  {
    name: "service",
    label: "What do you need?",
    type: "select",
    options: ["Not sure yet", ...services.map((s) => s.title)],
    full: true,
  },
  { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about the space, the timing, and anything that needs extra attention." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title={<>Talk to a person <span className="italic">who knows the answer.</span></>}
        lede="No call center and no chatbot. Messages reach the scheduling team directly and get answered within one business day."
      />

      <Container className="grid gap-16 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <Label>Send a message</Label>
          <div className="mt-8">
            <SiteForm
              form="contact"
              fields={fields}
              submitLabel="Send message"
              successTitle="Message sent"
              successMessage="Thanks. Someone from the scheduling team will reply within one business day. If it is urgent, call us and you will get a person."
            />
          </div>
        </div>

        <aside>
          <div className="border border-line bg-card p-8">
            <Label>Direct</Label>
            <ul className="mt-6">
              <li className="border-b border-line py-4">
                <p className="label-mono">Phone</p>
                <a
                  href={business.phoneHref}
                  className="mt-1 inline-block cursor-pointer py-1.5 font-display text-2xl text-ink transition-colors duration-200 hover:text-accent"
                >
                  {business.phone}
                </a>
              </li>
              <li className="border-b border-line py-4">
                <p className="label-mono">Email</p>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-1 inline-block cursor-pointer py-2.5 break-all text-ink transition-colors duration-200 hover:text-accent"
                >
                  {business.email}
                </a>
              </li>
              <li className="border-b border-line py-4">
                <p className="label-mono">Office</p>
                <p className="mt-1.5 text-ink">
                  {business.addressLine}
                  <br />
                  {business.city}, {business.state} {business.zip}
                </p>
              </li>
              <li className="py-4">
                <p className="label-mono">Hours</p>
                <ul className="mt-2">
                  {business.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 py-1">
                      <span className="text-muted">{h.days}</span>
                      <span className="tabular-nums text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="mt-6 aspect-4/3 overflow-hidden border border-line bg-paper-warm">
            <iframe
              src={business.mapEmbed}
              title={`Map showing the ${business.name} office in Seattle`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[0.35]"
            />
          </div>
        </aside>
      </Container>
    </>
  );
}
