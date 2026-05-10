import type { Metadata } from "next";

export const metadata: Metadata = { title: "Athlete Team" };

export default function AthleteTeamPage() {
  return <StaticInfo title="Athlete team" body="A roster of lifters, coaches, and creators shaping modern strength sports culture." />;
}

function StaticInfo({ title, body }: { title: string; body: string }) {
  return <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"><h1 className="text-5xl font-black uppercase text-white">{title}</h1><p className="mt-4 text-xl text-zinc-300">{body}</p></main>;
}
