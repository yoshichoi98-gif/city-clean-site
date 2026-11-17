import { business } from "@/lib/data/business";
import { Container, Label } from "./ui";

/**
 * Static client list. Deliberately not a carousel — a marquee that cannot be
 * paused is an accessibility problem the pattern guidance flags, and six names
 * fit on one line anyway.
 */
export function ClientStrip() {
  return (
    <section className="border-y border-line bg-paper-warm">
      <Container className="py-12">
        <Label>Trusted by Seattle buildings</Label>
        <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
          {business.clients.map((client) => (
            <li
              key={client}
              className="font-display text-xl text-ink/45 transition-colors duration-200 hover:text-ink"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
