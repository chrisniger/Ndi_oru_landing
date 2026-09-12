# NDi ORU Landing Page Implementation

## Architecture

The project uses Next.js with TypeScript and Tailwind CSS. The page is component-based, content is centralized, and supporting legal/contact routes share one reusable dynamic page.

## Configuration

Edit `config/site.ts` to change:

- production domain
- support email
- WhatsApp number and URL
- App Store URL
- Google Play URL
- provider interest URL
- social links

Empty store links intentionally render as “Coming soon” instead of dead links. Empty social URLs are not shown.

## Content

Edit `config/content.ts` to update service categories, Client Mode steps, screenshot labels, FAQs and trust benefits.

Add approved 1080x1920 screenshots to `public/images/app-screens/`, then add the corresponding title, image path and mode to the `screenshots` array. Images are rendered without cropping their essential app content.

## Sections

The landing page includes navigation, hero, trust benefits, service categories, Client Mode workflow, Client Wallet, security, two-mode product explanation, Past Providers, app showcase, download CTA, FAQs, support and footer.

## Outstanding Approvals

- Public brand spelling/presentation
- Store links and launch state
- Provider rollout wording and destination URL
- Social URLs
- Approved legal documents
- Final screenshot names and order

## Build

Run `npm install`, then `npm run dev` for local work. Before release, run `npm run lint` and `npm run build` and resolve all reported errors.
