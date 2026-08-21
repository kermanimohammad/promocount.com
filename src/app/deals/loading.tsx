import { ProductGridSkeleton } from "@/components/ProductGridSkeleton";
import { Container } from "@/components/Container";

export default function DealsLoading() {
  return (
    <div className="py-14">
      <Container>
        <div className="mb-10 h-20 max-w-md animate-pulse rounded-xl bg-stone-100" />
        <ProductGridSkeleton />
      </Container>
    </div>
  );
}
