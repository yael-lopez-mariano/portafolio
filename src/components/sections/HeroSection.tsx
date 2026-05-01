import { Download, Mail } from 'lucide-react';
import { useState, type PointerEvent } from 'react';
import cvPdf from '../../assets/Yael_Lopez_Mariano.pdf';
import profileImage from '../../assets/perfil.png';
import type { PortfolioContent } from '../../data/portfolio';
import { technologyLinks } from '../../data/technologyLinks';

type HeroSectionProps = {
  content: PortfolioContent;
};

const floatingDesignTechs = [
  {
    label: 'HTML',
    href: technologyLinks.html,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    className: '-left-2 top-28',
  },
  {
    label: 'React',
    href: technologyLinks.react,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    className: 'left-2 top-64',
  },
  {
    label: 'Angular',
    href: technologyLinks.angular,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    className: 'left-24 top-2',
  },
  {
    label: 'JavaScript',
    href: technologyLinks.javascript,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    className: 'right-44 -top-4',
  },
  {
    label: 'TypeScript',
    href: technologyLinks.typescript,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    className: 'right-12 top-24',
  },
  {
    label: 'Node.js',
    href: technologyLinks.nodejs,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    className: 'right-0 top-48',
  },
  {
    label: 'Tailwind',
    href: technologyLinks.tailwind,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    className: 'right-10 top-72',
  },
  {
    label: 'Bootstrap',
    href: technologyLinks.bootstrap,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    className: 'left-0 bottom-24',
  },
  {
    label: 'CSS',
    href: technologyLinks.css,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    className: 'right-24 bottom-24',
  },
];

const backendTechs = [
  {
    label: 'Java',
    href: technologyLinks.java,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    label: 'Python',
    href: technologyLinks.python,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    label: '.NET',
    href: technologyLinks.dotnet,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    label: 'Docker',
    href: technologyLinks.docker,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    label: 'AWS',
    href: technologyLinks.aws,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    label: 'Prisma',
    href: technologyLinks.prisma,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  },
  {
    label: 'SQL Server',
    href: technologyLinks.sqlServer,
    iconUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  },
  {
    label: 'MySQL',
    href: technologyLinks.mysql,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
];

const mobileFrameTechs = [
  floatingDesignTechs.find((tech) => tech.label === 'Angular'),
  floatingDesignTechs.find((tech) => tech.label === 'React'),
].filter((tech): tech is (typeof floatingDesignTechs)[number] => Boolean(tech));

const mobileBottomTechs = backendTechs.filter((tech) =>
  ['Java', 'Python', '.NET'].includes(tech.label),
);

export function HeroSection({ content }: HeroSectionProps) {
  const { hero, profile } = content;
  const [techRipple, setTechRipple] = useState<{
    label: string;
    x: number;
    y: number;
    id: number;
  } | null>(null);

  const showTechRipple = (event: PointerEvent<HTMLAnchorElement>, label: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const id = Date.now();

    setTechRipple({
      label,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      id,
    });

    window.setTimeout(() => {
      setTechRipple((current) => (current?.id === id ? null : current));
    }, 620);
  };

  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 pb-32 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[var(--color-glow)] opacity-50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-black leading-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-[var(--color-accent)] sm:text-4xl lg:text-5xl">
          {hero.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={cvPdf}
            download="Yael_Lopez_Mariano_CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold text-[var(--color-cta-text)] shadow-soft transition hover:-translate-y-0.5 [background:var(--color-cta)] hover:[background:var(--color-cta-hover)]"
          >
            {hero.cvCta} <Download size={18} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-bold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {hero.contactCta} <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="relative min-h-[460px] sm:min-h-[560px] lg:translate-x-10 xl:translate-x-20">
        <div className="absolute inset-x-6 bottom-0 top-12 rounded-md border border-[var(--color-border-strong)] shadow-soft [background:var(--color-hero-panel)]" />
        <div className="absolute inset-x-16 bottom-0 top-28 rounded-md border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(56,217,255,0.08),transparent)]" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--color-glow)] blur-3xl" />
        <div className="absolute left-10 top-20 z-20 grid gap-7 lg:hidden">
          {mobileFrameTechs.map((tech, index) => (
            <a
              key={tech.label}
              href={tech.href}
              className="hero-tech-card hero-tech-card--mobile"
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => showTechRipple(event, tech.label)}
            >
              {techRipple?.label === tech.label && (
                <span
                  key={techRipple.id}
                  className="hero-tech-ripple"
                  style={{ left: techRipple.x, top: techRipple.y }}
                />
              )}
              <img src={tech.iconUrl} alt="" className="h-5 w-5 object-contain" loading="lazy" />
              <span className="text-[8px] font-bold leading-none text-[#111827]">{tech.label}</span>
            </a>
          ))}
        </div>
        {(() => {
          const javascriptTech = floatingDesignTechs.find((tech) => tech.label === 'JavaScript');

          if (!javascriptTech) {
            return null;
          }

          return (
            <a
              href={javascriptTech.href}
              className="hero-tech-card hero-tech-card--mobile absolute right-8 top-16 z-20 lg:hidden"
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => showTechRipple(event, javascriptTech.label)}
            >
              {techRipple?.label === javascriptTech.label && (
                <span
                  key={techRipple.id}
                  className="hero-tech-ripple"
                  style={{ left: techRipple.x, top: techRipple.y }}
                />
              )}
              <img
                src={javascriptTech.iconUrl}
                alt=""
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
              <span className="text-[8px] font-bold leading-none text-[#111827]">
                {javascriptTech.label}
              </span>
            </a>
          );
        })()}
        <div className="absolute inset-x-0 bottom-0 top-0 z-20 hidden lg:block">
          {floatingDesignTechs.map((tech, index) => (
            <a
              key={tech.label}
              href={tech.href}
              className={`hero-tech-card absolute ${tech.className}`}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${index * 90}ms` }}
              onPointerDown={(event) => showTechRipple(event, tech.label)}
            >
              {techRipple?.label === tech.label && (
                <span
                  key={techRipple.id}
                  className="hero-tech-ripple"
                  style={{ left: techRipple.x, top: techRipple.y }}
                />
              )}
              <img src={tech.iconUrl} alt="" className="h-7 w-7 object-contain" loading="lazy" />
              <span className="text-[10px] font-bold leading-none text-[#111827]">{tech.label}</span>
            </a>
          ))}
        </div>
        <img
          src={profileImage}
          alt="Retrato profesional de Yael Lopez Mariano"
          className="absolute bottom-0 left-16 z-10 max-h-[540px] w-auto max-w-[88%] object-contain drop-shadow-[0_32px_45px_var(--color-portrait-shadow)]"
        />
        <div className="absolute bottom-0 left-10 right-10 h-24 rounded-[50%] bg-[var(--color-shadow)] blur-2xl" />
        <div className="absolute -bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:hidden">
          {mobileBottomTechs.map((tech) => (
            <a
              key={tech.label}
              href={tech.href}
              className="hero-tech-card hero-tech-card--mobile"
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => showTechRipple(event, tech.label)}
            >
              {techRipple?.label === tech.label && (
                <span
                  key={techRipple.id}
                  className="hero-tech-ripple"
                  style={{ left: techRipple.x, top: techRipple.y }}
                />
              )}
              <img src={tech.iconUrl} alt="" className="h-5 w-5 object-contain" loading="lazy" />
              <span className="text-[8px] font-bold leading-none text-[#111827]">{tech.label}</span>
            </a>
          ))}
        </div>
        <div className="absolute -bottom-24 left-1/2 z-20 hidden w-max -translate-x-1/2 items-center gap-2 lg:flex">
          {backendTechs.map((tech, index) => (
            <a
              key={tech.label}
              href={tech.href}
              className="hero-tech-card hero-tech-card--line"
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${index * 90}ms` }}
              onPointerDown={(event) => showTechRipple(event, tech.label)}
            >
              {techRipple?.label === tech.label && (
                <span
                  key={techRipple.id}
                  className="hero-tech-ripple"
                  style={{ left: techRipple.x, top: techRipple.y }}
                />
              )}
              <img src={tech.iconUrl} alt="" className="h-7 w-7 object-contain" loading="lazy" />
              <span className="text-[10px] font-bold leading-none text-[#111827]">{tech.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
