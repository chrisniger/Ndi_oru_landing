import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "NDi ORU | Find & Book Trusted Artisans in Nigeria",
  description: "Find, compare and book local service professionals with NDi ORU. Discover nearby artisans, securely fund services and track bookings from one app.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NDi ORU | One App. Two Ways to Get Things Done.",
    description: "Book trusted local services in Client Mode, or switch to Service Mode to offer your skills and earn.",
    url: siteConfig.domain,
    siteName: "NDi ORU",
    locale: "en_NG",
    type: "website",
  },
  twitter: { card: "summary", title: "NDi ORU", description: "Book a Service. Offer a Service. One App." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
