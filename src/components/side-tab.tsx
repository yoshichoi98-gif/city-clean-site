import Link from "next/link";

/**
 * Fixed side tab. Home page only — links residents to the booking page.
 * Hidden below lg where it would cover content.
 */
export function SideTab() {
  return (
    <Link
      href="/book-a-unit"
      className="group fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 translate-x-0 cursor-pointer items-center gap-2 rounded-l-lg bg-ink py-5 pl-4 pr-3 text-accent-light shadow-lg transition-all duration-200 hover:bg-accent lg:flex"
      style={{ writingMode: "vertical-rl" }}
    >
      <span className="text-sm font-medium tracking-wide">Resident booking</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}
