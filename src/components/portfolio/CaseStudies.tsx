import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Code2, X } from "lucide-react";
import {
  CASE_STUDIES,
  CASE_STUDY_DOMAINS,
  type CaseStudy,
} from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { cn } from "@/lib/utils";
import { press, springSheet, springSnappy } from "@/lib/motion";

const DOMAIN_COLORS: Record<CaseStudy["domain"], string> = {
  Fintech: "text-domain-fintech",
  Media: "text-primary",
  Enterprise: "text-domain-enterprise",
  Utilities: "text-domain-utilities",
};

const CARD_RADIUS = 28;

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.domain === filter);

  const featured = filtered.filter((cs) => cs.featured);
  const rest = filtered.filter((cs) => !cs.featured);
  const selected = CASE_STUDIES.find((cs) => cs.id === selectedId) ?? null;

  return (
    <Section id="work" width="wide" labelledBy="work-title">
      <FadeIn>
        <SectionHeader
          id="work-title"
          eyebrow="Production Proof"
          title="Case Studies"
          lead="Enterprise delivery framed as STAR-M: Situation, Task, Action, Result, and Microsoft Stack highlights."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <FilterBar filter={filter} setFilter={setFilter} />
      </FadeIn>

      {featured.length > 0 && (
        <ul className="grid grid-cols-1 gap-5">
          {featured.map((study, i) => (
            <li key={study.id}>
              <FadeIn delay={i * 0.06}>
                <CaseStudyCard study={study} onOpen={setSelectedId} />
              </FadeIn>
            </li>
          ))}
        </ul>
      )}

      {rest.length > 0 && (
        <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((study, i) => (
            <li key={study.id}>
              <FadeIn delay={(i % 2) * 0.06} className="h-full">
                <CaseStudyCard study={study} onOpen={setSelectedId} compact />
              </FadeIn>
            </li>
          ))}
        </ul>
      )}

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => !open && setSelectedId(null)}
      >
        <AnimatePresence>
          {selected && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[60] bg-black/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={springSnappy}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  layoutId={`case-${selected.id}`}
                  transition={springSheet}
                  style={{ borderRadius: CARD_RADIUS }}
                  className="fixed inset-x-3 top-[max(0.75rem,5svh)] z-[61] mx-auto max-h-[90svh] max-w-3xl overflow-y-auto overscroll-contain bg-card"
                >
                  <CaseStudyDetail study={selected} />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </Section>
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
    <div
      role="group"
      aria-label="Filter case studies by domain"
      className="mb-10 flex flex-wrap justify-center gap-2"
    >
      {CASE_STUDY_DOMAINS.map((domain) => (
        <motion.button
          {...press}
          key={domain}
          type="button"
          onClick={() => setFilter(domain)}
          aria-pressed={filter === domain}
          className={cn(
            "min-h-11 rounded-full px-5 text-[0.9375rem] font-medium tracking-tight transition-colors duration-200",
            filter === domain
              ? "bg-foreground text-background"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/70",
          )}
        >
          {domain}
        </motion.button>
      ))}
    </div>
  );
}

function CaseStudyCard({
  study,
  onOpen,
  compact = false,
}: {
  study: CaseStudy;
  onOpen: (id: string) => void;
  compact?: boolean;
}) {
  return (
    <motion.article
      layoutId={`case-${study.id}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={springSheet}
      style={{ borderRadius: CARD_RADIUS }}
      className={cn(
        "relative flex h-full flex-col bg-card p-7 md:p-9",
        !compact && "md:p-12",
      )}
    >
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className={cn("font-semibold", DOMAIN_COLORS[study.domain])}>
          {study.domain}
        </span>
        <span className="text-muted-foreground">{study.timeline}</span>
      </div>

      <h3 className={compact ? "text-headline" : "text-title"}>{study.title}</h3>
      <p className="mt-3 text-muted-foreground text-pretty">{study.tagline}</p>

      <div className="mt-8 flex flex-1 items-end justify-between gap-4">
        {/* The stretched button makes the whole card the hit target. */}
        <button
          type="button"
          onClick={() => onOpen(study.id)}
          aria-haspopup="dialog"
          className="inline-flex min-h-11 items-center gap-1 rounded-full text-[0.9375rem] font-medium text-primary after:absolute after:inset-0 after:rounded-[28px] after:content-['']"
        >
          View STAR-M Breakdown
          <ChevronRight size={16} aria-hidden="true" />
          <span className="sr-only"> for {study.title}</span>
        </button>

        {study.sourceUrl && (
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-[0.9375rem] font-medium text-muted-foreground hover:text-foreground"
          >
            <Code2 size={16} aria-hidden="true" />
            Source
            <span className="sr-only"> for {study.title}</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ...springSnappy, delay: 0.1 } }}
      exit={{ opacity: 0, transition: { duration: 0.08 } }}
      className="p-7 md:p-12"
    >
      <Dialog.Close asChild>
        <motion.button
          {...press}
          type="button"
          aria-label="Close case study"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
        >
          <X size={18} aria-hidden="true" />
        </motion.button>
      </Dialog.Close>

      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 pr-12 text-sm">
        <span className={cn("font-semibold", DOMAIN_COLORS[study.domain])}>
          {study.domain}
        </span>
        <span className="text-muted-foreground">{study.timeline}</span>
      </div>

      <Dialog.Title className="text-title text-balance">{study.title}</Dialog.Title>
      <Dialog.Description className="mt-3 text-lead text-muted-foreground text-pretty">
        {study.tagline}
      </Dialog.Description>

      <div className="mt-10 space-y-8">
        <StarBlock label="Role" content={study.role} />
        <StarBlock label="Situation" content={study.situation} />
        <StarBlock label="Task" content={study.task} />
        <StarBlock label="Action" bullets={study.actions} />
        <StarBlock label="Result" bullets={study.results} />

        {study.azureMetrics && study.azureMetrics.length > 0 && (
          <StarBlock label="Azure Metrics" bullets={study.azureMetrics} />
        )}

        <div>
          <h4 className="text-eyebrow mb-3 text-muted-foreground">
            Microsoft Stack Highlight
          </h4>
          <ul className="flex flex-wrap gap-2">
            {study.microsoftStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {study.sourceUrl && (
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:opacity-80"
          >
            <Code2 size={16} aria-hidden="true" />
            Source
          </a>
        )}
      </div>
    </motion.div>
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
      <h4 className="text-eyebrow mb-2 text-muted-foreground">{label}</h4>
      {content && <p className="text-pretty">{content}</p>}
      {bullets && (
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="text-pretty">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
