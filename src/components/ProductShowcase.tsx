
import { useState } from "react";

const ProductShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Stunning Design
          </h2>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Meets Powerful Innovation
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Image */}
          <div className="relative flex justify-center">
            <div 
              className={`relative transition-all duration-500 ${isHovered ? 'scale-105 rotate-2' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src="/lovable-uploads/23431730-8dd8-43be-b28c-69cb01ace5cf.png" 
                alt="RENZON R14 AURA Phone"
                className="w-80 h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Features Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-white">Ultra-thin bezels</h3>
              </div>
              <p className="text-gray-300 text-lg ml-7">
                Immersive 6.8" display with virtually no borders for an uninterrupted viewing experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-white">Aurora Mist glass finish</h3>
              </div>
              <p className="text-gray-300 text-lg ml-7">
                Premium frosted glass back that shifts colors like the northern lights.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-white">Ambient light-reactive back panel</h3>
              </div>
              <p className="text-gray-300 text-lg ml-7">
                Smart lighting system that adapts to your environment for stunning visual effects.
              </p>
            </div>

            {/* Interactive Elements */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <p className="text-white font-medium">💡 Interactive Experience</p>
              <p className="text-gray-300 mt-2">
                Hover over the device to see the interactive preview in action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
