"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery, galleryCategories, type GalleryCategory } from "@/lib/data/gallery";

type Filter = GalleryCategory | "All";

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All");

  const items = (filter === "All"
    ? gallery
    : gallery.filter((item) => item.category === filter)
  ).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {(["All", ...galleryCategories] as Filter[]).map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={active}
                className={`cursor-pointer rounded-full border px-5 py-3 text-sm transition-colors duration-200 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line-strong text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id} className="group">
            <div className="relative aspect-4/3 overflow-hidden bg-paper-warm">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="text-ink">{item.caption}</p>
              <p className="label-mono shrink-0">{item.location}</p>
            </div>
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="py-16 text-center text-muted">
          Nothing in this category yet.
        </p>
      )}
    </div>
  );
}
