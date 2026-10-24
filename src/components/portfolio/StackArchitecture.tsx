import { useState } from "react";
import { motion } from "framer-motion";
import { STACK_LAYERS } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

const LEVEL_STYLES = {
  Primary: "text-primary font-semibold",
  Production: "text-foreground",
  Supporting: "text-muted-foreground",
} as const;

export function StackArchitecture() {
  const [activeTab, setActiveTab] = useState(STACK_LAYERS[0].id);

  return (
    <Section id="stack" tone="grey" labelledBy="stack-title">
      <FadeIn>
        <SectionHeader
          id="stack-title"
          eyebrow="Microsoft Stack"
          title="Stack, organized like production architecture"
          lead="Depth over decoration — each layer maps to systems I've shipped, not tutorials I've completed."
        />
      </FadeIn>

      <FadeIn delay={0.06}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="-mx-6 mb-10 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0">
            <TabsList className="mx-auto flex h-auto w-max gap-1 rounded-full bg-secondary p-1">
              {STACK_LAYERS.map((layer) => (
                <TabsTrigger
                  key={layer.id}
                  value={layer.id}
                  className="relative min-h-10 rounded-full px-4 text-[0.9375rem] transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  {activeTab === layer.id && (
                    <motion.span
                      layoutId="stack-tab"
                      className="absolute inset-0 rounded-full bg-background shadow-sm"
                      transition={spring}
                    />
                  )}
                  <span className="relative">{layer.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {STACK_LAYERS.map((layer) => (
            <TabsContent
              key={layer.id}
              value={layer.id}
              className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
              >
                <p className="text-lead mx-auto mb-8 max-w-2xl text-center text-muted-foreground text-balance">
                  {layer.subtitle}
                </p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {layer.technologies.map((tech) => (
                    <li key={tech.name} className="rounded-3xl bg-background p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                          {tech.name}
                        </h3>
                        <span
                          className={cn(
                            "shrink-0 text-xs",
                            LEVEL_STYLES[tech.level],
                          )}
                        >
                          {tech.level}
                        </span>
                      </div>
                      <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                        {tech.capability}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </FadeIn>

      <FadeIn delay={0.1}>
        <aside className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-eyebrow text-primary">Currently at</p>
          <p className="mt-2 text-muted-foreground text-pretty">
            Kinetiq — architecting global media monitoring and distributed ingestion
            infrastructure.
          </p>
        </aside>
      </FadeIn>
    </Section>
  );
}
