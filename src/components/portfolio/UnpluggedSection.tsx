import { FadeIn } from "./FadeIn";
import { HOBBIES } from "@/data/portfolio";

export function UnpluggedSection() {
  return (
    <section id="unplugged" className="py-32 px-8 bg-surface-low">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4">
            BEYOND THE TERMINAL
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Unplugged <span className="text-outline">// Off-Screen</span>
          </h2>
          <p className="text-muted-foreground mb-16 max-w-xl text-base">
            The engineer is just one layer. Here's what runs underneath.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {HOBBIES.map((hobby, index) => (
            <FadeIn key={hobby.title} delay={index * 0.06}>
              <article
                className="group relative p-6 rounded-2xl border bg-card overflow-hidden transition-all duration-300 hover:border-opacity-50 h-full flex flex-col"
                style={{ borderColor: hobby.accent + "22" }}
              >
                {/* Subtle corner gradient on hover */}
                <span
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{ backgroundColor: hobby.accent + "18" }}
                  aria-hidden="true"
                />

                {/* Emoji */}
                <span
                  className="text-3xl mb-4 block"
                  role="img"
                  aria-hidden="true"
                >
                  {hobby.emoji}
                </span>

                {/* Title */}
                <h3 className="font-headline font-semibold text-base text-foreground mb-2 transition-colors duration-200">
                  {hobby.title}
                </h3>

                {/* Left accent bar */}
                <span
                  className="absolute left-0 top-6 bottom-6 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r"
                  style={{ backgroundColor: hobby.accent }}
                  aria-hidden="true"
                />

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {hobby.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
