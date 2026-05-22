import { useI18n } from "@/lib/i18n";
import { footer, profile } from "@/data/content";

export function Footer() {
  const { lang } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {year} {profile.name}. {footer.rights[lang]}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">$</span>{" "}
          {lang === "es" ? "construido en " : "built in "}
          <a
            href={profile.github + "/ericknavarro97.github.io"}
            className="underline-offset-2 hover:text-accent hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </p>
      </div>
    </footer>
  );
}
