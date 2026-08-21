"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { ProductSort } from "@/types/product";

const discountOptions = [
  { value: "0", label: "Any discount" },
  { value: "20", label: "20% or more" },
  { value: "30", label: "30% or more" },
  { value: "40", label: "40% or more" },
];

const sortOptions: { value: ProductSort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "discount-desc", label: "Highest Discount" },
];

export function FilterPanel() {
  return (
    <>
      <div className="mb-6 flex items-center justify-end gap-3 lg:hidden">
        <Sheet>
          <SheetTrigger
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-medium"
          >
            <SlidersHorizontal className="size-4" />
            Filters
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(100%,20rem)] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="px-4 pb-6">
              <FilterFields />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <aside className="hidden lg:block">
        <FilterFields />
      </aside>
    </>
  );
}

function FilterFields() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") ?? "";
  const sort = (searchParams.get("sort") as ProductSort) || "featured";
  const minDiscount = searchParams.get("minDiscount") ?? "0";

  function update(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (!value) params.delete(key);
      else params.set(key, value);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function clear() {
    router.push(pathname);
  }

  const hasFilters = [...searchParams.keys()].some((key) => key !== "sort");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Refine</p>
        {hasFilters ? (
          <button
            type="button"
            onClick={clear}
            className="text-xs font-medium text-teal-800 hover:underline"
          >
            Clear all
          </button>
        ) : null}
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">Category</legend>
        <div className="flex flex-col gap-1">
          <FilterChip
            active={!selectedCategory}
            onClick={() => update({ category: undefined })}
          >
            All categories
          </FilterChip>
          {categories.map((category) => (
            <FilterChip
              key={category.slug}
              active={selectedCategory === category.slug}
              onClick={() => update({ category: category.slug })}
            >
              {category.name}
            </FilterChip>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Price (USD)</legend>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5">
            <Label htmlFor="minPrice">Min</Label>
            <Input
              id="minPrice"
              inputMode="decimal"
              defaultValue={searchParams.get("minPrice") ?? ""}
              placeholder="0"
              className="h-9"
              onBlur={(event) =>
                update({ minPrice: event.target.value.trim() || undefined })
              }
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="maxPrice">Max</Label>
            <Input
              id="maxPrice"
              inputMode="decimal"
              defaultValue={searchParams.get("maxPrice") ?? ""}
              placeholder="200"
              className="h-9"
              onBlur={(event) =>
                update({ maxPrice: event.target.value.trim() || undefined })
              }
            />
          </div>
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="discount">Discount</Label>
        <Select
          value={minDiscount}
          onValueChange={(value) =>
            update({ minDiscount: value && value !== "0" ? value : undefined })
          }
        >
          <SelectTrigger id="discount" className="h-9 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {discountOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sort">Sort</Label>
        <Select
          value={sort}
          onValueChange={(value) =>
            update({ sort: value && value !== "featured" ? value : undefined })
          }
        >
          <SelectTrigger id="sort" className="h-9 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start">
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg px-3 py-2 text-left text-sm transition-colors",
        active
          ? "bg-teal-800 text-white"
          : "text-muted-foreground hover:bg-stone-100 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}

export function SortBar({ resultCount }: { resultCount: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = (searchParams.get("sort") as ProductSort) || "featured";

  function updateSort(value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "featured") params.delete("sort");
    else params.set("sort", value);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">{resultCount} deals in this view</p>
      <Select value={sort} onValueChange={updateSort}>
        <SelectTrigger className="h-9 w-full sm:w-56">
          <SelectValue />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false} align="end">
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
