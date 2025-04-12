
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] relative flex flex-col justify-center items-center px-4 md:px-10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="mesh-gradient"></div>
        <div className="wave-container animate-wave">
          <img 
            src="/lovable-uploads/3e5f4f2c-35c2-4ac8-9781-dd2762fd92ea.png" 
            alt="Wave background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>
      
      {/* Hero content */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient">Personality Prediction</span>
          <br />
          <span className="text-white">Powered by AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Our revolutionary chatbot leverages the latest in AI technology to provide deep insights into personality traits, helping you understand yourself and others better.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-gradient-to-r from-purple to-teal hover:opacity-90 px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="border-purple hover:border-teal px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
        
        {/* Stats section */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-glass rounded-lg p-6 w-36 animate-float" style={{ animationDelay: "0s" }}>
            <div className="text-3xl font-bold text-gradient">93%</div>
            <div className="text-gray-400 text-sm">Accuracy Rate</div>
          </div>
          <div className="bg-glass rounded-lg p-6 w-36 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="text-3xl font-bold text-gradient">16</div>
            <div className="text-gray-400 text-sm">Traits Analyzed</div>
          </div>
          <div className="bg-glass rounded-lg p-6 w-36 animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-3xl font-bold text-gradient">2.5k+</div>
            <div className="text-gray-400 text-sm">Daily Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
