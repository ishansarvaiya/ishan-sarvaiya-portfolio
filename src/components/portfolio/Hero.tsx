
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ishan
              <br />
              Sarvaiya.
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-300 font-medium">Software Engineer | Backend Specialist</p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              Building scalable solutions in fintech, HRMS, and logistics with 4+ years of experience in the Microsoft tech stack.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToPortfolio}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full absolute -inset-4 blur-xl"></div>
            <div className="w-72 h-72 bg-gray-800 rounded-full border border-gray-700 relative overflow-hidden">
              <img 
                src="/api/placeholder/300/300" 
                alt="Ishan Sarvaiya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
