import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const pages = {
  privacy: { eyebrow: "Legal", title: "Privacy Policy", copy: "The approved NDi ORU privacy policy will be published here before the public launch." },
  terms: { eyebrow: "Legal", title: "Terms & Conditions", copy: "The approved NDi ORU terms and conditions will be published here before the public launch." },
  "refund-policy": { eyebrow: "Legal", title: "Cancellation & Refund Policy", copy: "The approved cancellation and refund policy will be published here before the public launch." },
  contact: { eyebrow: "Contact", title: "Talk to the NDi ORU team", copy: "Questions about the platform, partnership opportunities or the upcoming rollout? Reach us through the support channels below." },
  support: { eyebrow: "Support", title: "How can we help?", copy: "Contact NDi ORU support for help with the app, service requests, payments or your account." },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];
  if (!page) notFound();
  const isLegal = ["privacy", "terms", "refund-policy"].includes(slug);

  return (
    <main className="infoPage">
      <section className="infoPanel">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.copy}</p>
        {isLegal ? <div className="pendingNotice">Approved legal copy pending. No policy terms have been invented for this prototype.</div> : <div className="infoActions"><a className="button buttonPrimary" href={`mailto:${siteConfig.supportEmail}`}><Mail /> {siteConfig.supportEmail}</a><a className="button buttonGhost" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> {siteConfig.whatsappNumber}</a></div>}
        <Link className="backLink" href="/">← Back to the landing page</Link>
      </section>
    </main>
  );
}
