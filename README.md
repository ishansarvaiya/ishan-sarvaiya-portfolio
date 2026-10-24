# Ishan Sarvaiya, portfolio

A single-page portfolio built with Vite, React, TypeScript, Tailwind, and Framer Motion.
The design follows Apple's restrained, precise style: system fonts, fluid type, translucent
navigation, and spring-based motion.

## Run locally

```sh
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/data/portfolio.ts` | All page content: stack, case studies, experience, education, hobbies |
| `public/site-config.json` | Runtime links: resume, LinkedIn, GitHub, email, Calendly, certifications |
| `src/index.css` | Design tokens (light and dark), type scale, translucent material |
| `src/lib/motion.ts` | Shared springs, press feedback, and reveal timing |
| `src/components/portfolio/` | One component per page section, plus `Primitives.tsx` |
| `index.html` | SEO and share metadata (`public/og-image.png` is the share card) |

## Design rules in the code

- Springs by default (critically damped); bounce only for momentum-driven interactions.
- Animate transform and opacity only.
- Press feedback starts on pointerdown.
- `prefers-reduced-motion`, `prefers-reduced-transparency`, and `prefers-contrast` all have fallbacks.

## Analytics

`trackEvent` in `src/lib/analytics.ts` dispatches a `portfolio-analytics` DOM event and calls
Plausible when it is present.

## Deploy

`vercel.json` rewrites every path to `index.html`, so client routes resolve.
