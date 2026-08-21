import type { Metadata } from "next";
import { Suspense } from "react";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Container } from "@/components/Container";
import { FilterPanel, SortBar } from "@/components/FilterPanel";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ProductGridSkeleton";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategoryBySlug } from "@/data/categories";
import { getProducts } from "@/services/products";
import type { ProductQuery, ProductSort } from "@/types/product";

export const metadata: Metadata = {
  title: "Deals",
  description:
    "Browse DealScope deals. Filter by category, price, and discount. Catalog data is currently a demonstration set.",
  openGraph: {
    title: "Deals | DealScope",
    description:
      "Browse DealScope deals. Filter by category, price, and discount. Catalog data is currently a demonstration set.",
  },
};

type SearchParams = Promise<{
  q?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  minDiscount?: string;
  sort?: string;
}>;

function parseQuery(params: Awaited<SearchParams>): ProductQuery {
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  const minDiscount = params.minDiscount ? Number(params.minDiscount) : undefined;
  const sort = params.sort as ProductSort | undefined;

  return {
    q: params.q,
    category: params.category,
    minPrice: Number.isFinite(minPrice) ? minPrice : undefined,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined,
    minDiscount: Number.isFinite(minDiscount) ? minDiscount : undefined,
    sort: sort || "featured",
  };
}

export default async function DealsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const raw = await searchParams;
  const query = parseQuery(raw);
  const products = getProducts(query);
  const category = query.category ? getCategoryBySlug(query.category) : undefined;

  const title = query.q
    ? `Results for “${query.q}”`
    : category
      ? `${category.name} deals`
      : "All deals";

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="Catalog"
          title={title}
          description="Search, filter, and sort the demo catalog. Live marketplace offers will use this same page once APIs are connected."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <Suspense fallback={<div className="hidden h-40 rounded-xl bg-stone-100 lg:block" />}>
            <FilterPanel />
          </Suspense>
          <div>
            <Suspense fallback={null}>
              <SortBar resultCount={products.length} />
            </Suspense>
            <Suspense fallback={<ProductGridSkeleton count={8} />}>
              <ProductGrid products={products} />
            </Suspense>
            <AffiliateDisclosure className="mt-10" />
          </div>
        </div>
      </Container>
    </div>
  );
}
