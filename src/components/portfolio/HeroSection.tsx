import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useResumeUrl } from "@/context/SiteConfigContext";
import { ButtonLink } from "./Primitives";
import { trackEvent } from "@/lib/analytics";
import { revealContainer, revealItem } from "@/lib/motion";

export function Hero() {
  const resumeUrl = useResumeUrl();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // As the hero scrolls away it recedes slightly: transform and opacity only.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-28"
    >
      <motion.div style={reduceMotion ? undefined : { opacity, scale }}>
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={revealContainer}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={revealItem} className="text-eyebrow text-primary">
          .NET · Azure · Python · AI
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
          Software Engineer
        </motion.p>

        <motion.p
          variants={revealItem}
          className="text-lead text-muted-foreground mx-auto mt-8 max-w-2xl text-pretty"
        >
          I build production APIs, cloud infrastructure, and data pipelines for
          fintech and media platforms, then put LLMs and agents to work on top.
          Reliable for 10,000+ daily users, event-driven at scale, and clean by
          design.
        </motion.p>

        <motion.p
          variants={revealItem}
          className="text-sm text-muted-foreground mt-6"
        >
          Open to senior engineering roles and select freelance work · Remote
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

      </motion.div>
      </motion.div>
    </section>
  );
}
