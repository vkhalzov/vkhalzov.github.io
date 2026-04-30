# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal resume/portfolio site for Vladimir Khalzov, hosted at https://vkhalzov.github.io via GitHub Pages. Push to `main` deploys automatically.

Pure static site — no build step, no package manager, no dependencies beyond Google Fonts.

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
| `Rajdhani` | Headings, section titles, entry titles |
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