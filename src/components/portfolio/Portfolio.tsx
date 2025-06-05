
export const Portfolio = () => {
  const projects = [
    {
      name: "OKDollar 💰",
      description: "Fintech Wallet API with secure payment processing and transaction management. Because who doesn't love secure money transfers?",
      tech: [".NET Core", "SQL Server", "JWT", "Azure"],
      category: "Fintech",
      mood: "💸 Ka-ching!"
    },
    {
      name: "KYC Management System 🔍",
      description: "OCR-powered KYC system with automated bank verification checks. Making identity verification less boring, one OCR at a time!",
      tech: [".NET Core", "OCR", "SQL Server", "Identity Server"],
      category: "Security",
      mood: "🕵️ Detective mode ON"
    },
    {
      name: "Electricity Bill Payment Gateway ⚡",
      description: "Integrated payment solution for utility bill processing. Keeping the lights on, one API call at a time!",
      tech: [".NET Core", "Payment Gateway", "SQL Server"],
      category: "Payment",
      mood: "💡 Bright ideas"
    },
    {
      name: "PlusHRM Platform 👥",
      description: "Comprehensive HR management system for leave, WFH, and attendance tracking. Making HR less scary since 2022!",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      category: "HRMS",
      mood: "🏠 Work from anywhere"
    },
    {
      name: "MNX Logistics APIs 🚚",
      description: "Logistics management APIs for shipment tracking and route optimization. Moving packages and moving hearts!",
      tech: [".NET Core", "SQL Server", "REST APIs"],
      category: "Logistics",
      mood: "📦 Special delivery"
    },
    {
      name: "Inventory System 📊",
      description: "Freelance project for Irish client - complete inventory management solution. Sláinte to organized inventory!",
      tech: [".NET Core", "SQL Server", "Blazor"],
      category: "Inventory",
      mood: "🍀 Lucky project"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-green-400 transition-colors cursor-default">
            Portfolio 🎨
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
          <p className="text-gray-400 mt-4 italic">
            My digital creations - each one crafted with love, coffee, and probably too much Stack Overflow! ☕
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-between items-start">
                <span className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full hover:bg-blue-400/20 transition-colors">
                  {project.category}
                </span>
                <div className="group-hover:animate-bounce">
                  <span className="text-xs text-gray-500 italic">{project.mood}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 hover:text-white transition-all duration-200 hover:scale-110"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            More projects brewing in the code kitchen... 👨‍💻🍳
          </p>
        </div>
      </div>
    </section>
  );
};
