
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-blue-400 transition-colors cursor-default">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-102 hover:shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Ishan, a backend developer from India with over 4 years of experience in building scalable web applications using .NET Core and SQL Server. 
                <span className="text-blue-400 font-medium"> I'm passionate about clean architecture, microservices, and creating performant backend systems.</span>
              </p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-102 hover:shadow-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of work, I explore <span className="text-purple-400 font-medium">AI</span> 🤖, 
                <span className="text-red-400 font-medium"> motorsports</span> 🏎️, 
                <span className="text-yellow-400 font-medium"> philosophy</span> 🤔, and 
                <span className="text-green-400 font-medium"> travel</span> ✈️. 
                <span className="text-gray-400 italic"> I believe in continuous learning and staying updated with the latest technological advancements... and yes, I do read the documentation! 📚</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <h3 className="text-xl font-semibold mb-6 text-blue-400 group-hover:animate-pulse">🎓 Education</h3>
            <div className="space-y-4">
              <div className="hover:bg-gray-800/50 p-4 rounded-lg transition-all duration-200">
                <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">B.E. in Information Technology</h4>
                <p className="text-gray-400">Sardar Vallabhbhai Patel Institute of Technology (GTU)</p>
                <p className="text-gray-400">2017 – 2021</p>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-blue-400 font-medium">CGPA: 8.28/10</p>
                  <span className="text-yellow-400 animate-bounce">⭐</span>
                </div>
                <p className="text-sm text-gray-500 italic mt-2">
                  Fun fact: Survived 4 years of engineering without losing my sanity! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
