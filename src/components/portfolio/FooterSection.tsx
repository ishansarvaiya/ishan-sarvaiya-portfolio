import { MaterialIcon } from "./MaterialIcon";
import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer id="contact" className="bg-[hsl(0_0%_3%)] border-t border-border pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
          <h2 className="font-headline text-5xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mb-10">
            Open to technical consultation and senior engineering roles.
          </p>

          <address className="space-y-6 not-italic">
            <div className="flex items-center gap-4 group">
              <MaterialIcon
                name="mail"
                className="text-outline group-hover:text-primary transition-colors"
              />
              <a
                href="mailto:ishansarvaiya1@gmail.com"
                className="font-mono text-sm tracking-widest text-outline group-hover:text-foreground transition-colors"
              >
                ishansarvaiya1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <MaterialIcon
                name="location_on"
                className="text-outline group-hover:text-primary transition-colors"
              />
              <span className="font-mono text-sm tracking-widest text-outline group-hover:text-foreground transition-colors">
                Remote — Open to Relocation
              </span>
            </div>
          </address>
          </div>
        </FadeIn>

        <div className="pt-8 border-t border-border/50">
          <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()} Ishan Sarvaiya
          </p>
        </div>
      </div>
    </footer>
  );
}
