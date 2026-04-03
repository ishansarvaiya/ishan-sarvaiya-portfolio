import { PROJECTS, type Project } from "@/data/portfolio";
import { MaterialIcon } from "./MaterialIcon";
import { FadeIn } from "./FadeIn";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative bg-card rounded-2xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-surface-high rounded text-[10px] font-mono text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-headline text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground font-light text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 font-mono text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2 hover:underline self-start"
        >
          <MaterialIcon name="code" className="text-sm" /> SOURCE
        </a>
      )}

      {/* Hover glow border */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-primary/40 transition-colors duration-500 rounded-2xl pointer-events-none group-hover:shadow-[0_0_30px_hsl(var(--neon)/0.08)]"
        aria-hidden="true"
      />
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <header className="mb-16">
            <p className="font-mono text-primary text-xs tracking-widest mb-4 uppercase">
              Selected_Artifacts
            </p>
            <h2 className="font-headline text-5xl font-bold tracking-tight">
              Recent Projects
            </h2>
          </header>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
