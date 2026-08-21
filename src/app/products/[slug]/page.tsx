import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Container } from "@/components/Container";
import { PriceDisplay } from "@/components/PriceDisplay";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGrid } from "@/components/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import {
  getProductBySlug,
  getProductSlugs,
  getRelatedProducts,
} from "@/services/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product not found" };
  }

  const description = product.description.slice(0, 155);
  return {
    title: product.name,
    description,
    openGraph: {
      title: `${product.name} | DealScope`,
      description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: "DealScope demo catalog" },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability:
        product.availability === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };

  return (
    <div className="py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <p className="mb-6 text-sm text-muted-foreground">
          <Link href="/deals" className="hover:text-foreground">
            Deals
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/categories/${product.category}`}
            className="hover:text-foreground"
          >
            {category?.name ?? product.category}
          </Link>
        </p>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <ProductGallery product={product} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{category?.name ?? product.category}</Badge>
              {product.featured ? <Badge>Featured</Badge> : <Badge variant="outline">Deal</Badge>}
              {product.isDemo ? (
                <Badge variant="outline">Demo product</Badge>
              ) : null}
            </div>
            <h1 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-5">
              <PriceDisplay
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                currency={product.currency}
                size="lg"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Availability:{" "}
              {product.availability === "in_stock"
                ? "Listed as in stock in the demo catalog"
                : product.availability === "out_of_stock"
                  ? "Listed as unavailable"
                  : "Unknown"}
              . Source: {product.source === "demo" ? "sample data" : product.source}.
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <h2 className="font-heading mt-8 text-lg font-semibold">Key features</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-800" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 w-full bg-teal-800 px-6 text-base hover:bg-teal-800/90 sm:w-auto"
              )}
            >
              View Deal
              <ExternalLink className="size-4" />
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Opens an external website. Current demo links go to example.com, not a live merchant.
            </p>

            <AffiliateDisclosure className="mt-8" />
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-border/80 pt-12">
            <h2 className="font-heading mb-8 text-2xl font-semibold tracking-tight">
              More in {category?.name ?? "this category"}
            </h2>
            <ProductGrid products={related} />
          </section>
        ) : null}
      </Container>
    </div>
  );
}
