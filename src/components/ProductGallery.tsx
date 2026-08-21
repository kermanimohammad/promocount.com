"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images.length > 0 ? product.images : [product.image];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-foreground/8">
        <Image
          src={images[active]}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1}`}
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-xl ring-2 ring-transparent",
                  active === index && "ring-teal-800"
                )}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
