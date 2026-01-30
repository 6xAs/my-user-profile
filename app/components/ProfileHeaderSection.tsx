import Image from "next/image";
import type { Highlight, Stat } from "../data/profile";
import type { ReactNode } from "react";
import { MdAccountTree, MdInsights, MdTune } from "react-icons/md";
import { SiGmail } from "react-icons/si";

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

const highlightIconMap: Record<string, ReactNode> = {
  account_tree: <MdAccountTree className="text-xl" />,
  insights: <MdInsights className="text-xl" />,
  tune: <MdTune className="text-xl" />,
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
            <a
              href="https://github.com/6xAs"
              target="_blank"
              rel="noreferrer"
              className="group relative h-40 w-40 overflow-hidden rounded-full border border-white/20 ring-4 ring-emerald-100/40 transition duration-300 focus-visible:outline-none focus-visible:ring-emerald-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:ring-emerald-400 hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(16,185,129,0.25)]"
            >
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            </a>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-semibold text-slate-50">{name}</p>
              <p className="text-base text-slate-300">{role}</p>
              <p className="text-sm text-slate-400">{location}</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm uppercase tracking-[0.3em] text-emerald-800">
              {status}
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-50">
              {headlineLead}{" "}
              <span className="text-gradient">{headlineAccent}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300">{intro}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    {highlightIconMap[item.icon] ?? (
                      <span className="text-[18px]">{item.icon}</span>
                    )}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.level}
                  </span>
                </div>
                <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-300">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Score</span>
                  <span className="text-sm">{item.score}/100</span>
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

        <div className="space-y-4">
          <div className="glass rounded-3xl p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Indicadores
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-3xl sm:text-4xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <span className="text-sm text-emerald-300">+</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-emerald-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Snapshot
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Foco atual</span>
                <span className="text-emerald-200">Data + Produto</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Disponibilidade</span>
                <span className="text-emerald-200">Imediata</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Preferencia</span>
                <span className="text-emerald-200">Projetos hibridos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Escopo</span>
                <span className="text-emerald-200">Full stack + dados</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Links rapidos
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://github.com/6xAs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-1.8c-2.8.6-3.3-1.4-3.3-1.4-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .8-.3 2.8 1.1.8-.2 1.7-.4 2.6-.4.9 0 1.8.1 2.6.4 2-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.6.1 2.9.6.8 1 1.7 1 2.8 0 4-2.4 4.8-4.7 5 .3.3.7.8.7 1.7v2.5c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.8C22 6.6 17.5 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anderson-seixas-/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6a.6.6 0 0 0-.6-.6zM8.1 18.2H5.5V9.8h2.6v8.4zM6.8 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.7 9.6H16V14c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.5-.1.8v4.2h-2.6V9.8h2.6v1.1c.3-.6 1-1.3 2.2-1.3 1.6 0 2.8 1.1 2.8 3.4v5.2z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:anderson.6xas@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40"
                >
                  <SiGmail className="h-4 w-4" />
                  Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
