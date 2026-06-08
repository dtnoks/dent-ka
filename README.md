# Dent-KA website

The live website for Dent-KA, hosted free on GitHub Pages at
**https://dtnoks.github.io/dent-ka/**

Whenever you commit a change here (or upload a new file), the live site
updates by itself within about 1–2 minutes.

---

## Files in this repository

| File | What it is |
|------|------------|
| `index.html` | The homepage |
| `dent-ka-storitve.html` | Storitve (Services) page |
| `dent-ka-cenik.html` | Cenik (Pricing) page |
| `dent-ka-o-nas.html` | O nas (About) page |
| `banner.js` | The "closed / on vacation" notice (see below) |
| `README.md` | This file — instructions |

---

## Editing the website

You can edit any page in two ways:

1. **On GitHub (simplest for small text changes):** open the file, click the
   pencil ✏️ icon (top right), make your change, then click **Commit changes**.
2. **Upload a new version:** on the repo's main page click **Add file →
   Upload files**, drag the file in, then **Commit changes**.

A few important rules:

- **Keep the same filenames.** Uploading a file with a name that already
  exists simply replaces the old one.
- **`index.html` must stay named `index.html`** — that is what makes it the
  homepage. If you rename it, the main web address stops working.

---

## The "closed / on vacation" banner

A coloured notice bar can appear at the top of every page (for example, when
the office is closed for the holidays). You control everything from **one file:
`banner.js`** — you never need to touch the HTML pages.

Open `banner.js` and edit only the settings block at the very top. It looks
like this:

```js
var BANNER = {

  enabled: true,            // true = show the banner, false = hide it

  autoSchedule: false,      // optional automatic on/off by date (see below)
  from: "2026-07-15",       // first closed day  (only used if autoSchedule: true)
  to:   "2026-07-29",       // last closed day   (only used if autoSchedule: true)

  title:   "Ordinacija zaprta",
  message: "Med 15. 7. in 29. 7. 2026 smo na dopustu. Hvala za razumevanje.",

};
```

After editing, **Commit changes** and the live site updates in a minute or two.

### Turn the banner ON or OFF

- Find the line `enabled: true,`
- `true` shows the banner, `false` hides it.

### Change the wording

- Edit the `title:` and `message:` lines.
- Keep the text **inside the quotation marks** and keep the comma at the end.

### Make it appear and disappear on its own (optional)

If you'd rather set it up in advance and forget about it:

1. Set `autoSchedule: true,`
2. Set the two dates `from:` and `to:` using the format **`"YYYY-MM-DD"`**
   (year-month-day). For example, 24 July 2026 is written `"2026-07-24"`.

The banner will then appear automatically on the `from` date and disappear by
itself after the `to` date. With `autoSchedule: true` you can leave
`enabled: true` set all the time and just update the dates each year.

If you prefer to switch it on and off by hand, leave `autoSchedule: false` and
just change `enabled` between `true` and `false`.

### Good to know

- The banner shows on **all four pages** automatically.
- A visitor can dismiss it with the **×**; it comes back on their next visit.
- The dates in `from`/`to` only matter when `autoSchedule` is `true`. The text
  in `message` is always whatever you type — update it to match your dates.

---

## Quick "I just want to…" guide

- **Show the closed notice now:** `banner.js` → `enabled: true` → Commit.
- **Hide the closed notice:** `banner.js` → `enabled: false` → Commit.
- **Change the closed dates/text:** edit `title` and `message` in `banner.js` → Commit.
- **Change page text/prices:** edit the matching `.html` file → Commit.
