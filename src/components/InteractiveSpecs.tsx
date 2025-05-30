
import { useState } from "react";
import { Battery, Camera, Cpu } from "lucide-react";

const InteractiveSpecs = () => {
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null);

  const specs = [
    {
      icon: Battery,
      title: "Battery Life",
      value: "5300mAh",
      percentage: 95,
      color: "from-emerald-500 to-green-400",
      glowColor: "shadow-emerald-500/50",
      hoverText: "All-day power with intelligent optimization"
    },
    {
      icon: Camera,
      title: "Camera Quality",
      value: "108MP",
      percentage: 98,
      color: "from-purple-500 to-violet-400",
      glowColor: "shadow-purple-500/50",
      hoverText: "Professional photography with AI enhancement"
    },
    {
      icon: Cpu,
      title: "Performance",
      value: "QuantumCore X7",
      percentage: 100,
      color: "from-blue-500 to-cyan-400",
      glowColor: "shadow-blue-500/50",
      hoverText: "Lightning-fast processing and gaming"
    }
  ];

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Performance Specs
          </h3>
          <p className="text-gray-400 text-lg">
            Hover to explore each specification
          </p>
        </div>

        {/* Interactive Specs Grid */}
        <div className="space-y-8">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon;
            const isHovered = hoveredSpec === index;
            
            return (
              <div
                key={index}
                className={`relative p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 transition-all duration-500 cursor-pointer group hover:scale-[1.02] ${
                  isHovered ? `shadow-2xl ${spec.glowColor}` : 'shadow-lg shadow-black/20'
                }`}
                onMouseEnter={() => setHoveredSpec(index)}
                onMouseLeave={() => setHoveredSpec(null)}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  {/* Left Side - Icon and Info */}
                  <div className="flex items-center space-x-4">
                    {/* Animated Icon Container */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Spec Info */}
                    <div className="space-y-1">
                      <h4 className="text-xl font-semibold text-white transition-all duration-300">
                        {spec.title}
                      </h4>
                      
                      {/* Dynamic Text Content */}
                      <div className="relative h-6 overflow-hidden">
                        {/* Default Value */}
                        <p className={`text-gray-400 font-medium transition-all duration-300 ${
                          isHovered ? 'opacity-0 translate-y-[-100%]' : 'opacity-100 translate-y-0'
                        }`}>
                          {spec.value}
                        </p>
                        
                        {/* Hover Text */}
                        <p className={`absolute top-0 left-0 text-gray-300 font-medium transition-all duration-300 ${
                          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                        }`}>
                          {spec.hoverText}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Progress Bar */}
                  <div className="flex-1 max-w-xs ml-8">
                    <div className="relative">
                      {/* Background Bar */}
                      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                        {/* Progress Fill */}
                        <div 
                          className={`h-full bg-gradient-to-r ${spec.color} rounded-full transition-all duration-700 ease-out ${
                            isHovered ? 'shadow-lg' : ''
                          }`}
                          style={{ 
                            width: `${spec.percentage}%`,
                            transform: isHovered ? 'scaleY(1.2)' : 'scaleY(1)'
                          }}
                        />
                      </div>
                      
                      {/* Percentage Label */}
                      <div className={`absolute -top-8 right-0 text-sm font-bold transition-all duration-300 ${
                        isHovered ? `text-transparent bg-clip-text bg-gradient-to-r ${spec.color}` : 'text-gray-400'
                      }`}>
                        {spec.percentage}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Glow Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${spec.color} rounded-full transition-all duration-500 ${
                  isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <span>Real-time performance metrics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSpecs;
