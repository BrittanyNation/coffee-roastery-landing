# Ember & Oak Coffee Roasters — Landing Page UI Concept

An original landing page UI concept for a fictional small-batch coffee roastery: a home/landing page built around taste, roast date, and price, a blends & pricing page where every blend and extra is compared in one table, and a subscribe page with a calm subscription flow, plain-word FAQs, and a travelling order summary.

**Live demo:** https://brittanynation.github.io/coffee-roastery-landing/
- Home: https://brittanynation.github.io/coffee-roastery-landing/
- Blends & Pricing: https://brittanynation.github.io/coffee-roastery-landing/blends.html
- Subscribe: https://brittanynation.github.io/coffee-roastery-landing/subscribe.html

## Roles this supports

Built to support applications for **UI Designer**, **Front-End Designer**, **Web Designer**, and **Junior UI/UX Designer** roles — landing-page and small-business website work that sits between visual design and front-end implementation.

## What it demonstrates

- **Landing-page information architecture** — one decision per page: Home ("which coffee, and can I trust the freshness"), Blends ("how do they compare, all-in"), Subscribe ("what happens next, and what will I pay")
- **Honest pricing** — starting prices on the blend cards, a full comparison table on the blends page, grind/size/shipping costs stated with amounts, and a subscription saving shown as a real price instead of a percentage
- **Trust through specifics** — a labeled at-a-glance band (blend count, roast-to-ship window, starting price, no lock-in), a roast date printed on the bag, and subscription terms repeated where the decision happens
- **Designed states, not just screens** — a pre-selected house blend, a pre-filled sample email, an optional decaf add-on, and a total that repeats on the submit button
- **Honest form design** — a mock subscription form that says what the email will be used for before submission and states plainly that no real subscription is created
- **Accessibility-minded choices** — contrast-safe espresso/caramel/cream pairings, badges and states that use words, never color alone, skip link, `aria-current` navigation, a real `<table>` for blend comparison, native `<details>` FAQs, and real labels on every field
- **Responsive layout** — stat, blend, and note grids step down cleanly on small screens, the comparison table scrolls horizontally while remaining readable on phones, and the subscribe summary stacks below the form on mobile
- **Semantic, framework-free build** — hand-written HTML/CSS, one stylesheet, no JavaScript required, no external images; all visuals are CSS-only

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| Espresso | `#2B1D16` | Header, headings, primary actions, stat band, footer |
| Ember | `#C7512C` | Primary call to action, prices, key accents |
| Caramel | `#C68B3D` | Key numbers, highlights, gradients |
| Latte | `#E8DCC8` | Soft accents, badges, meta chips |
| Cream | `#FAF3E7` | Page background |
| Ink | `#1F1712` | Body text |

## Contents

| Page | What it covers |
| --- | --- |
| `index.html` | Home / Landing — hero with roast schedule and subscription promise, at-a-glance trust band, three blend cards with tasting notes and prices, why-buyers-choose notes, design notes and palette |
| `blends.html` | Blends & Pricing — blend comparison table, what-moves-a-price notes (grind, bag size, shipping) |
| `subscribe.html` | Subscribe — subscription form UI with blend/frequency/grind choices, gift and decaf options, travelling order summary totaling $22, and plain-word FAQs |

## Workflow note

My design workflow runs in **Sketch and Webflow**, where I design interfaces and systems visually. This demo is hand-built in HTML/CSS to show the same landing-page thinking — taste in plain words, roast dates, and honest pricing — expressed directly in code.

## Files

- `index.html` — home / landing for the concept
- `blends.html` — blends & pricing view
- `subscribe.html` — subscribe / subscription flow view
- `styles.css` — design tokens and all component styles
- `og-image.png` — 1200×627 social preview image in the project palette

## Note

This is an original portfolio concept created by Brittany Nation. Ember & Oak Coffee Roasters is a fictional business; this project is not affiliated with any real roastery. All names, prices, schedules, and figures shown are sample data, and the site takes no real orders or subscriptions.
