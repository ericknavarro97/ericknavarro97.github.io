import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { contact, profile } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const { lang } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow={contact.eyebrow[lang]}
        title={contact.title[lang]}
        index="05 / 05"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-40" aria-hidden />
        <div className="absolute -right-20 -top-20 -z-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
              {contact.copy[lang]}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {contact.emailCta[lang]}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    {contact.copied[lang]}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {contact.copy_email[lang]}
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-5 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              // {lang === "es" ? "redes" : "elsewhere"}
            </p>
            <ul className="mt-4 space-y-3">
              <ContactLink href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />}>
                {profile.email}
              </ContactLink>
              <ContactLink href={profile.github} icon={<Github className="h-4 w-4" />}>
                github.com/{profile.handle}
              </ContactLink>
              <ContactLink href={profile.linkedin} icon={<Linkedin className="h-4 w-4" />}>
                linkedin/in/{profile.handle}
              </ContactLink>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center gap-3 rounded-md border border-transparent px-3 py-2 font-mono text-sm text-foreground transition-colors hover:border-border hover:bg-card hover:text-accent"
      >
        <span className="text-muted-foreground transition-colors group-hover:text-accent">
          {icon}
        </span>
        <span className="truncate">{children}</span>
      </a>
    </li>
  );
}
