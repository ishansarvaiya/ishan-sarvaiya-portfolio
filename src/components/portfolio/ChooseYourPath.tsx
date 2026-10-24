import { FadeIn } from "./FadeIn";
import { Section, SectionHeader, ButtonLink } from "./Primitives";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Cta = {
  label: string;
  href: string;
  primary: boolean;
  external: boolean;
  event?: AnalyticsEvent;
};

type PathConfig = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  trust: string;
  ctas: Cta[];
};

export function ChooseYourPath() {
  const { resumeUrl, githubUrl, calendlyUrl } = useSiteConfig();

  const buildCtas: Cta[] = calendlyUrl
    ? [
        { label: "Book Discovery Call", href: calendlyUrl, primary: true, external: true, event: "calendly_click" },
        { label: "View Case Studies", href: "#work", primary: false, external: false, event: "path_build_click" },
        { label: "Email Brief", href: "#contact", primary: false, external: false },
      ]
    : [
        { label: "Start a Conversation", href: "#contact", primary: true, external: false, event: "path_build_click" },
        { label: "View Case Studies", href: "#work", primary: false, external: false },
      ];

  const paths: PathConfig[] = [
    {
      id: "hire",
      title: "For Hiring Teams",
      subtitle: "Resume-ready proof of enterprise delivery",
      body: "Production systems on the Microsoft stack: ASP.NET Web API, EF Core, Angular, and Azure. Built with clean architecture, observability, and operational reliability.",
      bullets: [
        "Senior Software Engineer · .NET 8 / C# / ASP.NET Core",
        "Fintech & enterprise domains · distributed systems",
        "Azure App Services, Functions, SQL, CI/CD pipelines",
      ],
      trust: "Based in India · Remote-first · Senior IC & lead-track roles",
      ctas: [
        { label: "Download Resume", href: resumeUrl, primary: true, external: true, event: "resume_download" },
        { label: "View Experience", href: "#experience", primary: false, external: false, event: "path_hire_click" },
        { label: "GitHub", href: githubUrl, primary: false, external: true },
      ],
    },
    {
      id: "build",
      title: "For Founders & Product Teams",
      subtitle: "Scoped builds, not open-ended dev hours",
      body: "MVPs, API backends, admin portals, and Azure foundations. Typically 4–12 week engagements with clear milestones, documented architecture, and a clean handoff.",
      bullets: [
        "MVP backends (.NET 8 Web API) + Angular or Blazor UI",
        "Azure setup: App Service, SQL, Key Vault, CI/CD",
        "Integrations: payments, KYC/OCR, messaging pipelines",
        "Data and automation: Python pipelines, scraping, monitoring",
      ],
      trust: "Architecture review → full build → production handoff",
      ctas: buildCtas,
    },
  ];

  return (
    <Section id="path" width="wide" labelledBy="path-title">
      <FadeIn>
        <SectionHeader
          id="path-title"
          eyebrow="Start Here"
          title="Two ways to evaluate my work"
          lead="Hiring for a senior role or scoping a product build? Pick the path that gets you to the right proof in under a minute."
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {paths.map((path, i) => (
          <FadeIn key={path.id} delay={i * 0.06} className="h-full">
            <PathCard path={path} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function PathCard({ path }: { path: PathConfig }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-card p-8 md:p-10">
      <p className="text-eyebrow text-muted-foreground">{path.subtitle}</p>
      <h3 className="text-headline mt-2">{path.title}</h3>
      <p className="mt-4 text-muted-foreground text-pretty">{path.body}</p>
      <ul className="mt-8 flex-1 divide-y divide-border border-y border-border">
        {path.bullets.map((bullet) => (
          <li key={bullet} className="py-3 text-[0.9375rem]">
            {bullet}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted-foreground">{path.trust}</p>
      <PathCtas ctas={path.ctas} />
    </article>
  );
}

function PathCtas({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
      {ctas.map((cta) => (
        <ButtonLink
          key={cta.label}
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          onClick={() => cta.event && trackEvent(cta.event)}
          variant={cta.primary ? "primary" : "link"}
        >
          {cta.label}
        </ButtonLink>
      ))}
    </div>
  );
}
