import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ButtonLink } from "@/components/ButtonLink";
import { CategoryCard } from "@/components/CategoryCard";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";
import { getFeaturedProducts, getTrendingProducts } from "@/services/products";

export const metadata: Metadata = {
  title: "DealScope — Discover Better Deals & Shop Smarter",
  description: siteConfig.description,
  openGraph: {
    title: "DealScope — Discover Better Deals & Shop Smarter",
    description: siteConfig.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/deals?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const trending = getTrendingProducts(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="Featured deals"
              description="A starting set of sample products. Treat prices and photos as demonstration data."
            />
            <Link
              href="/deals"
              className="inline-flex items-center gap-1 text-sm font-medium text-teal-800 hover:underline"
            >
              View all deals
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ProductGrid products={featured} />
        </Container>
      </section>

      <section className="border-y border-border/80 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            className="mb-10"
            eyebrow="Browse"
            title="Shop by category"
            description="Jump into a product type. Each category opens the deals list with that filter applied."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Trending"
              title="Trending in the demo catalog"
              description="Additional sample cards so you can see how a second row of deals will look."
            />
            <Link
              href="/deals?sort=discount-desc"
              className="inline-flex items-center gap-1 text-sm font-medium text-teal-800 hover:underline"
            >
              Highest discounts
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <ProductGrid products={trending} />
        </Container>
      </section>

      <HowItWorks />

      <section className="border-t border-border/80 bg-white py-12">
        <Container className="space-y-6">
          <AffiliateDisclosure />
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-teal-900 px-6 py-8 text-teal-50 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="font-heading text-xl font-semibold">Ready to look around?</p>
              <p className="mt-1 text-sm text-teal-100/80">
                The full demo catalog lives on the deals page, with search and filters.
              </p>
            </div>
            <ButtonLink href="/deals" className="h-11 bg-white px-6 text-teal-900 hover:bg-stone-100">
              Explore Deals
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
