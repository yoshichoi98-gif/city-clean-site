import { faqs } from "@/lib/content";
import { ChevronIcon } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-24">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          The questions we get asked most
        </h2>

        <div className="mt-10 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border bg-card px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-bold text-foreground">
                {faq.q}
                <ChevronIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
