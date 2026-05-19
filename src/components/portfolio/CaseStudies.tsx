import { useState } from "react";
import {
  CASE_STUDIES,
  CASE_STUDY_DOMAINS,
  type CaseStudy,
} from "@/data/portfolio";
import { MaterialIcon } from "./MaterialIcon";
import { FadeIn } from "./FadeIn";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const DOMAIN_COLORS: Record<CaseStudy["domain"], string> = {
  Fintech: "text-[hsl(210_100%_60%)] border-[hsl(210_100%_50%/0.3)]",
  Media: "text-primary border-primary/30",
  Enterprise: "text-[hsl(250_73%_70%)] border-[hsl(250_73%_60%/0.3)]",
  Utilities: "text-[hsl(35_80%_55%)] border-[hsl(35_80%_55%/0.3)]",
};

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.domain === filter);

  const featured = filtered.filter((cs) => cs.featured);
  const rest = filtered.filter((cs) => !cs.featured);

  return (
    <section id="work" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <header className="mb-10">
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
              Production Proof
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-light">
              Enterprise delivery framed as STAR-M: Situation, Task, Action, Result,
              and Microsoft Stack highlights.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.05}>
          <FilterBar filter={filter} setFilter={setFilter} />
        </FadeIn>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 gap-6">
            {featured.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.08}>
                <CaseStudyCard study={study} />
              </FadeIn>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {rest.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.06}>
                <CaseStudyCard study={study} compact />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterBar({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {CASE_STUDY_DOMAINS.map((domain) => (
        <button
          key={domain}
          type="button"
          onClick={() => setFilter(domain)}
          className={cn(
            "px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider border transition-colors",
            filter === domain
              ? "bg-primary/15 border-primary/50 text-primary"
              : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30",
          )}
        >
          {domain}
        </button>
      ))}
    </div>
  );
}

function CaseStudyCard({
  study,
  compact = false,
}: {
  study: CaseStudy;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={cn(
        "relative bg-card rounded-2xl border border-border/20 overflow-hidden transition-all duration-300 hover:border-primary/30",
        study.featured && !compact && "border-primary/20",
      )}
    >
      <CaseStudyCardInner study={study} open={open} setOpen={setOpen} />
    </article>
  );
}

function CaseStudyCardInner({
  study,
  open,
  setOpen,
}: {
  study: CaseStudy;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={cn(
            "px-2.5 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider border",
            DOMAIN_COLORS[study.domain],
          )}
        >
          {study.domain}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          {study.timeline}
        </span>
      </div>

      <h3 className="font-headline text-xl md:text-2xl font-bold mb-2">
        {study.title}
      </h3>
      <p className="text-primary font-mono text-sm mb-4">{study.tagline}</p>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <MaterialIcon
            name={open ? "expand_less" : "expand_more"}
            className="text-base"
          />
          {open ? "Collapse STAR-M" : "View STAR-M Breakdown"}
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-6 space-y-5">
          <StarBlock label="Situation" content={study.situation} />
          <StarBlock label="Task" content={study.task} />
          <StarBlock label="Action" bullets={study.actions} />
          <StarBlock label="Result" bullets={study.results} />

          {study.azureMetrics && study.azureMetrics.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[hsl(210_100%_60%)] mb-2">
                Azure Metrics
              </p>
              <ul className="space-y-1">
                {study.azureMetrics.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-[hsl(210_100%_60%)]">›</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <MicrosoftStackTags stack={study.microsoftStack} />
        </CollapsibleContent>
      </Collapsible>

      {study.sourceUrl && (
        <a
          href={study.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:underline"
        >
          <MaterialIcon name="code" className="text-sm" />
          Source
        </a>
      )}
    </div>
  );
}

function MicrosoftStackTags({ stack }: { stack: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
        Microsoft Stack Highlight
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-surface-high rounded font-mono text-[10px] text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function StarBlock({
  label,
  content,
  bullets,
}: {
  label: string;
  content?: string;
  bullets?: string[];
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </p>
      {content && (
        <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
      )}
      {bullets && (
        <ul className="space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
            >
              <span className="text-primary shrink-0">›</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
