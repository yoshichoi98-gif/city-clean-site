import Link from "next/link";
import type { ReactNode } from "react";

/* Micro-label. The mono "// SECTION" device the reference sites use. */
export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-mono ${className}`}>
      <span aria-hidden>{"// "}</span>
      {children}
    </p>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[78rem] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 lg:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200";

const variants = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary:
    "border border-line-strong bg-card text-ink hover:border-ink hover:bg-paper",
  ghost: "text-ink underline-offset-4 hover:text-accent hover:underline px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${buttonBase} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/* Section heading: mono label, oversized light serif, optional lede. */
export function SectionHead({
  label,
  title,
  lede,
  align = "left",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {label && <Label>{label}</Label>}
      <h2 className="mt-5 text-[2.5rem] leading-[1.03] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 text-lg leading-relaxed text-muted">{lede}</p>
      )}
    </div>
  );
}

/* Thin rule with a mono counter, used between list rows. */
export function Ordinal({ n }: { n: number }) {
  return (
    <span className="label-mono shrink-0 tabular-nums">
      {String(n).padStart(2, "0")}
    </span>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* Interior page header. Consistent across every route except home. */
export function PageHeader({
  label,
  title,
  lede,
  children,
}: {
  label: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-paper-warm">
      <Container className="pb-16 pt-16 lg:pb-20 lg:pt-24">
        <div className="reveal max-w-3xl">
          <Label>{label}</Label>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {lede}
            </p>
          )}
          {children}
        </div>
      </Container>
    </header>
  );
}
