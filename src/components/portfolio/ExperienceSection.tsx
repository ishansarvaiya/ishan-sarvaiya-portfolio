import { EXPERIENCE } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <header className="mb-20">
            <p className="font-mono text-primary text-xs tracking-widest mb-4 uppercase">
              Career_Log
            </p>
            <h2 className="font-headline text-5xl font-bold tracking-tight">
              Experience
            </h2>
          </header>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-14">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item.company} delay={i * 0.1}>
                <article className="relative pl-10">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 transition-colors ${
                      item.current ? "bg-primary" : "bg-border"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-headline text-xl font-bold">
                        {item.company}
                      </h3>
                      <p className="font-mono text-sm text-primary">{item.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm"
                      >
                        <span className="text-primary mt-1 shrink-0 text-xs">&rsaquo;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
