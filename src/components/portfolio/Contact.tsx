import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const downloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1cN-M3bWcEoPf1cwWlgfAg-DCtsyFihMO";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Inquiries for technical consultation or senior engineering roles 
            can be directed via Email or LinkedIn.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:ishansarvaiya1@gmail.com"
            className="flex flex-col items-center p-6 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground mb-1">Email</span>
            <span className="text-xs text-muted-foreground text-center">ishansarvaiya1@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/ishansarvaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground mb-1">LinkedIn</span>
            <span className="text-xs text-muted-foreground">Professional Network</span>
          </a>

          <a
            href="https://github.com/ishansarvaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground mb-1">GitHub</span>
            <span className="text-xs text-muted-foreground">Code Repository</span>
          </a>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={downloadResume}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2"
          >
            <Download className="h-4 w-4" />
            Download CV
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ishan Sarvaiya. Built with precision.
          </p>
        </footer>
      </div>
    </section>
  );
};