import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/services/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | DealScope`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="Category"
          title={category.name}
          description={category.description}
        />
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
        <AffiliateDisclosure className="mt-10" />
      </Container>
    </div>
  );
}
