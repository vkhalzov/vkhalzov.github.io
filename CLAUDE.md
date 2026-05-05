# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal resume/portfolio site for Vladimir Khalzov, hosted at https://vkhalzov.github.io via GitHub Pages. Push to `main` deploys automatically.

Static site with a minimal build step for asset minification (CSS via lightningcss, JS via terser). No framework, no bundler.

## Previewing locally

Open `index.html` directly in a browser, or run a local server to avoid CORS issues with fonts:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
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

All styles live in `assets/css/style.css`. No preprocessor — plain CSS with custom properties.

### Design tokens (`:root`)

```
--bg / --bg-panel / --bg-hover   background layers
--blue / --blue-dim / --blue-pale primary accent
--red                             N7 stripe, danger
--amber                           secondary labels
--white / --muted                 text hierarchy
--border                          rgba(77,184,232,0.2)
--sidebar-w: 48px
--text-xxs … --text-2xl           font size scale
```

### Font stack

| Font | Usage |
|------|-------|
| `Tektur` | Headings, section titles, entry titles (supports Cyrillic) |
| `Share Tech Mono` | UI labels, dates, monospace HUD elements |
| `Exo 2` | Body text, summaries |

### Layout

Fixed `48px` sidebar (`.sidebar`) on the left; main content in `<main class="page">` (`margin-left: var(--sidebar-w)`). Sidebar contains the N7 red stripe (`.sidebar-stripe`), clickable nav dots (`.nav-dot`), and a vertical label.

### Section pattern

Every content section follows this structure:

```html
<section class="section" id="...">
  <div class="sec-head">
    <span class="sec-num">0X /</span>
    <h2 class="sec-title">Title</h2>
    <div class="sec-rule"></div>   <!-- fading horizontal rule -->
  </div>
  <!-- content -->
</section>
```

Entry cards (`.entry`) have a left blue border, corner-bracket `::after`, and a hover highlight. Use them for experience, education, or any timeline item.

### Language segment bars

Languages use `.entry` cards (same as experience/education) with `.lang-segs` inside `.entry-body`. Each segment is a `<span class="ls">` — add `.ls--on` to fill it. 5–6 segments per language; Native = all filled, B2 = 4/6 filled.

## Current sections

| # | ID | Status |
|---|-----|--------|
| — | `#profile` | Hero / contact — complete |
| 01 | `#experience` | Structure done; bullet points are placeholder |
| 02 | `#skills` | Tag groups are real; skill bars are placeholder labels |
| 03 | `#education` | Complete — UlSTU, BS Software Engineering (incomplete), 2013–2018 |
| 04 | `#languages` | Complete — Russian (Native), English (B2) |

## Navigation

Nav dots in the sidebar are wired to section IDs via `IntersectionObserver` in the inline `<script>` at the bottom of `index.html`. Add a new dot and corresponding section ID to extend navigation.

## Language variants

Two HTML files — `index.html` (EN) and `index-ru.html` (RU). Both are standalone; there is no build step or shared template. Keep them in sync manually when adding new sections or structural changes.

The language switcher in `.site-header` uses a `<span class="lang-btn active">` for the current language (non-clickable) and an `<a class="lang-btn">` for the other. Utility classes `.no-border-r` / `.no-border-l` collapse the shared border between the two buttons.

## Build

```bash
npm run build       # minify CSS + JS
npm run build:css   # lightningcss → assets/css/style.min.css
npm run build:js    # terser → assets/js/main.min.js
```

Edit source files (`style.css`, `main.js`), run the build, then commit both source and minified output. Update the `?v=` timestamp in both HTML `<link>` and `<script>` tags after each build.

## JavaScript

`assets/js/main.js` — source. Expand/collapse for `.entry` cards and scroll-to-top visibility. Deployed as `main.min.js`.

`assets/js/metrika.js` — Yandex Metrika tracker (ID `109026309`). Loaded in `<head>` without `defer` on both HTML files for accurate bounce tracking. A `<noscript>` pixel is placed at the end of `<body>`. Not minified — left as-is.

## Analytics

Yandex Metrika is the analytics provider (webvisor, clickmap, accurate bounce tracking enabled). Both `index.html` and `index-ru.html` include it.
