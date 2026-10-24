import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { CERTIFICATIONS, type Certification } from "@/data/portfolio";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { FadeIn } from "./FadeIn";
import { Section, SectionHeader } from "./Primitives";
import { pressCard } from "@/lib/motion";

export function CertificationsSection() {
  const { certifications: remoteCerts } = useSiteConfig();
  const certs = remoteCerts.length > 0 ? remoteCerts : CERTIFICATIONS;

  if (certs.length === 0) return null;

  return (
    <Section id="certifications" labelledBy="certifications-title">
      <FadeIn>
        <SectionHeader
          id="certifications-title"
          eyebrow="Credentials"
          title="Certifications"
        />
      </FadeIn>

      <ul className="flex flex-wrap justify-center gap-4">
        {certs.map((cert, i) => (
          <li key={cert.name + cert.issuer}>
            <FadeIn delay={i * 0.05}>
              <CertCard cert={cert} />
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function CertCard({ cert }: { cert: Certification }) {
  const inner = (
    <>
      <BadgeCheck className="shrink-0 text-primary" size={22} aria-hidden="true" />
      <span className="text-left">
        <span className="block text-[0.9375rem] font-semibold tracking-tight">
          {cert.name}
        </span>
        <span className="block text-sm text-muted-foreground">
          {cert.issuer}
          {cert.year ? ` · ${cert.year}` : ""}
        </span>
      </span>
    </>
  );
  const classes = "flex items-center gap-3 rounded-2xl bg-card px-5 py-4";

  if (cert.credentialUrl) {
    return (
      <motion.a
        {...pressCard}
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </motion.a>
    );
  }

  return <div className={classes}>{inner}</div>;
}
