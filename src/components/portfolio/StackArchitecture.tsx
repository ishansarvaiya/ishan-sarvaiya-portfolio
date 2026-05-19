import { useState } from "react";
import { STACK_LAYERS } from "@/data/portfolio";
import { MaterialIcon } from "./MaterialIcon";
import { FadeIn } from "./FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const LEVEL_STYLES = {
  Primary: "text-primary border-primary/30 bg-primary/10",
  Production: "text-foreground border-border bg-surface-high",
  Supporting: "text-muted-foreground border-border/50 bg-surface-low",
} as const;

export function StackArchitecture() {
  const [activeTab, setActiveTab] = useState(STACK_LAYERS[0].id);

  return (
    <section id="stack" className="py-32 px-8 bg-surface-mid">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <header className="mb-12 text-center md:text-left">
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
              Microsoft Stack
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Stack, organized like production architecture
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg font-light">
              Depth over decoration — each layer maps to systems I&apos;ve shipped,
              not tutorials I&apos;ve completed.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-surface-low p-2 mb-8">
              {STACK_LAYERS.map((layer) => (
                <TabsTrigger
                  key={layer.id}
                  value={layer.id}
                  className="font-mono text-xs uppercase tracking-wider data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
                >
                  <MaterialIcon name={layer.icon} className="text-base mr-1.5" />
                  {layer.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {STACK_LAYERS.map((layer) => (
              <TabsContent key={layer.id} value={layer.id} className="mt-0">
                <p className="font-mono text-sm text-muted-foreground mb-6 border-l-2 border-primary pl-4">
                  {layer.subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {layer.technologies.map((tech, i) => (
                    <div
                      key={tech.name}
                      className={cn(
                        "p-5 rounded-xl border border-border/20 bg-card transition-colors hover:border-primary/30",
                        "animate-in fade-in duration-300",
                      )}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <TechHeader name={tech.name} level={tech.level} />
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {tech.capability}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>

        <FadeIn delay={0.2}>
          <aside className="mt-12 p-6 bg-surface-low rounded-xl border-l-2 border-primary">
            <p className="font-mono text-sm text-primary mb-2">CURRENTLY_AT:</p>
            <p className="font-mono text-xs text-muted-foreground">
              Kinetiq — architecting global media monitoring and distributed ingestion
              infrastructure.
            </p>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}

function TechHeader({
  name,
  level,
}: {
  name: string;
  level: keyof typeof LEVEL_STYLES;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-headline font-semibold text-base">{name}</h3>
      <span
        className={cn(
          "shrink-0 px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider border",
          LEVEL_STYLES[level],
        )}
      >
        {level}
      </span>
    </div>
  );
}
