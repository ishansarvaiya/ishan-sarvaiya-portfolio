import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/HeroSection";
import { ChooseYourPath } from "@/components/portfolio/ChooseYourPath";
import { StackArchitecture } from "@/components/portfolio/StackArchitecture";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { SocialProofSection } from "@/components/portfolio/SocialProofSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { LoadBalancerWidget } from "@/components/portfolio/LoadBalancerWidget";
import { UnpluggedSection } from "@/components/portfolio/UnpluggedSection";
import { Footer } from "@/components/portfolio/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ChooseYourPath />
        <StackArchitecture />
        <CaseStudies />
        <ExperienceSection />
        <CertificationsSection />
        <SocialProofSection />
        <EducationSection />
        <LoadBalancerWidget />
        <UnpluggedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
