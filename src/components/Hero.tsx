import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Clothing racks in a well-lit retail shop",
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    alt: "Wireless headphones on a yellow background",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    alt: "Kitchen counter with cookware and ingredients",
  },
];

export function Hero() {
  return (
    <section className="border-b border-border/80 bg-[linear-gradient(180deg,#f4f7f6_0%,#fafaf9_100%)]">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
            Independent deal discovery
          </p>
          <h1 className="font-heading max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Discover Better Deals. Shop Smarter.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Explore useful products, compare options, and discover deals from online
            marketplaces.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/deals"
              className="h-11 px-6 bg-teal-800 hover:bg-teal-800/90"
            >
              Explore Deals
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/categories" variant="outline" className="h-11 px-6">
              Browse Categories
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-md ring-1 ring-foreground/10 sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:min-h-[22rem]">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          {heroImages.slice(1).map((image) => (
            <div
              key={image.src}
              className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ring-1 ring-foreground/10 sm:block"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
