import { business, testimonials } from "@/lib/content";
import { StarIcon } from "./icons";

export function Testimonials() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-secondary">
            What clients say
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-on-primary sm:text-4xl">
            {business.homesCleaned} Seattle homes cleaned since {new Date().getFullYear() - business.yearsInBusiness}
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="flex flex-col rounded-2xl bg-card p-7">
              <span className="flex gap-0.5 text-accent" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4.5 w-4.5" />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-border-soft pt-4">
                <p className="font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
