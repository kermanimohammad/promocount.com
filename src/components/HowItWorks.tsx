import { GitCompareArrows, Search, Store } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "Browse curated product cards by category, price, and discount. Promo Count is a discovery layer — not a checkout cart.",
  },
  {
    icon: GitCompareArrows,
    title: "Compare",
    body: "Open a product page to read the description, key features, and listed price so you can decide whether the deal is worth a click.",
  },
  {
    icon: Store,
    title: "Shop",
    body: "View Deal may send you to an external marketplace. That site handles payment, shipping, returns, and its own customer support.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Find a deal, then finish on the merchant site"
          description="Promo Count helps you discover products and deals. Clicking a deal may take you to an external marketplace."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-foreground/8"
            >
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                <step.icon className="size-5" aria-hidden />
              </span>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Step {index + 1}
              </p>
              <h3 className="font-heading mt-1 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
