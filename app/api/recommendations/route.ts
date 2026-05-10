import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const seed = searchParams.get("product");
  const source = products.find((product) => product.slug === seed);
  const recommendations = products
    .filter((product) => product.slug !== seed)
    .sort((a, b) => {
      const aScore = source ? Number(a.categorySlug === source.categorySlug) + a.rating : a.rating;
      const bScore = source ? Number(b.categorySlug === source.categorySlug) + b.rating : b.rating;
      return bScore - aScore;
    })
    .slice(0, 4);

  return NextResponse.json({ strategy: "category-affinity-rating-trending", recommendations });
}
