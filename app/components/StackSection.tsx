import SectionHeader from "./SectionHeader";

type StackSectionProps = {
  stack: string[];
};

export default function StackSection({ stack }: StackSectionProps) {
  return (
    <section id="stack" className="space-y-6">
      <div className="space-y-6 animate-fade-up">
        <SectionHeader
          eyebrow="Stack"
          title="Ferramentas que uso no dia a dia"
          description="Tecnologias escolhidas para acelerar prototipos, garantir confiabilidade e escalar produtos."
        />
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
