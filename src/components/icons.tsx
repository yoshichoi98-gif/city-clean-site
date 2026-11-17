/**
 * Inline SVG icons (Lucide geometry). No emoji, no icon font, no extra dependency.
 * Decorative by default: aria-hidden so screen readers skip them and read the label instead.
 */
type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function SparklesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9.9 4.2 11 7.6a2 2 0 0 0 1.3 1.3l3.4 1.1-3.4 1.1a2 2 0 0 0-1.3 1.3l-1.1 3.4-1.1-3.4a2 2 0 0 0-1.3-1.3L4.1 10l3.4-1.1a2 2 0 0 0 1.3-1.3Z" />
      <path d="M18 5v3M19.5 6.5h-3M17.5 15v3M19 16.5h-3" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="M10.5 12.5 20 3M17 6l2.5 2.5M14.5 8.5 17 11" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10" />
      <path d="M2 21h20M7.5 8h3M7.5 12h3M7.5 16h3M18 14h.01M18 17.5h.01" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l7.5 3v6c0 4.4-3.1 8.2-7.5 9.4C7.6 20.2 4.5 16.4 4.5 12V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className={className}>
      <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.8 6.7 19.7l1.1-6.1L3.4 9.4l6-.8Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20c0-8 5-14 16-14 0 10-5 14-11 14a5 5 0 0 1-5-5Z" />
      <path d="M4.5 19.5C9 15 12 12 16.5 9.5" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 5.2a3.5 3.5 0 0 1 0 5.6M18 14.4a6.5 6.5 0 0 1 3 5.6" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export const serviceIcons = {
  sparkles: SparklesIcon,
  home: HomeIcon,
  key: KeyIcon,
  building: BuildingIcon,
} as const;

export const trustIcons = [ShieldIcon, UsersIcon, CheckIcon, LeafIcon];
