import { STACK_ITEMS } from "@/data/portfolio";
import { MaterialIcon } from "./MaterialIcon";
import { FadeIn } from "./FadeIn";

function StackCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="p-8 bg-surface-low rounded-xl border border-border/10 group hover:border-primary/30 transition-all duration-500">
      <MaterialIcon
        name={icon}
        className="text-4xl text-outline group-hover:text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--neon)/0.6)] transition-all duration-300"
      />
      <h3 className="mt-4 font-mono text-sm uppercase tracking-widest">
        {label}
      </h3>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-32 px-8 bg-surface-mid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Philosophy column */}
        <FadeIn className="lg:col-span-5" direction="left">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Continuous Upskilling //{" "}
            <span className="text-outline">Philosophy</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              Software is a living entity. My approach treats development as a
              craft of perpetual evolution, where each commit is an iteration
              toward absolute optimization.
            </p>
            <p>
              I focus on building resilient systems that thrive under load,
              leveraging modern paradigms while maintaining the simplicity of
              efficient architecture.
            </p>
          </div>

          <aside className="mt-12 p-6 bg-surface-low rounded-xl border-l-2 border-primary">
            <p className="font-mono text-sm text-primary mb-2">
              CURRENTLY_AT:
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Kinetiq &mdash; architecting global media monitoring infrastructure.
            </p>
          </aside>
        </FadeIn>

        {/* Stack grid */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          {STACK_ITEMS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <StackCard icon={item.icon} label={item.label} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
