import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Kinetiq",
      role: "Software Engineer",
      period: "Oct 2025 – Present",
      location: "Remote",
      current: true,
      achievements: [
        "Developing distributed Ad-Harvesting engines for Linear TV and OTT media using .NET 8 and Python.",
        "Orchestrating asynchronous data pipelines with RabbitMQ to handle high-volume media metadata.",
        "Implementing ELK Stack (Elasticsearch & Kibana) for real-time observability and data visualization.",
        "Managing cross-cloud deployments on Azure and AWS."
      ]
    },
    {
      company: "Crytonix Remote Tech Works",
      role: "Software Engineer",
      period: "Sep 2022 – Sep 2025",
      location: "Remote",
      current: false,
      achievements: [
        "Led backend for a Mobile Wallet platform serving 10,000+ daily users.",
        "Engineered an OCR-driven KYC System, reducing manual processing errors by 35%.",
        "Migrated legacy monoliths into 6+ Microservices for increased fault tolerance.",
        "Developed secure billing APIs supporting 5K+ daily transactions across regions.",
        "Integrated secure authentication protocols (JWT, Identity Server), enhancing user security."
      ]
    },
    {
      company: "iFour Technolab Pvt. Ltd.",
      role: "Junior Software Engineer",
      period: "Mar 2021 – Aug 2022",
      location: "Ahmedabad, India",
      current: false,
      achievements: [
        "Developed features for HR Management Platform supporting leave tracking, KPIs, and attendance for 100+ users.",
        "Built APIs for real-time courier dispatch and tracking, improving operational efficiency by 25%.",
        "Delivered complete backend for Inventory Management System for a client in Ireland.",
        "Optimized database queries and API performance, reducing average response times by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary" />
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 md:pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full -translate-x-1/2 border-2 ${
                  exp.current 
                    ? 'bg-primary border-primary' 
                    : 'bg-card border-border'
                }`} />

                <div className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};