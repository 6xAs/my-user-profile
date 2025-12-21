type ProfileSidebarProps = {
  name: string;
  role: string;
  location: string;
  availability: string;
  summary: string;
  email: string;
  socialLinks: { label: string; url: string }[];
};

export default function ProfileSidebar({
  name,
  role,
  location,
  availability,
  summary,
  email,
  socialLinks,
}: ProfileSidebarProps) {
  return (
    <aside className="space-y-6">
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 text-slate-900" />
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm text-slate-400">{role}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2 text-sm text-slate-300">
          <p>{location}</p>
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {availability}
          </span>
        </div>
        <p className="mt-4 text-sm text-slate-300">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110"
          >
            Contato
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/40"
          >
            Ver projetos
          </a>
        </div>
      </div>

      <div className="glass rounded-3xl p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Conexoes
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="rounded-full border border-white/15 px-3 py-1 text-slate-200 transition hover:border-white/40"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
