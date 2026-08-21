import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="max-w-lg text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">404</p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight">
          This page is not in the catalog
        </h1>
        <p className="mt-3 text-muted-foreground">
          The link may be outdated, or the demo product was removed. Head back to deals or home.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/deals" className="h-11 bg-teal-800 px-6 hover:bg-teal-800/90">
            Browse deals
          </ButtonLink>
          <ButtonLink href="/" variant="outline" className="h-11 px-6">
            Home
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/contact" className="text-muted-foreground hover:text-foreground hover:underline">
            Contact us
          </Link>{" "}
          if you expected something else here.
        </p>
      </Container>
    </div>
  );
}
