
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 to-teal/10 opacity-50"></div>
      <div className="max-w-4xl mx-auto relative z-10 bg-glass rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-gradient">Ready to Discover Your Personality?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Start your journey of self-discovery today. Our AI-powered chatbot is ready to analyze your personality traits and provide valuable insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-gradient-to-r from-purple to-teal hover:opacity-90 px-8 py-6 text-lg">
            Start Free Analysis
          </Button>
          <Button variant="outline" className="border-purple hover:border-teal px-8 py-6 text-lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
