import { Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Kinetiq",
      role: "Software Engineer",
      period: "Oct 2025 – Present",
      current: true,
      impact: "Architecting global data ingestion and media monitoring infrastructure."
    },
    {
      company: "Crytonix Remote Tech Works",
      role: "Software Engineer",
      period: "Sep 2022 – Sep 2025",
      current: false,
      impact: "Scaling fintech platforms and automating compliance workflows."
    },
    {
      company: "iFour Technolab Pvt. Ltd.",
      role: "Junior Software Engineer",
      period: "Mar 2021 – Aug 2022",
      current: false,
      impact: "Enterprise HRMS development and logistics optimization."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <div className="w-20 h-px bg-border" />
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-1/2 ${
                  exp.current 
                    ? 'bg-primary' 
                    : 'bg-border'
                }`} />

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
