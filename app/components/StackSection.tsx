"use client";

import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import type { StackGroup } from "../data/profile";

type StackSectionProps = {
  stackGroups: StackGroup[];
};

export default function StackSection({ stackGroups }: StackSectionProps) {
  const categories = useMemo(
    () => stackGroups.map((group) => group.title),
    [stackGroups]
  );
  const [activeCategory, setActiveCategory] = useState(
    categories[0] ?? "Desenvolvimento"
  );
  const activeGroup =
    stackGroups.find((group) => group.title === activeCategory) ??
    stackGroups[0];

  return (
    <section id="stack" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Stack"
          title="Ferramentas que eu realmente uso"
          description="Tecnologias escolhidas para acelerar prototipos, garantir confiabilidade e escalar produtos."
        />
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "bg-emerald-400 text-slate-950"
                    : "border border-white/15 text-slate-200 hover:border-white/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {activeGroup && (
            <div className="glass rounded-2xl p-5 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <span className="material-symbols-rounded text-[20px]">
                      {activeGroup.icon}
                    </span>
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {activeGroup.title}
                  </p>
                </div>
                <span className="text-xs text-slate-400">Score</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeGroup.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Score</span>
                      <span>{item.score}</span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-100">
                      {item.name}
                    </p>
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-emerald-300"
                        style={{ width: `${Math.min(item.score, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
