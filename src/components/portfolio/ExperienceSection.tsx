import { EXPERIENCE } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeader, ButtonLink } from "./Primitives";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";

export function ExperienceSection() {
  const { linkedinUrl } = useSiteConfig();
  return (
    <Section id="experience" tone="grey" labelledBy="experience-title">
      <FadeIn>
        <SectionHeader
          id="experience-title"
          eyebrow="Career Timeline"
          title="Experience"
          lead="Four years shipping production systems across fintech, media intelligence, and enterprise, with measurable outcomes at every stage."
        />
      </FadeIn>

      <ol className="divide-y divide-border border-y border-border">
        {EXPERIENCE.map((item, i) => (
          <li key={item.company}>
            <FadeIn delay={i * 0.04}>
              <article className="grid gap-4 py-10 md:grid-cols-[12rem_1fr] md:gap-12">
                <p className="text-sm text-muted-foreground md:pt-1.5">{item.period}</p>
                <div>
                  <h3 className="text-headline">
                    {item.company}
                    {item.current && <span className="sr-only"> (current role)</span>}
                  </h3>
                  <p className="mt-1 font-medium text-primary">{item.role}</p>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[0.9375rem] text-muted-foreground text-pretty"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          </li>
        ))}
      </ol>

      <FadeIn>
        <p className="mt-12 text-center text-muted-foreground">
          Colleagues and clients have shared feedback on LinkedIn.
        </p>
        <div className="mt-2 text-center">
          <ButtonLink
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="link"
            onClick={() => trackEvent("linkedin_click")}
          >
            Read recommendations
            <ExternalLink size={14} aria-hidden="true" />
          </ButtonLink>
        </div>
      </FadeIn>
    </Section>
  );
}
