import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1cN-M3bWcEoPf1cwWlgfAg-DCtsyFihMO";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Status: Available</span>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Ishan Sarvaiya
            </h1>
            <div className="w-20 h-px bg-border mx-auto" />
            <p className="text-xl md:text-2xl font-medium text-primary">
              Senior Full Stack Engineer
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Architecting high-concurrency systems for Media Intelligence and Fintech. 
            Specialized in .NET 8, Distributed Messaging, and Data Observability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
              className="border-border hover:bg-secondary px-8 py-6 text-base font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
