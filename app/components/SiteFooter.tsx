type SiteFooterProps = {
  email: string;
};

export default function SiteFooter({ email }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-400">
      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noreferrer"
        className="text-emerald-300 transition hover:text-emerald-200"
      >
        {email}
      </a>
    </footer>
  );
}
