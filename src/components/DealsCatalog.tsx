"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { FilterPanel, SortBar } from "@/components/FilterPanel";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ProductGridSkeleton";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategoryBySlug } from "@/data/categories";
import { getProducts } from "@/services/products";
import type { ProductQuery, ProductSort } from "@/types/product";

function parseQuery(params: URLSearchParams): ProductQuery {
  const minPrice = params.get("minPrice")
    ? Number(params.get("minPrice"))
    : undefined;
  const maxPrice = params.get("maxPrice")
    ? Number(params.get("maxPrice"))
    : undefined;
  const minDiscount = params.get("minDiscount")
    ? Number(params.get("minDiscount"))
    : undefined;
  const sort = (params.get("sort") as ProductSort | null) || "featured";

  return {
    q: params.get("q") ?? undefined,
    category: params.get("category") ?? undefined,
    minPrice: Number.isFinite(minPrice) ? minPrice : undefined,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined,
    minDiscount: Number.isFinite(minDiscount) ? minDiscount : undefined,
    sort,
  };
}

function DealsCatalogInner() {
  const searchParams = useSearchParams();
  const query = useMemo(
    () => parseQuery(new URLSearchParams(searchParams.toString())),
    [searchParams]
  );
  const products = useMemo(() => getProducts(query), [query]);
  const category = query.category
    ? getCategoryBySlug(query.category)
    : undefined;

  const title = query.q
    ? `Results for “${query.q}”`
    : category
      ? `${category.name} deals`
      : "All deals";

  return (
    <>
      <SectionHeading
        eyebrow="Catalog"
        title={title}
        description="Search, filter, and sort live Amazon affiliate deals."
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <FilterPanel />
        <div>
          <SortBar resultCount={products.length} />
          <ProductGrid products={products} />
          <AffiliateDisclosure className="mt-10" />
        </div>
      </div>
    </>
  );
}

export function DealsCatalog() {
  return (
    <Suspense
      fallback={
        <div>
          <div className="mb-10 h-20 max-w-md animate-pulse rounded-xl bg-stone-100" />
          <ProductGridSkeleton count={8} />
        </div>
      }
    >
      <DealsCatalogInner />
    </Suspense>
  );
}
