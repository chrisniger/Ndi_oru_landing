# NDi ORU Landing Page Handoff

## Current Status

The production-oriented landing-page foundation is implemented in Next.js, TypeScript and Tailwind CSS. It uses the approved dark charcoal, industrial teal and electric lime visual system, the supplied brand mark, and the supplied app screenshots.

## Phase 1 - Foundation (Complete)

- Next.js/TypeScript/Tailwind project structure
- Central site configuration for domain, support, WhatsApp, store and social URLs
- Responsive header, desktop navigation and mobile menu
- SEO metadata, canonical URL, robots, sitemap and favicon
- Reusable page layout and footer

## Phase 2 - Landing Experience (Complete)

- Product-led hero using approved app screens
- Trust benefits strip
- Representative service categories
- Client Mode workflow
- Client Wallet section
- Trust and payment protection section
- Unified Client Mode / Service Mode section
- Past Providers feature
- App screen showcase with mobile snap scrolling
- Download area with safe Coming Soon store states
- Accessible FAQ accordion
- Email and WhatsApp support

## Phase 3 - Supporting Pages (Complete as Placeholders)

- `/privacy`
- `/terms`
- `/refund-policy`
- `/contact`
- `/support`

Legal pages intentionally contain approval placeholders. Do not invent policy text.

## Phase 4 - Client Approval Items (Pending)

- Confirm final public spelling and trademark presentation for NDi ORU / NDI ORU / NDI ỌRỤ
- Confirm App Store and Google Play URLs
- Confirm provider interest or waitlist destination
- Confirm social media URLs
- Supply approved Privacy, Terms, Cancellation/Refund and Cookie policy copy
- Confirm whether Service Mode should retain the “Provider rollout next” label
- Review screenshot titles in `config/content.ts` against the final screen names

## Phase 5 - Launch Preparation (Pending)

- Add confirmed store and social links
- Insert approved legal copy
- Run final accessibility, Lighthouse and cross-browser checks
- Add an approved social preview image only if requested
- Connect domain and deploy to production

## Key Files

- `config/site.ts`: domain, support and external URLs
- `config/content.ts`: categories, steps, screenshots, FAQs and benefit labels
- `components/LandingPage.tsx`: landing sections and interactions
- `components/Header.tsx`: navigation and mobile menu
- `components/Footer.tsx`: footer navigation
- `app/globals.css`: design system and responsive styling
- `public/images/app-screens/`: approved app screenshots
- `public/images/brand/`: approved brand assets

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Do not add unsupported statistics, testimonials, certifications, partnerships or launch claims.
