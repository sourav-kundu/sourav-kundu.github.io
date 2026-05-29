# sourav-kundu.github.io

Sourav Kundu's personal professional website. It's a clean, fast, fully static
site (plain HTML + CSS, no build step) hosted on GitHub Pages and served at:

**https://sourav-kundu.github.io**

## Structure

- `index.html` — the homepage.
- `assets/style.css` — all styles.
- `assets/profile-placeholder.svg` — placeholder avatar.
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing).

The code is organized so that future sections (e.g. a `/blog`) can be added
later without restructuring.

## Add a real profile photo

Drop a square image at `assets/profile.jpg`, then in `index.html` change the
avatar `src` from `assets/profile-placeholder.svg` to `assets/profile.jpg`.

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
