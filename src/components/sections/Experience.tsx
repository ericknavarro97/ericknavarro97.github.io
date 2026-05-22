import { useI18n } from "@/lib/i18n";
import { experience } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  const { lang } = useI18n();
  const items = experience.items[lang];

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow={experience.eyebrow[lang]}
        title={experience.title[lang]}
        index="04 / 05"
      />

      <ol className="relative ml-3 border-l border-dashed border-border pl-8">
        {items.map((it, i) => (
          <li key={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border bg-card">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight">
                <span className="text-foreground">{it.role}</span>
                <span className="mx-2 text-muted-foreground">@</span>
                <span className="text-accent">{it.company}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {it.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {it.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-accent/60" />
                  <span className="text-pretty">{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
