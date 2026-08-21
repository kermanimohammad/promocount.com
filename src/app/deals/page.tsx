import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { DealsCatalog } from "@/components/DealsCatalog";

export const metadata: Metadata = {
  title: "Deals",
  description:
    "Browse Promo Count deals. Filter by category, price, and discount. Catalog data is currently a demonstration set.",
  openGraph: {
    title: "Deals | Promo Count",
    description:
      "Browse Promo Count deals. Filter by category, price, and discount. Catalog data is currently a demonstration set.",
  },
};

export default function DealsPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <DealsCatalog />
      </Container>
    </div>
  );
}
