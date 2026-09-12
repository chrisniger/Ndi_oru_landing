import {
  AirVent,
  Brush,
  CircuitBoard,
  Hammer,
  PaintRoller,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const serviceCategories = [
  { name: "Electrical", icon: PlugZap },
  { name: "Plumbing", icon: Wrench },
  { name: "AC & Refrigeration", icon: AirVent },
  { name: "Carpentry", icon: Hammer },
  { name: "Painting", icon: PaintRoller },
  { name: "Cleaning", icon: Sparkles },
  { name: "Appliance Repairs", icon: CircuitBoard },
  { name: "Tiling & Masonry", icon: Brush },
] as const;

export const clientSteps = [
  ["01", "Find a service", "Choose the type of help you need."],
  ["02", "Choose an artisan", "Compare nearby providers, ratings, prices and availability."],
  ["03", "Send your request", "Describe the work and add photos when they help."],
  ["04", "Confirm the invoice", "Discuss details in chat and approve the final amount."],
  ["05", "Fund the service", "Complete the required payment before work begins."],
  ["06", "Track and approve", "Follow progress, confirm completion and leave a rating."],
] as const;

export const screenshots = [
  { title: "Welcome to NDi ORU", image: "/images/app-screens/1.png", mode: "Account" },
  { title: "Create your account", image: "/images/app-screens/2.png", mode: "Account" },
  { title: "Secure verification", image: "/images/app-screens/3.png", mode: "Account" },
  { title: "Client Mode home", image: "/images/app-screens/4.png", mode: "Client Mode" },
  { title: "Find local services", image: "/images/app-screens/5.png", mode: "Client Mode" },
  { title: "Browse nearby artisans", image: "/images/app-screens/6.png", mode: "Client Mode" },
  { title: "Review artisan profiles", image: "/images/app-screens/7.png", mode: "Client Mode" },
  { title: "Manage service activity", image: "/images/app-screens/8.png", mode: "Client Mode" },
  { title: "Messages and updates", image: "/images/app-screens/9.png", mode: "Client Mode" },
  { title: "Wallet and account", image: "/images/app-screens/10.png", mode: "Client Mode" },
] as const;

export const faqs = [
  ["What is NDi ORU?", "NDi ORU is one app for finding trusted local service professionals and, through Service Mode, offering your own skills."],
  ["How do I find an artisan?", "Choose a service category, browse nearby providers and compare their profile, rating, starting price and availability before sending a request."],
  ["What is Service Mode?", "Service Mode is the provider side of the same NDi ORU account. It is planned for the provider rollout and will support requests, jobs, earnings and availability."],
  ["How do I pay for a service?", "After the details and final invoice are confirmed, you can fund the service through supported payment options. Any applicable gateway fee is shown before confirmation."],
  ["Can I add money to my wallet in advance?", "Yes. Client Wallet is designed to let you add funds ahead of time and use the balance for eligible future service payments."],
  ["When can a provider see my exact location?", "Your exact service address stays protected until the required payment conditions for the job are satisfied."],
  ["What if my selected provider cannot take the request?", "If public fallback is enabled, the request may be shown to eligible providers until you accept a quote."],
  ["How do I contact support?", "You can reach NDi ORU support by email or WhatsApp using the contact options on this page."],
] as const;

export const trustBenefits = [
  [ShieldCheck, "Verified providers"],
  [Wrench, "Transparent starting prices"],
  [CircuitBoard, "Secure service funding"],
  [Sparkles, "Ratings and reviews"],
] as const;
