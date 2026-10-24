import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { HOBBIES } from "@/data/portfolio";

export function UnpluggedSection() {
  return (
    <Section id="unplugged" tone="grey" width="wide" labelledBy="unplugged-title">
      <FadeIn>
        <SectionHeader
          id="unplugged-title"
          eyebrow="Beyond the terminal"
          title={
            <>
              Unplugged <span className="text-muted-foreground">Off-Screen</span>
            </>
          }
          lead="The engineer is just one layer. Here's what runs underneath."
        />
      </FadeIn>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HOBBIES.map((hobby, index) => (
          <li key={hobby.title} className="h-full">
            <FadeIn delay={(index % 4) * 0.05} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-background p-6">
                <span className="mb-4 block text-3xl" aria-hidden="true">
                  {hobby.emoji}
                </span>
                <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                  {hobby.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] text-muted-foreground text-pretty">
                  {hobby.description}
                </p>
              </article>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  );
}
