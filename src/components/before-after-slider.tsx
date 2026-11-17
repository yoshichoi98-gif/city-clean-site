"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { BeforeAfter } from "@/lib/data/before-after";

/**
 * Comparison slider. The handle is a real range input, so it works with
 * mouse, touch, and arrow keys for free, and screen readers announce a value.
 */
export function BeforeAfterSlider({ item }: { item: BeforeAfter }) {
  const [value, setValue] = useState(50);
  const id = useId();

  // No real before shot yet — grade the same frame so the room still matches.
  const staged = item.before === item.after;

  return (
    <figure>
      <div className="relative aspect-4/3 w-full overflow-hidden bg-paper-warm select-none">
        <Image
          src={item.after}
          alt={`${item.title}, after cleaning`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.title}, before cleaning`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={staged ? "object-cover grime" : "object-cover"}
          />
        </div>

        <span className="label-mono pointer-events-none absolute left-4 top-4 bg-paper/85 px-2 py-1 !text-ink">
          Before
        </span>
        <span className="label-mono pointer-events-none absolute right-4 top-4 bg-paper/85 px-2 py-1 !text-ink">
          After
        </span>

        {/* Divider */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-paper shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper shadow-md">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-ink"
              aria-hidden
            >
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
            </svg>
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          Reveal before and after for {item.title}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuetext={`${value}% before`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="mt-5">
        <p className="label-mono">{item.category}</p>
        <h3 className="mt-2 font-sans text-lg font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-1.5 leading-relaxed text-muted">{item.detail}</p>
      </figcaption>
    </figure>
  );
}
