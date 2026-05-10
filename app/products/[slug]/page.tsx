import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BadgeCheck, RotateCw, ShieldCheck, Truck } from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";
import { ProductGallery } from "@/components/product-gallery";
import { ProductCard } from "@/components/product-card";
import { formatMoney, getProduct, products, relatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: { "@type": "Brand", name: "Iron Apex" },
    offers: { "@type": "Offer", price: product.price, priceCurrency: product.currency, availability: "https://schema.org/InStock" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <ProductGallery images={product.images} name={product.name} />
        <section>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">{product.category}</p>
          <h1 className="mt-2 text-5xl font-black uppercase leading-none text-white">{product.name}</h1>
          <p className="mt-4 text-lg text-zinc-300">{product.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-black text-white">{formatMoney(product.price, product.currency)}</span>
            {product.compareAt ? <span className="text-zinc-500 line-through">{formatMoney(product.compareAt, product.currency)}</span> : null}
            <span className="rounded bg-green-500/15 px-3 py-1 text-sm font-bold text-green-300">{product.stock} in stock</span>
          </div>
          <div className="my-8">
            <AddToCart product={product} />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["UAE delivery estimate", "1-3 business days", Truck],
              ["Trust badge", "Secure Stripe checkout", ShieldCheck],
              ["Return policy", "30-day performance fit", RotateCw]
            ].map(([title, body, Icon]) => (
              <div key={title as string} className="rounded border border-white/10 bg-white/5 p-4">
                <Icon className="h-5 w-5 text-red-500" />
                <p className="mt-3 text-sm font-black text-white">{title as string}</p>
                <p className="text-sm text-zinc-400">{body as string}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        <div className="metal-panel rounded-lg p-6">
          <h2 className="text-2xl font-black uppercase text-white">Detailed specifications</h2>
          <ul className="mt-4 grid gap-2 text-zinc-300">
            {product.details.map((detail) => <li key={detail}>- {detail}</li>)}
          </ul>
        </div>
        <div className="metal-panel rounded-lg p-6">
          <h2 className="text-2xl font-black uppercase text-white">Material and fit</h2>
          <p className="mt-4 text-zinc-300">Fit recommendations are based on athlete feedback, training frequency, and competition needs. Size down for compression support; stay true-to-size for long sessions.</p>
        </div>
        <div className="metal-panel rounded-lg p-6">
          <h2 className="text-2xl font-black uppercase text-white">Reviews</h2>
          <p className="mt-4 flex items-center gap-2 text-zinc-300"><BadgeCheck className="h-5 w-5 text-red-500" /> {product.rating}/5 from {product.reviewCount} verified lifters.</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-black uppercase text-white">Complete the look</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts(product).map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
      <AddToCart product={product} sticky />
    </main>
  );
}
