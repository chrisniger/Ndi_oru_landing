export const siteConfig = {
  name: "NDi ORU",
  legalName: "NDI ORU",
  domain: "https://ndioru.com.ng",
  supportEmail: "support@ndioru.com.ng",
  whatsappNumber: "+234 808 080 8080",
  whatsappUrl: "https://wa.me/2348080808080",
  appStoreUrl: "",
  playStoreUrl: "",
  providerInterestUrl: "#providers",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    x: "",
    tiktok: "",
  },
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "For Clients", href: "#clients" },
  { label: "For Providers", href: "#providers" },
  { label: "Security", href: "#security" },
  { label: "FAQs", href: "#faqs" },
  { label: "Support", href: "#support" },
] as const;
