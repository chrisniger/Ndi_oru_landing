"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="navInner">
        <a className="brand" href="#home" aria-label="NDi ORU home">
          <Image src="/images/brand/ndi-oru-mark.png" width={42} height={42} alt="" priority />
          <span>NDi ORU</span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          {navigation.slice(0, 7).map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="button buttonPrimary navCta" href="#download">Get the App</a>
        <button
          className="menuButton"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="button buttonPrimary" href="#download" onClick={() => setOpen(false)}>Get the App</a>
        </nav>
      )}
    </header>
  );
}
