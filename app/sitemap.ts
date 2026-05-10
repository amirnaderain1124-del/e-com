import type { MetadataRoute } from "next";
import { blogPosts, products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/collections", "/athlete-team", "/about", "/blog", "/contact", "/faq", "/shipping", "/returns", "/privacy", "/terms", "/sponsorship"];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date() }))
  ];
}
