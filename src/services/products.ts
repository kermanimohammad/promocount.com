import { products as mockProducts } from "@/data/products";
import { calcDiscount } from "@/lib/format";
import type { CategorySlug, Product, ProductQuery } from "@/types/product";

/**
 * Product access layer.
 *
 * Today this reads the local demo catalog. When AliExpress Affiliate or
 * Amazon Associates APIs are connected, keep these function signatures and
 * swap the data source (HTTP client, cache, or database) inside this file.
 */
const catalog: Product[] = mockProducts.map((product) => ({
  ...product,
  discount: product.discount || calcDiscount(product.price, product.originalPrice),
}));

export function getProducts(query: ProductQuery = {}): Product[] {
  let results = [...catalog];

  if (query.q?.trim()) {
    const term = query.q.trim().toLowerCase();
    results = results.filter((product) => {
      const haystack = [
        product.name,
        product.description,
        product.category,
        ...product.features,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }

  if (query.category) {
    results = results.filter((product) => product.category === query.category);
  }

  if (typeof query.minPrice === "number" && !Number.isNaN(query.minPrice)) {
    results = results.filter((product) => product.price >= query.minPrice!);
  }

  if (typeof query.maxPrice === "number" && !Number.isNaN(query.maxPrice)) {
    results = results.filter((product) => product.price <= query.maxPrice!);
  }

  if (typeof query.minDiscount === "number" && !Number.isNaN(query.minDiscount)) {
    results = results.filter((product) => product.discount >= query.minDiscount!);
  }

  switch (query.sort) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "discount-desc":
      results.sort((a, b) => b.discount - a.discount);
      break;
    case "featured":
    default:
      results.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
      break;
  }

  return results;
}

export function getProductBySlug(slug: string): Product | undefined {
  return catalog.find((product) => product.slug === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return catalog.filter((product) => product.featured).slice(0, limit);
}

export function getTrendingProducts(limit = 6): Product[] {
  return catalog.filter((product) => product.trending).slice(0, limit);
}

export function getProductsByCategory(category: CategorySlug | string): Product[] {
  return catalog.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return catalog
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, limit);
}

export function getProductSlugs(): string[] {
  return catalog.map((product) => product.slug);
}

export function getPriceBounds(): { min: number; max: number } {
  const prices = catalog.map((product) => product.price);
  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
}
