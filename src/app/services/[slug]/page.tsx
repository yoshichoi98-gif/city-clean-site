import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/data/services";
import { ArrowRight, Container, Label, Ordinal } from "@/components/ui";
import { CtaBanner } from "@/components/cta-banner";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <header className="border-b border-line bg-paper-warm">
        <Container className="pb-16 pt-16 lg:pb-20 lg:pt-24">
          <Link
            href="/services"
            className="label-mono inline-flex cursor-pointer items-center gap-2 py-3.5 transition-colors duration-200 hover:text-ink"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            All services
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div className="reveal">
              <Label>{service.audience}</Label>
              <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4rem]">
                {service.title}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <p className="label-mono mt-8">Starting at {service.startingAt}</p>
            </div>

            <div className="relative aspect-4/3 overflow-hidden bg-paper">
              <Image
                src={service.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      <Container className="grid gap-16 py-20 lg:grid-cols-[1.3fr_1fr] lg:py-28">
        <div>
          <Label>What it covers</Label>
          <p className="mt-6 font-display text-2xl leading-[1.35] text-ink lg:text-[1.75rem]">
            {service.fullDescription}
          </p>

          <h2 className="mt-16 font-sans text-sm font-semibold tracking-tight text-ink">
            <span className="label-mono">{"// Process"}</span>
          </h2>
          <ol className="mt-6 border-t border-line">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-line py-7"
              >
                <Ordinal n={i + 1} />
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="lg:pt-2">
          <div className="border border-line bg-card p-8">
            <Label>Included</Label>
            <ul className="mt-6">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 border-b border-line py-4 last:border-0 last:pb-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  >
                    <path d="m4.5 12.5 5 5 10-11" />
                  </svg>
                  <span className="leading-relaxed text-ink">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/schedule-walkthrough"
              className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent"
            >
              Book a walkthrough
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </Container>

      <section className="border-t border-line bg-paper-warm">
        <Container className="py-20">
          <Label>Other services</Label>
          <ul className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug} className="bg-paper-warm">
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full cursor-pointer flex-col p-8 transition-colors duration-300 hover:bg-paper"
                >
                  <Label>{other.audience}</Label>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">
                    {other.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {other.shortDescription}
                  </p>
                  <ArrowRight className="mt-6 h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
