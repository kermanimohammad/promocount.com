import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function PriceDisplay({
  price,
  originalPrice,
  discount,
  currency = "USD",
  size = "md",
}: {
  price: number;
  originalPrice?: number;
  discount?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
}) {
  const hasCompare = typeof originalPrice === "number" && originalPrice > price;

  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span
        className={cn(
          "font-semibold tracking-tight text-foreground",
          size === "sm" && "text-base",
          size === "md" && "text-lg",
          size === "lg" && "text-3xl"
        )}
      >
        {formatPrice(price, currency)}
      </span>
      {hasCompare ? (
        <span
          className={cn(
            "text-muted-foreground line-through",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          {formatPrice(originalPrice, currency)}
        </span>
      ) : null}
      {typeof discount === "number" && discount > 0 ? (
        <span
          className={cn(
            "rounded-full bg-amber-50 px-2 py-0.5 font-medium text-amber-800 ring-1 ring-amber-200/80",
            size === "lg" ? "text-sm" : "text-xs"
          )}
        >
          {discount}% off
        </span>
      ) : null}
    </div>
  );
}
