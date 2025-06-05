
import { Mail, Phone, Coffee, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-pink-400 transition-colors cursor-default">
            Contact 📞
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="flex justify-center">
          <div className="space-y-8 max-w-md">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-blue-400 animate-bounce" />
                <h3 className="text-xl font-semibold">Let's Connect! 🤝</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
                <span className="text-purple-400"> Or we can debate whether tabs are better than spaces! 😄</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-gray-900/30 p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">📧 Email (Preferred!)</p>
                  <a 
                    href="mailto:ishansarvaiya1@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors font-medium hover:underline"
                  >
                    ishansarvaiya1@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 italic">I promise to reply faster than my build times! ⚡</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-gray-900/30 p-4 rounded-xl hover:bg-gray-800/40 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">📱 Phone</p>
                  <a 
                    href="tel:+916355344226" 
                    className="text-white hover:text-green-400 transition-colors font-medium hover:underline"
                  >
                    +91 6355344226
                  </a>
                  <p className="text-xs text-gray-500 italic">For urgent bugs or casual tech chats! 📞</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-2xl border border-blue-500/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Coffee className="h-5 w-5 text-yellow-400 animate-bounce" />
                <p className="text-yellow-400 font-medium">Fun Fact</p>
                <Coffee className="h-5 w-5 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              <p className="text-gray-300 text-sm italic">
                Best time to reach me? After my third cup of coffee! ☕☕☕
                <br />
                <span className="text-blue-400">Response time guaranteed to be inversely proportional to caffeine levels! 📈</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
