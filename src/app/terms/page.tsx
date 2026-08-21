import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Promo Count product discovery website.",
  openGraph: {
    title: "Terms of Use | Promo Count",
    description: "Terms of use for the Promo Count product discovery website.",
  },
};

export default function TermsPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">Legal</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-foreground">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm">Last updated: August 21, 2026</p>
        </div>
        <p>
          By using Promo Count, you agree to these terms. If you do not agree, please do not use the
          site.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">The service</h2>
        <p>
          Promo Count publishes product information and links so you can discover deals. We do not
          sell the products ourselves. Prices, photos, and availability in the current catalog are
          demonstration data unless a page clearly states otherwise.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">
          Third-party purchases
        </h2>
        <p>
          When you follow a deal link, you leave Promo Count and enter a contract with that
          merchant. Shipping, returns, warranties, and customer service are the merchant’s
          responsibility. Promo Count is not a party to those transactions.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">Accuracy</h2>
        <p>
          We aim to keep listings useful, but we do not warrant that descriptions, prices, or
          stock status are complete or current. Always confirm details on the destination site
          before you pay.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">Acceptable use</h2>
        <p>
          Do not scrape the site in a way that disrupts service, attempt to break security, or
          misuse Promo Count branding to imply you operate this website.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">
          Affiliate relationships
        </h2>
        <p>
          Some links may generate a commission for Promo Count if you purchase. This is explained on
          the{" "}
          <Link
            href="/affiliate-disclosure"
            className="text-foreground underline underline-offset-2"
          >
            affiliate disclosure
          </Link>{" "}
          page. Commissions do not increase the price you pay on the merchant site solely because
          you arrived through Promo Count.
        </p>
        <h2 className="font-heading pt-2 text-2xl font-semibold text-foreground">Changes</h2>
        <p>
          These terms may be updated as the product launches. The date at the top of the page
          shows the latest revision.
        </p>
      </Container>
    </div>
  );
}
