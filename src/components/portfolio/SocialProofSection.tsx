import { ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader, ButtonLink } from "./Primitives";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";

const COMPANIES = ["Kinetiq", "Crytonix", "iFour Technolab"] as const;

export function SocialProofSection() {
  const { linkedinUrl } = useSiteConfig();

  return (
    <Section id="proof" width="narrow" labelledBy="proof-title">
      <FadeIn>
        <SectionHeader
          id="proof-title"
          eyebrow="Trusted Delivery"
          title="Recommendations on LinkedIn"
          lead="Feedback from colleagues and clients on real production work. Read the full recommendations on LinkedIn."
          className="mb-8"
        />
        <div className="text-center">
          <ButtonLink
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("linkedin_click")}
          >
            View LinkedIn Recommendations
            <ExternalLink size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <ul
          aria-label="Companies"
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[1.0625rem] font-semibold tracking-tight text-muted-foreground"
        >
          {COMPANIES.map((company) => (
            <li key={company}>{company}</li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
