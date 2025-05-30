
import { camera, battery, lightning } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: camera,
      title: "108MP Triple AI Camera",
      description: "Perfect shots day or night",
      details: "Advanced computational photography with AI scene detection"
    },
    {
      icon: lightning,
      title: "90W Fast Charging",
      description: "From 0 to 100% in under 30 minutes",
      details: "Revolutionary charging technology with intelligent battery management"
    },
    {
      icon: battery,
      title: "QuantumCore X7 Processor",
      description: "Game, stream, and create without limits",
      details: "Next-generation 4nm chipset with AI acceleration"
    }
  ];

  const specs = [
    { label: "144Hz AMOLED Display", value: "144", unit: "Hz" },
    { label: "5300mAh Battery", value: "5300", unit: "mAh" },
    { label: "2K HDR10+ Visuals", value: "2K", unit: "HDR10+" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-slate-900/50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Crafted with Precision
          </h2>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
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
                className={`relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer ${
                  hoveredFeature === index ? 'shadow-2xl shadow-purple-500/20' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                
                {/* Additional Details on Hover */}
                {hoveredFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center p-6 animate-fade-in">
                    <p className="text-white text-center font-medium">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Animated Specs Counter */}
        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {spec.value}
              </div>
              <div className="text-lg text-gray-300 font-medium">
                {spec.label}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-2xl">
            Experience the Future Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
