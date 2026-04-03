export interface NavLink {
  label: string;
  href: string;
}

export interface StackItem {
  icon: string;
  label: string;
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

export const NAV_LINKS: NavLink[] = [
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PLAYGROUND", href: "#lb-widget" },
  { label: "UNPLUGGED", href: "#unplugged" },
  { label: "CONTACT", href: "#contact" },
];

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
      "Architecting global data ingestion and media monitoring infrastructure.",
    current: true,
    bullets: [
      "Designed and built distributed media ingestion pipelines processing millions of OTT metadata records daily across global broadcast markets.",
      "Reduced end-to-end media monitoring latency by migrating batch ETL jobs to an event-driven architecture using Python and message queuing.",
      "Collaborated cross-functionally to define API contracts for downstream analytics services, improving inter-team delivery velocity.",
    ],
  },
  {
    company: "Crytonix Remote Tech Works",
    role: "Software Engineer",
    period: "Sep 2022 – Sep 2025",
    description: "Scaling fintech platforms and automating compliance workflows.",
    bullets: [
      "Engineered high-concurrency .NET Core APIs for a mobile wallet platform serving 10,000+ daily active users with 99.9% uptime SLA.",
      "Automated KYC identity verification using OCR integration and Identity Server, cutting manual processing errors by 35%.",
      "Architected a utility payment gateway supporting 5,000+ daily transactions, including custom billing logic for regional grid operators.",
    ],
  },
  {
    company: "iFour Technolab Pvt. Ltd.",
    role: "Junior Software Engineer",
    period: "Mar 2021 – Aug 2022",
    description: "Enterprise HRMS development and logistics optimization.",
    bullets: [
      "Developed a full-stack HRMS using Angular and .NET Core, streamlining leave and attendance workflows for 100+ enterprise users.",
      "Built real-time shipment tracking APIs with .NET Core and SQL Server, improving logistics operations efficiency by 25%.",
      "Delivered a C# + Selenium desktop automation suite for streaming content indexing, reducing manual cataloguing effort significantly.",
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

export const PROJECTS: Project[] = [
  {
    title: "Media Ingestion Engine",
    description:
      "Orchestrated distributed pipelines using Python & RabbitMQ to harvest OTT metadata, achieving millisecond-latency search with Elasticsearch.",
    tags: ["Python", "RabbitMQ", "Elasticsearch", ".NET 8"],
  },
  {
    title: "Mobile Wallet Backend",
    description:
      "Engineered high-concurrency APIs using .NET Core & Azure for 10,000+ daily users, ensuring 99.9% transaction reliability.",
    tags: [".NET Core", "Azure", "SQL Server", "JWT"],
  },
  {
    title: "KYC Management System",
    description:
      "Automated identity verification workflows using OCR & Identity Server, reducing manual processing errors by 35%.",
    tags: [".NET Core", "OCR", "Identity Server", "SQL Server"],
  },
  {
    title: "Utility Payment Gateway",
    description:
      "Architected custom billing logic via .NET Core to support 5,000+ daily transactions across regional utility grids.",
    tags: [".NET Core", "SQL Server", "Payment Gateway"],
  },
  {
    title: "Enterprise HRMS",
    description:
      "Developed a full-stack platform using Angular & .NET, streamlining leave tracking for 100+ enterprise users.",
    tags: ["Angular", ".NET Core", "SQL Server", "Azure"],
  },
  {
    title: "Logistics Tracking APIs",
    description:
      "Built real-time shipment tracking via RESTful APIs, improving delivery operations efficiency by 25%.",
    tags: [".NET Core", "REST APIs", "SQL Server"],
  },
  {
    title: "Automation & Tooling",
    description:
      "Developed a desktop automation suite using C# & Selenium to index streaming content into SQL Server for data analysis.",
    tags: ["C#", "Selenium", "SQL Server", ".NET"],
    sourceUrl: "https://github.com/ishansarvaiya/HotstarScraper",
  },
];

// ─── Architecture Diagram ────────────────────────────────────────────────────

export type ArchNodeType = "gateway" | "service" | "queue" | "database" | "search";

export interface ArchNode {
  id: string;
  label: string;
  type: ArchNodeType;
  /** SVG coordinate — viewBox "0 0 900 440" */
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
    title: "Learning the Ukulele",
    description:
      "Slowly working through chord progressions and fingerpicking patterns between debugging sessions. There's something humbling about being a beginner at something.",
    accent: "hsl(35 80% 55%)",
  },
  {
    emoji: "🏍",
    title: "Late-Night Motorcycle Rides",
    description:
      "The city at 2am is a different world — empty roads, cool air, no notifications. Some of my best architectural decisions have come mid-ride.",
    accent: "hsl(183 100% 47%)",
  },
  {
    emoji: "🎵",
    title: "Music",
    description:
      "Everything from lo-fi hip hop to post-rock to jazz fusion. Music is the background process that keeps everything else running.",
    accent: "hsl(250 73% 60%)",
  },
  {
    emoji: "⛰️",
    title: "Trekking",
    description:
      "No signal, no IDE, just a trail and a tired mind sorting itself out. The Western Ghats are basically my second office.",
    accent: "hsl(145 55% 45%)",
  },
  {
    emoji: "🤖",
    title: "Robotics Tinkering",
    description:
      "Raspberry Pi, Arduino, and salvaged hardware components. The intersection of code and physical feedback loops is endlessly interesting.",
    accent: "hsl(300 55% 60%)",
  },
  {
    emoji: "📖",
    title: "Philosophy & Reading",
    description:
      "Stoicism, existentialism, and the occasional technical deep-dive. Marcus Aurelius and Donald Knuth share a shelf — works better than it sounds.",
    accent: "hsl(45 70% 50%)",
  },
];

