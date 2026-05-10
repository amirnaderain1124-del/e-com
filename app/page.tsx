import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Trophy, Zap } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { ProductCard } from "@/components/product-card";
import { blogPosts, categories, products } from "@/lib/products";

const athletes = [
  { name: "Maya Haddad", total: "232kg total", discipline: "64kg national champion" },
  { name: "Omar Al Nuaimi", total: "305kg total", discipline: "109kg UAE team" },
  { name: "Leila Novak", total: "189kg total", discipline: "Youth development coach" }
];

export default function HomePage() {
  const bestSellers = products.filter((product) => product.bestSeller || product.featured).slice(0, 4);

  return (
    <main>
      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=2200&q=85"
          alt="Olympic lifter preparing on a platform"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/45" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-red-500">Chalk. Steel. Platform pressure.</p>
            <h1 className="text-balance text-6xl font-black uppercase leading-[0.86] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Built for maximal performance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-300">
              Premium Olympic weightlifting apparel and accessories engineered for explosive pulls, violent speed under the bar, and competition-day confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="inline-flex items-center gap-2 rounded bg-red-600 px-5 py-3 font-black text-white hover:bg-red-500">
                Shop competition gear <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/sponsorship" className="rounded border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur hover:bg-white/15">
                Athlete sponsorship
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["UAE 1-3 day shipping", Truck],
            ["Competition-grade materials", ShieldCheck],
            ["Athlete-tested fit systems", Trophy]
          ].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 text-zinc-300">
              <Icon className="h-5 w-5 text-red-500" />
              <span className="font-semibold">{label as string}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Featured collections</p>
            <h2 className="mt-2 text-4xl font-black uppercase text-white">Platform-ready categories</h2>
          </div>
          <Link href="/collections" className="hidden text-sm font-bold text-zinc-300 hover:text-white sm:block">View all</Link>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.slice(0, 6).map((category, index) => (
            <Link key={category.slug} href={`/shop?category=${category.slug}`} className="metal-panel group rounded-lg p-6 transition hover:-translate-y-1 hover:border-red-500/50">
              <p className="text-5xl font-black text-white/10">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-black text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">Competition-grade gear tuned for serious training cycles.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Best sellers</p>
            <h2 className="mt-2 text-4xl font-black uppercase text-white">Engineered for explosive pulls</h2>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <FadeIn className="metal-panel rounded-lg p-8">
          <Zap className="h-9 w-9 text-red-500" />
          <h2 className="mt-8 text-4xl font-black uppercase text-white">Competition-ready gear</h2>
          <p className="mt-4 text-zinc-300">Complete your lifting setup with shoes, sleeves, wraps, singlets, chalk, and recovery tools selected by training phase and meet-day demands.</p>
          <Link href="/shop?tag=competition" className="mt-7 inline-flex rounded bg-red-600 px-5 py-3 font-black text-white">Build your setup</Link>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          {athletes.map((athlete) => (
            <FadeIn key={athlete.name} className="rounded-lg border border-white/10 bg-black p-5">
              <div className="aspect-[3/4] rounded bg-gradient-to-br from-zinc-800 via-zinc-950 to-red-950" />
              <h3 className="mt-4 font-black text-white">{athlete.name}</h3>
              <p className="text-sm text-red-400">{athlete.total}</p>
              <p className="text-sm text-zinc-400">{athlete.discipline}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Training intelligence</p>
          <h2 className="mt-2 text-4xl font-black uppercase text-white">Educational content preview</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
              <div className="relative aspect-video">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="metal-panel grid gap-6 rounded-lg p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Instagram / TikTok feed</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white">Platform sessions, athlete drops, and meet prep.</h2>
          </div>
          <form className="flex gap-2">
            <input aria-label="Email address" placeholder="athlete@email.com" className="min-h-12 rounded border border-white/10 bg-black px-4 text-white outline-none" />
            <button className="rounded bg-red-600 px-5 font-black text-white">Join</button>
          </form>
        </div>
      </section>
    </main>
  );
}
