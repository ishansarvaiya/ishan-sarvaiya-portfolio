import { motion, type Variants } from "framer-motion";
import { MaterialIcon } from "./MaterialIcon";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8 overflow-hidden">
      {/* Ambient background glow — fixed layer so it never repaints on scroll */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.12]"
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
        <motion.p
          variants={item}
          className="font-mono text-primary text-sm tracking-[0.3em] mb-6 uppercase"
        >
          Open to senior engineering roles &middot; Remote
        </motion.p>

        <motion.h1
          variants={item}
          className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          Ishan Sarvaiya
          <span className="block text-gradient">Software Engineer</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted-foreground max-w-xl mx-auto text-lg mb-12 font-light leading-relaxed"
        >
          Architecting high-concurrency systems for Media Intelligence and
          Fintech. Specialized in .NET&nbsp;8, Distributed Messaging, and Data
          Observability.
        </motion.p>

        <motion.div variants={item} className="flex justify-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-primary-foreground font-bold tracking-tight hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
          >
            EXPLORE WORK
            <MaterialIcon name="arrow_forward" className="text-[20px]" />
          </a>
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40"
        aria-hidden="true"
      >
        <MaterialIcon name="expand_more" />
      </div>
    </section>
  );
}
