import { Container, Label, Ordinal } from "./ui";

const controls = [
  {
    title: "A checklist per property, not per company",
    detail:
      "Every contract has its own written checklist, built during the walkthrough and amended whenever the space changes. Crews work from the document, not from memory.",
  },
  {
    title: "Crew lead signs off before leaving",
    detail:
      "A lead inspects room by room against the checklist and records completion. If something is incomplete, it is fixed before the crew leaves the site.",
  },
  {
    title: "Unannounced inspections, monthly",
    detail:
      "Our quality manager audits a random sample of jobs each month. Scores go to crew leads, and repeated misses trigger retraining rather than a warning.",
  },
  {
    title: "24 hours to tell us we got it wrong",
    detail:
      "Flag anything within a day and we return at no charge. No arbitration, no supervisor visit first, no invoice. It is the only guarantee worth writing down.",
  },
];

export function QualityControl({ className = "" }: { className?: string }) {
  return (
    <section className={`border-y border-line bg-accent-wash ${className}`}>
      <Container className="py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Label>Quality control</Label>
            <h2 className="mt-5 text-[2.5rem] leading-[1.03] sm:text-5xl">
              The part most companies leave to chance
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Cleaning quality is not about effort. It is about whether a system
              exists to catch the thing that got missed. Ours is four steps and it
              runs on every job.
            </p>
          </div>

          <ul>
            {controls.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line-strong py-7 last:border-b"
              >
                <Ordinal n={i + 1} />
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
