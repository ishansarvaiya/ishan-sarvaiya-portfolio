import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { HERO_METRICS } from "@/data/portfolio";
import { useResumeUrl } from "@/context/SiteConfigContext";
import { ProfileAvatar } from "./ProfileAvatar";
import { ButtonLink } from "./Primitives";
import { trackEvent } from "@/lib/analytics";
import { revealContainer, revealItem } from "@/lib/motion";

export function Hero() {
  const resumeUrl = useResumeUrl();

  return (
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-28"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={revealContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={revealItem}>
          <ProfileAvatar />
        </motion.div>

        <motion.p variants={revealItem} className="text-eyebrow text-primary mt-8">
          Microsoft Stack · Enterprise · Cloud-Native
        </motion.p>

        <motion.h1
          id="hero-title"
          variants={revealItem}
          className="text-display mt-3 text-balance"
        >
          Ishan Sarvaiya
        </motion.h1>

        <motion.p
          variants={revealItem}
          className="text-headline text-muted-foreground mt-3"
        >
          Enterprise .NET &amp; Cloud Engineer
        </motion.p>

        <motion.p
          variants={revealItem}
          className="text-lead text-muted-foreground mx-auto mt-8 max-w-2xl text-pretty"
        >
          I design and ship production APIs, Angular/Blazor applications, and Azure
          infrastructure for fintech and data-intensive platforms — 10,000+ DAU
          reliability, event-driven ingestion at scale, and clean architecture by
          default.
        </motion.p>

        <motion.p
          variants={revealItem}
          className="text-sm text-muted-foreground mt-6"
        >
          Open to senior engineering roles · Select freelance engagements · Remote
        </motion.p>

        <motion.div
          variants={revealItem}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink href="#path" className="w-full sm:w-auto">
            Choose Your Path
            <ArrowDown size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            onClick={() => trackEvent("resume_download")}
            className="w-full sm:w-auto"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </ButtonLink>
        </motion.div>

        <motion.ul
          variants={revealItem}
          aria-label="Highlights"
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-muted-foreground sm:grid-cols-4"
        >
          {HERO_METRICS.map((metric) => (
            <li key={metric} className="text-balance">
              {metric}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
