import type { PortfolioContent } from '../../data/portfolio';

type FooterSectionProps = {
  content: PortfolioContent;
};

export function FooterSection({ content }: FooterSectionProps) {
  const { footer, profile } = content;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-footer)] py-6 text-sm text-[var(--color-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">{profile.name}</p>
        <p>{footer}</p>
      </div>
    </footer>
  );
}
