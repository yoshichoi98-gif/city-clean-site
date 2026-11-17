/**
 * Shared business info. Consumed site-wide — header, footer, contact page,
 * schema markup. Change it once here.
 */
export const business = {
  name: "City Clean",
  legalName: "City Clean LLC",
  tagline: "Seattle's cleaning partner for homes and buildings",
  description:
    "Commercial-grade cleaning for Seattle homes, apartment communities and property managers. Employee crews, flat pricing, and a walkthrough before every contract.",

  phone: "(206) 555-0142",
  phoneHref: "tel:+12065550142",
  email: "hello@example.com",
  addressLine: "123 Example St, Suite 200",
  city: "Seattle",
  state: "WA",
  zip: "98107",

  hours: [
    { days: "Monday – Friday", time: "7:00am – 7:00pm" },
    { days: "Saturday", time: "8:00am – 5:00pm" },
    { days: "Sunday", time: "Closed" },
  ],

  founded: 2017,
  crewSize: 34,
  unitsTurned: "6,800+",
  buildingsServed: 41,
  rating: "4.9",
  reviewCount: 380,

  credentials: [
    "Licensed, bonded and insured in Washington State",
    "WA UBI on file",
    "$2M general liability coverage",
    "Certificates of insurance issued per building",
    "OSHA-trained crew leads",
    "E-Verify employer, W-2 crews",
  ],

  clients: [
    "Ballard apartment community",
    "Capitol Hill mid-rise",
    "South Lake Union tower",
    "Fremont townhomes",
    "Queen Anne condos",
    "Rainier Valley new build",
  ],

  mapEmbed:
    "https://www.google.com/maps?q=Seattle,+WA&output=embed",
} as const;
