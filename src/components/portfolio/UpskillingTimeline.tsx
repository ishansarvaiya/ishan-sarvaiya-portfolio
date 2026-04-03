import { FadeIn } from "./FadeIn";
import { UPSKILLING } from "@/data/portfolio";

const CATEGORY_COLOR: Record<string, string> = {
  AI:           "hsl(183 100% 47%)",
  Architecture: "hsl(250 73% 60%)",
  DevOps:       "hsl(35  80% 55%)",
  Backend:      "hsl(145 55% 45%)",
  Database:     "hsl(300 55% 60%)",
};

export function UpskillingTimeline() {
  return (
    <section id="upskilling" className="py-32 px-8 bg-surface-mid">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4">
            CONTINUOUS LEARNING
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Currently Upskilling{" "}
            <span className="text-outline">// Log</span>
          </h2>
        </FadeIn>

        {/* Timeline container */}
        <div className="relative ml-3 md:ml-6">
          {/* Vertical rule */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, hsl(183 100% 47% / 0.6), hsl(184 8% 18% / 0.3) 80%, transparent)",
            }}
          />

          <div className="space-y-10">
            {UPSKILLING.map((entry, index) => {
              const color =
                CATEGORY_COLOR[entry.category] ?? "hsl(183 100% 47%)";

              return (
                <FadeIn key={index} delay={index * 0.07}>
                  <div className="relative pl-8 md:pl-10">
                    {/* Timeline dot */}
                    <span
                      className="absolute left-0 top-3 h-3 w-3 rounded-full border-2 -translate-x-1/2 z-10"
                      style={{
                        borderColor: color,
                        backgroundColor: "hsl(0 0% 5%)",
                        boxShadow: `0 0 8px ${color}55`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <article
                      className="group p-5 rounded-xl border bg-card transition-all duration-300 hover:border-opacity-60"
                      style={{ borderColor: color + "28" }}
                    >
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span
                          className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full border"
                          style={{
                            color,
                            borderColor: color + "40",
                            backgroundColor: color + "10",
                          }}
                        >
                          {entry.category}
                        </span>
                        <time
                          className="font-mono text-xs text-muted-foreground"
                          dateTime={entry.date}
                        >
                          {entry.date}
                        </time>
                      </div>

                      {/* Topic */}
                      <h3 className="font-headline font-semibold text-foreground text-base mb-2 group-hover:text-white transition-colors duration-200">
                        {entry.topic}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>
                    </article>
                  </div>
                </FadeIn>
              );
            })}

            {/* "Ongoing" terminus dot */}
            <div className="relative pl-8 md:pl-10">
              <span
                className="absolute left-0 top-1 h-2 w-2 rounded-full -translate-x-1/2 z-10 animate-pulse"
                style={{ backgroundColor: "hsl(183 100% 47%)" }}
                aria-hidden="true"
              />
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Ongoing…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
