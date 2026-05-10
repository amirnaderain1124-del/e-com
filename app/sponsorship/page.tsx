import type { Metadata } from "next";

export const metadata: Metadata = { title: "Athlete Sponsorship" };

export default function SponsorshipPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Athlete program</p>
      <h1 className="mt-2 text-5xl font-black uppercase text-white">Sponsorship application</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">For lifters, coaches, and creators building real strength culture around the platform.</p>
      <form action="/api/sponsorship" className="metal-panel mt-8 grid gap-4 rounded-lg p-6">
        {["Full name", "Email", "Instagram", "TikTok", "Federation", "Best total"].map((label) => (
          <input key={label} name={label.toLowerCase().replaceAll(" ", "_")} placeholder={label} className="rounded border border-white/10 bg-black px-4 py-3 text-white" />
        ))}
        <textarea name="achievements" placeholder="Competition achievements" rows={5} className="rounded border border-white/10 bg-black px-4 py-3 text-white" />
        <textarea name="proposal" placeholder="Why Iron Apex should back your platform work" rows={5} className="rounded border border-white/10 bg-black px-4 py-3 text-white" />
        <button className="rounded bg-red-600 px-5 py-3 font-black text-white">Submit application</button>
      </form>
    </main>
  );
}
