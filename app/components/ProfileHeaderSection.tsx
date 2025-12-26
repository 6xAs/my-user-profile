import Image from "next/image";
import type { Highlight, Stat } from "../data/profile";

type ProfileHeaderSectionProps = {
  name: string;
  role: string;
  location: string;
  avatarSrc: string;
  avatarAlt: string;
  status: string;
  headlineLead: string;
  headlineAccent: string;
  intro: string;
  highlights: Highlight[];
  stats: Stat[];
};

export default function ProfileHeaderSection({
  name,
  role,
  location,
  avatarSrc,
  avatarAlt,
  status,
  headlineLead,
  headlineAccent,
  intro,
  highlights,
  stats,
}: ProfileHeaderSectionProps) {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20 ring-4 ring-emerald-100/40">
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-slate-50">{name}</p>
              <p className="text-sm text-slate-400">{role}</p>
              <p className="text-xs text-slate-500">{location}</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-800">
              {status}
            </span>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
              {headlineLead}{" "}
              <span className="text-gradient">{headlineAccent}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300">{intro}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <span className="material-symbols-rounded text-[20px]">
                      {item.icon}
                    </span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.level}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Score</span>
                  <span>{item.score}/100</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-300"
                    style={{ width: `${Math.min(item.score, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Indicadores
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <span className="text-xs text-emerald-300">+</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-emerald-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
