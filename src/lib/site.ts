export const siteConfig = {
  name: "DealScope",
  tagline: "Discover better deals. Shop smarter.",
  description:
    "Discover useful products, compare options, and find great deals from online marketplaces with DealScope.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@dealscope.example",
  affiliateDisclosure:
    "Disclosure: DealScope may earn a commission when you purchase through certain links on this website. This does not affect the price you pay.",
  demoNotice:
    "This catalog currently uses sample products for demonstration. Prices, availability, and outbound links are placeholders until marketplace APIs are connected.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/deals", label: "Deals" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegal = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
] as const;
