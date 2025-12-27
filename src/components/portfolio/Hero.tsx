import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1cN-M3bWcEoPf1cwWlgfAg-DCtsyFihMO";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 md:py-0 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">systems.engineer</span>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Ishan
              <br />
              <span className="text-primary">Sarvaiya</span>
            </h1>
            <div className="w-20 h-1 bg-primary mt-6" />
          </div>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              Senior Backend & Systems Engineer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Architecting high-concurrency systems for Media Intelligence and Fintech. 
              Specialized in .NET 8, Distributed Messaging, and Data Observability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={scrollToPortfolio} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium group"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-6 text-base font-medium group"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={scrollToContact} 
              className="hover:bg-secondary px-8 py-6 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            {/* Outer ring with glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
            
            {/* Image container */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-border relative overflow-hidden bg-card">
              <img 
                src="https://i.postimg.cc/PfbFTMNY/04-BDD9-E8-0056-4999-B218-E33755855-CF0.jpg" 
                alt="Ishan Sarvaiya - Senior Backend & Systems Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};