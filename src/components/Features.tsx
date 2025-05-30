
import { Camera, Battery, Zap } from "lucide-react";
import { useState } from "react";
import InteractiveSpecs from "./InteractiveSpecs";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Camera,
      title: "108MP Triple AI Camera",
      description: "Perfect shots day or night",
      details: "Advanced computational photography with AI scene detection"
    },
    {
      icon: Zap,
      title: "90W Fast Charging",
      description: "From 0 to 100% in under 30 minutes",
      details: "Revolutionary charging technology with intelligent battery management"
    },
    {
      icon: Battery,
      title: "QuantumCore X7 Processor",
      description: "Game, stream, and create without limits",
      details: "Next-generation 4nm chipset with AI acceleration"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
            Crafted with Precision
          </h2>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Powered by Intelligence
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-900/90 cursor-pointer ${
                  hoveredFeature === index ? 'shadow-2xl shadow-purple-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  {feature.description}
                </p>
                
                {/* Additional Details on Hover */}
                {hoveredFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center p-6 animate-fade-in">
                    <p className="text-white text-center font-medium">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Specs Section */}
        <InteractiveSpecs />

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl">
            Experience the Future Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
