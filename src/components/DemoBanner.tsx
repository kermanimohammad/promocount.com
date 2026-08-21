import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";

export function DemoBanner() {
  return (
    <div className="border-b border-amber-200/80 bg-amber-50">
      <Container className="py-2">
        <p className="text-center text-xs leading-relaxed text-amber-950 sm:text-sm">
          {siteConfig.demoNotice}
        </p>
      </Container>
    </div>
  );
}
