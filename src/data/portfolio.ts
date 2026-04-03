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
  current?: boolean;
}

export interface Interest {
  icon: string;
  title: string;
  tagline: string;
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
  },
  {
    company: "Crytonix Remote Tech Works",
    role: "Software Engineer",
    period: "Sep 2022 – Sep 2025",
    description: "Scaling fintech platforms and automating compliance workflows.",
  },
  {
    company: "iFour Technolab Pvt. Ltd.",
    role: "Junior Software Engineer",
    period: "Mar 2021 – Aug 2022",
    description: "Enterprise HRMS development and logistics optimization.",
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

export const INTERESTS: Interest[] = [
  {
    icon: "two_wheeler",
    title: "Midnight Rides",
    tagline: "Searching for clarity on empty tarmac.",
  },
  {
    icon: "music_note",
    title: "Ukulele Sessions",
    tagline: "De-stressing through four-string melodies.",
  },
];

export const INTEREST_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0WxJcI9JhQxyq6w1YYogG-saImcZpMDXmA3bQpQed2CQJlkmARt6kRnx2MvptkiqFW8e9SrG_0MerfiowNZNMWeyU04WYIZ4oUEvRgVX__1siIbBzXNGb_UH7iV2cuHP5XuHh5Kz-QzPMDG4Qzb9gk62ognjbFS8ZTqAjrL49hpaQN9bhqkbyjKzuCQPY4VnxLqhOvHNb_r55Gd9aWjJfgurK2TIg_R_Zb7MMdktXsRbLxwPXfaO3P45SiYWl_NiLTiGfTQ1lTlQ",
    alt: "Motorcycle at night",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE0FNqTepPInJEC3Gsx5dFoIVZtpP3MnCE8fysAieC8ULzfNeXmxTK8HWvBYlFxpDyIC-hETy_tcpD8FwKdel2jTWoVTypVvgBENKPELemhrX03CdLQXgteusf6wVj_RJY1nVkiIqDAHpiOe0StoWKxnhEEQ7Nl9pdVIRH_U-h7de_4dkPNP1df7f0kZ1DDpYCd1RvQrcrFaEC-YY-xdvc--85cEqHWQANgTuUHT_jUfx9h0mwU1DxvjweTOomg5iKeLsP9h5SoU4",
    alt: "Ukulele close up",
  },
];
