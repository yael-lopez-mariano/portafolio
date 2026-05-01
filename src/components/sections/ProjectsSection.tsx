import { ArrowUpRight, Github } from 'lucide-react';
import type { PortfolioContent } from '../../data/portfolio';

type ProjectsSectionProps = {
  content: PortfolioContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const { projects, projectsSection } = content;

  return (
    <section id="proyectos" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[var(--color-accent)]">
              {projectsSection.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              {projectsSection.title}
            </h2>
          </div>
          <p className="max-w-xl text-[var(--color-muted)]">
            {projectsSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-soft"
            >
              <div className="relative h-40 bg-[linear-gradient(135deg,var(--color-project-a),var(--color-project-b),var(--color-project-c))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.38),transparent_32%)]" />
                <span className="absolute bottom-4 left-4 rounded-md bg-[var(--color-floating)] px-3 py-2 text-xs font-black text-[var(--color-accent)] backdrop-blur">
                  {projectsSection.itemLabel} 0{index + 1}
                </span>
              </div>
              <div className="p-6">
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
                    {projectsSection.demoLabel} <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-1 text-sm font-black text-[var(--color-accent-2)]"
                  >
                    {projectsSection.codeLabel} <Github size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
