import { ArrowRight, Coffee, Code, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1cN-M3bWcEoPf1cwWlgfAg-DCtsyFihMO";
    window.open(resumeUrl, '_blank');
  };
  return <section className="min-h-screen flex items-center justify-center px-6 py-8 md:py-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      {/* Floating icons animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-20 left-10 text-blue-400/30 animate-bounce" size={24} style={{
        animationDelay: '0s'
      }} />
        <Coffee className="absolute top-40 right-20 text-purple-400/30 animate-bounce" size={20} style={{
        animationDelay: '1s'
      }} />
        <Zap className="absolute bottom-40 left-20 text-yellow-400/30 animate-bounce" size={18} style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <span className="inline-block hover:scale-105 transition-transform duration-300">Ishan</span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300">Sarvaiya.</span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 animate-pulse"></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-300 font-medium animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              Software Engineer | Backend Specialist | Coffee Enthusiast ☕
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              Building scalable solutions in fintech, HRMS, and logistics with 4+ years of experience. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
          animationDelay: '0.9s'
        }}>
            <Button onClick={scrollToPortfolio} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group">
              <span className="group-hover:animate-pulse">View Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button onClick={downloadResume} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              <span className="group-hover:animate-pulse">Download Resume</span>
            </Button>
            
            <Button variant="outline" onClick={scrollToContact} className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Let's Chat! 👋
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
          <div className="relative group">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full absolute -inset-4 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="w-72 h-72 bg-gray-800 rounded-full border border-gray-700 relative overflow-hidden hover:scale-105 transition-transform duration-300 hover:border-blue-500/50">
              <img src="https://i.postimg.cc/PfbFTMNY/04-BDD9-E8-0056-4999-B218-E33755855-CF0.jpg" alt="Ishan Sarvaiya - Professional yet approachable developer" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
