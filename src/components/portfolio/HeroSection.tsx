import { motion, type Variants } from "framer-motion";
import { MaterialIcon } from "./MaterialIcon";
import { HERO_METRICS } from "@/data/portfolio";
import { useResumeUrl } from "@/context/SiteConfigContext";
import { ProfileAvatar } from "./ProfileAvatar";
import { trackEvent } from "@/lib/analytics";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  const resumeUrl = useResumeUrl();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <GridBg />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <ProfileAvatar />
        </motion.div>

        <motion.p
          variants={item}
          className="font-mono text-primary text-xs md:text-sm tracking-[0.25em] mb-6 uppercase"
        >
          Microsoft Stack · Enterprise · Cloud-Native
        </motion.p>

        <motion.h1
          variants={item}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
        >
          Ishan Sarvaiya
        </motion.h1>

        <motion.p
          variants={item}
          className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-primary mb-8"
        >
          Enterprise .NET &amp; Cloud Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg mb-10 font-light leading-relaxed"
        >
          I design and ship production APIs, Angular/Blazor applications, and Azure
          infrastructure for fintech and data-intensive platforms — 10,000+ DAU
          reliability, event-driven ingestion at scale, and clean architecture by
          default.
        </motion.p>

        <motion.p
          variants={item}
          className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8"
        >
          Open to senior engineering roles · Select freelance engagements · Remote
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <a
            href="#path"
            className="px-8 py-3.5 bg-primary rounded-xl text-primary-foreground font-bold tracking-tight hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            Choose Your Path
            <MaterialIcon name="arrow_downward" className="text-[18px]" />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("resume_download")}
            className="px-8 py-3.5 rounded-xl border border-border font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors inline-flex items-center justify-center gap-2"
          >
            <MaterialIcon name="download" className="text-[18px]" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3"
        >
          {HERO_METRICS.map((metric) => (
            <span
              key={metric}
              className="px-3 py-1.5 rounded-full font-mono text-xs tracking-wide text-muted-foreground bg-surface-low border border-border"
            >
              {metric}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function GridBg() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}
