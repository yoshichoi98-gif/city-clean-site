# City Clean — website

A 15-page marketing site I designed and built for a friend's Seattle cleaning company, which serves both homeowners and property managers. Next.js 16 + Tailwind 4 + TypeScript. Static, no backend.

## What I built

- **15 routes:** services with their own detail pages, a filterable gallery, before/after sliders, testimonials, a blog, FAQ, careers, and four lead forms (quote, walkthrough, unit booking, contact).
- **Content separate from code:** every name, price, service, review and post lives in plain data files, so the owner can add a service or a blog post by copying one entry. The pages, navigation and index pick it up automatically.
- **A small design system:** brand tokens, a type scale and component styles, modeled on a handful of reference sites I picked for the look.
- **Accessibility checked, not assumed:** every text color pair is contrast-tested (see below), and all 15 routes were verified for mobile layout, heading structure, labelled form fields, image alt text and touch-target size.

The business details on the site are placeholders until the owner supplies the real ones. See "Not wired up yet" below.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Save any file and the browser reloads itself.
`Ctrl + C` in that terminal stops the server.

## Where the content lives

Everything editable is in `src/lib/data/`. One file per kind of thing:

| File | Controls |
|---|---|
| `business.ts` | Name, phone, email, address, hours, stats, credentials, client list. Used site-wide. |
| `services.ts` | The six services. Each one generates its own detail page automatically. |
| `team.ts` | Team members. `leadership: true` also puts them in the leadership row on /about. |
| `gallery.ts` | Gallery images and their categories (categories drive the filter buttons). |
| `before-after.ts` | Comparison slider pairs. |
| `testimonials.ts` | Reviews. `featured: true` puts one on the homepage. |
| `posts.ts` | Journal posts. Each generates its own page. |
| `faqs.ts` | FAQ entries, grouped by the `group` field. |

Add a service or a post by copying an existing entry in the array and changing the
fields. The route, the navigation and the index page all pick it up with no other work.

## Routes

```
/                      /gallery              /faq
/services              /before-after         /contact
/services/[slug]       /testimonials         /schedule-walkthrough
/about                 /blog                 /careers
                       /blog/[slug]          /book-a-unit
```

## Design system

Brand navy (`#141F38`) and light blue (`#7AA7DD`) on cool paper, oversized light-weight
Instrument Serif headings, Inter for body, and JetBrains Mono for the small `// LABEL`
markers. Tokens are at the top of `src/app/globals.css`.

Contrast is verified rather than assumed: ink 15.14:1, accent 6.31:1 and muted text
4.98:1 against the paper background, all above the 4.5:1 requirement.

**The one rule to keep:** `--color-accent-light` (`#7AA7DD`, the brand light blue) is only
2.31:1 on the paper background, so it fails as text on light. It is used exclusively on the
navy surfaces — the hero, the CTA banner, the side tab — where it reaches 6.55:1. For links
and labels on light, use `--color-accent` (`#2C5C96`), which is the same hue darkened until
it passes. If you change either, re-run the contrast check.

The reference points were primefold.ai, set.space, getfernand.com and octolane.com.
The shared traits worth preserving if you edit: large type at **weight 400** (not bold),
tight letter-spacing, full-bleed imagery, monospace micro-labels, pill-shaped buttons,
and a lot of empty space.

## Not wired up yet

- **The four forms do not send anywhere.** They validate, show a pending state and
  confirm, but nothing leaves the browser. Point `ENDPOINT` in `src/lib/submit.ts` at a
  real destination and the fetch is already written.
- **Every photograph is stock, standing in for real work.** 31 Pexels images under
  `public/images`, cropped to the right aspect ratios. Replace the file at the same path
  and it appears with no code change. Pexels' licence allows commercial use without
  attribution, but these are pictures of *other people's* buildings — they should be
  replaced with photographs of actual City Clean jobs before this is a real website.
- **The before/after pairs are one photograph each.** `before` and `after` point at the
  same file, and the slider renders the before side through a `.grime` CSS filter so the
  room matches. Point `before` at a real photograph and the filter switches itself off
  automatically. Until then, the sliders demonstrate the interaction, not real results.
- **The ten team portraits are still abstract placeholders**, on purpose. Putting a
  stranger's face under an invented name and job title on a public page is a different
  kind of problem from a placeholder phone number. Swap in real crew photos.
- **The business details are invented.** Phone, address, prices, team, reviews, UBI
  number and client names are all placeholder pending the real ones.
- **The map** on /contact points at a generic Seattle address. Update `mapEmbed` in
  `business.ts`.

## Checks

```bash
npm run build          # production build + typecheck
npx eslint src         # lint
```

All 15 routes were verified for: 200 response, no horizontal scroll at 375px, exactly
one `<h1>`, every form input paired with a real `<label>`, no missing image alt text,
no console errors, and every touch target at least 44px tall.
