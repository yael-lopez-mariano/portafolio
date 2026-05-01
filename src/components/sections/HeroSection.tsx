import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import profileImage from '../../assets/perfil.png';
import type { PortfolioContent } from '../../data/portfolio';

type HeroSectionProps = {
  content: PortfolioContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const { hero, profile, stats } = content;

  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
        <div className="absolute bottom-8 right-10 h-80 w-80 rounded-full bg-[var(--color-glow)] opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="mb-4 inline-flex rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-accent)] shadow-sm">
          {hero.badge}
        </p>
        <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          {hero.titleStart}{' '}
          <span className="text-[var(--color-accent)]">{hero.titleHighlight}</span>{' '}
          {hero.titleEnd}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-[var(--color-cta-text)] shadow-soft transition hover:-translate-y-0.5 [background:var(--color-cta)] hover:[background:var(--color-cta-hover)]"
          >
            {hero.primaryCta} <ArrowUpRight size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-bold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {hero.secondaryCta} <Mail size={18} />
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-soft">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-4"
            >
              <p className="text-2xl font-black text-[var(--color-accent)]">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[520px]">
        <div className="absolute inset-x-6 bottom-5 top-16 rounded-md border border-[var(--color-border-strong)] shadow-soft [background:var(--color-hero-panel)]" />
        <div className="absolute inset-x-16 bottom-12 top-28 rounded-md border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(56,217,255,0.08),transparent)]" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--color-glow)] blur-3xl" />
        <div className="absolute bottom-20 left-0 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-floating)] px-5 py-4 shadow-soft backdrop-blur">
          <p className="text-xs font-black uppercase text-[var(--color-accent)]">
            {hero.profileCardTitle}
          </p>
          <p className="mt-2 text-sm font-bold text-[var(--color-text)]">
            {hero.profileCardText}
          </p>
        </div>
        <div className="absolute right-2 top-10 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-floating)] px-5 py-4 shadow-soft backdrop-blur">
          <p className="text-xs font-black uppercase text-[var(--color-accent-2)]">
            {hero.locationLabel}
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-text)]">
            <MapPin size={16} /> {profile.location}
          </p>
        </div>
        <img
          src={profileImage}
          alt="Retrato profesional de Yael Lopez Mariano"
          className="absolute bottom-0 left-1/2 z-10 max-h-[560px] w-auto max-w-[96%] -translate-x-1/2 object-contain drop-shadow-[0_32px_45px_var(--color-portrait-shadow)]"
        />
        <div className="absolute bottom-0 left-10 right-10 h-24 rounded-[50%] bg-[var(--color-shadow)] blur-2xl" />
      </div>
    </section>
  );
}
