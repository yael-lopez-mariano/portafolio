import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, type PointerEvent } from 'react';
import type { PortfolioContent } from '../../data/portfolio';
import { getLanguageToggleDesign } from '../../styles/languageToggleDesign';
import { getThemeToggleDesign } from '../../styles/themeToggleDesign';
import type { Language } from '../../types/language';

type HeaderProps = {
  content: PortfolioContent;
  isDark: boolean;
  language: Language;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};

export function Header({
  content,
  isDark,
  language,
  onToggleLanguage,
  onToggleTheme,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ripple, setRipple] = useState<{ href: string; x: number; y: number; id: number } | null>(
    null,
  );
  const { navItems } = content;
  const languageToggle = getLanguageToggleDesign(language);
  const themeToggle = getThemeToggleDesign(isDark);

  const showRipple = (event: PointerEvent<HTMLAnchorElement>, href: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now();

    setRipple({
      href,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      id,
    });

    window.setTimeout(() => {
      setRipple((current) => (current?.id === id ? null : current));
    }, 620);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[var(--color-header)] backdrop-blur">
      <nav className="relative flex h-20 w-full items-center px-4 sm:px-6">
        <div className="absolute left-3 z-20 flex min-w-0 items-center gap-2 sm:left-4">
          <a
            href="#inicio"
            className="flex min-w-0 items-center truncate text-base font-normal tracking-normal sm:text-lg md:text-2xl"
          >
            Portafolio
          </a>
        </div>

        <div className="absolute left-[58%] z-10 hidden -translate-x-1/2 items-center px-1.5 py-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-water-link relative overflow-hidden rounded-md px-5 py-2 text-xl font-semibold text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              onPointerDown={(event) => showRipple(event, item.href)}
            >
              {ripple?.href === item.href && (
                <span
                  key={ripple.id}
                  className="nav-water-ripple"
                  style={{ left: ripple.x, top: ripple.y }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="absolute right-3 z-20 flex items-center gap-2 sm:right-4">
          <div className={languageToggle.wrapper}>
            <span className={languageToggle.enLabel}>EN</span>
            <button
              className={languageToggle.button}
              type="button"
              aria-label={language === 'es' ? 'Cambiar a ingles' : 'Switch to Spanish'}
              onClick={onToggleLanguage}
              title={language === 'es' ? 'English' : 'Español'}
            >
              <span className={languageToggle.flag}>
                <span
                  className={`${languageToggle.ukFlag} ${
                    language === 'en' ? 'opacity-100' : 'opacity-0'
                  } transition duration-300`}
                />
                <span
                  className={`${languageToggle.spainFlag} ${
                    language === 'es' ? 'opacity-100' : 'opacity-0'
                  } transition duration-300`}
                />
              </span>
              <span className={languageToggle.thumb} />
            </button>
            <span className={languageToggle.esLabel}>ES</span>
          </div>

          <button
            className={themeToggle.button}
            type="button"
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            onClick={onToggleTheme}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            <span className={themeToggle.trackDecor} />
            <span className={themeToggle.thumb} />
            <span className={themeToggle.moon}>
              <Moon size={16} fill="currentColor" />
            </span>
            <span className={themeToggle.stars} />
            <span className={themeToggle.sun}>
              <Sun size={0} />
            </span>
          </button>

          <button
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] md:hidden"
            type="button"
            aria-label={language === 'es' ? 'Abrir menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="px-4 pb-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-water-link relative overflow-hidden rounded-md px-2 py-2 text-sm font-semibold text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                onPointerDown={(event) => showRipple(event, item.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                {ripple?.href === item.href && (
                  <span
                    key={ripple.id}
                    className="nav-water-ripple"
                    style={{ left: ripple.x, top: ripple.y }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
