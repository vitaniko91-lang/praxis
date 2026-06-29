# PRAXIS

**Intelligence, applied.** An immersive portfolio showpiece — award-level web craft, *without* the trade-offs that usually come with it.

🔗 **Live:** https://praxis-three-wine.vercel.app

PRAXIS is a fictional AI brand built as a self-directed case study: rebuilding the kind of motion-heavy, "world-class" web surface that wins awards — while getting right everything those sites typically break (reduced-motion, honest forms, semantics, keyboard, performance).

## What it proves

- **Award craft** — a persistent WebGL crystal, GSAP scroll choreography, kinetic type, smooth Lenis scrolling.
- **Without the traps** — a real `prefers-reduced-motion` gate (the three.js chunk never downloads under reduce; the canvas unmounts), an honest form (success only on a real 2xx), keyboard-operable real `<button>`/`<a>` CTAs, semantic landmarks, visible focus rings.
- **Measured** — Lighthouse **100 / 100 / 100 / 100**, FCP & LCP 0.5s, TBT 0ms, CLS 0. 37 unit + 30 e2e tests across 3 breakpoints.

## Stack

React 19 · React Three Fiber / three.js · GSAP + ScrollTrigger · Lenis · Framer Motion · Vite · TypeScript · Tailwind CSS · Vitest · Playwright · Vercel.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b && vite build` |
| `npm run preview` | Serve the production build |
| `npm test` | Unit tests (Vitest) |
| `npm run e2e` | End-to-end tests (Playwright) |
| `npm run lint` | Oxlint |
| `npm run lh` | Build + Lighthouse CI |

## Deployment

Deployed on Vercel with a self-contained serverless form endpoint (`api/submit.ts`). Pushes to `main` deploy to production; pull requests get preview deployments.

---

*Self-directed project · Design + Front-end · 2026.*
