import { FadeIn } from "./FadeIn";
import { MaterialIcon } from "./MaterialIcon";
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
  icon: string;
  accent: string;
  iconColor: string;
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
      icon: "work",
      accent: "border-border hover:border-foreground/30",
      iconColor: "text-foreground",
      title: "For Hiring Teams",
      subtitle: "Resume-ready proof of enterprise delivery",
      body: "Production-grade systems on the Microsoft stack — ASP.NET Web API, EF Core, Angular, and Azure — with clean architecture, observability, and operational reliability.",
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
      icon: "architecture",
      accent: "border-primary/40 hover:border-primary/70",
      iconColor: "text-primary",
      title: "For Founders & Product Teams",
      subtitle: "Scoped builds, not open-ended dev hours",
      body: "MVPs, API backends, admin portals, and Azure foundations — typically 4–12 week engagements with clear milestones, documented architecture, and maintainable handoff.",
      bullets: [
        "MVP backends (.NET 8 Web API) + Angular or Blazor UI",
        "Azure setup: App Service, SQL, Key Vault, CI/CD",
        "Integrations: payments, KYC/OCR, messaging pipelines",
      ],
      trust: "Architecture review → full build → production handoff",
      ctas: buildCtas,
    },
  ];

  return (
    <section id="path" className="py-24 px-8">
      <FadeIn>
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
            Start Here
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Two ways to evaluate my work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            Whether you&apos;re filling a senior role or scoping a product build, pick
            the path that gets you to the right proof in under 60 seconds.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
        {paths.map((path, i) => (
          <FadeIn key={path.id} delay={i * 0.1}>
            <PathCard path={path} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function PathCard({ path }: { path: PathConfig }) {
  return (
    <article
      className={`flex flex-col h-full p-8 rounded-xl bg-card border ${path.accent} transition-all duration-300 hover:-translate-y-1`}
    >
      <MaterialIcon name={path.icon} className={`text-3xl mb-5 ${path.iconColor}`} />
      <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">
        {path.subtitle}
      </p>
      <h3 className="font-headline text-2xl font-bold mb-4">{path.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{path.body}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {path.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-0.5 shrink-0 text-xs">›</span>
            {bullet}
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs text-muted-foreground mb-5">{path.trust}</p>
      <PathCtas ctas={path.ctas} />
    </article>
  );
}

function PathCtas({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {ctas.map((cta) => (
        <a
          key={cta.label}
          href={cta.href}
          target={cta.external ? "_blank" : undefined}
          rel={cta.external ? "noopener noreferrer" : undefined}
          onClick={() => cta.event && trackEvent(cta.event)}
          className={
            cta.primary
              ? "px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-xs tracking-wide font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
              : "px-5 py-2.5 rounded-xl border border-border font-mono text-xs tracking-wide text-muted-foreground hover:text-foreground hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
          }
        >
          {cta.label}
        </a>
      ))}
    </div>
  );
}
