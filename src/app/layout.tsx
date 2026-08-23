import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-promocount",
  display: "swap",
});

/** Impact Affiliates Universal Tracking Tag — required in <head> for site verification. */
const impactTrackingScript = `(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7670448-3da7-4707-9ce9-9e8ecb3195c31.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Promo Count — Discover Better Deals & Shop Smarter",
    template: "%s | Promo Count",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Promo Count — Discover Better Deals & Shop Smarter",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Promo Count — Discover Better Deals & Shop Smarter",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: impactTrackingScript }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
