"use client";

import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CreditCard,
  Headphones,
  History,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Star,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import { applePath, googlePlayPath } from "@/lib/brand-icons";
import { clientSteps, faqs, screenshots, serviceCategories, trustBenefits } from "@/config/content";
import { siteConfig } from "@/config/site";

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="sectionHeading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function StoreButton({ store }: { store: "Apple" | "Google Play" }) {
  const live = store === "Apple" ? siteConfig.appStoreUrl : siteConfig.playStoreUrl;
  const brandPath = store === "Apple" ? applePath : googlePlayPath;
  const content = <><svg className="storeBrandIcon" viewBox="0 0 24 24" role="img" aria-label={`${store} logo`}><path d={brandPath} /></svg><span><small>{live ? "Download on" : "Coming soon on"}</small>{store}</span></>;
  return live ? <a className="storeButton" href={live} target="_blank" rel="noreferrer">{content}</a> : <span className="storeButton storeDisabled">{content}</span>;
}

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <section className="hero" id="home">
        <div className="heroTexture" aria-hidden="true" />
        <div className="heroScreens" aria-hidden="true">
          <div className="phone phoneRear"><Image src="/images/app-screens/6.png" fill sizes="300px" alt="" priority /></div>
          <div className="phone phoneMain"><Image src="/images/app-screens/4.png" fill sizes="340px" alt="" priority /></div>
        </div>
        <div className="heroContent pageWidth">
          <p className="eyebrow">Local skill. Trusted service.</p>
          <h1>One App. Two Ways to <span>Get Things Done.</span></h1>
          <p className="heroLead">Book trusted local services in Client Mode, or switch to Service Mode to offer your skills and earn.</p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#download">Download the App <ArrowRight /></a>
            <a className="button buttonGhost" href="#services">Find an Artisan</a>
          </div>
          <p className="modeLine">Book a Service. Offer a Service. One App.</p>
        </div>
      </section>

      <section className="trustStrip" aria-label="Platform benefits">
        <div className="pageWidth trustGrid">
          {trustBenefits.map(([Icon, label]) => <div key={label}><Icon /><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section pageWidth" id="services">
        <SectionHeading eyebrow="Everyday help, closer" title="Services for the work that cannot wait." copy="Explore representative categories from local professionals. Available categories will grow with the marketplace." />
        <div className="categoryGrid">
          {serviceCategories.map(({ name, icon: Icon }) => <article className="categoryCard" key={name}><Icon /><h3>{name}</h3><ArrowRight /></article>)}
        </div>
      </section>

      <section className="section processSection" id="how-it-works">
        <div className="pageWidth processGrid">
          <div>
            <SectionHeading eyebrow="Client Mode" title="From need to done, without the guesswork." copy="A clear service flow keeps discovery, discussion, payment and progress together." />
            <div className="steps">
              {clientSteps.map(([number, title, copy]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
          <div className="processVisual">
            <div className="phone processPhone"><Image src="/images/app-screens/7.png" fill sizes="360px" alt="NDi ORU artisan profile screen" /></div>
            <div className="processNote"><Star /><strong>Compare before you book</strong><span>Ratings, availability and starting prices stay visible.</span></div>
          </div>
        </div>
      </section>

      <section className="section pageWidth" id="clients">
        <div className="featureBand walletBand">
          <div className="featureCopy">
            <span className="iconPlate"><WalletCards /></span>
            <p className="eyebrow">Client Wallet</p>
            <h2>Fund. Book. Stay in Control.</h2>
            <p>Add money ahead of time, use your balance for eligible service payments and follow every transaction from one place.</p>
            <ul className="checkList">
              <li><Check /> See service payment status</li>
              <li><Check /> Track wallet transaction history</li>
              <li><Check /> Receive eligible cancellation credits</li>
            </ul>
          </div>
          <div className="bandPhone phone"><Image src="/images/app-screens/4.png" fill sizes="330px" alt="NDi ORU app screen" /></div>
        </div>
      </section>

      <section className="section securitySection" id="security">
        <div className="pageWidth">
          <SectionHeading eyebrow="Built for confidence" title="Trust and accountability at every step." copy="NDi ORU is designed to protect important service details while keeping payments, communication and progress connected to the job." />
          <div className="securityGrid">
            {[
              [LockKeyhole, "Protected service location", "Exact job addresses remain protected until required payment conditions are satisfied."],
              [CreditCard, "Job-specific funding", "Service funds are connected to the confirmed job and its approved invoice."],
              [MessageSquareText, "In-app communication", "Keep service discussions and invoice updates together in one conversation."],
              [ShieldCheck, "Operational support", "Administrative review supports payment, refund and dispute handling when needed."],
            ].map(([Icon, title, copy]) => <article className="securityCard" key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section pageWidth" id="providers">
        <SectionHeading eyebrow="One account. Two modes." title="Book a service. Offer a service. One app." copy="Switch between Client Mode and Service Mode anytime — find trusted artisans when you need help, or offer your own skills and earn." />
        <div className="modeGrid">
          <article className="modeCard modeClient"><div className="modeTop"><MapPin /><span>Client Mode</span></div><h3>Find the right help nearby.</h3><ul className="checkList"><li><Check /> Browse trusted artisans</li><li><Check /> Compare ratings and pricing</li><li><Check /> Fund and track services</li><li><Check /> Book past providers again</li></ul><a href="#services">Explore services <ArrowRight /></a></article>
          <article className="modeCard modeService"><div className="modeTop"><BriefcaseBusiness /><span>Service Mode</span></div><h3>Turn your skills into opportunity.</h3><ul className="checkList"><li><Check /> Receive client requests</li><li><Check /> Manage jobs and availability</li><li><Check /> Build your rating</li><li><Check /> Track earnings and withdrawals</li></ul><a href="#download">Download the App <ArrowRight /></a></article>
        </div>
      </section>

      <section className="section repeatSection">
        <div className="pageWidth repeatGrid">
          <div><p className="eyebrow">Past Providers</p><h2>Good service should be easy to find again.</h2><p>After a completed service, quickly reconnect with a past provider and start another request when they are active and available.</p></div>
          <div className="repeatMark"><History /><span>Rebook with confidence</span></div>
        </div>
      </section>

      <section className="section showcase" id="showcase">
        <div className="pageWidth"><SectionHeading eyebrow="Inside the app" title="A closer look at NDi ORU." copy="Explore the approved Client Mode experience from account setup to local service discovery and wallet management." /></div>
        <div className="screenRail" tabIndex={0} aria-label="NDi ORU app screen showcase">
          {screenshots.map((screen) => <figure className="screenCard" key={screen.image}><div className="screenImage"><Image src={screen.image} fill sizes="280px" alt={screen.title} /></div><figcaption><span>{screen.mode}</span><strong>{screen.title}</strong></figcaption></figure>)}
        </div>
      </section>

      <section className="section pageWidth" id="download">
        <div className="downloadBand">
          <div><p className="eyebrow">NDi ORU mobile app</p><h2>Your next trusted artisan is closer than you think.</h2><p>Download links will activate here as soon as the app store rollout is ready.</p><div className="storeRow"><StoreButton store="Apple" /><StoreButton store="Google Play" /></div></div>
          <Image src="/images/brand/ndi-oru-mark.png" width={260} height={260} alt="NDi ORU mark" />
        </div>
      </section>

      <section className="section faqSection" id="faqs">
        <div className="pageWidth faqGrid">
          <SectionHeading eyebrow="Questions, answered" title="A clear way to get started." copy="The essentials about booking, payments, Service Mode and support." />
          <div className="faqList">
            {faqs.map(([question, answer], index) => <article className="faqItem" key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown className={openFaq === index ? "rotate" : ""} /></button>{openFaq === index && <p>{answer}</p>}</article>)}
          </div>
        </div>
      </section>

      <section className="section pageWidth" id="support">
        <div className="supportBand">
          <div><p className="eyebrow">Real support</p><h2>Need a hand? Talk to us.</h2><p>Reach the NDi ORU support team by email or WhatsApp.</p></div>
          <div className="supportActions"><a className="button buttonLight" href={`mailto:${siteConfig.supportEmail}`}><Mail /> Email support</a><a className="button buttonWhatsApp" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"><Headphones /> Chat on WhatsApp</a></div>
        </div>
      </section>
    </main>
  );
}
