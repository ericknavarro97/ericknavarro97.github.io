type Props = {
  eyebrow: string;
  title: string;
  index: string;
};

export function SectionHeader({ eyebrow, title, index }: Props) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 border-b border-border pb-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <span className="font-mono text-xs text-muted-foreground sm:text-sm">
        {index}
      </span>
    </div>
  );
}
