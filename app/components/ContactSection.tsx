type ContactSectionProps = {
  email: string;
};

export default function ContactSection({ email }: ContactSectionProps) {
  return (
    <section id="contato" className="space-y-6">
      <div className="glass ring-gradient rounded-3xl p-8 text-center animate-fade-in">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Colaboracao
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
          Vamos construir algo relevante juntos
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Aberto a conversas sobre produto, dados e desenvolvimento. Envie
          detalhes do desafio e vamos desenhar um plano.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 font-medium text-slate-950 transition hover:brightness-110"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
