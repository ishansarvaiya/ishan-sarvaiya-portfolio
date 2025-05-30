
export const Experience = () => {
  const experiences = [
    {
      company: "Crytonix Remote Tech Works Pvt. Ltd.",
      role: "Software Engineer",
      period: "Sep 2022 – Present",
      achievements: [
        "Increased system throughput by 30%",
        "Reduced processing errors by 35%",
        "Reduced average response times by 20%",
        "IoT-Azure demo presentation"
      ]
    },
    {
      company: "iFour Technolab Pvt. Ltd.",
      role: "Junior Software Engineer",
      period: "Mar 2021 – Aug 2022",
      achievements: [
        "Developed scalable web applications using .NET Core",
        "Implemented efficient database solutions with SQL Server",
        "Collaborated in Agile development environment",
        "Contributed to multiple client projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-blue-400 mb-2">{exp.company}</h4>
                </div>
                <span className="text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg">{exp.period}</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
