import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Promo Count handles analytics, cookies, affiliate links, third-party websites, and contact information you submit.",
  openGraph: {
    title: "Privacy Policy | Promo Count",
    description:
      "How Promo Count handles analytics, cookies, affiliate links, third-party websites, and contact information you submit.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">Legal</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm">Last updated: August 21, 2026</p>
        </div>
        <p>
          Promo Count is a product discovery website. This page describes the kinds of information
          the site may collect as it grows. Promo Count is not presented here as a registered legal
          entity; this is a service-level policy for the website.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">Analytics</h2>
        <p>
          If analytics tools are added (for example, to understand which pages are visited), they
          may record approximate location, device type, referring site, and pages viewed. We will
          not use analytics to invent audience size or sales claims on the site.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">Cookies</h2>
        <p>
          The site may use cookies or similar storage for essential functions such as remembering
          a UI preference. If advertising or analytics cookies are introduced later, this page
          will be updated to describe them.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">
          External affiliate links
        </h2>
        <p>
          Product pages include outbound links that may be tagged for affiliate tracking. Clicking
          those links sends you to a third-party website. Tracking parameters may tell a
          marketplace that the visit came via Promo Count. We do not receive your payment card
          details from those checkouts.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">
          Third-party websites
        </h2>
        <p>
          Marketplaces, image hosts, and future API providers have their own privacy policies.
          Promo Count does not control how those parties use data they collect after you leave this
          site. Review their policies before you buy.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">
          User contact information
        </h2>
        <p>
          If you submit the contact form, we intend to use your name, email, subject, and message
          only to respond. The current demo form does not transmit that data to a server. When
          email delivery is enabled, messages will be stored only as long as needed to reply,
          unless a longer retention period is required for a specific request.
        </p>
        <p>
          Questions about this policy can be sent via the{" "}
          <Link href="/contact" className="text-foreground underline underline-offset-2">
            contact page
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
