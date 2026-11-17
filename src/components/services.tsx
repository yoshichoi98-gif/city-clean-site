import { services } from "@/lib/content";
import { CheckIcon, serviceIcons } from "./icons";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Services</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Pick the clean your home actually needs
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every service is quoted at a flat rate before we arrive, and every visit is covered
          by the same re-clean guarantee.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
          return (
            <li
              key={service.name}
              className="group rounded-2xl border border-border-soft bg-card p-7 transition-all duration-200 hover:border-border hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-on-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-accent-tint px-3 py-1 text-sm font-bold text-accent-hover">
                  {service.price}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">{service.name}</h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckIcon className="h-4 w-4 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
