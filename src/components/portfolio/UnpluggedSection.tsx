import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { HOBBIES } from "@/data/portfolio";

export function UnpluggedSection() {
  return (
    <Section id="unplugged" width="wide" labelledBy="unplugged-title">
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

      <ul className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {HOBBIES.map((hobby, index) => (
          <li key={hobby.title} className="border-t border-border pt-5">
            <FadeIn delay={(index % 3) * 0.05}>
              <h3 className="flex items-center gap-3 text-[1.0625rem] font-semibold tracking-tight">
                <span aria-hidden="true">{hobby.emoji}</span>
                {hobby.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-muted-foreground text-pretty">
                {hobby.description}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  );
}
