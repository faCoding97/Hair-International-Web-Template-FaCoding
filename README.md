# Hair International & Beauty — Next.js (App Router) + Tailwind + Swiper

A fast, SEO-friendly static site for a salon in Port Elizabeth.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Tech
- Next.js 14 (App Router, Server Components by default)
- Tailwind CSS
- Swiper.js for the homepage hero slider

## Content
- All pages are in `/app`.
- Homepage includes JSON-LD (LocalBusiness / HairSalon) via `<Script>`.
- Images for the slider: place in `/public/images/slider`.
- Images for the gallery: place in `/public/images/gallery`.

## Notes
- The slider and gallery are dynamic — any supported image type in those folders will render.
- Images are rendered with `object-fit: cover` to avoid distortion regardless of aspect ratio.
- If Google Maps embedding via the provided link fails in your browser, replace the iframe `src` with an official Google Maps Embed URL.
- Update the email `hairinternationalbeauty@example.com` in `/app/contact/page.jsx`.
- Update `metadata` on each page for SEO as needed.

## Pro Slider
- `components/ProHeroSlider.jsx` uses Swiper with:
  - Fade effect + parallax background
  - Autoplay with progress bar (pauses on hover)
  - Keyboard + mousewheel control
  - Thumbnails (visible on md+)
  - Ken Burns zoom animation
  - Captions/CTA via `/public/images/slider/captions.json` keyed by filename
- Configure per-slide `title`, `caption`, `alt`, `ctaText`, `ctaHref` in `captions.json`.
