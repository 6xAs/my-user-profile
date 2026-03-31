import CopyEmailButton from "./CopyEmailButton";

type SiteFooterProps = {
  email: string;
};

export default function SiteFooter({ email }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-400">
      <div className="flex justify-center">
        <CopyEmailButton
          email={email}
          label={email}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-emerald-300 transition hover:border-white/20 hover:text-emerald-200"
        />
      </div>
    </footer>
  );
}
