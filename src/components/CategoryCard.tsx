import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Dumbbell,
  Hammer,
  Shirt,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  Watch,
  type LucideIcon,
} from "lucide-react";

import type { Category, CategorySlug } from "@/types/product";

const icons: Record<CategorySlug, LucideIcon> = {
  electronics: Cpu,
  "home-kitchen": UtensilsCrossed,
  beauty: Sparkles,
  fashion: Shirt,
  tools: Hammer,
  gadgets: Smartphone,
  sports: Dumbbell,
  accessories: Watch,
};

export function CategoryCard({
  category,
  href,
}: {
  category: Category;
  href?: string;
}) {
  const Icon = icons[category.slug];
  const destination = href ?? `/categories/${category.slug}`;

  return (
    <Link
      href={destination}
      className="group relative block overflow-hidden rounded-2xl bg-stone-900 shadow-sm ring-1 ring-foreground/10"
    >
      <div className="relative aspect-[5/4]">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <span className="mb-2 inline-flex size-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
          <Icon className="size-4" aria-hidden />
        </span>
        <h3 className="font-heading text-lg font-semibold">{category.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/80">{category.description}</p>
      </div>
    </Link>
  );
}
