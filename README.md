# Felix Simon — Portfolio

Personal portfolio website for Felix Simon — front-end and back-end developer and graphic designer.

## Pages

- `index.html` — Single-page portfolio: home, education, services, testimonials, and contact sections

## How to open

Double-click `index.html` in a browser, or serve the folder locally:

```console
python -m http.server 8000
```

Then visit http://localhost:8000.

## Tech stack

- HTML5, CSS3, JavaScript (vanilla)
- [Boxicons](https://boxicons.com/) for icons

## Notes

- `index.php` is a leftover empty PHP wrapper. GitHub Pages cannot execute PHP, so `index.html` is the entry point and the contact form is front-end only (no backend processing). Both files are kept for reference.
- Testimonial photos use the local portrait `20241107_190929.jpg` as placeholder; replace with real photos (add them to `img/` and update the `src` attributes) when available.
- Social links open in a new tab and include `rel="noopener noreferrer"`.