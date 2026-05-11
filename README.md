# vkhalzov.github.io

Personal website and resume of Vladimir Khalzov, hosted via GitHub Pages.

## Overview

This repository contains the source for my personal website — a portfolio and resume showcasing my background, skills, and projects.

**Live site:** https://vkhalzov.github.io

## Structure

```
/
├── _config.yml               # Jekyll configuration
├── _data/
│   ├── languages.yml         # Shared language switcher config
│   ├── en/
│   │   ├── resume.yml        # EN resume content
│   │   └── site.yml          # EN UI strings
│   └── ru/
│       ├── resume.yml        # RU resume content
│       └── site.yml          # RU UI strings
├── _includes/
│   ├── head.html.liquid
│   ├── header.html.liquid
│   ├── sidebar.html.liquid
│   ├── footer.html.liquid
│   ├── scroll-top.html.liquid
│   └── resume/               # Section partials (profile, experience, skills, …)
├── _layouts/
│   └── default.html
├── _sass/                    # Sass partials (compiled by Jekyll)
│   ├── _variables.scss
│   ├── _breakpoints.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _resume.scss
│   └── _responsive.scss
├── assets/
│   ├── css/style.scss        # Sass entry point → compiled to style.css
│   ├── js/
│   │   ├── main.js           # Source
│   │   ├── main.min.js       # Minified (terser)
│   │   └── metrika.js        # Yandex Metrika tracker
│   └── img/
├── index.html                # EN page (Jekyll)
├── ru/index.html             # RU page (Jekyll)
├── Gemfile
├── package.json
└── README.md
```

## Local development

```bash
bundle install
bundle exec jekyll serve
# then open http://localhost:4000
```

## Build

CSS is compiled automatically by Jekyll's built-in Sass pipeline. For JS minification:

```bash
npm run build:js    # terser → assets/js/main.min.js
```

## Deployment

Pushes to `main` are automatically deployed by GitHub Pages.

## Contact

- Email: vladimir.khalzov@gmail.com
- GitHub: [@vkhalzov](https://github.com/vkhalzov)
