import { useEffect, useState } from "react";
import { Languages, Moon, Sun, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { nav, profile } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, toggle: toggleLang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = nav[lang];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card text-accent">
            <span className="text-base font-bold">e</span>
          </span>
          <span className="hidden sm:inline-block">
            <span className="text-muted-foreground">@</span>
            <span className="text-foreground">{profile.handle}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="mr-1.5 text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="flex h-9 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{lang}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 font-mono text-sm text-muted-foreground hover:bg-card hover:text-foreground"
              >
                <span className="text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
