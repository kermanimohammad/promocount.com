import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Promo Count may earn a commission when you purchase through certain links. This does not increase the price you pay.",
  openGraph: {
    title: "Affiliate Disclosure | Promo Count",
    description:
      "Promo Count may earn a commission when you purchase through certain links. This does not increase the price you pay.",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">Legal</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight text-foreground">
            Affiliate Disclosure
          </h1>
        </div>
        <p>
          Promo Count may participate in affiliate programs. That means we may earn a commission if
          you click certain links on this website and later purchase a product or service on a
          third-party site.
        </p>
        <p>
          Clicking those links may generate a commission. The merchant typically recognizes the
          referral through a tracking identifier on the URL. You should assume that “View Deal”
          and similar buttons can be monetized links once live programs are connected.
        </p>
        <p>
          This does not increase the customer’s purchase price. You pay the price shown by the
          destination store at checkout. Promo Count does not add a surcharge because you arrived
          from this site.
        </p>
        <p>
          External websites have their own terms and privacy policies. After you leave Promo Count,
          that merchant’s rules apply to your order, account, and data. We are not Amazon,
          AliExpress, or any other marketplace, and we do not claim official endorsement from
          those companies.
        </p>
        <p>
          “View Deal” buttons open Amazon product pages through our Associates tracking links. We
          may earn a commission if you buy through those links, at no extra cost to you.
        </p>
        <p>
          See also the{" "}
          <Link href="/privacy" className="text-foreground underline underline-offset-2">
            privacy policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-foreground underline underline-offset-2">
            terms of use
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
