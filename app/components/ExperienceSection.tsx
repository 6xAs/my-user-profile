import type { TimelineItem } from "../data/profile";
import SectionHeader from "./SectionHeader";

type ExperienceSectionProps = {
  timeline: TimelineItem[];
};

export default function ExperienceSection({ timeline }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Experiencia"
          title="Caminho profissional"
          description="Evolucao de carreira com foco em dados confiaveis e experiencias digitais."
        />
        <div className="grid gap-4">
          {timeline.map((item) => (
            <div key={item.role} className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-white">
                    {item.role}
                  </p>
                  <p className="text-sm text-slate-400">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {item.time}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
