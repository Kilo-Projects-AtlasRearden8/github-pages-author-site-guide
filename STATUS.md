# Status

## What was built

A beginner manual and static HTML site template for publishing a free author site with GitHub Pages, created for Dylan Asdale (registered nurse turned AI author, founder of Asdale Dynamics, LLC, Indiana, formed October 2026).

- `docs/` — beginner manual: `index.md`, `01-create-repo.md`, `02-add-pages.md`, `03-choose-theme.md`, `04-edit-content.md`, `05-publish.md`, `launch-checklist.md`. Plain-English, step-by-step, with references to 7 labeled screenshot placeholders.
- `docs/screenshots/` — 7 SVG placeholder screenshots labeled with what each depicts (GitHub homepage, new repository, repository Settings → Pages, Pages source branch, theme chooser, file editor, published site).
- `site/` — complete static HTML author site template: `index.html`, `about.html`, `books.html`, `contact.html`, plus `assets/css/style.css` and `assets/js/site.js`.
- `README.md` — overview crediting Asdale Dynamics, LLC.
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`.

## How to run it

Read `docs/` in order, following the screenshots. To preview the `site/` template locally:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000/
```

No build step, no dependencies, no secrets, no API keys, no personal data.

## Verification results

Ran `verify.py` (HTML tag balance, internal link resolution, local HTTP server status checks, LICENSE and README credit checks): **69/69 checks passed**.

- All HTML files parse with balanced tags.
- All internal links in HTML and markdown resolve to existing files.
- Local `python3 -m http.server` returns HTTP 200 for all four site pages.
- `LICENSE` contains exactly `Copyright (c) 2026 Asdale Dynamics, LLC`.
- `README.md` credits Asdale Dynamics, LLC.

## Known gaps

- Screenshots are placeholder SVGs labeled with what they depict. Capture real screenshots from GitHub before any public release.
- No build system or test framework — the site is static HTML, CSS, and JS, verified with a local HTTP server.
- No `.github/workflows` files were added, per requirements.
- Nothing was pushed and no remote repository was created; this is local only.
