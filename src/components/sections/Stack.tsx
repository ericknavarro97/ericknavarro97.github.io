import { useI18n } from "@/lib/i18n";
import { stack } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

export function Stack() {
  const { lang } = useI18n();
  const groups = stack.groups[lang];

  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow={stack.eyebrow[lang]}
        title={stack.title[lang]}
        index="02 / 05"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.name}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
                {g.name}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {g.items.length} {lang === "es" ? "tecnologías" : "techs"}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground transition-colors group-hover:border-accent/40"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
