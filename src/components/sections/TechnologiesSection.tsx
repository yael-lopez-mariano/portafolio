import type { PortfolioContent } from '../../data/portfolio';

type TechnologiesSectionProps = {
  content: PortfolioContent;
};

export function TechnologiesSection({ content }: TechnologiesSectionProps) {
  const { skills, technologies } = content;

  return (
    <section id="tecnologias" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 grid gap-4 md:grid-cols-[0.75fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[var(--color-accent)]">
              {technologies.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {technologies.title}
            </h2>
          </div>
          <p className="max-w-2xl text-[var(--color-muted)] md:justify-self-end">
            {technologies.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent)] opacity-0 transition group-hover:opacity-100" />
                <span className="absolute right-4 top-4 text-5xl font-black text-[var(--color-accent-soft)]">
                  0{index + 1}
                </span>
                <div className="relative z-10">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-black">{skill.name}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
