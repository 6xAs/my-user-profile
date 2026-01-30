import SectionHeader from "./SectionHeader";
import type { ExperienceEntry } from "../data/profile";

type ExperienceSectionProps = {
  experience: ExperienceEntry[];
};

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Experiencia"
          title="Onde a teoria vira entrega"
          description="Experiencia real construindo software, dados e processos que funcionam fora do papel."
        />
        <div className="glass rounded-2xl p-6 space-y-6 text-sm text-slate-300">
          {experience.map((entry) => (
            <div
              key={entry.title}
              className="space-y-2 border-b border-white/5 pb-4 last:border-none last:pb-0"
            >
              <p className="text-sm font-semibold text-slate-100">
                <strong>{entry.title}</strong>
              </p>
              {entry.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
