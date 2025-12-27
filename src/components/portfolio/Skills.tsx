import { Code2, Database, Cloud, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["C# (.NET 8/Core)", "Python", "SQL (T-SQL)", "JavaScript"]
    },
    {
      category: "Distributed Systems",
      icon: Database,
      skills: ["RabbitMQ", "Elasticsearch", "Kibana (ELK)", "Redis"]
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      skills: ["Azure", "AWS", "Docker", "Kubernetes", "Linux", "IIS"]
    },
    {
      category: "Specialized",
      icon: Wrench,
      skills: ["Selenium Automation", "RESTful APIs", "Identity Server (OAuth2/JWT)", "Microservices"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical Matrix
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary" />
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded border border-border hover:border-primary/50 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};