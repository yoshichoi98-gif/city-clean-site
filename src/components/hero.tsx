import { business, hero, trustPoints } from "@/lib/content";
import { CheckIcon, StarIcon, trustIcons } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-success" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {hero.heading}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subheading}
          </p>

          <ul className="mt-7 grid gap-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-foreground">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="font-medium">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="cursor-pointer rounded-xl bg-accent px-7 py-4 text-center text-base font-bold text-on-accent shadow-sm transition-all duration-200 hover:bg-accent-hover hover:shadow-md"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#pricing"
              className="cursor-pointer rounded-xl border-2 border-primary bg-card px-7 py-4 text-center text-base font-bold text-primary transition-colors duration-200 hover:bg-surface"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="flex gap-0.5 text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4.5 w-4.5" />
              ))}
            </span>
            <span className="font-bold text-foreground">{business.rating} out of 5</span>
            <span className="text-muted-foreground">
              from {business.reviewCount} Seattle reviews
            </span>
          </div>
        </div>

        {/* Quote-preview card — shows what the visitor gets, no stock photo needed */}
        <div className="reveal lg:justify-self-end" style={{ animationDelay: "120ms" }}>
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-xl shadow-primary/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Sample quote
            </p>
            <p className="mt-2 text-xl font-bold text-foreground">
              3 bed / 2 bath in Ballard
            </p>

            <dl className="mt-6 space-y-3.5 border-y border-border-soft py-6">
              {[
                ["Biweekly standard clean", "$149"],
                ["First deep clean", "$289"],
                ["Travel and supplies", "Included"],
                ["Satisfaction guarantee", "Included"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-bold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-baseline justify-between">
              <span className="font-semibold text-foreground">Your flat rate</span>
              <span className="text-3xl font-extrabold text-primary">$149</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Locked in per visit. No hourly billing, no day-of surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Proof bar — step 2 of the Trust &amp; Authority pattern */}
      <div className="border-t border-border bg-card">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => {
            const Icon = trustIcons[i];
            return (
              <li key={point.label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-bold leading-snug text-foreground">{point.label}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{point.detail}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
