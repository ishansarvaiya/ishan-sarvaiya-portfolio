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
