import { pricing } from "@/lib/content";
import { CheckIcon } from "./icons";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Pricing</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Flat rates, published upfront
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Starting prices for a 2 bed / 1 bath home. Your quote is fixed to your square
          footage before we book, and it does not change on cleaning day.
        </p>
      </div>

      <ul className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {pricing.map((tier) => (
          <li
            key={tier.name}
            className={
              tier.featured
                ? "relative rounded-2xl border-2 border-primary bg-card p-8 shadow-xl shadow-primary/10 lg:-mt-4 lg:pb-10"
                : "rounded-2xl border border-border-soft bg-card p-8"
            }
          >
            {tier.featured && (
              <span className="absolute -top-3.5 left-8 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-on-primary">
                Most booked
              </span>
            )}

            <h3 className="text-lg font-bold">{tier.name}</h3>
            <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
              {tier.blurb}
            </p>

            <p className="mt-5 flex items-baseline gap-1.5">
              <span className="text-sm font-semibold text-muted-foreground">from</span>
              <span className="text-4xl font-extrabold text-foreground">${tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.cadence}</span>
            </p>

            <a
              href="#quote"
              className={
                tier.featured
                  ? "mt-6 block cursor-pointer rounded-xl bg-accent px-6 py-3.5 text-center font-bold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
                  : "mt-6 block cursor-pointer rounded-xl border-2 border-primary px-6 py-3.5 text-center font-bold text-primary transition-colors duration-200 hover:bg-surface"
              }
            >
              Get my price
            </a>

            <ul className="mt-7 grid gap-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
