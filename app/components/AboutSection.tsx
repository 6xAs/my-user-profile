import SectionHeader from "./SectionHeader";

type AboutSectionProps = {
  insights: string[];
};

export default function AboutSection({ insights }: AboutSectionProps) {
  return (
    <section id="sobre" className="space-y-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 animate-fade-up">
          <SectionHeader
            eyebrow="Sobre"
            title="Visao integrada de software e dados"
            description="Combino engenharia, analise e ciencia de dados para entregar plataformas e produtos com metricas claras."
          />
          <p className="text-sm sm:text-base text-slate-300">
            Sou um profissional orientado a resultados, com experiencia em
            arquitetar sistemas, construir pipelines e comunicar insights de
            forma clara. Gosto de trabalhar com times multidisciplinares e
            estruturar processos que aceleram aprendizado e entrega.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Estrategia
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Produto
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Dados
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Desenvolvimento
            </span>
          </div>
        </div>
        <div className="glass rounded-2xl p-6 animate-fade-up delay-150">
          <p className="text-sm font-semibold">Insights de trabalho</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {insights.map((item) => (
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
