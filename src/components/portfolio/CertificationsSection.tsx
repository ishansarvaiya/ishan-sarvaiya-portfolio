import { CERTIFICATIONS, type Certification } from "@/data/portfolio";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { FadeIn } from "./FadeIn";
import { MaterialIcon } from "./MaterialIcon";

export function CertificationsSection() {
  const { certifications: remoteCerts } = useSiteConfig();
  const certs = remoteCerts.length > 0 ? remoteCerts : CERTIFICATIONS;

  if (certs.length === 0) return null;

  return (
    <section id="certifications" className="py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4 text-center">
            Credentials
          </p>
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight mb-10 text-center">
            Certifications
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4">
          {certs.map((cert, i) => (
            <FadeIn key={cert.name + cert.issuer} delay={i * 0.05}>
              <CertCard cert={cert} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: Certification }) {
  const inner = (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
      <MaterialIcon name="verified" className="text-primary text-xl shrink-0" />
      <div className="text-left">
        <p className="font-headline font-semibold text-sm">{cert.name}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {cert.issuer}
          {cert.year ? ` · ${cert.year}` : ""}
        </p>
      </div>
    </div>
  );

  if (cert.credentialUrl) {
    return (
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {inner}
      </a>
    );
  }

  return inner;
}
