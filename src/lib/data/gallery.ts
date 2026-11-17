export type GalleryCategory =
  | "Residential"
  | "Common areas"
  | "Unit turns"
  | "Post-construction";

export type GalleryItem = {
  id: string;
  caption: string;
  category: GalleryCategory;
  image: string;
  location: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Residential",
  "Common areas",
  "Unit turns",
  "Post-construction",
];

export const gallery: GalleryItem[] = [
  { id: "g1", caption: "Kitchen reset after a deep clean", category: "Residential", image: "/images/gallery/g1.jpg", location: "Ballard" },
  { id: "g2", caption: "Primary bath, hard water removed", category: "Residential", image: "/images/gallery/g2.jpg", location: "Queen Anne" },
  { id: "g3", caption: "Living room, biweekly cycle", category: "Residential", image: "/images/gallery/g3.jpg", location: "Fremont" },
  { id: "g4", caption: "Hardwood restored in a 1920s craftsman", category: "Residential", image: "/images/gallery/g4.jpg", location: "Wallingford" },
  { id: "g5", caption: "Lobby route, weekday mornings", category: "Common areas", image: "/images/gallery/g5.jpg", location: "South Lake Union" },
  { id: "g6", caption: "Fitness center, daily protocol", category: "Common areas", image: "/images/gallery/g6.jpg", location: "Capitol Hill" },
  { id: "g7", caption: "Resident lounge before an open house", category: "Common areas", image: "/images/gallery/g7.jpg", location: "Belltown" },
  { id: "g8", caption: "Elevator lobby, high-touch surfaces", category: "Common areas", image: "/images/gallery/g8.jpg", location: "Downtown" },
  { id: "g9", caption: "One-bedroom turn, same-day", category: "Unit turns", image: "/images/gallery/g9.jpg", location: "Ballard apartment community" },
  { id: "g10", caption: "Studio turn ready to show", category: "Unit turns", image: "/images/gallery/g10.jpg", location: "Capitol Hill mid-rise" },
  { id: "g11", caption: "Two-bedroom, appliance detail", category: "Unit turns", image: "/images/gallery/g11.jpg", location: "South Lake Union tower" },
  { id: "g12", caption: "Final clean before inspection", category: "Post-construction", image: "/images/gallery/g12.jpg", location: "Queen Anne condos" },
  { id: "g13", caption: "Grout haze removal, new build", category: "Post-construction", image: "/images/gallery/g13.jpg", location: "Rainier Valley new build" },
  { id: "g14", caption: "Touch-up pass before handoff", category: "Post-construction", image: "/images/gallery/g14.jpg", location: "Fremont townhomes" },
];
