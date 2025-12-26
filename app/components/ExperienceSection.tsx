import SectionHeader from "./SectionHeader";

type ExperienceSectionProps = {
  experience: string[];
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
        <div className="glass rounded-2xl p-6">
          <ul className="space-y-3 text-sm text-slate-300">
            {experience.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
