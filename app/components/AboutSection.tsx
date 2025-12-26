import SectionHeader from "./SectionHeader";

type AboutSectionProps = {
  title: string;
  body: string[];
  mission: string;
  focus: string[];
};

export default function AboutSection({
  title,
  body,
  mission,
  focus,
}: AboutSectionProps) {
  return (
    <section id="sobre" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Sobre"
          title={title}
          description="Quem sou eu, o que resolvo e porque gosto de problemas complexos."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm sm:text-base text-slate-300">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-semibold text-white">Missao pessoal</p>
              <p className="mt-3 text-sm text-slate-300">{mission}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Areas de impacto
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
