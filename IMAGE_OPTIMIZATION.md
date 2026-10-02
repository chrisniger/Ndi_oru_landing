# Landing-page image audit and optimization

Sizes are KiB (1,024 bytes). All original PNG files are retained unchanged. Inline SVG UI icons have no separate image file.

## Original images used by the landing page

| Path | Dimensions | Format | Size | Over 400 KB? |
| --- | --- | --- | ---: | --- |
| [public/images/app-screens/1.png](public/images/app-screens/1.png) | 941 × 1672 | PNG | 1213.8 KiB | Yes |
| [public/images/app-screens/2.png](public/images/app-screens/2.png) | 1080 × 1920 | PNG | 1244.6 KiB | Yes |
| [public/images/app-screens/3.png](public/images/app-screens/3.png) | 1080 × 1920 | PNG | 999.2 KiB | Yes |
| [public/images/app-screens/4.png](public/images/app-screens/4.png) | 1080 × 1920 | PNG | 1344.1 KiB | Yes |
| [public/images/app-screens/5.png](public/images/app-screens/5.png) | 1080 × 1920 | PNG | 1534.5 KiB | Yes |
| [public/images/app-screens/6.png](public/images/app-screens/6.png) | 1080 × 1920 | PNG | 1503.1 KiB | Yes |
| [public/images/app-screens/7.png](public/images/app-screens/7.png) | 1080 × 1920 | PNG | 1476.7 KiB | Yes |
| [public/images/brand/ndi-oru-mark.png](public/images/brand/ndi-oru-mark.png) | 1254 × 1254 | PNG | 613.6 KiB | Yes |
| [public/favicon.svg](public/favicon.svg) | 64 × 64 | SVG | 0.3 KiB (300 bytes) | No |

## Optimized web versions

| File | Original size | Optimized size | Original dimensions | New dimensions | Reduction |
| --- | ---: | ---: | --- | --- | ---: |
| [public/images/app-screens/1.webp](public/images/app-screens/1.webp) | 1213.8 KiB | 46.1 KiB | 941 × 1672 | 800 × 1421 | 96.2% |
| [public/images/app-screens/2.webp](public/images/app-screens/2.webp) | 1244.6 KiB | 45.9 KiB | 1080 × 1920 | 800 × 1422 | 96.3% |
| [public/images/app-screens/3.webp](public/images/app-screens/3.webp) | 999.2 KiB | 28.7 KiB | 1080 × 1920 | 800 × 1422 | 97.1% |
| [public/images/app-screens/4.webp](public/images/app-screens/4.webp) | 1344.1 KiB | 63.4 KiB | 1080 × 1920 | 800 × 1422 | 95.3% |
| [public/images/app-screens/5.webp](public/images/app-screens/5.webp) | 1534.5 KiB | 67.3 KiB | 1080 × 1920 | 800 × 1422 | 95.6% |
| [public/images/app-screens/6.webp](public/images/app-screens/6.webp) | 1503.1 KiB | 58.3 KiB | 1080 × 1920 | 800 × 1422 | 96.1% |
| [public/images/app-screens/7.webp](public/images/app-screens/7.webp) | 1476.7 KiB | 61.7 KiB | 1080 × 1920 | 800 × 1422 | 95.8% |
| [public/images/brand/ndi-oru-mark.webp](public/images/brand/ndi-oru-mark.webp) | 613.6 KiB | 27.6 KiB | 1254 × 1254 | 520 × 520 | 95.5% |

WebP quality: 82; encoder effort: 6. Screenshot width: 800 px (over twice the largest 330 px CSS display width). Logo width: 520 px (twice the largest 260 px display width). Heights are proportionally rounded; no cropping or stretching is applied during conversion.

The files are pre-optimized and rendered with next/image using unoptimized to avoid depending on an unavailable runtime optimizer or double-compressing screenshot text. Below-fold images use loading=lazy and decoding=async. Hero images retain priority. Existing fixed dimensions and aspect-ratio containers are unchanged.

Regenerate with `node scripts/optimize-landing-images.mjs` using the installed Sharp library (no dependency changes required).

## Local verification

- TypeScript (`npx tsc --noEmit`), ESLint (`npm run lint`), and production build (`npm run build`) passed.
- The built site was tested locally in Cloudflare's Worker runtime.
- All 14 rendered image instances decoded successfully in Chromium, including all seven unique screenshots. WebP asset requests returned HTTP 200; no browser console errors were recorded.
- Before/after container dimensions match at 1440 × 900 desktop and 390 × 844 mobile viewports. Showcase image containers remain 272 × 484 px on desktop and 240 × 427 px on mobile. No document-level horizontal overflow was detected. No CSS or page content was changed.
- Screenshot capture was unavailable because the preview webview produced no composited frames. Visual sharpness inspection therefore remains a manual review item; image decoding and layout measurements are verified, not a pixel-perfect screenshot comparison.
