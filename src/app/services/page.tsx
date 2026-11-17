import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { ArrowRight, Label, PageHeader, Section } from "@/components/ui";
import { QualityControl } from "@/components/quality-control";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Recurring and deep cleaning for Seattle homes, plus unit turnovers, common areas and post-construction cleanup for property managers.",
};

const audiences = ["Residential", "Property management"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title={<>Two kinds of client, <span className="italic">one standard.</span></>}
        lede="We clean private homes and we clean the buildings people rent. Same crews, same checklist discipline, different scope and different paperwork."
      />

      {audiences.map((audience) => (
        <Section key={audience} className="border-b border-line last:border-0">
          <Label>{audience}</Label>

          <ul className="mt-10 border-t border-line">
            {services
              .filter((service) => service.audience === audience)
              .map((service, i) => (
                <li key={service.slug} className="border-b border-line">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid cursor-pointer items-center gap-8 py-10 transition-colors duration-300 lg:grid-cols-[4rem_1.4fr_1fr_10rem]"
                  >
                    <span className="label-mono hidden tabular-nums lg:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2 className="font-display text-3xl tracking-tight transition-colors duration-200 group-hover:text-accent lg:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 max-w-md leading-relaxed text-muted">
                        {service.shortDescription}
                      </p>
                      <p className="label-mono mt-4">{service.startingAt}</p>
                    </div>

                    <div className="relative aspect-3/2 overflow-hidden bg-paper-warm">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <span className="flex items-center gap-2 text-sm font-medium text-ink lg:justify-end">
                      Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </Section>
      ))}

      <QualityControl />
      <CtaBanner />
    </>
  );
}
