import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { DealsCatalog } from "@/components/DealsCatalog";

export const metadata: Metadata = {
  title: "Deals",
  description:
    "Browse Promo Count deals. Filter by category, price, and discount across live Amazon affiliate offers.",
  openGraph: {
    title: "Deals | Promo Count",
    description:
      "Browse Promo Count deals. Filter by category, price, and discount across live Amazon affiliate offers.",
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
