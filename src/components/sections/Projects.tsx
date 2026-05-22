import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/data/projects";
import { projectsSection } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const CATEGORIES: ProjectCategory[] = [
  "fintech",
  "education",
  "tools",
  "healthcare",
  "ecommerce",
];

export function Projects() {
  const { lang } = useI18n();
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const labels = projectsSection.categoryLabels[lang];

  const filtered = useMemo(() => {
    const list = active === "all" ? projects : projects.filter((p) => p.category === active);
    return showAll ? list : list.slice(0, 6);
  }, [active, showAll]);

  const totalForFilter = active === "all"
    ? projects.length
    : projects.filter((p) => p.category === active).length;

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow={projectsSection.eyebrow[lang]}
        title={projectsSection.title[lang]}
        index="03 / 05"
      />

      <div className="mb-8 flex flex-wrap items-center gap-2">
        <FilterChip
          active={active === "all"}
          onClick={() => {
            setActive("all");
            setShowAll(false);
          }}
        >
          {projectsSection.filterAll[lang]}
        </FilterChip>
        {CATEGORIES.map((c) => {
          const count = projects.filter((p) => p.category === c).length;
          if (count === 0) return null;
          return (
            <FilterChip
              key={c}
              active={active === c}
              onClick={() => {
                setActive(c);
                setShowAll(false);
              }}
            >
              {labels[c]} <span className="ml-1 text-muted-foreground">·{count}</span>
            </FilterChip>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => {
          const name = p.name[lang];
          const desc = p.description[lang];
          const isLink = !!p.href;
          const Tag: any = isLink ? "a" : "div";
          const tagProps = isLink
            ? { href: p.href, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Tag
              key={p.slug}
              {...tagProps}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300",
                "hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_24px_60px_-20px_var(--color-accent)]",
                p.highlight && "ring-1 ring-accent/20"
              )}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")} · {labels[p.category]}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {p.year}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight">
                {name}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {desc}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
                {p.tech.length > 5 && (
                  <li className="rounded border border-dashed border-border px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
                    +{p.tech.length - 5}
                  </li>
                )}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
                {p.isOpenSource ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-accent">
                    <Github className="h-3.5 w-3.5" />
                    {projectsSection.open[lang]}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    {projectsSection.private[lang]}
                  </span>
                )}
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-all duration-300",
                    isLink && "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  )}
                />
              </div>
            </Tag>
          );
        })}
      </div>

      {totalForFilter > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="rounded-md border border-border bg-card px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {showAll ? projectsSection.showLess[lang] : projectsSection.showMore[lang]}
          </button>
        </div>
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
