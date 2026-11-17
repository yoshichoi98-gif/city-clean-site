import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/data/business";
import { leadership, team } from "@/lib/data/team";
import { Container, Label, PageHeader, Section } from "@/components/ui";
import { QualityControl } from "@/components/quality-control";
import { ClientStrip } from "@/components/client-strip";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "City Clean has cleaned Seattle homes and buildings since 2017. Employee crews, a written checklist per property, and a quality program that catches what gets missed.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title={<>One van in Ballard, <span className="italic">then forty-one buildings.</span></>}
        lede={`City Clean started in ${business.founded} with two clients and a decision not to use subcontractors. That decision is still the reason the work is consistent.`}
      />

      <div className="relative aspect-21/9 w-full overflow-hidden bg-ink">
        <Image
          src="/images/about-banner.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Label>Why we exist</Label>
            <p className="mt-6 font-display text-2xl leading-[1.35] text-ink lg:text-[1.9rem]">
              Most cleaning companies are booking engines with a subcontractor
              network behind them. Nobody trains the cleaner, nobody inspects the
              work, and nobody is accountable when a job goes wrong.
            </p>
            <div className="mt-8 space-y-5 leading-relaxed text-muted">
              <p>
                We went the other way. Every cleaner is a W-2 employee who goes
                through an eight-day training program before touching a client&rsquo;s
                home. Every property has a written checklist built during a
                walkthrough. Every job is signed off by a crew lead, and a random
                sample is inspected each month by someone whose only job is quality.
              </p>
              <p>
                It is a more expensive way to run a cleaning company. It is also the
                only way we have found to make the tenth visit as good as the first,
                which is the only thing clients actually care about.
              </p>
              <p>
                Today we run {business.crewSize} crew members across Seattle and the
                Eastside, serving private homes alongside {business.buildingsServed}{" "}
                apartment communities and property managers.
              </p>
            </div>
          </div>

          <dl className="border-t border-line">
            {[
              ["Founded", String(business.founded)],
              ["Crew members", `${business.crewSize} W-2 employees`],
              ["Units turned", business.unitsTurned],
              ["Buildings served", String(business.buildingsServed)],
              ["Average rating", `${business.rating} / 5 · ${business.reviewCount} reviews`],
              ["Service area", "Seattle and the Eastside"],
            ].map(([term, value]) => (
              <div
                key={term}
                className="flex items-baseline justify-between gap-6 border-b border-line py-5"
              >
                <dt className="label-mono">{term}</dt>
                <dd className="text-right font-display text-xl text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <section className="border-t border-line bg-paper-warm">
        <Container className="py-20 lg:py-28">
          <Label>Leadership</Label>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member) => (
              <li key={member.name}>
                <div className="relative aspect-4/5 overflow-hidden bg-paper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">
                  {member.name}
                </h3>
                <p className="label-mono mt-1.5">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Label>The full team</Label>
        <ul className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <li key={member.name} className="bg-paper p-6">
              <div className="relative mb-5 aspect-square overflow-hidden bg-paper-warm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 20vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-sans text-base font-semibold tracking-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
              <p className="label-mono mt-3">Since {member.since}</p>
            </li>
          ))}
        </ul>
      </Section>

      <QualityControl />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Label>Credentials</Label>
            <h2 className="mt-5 text-[2.5rem] leading-[1.03] sm:text-5xl">
              The paperwork, <span className="italic">on request.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Ask and you get a PDF the same day. Property managers get an
              additional insured endorsement per building as standard.
            </p>
          </div>
          <ul className="border-t border-line">
            {business.credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-center gap-4 border-b border-line py-5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-accent"
                >
                  <path d="M12 3l7.5 3v6c0 4.4-3.1 8.2-7.5 9.4C7.6 20.2 4.5 16.4 4.5 12V6Z" />
                  <path d="m9 12 2.2 2.2L15.5 10" />
                </svg>
                <span className="text-ink">{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ClientStrip />
      <CtaBanner />
    </>
  );
}
