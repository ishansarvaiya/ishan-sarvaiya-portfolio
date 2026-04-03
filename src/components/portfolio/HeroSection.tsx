import { MaterialIcon } from "./MaterialIcon";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <p className="font-mono text-primary text-sm tracking-[0.3em] mb-6 uppercase">
          System_Active // Status_Ready
        </p>

        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8">
          Ishan Sarvaiya
          <br />
          <span className="text-gradient">Software Engineer</span>
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-12 font-light leading-relaxed">
          Architecting digital ecosystems with a focus on high-performance
          infrastructure, cloud-native scalability, and the aesthetics of clean
          code.
        </p>

        <div className="flex justify-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-primary-foreground font-bold tracking-tight hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2"
          >
            EXPLORE WORK
            <MaterialIcon name="arrow_forward" className="text-[20px]" />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40"
        aria-hidden="true"
      >
        <MaterialIcon name="expand_more" />
      </div>
    </section>
  );
}
