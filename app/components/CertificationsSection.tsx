import type { ReactNode } from "react";
import {
  BiAward,
  BiBarChartAlt2,
  BiBookOpen,
  BiBuildingHouse,
  BiChevronRight,
  BiNetworkChart,
} from "react-icons/bi";
import type { CertificationGroup } from "../data/profile";
import SectionHeader from "./SectionHeader";

type CertificationsSectionProps = {
  certifications: CertificationGroup[];
};

const certificationIconMap: Record<string, ReactNode> = {
  graduation: <BiAward className="text-[22px]" />,
  analytics: <BiBarChartAlt2 className="text-[22px]" />,
  teaching: <BiBookOpen className="text-[22px]" />,
  process: <BiNetworkChart className="text-[22px]" />,
  government: <BiBuildingHouse className="text-[22px]" />,
};

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section id="certificacoes" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Certificações"
          title="Formação, docência e experiência institucional reunidas em evidências"
          description="Uma área dedicada às minhas formações e certificações mais relevantes, com acesso direto aos documentos e acervos organizados por contexto."
        />

        <div className="space-y-8">
          {certifications.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>
                  <p className="max-w-3xl text-sm text-slate-300">
                    {group.description}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                  {group.items.length} {group.items.length === 1 ? "item" : "itens"}
                </span>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_24px_80px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-80 transition duration-300 group-hover:scale-105`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]"
                    />

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-emerald-200 shadow-[0_12px_30px_rgba(16,185,129,0.15)]">
                          {certificationIconMap[item.icon] ?? (
                            <BiAward className="text-[22px]" />
                          )}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                          {item.badge}
                        </span>
                      </div>

                      <div className="mt-6 space-y-3">
                        <h4 className="text-lg font-semibold leading-snug text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm leading-6 text-slate-300">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-200">
                        <span>Abrir certificação</span>
                        <span className="inline-flex items-center gap-2 text-emerald-300 transition group-hover:translate-x-1">
                          Ver documento
                          <BiChevronRight className="text-lg" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
