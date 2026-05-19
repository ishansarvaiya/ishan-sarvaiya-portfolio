import { FadeIn } from "./FadeIn";
import { MaterialIcon } from "./MaterialIcon";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";

const COMPANIES = ["Kinetiq", "Crytonix", "iFour Technolab"] as const;

export function SocialProofSection() {
  const { linkedinUrl } = useSiteConfig();

  return (
    <section id="proof" className="py-24 px-8 border-y border-border/20">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
            Trusted Delivery
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Recommendations on LinkedIn
          </h2>
          <p className="text-muted-foreground text-base font-light mb-8 max-w-lg mx-auto">
            Peer and client feedback from production engagements — view full
            recommendations on my LinkedIn profile.
          </p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("linkedin_click")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-sm tracking-tight hover:scale-[1.02] transition-transform"
          >
            View LinkedIn Recommendations
            <MaterialIcon name="open_in_new" className="text-[18px]" />
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-14 flex flex-wrap justify-center gap-8 items-center opacity-50">
            {COMPANIES.map((company) => (
              <span
                key={company}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
