/**
 * Product model designed for a future switch from mock data to
 * AliExpress Affiliate / Amazon Associates (Creators) APIs.
 *
 * Fields marked as optional are reserved for live catalog sync.
 */

export type ProductSource = "demo" | "aliexpress" | "amazon";

export type Availability = "in_stock" | "out_of_stock" | "unknown";

export type CategorySlug =
  | "electronics"
  | "home-kitchen"
  | "beauty"
  | "fashion"
  | "tools"
  | "gadgets"
  | "sports"
  | "accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  price: number;
  originalPrice: number;
  /** Discount percentage, 0–100. Recalculate from prices when ingesting live APIs. */
  discount: number;
  currency: "USD";
  image: string;
  images: string[];
  features: string[];
  source: ProductSource;
  affiliateUrl: string;
  featured: boolean;
  trending: boolean;
  availability: Availability;
  isDemo: boolean;
  /** Marketplace product identifier once APIs are connected. */
  externalProductId?: string;
  /** Estimated commission rate (0–1) or amount, depending on the network. */
  commission?: number;
  /** Tracking IDs such as Amazon tag or AliExpress tracking_id. */
  trackingId?: string;
  rating?: number | null;
  reviewCount?: number | null;
  lastSyncedAt?: string | null;
}

export type ProductSort =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "discount-desc";

export interface ProductQuery {
  q?: string;
  category?: CategorySlug | string;
  minPrice?: number;
  maxPrice?: number;
  minDiscount?: number;
  sort?: ProductSort;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
}
