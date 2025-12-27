import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      name: "Media Ingestion Engine",
      description: "Orchestrated distributed pipelines using Python & RabbitMQ to harvest OTT metadata, achieving millisecond-latency search with Elasticsearch.",
      tech: ["Python", "RabbitMQ", "Elasticsearch", ".NET 8"]
    },
    {
      name: "Mobile Wallet Backend",
      description: "Engineered high-concurrency APIs using .NET Core & Azure for 10,000+ daily users, ensuring 99.9% transaction reliability.",
      tech: [".NET Core", "Azure", "SQL Server", "JWT"]
    },
    {
      name: "KYC Management System",
      description: "Automated identity verification workflows using OCR & Identity Server, reducing manual processing errors by 35%.",
      tech: [".NET Core", "OCR", "Identity Server", "SQL Server"]
    },
    {
      name: "Utility Payment Gateway",
      description: "Architected custom billing logic via .NET Core to support 5,000+ daily transactions across regional utility grids.",
      tech: [".NET Core", "SQL Server", "Payment Gateway"]
    },
    {
      name: "Enterprise HRMS",
      description: "Developed a full-stack platform using Angular & .NET, streamlining leave tracking for 100+ enterprise users.",
      tech: ["Angular", ".NET Core", "SQL Server", "Azure"]
    },
    {
      name: "Logistics Tracking APIs",
      description: "Built real-time shipment tracking via RESTful APIs, improving delivery operations efficiency by 25%.",
      tech: [".NET Core", "REST APIs", "SQL Server"]
    },
    {
      name: "Automation & Tooling",
      description: "Developed a desktop automation suite using C# & Selenium to index streaming content into SQL Server for data analysis.",
      tech: ["C#", "Selenium", "SQL Server", ".NET"],
      github: "https://github.com/ishansarvaiya/HotstarScraper"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Projects
          </h2>
          <div className="w-20 h-px bg-border" />
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {project.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.github && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-foreground p-0 h-auto"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Repository
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
