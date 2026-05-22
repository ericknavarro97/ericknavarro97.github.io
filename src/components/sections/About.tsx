import { useI18n } from "@/lib/i18n";
import { about } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  const { lang } = useI18n();
  const facts = about.facts[lang];

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow={about.eyebrow[lang]}
        title={about.title[lang]}
        index="01 / 05"
      />

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs[lang].map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </div>

        <aside className="relative">
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-accent/[0.04]" aria-hidden />
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // {lang === "es" ? "datos rápidos" : "quick facts"}
            </p>
            <dl className="mt-5 space-y-4">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-border/70 pb-3 last:border-none last:pb-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {f.k}
                  </dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
