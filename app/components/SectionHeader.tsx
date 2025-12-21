type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="max-w-2xl text-sm sm:text-base text-slate-300">
        {description}
      </p>
      <div className="h-px w-full section-divider" />
    </div>
  );
}
