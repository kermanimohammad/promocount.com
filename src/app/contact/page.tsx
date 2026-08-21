import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Promo Count about partnerships, catalog questions, or the website.",
  openGraph: {
    title: "Contact | Promo Count",
    description: "Contact Promo Count about partnerships, catalog questions, or the website.",
  },
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">Contact</p>
          <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight">
            Write to Promo Count
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Use this form for partnership questions, catalog issues, or general feedback. The
            current version stores nothing on a server; it only confirms that the form works.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Placeholder inbox: {siteConfig.email}
          </p>
        </div>
        <ContactForm />
      </Container>
    </div>
  );
}
