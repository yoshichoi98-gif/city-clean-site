/**
 * When `before` and `after` are the same file, the slider renders the before
 * side through a grime filter so the room matches. Point `before` at a real
 * photograph and the filter switches itself off.
 */
export type BeforeAfter = {
  id: string;
  title: string;
  detail: string;
  category: string;
  before: string;
  after: string;
};

export const beforeAfter: BeforeAfter[] = [
  {
    id: "ba1",
    title: "Oven, six years of buildup",
    detail: "Deep clean in Wallingford. Four hours on the appliance alone.",
    category: "Deep clean",
    before: "/images/before-after/ba1-after.jpg",
    after: "/images/before-after/ba1-after.jpg",
  },
  {
    id: "ba2",
    title: "Shower glass and grout",
    detail: "Hard water and soap scum removed without abrasives.",
    category: "Deep clean",
    before: "/images/before-after/ba2-after.jpg",
    after: "/images/before-after/ba2-after.jpg",
  },
  {
    id: "ba3",
    title: "Vacated one-bedroom",
    detail: "Same-day turn at Ballard apartment community, shown the next morning.",
    category: "Unit turn",
    before: "/images/before-after/ba3-after.jpg",
    after: "/images/before-after/ba3-after.jpg",
  },
  {
    id: "ba4",
    title: "Post-renovation kitchen",
    detail: "Construction dust and adhesive residue, final phase clean.",
    category: "Post-construction",
    before: "/images/before-after/ba4-after.jpg",
    after: "/images/before-after/ba4-after.jpg",
  },
];
