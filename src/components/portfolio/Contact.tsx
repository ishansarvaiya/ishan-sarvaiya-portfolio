import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const downloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1cN-M3bWcEoPf1cwWlgfAg-DCtsyFihMO";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-px bg-border mx-auto mb-6" />
          <p className="text-muted-foreground">
            Inquiries for technical consultation or senior engineering roles.
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <Button
            onClick={downloadResume}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2"
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <footer className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ishan Sarvaiya
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href="mailto:ishansarvaiya1@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ishansarvaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ishansarvaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
