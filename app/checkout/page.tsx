import type { Metadata } from "next";
import { CreditCard, Lock } from "lucide-react";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-5xl font-black uppercase text-white">Secure checkout</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <form className="metal-panel grid gap-4 rounded-lg p-6">
          <input className="rounded border border-white/10 bg-black px-4 py-3 text-white" placeholder="Email" />
          <input className="rounded border border-white/10 bg-black px-4 py-3 text-white" placeholder="Full name" />
          <input className="rounded border border-white/10 bg-black px-4 py-3 text-white" placeholder="Address line 1" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded border border-white/10 bg-black px-4 py-3 text-white" placeholder="Emirate" />
            <input className="rounded border border-white/10 bg-black px-4 py-3 text-white" placeholder="Phone" />
          </div>
          <button formAction="/api/checkout" className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-red-600 px-5 font-black text-white">
            <CreditCard className="h-5 w-5" /> Continue to Stripe
          </button>
        </form>
        <aside className="rounded-lg border border-white/10 bg-zinc-950 p-6">
          <Lock className="h-7 w-7 text-red-500" />
          <h2 className="mt-4 text-xl font-black text-white">Protected payment</h2>
          <p className="mt-2 text-sm text-zinc-400">Stripe Checkout route is included at `/api/checkout`. Add live Stripe keys in production.</p>
        </aside>
      </div>
    </main>
  );
}
