export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "what-a-unit-turn-actually-costs",
    title: "What a unit turn actually costs you",
    excerpt:
      "Vacancy days are the real line item. Here is how to price a turn against the rent you are not collecting.",
    date: "2026-08-19",
    category: "Property management",
    readTime: "6 min",
    image: "/images/blog/turn-cost.jpg",
    body: [
      "Most property managers price a unit turn against the invoice. That is the wrong denominator. The number that matters is the rent you do not collect while the unit sits.",
      "At $2,400 a month, a vacant unit costs about $79 a day. If a cheaper vendor takes three extra days to deliver a show-ready unit, that discount cost you $237 in rent to save maybe $60 on the clean. Do that across forty turns a year and the math stops being close.",
      "The variable worth optimizing is not price per unit. It is the time between the tenant handing back keys and the unit being photographed for the listing. Everything else is noise.",
      "When you evaluate a cleaning vendor, ask two questions. How fast can you confirm a work order, and how fast can you deliver after keys are in hand? A vendor holding reserved capacity for your building can answer both in hours. A vendor scheduling you into general availability cannot, no matter what their per-unit price says.",
      "The second thing worth paying for is documentation. A photo record of the finished unit ends the dispute about whether something was done, and it lets you list the unit without a second trip to verify.",
    ],
  },
  {
    slug: "deep-clean-versus-standard",
    title: "Deep clean or standard: how to tell what your home needs",
    excerpt:
      "An honest answer, including when you do not need the more expensive one.",
    date: "2026-07-28",
    category: "Homeowners",
    readTime: "5 min",
    image: "/images/blog/deep-vs-standard.jpg",
    body: [
      "Almost every cleaning company will tell you to start with a deep clean. We tell most people the same thing, so it is worth explaining when that is true and when it is not.",
      "A standard clean maintains a baseline. It covers surfaces, floors, kitchens and bathrooms, and it assumes the house was recently cleaned to a reasonable standard. It cannot fix a year of buildup, because the work that removes buildup takes hours a standard visit does not have.",
      "A deep clean creates that baseline. It adds inside appliances, baseboards, vents, door frames, light fixtures, grout, hard water and soap scum. It takes a crew most of a day.",
      "Here is the honest test. Look at the grout in your shower and the seal around your oven door. If both look close to how they looked when you moved in, you can start with a standard clean and skip the deep. If either one has gone a color it did not used to be, a standard clean will not touch it and you will be disappointed.",
      "One more case where you can skip it: if you have had another company cleaning regularly and you are only switching vendors, your home is already at baseline. Tell us that and we will start you on the standard rate.",
    ],
  },
  {
    slug: "what-to-ask-a-cleaning-company",
    title: "Seven questions to ask before you hire a cleaning company",
    excerpt:
      "The answers separate an insured operation from someone with a van and a website.",
    date: "2026-06-30",
    category: "Homeowners",
    readTime: "7 min",
    image: "/images/blog/questions.jpg",
    body: [
      "Cleaning is one of the few services where you hand a stranger a key and leave. These are the questions worth asking first, and what a good answer sounds like.",
      "Are your cleaners employees or contractors? Employees are trained, supervised and covered by the company's insurance. Contractors may not be. If a contractor is injured in your home, the liability question can land on your homeowner's policy.",
      "Are you bonded and insured, and can I see the certificate? A real answer is a PDF within the hour. A vague answer is the answer.",
      "Do you background-check every cleaner? Ask whether it applies to every hire or only crew leads.",
      "Will I get the same crew each visit? Rotating crews mean re-explaining your home every time, and it is the most common reason people quit a cleaning service.",
      "How do you price? Flat rates mean the company absorbs a slow day. Hourly rates mean you do.",
      "What happens if something is missed? The useful answer includes a time window and the word free.",
      "What happens if something is broken? Every company breaks something eventually. The good ones tell you before you notice.",
    ],
  },
  {
    slug: "common-area-standards-residents-notice",
    title: "The common area standards residents actually notice",
    excerpt:
      "Lobbies and gyms drive renewal conversations more than any amenity you can install.",
    date: "2026-05-22",
    category: "Property management",
    readTime: "5 min",
    image: "/images/blog/common-areas.jpg",
    body: [
      "Residents rarely renew because of a lobby. They frequently leave because of one.",
      "In exit surveys the complaints cluster in predictable places: the trash room, the fitness center, the elevator, and the mail area. All four are high-traffic, all four are visible daily, and all four degrade fast enough that a weekly schedule is not enough.",
      "The fitness center is the sharpest example. Equipment surfaces need daily attention and mirrors need it more often than anyone budgets for. A gym that looks unmaintained reads as a building that is unmaintained, regardless of how the units are kept.",
      "The fix is not more hours, it is the right frequency per space. Map every common area, assign a frequency to each, and log completion per visit. A logged route means a resident complaint can be answered with a record instead of an apology.",
      "Publish the standard to residents if you can. Buildings that post a visible service schedule get measurably fewer complaints about the same level of service.",
    ],
  },
  {
    slug: "green-cleaning-what-it-means",
    title: "What green cleaning means, and what it does not",
    excerpt:
      "The label is unregulated. Here is what to look for on an actual label.",
    date: "2026-04-15",
    category: "Homeowners",
    readTime: "4 min",
    image: "/images/blog/green.jpg",
    body: [
      "Green is not a regulated claim in cleaning products. Any company can print it, so it tells you very little on its own.",
      "The certifications that do mean something are Green Seal, EPA Safer Choice and EcoLogo. Each requires testing against a published standard rather than a marketing decision, and each appears on the product label rather than the company's website.",
      "What the certification covers is worth understanding. It generally addresses toxicity, biodegradability and packaging. It does not mean the product is safe to mix with something else, and it does not mean it is effective on every surface.",
      "The practical version for a household with kids or pets: ask which products are used in bathrooms, since that is where the harshest chemistry usually lives, and ask what the ventilation practice is. A company that cannot name its products is not thinking about this.",
      "We use Safer Choice certified products by default and keep conventional disinfectants on the van for the specific cases that need them, like a post-illness clean. If you would rather we use only your products, leave them out and tell us. That costs nothing.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
