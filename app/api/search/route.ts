import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() ?? "";
  const results = products
    .filter((product) => [product.name, product.category, product.description, product.tags.join(" ")].join(" ").toLowerCase().includes(q))
    .slice(0, 8)
    .map((product) => ({ name: product.name, slug: product.slug, category: product.category, price: product.price }));

  return NextResponse.json({ query: q, results });
}
