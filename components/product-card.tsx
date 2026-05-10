import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { formatMoney, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/30">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {product.bestSeller ? "Best seller" : product.category}
          </div>
          <button aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white backdrop-blur">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase text-zinc-500">{product.category}</p>
          <span className="flex items-center gap-1 text-sm text-zinc-300">
            <Star className="h-4 w-4 fill-red-500 text-red-500" /> {product.rating}
          </span>
        </div>
        <Link href={`/products/${product.slug}`} className="block text-lg font-semibold text-white">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-zinc-400">{product.description}</p>
        <div className="flex items-end gap-2">
          <span className="text-xl font-black text-white">{formatMoney(product.price, product.currency)}</span>
          {product.compareAt ? <span className="text-sm text-zinc-500 line-through">{formatMoney(product.compareAt, product.currency)}</span> : null}
        </div>
      </div>
    </article>
  );
}
