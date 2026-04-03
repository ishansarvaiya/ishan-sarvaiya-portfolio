import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/HeroSection";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Footer } from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
