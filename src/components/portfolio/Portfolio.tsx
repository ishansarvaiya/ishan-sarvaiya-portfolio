
export const Portfolio = () => {
  const projects = [
    {
      name: "OKDollar",
      description: "Fintech Wallet API with secure payment processing and transaction management",
      tech: [".NET Core", "SQL Server", "JWT", "Azure"],
      category: "Fintech"
    },
    {
      name: "KYC Management System",
      description: "OCR-powered KYC system with automated bank verification checks",
      tech: [".NET Core", "OCR", "SQL Server", "Identity Server"],
      category: "Security"
    },
    {
      name: "Electricity Bill Payment Gateway",
      description: "Integrated payment solution for utility bill processing",
      tech: [".NET Core", "Payment Gateway", "SQL Server"],
      category: "Payment"
    },
    {
      name: "PlusHRM Platform",
      description: "Comprehensive HR management system for leave, WFH, and attendance tracking",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      category: "HRMS"
    },
    {
      name: "MNX Logistics APIs",
      description: "Logistics management APIs for shipment tracking and route optimization",
      tech: [".NET Core", "SQL Server", "REST APIs"],
      category: "Logistics"
    },
    {
      name: "Inventory System",
      description: "Freelance project for Irish client - complete inventory management solution",
      tech: [".NET Core", "SQL Server", "Blazor"],
      category: "Inventory"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <span className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{project.category}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
