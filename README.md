# FollowMind

> Never lose a lead. Never forget a follow-up.

A cinematic dark-tech SaaS landing page built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS 3** — custom design tokens, animations
- **Playfair Display** — display serif headline font (Google Fonts)
- **JetBrains Mono** — monospace accent font (Google Fonts)
- **System sans-serif** — body/UI text (no Inter, no Geist)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo to [vercel.com](https://vercel.com) — it auto-detects Next.js.

## Project Structure

```
followmind/
├── app/
│   ├── globals.css          # Design tokens, glass, animations, grain
│   ├── layout.tsx           # Root layout + font imports
│   └── page.tsx             # Page composition — all sections
│
├── components/
│   ├── Nav.tsx              # Sticky frosted-glass navigation
│   ├── Hero.tsx             # Video BG + 3 floating animated cards
│   ├── IntegrationBar.tsx   # Google integrations trust strip
│   ├── LiveTicker.tsx       # Scrolling real-time activity marquee
│   ├── HowItWorks.tsx       # 3-step flow with arrow connectors
│   ├── Features.tsx         # Alternating layout, 3 live UI previews
│   ├── EmailDemo.tsx        # Full-width typewriter AI draft card
│   ├── Metrics.tsx          # Count-up stats with dot-grid background
│   ├── Comparison.tsx       # FollowMind vs Manual vs CRM table
│   ├── Testimonials.tsx     # 6-card masonry testimonial grid
│   ├── Pricing.tsx          # 3-tier pricing with featured glow
│   ├── FAQ.tsx              # Smooth accordion FAQ
│   ├── FooterCTA.tsx        # Email waitlist CTA + footer
│   └── GlowDivider.tsx      # Reusable blue glow section divider
│
├── lib/                     # (reserved for utilities / hooks)
├── types/                   # (reserved for TypeScript types)
├── public/                  # Static assets
│
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

## Design System

All design tokens are defined as CSS variables in `globals.css` and mirrored in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#04070E` | Page background |
| `--accent-blue` | `#4A9EFF` | CTAs, highlights |
| `--text-primary` | `#F0F4FF` | Headlines |
| `--text-secondary` | `#7A8BA8` | Body, captions |
| `--text-muted` | `#3D4F66` | Labels, metadata |
| `--green-signal` | `#3DDC97` | Status dots, active |

## Key Animations

- **Floating cards** — `translateY` loops at 3 different phase offsets
- **Scroll reveals** — `IntersectionObserver` triggers staggered slide-up
- **Typewriter** — Character-by-character email draft on scroll entry
- **Count-up** — `requestAnimationFrame` easeOutExpo counters
- **Live ticker** — CSS `marquee` keyframe, pauses on hover
- **Shimmer** — Hover sweep on all primary CTA buttons
- **Scan line** — Animated `::before` sweep on context brief card
- **Grain overlay** — SVG `feTurbulence` noise at 30% opacity on `<body>`
