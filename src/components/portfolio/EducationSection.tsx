import { EDUCATION } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";

export function EducationSection() {
  return (
    <Section id="education" tone="grey" labelledBy="education-title">
      <FadeIn>
        <SectionHeader
          id="education-title"
          eyebrow="Academic record"
          title="Education"
        />
      </FadeIn>

      <ol className="divide-y divide-border border-y border-border">
        {EDUCATION.map((item, i) => (
          <li key={item.institution}>
            <FadeIn delay={i * 0.04}>
              <article className="grid gap-2 py-8 md:grid-cols-[12rem_1fr] md:gap-12">
                <p className="text-sm text-muted-foreground md:pt-1">{item.period}</p>
                <div>
                  <h3 className="text-headline">{item.institution}</h3>
                  <p className="mt-1 font-medium text-primary">{item.degree}</p>
                </div>
              </article>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
