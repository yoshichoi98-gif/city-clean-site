export type Faq = { q: string; a: string; group: string };

export const faqs: Faq[] = [
  { group: "Getting started", q: "Do I need to be home during the cleaning?", a: "No. Most clients give us a door code or lockbox and come home to a finished house. If you would rather be there for the first visit, that is completely fine and fairly common." },
  { group: "Getting started", q: "How far in advance do I need to book?", a: "Usually two to three days for a standard clean, and about a week for deep cleans and move-outs during the summer season. Same-week openings happen often, so it is worth asking." },
  { group: "Getting started", q: "Why do you insist on a walkthrough?", a: "Because a quote given over the phone is a guess, and guesses get corrected upward on cleaning day. Fifteen minutes in the space lets us give you a flat price we will actually honor." },
  { group: "Pricing", q: "How does pricing work?", a: "Flat rates based on the size and condition of the space and how often we visit, quoted before we start. We do not bill by the hour, so a slow day is our problem rather than your invoice." },
  { group: "Pricing", q: "Do I have to sign a contract?", a: "Residential clients do not. Recurring service continues until you tell us to stop, and you can skip or cancel a visit free with a day's notice. Property management work runs on a contract because capacity is reserved for you." },
  { group: "Pricing", q: "Do you charge more for pets?", a: "No. Pet hair takes longer, which is already in the flat rate for your home. Tell us about the animals so the crew brings the right equipment." },
  { group: "The work", q: "Do you bring your own supplies?", a: "Yes, everything is included. We default to Safer Choice certified products and keep conventional disinfectants on the van for cases that need them. If you prefer we use your products, leave them out and let us know." },
  { group: "The work", q: "What if I am not happy with the clean?", a: "Call or text within 24 hours and the crew returns to redo anything that was missed, at no charge. No supervisor visit first, no invoice. That is the whole guarantee." },
  { group: "The work", q: "What if something gets broken?", a: "We tell you before you notice, and it goes through our liability coverage. Every crew is covered by a $2M general liability policy." },
  { group: "The company", q: "Are your cleaners employees or contractors?", a: "Employees. W-2, background-checked, trained through our eight-day program, and covered by our liability and bonding insurance while they are in your space." },
  { group: "The company", q: "Will I get the same crew every time?", a: "Yes, that is the point of the recurring model. Crews change only when someone leaves or moves routes, and we tell you before it happens." },
  { group: "Property management", q: "Can you issue a certificate of insurance for our building?", a: "Yes, per property, usually the same day you ask. Additional insured endorsements are standard for us." },
  { group: "Property management", q: "How quickly can you turn a unit?", a: "Partner buildings get same-day and next-day turns because we reserve crew hours against your calendar. Work orders are confirmed within the hour during business hours." },
  { group: "Property management", q: "How do you invoice?", a: "One invoice per property per month, itemized by unit and by service, net 30. Photo documentation is attached to each completed unit." },
];

export const faqGroups = [...new Set(faqs.map((f) => f.group))];
