import { Github, Linkedin, Mail } from 'lucide-react';
import type { PortfolioContent } from '../../data/portfolio';

type ContactSectionProps = {
  content: PortfolioContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const { contact, profile } = content;

  return (
    <section id="contacto" className="bg-[var(--color-footer)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:grid-cols-[1fr_0.8fr] md:items-center md:p-10">
          <div>
            <p className="text-sm font-black uppercase text-[var(--color-accent-2)]">
              {contact.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
              {contact.description}
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black text-[var(--color-cta-text)] transition [background:var(--color-cta)] hover:[background:var(--color-cta-hover)]"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.socials[0].href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-black text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={profile.socials[1].href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-black text-white transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
