# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- Always add a trailing newline at the end of files. Never remove existing trailing newlines.

## What this is

Personal resume/portfolio site for Vladimir Khalzov, hosted at https://vkhalzov.github.io via GitHub Pages. Built with Jekyll. Push to `main` deploys automatically.

## Previewing locally

```bash
bundle exec jekyll serve
# then open http://localhost:4000
```

## Design theme: Mass Effect / N7

The site uses a sci-fi HUD aesthetic inspired by Mass Effect's N7 armor interface:

- **Dark navy background** (`#050e1a`) with a subtle star-field and scanline overlay via `body::before` / `body::after` pseudo-elements
- **Red accent stripe** on the left sidebar (N7 red stripe motif)
- **Blue glow** for interactive and primary UI elements
- **Amber** for secondary labels (job titles, org names)
- Corner-bracket decoration on cards via `::after` pseudo-elements
- Monospace UI labels evoking a terminal/HUD readout

Preserve this aesthetic for any new elements. New sections, cards, or decorative details should feel like they belong to the same cockpit display.

## CSS architecture

Styles live in `_sass/` as Sass partials, compiled by Jekyll's built-in Sass pipeline. Entry point: `assets/css/style.scss`.

### Partials

| File | Contents |
|------|----------|
| `_variables.scss` | Sass `$text-*` variables + `:root` CSS custom properties |
| `_breakpoints.scss` | `$breakpoints` map + `up()` mixin (mobile-first, Tailwind 4 style) |
| `_base.scss` | Reset, `html`, `body`, star-field and scanline pseudo-elements |
| `_layout.scss` | Sidebar, page, site header, lang switcher, footer, scroll-to-top |
| `_resume.scss` | Hero, sections, entry cards, skills, education, languages |
| `_responsive.scss` | `@include up('sm')` and `@include up('md')` override blocks |

### Mobile-first breakpoints

```scss
@include up('sm')  // width >= 40rem (640px)  — restore fonts, show bullets
@include up('md')  // width >= 48rem (768px)  — show sidebar, desktop layout
@include up('lg')  // width >= 64rem (1024px)
@include up('xl')  // width >= 80rem (1280px)
@include up('2xl') // width >= 96rem (1536px)
```

Base (no mixin) = mobile defaults. Use `up()` to progressively enhance for larger screens.

### Design tokens (`:root`)

```
--bg / --bg-panel / --bg-hover   background layers
--blue / --blue-dim / --blue-pale primary accent
--red                             N7 stripe, danger
--amber                           secondary labels
--white / --muted                 text hierarchy
--border                          rgba(77,184,232,0.2)
--sidebar-w: 54px
--text-xs … --text-2xl            font size scale (also available as $text-* Sass variables)
```

### Font stack

| Font | Usage |
|------|-------|
| `Tektur` | Headings, section titles, entry titles (supports Cyrillic) |
| `Share Tech Mono` | UI labels, dates, monospace HUD elements |
| `Exo 2` | Body text, summaries |

### Layout

Fixed `54px` sidebar (`.sidebar`) on the left, hidden on mobile (shown at `md+`). Main content in `<main class="page">`. On mobile, `body` gets a `border-left: 5px solid var(--red)` as the N7 stripe substitute.

### Section pattern

Every content section follows this structure:

```html
<section class="section" id="...">
  <div class="sec-head">
    <span class="sec-num">0X /</span>
    <h2 class="sec-title">Title</h2>
    <div class="sec-rule"></div>
  </div>
  <!-- content -->
</section>
```

Entry cards (`.entry`) have a left blue border, corner-bracket `::after`, and a hover highlight. Use them for experience, education, or any timeline item.

### Language segment bars

Languages use `.entry` cards with `.lang-segs` inside `.entry-body`. Each segment is a `<span class="ls">` — add `.ls--on` to fill it. 5–6 segments per language; Native = all filled, B2 = 4/6 filled.

## Data structure

Content and UI strings are separated:

```
_data/
├── languages.yml          # Shared: [{code, label, url}] for lang switcher
├── en/
│   ├── resume.yml         # EN content: meta, profile, experience, skills, education, languages
│   └── site.yml           # EN UI strings (buttons, labels, section titles)
└── ru/
    ├── resume.yml         # RU content (same structure)
    └── site.yml           # RU UI strings
```

In templates, locale data is accessed via `site.data[page.lang]`. The `t` variable pattern is used:

```liquid
{% assign t = site.data[page.lang] %}
{% assign str = t.site.strings %}
{% assign resume = t.resume %}
```

## Current sections

| # | ID | Status |
|---|-----|--------|
| — | `#profile` | Hero / contact — complete |
| 01 | `#experience` | Structure done; bullet points are placeholder |
| 02 | `#skills` | Tag groups are real; skill bars are placeholder labels |
| 03 | `#education` | Complete — UlSTU, BS Software Engineering (incomplete), 2013–2018 |
| 04 | `#languages` | Complete — Russian (Native), English (B2) |

## Language variants

Two Jekyll pages — `index.html` (EN, `page.lang: en`) and `ru/index.html` (RU, `page.lang: ru`). Both use `_layouts/default.html` and share all includes. Content is driven by `_data/[lang]/resume.yml` and UI strings by `_data/[lang]/site.yml`.

The language switcher loops over `_data/languages.yml` and renders the current language as a `<span>` (non-clickable) and the other as an `<a>`.

## Navigation

Nav icons in the sidebar are wired to section IDs via `IntersectionObserver` in `_layouts/default.html`. Add a new icon and corresponding section ID to extend navigation.

## Build

Jekyll handles CSS automatically. For JS minification:

```bash
npm run build:js    # terser → assets/js/main.min.js
```

After updating `main.js`, run the build and commit both source and minified output.

## JavaScript

`assets/js/main.js` — expand/collapse for `.entry` cards on mobile, scroll-to-top visibility, and a console easter egg (EN/RU). Deployed as `main.min.js`.

`assets/js/metrika.js` — Yandex Metrika tracker (ID `109026309`). Loaded in `<head>` without `defer` for accurate bounce tracking. Not minified.

## Analytics

Yandex Metrika is the analytics provider (webvisor, clickmap, accurate bounce tracking enabled). Both locale pages include it.
