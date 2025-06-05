export const Portfolio = () => {
  const projects = [
    {
      name: "OKDollar 💰",
      description:
        "Mobile wallet backend powering transactions, recharges, and gift cards for 10,000+ daily users. Developed secure, high-throughput APIs with .NET Core and JWT.",
      tech: [".NET Core", "SQL Server", "JWT", "Azure"],
      category: "Fintech",
      mood: "💸 Handling money like a boss"
    },
    {
      name: "KYC Management System 🔍",
      description:
        "OCR-driven identity verification system with automated bank checks. Reduced manual processing errors by 35% and streamlined customer onboarding.",
      tech: [".NET Core", "OCR", "SQL Server", "Identity Server"],
      category: "Security",
      mood: "🕵️ Verified and secured"
    },
    {
      name: "Electricity Bill Payment Gateway ⚡",
      description:
        "Custom billing logic and secure payment APIs powering 5K+ daily transactions across regions. Optimized backend ensured reliability for critical utility services.",
      tech: [".NET Core", "Payment Gateway", "SQL Server"],
      category: "Payment",
      mood: "💡 Powering digital utilities"
    },
    {
      name: "PlusHRM Platform 👥",
      description:
        "HR management platform with modules for leave tracking, KPIs, Kanban boards, and attendance. Scalable backend supporting 100+ enterprise users.",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      category: "HRMS",
      mood: "🏠 Built for remote and hybrid teams"
    },
    {
      name: "MNX Logistics APIs 🚚",
      description:
        "REST APIs for real-time shipment tracking and route optimization. Improved delivery ops efficiency by 25% and enabled smooth courier coordination.",
      tech: [".NET Core", "SQL Server", "REST APIs"],
      category: "Logistics",
      mood: "📦 Fast lanes only"
    },
    {
      name: "Inventory Management System 📊",
      description:
        "Freelance solution for Irish business. Complete backend for inventory, payroll, and shift tracking with Blazor and .NET Core. Delivered independently.",
      tech: [".NET Core", "SQL Server", "Blazor"],
      category: "Inventory",
      mood: "🍀 From code to commerce"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-green-400 transition-colors cursor-default">
            Portfolio 🎨
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse" />
          <p className="text-gray-400 mt-4 italic">
            My digital creations – crafted with clean code, strong coffee, and way too much Stack Overflow ☕
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-between items-start">
                <span className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full hover:bg-blue-400/20 transition-colors">
                  {project.category}
                </span>
                <span className="text-xs text-gray-500 italic group-hover:animate-bounce">
                  {project.mood}
                </span>
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
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-400 italic">More projects brewing in the code kitchen... 👨‍💻🍳</p>
        </footer>
      </div>
    </section>
  );
};
