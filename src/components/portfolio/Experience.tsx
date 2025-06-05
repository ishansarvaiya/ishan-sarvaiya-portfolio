
export const Experience = () => {
  const experiences = [
    {
      company: "Crytonix Remote Tech Works Pvt. Ltd.",
      role: "Software Engineer",
      period: "Sep 2022 – Present",
      achievements: [
        "Increased system throughput by 30% 🚀",
        "Reduced processing errors by 35% 🐛➡️✨",
        "Reduced average response times by 20% ⚡",
        "IoT-Azure demo presentation 🎯"
      ],
      emoji: "🔥",
      mood: "Currently crushing it here!"
    },
    {
      company: "iFour Technolab Pvt. Ltd.",
      role: "Junior Software Engineer",
      period: "Mar 2021 – Aug 2022",
      achievements: [
        "Developed scalable web applications using .NET Core 💻",
        "Implemented efficient database solutions with SQL Server 🗄️",
        "Collaborated in Agile development environment 🤝",
        "Contributed to multiple client projects 📈"
      ],
      emoji: "🌱",
      mood: "Where it all began - junior but eager!"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-purple-400 transition-colors cursor-default">
            Experience 💼
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
          <p className="text-gray-400 mt-4 italic">My journey through the tech universe! 🚀</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-102 hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.5}s` }}>
                      {exp.emoji}
                    </span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-2 group-hover:animate-pulse">{exp.company}</h4>
                  <p className="text-sm text-gray-500 italic">{exp.mood}</p>
                </div>
                <span className="text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg hover:bg-blue-900/30 transition-colors">
                  {exp.period}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-3 hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-200 group/item"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:animate-pulse"></div>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            And the adventure continues... 🎢
          </p>
        </div>
      </div>
    </section>
  );
};
