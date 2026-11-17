export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: { title: string; detail: string }[];
  image: string;
  audience: "Residential" | "Property management";
  startingAt: string;
};

export const services: Service[] = [
  {
    slug: "recurring-home-cleaning",
    title: "Recurring home cleaning",
    audience: "Residential",
    startingAt: "$139 / visit",
    shortDescription:
      "Weekly, biweekly or monthly upkeep from a crew that learns your home.",
    fullDescription:
      "The same two-person crew arrives on the same day each cycle, works from a checklist built during your walkthrough, and adjusts it as your home changes. Most clients start on a biweekly cycle after an initial deep clean, then move to weekly or monthly once they see how much the house actually needs.",
    benefits: [
      "The same crew every visit, not a rotating roster",
      "A written checklist you can amend any time",
      "Flat per-visit pricing, never hourly",
      "Free re-clean within 24 hours if something is missed",
      "Reschedule or skip a visit at no charge with a day's notice",
    ],
    process: [
      { title: "Walkthrough", detail: "We measure, note surfaces and build the checklist with you." },
      { title: "Reset clean", detail: "A one-time deep clean brings the home to baseline." },
      { title: "Cycle begins", detail: "Your crew returns on a fixed day at a fixed rate." },
      { title: "Quarterly review", detail: "We revisit the checklist and adjust for how you actually live." },
    ],
    image: "/images/services/recurring.jpg",
  },
  {
    slug: "deep-cleaning",
    title: "Deep cleaning",
    audience: "Residential",
    startingAt: "$289 one time",
    shortDescription:
      "A full reset for a home that has not had a professional clean in a while.",
    fullDescription:
      "Deep cleaning is everything a standard visit covers plus the work that gets skipped for months at a time: inside appliances, baseboards, vents, door frames, light fixtures, grout, hard water and soap scum. It takes a crew most of a day and it is the honest starting point for almost every home.",
    benefits: [
      "Inside the oven, fridge and dishwasher",
      "Baseboards, vents, door frames and switch plates",
      "Grout, hard water deposits and soap scum",
      "Light fixtures, ceiling fans and vent covers",
      "Interior windows and window tracks",
    ],
    process: [
      { title: "Scope and quote", detail: "Square footage, condition and any problem areas you flag." },
      { title: "Full-day crew", detail: "Two to four cleaners depending on the size of the home." },
      { title: "Lead walkthrough", detail: "The crew lead inspects room by room before leaving." },
      { title: "Your review", detail: "24 hours to flag anything for a free return visit." },
    ],
    image: "/images/services/deep.jpg",
  },
  {
    slug: "move-in-move-out",
    title: "Move in / move out",
    audience: "Residential",
    startingAt: "$349 one time",
    shortDescription:
      "Deposit-back cleaning for an empty unit, done to landlord standards.",
    fullDescription:
      "An empty home gets cleaned differently. Nothing is in the way, so everything is in scope: inside every cabinet and drawer, inside every appliance, every window track, every closet shelf. We clean to the standard a property manager inspects against, and if a landlord flags something we come back free.",
    benefits: [
      "Inside all cabinets, drawers and closets",
      "Inside oven, fridge, freezer and dishwasher",
      "Window interiors, sills and tracks",
      "Wall spot-cleaning and scuff removal",
      "Free return visit if the walkthrough flags anything",
    ],
    process: [
      { title: "Book the date", detail: "Usually the day after the truck leaves and before handoff." },
      { title: "Full unit clean", detail: "Top to bottom in an empty space, nothing skipped." },
      { title: "Photo record", detail: "We document the finished unit for your records." },
      { title: "Walkthrough backup", detail: "If the landlord flags anything, we return at no cost." },
    ],
    image: "/images/services/moveout.jpg",
  },
  {
    slug: "unit-turnovers",
    title: "Unit turnovers",
    audience: "Property management",
    startingAt: "Contract pricing",
    shortDescription:
      "Same-day and next-day turns for apartment communities, priced per unit.",
    fullDescription:
      "For property managers running a leasing calendar, turn speed is the whole game. We hold capacity for partner buildings, accept work orders by email or portal, and return a photo-documented unit ready to show. Pricing is per unit and per floor plan, agreed up front, so your turn budget is predictable.",
    benefits: [
      "Per-unit pricing agreed by floor plan",
      "Same-day and next-day turns for partner buildings",
      "Photo documentation on every completed unit",
      "Certificates of insurance issued per property",
      "One invoice per property per month",
    ],
    process: [
      { title: "Property walkthrough", detail: "We tour the building and price each floor plan." },
      { title: "Capacity agreement", detail: "We reserve crew hours against your turn calendar." },
      { title: "Work orders", detail: "Send them by email or portal, we confirm within the hour." },
      { title: "Photo handoff", detail: "Documented, show-ready units and one monthly invoice." },
    ],
    image: "/images/services/turnover.jpg",
  },
  {
    slug: "common-areas",
    title: "Common areas & amenities",
    audience: "Property management",
    startingAt: "Contract pricing",
    shortDescription:
      "Lobbies, gyms, lounges and corridors on a schedule residents notice.",
    fullDescription:
      "Common areas are what prospective residents judge a building on and what current residents complain about. We run scheduled routes through lobbies, mail rooms, fitness centers, lounges, corridors, elevators and trash rooms, with a logged checklist per visit so you can see exactly what was done and when.",
    benefits: [
      "Scheduled routes, daily through weekly",
      "Logged checklist per visit, visible to your team",
      "Fitness equipment and high-touch surface protocols",
      "Trash room and chute maintenance",
      "Escalation path for resident complaints",
    ],
    process: [
      { title: "Route design", detail: "We map every space and set a frequency for each." },
      { title: "Checklist build", detail: "Task-level detail so nothing depends on memory." },
      { title: "Scheduled service", detail: "Crews run the route and log completion per area." },
      { title: "Monthly report", detail: "Completion rates and anything that needs your attention." },
    ],
    image: "/images/services/common.jpg",
  },
  {
    slug: "post-construction",
    title: "Post-construction cleanup",
    audience: "Property management",
    startingAt: "Bid per project",
    shortDescription:
      "Rough, final and touch-up cleans for renovations and new delivery.",
    fullDescription:
      "Construction dust migrates for weeks. We work in the standard three phases: a rough clean once debris is out, a final clean before inspection, and a touch-up right before handoff or move-in. Crews are OSHA-trained, carry their own HEPA equipment, and coordinate directly with your GC's schedule.",
    benefits: [
      "Three-phase rough, final and touch-up",
      "HEPA vacuums and dust containment",
      "OSHA-trained crew leads",
      "Direct coordination with your general contractor",
      "Adhesive, paint and grout haze removal",
    ],
    process: [
      { title: "Site visit", detail: "We walk the site with your GC and scope each phase." },
      { title: "Rough clean", detail: "After debris removal, before finish work completes." },
      { title: "Final clean", detail: "Detailed clean ahead of inspection." },
      { title: "Touch-up", detail: "Last pass immediately before handoff." },
    ],
    image: "/images/services/construction.jpg",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
