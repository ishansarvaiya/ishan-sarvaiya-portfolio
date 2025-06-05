export const Experience = () => {
  const experiences = [
    {
      company: "Confidential",
      role: "Software Engineer",
      period: "Sep 2022 – Present",
      achievements: [
        "Led backend development of multiple fintech platforms using .NET Core, boosting system throughput by 30%.",
        "Built and maintained core modules for:",
        "OKDollar (Mobile Wallet) – Developed wallet transaction, recharge, and gift card APIs, serving 10,000+ daily users.",
        "KYC Management System – Implemented identity verification workflows with OCR and bank checks, reducing processing errors by 35%.",
        "Electricity Bill Payment System – Created custom billing logic supporting 5K+ daily transactions across multiple regions.",
        "Developed 6+ microservices, increasing system modularity and enabling independent deployments.",
        "Integrated secure authentication protocols (JWT, Identity Server), enhancing user security.",
        "Collaborated in Agile sprints with DevOps and QA teams, reducing bug fix turnaround by 40%."
      ],
      emoji: "🔥",
      mood: "Currently crushing it here!"
    },
    {
      company: "iFour Technolab Pvt. Ltd.",
      role: "Junior Software Engineer",
      period: "Mar 2021 – Aug 2022",
      achievements: [
        "Contributed to core backend systems for:",
        "PlusHRM (HRMS Platform) – Developed features for leave tracking, WFH, KPIs, Kanban boards, and attendance for 100+ users.",
        "MNX Logistics – Built APIs for real-time courier dispatch and tracking, improving operational efficiency by 25%.",
        "Inventory Management System (Freelance project) – Delivered complete backend for inventory, payroll, and employee shift tracking for a client in Ireland.",
        "Presented a live IoT-Azure integration demo using Raspberry Pi for real-time data logging.",
        "Optimized database queries and API performance, reducing average response times by 20%.",
        "Mentored junior developers, supporting onboarding and team collaboration."
      ],
      emoji: "🌱",
      mood: "Where it all began — junior but eager!"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-purple-400 transition-colors cursor-default">
            Experience 💼
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse" />
          <p className="text-gray-400 mt-4 italic">My journey through the tech universe! 🚀</p>
        </header>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-2xl animate-bounce">{exp.emoji}</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-1">{exp.company}</h4>
                  <p className="text-sm text-gray-500 italic">{exp.mood}</p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">
                  {exp.period}
                </span>
              </div>

              <ul className="grid md:grid-cols-2 gap-4 list-none">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 bg-gray-700/10 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  >
                    <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-400 italic">And the adventure continues... 🎢</p>
        </footer>
      </div>
    </section>
  );
};
