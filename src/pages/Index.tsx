import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
