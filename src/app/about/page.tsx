import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "DealScope is a product discovery platform designed to help shoppers discover useful products, compare options, and find interesting deals across online marketplaces.",
  openGraph: {
    title: "About | DealScope",
    description:
      "DealScope is a product discovery platform designed to help shoppers discover useful products, compare options, and find interesting deals across online marketplaces.",
  },
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">About</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight">
          A calmer way to look at deals
        </h1>
        <div className="prose-none mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            DealScope is a product discovery platform designed to help shoppers discover useful
            products, compare options, and find interesting deals across online marketplaces.
          </p>
          <p>
            We are building an independent catalog experience: search, categories, and product
            pages that explain what you are looking at before you leave for a merchant. DealScope
            is not a storefront. We do not take payment, ship items, or hold inventory.
          </p>
          <p>
            DealScope is not owned by Amazon, AliExpress, or any other marketplace, and we do not
            claim an official partnership with those companies. When a deal link is live, it may
            lead to a third-party site that participates in an affiliate program.
          </p>
          <p>
            The products you see now are a demonstration catalog. They exist so the site can be
            designed, reviewed, and connected to real affiliate APIs without inventing sales
            figures or customer reviews.
          </p>
          <h2 className="font-heading pt-4 text-2xl font-semibold text-foreground">What we will add next</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Live offers from affiliate-eligible marketplaces, starting with AliExpress.</li>
            <li>Price and availability refresh on a schedule.</li>
            <li>Clear source labels so you always know which marketplace a deal opens.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
