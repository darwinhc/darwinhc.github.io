---
name: Darwin Herrera
description: Portfolio of a Senior Backend Engineer; a light, precise engineer's site where shipped systems are the introduction.
colors:
  paper: "#ffffff"
  ink: "#0a0a0b"
  text: "#27272a"
  text-2: "#3f3f46"
  muted: "#52525b"
  line: "#e4e4e7"
  line-strong: "#d4d4d8"
  subtle: "#f7f8fa"
  accent: "#1d4ed8"
  accent-hover: "#1e3a8a"
  accent-soft: "#eef2ff"
  accent-line: "#c7d2fe"
  selection: "#dbe4ff"
  dark: "#0a0a0b"
  dark-text: "#d4d4d8"
  dark-muted: "#a1a1aa"
  dark-line: "#27272a"
  dark-link: "#bfd0ff"
typography:
  display:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(38px, 2.4vw + 20px, 54px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  contact-headline:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(34px, 2.4vw + 18px, 52px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(28px, 0.8vw + 22px, 34px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  title-lg:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
  label:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
  mono:
    fontFamily: "'Fragment Mono', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "14px"
    fontWeight: 400
rounded:
  focus: "4px"
  code: "6px"
  node: "10px"
  shot: "12px"
  frame: "14px"
  phone-sm: "18px"
  phone: "22px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 32px)"
  column: "1200px"
  row-gap: "18px"
  block: "32px"
  stack: "56px"
  project: "88px"
  case-section: "104px"
  section: "112px"
  section-phone: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  header-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  header-cta-hover:
    backgroundColor: "{colors.dark-line}"
    textColor: "{colors.paper}"
  row-item-hover:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.accent}"
    padding: "22px 16px"
  arch-node:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.node}"
    padding: "12px 14px"
  arch-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  arch-domain:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "16px 20px"
  inline-code:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.text}"
    rounded: "{rounded.code}"
    padding: "2px 6px"
---

# Design System: Darwin Herrera

All values below come from the shipped build: `src/styles/global.css` (tokens, base, buttons, fact lists, device frames, split sections), `src/styles/case.css` (case studies), `src/styles/prose.css` (articles) and the scoped styles in `src/components` and `src/pages`. The frontmatter is normative. If the code and this file disagree, fix one of them on purpose. Don't let them drift apart.

## Overview

**Creative North Star: "The Engineer's Index"**

A light, precise portfolio where the work introduces the engineer. The first viewport pairs a statement with a real shipped system (the TKD scoreboard). Everything below it reads like a well-kept index: hairline rules, rows instead of cards, real screenshots in thin frames, and one cobalt accent for interaction. Density is moderate and editorial. Sections breathe (88 to 112 px vertical padding), and the text inside them is set tight and dark.

There is no ornament. The only images are real screenshots, real photos of the owner and the owner's own bisslog artwork. Hierarchy comes from type weight, ink against grey, and the rhythm of ruled rows. The site has no stats strip, no equal-card grid, no centred hero with a button row, no testimonials and no logos.

**Key Characteristics:**
- White paper, near-black ink, zinc greys, and one cobalt accent for links, focus and selection.
- One grotesque (Schibsted Grotesk) carries everything. Fragment Mono appears only on data.
- Hairline row lists and `dl` fact lists in place of cards.
- Three section surfaces: white, the light band and the dark band. Every page ends on the contact band.
- Real screenshots in thin frames, plus phone bezels drawn in CSS.

## Colors

A zinc neutral scale on pure white with one cobalt-blue accent family.

### Primary
- **Cobalt** (`accent`): body links, the primary button, focus outlines, and the domain label in the architecture diagram. Links are underlined (1px, 3px offset) by default.
- **Deep Cobalt** (`accent-hover`): hover state for links and the primary button.
- **Cobalt Mist** (`accent-soft`) with **Cobalt Hairline** (`accent-line`): fill and border of the domain pill inside the architecture hexagon, and nowhere else.
- **Selection Blue** (`selection`): the `::selection` background, with `ink` text.

### Neutral
- **Paper** (`paper`): page ground, button text on the accent, and fills for diagram nodes, chips and image frames.
- **Ink** (`ink`): h1 to h3, names, `dt` terms, strong text, the header CTA pill and phone bezels.
- **Graphite** (`text`): body copy.
- **Slate** (`text-2`): ledes, section intros, `dd` descriptions, nav links and bullet lists.
- **Pewter** (`muted`): captions, dates, the tech line, diagram labels, footer and secondary metadata. It holds at least 7:1 on white.
- **Hairline** (`line`): every 1px divider: row borders, header bottom, band edges and frame borders.
- **Strong Hairline** (`line-strong`): the secondary-button border, the entry-point node, the hexagon stroke and the blockquote rule.
- **Light Band** (`subtle`): the light band ground, row hover, inline code and the hexagon fill.

### Dark band
- **Night** (`dark`, the same value as ink): the services band and the case-study "phone" band.
- **Night Text** (`dark-text`) for body, white for headings, **Night Muted** (`dark-muted`) for secondary copy, **Night Hairline** (`dark-line`) for row rules and phone bezels, and **Night Link** (`dark-link`) for links and the focus outline on dark.

### Named Rules
**The One Voice Rule.** Cobalt means "you can act here" (links, the primary button, focus, selection). The diagram's domain pill is its only non-interactive use, and it is scoped to that component. Don't use cobalt for headings, icons, backgrounds or decoration anywhere else.

**The Ink CTA Rule.** The header "Get in touch" pill is ink, not cobalt, so it never competes with the page's own primary action.

## Typography

**Body and display font:** Schibsted Grotesk Variable (fallback: Schibsted Grotesk, system-ui, sans-serif), self-hosted via `@fontsource-variable`.
**Mono font:** Fragment Mono (fallback: ui-monospace, SFMono-Regular, monospace), via `@fontsource`.

**Character:** One confident news-grotesque with tight negative tracking at display sizes. The mono font is a quiet data voice and never a decoration.

### Hierarchy
- **Display** (h1, 600, `clamp(38px, 2.4vw + 20px, 54px)`, 1.04, -0.035em, balanced wrap): page titles. Some pages override the size: home hero is 34px on phones, CV is `clamp(32px, 2vw + 20px, 44px)` and articles are `clamp(32px, 1.8vw + 22px, 46px)` at line-height 1.1.
- **Contact headline** (600, `clamp(34px, 2.4vw + 18px, 52px)`): the contact band h2 only.
- **Headline** (h2, 600, `clamp(28px, 0.8vw + 22px, 34px)`, 1.15, -0.025em): section titles. The services band uses `clamp(30px, 1.4vw + 20px, 40px)`, CV sections use 24px with a hairline under them, and prose h2 is 28px.
- **Title** (h3, 600, 19px or 21px): role titles, split-body subheads, service titles and photo captions.
- **Body** (400, 17px, 1.6): default text. Running text is capped at 60 to 72ch.
- **Lede** (18px; 19px in the case hero), in `text-2`.
- **Prose** (18px, 1.7, max 70ch): Markdown articles.
- **Small** (15px): captions, link rows, nav. **Label** (13px, 500, `muted`, sentence case): case-meta terms and diagram column labels.
- **Mono** (Fragment Mono, 14px, `muted`): years and date ranges, CV dates and certificate years, PyPI package names, the stack ("tech") line on case studies and the CV, and code in prose.

### Named Rules
**The Mono-Is-Data Rule.** Fragment Mono appears only on dates, years, package names, stack lines and code. Headings, labels, buttons and body text stay in Schibsted Grotesk.

**The Proportional Figures Rule.** Never apply `tabular-nums` (or `font-variant-numeric`) to body text. In Schibsted Grotesk it widens commas and periods, which breaks figures like "10,000+" and "0.1". Use mono when you need aligned figures.

**The No-Eyebrow Rule.** Section titles stand alone. There is no uppercase kicker or eyebrow above any heading, and labels are sentence case.

## Layout

- **Column:** `.container` is `max-width: calc(1200px + 2 * gutter)` with gutter `clamp(20px, 4vw, 32px)` on both sides. Narrower reading columns reuse it: CV 960px, articles 760px.
- **Spacing rhythm:** home sections use 112px vertical padding (80px at ≤560px). Case-study sections use 104px (72px), project blocks 88px (64px), and the hero and inner page heads 72 to 88px. Inside a section, steps go 12, 16, 18, 20, 24, 28, 32, 40, 48 and 56px. Section intro sits 12px under h2. Lists start 32 to 40px below their intro.
- **Flex-wrap over breakpoints:** most two-column layouts are `display:flex; flex-wrap:wrap` with `flex-basis` minimums (copy 400 to 520px, media 440 to 520px) and `min-width:0`. Columns stack naturally without media queries. Use the same approach for new sections.
- **Split section:** a title column (`flex 1 1 260px`, max 320px) beside a body column (`flex 1 1 560px`, max 68ch), with a 40px/96px gap. This is the case-study default.
- **Breakpoints that exist:** `max-width: 560px` (phone: tighter padding, header collapse, hero buttons become links) and `max-width: 1023px` (architecture diagram stacks). Don't add more without reason.
- **Surfaces in order:** white sections alternate with the light band. The dark band appears once per page at most (services on home, the phone section on the TKD and Events case studies). The contact band always closes `<main>`.

### Named Rules
**The Every-Page-Ends-In-Contact Rule.** `Base.astro` renders `Contact` after every page's slot, 404 included. Pages only change its title and text, or switch on `backToWork`.

## Elevation & Depth

Mostly flat. Depth comes from tonal surfaces (white, light band, dark band) and 1px hairlines. Shadows only lift real imagery off the page.

### Shadow Vocabulary
- **Frame lift** (`--shadow`: `0 1px 2px rgba(10,10,11,.06), 0 24px 48px -12px rgba(15,23,42,.28)`): the hero scoreboard frame and `.shot` screenshots.
- **Soft lift** (`--shadow-soft`: same with `-16px` spread and .25 alpha): the bisslog animation frame and the About photos.
- **Phone drop** (`0 20px 40px -16px rgba(15,23,42,.35)`): CSS phone bezels on white or light ground. On the dark band, phones have no shadow.

### Named Rules
**The Shadows-Are-For-Pictures Rule.** Text blocks, rows, buttons and the diagram never carry a shadow. Only screenshots, photos and the animation frame do.

## Shapes

- **Pills** (999px) for every button, the header CTA, the skip link and the diagram's use-case chips and domain block (the domain block becomes 20px at ≤560px).
- **Frames** (14px, `--radius`) for the hero screenshot, photos, the bisslog demo, diagrams and the architecture figure. **Screenshots** use 12px, and **diagram nodes**, prose images and code blocks use 10px.
- **Phone bezels:** 22px radius with a 6px `ink` border. The small overlapping phone uses 18px and 5px.
- **Avatars:** circles (52px in the hero, 96px on the CV).
- **Hairlines:** always 1px. Blockquotes are the only 3px rule.

## Components

### Buttons
- **Shape:** pill, min-height 48px, padding 0 22px, weight 500, 10px gap to a 16px stroked arrow icon.
- **Primary:** cobalt fill, white text. Hover: deep cobalt.
- **Secondary:** white with a `line-strong` border and ink text. Hover: the border turns ink.
- **Motion:** background and border transition at 200ms with `--ease` (`cubic-bezier(0.16, 1, 0.3, 1)`). The arrow nudges 3px right on hover.
- **Wide variant (contact band):** min-height 56px with space-between, so the arrow sits at the far edge.
- **Phone:** in the home hero, secondary buttons become underlined cobalt text links that keep a 44px tap height.

### Hairline row lists (in place of cards)
The house pattern for any collection: a 1px top rule on the list and a 1px bottom rule on each row, with no boxes.
- **Article list:** `time` in mono (14px, muted, 120px column) and a title link (19px, 500, ink). The whole row is clickable through a stretched `::after`. Hover fills the row with `subtle` and turns the title cobalt (220ms).
- **Experience roles:** a 160px mono year column, then h3, a muted context line and a `text-2` bullet list (max 66ch). 32px row padding.
- **Package list:** an auto-fill grid (min 260px, 40px column gap), with mono package names and a muted one-line description.
- **Service rows (dark band):** a two-column auto-fit grid (min 460px) with `dark-line` rules.

### Fact list (`dl.facts`)
A term/description pair per row. The term column is `clamp(96px, 28%, 148px)`, with an ink 600 `dt`, a `text-2` `dd`, 18px top padding and a hairline above each pair. Use it for project claims and constraints. **Case meta** (`dl.case-meta`) is its horizontal cousin: an auto-fit grid of muted 13px labels over ink values, under one hairline.

### Bands
- **Light band:** `subtle` ground with hairlines top and bottom. It holds the TKD and bisslog projects on home and the "What it had to survive" section on case studies.
- **Dark band:** `dark` ground, white headings, `dark-text` body, `dark-muted` secondary text, `dark-link` links and `dark-link` focus outline.
- **Contact band:** a light band (no bottom rule) with 112px padding (80px on phones). The headline sits left; on the right is a 380px action column with the wide primary LinkedIn button above a link row (email and GitHub, or "See all work" on case studies).

### Media frames
Screenshots use 12px radius, a hairline border and frame lift. The hero scoreboard sits in a 14px frame filled with dark slate (`#0f172a`) behind the image. Phones are CSS bezels. Phone pairs offset the second phone downward by `clamp(24px, 4vw, 48px)`. On desktop screenshots, the small phone overlaps the bottom right.

### Navigation
- A 72px bar (64px on phones) with a hairline bottom. The brand "Darwin Herrera" is ink 600 on the left. Links are 15px `text-2` with 10px vertical padding. They turn ink on hover and when they are `aria-current="page"`.
- **Home** links to in-page anchors (Work, Experience, About) plus CV. **Inner pages** link to Work, Writing and CV. Both end with the ink "Get in touch" pill (40px), which jumps to `#contact`.
- **Phones (≤560px):** the bar stops wrapping, and only the brand, CV and the pill remain. Section links are hidden (`.wide-only`), and the contact band is reachable from the pill.

### Footer
14px muted text: copyright with the full legal name, then LinkedIn, GitHub and RSS links in muted (ink on hover).

### Architecture diagram (signature)
An HTML/SVG figure (`Architecture.astro`), so it reflows and stays readable at any width.
- **Container:** 14px frame, hairline border, `#fcfcfd` ground, padding `clamp(20px, 3vw, 40px)`, and `aria-label` set to a full prose summary.
- **Columns (≥1024px):** Clients, link, Entry point, link, Application core, link, Adapters, in grid tracks `1fr 96px 1fr 40px 1.75fr 96px 1.25fr`. Each column has a 13px muted label.
- **Nodes:** white 10px-radius boxes with hairline borders, a 22px icon (26px for the entry point) and an ink 600 title over a 13px muted detail line. The entry node gets a `line-strong` border.
- **Links:** 1.5px ink stroke arrows (non-scaling), two-headed when `twoWay`, with optional 12px muted captions.
- **Core:** a six-sided polygon in `subtle` with a `line-strong` stroke. It holds "Use cases" as white pill chips and the Domain as a cobalt-mist pill with a cobalt label, ink items joined by " · " and the note "No framework code".
- **Below 1024px:** the grid becomes one column. Horizontal arrows are replaced by vertical ones, indented `clamp(16px, 8vw, 48px)` with left-aligned captions. Link labels are hidden. Clients become an auto-fit grid (min 200px) and adapters another (min 300px). Hexagon padding drops to 32px 14%, then 28px 10% at ≤560px, where the domain pill radius becomes 20px.
- **Icons:** Simple Icons logos in brand colour (`si:`) for technologies and Lucide outlines at stroke 1.75 (`lucide:`) for generic roles. All are `aria-hidden`, because the visible title carries the meaning.

### Prose
70ch at 18px/1.7. Headings get extra space above (2.2em, 1.8em, 1.6em) and 0.6em below. Inline code is mono at 0.86em on `subtle` with a hairline. Pre blocks are bordered with 10px radius. Tables scroll horizontally. A lone image in a paragraph gets 16px padding in a hairline frame on white.

## Do's and Don'ts

### Do:
- **Do** wrap every section in `.container` and pick one surface: white, `.band` or `.band-dark`. Use 112px vertical padding on home and 104px on case studies, reduced at ≤560px.
- **Do** present collections as hairline rows, and claims as `dl.facts`.
- **Do** use `flex-wrap` with `flex-basis` minimums and `min-width: 0` for two-column layouts before reaching for a media query.
- **Do** put dates, years, package names and stack lines in `.mono`, and keep everything else in Schibsted Grotesk.
- **Do** give every real image descriptive alt text and add its provenance to the table below in the same change.
- **Do** keep the visible focus ring: 2px cobalt outline, 3px offset, 4px radius, switching to `dark-link` on dark surfaces.

### Don't:
- **Don't** introduce cards with shadows, equal-card grids, stats strips or a centred hero with a button row.
- **Don't** use cobalt outside links, buttons, focus, selection and the diagram's domain pill.
- **Don't** apply `tabular-nums` to body text.
- **Don't** add eyebrows or kickers above headings.
- **Don't** put a shadow on anything that isn't a screenshot, photo or the animation frame.
- **Don't** ship placeholder imagery, stock photos, client logos or testimonials. Every raster is real and accounted for.

## Motion and focus

- **Motion vocabulary:** 200ms button colour and border changes, a 3px arrow nudge, a 220ms row-hover fill, and smooth anchor scrolling. Everything uses `--ease` (`cubic-bezier(0.16, 1, 0.3, 1)`). There are no entrance animations or scroll effects.
- **Reduced motion:** `prefers-reduced-motion: reduce` turns off smooth scrolling and forces `transition: none` and `animation: none` on all elements. The bisslog GIF sits in a `<picture>` whose reduced-motion `<source>` serves `bisslog-animation-still.png` (its first frame), so nothing animates.
- **Focus:** a global `:focus-visible` outline in cobalt (`dark-link` inside `.band-dark` and `.case-dark`). The skip link is hidden above the viewport and drops in at `top: 12px` on focus.

## Accessibility decisions

- `lang="en"`. A "Skip to content" link targets `main#main`. The landmarks are header with `nav aria-label="Main"`, main and footer. Sections are named with `aria-labelledby`.
- Links in running text are underlined. Navigation, row titles and buttons are not, and rely on position and the hover state.
- All text pairs meet WCAG AA. `muted` on white and `dark-muted` on `dark` both exceed 7:1.
- Tap targets: buttons are 48px or more, the header pill 40px with nav links padded to about 44px, and the phone-hero text links keep 44px.
- The architecture figure has a full textual summary in `aria-label`. Icons and arrows are `aria-hidden`, and node text is real HTML.
- The hero avatar has `alt=""` because the name is printed next to it. Screenshots and photos have descriptive alt text. Dates use `<time datetime>`. Facts use real `dl`/`dt`/`dd` semantics.

## Image provenance

Every raster that ships, where it came from, and what it may show. Images under `src/assets` are optimised to WebP at build time by `astro:assets`. Files in `public/` ship as-is.

| File | Source | Notes |
|---|---|---|
| `src/assets/work/tv-scoreboard.png` | Screenshot of the owner's TKD Poomsae Scorer (github.com/darwinhc/tkd-poomsae-scorer), captured from a local demo run | Neutral demo data ("Competitor A/B"); no real people or organisations |
| `src/assets/work/app-technical-scoring.png` | Same project and demo run | Same |
| `src/assets/work/app-presentation.png` | Same project and demo run | Same |
| `src/assets/work/events-desktop.jpg` | Screenshot of the owner's Realtime Events (public repos tt-events-realtime.service.python and tt-events-realtime.frontend.react), run locally | Seeded demo events and team names |
| `src/assets/work/events-phone.jpg` | Same project and local run | Same |
| `src/assets/about/graduation.jpg` | The owner's personal photo, supplied by him | Shown with his consent; only the owner is identifiable. Photos with other people were excluded on purpose |
| `src/assets/about/taekwondo-1st-dan.jpg` | The owner's personal photo, supplied by him | Same |
| `src/assets/about/avatar.jpg` | The owner's profile photo | Cropped square |
| `public/assets/img/bisslog-animation.gif` | The owner's own artwork from the previous site | |
| `public/assets/img/bisslog-animation-still.png` | First frame of `bisslog-animation.gif` | Served under reduced motion |
| `public/assets/img/entry-points-explanation.png`, `entry-points-problem.png` | The owner's own artwork from the previous site | |
| `public/assets/img/brand/*` | The owner's own bisslog artwork from the previous site | |
| `public/assets/img/og.png` | Social preview rendered from the hero headline and the scoreboard screenshot | Inherits the scoreboard's demo-data terms |
| `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | "DH" monogram generated for this site | |

## Adding a section: checklist

1. Choose the surface (white, `.band` or `.band-dark`) so that two bands never sit back to back, and keep at most one dark band per page.
2. Use `.container`, the section padding from Layout, an h2 at the Headline style, and an optional `text-2` intro capped at about 62ch.
3. Lay content out as `.split`, a flex-wrap pair, hairline rows or `dl.facts`. Don't use cards.
4. Use only the color tokens. Keep cobalt for links and actions, and Fragment Mono for data only.
5. Give interactive elements the global focus ring, and use transitions only through `--ease`, so they are covered by the reduced-motion rule.
6. Add new images to `src/assets` (for WebP optimisation) with alt text and a provenance row.
7. Check at 1440, 768 and 390px.
