import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { hero, profile } from "@/data/content";

export function Hero() {
  const { lang } = useI18n();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-gradient-to-b from-accent/[0.07] via-transparent to-transparent" aria-hidden />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 rounded-full bg-green-500/40 motion-safe:animate-ping" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-muted-foreground">{hero.status[lang]}</span>
            </div>

            <p className="mt-8 font-mono text-sm text-muted-foreground">
              <span className="text-accent">$</span> whoami
            </p>
            <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-xl text-muted-foreground sm:text-2xl">
              {hero.tagline[lang]}
            </p>
            <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground/80">
              {hero.intro[lang]}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {hero.primaryCta[lang]}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {hero.secondaryCta[lang]}
              </a>
              <div className="ml-2 flex items-center gap-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {hero.stats.map((s) => (
                <div key={s.value}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label[lang]}
                  </dt>
                  <dd className="mt-1 text-3xl font-bold tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <CodeCard lang={lang} />
        </div>
      </div>
    </section>
  );
}

function CodeCard({ lang }: { lang: "es" | "en" }) {
  const isEs = lang === "es";
  return (
    <div className="relative hidden lg:block">
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-accent/10 blur-2xl" aria-hidden />
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border bg-background/40 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            ~/erick.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-muted-foreground">
              {isEs ? "ingeniero curioso, builder constante" : "curious engineer, constant builder"}
            </span>
            {"\n"}
            <span className="text-accent">const</span>{" "}
            <span className="text-foreground">erick</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-foreground">{"{"}</span>
            {"\n  "}
            <span className="text-foreground">role</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-green-500/90">"Full-Stack Developer"</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">stack</span>
            <span className="text-muted-foreground">: [</span>
            {"\n    "}
            <span className="text-green-500/90">"React"</span>
            <span className="text-muted-foreground">, </span>
            <span className="text-green-500/90">"TypeScript"</span>
            <span className="text-muted-foreground">,</span>
            {"\n    "}
            <span className="text-green-500/90">"Python"</span>
            <span className="text-muted-foreground">, </span>
            <span className="text-green-500/90">"Django"</span>
            <span className="text-muted-foreground">,</span>
            {"\n    "}
            <span className="text-green-500/90">"FastAPI"</span>
            <span className="text-muted-foreground">, </span>
            <span className="text-green-500/90">"Postgres"</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-muted-foreground">],</span>
            {"\n  "}
            <span className="text-foreground">focus</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-green-500/90">"fintech · identity · edu"</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">location</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-green-500/90">"CDMX 🇲🇽"</span>
            <span className="text-muted-foreground">,</span>
            {"\n"}
            <span className="text-foreground">{"}"}</span>
            <span className="text-muted-foreground">;</span>
            {"\n\n"}
            <span className="text-accent">await</span>{" "}
            <span className="text-foreground">erick</span>
            <span className="text-muted-foreground">.</span>
            <span className="text-foreground">ship</span>
            <span className="text-muted-foreground">(</span>
            <span className="text-green-500/90">"things that scale"</span>
            <span className="text-muted-foreground">);</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
