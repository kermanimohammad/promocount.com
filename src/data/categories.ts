import type { Category } from "@/types/product";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "Electronics",
    description: "Audio, charging, and everyday tech that earns a place on your desk.",
    image: img("photo-1519389950473-47ba0277781c"),
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    description: "Practical tools and appliances for cooking, brewing, and daily routines.",
    image: img("photo-1556911220-e15b29be8c8f"),
  },
  {
    slug: "beauty",
    name: "Beauty",
    description: "Skincare, grooming, and personal care picks for a simple routine.",
    image: img("photo-1556228720-195a672e8a03"),
  },
  {
    slug: "fashion",
    name: "Fashion",
    description: "Everyday clothing and footwear with a focus on comfort and value.",
    image: img("photo-1483985988355-763728e1935b"),
  },
  {
    slug: "tools",
    name: "Tools",
    description: "Workshop and home-repair gear for projects that need to last.",
    image: img("photo-1504148455328-c376907d081c"),
  },
  {
    slug: "gadgets",
    name: "Gadgets",
    description: "Compact accessories that make phones, desks, and travel easier.",
    image: img("photo-1519558260268-cde7e03a0152"),
  },
  {
    slug: "sports",
    name: "Sports",
    description: "Training gear for home workouts, running, and outdoor activity.",
    image: img("photo-1517836357463-d25dfeac3438"),
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Bags, eyewear, and small carry items that complete a daily kit.",
    image: img("photo-1553062407-98eeb64c6a62"),
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
