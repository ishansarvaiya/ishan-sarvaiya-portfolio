import { Layers, ExternalLink, Github, Server, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      name: "Mobile Wallet Backend",
      description: "High-throughput payment platform processing transactions, recharges, and gift cards for 10,000+ daily active users.",
      tech: [".NET Core", "SQL Server", "JWT", "Azure"],
      category: "Fintech",
      metrics: "10K+ DAU"
    },
    {
      name: "OCR-Driven KYC System",
      description: "Automated identity verification with OCR processing and bank validation. Reduced manual errors by 35%.",
      tech: [".NET Core", "OCR", "Identity Server", "SQL Server"],
      category: "Security",
      metrics: "35% Error Reduction"
    },
    {
      name: "Billing Payment Gateway",
      description: "Custom billing logic and secure payment APIs supporting 5K+ daily transactions across multiple regions.",
      tech: [".NET Core", "Payment Gateway", "SQL Server"],
      category: "Payments",
      metrics: "5K+ Daily TXN"
    },
    {
      name: "HR Management Platform",
      description: "Enterprise HRMS with modules for leave tracking, KPIs, Kanban boards, and attendance management.",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      category: "Enterprise",
      metrics: "100+ Users"
    },
    {
      name: "Shipment Tracking APIs",
      description: "Real-time tracking and route optimization APIs. Improved delivery operations efficiency by 25%.",
      tech: [".NET Core", "REST APIs", "SQL Server"],
      category: "Logistics",
      metrics: "25% Efficiency Gain"
    },
    {
      name: "Inventory Management",
      description: "Complete backend for inventory, payroll, and shift tracking. Freelance project for Irish enterprise.",
      tech: [".NET Core", "Blazor", "SQL Server"],
      category: "Inventory",
      metrics: "Full Delivery"
    }
  ];

  const featuredProject = {
    name: "Distributed Media Ingestion Engine",
    description: "A high-scale system designed to harvest ad metadata from global broadcasts. Built for the Media Intelligence sector to process and index millions of ad records with millisecond-latency search capabilities.",
    techHighlights: [
      { icon: Server, label: "Python-based Selenium workers for browser automation" },
      { icon: MessageSquare, label: "RabbitMQ for decoupling ingestion from processing" },
      { icon: Search, label: "Elasticsearch for millisecond-latency indexing" }
    ],
    tech: ["Python", ".NET 8", "Selenium", "RabbitMQ", "Elasticsearch", "Kibana", "Azure", "AWS"]
  };

  return (
    <>
      {/* Featured Project */}
      <section id="portfolio" className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Project
              </h2>
            </div>
            <div className="w-20 h-1 bg-primary" />
          </header>

          <div className="bg-secondary/50 border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                Media Intelligence
              </span>
              <span className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded border border-border">
                Active Development
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {featuredProject.name}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {featuredProject.description}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Architecture Highlights
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {featuredProject.techHighlights.map((highlight, idx) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                      <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{highlight.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-muted-foreground bg-card px-3 py-1.5 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Professional Projects
            </h2>
            <p className="text-muted-foreground">
              Enterprise systems built for scale and reliability
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.metrics}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Project */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Open Source
            </h2>
            <p className="text-muted-foreground">
              Personal exploration and automation projects
            </p>
          </header>

          <div className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                Automation
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Hotstar Media Scraper
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A C# desktop application that scrapes movie and show data from Hotstar using Selenium, 
              storing it in SQL Server. Demonstrates automation, web scraping, and backend data management.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["C#", ".NET", "Selenium", "SQL Server", "Automation"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-muted-foreground bg-card px-2 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a
                href="https://github.com/ishansarvaiya/HotstarScraper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View Repository
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};