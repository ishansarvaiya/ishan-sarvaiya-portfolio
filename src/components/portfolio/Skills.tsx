
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages 💬",
      skills: ["C#", "JavaScript", "HTML5", "CSS3"],
      emoji: "🗣️",
      description: "Speaking fluent code!"
    },
    {
      category: "Frameworks 🏗️",
      skills: [".NET Core", "MVC", "LINQ", "EF", "AJAX"],
      emoji: "⚡",
      description: "Building digital skyscrapers!"
    },
    {
      category: "Auth & Security 🔐",
      skills: ["JWT", "Identity Server"],
      emoji: "🛡️",
      description: "Keeping the bad guys out!"
    },
    {
      category: "Databases 🗄️",
      skills: ["SQL Server"],
      emoji: "📊",
      description: "Where data lives happily!"
    },
    {
      category: "Tools 🛠️",
      skills: ["Git", "SVN", "Jira", "Postman", "Swagger"],
      emoji: "🔧",
      description: "My digital toolbox!"
    },
    {
      category: "Other 🎭",
      skills: ["IIS", "Linux", "Azure", "Agile", "Scrum"],
      emoji: "🌟",
      description: "The extras that make magic happen!"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-400 transition-colors cursor-default">
            Skills 🚀
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
          <p className="text-gray-400 mt-4 italic">
            My arsenal of digital superpowers! Collected over years of debugging and Stack Overflow visits 😅
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl group-hover:animate-bounce">{category.emoji}</span>
                <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  {category.category}
                </h3>
              </div>
              
              <p className="text-xs text-gray-500 italic mb-4 group-hover:text-gray-400 transition-colors">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-sm text-white bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-600 hover:border-blue-500/50 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 max-w-2xl mx-auto">
            <p className="text-gray-400 italic">
              🤓 <span className="text-purple-400">Pro tip:</span> I'm always learning new things! 
              Currently exploring the mysteries of AI and trying to understand why my code works on my machine but not in production... 🤷‍♂️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
