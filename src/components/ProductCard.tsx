import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PriceDisplay } from "@/components/PriceDisplay";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);
  const label = product.featured ? "Featured" : "Deal";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/8 transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <Badge className="absolute top-3 left-3 bg-white/95 text-foreground shadow-sm">
          {label}
        </Badge>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-xs font-medium tracking-wide text-teal-800 uppercase">
          {category?.name ?? product.category}
        </p>
        <h3 className="font-heading text-base leading-snug font-semibold">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          currency={product.currency}
          size="sm"
        />
        <div className="mt-auto pt-1">
          <Link
            href={`/products/${product.slug}`}
            className={cn(buttonVariants({ size: "lg" }), "h-10 w-full bg-teal-800 hover:bg-teal-800/90")}
          >
            View Deal
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
