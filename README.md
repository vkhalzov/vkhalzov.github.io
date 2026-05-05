# vkhalzov.github.io

Personal website and resume of Vladimir Khalzov, hosted via GitHub Pages.

## Overview

This repository contains the source for my personal website — a portfolio and resume showcasing my background, skills, and projects.

**Live site:** https://vkhalzov.github.io

## Structure

```
/
├── index.html            # EN version
├── index-ru.html         # RU version
├── assets/
│   ├── css/
│   │   ├── style.css     # Source
│   │   └── style.min.css # Minified (lightningcss)
│   ├── js/
│   │   ├── main.js       # Source
│   │   ├── main.min.js   # Minified (terser)
│   │   └── metrika.js    # Yandex Metrika tracker
│   └── img/
├── package.json
└── README.md
```

## Build

```bash
npm install
npm run build
```

## Deployment

Pushes to `main` are automatically deployed by GitHub Pages.

## Contact

- Email: vladimir.khalzov@gmail.com
- GitHub: [@vkhalzov](https://github.com/vkhalzov)
