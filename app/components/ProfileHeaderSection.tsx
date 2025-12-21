import type { Highlight, Stat } from "../data/profile";

type ProfileHeaderSectionProps = {
  status: string;
  headlineLead: string;
  headlineAccent: string;
  intro: string;
  highlights: Highlight[];
  stats: Stat[];
};

export default function ProfileHeaderSection({
  status,
  headlineLead,
  headlineAccent,
  intro,
  highlights,
  stats,
}: ProfileHeaderSectionProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-800">
          {status}
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          {headlineLead} <span className="text-gradient">{headlineAccent}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300">{intro}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {highlights.map((item) => (
          <div key={item.title} className="glass rounded-2xl p-4">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
            <p className="text-2xl font-semibold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
