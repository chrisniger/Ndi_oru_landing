import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerGroups = [
  { title: "Product", links: [["How It Works", "#how-it-works"], ["Client Mode", "#clients"], ["Service Mode", "#providers"], ["Services", "#services"], ["Download App", "#download"]] },
  { title: "Company", links: [["About", "#home"], ["Contact", "/contact"], ["Support", "/support"]] },
  { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Cancellation & Refund", "/refund-policy"]] },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div className="footerIntro">
          <a className="brand" href="#home">
            <Image src="/images/brand/ndi-oru-mark.webp" width={46} height={46} alt="" unoptimized loading="lazy" decoding="async" />
            <span>NDi ORU</span>
          </a>
          <p>One trusted marketplace for booking local services and building skilled businesses across Nigeria.</p>
        </div>
        {footerGroups.map((group) => (
          <div className="footerGroup" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => href.startsWith("/") ? <Link key={href} href={href}>{label}</Link> : <a key={href} href={href}>{label}</a>)}
          </div>
        ))}
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
        <span>Nigeria</span>
      </div>
    </footer>
  );
}
