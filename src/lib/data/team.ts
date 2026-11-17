export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  leadership: boolean;
  since: number;
};

export const team: TeamMember[] = [
  {
    name: "Dani Okonkwo",
    role: "Founder & Managing Director",
    bio: "Started City Clean in 2017 with one van and two clients in Ballard. Still runs every new property walkthrough personally.",
    image: "/images/team/dani.svg",
    leadership: true,
    since: 2017,
  },
  {
    name: "Marcus Feld",
    role: "Director of Operations",
    bio: "Builds the routes and the turn calendar. Fifteen years in multifamily facilities before joining in 2019.",
    image: "/images/team/marcus.svg",
    leadership: true,
    since: 2019,
  },
  {
    name: "Rosa Villanueva",
    role: "Quality Control Manager",
    bio: "Runs the inspection program and trains every new crew lead. Signs off on the checklist behind each contract.",
    image: "/images/team/rosa.svg",
    leadership: true,
    since: 2018,
  },
  {
    name: "Thanh Pham",
    role: "Client Accounts Lead",
    bio: "The person property managers actually call. Handles work orders, COIs and monthly reporting.",
    image: "/images/team/thanh.svg",
    leadership: true,
    since: 2020,
  },
  {
    name: "Aisha Rahman",
    role: "Crew Lead, North Seattle",
    bio: "Leads the Ballard, Fremont and Green Lake routes.",
    image: "/images/team/aisha.svg",
    leadership: false,
    since: 2019,
  },
  {
    name: "Gabriel Ruiz",
    role: "Crew Lead, Downtown & SLU",
    bio: "Runs high-rise common areas and amenity routes.",
    image: "/images/team/gabriel.svg",
    leadership: false,
    since: 2020,
  },
  {
    name: "Nadia Petrova",
    role: "Crew Lead, Eastside",
    bio: "Covers Bellevue, Kirkland and Redmond turnovers.",
    image: "/images/team/nadia.svg",
    leadership: false,
    since: 2021,
  },
  {
    name: "Jerome Baptiste",
    role: "Crew Lead, Post-Construction",
    bio: "Coordinates directly with general contractors on phased cleans.",
    image: "/images/team/jerome.svg",
    leadership: false,
    since: 2021,
  },
  {
    name: "Sofia Marchetti",
    role: "Scheduler",
    bio: "Owns the dispatch board and every same-day change.",
    image: "/images/team/sofia.svg",
    leadership: false,
    since: 2022,
  },
  {
    name: "Andre Whitfield",
    role: "Training Coordinator",
    bio: "Onboards every new cleaner through the eight-day program.",
    image: "/images/team/andre.svg",
    leadership: false,
    since: 2022,
  },
];

export const leadership = team.filter((m) => m.leadership);
