import type { Metadata } from "next";

import { CategoryCard } from "@/components/CategoryCard";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse Promo Count categories including electronics, home, beauty, fashion, tools, gadgets, sports, and accessories.",
  openGraph: {
    title: "Categories | Promo Count",
    description:
      "Browse Promo Count categories including electronics, home, beauty, fashion, tools, gadgets, sports, and accessories.",
  },
};

export default function CategoriesPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <SectionHeading
          eyebrow="Directory"
          title="Categories"
          description="Pick a department to open the deals list with that filter. Counts will reflect live inventory once marketplace APIs are connected."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
}
