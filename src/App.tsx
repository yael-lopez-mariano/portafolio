import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useState } from 'react';
import profileImage from './assets/perfil.png';
import { profile, projects, skills, stats } from './data/portfolio';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isDark = theme === 'dark';

  return (
    <div
      className={`theme-${theme} min-h-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-text)] transition-colors duration-300`}
    >
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-header)] backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <button
              className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-xs font-black text-[var(--color-text)] shadow-sm transition hover:border-[var(--color-accent)]"
              type="button"
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">{isDark ? 'Claro' : 'Oscuro'}</span>
            </button>
            <a
              href="#inicio"
              className="truncate text-base font-black tracking-wide sm:text-lg"
            >
              {profile.name}
            </a>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] md:hidden"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-[var(--color-border)] px-5 py-4 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-[var(--color-muted)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr]"
        >
          <div className="relative z-10">
            <p className="mb-4 inline-flex rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-accent)]">
              Disponible para nuevos proyectos
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
              {profile.role} que convierte ideas en experiencias web.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-text)] px-5 py-3 text-sm font-bold text-[var(--color-page)] shadow-soft transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-white"
              >
                Ver proyectos <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-bold transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Contactarme <Mail size={18} />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-[var(--color-accent-2)] pl-4"
                >
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute inset-x-6 bottom-5 top-16 rounded-md bg-[var(--color-hero-panel)] shadow-soft" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--color-glow)] blur-3xl" />
            <div className="absolute bottom-20 left-0 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-floating)] px-5 py-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase text-[var(--color-accent)]">
                Perfil profesional
              </p>
              <p className="mt-2 text-sm font-bold text-[var(--color-text)]">
                React + TypeScript
              </p>
            </div>
            <div className="absolute right-2 top-10 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-floating)] px-5 py-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase text-[var(--color-accent-2)]">
                Ubicacion
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-text)]">
                <MapPin size={16} /> {profile.location}
              </p>
            </div>
            <img
              src={profileImage}
              alt="Retrato profesional de Yael Lopez Mariano"
              className="absolute bottom-0 left-1/2 z-10 max-h-[560px] w-auto max-w-[96%] -translate-x-1/2 object-contain drop-shadow-[0_32px_45px_rgba(12,50,42,0.28)]"
            />
            <div className="absolute bottom-0 left-10 right-10 h-24 rounded-[50%] bg-[var(--color-shadow)] blur-2xl" />
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-band)] py-6">
          <div className="mx-auto grid max-w-6xl gap-3 px-5 text-center text-sm font-black uppercase tracking-wide text-[var(--color-muted)] sm:grid-cols-3">
            <span>Interfaces claras</span>
            <span>Codigo ordenado</span>
            <span>Experiencia responsive</span>
          </div>
        </section>

        <section id="sobre-mi" className="bg-[var(--color-surface)] py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase text-[var(--color-accent)]">
                  Sobre mi
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Tecnologia con orden, claridad y buen criterio visual.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-[var(--color-muted)]">
                  {profile.about}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon size={20} />
                        </span>
                        <span className="font-bold">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[var(--color-accent)]">
                  Proyectos
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Trabajos destacados
                </h2>
              </div>
              <p className="max-w-xl text-[var(--color-muted)]">
                Cambia estos ejemplos por tus proyectos reales, agrega enlaces
                a demo y repositorio, y deja que el portafolio hable por ti.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mb-6 h-36 rounded-md bg-[linear-gradient(135deg,var(--color-project-a),var(--color-project-b),var(--color-project-c))]" />
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-chip)] px-3 py-1 text-xs font-bold text-[var(--color-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1 text-sm font-black text-[var(--color-accent)]"
                    >
                      Demo <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.repo}
                      className="inline-flex items-center gap-1 text-sm font-black text-[var(--color-accent-2)]"
                    >
                      Codigo <Github size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[var(--color-footer)] py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[var(--color-accent-2)]">
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Hablemos de tu siguiente proyecto.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                Estoy listo para colaborar en sitios web, aplicaciones
                frontend, interfaces responsive y mejoras visuales.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-[var(--color-accent-2)]"
              >
                <Mail size={18} /> {profile.email}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials[0].href}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:border-[var(--color-accent-2)] hover:text-[var(--color-accent-2)]"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={profile.socials[1].href}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:border-[var(--color-accent-2)] hover:text-[var(--color-accent-2)]"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
