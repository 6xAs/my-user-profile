"use client";

import { useMemo, useState } from "react";
import type { Project } from "../data/profile";
import SectionHeader from "./SectionHeader";

type ProjectsSectionProps = {
  projects: Project[];
  categories: string[];
};

export default function ProjectsSection({
  projects,
  categories,
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "Todos");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "Todos" || project.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(normalizedQuery)
        );

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, projects, query]);

  return (
    <section id="projetos" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos que conectam software, dados e processos"
          description="Atuacao em ciencia de dados aplicada, automacoes, plataformas web e integracao de sistemas em contextos educacionais, governamentais e institucionais."
        />
        <div className="space-y-4">
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
          <div className="relative max-w-md">
            <input
              type="search"
              placeholder="Buscar projetos por nome, stack ou tag..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((item) => (
            <article
              key={item.title}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <span className="material-symbols-rounded text-[20px]">
                    {item.icon}
                  </span>
                </span>
                <p className="text-base font-semibold text-white">
                  {item.title}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                  {item.category}
                </span>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
          {filteredProjects.length === 0 && (
            <div className="glass rounded-2xl p-6 text-sm text-slate-300 lg:col-span-3">
              Nenhum projeto encontrado para essa busca.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
