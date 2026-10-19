import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/Container";
import { footerLegal, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-stone-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-sm">
          <BrandLogo className="h-16 sm:h-20" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.tagline} An independent product discovery site. We are not Amazon,
            AliExpress, or any other marketplace.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/deals" className="text-muted-foreground hover:text-foreground">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Promo Count
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Policies</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-border/80">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Promo Count. All rights reserved.</p>
          <p>As an Amazon Associate we earn from qualifying purchases.</p>
        </Container>
      </div>
    </footer>
  );
}
