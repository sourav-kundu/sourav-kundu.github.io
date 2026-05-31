# sourav-kundu.github.io

Sourav Kundu's personal professional website. It's a clean, fast, fully static
site (plain HTML + CSS, no build step) hosted on GitHub Pages and served at:

**https://sourav-kundu.github.io**

## Structure

- `index.html` — the homepage, a single-page scroll with a sticky top nav and
  these sections: Hero, About, a key-numbers stat strip, **Selected work** (case-study
  cards), **How I think** (operating principles), **Beyond work** (the human layer),
  **Path** (career timeline), **Writing** (blog teaser), and **Contact**.
- `assets/style.css` — all styles (light + dark mode, mobile-first, responsive nav).
- `assets/profile.jpg` — profile photo. `assets/profile-placeholder.svg` — fallback avatar.
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing).

The code is organized so that a future `/blog` (and an admin/CMS editor) can be
added later without restructuring. See the parent workspace notes for the planned
blog + Git-based CMS approach.

## Add / replace the profile photo

Drop a square image at `assets/profile.jpg` (the hero already points at it).

## Preview locally

From the repo root:

```bash
python3 -m http.server
```

Then open http://localhost:8000 in your browser.

## Content note

This site is public. Keep all content strictly professional and public-safe —
no compensation details, internal company specifics, or private contact info
(e.g. phone numbers). When in doubt, leave it out.
