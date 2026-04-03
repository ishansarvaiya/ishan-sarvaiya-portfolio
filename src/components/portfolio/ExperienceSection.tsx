import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <p className="font-mono text-primary text-xs tracking-widest mb-4 uppercase">
            Career_Log
          </p>
          <h2 className="font-headline text-5xl font-bold tracking-tight">
            Experience
          </h2>
        </header>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-14">
            {EXPERIENCE.map((item) => (
              <article key={item.company} className="relative pl-10">
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

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
