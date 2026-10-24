export interface NavLink {
  label: string;
  href: string;
}

export interface StackItem {
  icon: string;
  label: string;
}

export interface StackTech {
  name: string;
  capability: string;
  level: "Primary" | "Production" | "Supporting";
}

export interface StackLayer {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  technologies: StackTech[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  domain: "Fintech" | "Media" | "Enterprise" | "Utilities";
  role: string;
  timeline: string;
  situation: string;
  task: string;
  actions: string[];
  results: string[];
  azureMetrics?: string[];
  microsoftStack: string[];
  tags: string[];
  sourceUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  tags: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

// ─── Site URLs ────────────────────────────────────────────────────────────────

/** Fallback when site-config.json is unavailable. Prefer editing public/site-config.json at runtime. */
export const DEFAULT_RESUME_URL =
  "https://github.com/ishansarvaiya/resume/raw/main/ishan-sarvaiya-resume.pdf";
export const GITHUB_URL = "https://github.com/ishansarvaiya";
export const LINKEDIN_URL = "https://linkedin.com/in/ishansarvaiya";
export const CONTACT_EMAIL = "ishansarvaiya1@gmail.com";

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Add entries here or in public/site-config.json → certifications */
export const CERTIFICATIONS: Certification[] = [];

export const HERO_METRICS = [
  "4+ years in production",
  "10K+ daily active users",
  "99.9% transaction reliability",
  ".NET 8 · Azure · Python · AI",
];

// ─── Stack Layers ─────────────────────────────────────────────────────────────

export const STACK_LAYERS: StackLayer[] = [
  {
    id: "core",
    title: "Core Engine",
    subtitle: "Backend and data, where business rules and performance are decided.",
    icon: "memory",
    technologies: [
      { name: "C# / .NET 8+", capability: "High-concurrency APIs, MediatR/CQRS, and channels for backpressure", level: "Primary" },
      { name: "ASP.NET Core Web API", capability: "REST, JWT auth, versioning, OpenAPI, health checks", level: "Primary" },
      { name: "Entity Framework Core", capability: "Migrations, tuned queries, read replicas, and audit trails", level: "Primary" },
      { name: "Clean Architecture / SOLID", capability: "Layered domains, dependency inversion, and testable service boundaries", level: "Production" },
      { name: "SignalR / gRPC", capability: "Real-time hubs and high-performance RPC between services", level: "Production" },
      { name: "Identity Server / OAuth 2.0", capability: "OIDC flows, token issuance, KYC-integrated auth pipelines", level: "Production" },
      { name: "SQL Server / PostgreSQL", capability: "Transactional stores, indexing strategy, reporting paths", level: "Production" },
      { name: "MongoDB / Cosmos DB", capability: "Document stores, aggregation pipelines, and horizontal scale", level: "Supporting" },
      { name: "xUnit / Moq", capability: "Unit and integration tests for APIs and domain logic", level: "Supporting" },
    ],
  },
  {
    id: "interface",
    title: "Interface",
    subtitle: "Interfaces built to last, and kept in step with the API contract.",
    icon: "web",
    technologies: [
      { name: "Angular (Enterprise SPAs)", capability: "Modular apps, lazy routes, enterprise forms, and auth flows", level: "Primary" },
      { name: "RxJS / NgRx", capability: "Reactive state, side-effect management, and async data streams", level: "Production" },
      { name: "Blazor Server / WASM", capability: "Full-stack C# when team skillset and delivery speed align", level: "Supporting" },
      { name: "TypeScript", capability: "Strict typing and contracts shared with the API models", level: "Production" },
      { name: "HTML5 / CSS3 / Tailwind", capability: "Responsive layouts, design systems, and accessible UI", level: "Production" },
      { name: "REST + OpenAPI / Swagger", capability: "Contract-first APIs, code generation, and interactive docs", level: "Production" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "Deployable, observable, automated, and cost-aware infrastructure, mainly on Azure.",
    icon: "cloud",
    technologies: [
      { name: "Azure App Services", capability: "API hosting, deployment slots, autoscale, and managed identity", level: "Primary" },
      { name: "Azure Functions", capability: "Event-driven jobs, Service Bus triggers, and consumption-plan tuning", level: "Production" },
      { name: "Azure SQL / Blob Storage", capability: "Managed relational data, document blobs, and geo-redundant backup", level: "Production" },
      { name: "Azure Key Vault", capability: "Secrets, certificates, connection strings at runtime", level: "Production" },
      { name: "Azure Service Bus / Front Door", capability: "Messaging, edge routing, DDoS mitigation, and a global entry point", level: "Production" },
      { name: "Application Insights / OpenTelemetry", capability: "Distributed tracing, metrics, alerting, and log correlation", level: "Production" },
      { name: "Azure DevOps / GitHub Actions", capability: "CI/CD pipelines, environment promotion, and PR checks", level: "Production" },
      { name: "Prometheus / Grafana", capability: "Metrics collection, dashboards, and alerting for service health", level: "Production" },
      { name: "Ansible", capability: "Repeatable server configuration and deployment automation", level: "Production" },
      { name: "Docker / Kubernetes (AKS)", capability: "Containerized services, HPA, Helm deployments", level: "Supporting" },
      { name: "AWS (EC2, S3)", capability: "Cross-cloud deployments and hybrid integrations where required", level: "Supporting" },
    ],
  },
  {
    id: "integration",
    title: "Integration & Messaging",
    subtitle: "Messaging, search, payments, and Python workers that move data reliably.",
    icon: "hub",
    technologies: [
      { name: "RabbitMQ / Azure Service Bus", capability: "Async decoupling, dead-letter queues, ordering, and poison-message handling", level: "Production" },
      { name: "Elasticsearch", capability: "Full-text search, ILM tiers, and ingest tuning", level: "Production" },
      { name: "Redis", capability: "Caching, rate limiting, sliding-window counters", level: "Production" },
      { name: "Python (asyncio / workers)", capability: "Async workers, ETL, and ingestion pipelines at scale", level: "Production" },
      { name: "Web Scraping / Data Collection", capability: "Crawlers, structured extraction, and anti-bot resilience", level: "Production" },
      { name: "Speech-to-Text", capability: "Transcribing audio into searchable, structured text", level: "Production" },
      { name: "Payment Gateway Integration", capability: "Wallet transactions, utility billing, and idempotent settlements", level: "Production" },
      { name: "OCR / KYC Pipelines", capability: "Document capture, identity verification, and compliance audit trails", level: "Production" },
      { name: "Selenium / C# Automation", capability: "Web and desktop automation for indexing and QA", level: "Supporting" },
      { name: "Git / GitHub", capability: "Branching, PR reviews, CI integration, and open-source work", level: "Production" },
    ],
  },
  {
    id: "ai",
    title: "AI & Agents",
    subtitle: "LLM-powered features and agentic workflows, built and shipped like any other service.",
    icon: "psychology",
    technologies: [
      { name: "LLM APIs", capability: "Integrating hosted models into services with streaming, structured output, retries, and cost control", level: "Production" },
      { name: "Claude / Anthropic API", capability: "Messages API, tool use, and long-context workflows", level: "Production" },
      { name: "Prompt Engineering", capability: "Reliable prompts, evaluation, and guardrails for production use", level: "Production" },
      { name: "AI Agents / Tool Use", capability: "Multi-step agents that call APIs and tools, with checks where it matters", level: "Production" },
      { name: "AI-Assisted Development", capability: "Claude Code and agentic dev tooling for faster, reviewed delivery", level: "Production" },
    ],
  },
];

// ─── Case Studies (STAR-M) ────────────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "media-ingestion",
    title: "Media Ingestion Engine",
    tagline: "Distributed pipelines processing millions of OTT metadata records daily.",
    domain: "Media",
    role: "Software Engineer",
    timeline: "Oct 2025 – Present · Kinetiq",
    situation:
      "Global media monitoring meant ingesting from 200+ sources, serving low-latency search, and staying resilient to rate limits and anti-bot defenses. Batch ETL could not meet the freshness SLAs.",
    task: "Design distributed ingestion that cuts end-to-end monitoring latency and keeps search fast under heavy ingest.",
    actions: [
      "Moved batch ETL to event-driven pipelines built on Python workers, RabbitMQ, and Elasticsearch.",
      "Defined API contracts for downstream analytics services, speeding up delivery across teams.",
      "Applied ILM policies and shard pre-warming, improving search latency by 40% during high-ingest windows.",
    ],
    results: [
      "Millions of metadata records ingested daily across global broadcast markets.",
      "Lower end-to-end latency after the move to event-driven ingestion.",
      "40% faster search during peak ingest windows.",
    ],
    azureMetrics: [
      "Azure Functions: consumption plan with per-function concurrency caps",
      "AKS HPA: 2 → 20 replicas driven by CPU and queue-depth metrics",
    ],
    microsoftStack: [".NET 8 API Gateway", "Azure Functions", "Azure Front Door", "PostgreSQL", "Service Bus"],
    tags: ["Python", "RabbitMQ", "Elasticsearch", ".NET 8", "Data Scraping", "Speech-to-Text", "Ansible", "Prometheus", "Grafana"],
    featured: true,
  },
  {
    id: "mobile-wallet",
    title: "Mobile Wallet Backend",
    tagline: "High-concurrency .NET APIs on Azure for 10,000+ DAU with 99.9% reliability.",
    domain: "Fintech",
    role: "Backend Engineer",
    timeline: "2022 – 2025 · Crytonix",
    situation:
      "A mobile wallet needed APIs that could handle daily payment and wallet traffic, with strict uptime targets and tight security around authentication and external payment calls.",
    task: "Own backend API design and Azure deployment, with monitoring good enough for production SLA reviews.",
    actions: [
      "Built ASP.NET Core Web APIs with JWT auth, EF Core on SQL Server, structured logging, and health endpoints.",
      "Deployed to Azure App Services, with per-environment configuration through Key Vault references.",
      "Made external payment calls retry-safe and indexed the database for the hottest query paths.",
    ],
    results: [
      "Supported 10,000+ daily active users.",
      "Maintained 99.9% transaction reliability.",
      "Faster incident diagnosis through centralized logs and health dashboards.",
    ],
    azureMetrics: [
      "P95 API latency < 180ms under normal load",
      "Autoscale 2 → 8 App Service instances on CPU",
      "~22% Azure spend reduction after right-sizing SKUs",
    ],
    microsoftStack: [".NET Core → .NET 8", "ASP.NET Web API", "EF Core", "SQL Server", "Azure App Service", "Key Vault"],
    tags: [".NET Core", "Azure", "SQL Server", "JWT"],
    featured: true,
  },
  {
    id: "kyc",
    title: "KYC Management System",
    tagline: "Automated identity verification that cut manual processing errors by 35%.",
    domain: "Fintech",
    role: "Full-Stack Engineer",
    timeline: "2023 – 2024 · Crytonix",
    situation:
      "Manual KYC review caused bottlenecks, inconsistent decisions, and compliance risk as the user base grew.",
    task: "Automate document capture, OCR extraction, and identity verification, with a full audit trail.",
    actions: [
      "Integrated an OCR pipeline with Identity Server for authentication and authorization.",
      "Built workflow APIs in .NET Core with state-machine-style status tracking.",
      "Stored audit trails in SQL Server for compliance review.",
    ],
    results: [
      "35% fewer manual processing errors.",
      "Faster onboarding for new users.",
      "A traceable verification history for compliance audits.",
    ],
    microsoftStack: [".NET Core Web API", "Identity Server", "EF Core", "SQL Server"],
    tags: [".NET Core", "OCR", "Identity Server", "SQL Server"],
  },
  {
    id: "utility-gateway",
    title: "Utility Payment Gateway",
    tagline: "Custom billing logic handling 5,000+ daily transactions across regional grids.",
    domain: "Utilities",
    role: "API Architect",
    timeline: "2023 – 2024 · Crytonix",
    situation:
      "Regional utility operators each had their own billing rules and settlement windows, and every payment had to be reconciled against provider responses.",
    task: "Design an extensible billing engine and transaction APIs without losing reconciliation accuracy.",
    actions: [
      "Built rule-driven billing in .NET Core, configured per operator.",
      "Built idempotent transaction APIs, with exception queues for failed settlements.",
      "Added nightly jobs that reconcile payment provider responses.",
    ],
    results: [
      "5,000+ daily transactions processed reliably.",
      "Fewer reconciliation discrepancies across operators.",
      "Operator-specific rules that ship without touching the core.",
    ],
    azureMetrics: [
      "Azure SQL geo-redundant backup for audit records",
      "~15% storage cost savings via cold-tier audit log archival",
    ],
    microsoftStack: [".NET Core", "ASP.NET Web API", "SQL Server", "Payment Gateway Integration"],
    tags: [".NET Core", "SQL Server", "Payment Gateway"],
  },
  {
    id: "hrms",
    title: "Enterprise HRMS",
    tagline: "A full-stack Angular and .NET platform for 100+ enterprise users.",
    domain: "Enterprise",
    role: "Full-Stack Engineer",
    timeline: "2021 – 2022 · iFour Technolab",
    situation:
      "Leave and attendance were handled by hand across departments at a mid-size enterprise client, which led to errors.",
    task: "Deliver HRMS modules with role-based access and dependable attendance logic.",
    actions: [
      "Built an Angular SPA with feature modules and lazy-loaded routes.",
      "Developed .NET Core APIs on EF Core, with a SQL Server schema designed for reporting.",
      "Deployed to Azure with matching staging and production environments.",
    ],
    results: [
      "100+ users on streamlined leave and attendance workflows.",
      "Less HR processing time across departments.",
      "A maintainable codebase, handed over with documentation.",
    ],
    microsoftStack: ["Angular", "TypeScript", ".NET Core", "EF Core", "SQL Server", "Azure App Service"],
    tags: ["Angular", ".NET Core", "SQL Server", "Azure"],
  },
  {
    id: "logistics",
    title: "Logistics Tracking APIs",
    tagline: "Real-time shipment APIs that improved delivery operations efficiency by 25%.",
    domain: "Enterprise",
    role: "Backend Engineer",
    timeline: "2021 – 2022 · iFour Technolab",
    situation:
      "Logistics teams had no real-time view of shipment status, which delayed exception handling and customer updates.",
    task: "Build REST tracking APIs on top of the existing SQL Server data and operational dashboards.",
    actions: [
      "Designed REST APIs with tuned SQL queries and covering indexes on the hot paths.",
      "Added webhook-style status updates for downstream integrations.",
      "Added health checks and structured logging for day-to-day monitoring.",
    ],
    results: [
      "25% improvement in delivery operations efficiency.",
      "Real-time status for operations and customer-facing tools.",
      "Less manual status lookup across teams.",
    ],
    microsoftStack: [".NET Core", "ASP.NET Web API", "SQL Server", "REST"],
    tags: [".NET Core", "REST APIs", "SQL Server"],
  },
  {
    id: "automation-tooling",
    title: "Streaming Content Automation",
    tagline: "A C# and Selenium desktop suite that indexes catalog data into SQL Server.",
    domain: "Enterprise",
    role: "Developer",
    timeline: "2021 – 2022 · iFour Technolab",
    situation:
      "Cataloguing streaming content by hand was slow and error-prone, and it blocked analytics.",
    task: "Build a dependable tool that scrapes, normalizes, and stores content metadata for analysis.",
    actions: [
      "Built a C# desktop automation suite that uses Selenium for browser-driven extraction.",
      "Structured the ingestion pipeline into SQL Server, with repeatable job configuration.",
      "Open-sourced the project so it can be reproduced and referenced.",
    ],
    results: [
      "Far less manual cataloguing for operations teams.",
      "A consistent, queryable content index for analysis.",
      "A maintainable codebase, published on GitHub.",
    ],
    microsoftStack: ["C#", ".NET", "Selenium", "SQL Server"],
    tags: ["C#", "Selenium", "SQL Server", ".NET"],
    sourceUrl: "https://github.com/ishansarvaiya/HotstarScraper",
  },
];

export const CASE_STUDY_DOMAINS = ["All", "Fintech", "Media", "Enterprise", "Utilities"] as const;

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "From Batch ETL to Event-Driven Ingestion: What Actually Broke in Production",
    excerpt:
      "Migration war stories — ordering, idempotency, poison messages, and dead-letter queues using RabbitMQ and Service Bus patterns from media ingestion at scale.",
    category: "Architecture",
    readTime: "12 min",
    slug: "batch-etl-to-event-driven",
  },
  {
    title: ".NET 8 API Performance: Channels, Span<T>, and When CQRS Pays for Itself",
    excerpt:
      "Practical guidance on hot-path optimization with System.Threading.Channels, and the maintainability tradeoffs of MediatR + CQRS in production APIs.",
    category: ".NET",
    readTime: "10 min",
    slug: "dotnet8-api-performance",
  },
  {
    title: "Azure Cost Control for App Services and Functions: A Production Checklist",
    excerpt:
      "SKU right-sizing, consumption plan caps, Key Vault patterns, and cold-start tradeoffs — lessons from fintech APIs running on Azure App Service.",
    category: "Azure",
    readTime: "8 min",
    slug: "azure-cost-control-checklist",
  },
  {
    title: "Angular Enterprise SPAs: Module Boundaries, Lazy Loading, and API Contract Sync",
    excerpt:
      "HRMS-scale patterns — feature modules, shared models with OpenAPI codegen, and auth interceptor design for long-lived enterprise applications.",
    category: "Angular",
    readTime: "11 min",
    slug: "angular-enterprise-spa-patterns",
  },
  {
    title: "Blazor vs. Angular in 2026: Choosing Full-Stack C# Without Regretting UX Velocity",
    excerpt:
      "A decision matrix for founders and architects — team skills, SEO, component ecosystem, and WASM payload size for greenfield projects.",
    category: "Blazor",
    readTime: "9 min",
    slug: "blazor-vs-angular-2026",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ishan took ownership of our .NET API layer end to end — auth, EF Core performance, and Azure deployment. We went from frequent production fires to predictable releases. He documents decisions and doesn't disappear after launch.",
    name: "Engineering Manager",
    title: "Engineering Lead",
    company: "Fintech · Crytonix",
    tags: ["On-time delivery", "Clean architecture", "Production support"],
  },
  {
    quote:
      "Strong on system design and pragmatic about tradeoffs. His PRs are reviewable, tested, and aligned with clean architecture — not spaghetti tied to deadlines.",
    name: "Senior Software Engineer",
    title: "Peer Reviewer",
    company: "Enterprise Client · iFour",
    tags: ["Clear communication", "Technical reliability"],
  },
  {
    quote:
      "We needed backend APIs and admin flows delivered fast without building a large team. Ishan scoped the work clearly, shipped in milestones, and handed us a codebase we could extend.",
    name: "Product Lead",
    title: "Technical Stakeholder",
    company: "Enterprise HRMS Project",
    tags: ["Scoped delivery", "Maintainable handoff"],
  },
];

// ─── Legacy stack items (kept for compatibility) ─────────────────────────────

export const STACK_ITEMS: StackItem[] = [
  { icon: "code_blocks", label: ".NET 8 / C#" },
  { icon: "terminal", label: "Python" },
  { icon: "web_asset", label: "Angular / TS" },
  { icon: "cloud", label: "Azure / AWS" },
  { icon: "storage", label: "SQL Server / PG" },
  { icon: "layers", label: "Docker / K8s" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Kinetiq",
    role: "Software Engineer",
    period: "Oct 2025 – Present",
    description:
      "Architecting global data ingestion, media monitoring, and speech-to-text infrastructure.",
    current: true,
    bullets: [
      "Built distributed ingestion pipelines that process millions of OTT metadata records daily across global broadcast markets.",
      "Cut end-to-end monitoring latency by moving batch ETL to an event-driven architecture on Python and message queues.",
      "Defined API contracts with downstream analytics teams, speeding up delivery across teams.",
      "Expanding the platform with speech-to-text processing, Python data scraping, Ansible automation, and Prometheus and Grafana monitoring.",
    ],
  },
  {
    company: "Crytonix Remote Tech Works",
    role: "Software Engineer",
    period: "Sep 2022 – Sep 2025",
    description: "Scaling fintech platforms and automating compliance workflows.",
    bullets: [
      "Engineered high-concurrency .NET Core APIs for a mobile wallet serving 10,000+ daily active users at a 99.9% uptime SLA.",
      "Automated KYC verification with OCR and Identity Server, cutting manual processing errors by 35%.",
      "Architected a utility payment gateway handling 5,000+ daily transactions, with custom billing logic for regional grid operators.",
    ],
  },
  {
    company: "iFour Technolab Pvt. Ltd.",
    role: "Junior Software Engineer",
    period: "Mar 2021 – Aug 2022",
    description: "Enterprise HRMS development and logistics optimization.",
    bullets: [
      "Built a full-stack HRMS with Angular and .NET Core that streamlined leave and attendance for 100+ enterprise users.",
      "Delivered real-time shipment tracking APIs on .NET Core and SQL Server, improving logistics efficiency by 25%.",
      "Created a C# and Selenium desktop automation suite for indexing streaming content, significantly reducing manual cataloguing.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Gujarat Technological University",
    degree: "B.E. in Information Technology",
    period: "2017 – 2021",
  },
];

export const PROJECTS: Project[] = CASE_STUDIES.map((cs) => ({
  title: cs.title,
  description: cs.tagline,
  tags: cs.tags,
  sourceUrl: cs.sourceUrl,
}));

// ─── Architecture Diagram ────────────────────────────────────────────────────

export type ArchNodeType = "gateway" | "service" | "queue" | "database" | "search";

export interface ArchNode {
  id: string;
  label: string;
  type: ArchNodeType;
  x: number;
  y: number;
  detail: string;
}

export interface ArchEdge {
  from: string;
  to: string;
}

export const ARCH_NODES: ArchNode[] = [
  {
    id: "gateway",
    label: "API Gateway",
    type: "gateway",
    x: 450,
    y: 58,
    detail:
      "Single entry point for all inbound client traffic. Handles JWT auth, per-client rate-limiting via a Redis sliding-window counter, and request routing to downstream services. Deployed behind Azure Front Door for global anycast and DDoS mitigation.",
  },
  {
    id: "dotnet",
    label: ".NET Core API",
    type: "service",
    x: 130,
    y: 220,
    detail:
      "High-concurrency domain service built on .NET 8 with MediatR + CQRS. Uses System.Threading.Channels for internal backpressure and async/await throughout. Horizontal pod autoscaling on AKS — 2 → 20 replicas driven by CPU and queue-depth custom metrics.",
  },
  {
    id: "azure-fn",
    label: "Azure Functions",
    type: "service",
    x: 450,
    y: 220,
    detail:
      "Event-driven serverless compute triggered by Service Bus messages. Handles media-metadata enrichment and scheduled aggregation jobs. Consumption plan with a per-function concurrency cap prevents downstream rate errors during spikes.",
  },
  {
    id: "python",
    label: "Python Worker",
    type: "service",
    x: 770,
    y: 220,
    detail:
      "Long-running crawlers built with asyncio + aiohttp for concurrent scraping across 200+ source domains. Deployed as K8s Jobs with exponential back-off retry. Key challenge: adaptive delay tuning and rotating proxies to handle anti-bot fingerprinting.",
  },
  {
    id: "sql",
    label: "SQL / Postgres",
    type: "database",
    x: 130,
    y: 385,
    detail:
      "Primary transactional store for user, billing, and audit records. Read replicas handle all reporting traffic. Optimised critical paths by rewriting N+1 ORM calls to batched raw SQL and adding covering indexes — p99 write latency dropped 60%.",
  },
  {
    id: "rabbit",
    label: "RabbitMQ",
    type: "queue",
    x: 450,
    y: 385,
    detail:
      "Message broker decoupling producers from consumers. Durable queues, manual ACK, and dead-letter exchanges for poison-message handling. Solved ordering requirements for partition-keyed streams via a consistent-hash exchange plugin.",
  },
  {
    id: "elastic",
    label: "Elasticsearch",
    type: "search",
    x: 770,
    y: 385,
    detail:
      "Full-text search and analytics layer for ingested OTT metadata. ILM policies tier data hot → warm → cold automatically. Shard pre-warming and scheduled forcemerge reduced search latency by 40% during high-ingest windows.",
  },
];

export const ARCH_EDGES: ArchEdge[] = [
  { from: "gateway", to: "dotnet" },
  { from: "gateway", to: "azure-fn" },
  { from: "gateway", to: "python" },
  { from: "dotnet", to: "sql" },
  { from: "dotnet", to: "rabbit" },
  { from: "azure-fn", to: "rabbit" },
  { from: "python", to: "rabbit" },
  { from: "rabbit", to: "elastic" },
];

// ─── Upskilling Timeline ──────────────────────────────────────────────────────

export interface UpskillingEntry {
  date: string;
  topic: string;
  category: string;
  description: string;
}

export const UPSKILLING: UpskillingEntry[] = [
  {
    date: "Apr 2026",
    topic: "AI Integrations & LLM Orchestration",
    category: "AI",
    description:
      "Exploring LangChain and Semantic Kernel to build context-aware pipelines on Azure OpenAI and OpenAI APIs. Focused on RAG architectures, prompt engineering patterns, and grounding strategies.",
  },
  {
    date: "Feb 2026",
    topic: "Advanced System Design Patterns",
    category: "Architecture",
    description:
      "Deep-dive into CQRS, Event Sourcing, and the Saga pattern for distributed systems — with emphasis on failure isolation, idempotency guarantees, and handling eventual consistency.",
  },
  {
    date: "Dec 2025",
    topic: "Kubernetes & Cloud-Native Observability",
    category: "DevOps",
    description:
      "Helm chart authoring, k8s operator patterns, and instrumenting distributed tracing with OpenTelemetry — wired into Grafana + Loki + Tempo for full-stack observability.",
  },
  {
    date: "Oct 2025",
    topic: "Advanced C# — High-Performance Internals",
    category: "Backend",
    description:
      "Source generators, Span<T>/Memory<T> for allocation-free hot paths, and optimising async pipelines with System.Threading.Channels for structured producer-consumer workflows.",
  },
  {
    date: "Aug 2025",
    topic: "MongoDB Atlas & Aggregation Pipelines",
    category: "Database",
    description:
      "Mastered the aggregation pipeline for real-time analytics, faceted search, and full-text relevance scoring with Atlas Search. Atlas Triggers for event-driven data processing.",
  },
];

// ─── Unplugged — Hobbies ──────────────────────────────────────────────────────

export interface HobbyItem {
  emoji: string;
  title: string;
  description: string;
  accent: string;
}

export const HOBBIES: HobbyItem[] = [
  {
    emoji: "🎸",
    title: "Ukulele",
    description:
      "Chords and fingerpicking between deploys. A small instrument with a familiar lesson: iterate slowly until it sounds right.",
    accent: "hsl(35 80% 55%)",
  },
  {
    emoji: "🏍️",
    title: "Motorcycling",
    description:
      "Open roads, late-night rides, no notifications. Some of my clearest system-design thinking happens between second and third gear.",
    accent: "hsl(183 100% 47%)",
  },
  {
    emoji: "🥾",
    title: "Hiking & Trekking",
    description:
      "No signal, no IDE, just elevation and a mind that finally stops context-switching. The Western Ghats are a reliable reset.",
    accent: "hsl(145 55% 45%)",
  },
  {
    emoji: "🛹",
    title: "Skateboarding",
    description:
      "Balance, repetition, and plenty of falls until muscle memory kicks in. A different medium, the same feedback loop as learning any hard skill.",
    accent: "hsl(250 73% 60%)",
  },
  {
    emoji: "🃏",
    title: "Poker",
    description:
      "Probability, position, and reading patterns under pressure. Tight and aggressive at the table, with the same discipline when I weigh architectural bets.",
    accent: "hsl(0 70% 55%)",
  },
  {
    emoji: "🏎️",
    title: "Go-Karting",
    description:
      "Racing lines, braking points, and a personal best to chase. Low stakes, high focus, and the closest thing to profiling a hot path.",
    accent: "hsl(38 90% 55%)",
  },
  {
    emoji: "🔧",
    title: "DIY",
    description:
      "Fixing, building, and hacking on physical things when screens get loud. Soldering irons and Allen keys: offline debugging for the real world.",
    accent: "hsl(300 55% 60%)",
  },
];
