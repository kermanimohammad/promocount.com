import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AffiliateDisclosure({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    return (
      <p className={cn("text-xs leading-relaxed text-muted-foreground", className)}>
        {siteConfig.affiliateDisclosure}{" "}
        <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-foreground">
          Read the full disclosure
        </Link>
        .
      </p>
    );
  }

  return (
    <aside
      className={cn(
        "rounded-xl border border-border/80 bg-stone-50 px-4 py-3 text-sm leading-relaxed text-muted-foreground",
        className
      )}
    >
      <p>
        {siteConfig.affiliateDisclosure}{" "}
        <Link href="/affiliate-disclosure" className="font-medium text-foreground underline underline-offset-2">
          Affiliate disclosure
        </Link>
      </p>
    </aside>
  );
}
