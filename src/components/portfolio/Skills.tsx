
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C#", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks",
      skills: [".NET Core", "MVC", "LINQ", "EF", "AJAX"]
    },
    {
      category: "Auth & Security",
      skills: ["JWT", "Identity Server"]
    },
    {
      category: "Databases",
      skills: ["SQL Server"]
    },
    {
      category: "Tools",
      skills: ["Git", "SVN", "Jira", "Postman", "Swagger"]
    },
    {
      category: "Other",
      skills: ["IIS", "Linux", "Azure", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="text-sm text-white bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-600 hover:border-blue-500/50 transition-colors duration-300">
                    {skill}
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
