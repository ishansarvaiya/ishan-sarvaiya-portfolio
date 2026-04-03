import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/HeroSection";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
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
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
