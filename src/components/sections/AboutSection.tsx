import type { PortfolioContent } from '../../data/portfolio';

type AboutSectionProps = {
  content: PortfolioContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const { about, profile } = content;

  return (
    <section id="sobre-mi" className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-[var(--color-accent)]">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {about.title}
            </h2>
          </div>
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-soft transition hover:border-[var(--color-border-strong)]">
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              {profile.about}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {about.tags.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-4 py-3 text-sm font-black text-[var(--color-accent)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
