import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/HeroSection";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { UpskillingTimeline } from "@/components/portfolio/UpskillingTimeline";
import { LoadBalancerWidget } from "@/components/portfolio/LoadBalancerWidget";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { UnpluggedSection } from "@/components/portfolio/UnpluggedSection";
import { Footer } from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <UpskillingTimeline />
        <LoadBalancerWidget />
        <ExperienceSection />
        <EducationSection />
        <UnpluggedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
