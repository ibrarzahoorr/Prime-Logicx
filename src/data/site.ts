export const siteConfig = {
  name: "Prime Logicx",
  shortName: "Prime Logicx",
  domain: "https://prime-logicx.vercel.app",
  description:
    "Prime Logicx is the leading custom software development company, offering elite web & mobile app development, top-tier AI automation solutions, and expert digital marketing systems for businesses worldwide. Hire the best developers today.",
  whatsapp: "923010482120",
  whatsappDisplay: "+92 301 0482120",
  email: "primelogicx@gmail.com",
  socials: {
    linkedin: "",
    instagram: "",
    twitter: "",
  },
};

export function waLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];
