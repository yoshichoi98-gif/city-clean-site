import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Booked in a minute, not an afternoon
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No in-home estimate, no sales visit, no waiting three days for a callback.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-lg font-extrabold text-on-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
