import type { PortfolioContent } from '../../data/portfolio';

type HighlightsBarProps = {
  content: PortfolioContent;
};

export function HighlightsBar({ content }: HighlightsBarProps) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-band)] py-6">
      <div className="mx-auto grid max-w-6xl gap-3 px-5 text-center text-sm font-black uppercase tracking-wide text-[var(--color-muted)] sm:grid-cols-3">
        {content.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3"
          >
            {highlight}
          </span>
        ))}
      </div>
    </section>
  );
}
