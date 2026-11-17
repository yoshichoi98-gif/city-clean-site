export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  context: string;
  featured: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Third company we tried in Ballard and the first one we kept. Same two people every time, and they actually remember that we take shoes off at the door.",
    name: "Marisa T.",
    role: "Homeowner",
    context: "Ballard · biweekly since 2023",
    featured: true,
  },
  {
    quote:
      "We run 180 units and turn speed is the whole business. City Clean holds capacity for us, confirms work orders within the hour, and sends photos on every unit. Our vacancy days dropped by four.",
    name: "P.R.",
    role: "Regional Property Manager",
    context: "Ballard apartment community · unit turns",
    featured: true,
  },
  {
    quote:
      "Booked a move-out clean on Thursday for a Saturday handoff. The property manager did the walkthrough and we got the full deposit back.",
    name: "Devin R.",
    role: "Renter",
    context: "Capitol Hill · move-out clean",
    featured: true,
  },
  {
    quote:
      "The monthly report is the part I did not know I needed. I can see which common areas were serviced and when, which ends the argument with residents before it starts.",
    name: "C.F.",
    role: "Community Manager",
    context: "Capitol Hill mid-rise · common areas",
    featured: false,
  },
  {
    quote:
      "Quote came in twenty minutes and nobody had to come measure my apartment first. That alone sold me.",
    name: "Priya S.",
    role: "Renter",
    context: "South Lake Union · monthly",
    featured: false,
  },
  {
    quote:
      "Our GC has worked with a lot of cleaning outfits. He asked for their number after the first phase.",
    name: "J.O.",
    role: "Development Associate",
    context: "Queen Anne condos · post-construction",
    featured: false,
  },
  {
    quote:
      "They missed a bathroom once. Crew was back the next morning before I left for work, no argument, no invoice.",
    name: "Tom B.",
    role: "Homeowner",
    context: "Magnolia · weekly",
    featured: false,
  },
  {
    quote:
      "Every crew member is W-2 and background-checked, and they hand me a COI for the building without me having to chase it. That is rarer than it should be.",
    name: "A.M.",
    role: "Asset Manager",
    context: "South Lake Union tower",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
