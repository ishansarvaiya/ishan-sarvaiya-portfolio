export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages 💬",
      skills: ["C#", "JavaScript", "HTML5", "CSS3"],
      emoji: "🗣️",
      description: "Speaking fluent code in multiple dialects!"
    },
    {
      category: "Frameworks & Libraries 🏗️",
      skills: [".NET Core", "MVC", "LINQ", "Entity Framework", "AJAX", "jQuery", "ASP.NET Web API"],
      emoji: "⚙️",
      description: "Where structure meets scalability!"
    },
    {
      category: "Auth & Security 🔐",
      skills: ["JWT", "Identity Server"],
      emoji: "🛡️",
      description: "Guarding gates and securing data!"
    },
    {
      category: "Databases & Caching 🗄️",
      skills: ["SQL Server", "EF Core"],
      emoji: "📦",
      description: "Persistent storage and lightning-fast queries!"
    },
    {
      category: "DevOps & Hosting 🌐",
      skills: ["IIS", "Linux", "Docker", "Kubernetes"],
      emoji: "🚀",
      description: "Deploying dreams to production!"
    },
    {
      category: "APIs & Architecture 🔗",
      skills: ["REST APIs", "Microservices", "Swagger", "Postman"],
      emoji: "🧩",
      description: "Connecting systems with elegant endpoints!"
    },
    {
      category: "Version Control & PM 📋",
      skills: ["Git", "SVN", "Jira"],
      emoji: "🗃️",
      description: "Organized chaos with commits and tasks!"
    },
    {
      category: "Workflow & Methodologies 🧠",
      skills: ["Agile", "Scrum", "Code Reviews"],
      emoji: "🔄",
      description: "Writing clean code in clean cycles!"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-400 transition-colors cursor-default">
            Skills 🚀
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
          <p className="text-gray-400 mt-4 italic">
            My digital superpowers – sharpened over countless commits, coffees, and crash reports ☕💥
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
              🤓 <span className="text-purple-400">Pro tip:</span> Always leveling up! Currently exploring cloud-native patterns, distributed systems, and the occasional existential crisis of a `null` reference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
