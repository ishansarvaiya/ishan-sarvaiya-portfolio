
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Ishan, a backend developer from India with over 4 years of experience in building scalable web applications using .NET Core and SQL Server. I'm passionate about clean architecture, microservices, and creating performant backend systems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of work, I explore AI, motorsports, philosophy, and travel. I believe in continuous learning and staying updated with the latest technological advancements.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white">B.E. in Information Technology</h4>
                <p className="text-gray-400">Sardar Vallabhbhai Patel Institute of Technology (GTU)</p>
                <p className="text-gray-400">2017 – 2021</p>
                <p className="text-blue-400 font-medium">CGPA: 8.28/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
