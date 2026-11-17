import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/data/business";
import { services } from "@/lib/data/services";
import { beforeAfter } from "@/lib/data/before-after";
import { featuredTestimonials } from "@/lib/data/testimonials";
import { ArrowRight, Button, Container, Label, Section, SectionHead } from "@/components/ui";
import { SideTab } from "@/components/side-tab";
import { QualityControl } from "@/components/quality-control";
import { ClientStrip } from "@/components/client-strip";
import { CtaBanner } from "@/components/cta-banner";
import { GalleryGrid } from "@/components/gallery-grid";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const highlights = [
  {
    stat: business.unitsTurned,
    label: "Units turned since 2017",
    detail: "Across 41 Seattle buildings, documented unit by unit.",
  },
  {
    stat: `${business.crewSize}`,
    label: "W-2 crew members",
    detail: "Background-checked employees, never subcontractors.",
  },
  {
    stat: "24hr",
    label: "Re-clean window",
    detail: "Flag anything within a day and we return free.",
  },
  {
    stat: business.rating,
    label: `Average of ${business.reviewCount} reviews`,
    detail: "Homeowners, renters and property managers.",
  },
];

export default function HomePage() {
  return (
    <>
      <SideTab />

      {/* Hero — full-bleed image, oversized light serif, mono corner data */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-ink/95 via-ink/70 to-ink/45"
        />

        <div className="label-mono absolute right-6 top-8 hidden text-right !text-accent-light/80 lg:block">
          <p>Seattle, Washington</p>
          <p>Est. {business.founded}</p>
          <p>{business.buildingsServed} buildings served</p>
          <p>Licensed · bonded · insured</p>
        </div>

        <Container className="relative z-10 pb-20 pt-32 lg:pb-28">
          <div className="reveal max-w-4xl">
            <Label className="!text-accent-light">City Clean · Seattle</Label>
            <h1 className="mt-6 text-[3rem] leading-[0.98] !text-paper sm:text-6xl lg:text-[5.5rem]">
              A clean that holds up
              <br />
              <span className="italic text-accent-light">to a walkthrough.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
              Commercial-grade cleaning for Seattle homes, apartment communities
              and property managers. Employee crews, flat pricing, and a written
              checklist behind every contract.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schedule-walkthrough"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-paper"
              >
                Book a walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-paper/30 px-7 py-4 text-sm font-medium text-paper transition-colors duration-200 hover:border-paper"
              >
                See services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlight cards */}
      <Section className="bg-paper">
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <li key={item.label} className="bg-paper p-8">
              <p className="font-display text-5xl tracking-tight text-accent">
                {item.stat}
              </p>
              <p className="mt-4 font-medium text-ink">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ClientStrip />

      {/* Featured services */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            label="Services"
            title={<>Two kinds of client, <span className="italic">one standard.</span></>}
            lede="We clean private homes and we clean the buildings people rent. The checklist discipline is identical."
          />
          <Button href="/services" variant="secondary">
            All services
          </Button>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="bg-paper">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full cursor-pointer flex-col p-8 transition-colors duration-300 hover:bg-card"
              >
                <div className="relative mb-7 aspect-3/2 overflow-hidden bg-paper-warm">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <Label>{service.audience}</Label>
                <h3 className="mt-3 font-sans text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <p className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
                  {service.startingAt}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Before / after preview */}
      <section className="border-y border-line bg-paper-warm">
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              label="Before / after"
              title={<>The part that <span className="italic">actually</span> convinces people.</>}
              lede="Drag the handle to compare each space before and after a visit."
            />
            <Button href="/before-after" variant="secondary">
              See all comparisons
            </Button>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {beforeAfter.slice(0, 2).map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            label="Gallery"
            title="Recent work around the city"
          />
          <Button href="/gallery" variant="secondary">
            Full gallery
          </Button>
        </div>
        <div className="mt-14">
          <GalleryGrid limit={6} />
        </div>
      </Section>

      {/* Testimonials preview */}
      <section className="border-y border-line bg-paper-warm">
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead label="Testimonials" title="What clients say" />
            <Button href="/testimonials" variant="secondary">
              Read all
            </Button>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
            {featuredTestimonials.map((item) => (
              <li key={item.name} className="flex flex-col bg-paper-warm p-8">
                <blockquote className="flex-1 font-display text-2xl leading-[1.3] text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-8">
                  <p className="font-medium text-ink">{item.name}</p>
                  <p className="label-mono mt-1.5">{item.context}</p>
                </footer>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <QualityControl />
      <CtaBanner />
    </>
  );
}
