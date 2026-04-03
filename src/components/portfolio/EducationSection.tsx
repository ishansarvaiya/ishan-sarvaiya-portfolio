import { EDUCATION } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

export function EducationSection() {
  return (
    <section id="education" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <header className="mb-20">
            <p className="font-mono text-primary text-xs tracking-widest mb-4 uppercase">
              Academic_Record
            </p>
            <h2 className="font-headline text-5xl font-bold tracking-tight">
              Education
            </h2>
          </header>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-0 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {EDUCATION.map((item, i) => (
              <FadeIn key={item.institution} delay={i * 0.1}>
                <article className="relative pl-10">
                  <div
                    className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 bg-border"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="font-headline text-xl font-bold">
                        {item.institution}
                      </h3>
                      <p className="font-mono text-sm text-primary mt-1">
                        {item.degree}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1">
                      {item.period}
                    </span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
