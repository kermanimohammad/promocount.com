import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority = false,
  href = "/",
}: {
  className?: string;
  priority?: boolean;
  href?: string | null;
}) {
  const image = (
    <Image
      src="/logo.png"
      alt="PromoCount"
      width={512}
      height={512}
      priority={priority}
      className={cn("h-10 w-auto object-contain sm:h-11", className)}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label="PromoCount home">
      {image}
    </Link>
  );
}
