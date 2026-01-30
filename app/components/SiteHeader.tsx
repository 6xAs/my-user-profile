type SiteHeaderProps = {
  name: string;
};

export default function SiteHeader({ name }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300 text-slate-900 shadow-glow">
              <span className="material-symbols-rounded text-[20px]">code</span>
            </span>
            <div>
              <p className="text-sm text-slate-400">Perfil profissional</p>
              <p className="text-base font-semibold tracking-tight">{name}</p>
            </div>
          </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#sobre" className="transition hover:text-white">
            Sobre
          </a>
          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>
          <a href="#experiencia" className="transition hover:text-white">
            Experiencia
          </a>
          <a href="#projetos" className="transition hover:text-white">
            Projetos
          </a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:anderson.6xas@gmail.com"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </header>
  );
}
