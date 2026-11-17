import { serviceAreas } from "@/lib/content";

export function ServiceAreas() {
  return (
    <section id="areas" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Service area</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Seattle and the Eastside
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          If your neighborhood is not on the list, call us anyway. We add routes as we grow.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2.5">
        {serviceAreas.map((area) => (
          <li
            key={area}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold whitespace-nowrap text-foreground"
          >
            {area}
          </li>
        ))}
      </ul>
    </section>
  );
}
