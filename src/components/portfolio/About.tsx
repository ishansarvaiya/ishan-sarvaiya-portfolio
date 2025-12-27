import { GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Background
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary" />
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <p className="text-muted-foreground leading-relaxed">
                Backend engineer with 4+ years of experience architecting distributed systems 
                for high-scale applications in Media Intelligence and Fintech sectors.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <p className="text-muted-foreground leading-relaxed">
                Currently focused on building data ingestion pipelines, real-time observability 
                systems, and scalable microservices architectures using .NET 8 and Python.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">
                  B.E. in Information Technology
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sardar Vallabhbhai Patel Institute of Technology (GTU)
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="text-muted-foreground">2017 – 2021</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    CGPA: 8.28/10
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-4 border-t border-border text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};