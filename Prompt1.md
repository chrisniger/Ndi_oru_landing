You are acting as a senior product designer, frontend engineer, UX engineer, and conversion-focused landing-page developer.

PROJECT
Build the official public-facing landing page for NDI ỌRỤ, a Nigerian service marketplace application connecting Clients with verified local artisans/service providers.

The production domain will be:

https://ndioru.com.ng

Support email:
support@ndioru.com.ng

Temporary WhatsApp support number:
+234 808 080 8080

WhatsApp URL:
https://wa.me/2348080808080

IMPORTANT:
Store domain, support email, WhatsApp number, WhatsApp URL, social URLs, Play Store URL, and App Store URL in one centralized configuration/constants file so they can be changed later without editing multiple components.

==================================================
1. PURPOSE OF THE WEBSITE
==================================================

This is primarily a promotional/public landing website for NDI ỌRỤ.

It is NOT the Admin Dashboard and it is NOT the mobile application itself.

Its purposes are to:

1. Introduce the NDI ỌRỤ brand.
2. Explain what the platform does.
3. Show how Clients can find and book artisans.
4. Explain how Service Providers can receive service requests and earn.
5. Demonstrate the mobile application through supplied screenshots.
6. Build trust.
7. Explain security and payment protection at a high level.
8. Explain the unified CLIENT MODE / SERVICE MODE application model.
9. Showcase service categories.
10. Explain the booking process in simple steps.
11. Provide App Store and Google Play download links.
12. Provide links to Privacy Policy, Terms & Conditions, Refund/Cancellation Policy and other policies.
13. Provide customer-support contact options.
14. Provide WhatsApp support.
15. Encourage Clients to download/use the app.
16. Encourage qualified artisans to join NDI ỌRỤ.
17. Provide a professional corporate web presence for ndioru.com.ng.

The site will eventually be used publicly, so build it as production-quality code rather than as a disposable prototype.

==================================================
2. IMPORTANT PRODUCT MODEL
==================================================

NDI ỌRỤ is ONE UNIFIED MOBILE APPLICATION.

It contains two modes:

CLIENT MODE
and
SERVICE MODE

The user can switch between modes using the Client Mode / Service Mode toggle.

The interface and functionality change according to the selected mode.

CLIENT MODE:
Used by customers looking for local artisans/service providers.

SERVICE MODE:
Used by Providers/Artisans receiving requests, managing jobs, earnings and withdrawals.

Do NOT create separate Client and Provider mobile-app branding.

It is one NDI ỌRỤ application with two operating modes.

For the current implementation milestone, Client Mode is being implemented first and Service Mode is activated in a later implementation phase.

The public landing page may nevertheless explain the complete product vision, but do not falsely represent unfinished functionality as already live.

Where appropriate use wording such as:
"Service Mode"
"Coming in the provider rollout"
or equivalent if the feature has not yet launched.

==================================================
3. MARKETPLACE MODEL
==================================================

The primary marketplace model is DIRECT BOOKING.

Typical Client flow:

Client
→ chooses service category
→ searches/browses nearby Providers
→ reviews Provider profile
→ reviews rating
→ baseline pricing
→ distance
→ availability
→ selects a Provider
→ submits a service request
→ sends description/photos
→ Provider reviews request
→ Provider accepts/rejects
→ negotiation happens inside NDI ỌRỤ chat
→ Provider may update final invoice
→ Client confirms invoice
→ Client funds/pays
→ service amount is locked for the job
→ Provider can then proceed
→ Client tracks service
→ Provider completes job
→ Client approves
→ Provider receives earnings
→ Client rates Provider.

There is also an optional public fallback:

If a directly selected Provider rejects the request or the response timer expires and the Client enabled public fallback, the request becomes visible to eligible Providers who can submit quotes.

The public request remains available until the Client accepts one Provider quote/invoice.

Immediately after a quote is accepted, the request must no longer appear publicly.

This landing page does not need to expose all technical details, but its wording and diagrams must not contradict these rules.

==================================================
4. DESIGN LANGUAGE
==================================================

Use the approved NDI ỌRỤ visual system.

The landing page should visually belong to the same product family as the supplied mobile UI and Admin Dashboard.

Primary visual direction:

- Premium dark interface.
- Deep charcoal / almost black background.
- Electric lime / bright green accents.
- Deep industrial teal as supporting brand colour.
- Yellow may be used sparingly for important status/action emphasis.
- White primary typography.
- Muted grey secondary typography.
- Subtle green/teal gradients.
- Thin luminous borders where appropriate.
- Premium modern rounded cards.
- Soft shadows/glows.
- High contrast.
- Clean whitespace.
- Professional Nigerian technology brand.
- Avoid looking like a crypto website.
- Avoid excessive neon.
- Avoid cheap-looking template design.
- Avoid excessive animations.

Existing brand colours include approximately:

Safety Green:
#A4E000

Deep Industrial Teal:
#054D4B

Use the actual supplied logo asset.

DO NOT redraw or recreate the logo when an approved logo is supplied.

==================================================
5. DESIGN QUALITY TARGET
==================================================

The site should feel comparable in quality to a professionally designed fintech / mobility / marketplace startup website.

Visual references can conceptually include the polish of modern companies such as fintech, mobility and marketplace brands, but DO NOT copy any brand or website.

The finished result must feel:

- premium
- trustworthy
- mobile-first
- Nigerian
- professional
- investor/client presentation ready
- production ready

Do not produce a generic bootstrap landing page.

==================================================
6. TECHNOLOGY
==================================================

If no landing-page framework already exists, use:

Next.js
TypeScript
Tailwind CSS

Prefer the latest stable project-compatible versions.

Use:

- reusable React components
- semantic HTML
- clean component architecture
- responsive layouts
- accessible interactive controls
- optimized images
- lazy loading where appropriate
- proper metadata
- Open Graph metadata
- sitemap support
- robots.txt
- favicon/app icon support
- structured SEO where sensible

Do NOT unnecessarily add heavy dependencies.

Animations may use CSS or a lightweight animation library already available in the repository.

If Framer Motion is used, keep animations subtle.

==================================================
7. RESPONSIVE REQUIREMENTS
==================================================

The website must work professionally on:

- 360px mobile
- 390px mobile
- 430px mobile
- tablets
- 1024px laptop
- 1366px desktop
- 1440px desktop
- 1920px large desktop

No horizontal overflow.

Screenshots must scale naturally.

Navigation must become mobile-friendly.

Typography must use responsive sizing.

Buttons must remain easily tappable.

==================================================
8. SITE STRUCTURE
==================================================

Create the following landing-page structure.

==================================================
SECTION A — NAVIGATION
==================================================

Sticky transparent/dark navigation bar.

Left:
NDI ỌRỤ logo + brand name.

Navigation links:

Home
How It Works
Services
For Clients
For Providers
Security
FAQs
Support

Primary CTA:

Get the App

Secondary CTA where suitable:

Become a Provider

On mobile:
Use a polished hamburger menu.

==================================================
SECTION B — HERO
==================================================

Create a premium hero section.

Suggested headline:

"Trusted Local Services. Right When You Need Them."

Alternative supporting headline may be developed if it fits the design better, but do not alter the brand meaning.

Supporting copy should explain that NDI ỌRỤ helps users discover, compare, book and securely pay trusted local artisans/service providers from one application.

Include two main CTAs:

Download the App
Find an Artisan

Optional Provider CTA:
Join as a Service Provider

Show a strong mobile-device composition using supplied app screenshots.

Prefer showing the approved Client Mode home/dashboard prominently.

If multiple screenshots are supplied, create a premium layered phone mockup presentation.

Do not distort screenshots.

==================================================
SECTION C — TRUST / QUICK BENEFITS
==================================================

Immediately beneath hero, show 4-6 concise benefits.

Possible examples:

Verified Providers
Transparent Baseline Pricing
Secure Platform Payments
Nearby Service Professionals
In-App Communication
Ratings & Reviews

Do not claim formal certifications that have not actually been obtained.

Do not add fake security certifications.

==================================================
SECTION D — SERVICE CATEGORIES
==================================================

Show attractive service-category cards.

Examples may include:

Electrical
Plumbing
AC & Refrigeration
Carpentry
Painting
Cleaning
Generator Services
Appliance Repairs
Tiling
Masonry
Mechanical Services
Other approved categories

Use icons where appropriate.

Do not hard-code an inaccurate number of categories if the final platform categories are database controlled.

Use representative examples and a CTA:

Explore Services

==================================================
SECTION E — HOW CLIENT MODE WORKS
==================================================

Create a visually rich step-by-step section.

Use screenshots supplied by me.

Suggested workflow:

STEP 1
Find a Service

Select the category of service you need.

STEP 2
Choose an Artisan

Browse nearby providers, ratings, baseline prices and availability.

STEP 3
Send Your Request

Explain the work and optionally add photos.

STEP 4
Confirm the Final Invoice

Discuss job requirements through in-app chat and approve the final invoice.

STEP 5
Securely Fund the Service

Pay/fund the required service value through the platform.

STEP 6
Track the Service

The Provider can proceed only after payment requirements are satisfied.

STEP 7
Approve Completion

Confirm successful completion and rate your Provider.

Use the actual supplied app screenshots alongside these steps.

Do not invent screenshots.

==================================================
SECTION F — CLIENT WALLET / SECURE FUNDING
==================================================

Explain Client Wallet at a high level.

Approved behavior:

Clients may proactively add money to the NDI ỌRỤ Wallet.

Wallet balance can be used later toward service payments.

Once a final job invoice is confirmed, the required service amount can be allocated into locked job-specific funds.

Payment gateway charges are borne by the Client and disclosed before payment confirmation.

Do NOT describe NDI ỌRỤ as a bank.

Do NOT use legally sensitive financial terms beyond what the approved product requirements support.

Suggested heading:

"Fund. Book. Stay in Control."

Possible benefits:

Add funds ahead of time
Use wallet balance for future services
See service payment status
Track transaction history
Eligible cancellation credits can return to Client Wallet
Request external refund when applicable

Do not expose internal implementation/database terminology unnecessarily to marketing visitors.

==================================================
SECTION G — SAFETY / PAYMENT PROTECTION
==================================================

Create a strong trust section.

Explain:

- Exact service address is protected until payment conditions are satisfied.
- Payment/funding confirmation occurs before Provider travel begins.
- Job funds are tied to the service transaction.
- In-app communication keeps service discussions within the platform.
- Provider ratings/reviews help Clients make informed choices.
- Administrative monitoring supports disputes/refunds/payment review.
- Phone numbers and off-platform payment details should not be exposed through normal in-app communication.

Use professionally designed security/trust icons.

Possible heading:

"Built Around Trust and Accountability."

IMPORTANT:
Do not claim:
"100% fraud proof"
"bank-grade certified"
"PCI certified"
"NDPR certified"
or any formal certification unless evidence is supplied.

==================================================
SECTION H — UNIFIED APP / TWO MODES
==================================================

Explain the unique NDI ỌRỤ mode toggle.

Heading example:

"One App. Two Ways to Use NDI ỌRỤ."

Create two premium cards:

CLIENT MODE
Find, compare and book local service professionals.

Possible bullets:
Find nearby artisans
View ratings and pricing
Send service requests
Chat and confirm invoice
Fund service securely
Track active service
Manage wallet/history
Book Past Providers again

SERVICE MODE
Manage service requests and grow your business.

Possible bullets:
Receive Client requests
Manage availability
Accept/reject requests
Chat with Clients
Update invoice
Manage active jobs
Complete jobs
Track earnings
Withdraw funds

If Service Mode has not yet launched, make that clear with a subtle:
"Provider rollout coming next"
or similar status label.

==================================================
SECTION I — PAST PROVIDERS
==================================================

Include a small Client convenience section describing Past Providers.

Explain that after completing a service with a Provider, Clients can quickly find that Provider again and initiate another booking if they remain active/available.

Possible heading:

"Good Service Should Be Easy to Find Again."

Use supplied Past Providers screen if available.

==================================================
SECTION J — FOR SERVICE PROVIDERS
==================================================

Promotional Provider section.

Heading example:

"Turn Your Skills Into More Opportunities."

Explain benefits:

Build a professional service profile
Set baseline service rates
Receive direct Client requests
Manage availability
Communicate inside the app
Issue updated invoices
Track jobs
Build ratings/reputation
Receive earnings through Provider Wallet
Request payouts to supported bank destinations

CTA:
Become a Provider

If Service Mode has not launched publicly, CTA may point to:
Join Waitlist
Register Interest
or a configured future provider URL.

Keep CTA configurable.

==================================================
SECTION K — PAYMENT METHODS
==================================================

Create a supported-payment section.

Use logos/icons carefully.

Expected integrations may support:

Bank Transfer
USSD
Verve
Mastercard
Visa

Payment gateways under consideration/implementation include regional gateway providers such as Paystack / Flutterwave depending on final production integration.

IMPORTANT:
Do not imply a payment provider has formally partnered with NDI ỌRỤ unless partnership is confirmed.

Use wording such as:

"Supported payment methods may include..."

or

"Secure payment options powered through supported Nigerian payment gateways."

If actual gateway integration has been finalized in the repository/business documentation, reflect the confirmed provider accurately.

==================================================
SECTION L — WHY NDI ỌRỤ
==================================================

Create a premium benefits grid.

Examples:

Nearby Service Professionals
Transparent Starting Prices
Direct Booking
Secure Service Funding
Client Wallet
Provider Ratings
In-App Communication
Past Providers
Service History
Reliable Support

Use concise explanatory text.

==================================================
SECTION M — APP SCREEN SHOWCASE
==================================================

Create an attractive horizontal/scrollable or grid-based application showcase.

Use only supplied screenshots.

Potential screenshots:

Client Home
Find & Book Artisan
Provider Search
Provider Profile
Service Request
Chat
Invoice
Checkout
Active Service
Client Wallet
Past Providers
History

Desktop:
Display multiple phone frames/cards.

Mobile:
Use horizontal snap-scroll or carousel.

Do not make screenshots unreadably small.

Clicking a screenshot may optionally open a modal/lightbox.

==================================================
SECTION N — DOWNLOAD APP
==================================================

Create a strong download CTA section.

Heading:

"Your Next Trusted Artisan Is Closer Than You Think."

Buttons:

Download on the App Store
Get it on Google Play

Store URLs must come from config.

Until the stores are live, buttons may show:

Coming Soon

or point to placeholder URLs configured centrally.

Do not use dead links.

Add optional QR code placeholder component for future store URL.

==================================================
SECTION O — FAQ
==================================================

Create an accessible FAQ accordion.

Suggested questions:

What is NDI ỌRỤ?
How do I find an artisan?
How does Client Mode work?
What is Service Mode?
How do I pay for a service?
Can I fund my NDI ỌRỤ Wallet in advance?
When can a Provider see my exact service location?
What happens if my selected Provider rejects the request?
Can I use a Provider I have used before?
How do cancellations and refunds work?
How do Providers receive their earnings?
How do I contact NDI ỌRỤ support?

Answers must remain concise and aligned with approved business rules.

Do not invent policies.

==================================================
SECTION P — SUPPORT
==================================================

Create a professional support section.

Support email:
support@ndioru.com.ng

WhatsApp:
+234 808 080 8080

WhatsApp URL:
https://wa.me/2348080808080

Buttons:

Email Support
Chat on WhatsApp

Optional:
Help Centre — Coming Soon

Open WhatsApp in a new tab safely.

Use appropriate rel attributes.

==================================================
SECTION Q — FOOTER
==================================================

Footer should contain:

NDI ỌRỤ logo

Short brand description.

Columns:

Product
How It Works
Client Mode
Service Mode
Services
Download App

Company
About
Contact
Support

Legal
Privacy Policy
Terms & Conditions
Cancellation & Refund Policy
Cookie Policy

Social
Facebook
Instagram
LinkedIn
X/Twitter
TikTok

Only activate social links when actual URLs are supplied.

Until then, make them configurable or hidden.

Footer bottom:

© current year NDI ỌRỤ. All rights reserved.

Nigeria.

==================================================
9. POLICY ROUTES
==================================================

Prepare routes/pages for:

/privacy
/terms
/refund-policy
/contact
/support

If complete approved policy text is not supplied, DO NOT invent legal documents.

Instead create professionally styled placeholder pages clearly marked for approved legal copy to be inserted later.

==================================================
10. SCREENSHOT ASSET HANDLING
==================================================

I will provide approved mobile screenshots.

Create a structure such as:

/public/images/app-screens/

Do not rename images randomly.

Create a centralized screenshot data/config structure.

Example:

{
 title,
 image,
 description,
 mode,
 order
}

Use Next/Image.

Use appropriate alt text.

Preserve screenshot aspect ratio.

Do not crop essential navigation/status areas.

Do not generate new fake application screens.

==================================================
11. CONTENT SAFETY / ACCURACY
==================================================

Do not invent:

- user statistics
- number of Providers
- transaction volume
- launch dates
- customer testimonials
- company awards
- government endorsements
- certifications
- partnerships
- security certifications
- ratings
- revenue claims

unless supplied.

If a section would normally require these numbers, use neutral marketing content instead.

Do not use fake testimonials.

==================================================
12. ACCESSIBILITY
==================================================

Implement:

- semantic headings
- keyboard-accessible navigation
- visible focus states
- accessible buttons
- alt text
- ARIA labels where appropriate
- accordion accessibility
- sufficient contrast
- reduced-motion preference support

==================================================
13. PERFORMANCE
==================================================

Target strong Lighthouse results.

Optimize:

- images
- font loading
- above-the-fold content
- lazy loading
- JS bundle size
- layout shift

Avoid autoplay background video unless explicitly supplied and justified.

==================================================
14. SEO
==================================================

Configure metadata approximately around:

Title:
NDI ỌRỤ | Find & Book Trusted Artisans in Nigeria

Description:
Find, compare and book local service professionals with NDI ỌRỤ. Discover nearby artisans, manage service requests, securely fund services and track your bookings from one app.

Create appropriate:

Open Graph metadata
Twitter/X cards
canonical URL
robots
sitemap
favicon

Canonical site:
https://ndioru.com.ng

Use Nigerian/local-service terminology naturally without keyword stuffing.

==================================================
15. CODE QUALITY
==================================================

Requirements:

- TypeScript strict where practical
- modular components
- clean folder structure
- no duplicated navigation/footer code
- centralized site configuration
- centralized content data where practical
- clean responsive Tailwind classes
- no huge monolithic 1,000-line page component
- comments only where useful
- no dead code
- no console errors
- no TypeScript errors
- no lint errors
- no broken links

==================================================
16. SUGGESTED COMPONENT STRUCTURE
==================================================

Create or adapt something similar to:

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx

  landing/
    Hero.tsx
    TrustBar.tsx
    ServiceCategories.tsx
    ClientHowItWorks.tsx
    ClientWallet.tsx
    SafetySection.tsx
    DualModeSection.tsx
    PastProviders.tsx
    ProviderBenefits.tsx
    PaymentMethods.tsx
    WhyNdiOru.tsx
    AppShowcase.tsx
    DownloadCTA.tsx
    FAQ.tsx
    SupportSection.tsx

  ui/
    Button.tsx
    SectionHeading.tsx
    PhoneMockup.tsx
    Badge.tsx
    FeatureCard.tsx
    FAQItem.tsx

config/
  site.ts
  navigation.ts
  screenshots.ts
  faq.ts
  serviceCategories.ts

Do not mechanically follow this if the existing project architecture already has a better pattern.

==================================================
17. CLIENT PRESENTATION QUALITY
==================================================

This first build will be shown to the NDI ỌRỤ client for visual approval.

Therefore:

- prioritize visual polish
- ensure there are no unfinished-looking areas
- use realistic approved copy
- make supplied screenshots prominent
- produce a coherent page rather than disconnected components
- ensure the dark/lime NDI ỌRỤ identity is immediately recognizable
- make desktop screenshots presentation-ready
- make mobile responsive layout equally polished

==================================================
18. IMPLEMENTATION PROCESS
==================================================

Before coding:

1. Inspect the existing landing-page/project directory.
2. Inspect existing logo/assets.
3. Inspect package.json.
4. Reuse existing dependencies and conventions where sensible.
5. Do not overwrite unrelated project files.
6. Create a short implementation plan.

Then implement the landing page.

After implementation:

1. Run lint.
2. Run TypeScript checks.
3. Run production build.
4. Fix all errors.
5. Inspect desktop layout.
6. Inspect mobile layout.
7. Check for overflow.
8. Check navigation anchors.
9. Check policy/support links.
10. Verify WhatsApp URL.
11. Verify support email.
12. Verify screenshots are not distorted.
13. Verify there are no unsupported business claims.

Finally create:

LANDING_PAGE_IMPLEMENTATION.md

Document:

- architecture
- sections created
- reusable components
- config locations
- where to change support number
- where to change support email
- where to change App Store link
- where to change Play Store link
- where screenshots are configured
- how to add screenshots
- how to change service categories
- how to update FAQs
- outstanding client approvals
- deployment/build instructions

Do not stop at a wireframe.

Build a professional production-quality landing page that can later be deployed to ndioru.com.ng.



Screens I recommend supplying to Codex
You do not need every mobile screen on the landing page. Too many screenshots will make it look like product documentation rather than marketing.
For the strongest public site, give Codex roughly 10–15 approved screens.
Priority 1 — definitely provide these
1. Client Mode Home
   - The screen you just showed.
   - Excellent hero screenshot because it immediately shows the brand, mode toggle and major functions.
2. Find & Book an Artisan
   - Main entry point into the marketplace.
3. Service Categories
   - Shows what types of work users can book.
4. Nearby Providers / Map Search
   - Important because location/discovery is a major product benefit.
5. Provider Search/List
   - Ideally showing provider names, ratings, distance, availability and baseline pricing.
6. Provider Profile
   - Rating, reviews, service type, baseline pricing, availability and booking CTA.
7. Service Request / Job Description
   - Where Client explains what is needed.
8. Photo/Media Upload
   - If this is a separate meaningful screen.
9. Chat / Negotiation
   - Particularly valuable because NDI ỌRỤ keeps negotiation inside the application.
10. Final Invoice Confirmation
    - Shows agreed amount before funding.
11. Checkout / Service Funding
    - Useful for explaining payment protection.
12. Active Service / Tracking
    - Especially one showing Provider progress/status.
13. Client Wallet
    - Since proactive wallet funding is now an important feature.
14. Past Providers
    - This will be a good differentiator and rebooking feature.
15. Completion / Rating
- Demonstrates the full lifecycle.

Recommended website navigation
I would keep the top menu relatively short:
Home | How It Works | Services | For Clients | For Providers | Security | FAQs | Support
Then a prominent:
GET THE APP
button.
On mobile, those collapse into the menu.
One important instruction for Codex
Give Codex the actual:
- NDI ỌRỤ logo
- approved app screenshots
- any existing Admin screenshots only as visual design references, not landing-page content
- fonts if you have identified them by name — but don't pass proprietary font files unless appropriately licensed
- existing landing-page repository/folder

If dont have the screen use placeholder with the name of the screen