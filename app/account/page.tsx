import type { Metadata } from "next";

export const metadata: Metadata = { title: "Account" };

export default function AccountPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black uppercase text-white">Athlete account</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Order history", "Saved addresses", "Restock notifications"].map((title) => (
          <article key={title} className="metal-panel rounded-lg p-6">
            <h2 className="font-black text-white">{title}</h2>
            <p className="mt-2 text-sm text-zinc-400">Clerk/Auth.js protected account data surface.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
