/**
 * Every piece of copy and business detail on the site lives here.
 * Change it in this file and it updates everywhere. Nothing else to touch.
 */

export const business = {
  name: "City Clean",
  shortName: "City Clean",
  tagline: "Seattle's trusted home cleaning service",
  phone: "(206) 555-0142",
  phoneHref: "tel:+12065550142",
  email: "hello@example.com",
  address: "Serving Seattle and the Eastside",
  hours: "Mon–Sat, 8am–6pm",
  yearsInBusiness: 9,
  homesCleaned: "4,200+",
  rating: "4.9",
  reviewCount: 380,
};

export const hero = {
  eyebrow: "Licensed, bonded & insured in Washington",
  heading: "Come home to a place that feels new again",
  subheading:
    "Background-checked cleaners, flat upfront pricing, and the same team every visit. Book in about a minute and get your Saturday back.",
  primaryCta: "Get a free quote",
  secondaryCta: "See pricing",
  bullets: [
    "Free 60-second quote, no walkthrough needed",
    "Same cleaners every visit",
    "Reschedule or cancel free up to 24 hours ahead",
  ],
};

export const trustPoints = [
  { label: "Licensed, bonded & insured", detail: "WA UBI on file" },
  { label: "Background-checked cleaners", detail: "Every hire, no exceptions" },
  { label: "100% satisfaction guarantee", detail: "We re-clean free" },
  { label: "Eco-friendly products", detail: "Safe for kids and pets" },
];

export const services = [
  {
    icon: "sparkles",
    name: "Recurring cleaning",
    price: "from $139",
    description:
      "Weekly, biweekly, or monthly upkeep from a team that learns your home. Most clients start here.",
    includes: ["Kitchen and baths", "Floors, dusting, surfaces", "Beds made, trash out"],
  },
  {
    icon: "home",
    name: "Deep cleaning",
    price: "from $289",
    description:
      "A full reset for a home that has not had a professional clean in a while. Baseboards to ceiling fans.",
    includes: ["Inside appliances", "Baseboards and vents", "Grout and hard water"],
  },
  {
    icon: "key",
    name: "Move in / move out",
    price: "from $349",
    description:
      "Deposit-back clean for an empty unit, done to landlord and property manager standards.",
    includes: ["Inside cabinets", "Inside oven and fridge", "Windows and tracks"],
  },
  {
    icon: "building",
    name: "Apartment & condo",
    price: "from $119",
    description:
      "Priced for Seattle apartments and high-rises. We handle building check-in and COI paperwork.",
    includes: ["Studio to 2 bed", "COI for your building", "Elevator scheduling"],
  },
];

export const steps = [
  {
    title: "Tell us about your home",
    description:
      "Bedrooms, bathrooms, and how often you want us. Takes about a minute, no in-home estimate required.",
  },
  {
    title: "Get a flat price",
    description:
      "We send a fixed quote the same day. No hourly surprises, no upsell at the door.",
  },
  {
    title: "Meet your team",
    description:
      "The same background-checked cleaners show up every visit and learn how you like things done.",
  },
];

export const pricing = [
  {
    name: "Standard",
    price: 139,
    cadence: "per visit",
    blurb: "Recurring upkeep for a home that is already in good shape.",
    features: [
      "Kitchen and bathrooms",
      "Vacuum and mop all floors",
      "Dust surfaces and fixtures",
      "Beds made, trash removed",
    ],
    featured: false,
  },
  {
    name: "Deep clean",
    price: 289,
    cadence: "one time",
    blurb: "The reset most homes need before starting a recurring plan.",
    features: [
      "Everything in Standard",
      "Baseboards, vents, door frames",
      "Inside oven and fridge",
      "Grout, hard water, soap scum",
    ],
    featured: true,
  },
  {
    name: "Move out",
    price: 349,
    cadence: "one time",
    blurb: "Built to pass a landlord walkthrough and get your deposit back.",
    features: [
      "Everything in Deep clean",
      "Inside all cabinets and drawers",
      "Window interiors and tracks",
      "Free re-clean if the landlord flags it",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "Third company we tried in Ballard and the first one we kept. Same two people every time, and they actually remember that we take shoes off at the door.",
    name: "Marisa T.",
    detail: "Ballard, biweekly since 2023",
  },
  {
    quote:
      "Booked a move-out clean on Thursday for a Saturday handoff. Property manager did the walkthrough and we got the full deposit back.",
    name: "Devin R.",
    detail: "Capitol Hill, move-out clean",
  },
  {
    quote:
      "Quote came in twenty minutes, no one had to come measure my apartment first. That alone sold me.",
    name: "Priya S.",
    detail: "South Lake Union, monthly",
  },
];

export const serviceAreas = [
  "Ballard", "Capitol Hill", "Queen Anne", "Fremont", "Wallingford",
  "Green Lake", "South Lake Union", "West Seattle", "Magnolia", "Beacon Hill",
  "Columbia City", "Bellevue", "Kirkland", "Redmond", "Shoreline", "Renton",
];

export const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Most clients give us a door code or lockbox and come home to a finished house. If you would rather be there for the first visit, that is completely fine too.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes, everything is included. We use eco-friendly products that are safe around kids and pets. If you prefer we use your products instead, just leave them out and let us know.",
  },
  {
    q: "What if I am not happy with the clean?",
    a: "Call or text within 24 hours and we send the team back to redo anything that was missed, at no charge. That is the whole guarantee, no fine print.",
  },
  {
    q: "How does pricing work?",
    a: "Flat rates based on the size of your home and how often we visit, quoted upfront before we ever step inside. We do not bill by the hour, so a slow day is our problem, not your invoice.",
  },
  {
    q: "Are your cleaners employees or contractors?",
    a: "Employees. They are background-checked, W-2, trained by us, and covered by our liability and bonding insurance while they are in your home.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "Usually two to three days for a standard clean, and about a week for deep cleans and move-outs during the busy summer season. Same-week openings happen often, so it is worth asking.",
  },
];

export const finalCta = {
  heading: "Get your flat-rate quote today",
  subheading:
    "Tell us about your home and we will send a fixed price the same day. No walkthrough, no pressure, no hourly billing.",
};
