import { MessageSquare, Briefcase, Users2, TrendingUp } from "lucide-react";
import { mockData } from "../data/mockData";

export const StatsCards = () => {
  const statsData = [
    {
      title: "Messages",
      value: mockData.stats.messages,
      icon: MessageSquare,
      bgColor: "bg-yellow-400",
      bgGradient: "from-yellow-300 to-yellow-500",
      iconBg: "bg-yellow-300/20",
      iconColor: "text-yellow-800",
      hoverShadow: "hover:shadow-yellow-200/50",
      onClick: () => alert("Messages clicked!")
    },
    {
      title: "Jobs",
      value: mockData.stats.jobs,
      icon: Briefcase,
      bgColor: "bg-blue-600",
      bgGradient: "from-blue-500 to-blue-700",
      iconBg: "bg-blue-400/20",
      iconColor: "text-blue-100",
      hoverShadow: "hover:shadow-blue-200/50",
      onClick: () => alert("Jobs clicked!")
    },
    {
      title: "Candidates",
      value: mockData.stats.candidates,
      icon: Users2,
      bgColor: "bg-green-600",
      bgGradient: "from-green-500 to-green-700",
      iconBg: "bg-green-400/20",
      iconColor: "text-green-100",
      hoverShadow: "hover:shadow-green-200/50",
      onClick: () => alert("Candidates clicked!")
    }
  ];

  return (
    <div className="mb-5">
      <div className="mb-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={stat.title}
            className={`group relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} rounded-2xl shadow-lg ${stat.hoverShadow} hover:shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={stat.onClick}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-2">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl ${stat.iconBg} backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-15 h-15 ${stat.iconColor} group-hover:rotate-12 transition-transform duration-300`} />
                    </div>
                    <div className="text-white/90 font-medium text-sm uppercase tracking-wide">
                      {stat.title}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300 origin-left">
                      {stat.value}
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="flex items-center space-x-2 text-white/80">
                      <TrendingUp className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      <span className="text-sm font-medium">+12% this month</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="hidden sm:block">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 group-hover:bg-white/50 transition-colors duration-300">
                <div className="h-full bg-white/60 group-hover:bg-white transition-colors duration-300 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Add this CSS to your global styles or as a style tag */
const styles = `
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}
`;