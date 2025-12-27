export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Angular", "TypeScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: [".NET 8", "C#", "Python", "Microservices", "RESTful APIs"]
    },
    {
      category: "Data & Messaging",
      skills: ["SQL Server", "PostgreSQL", "RabbitMQ", "Redis", "ELK Stack (Elasticsearch, Kibana)"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "TeamCity"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Technical Matrix
          </h2>
          <div className="w-20 h-px bg-border" />
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-2 rounded border border-border hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
