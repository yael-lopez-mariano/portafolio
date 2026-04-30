import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { profile, projects, skills, stats } from './data/portfolio';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="text-lg font-black tracking-wide">
            {profile.name}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink/70 transition hover:text-coral"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 md:hidden"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-ink/10 px-5 py-4 md:hidden">
            <div className="mx-auto grid max-w-6xl gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-ink/75"
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
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-coral/30 bg-coral/10 px-4 py-2 text-sm font-bold text-coral">
              Disponible para nuevos proyectos
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
              {profile.role} que convierte ideas en experiencias web.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral"
              >
                Ver proyectos <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-bold transition hover:border-skydeep hover:text-skydeep"
              >
                Contactarme <Mail size={18} />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-mint pl-4">
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-md bg-ink p-6 text-white shadow-soft">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/15 p-6">
                <div>
                  <p className="text-sm font-bold text-mint">{profile.name}</p>
                  <h2 className="mt-4 text-4xl font-black leading-tight">
                    React, TypeScript y diseno limpio.
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-white/70">{profile.about}</p>
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                    <MapPin size={17} /> {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase text-coral">
                  Sobre mi
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Tecnologia con orden, claridad y buen criterio visual.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-ink/70">{profile.about}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-md border border-ink/10 bg-paper px-4 py-4"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-mint/15 text-skydeep">
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
                <p className="text-sm font-black uppercase text-coral">
                  Proyectos
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Trabajos destacados
                </h2>
              </div>
              <p className="max-w-xl text-ink/65">
                Cambia estos ejemplos por tus proyectos reales, agrega enlaces
                a demo y repositorio, y deja que el portafolio hable por ti.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mb-6 h-36 rounded-md bg-gradient-to-br from-skydeep via-mint to-coral" />
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-3 leading-7 text-ink/65">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1 text-sm font-black text-coral"
                    >
                      Demo <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.repo}
                      className="inline-flex items-center gap-1 text-sm font-black text-skydeep"
                    >
                      Codigo <Github size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-ink py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase text-mint">Contacto</p>
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
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-mint"
              >
                <Mail size={18} /> {profile.email}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials[0].href}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:border-mint hover:text-mint"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={profile.socials[1].href}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:border-mint hover:text-mint"
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
