
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-10 lg:px-16 w-full flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gradient">PersonaScope</Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-200 hover:text-purple transition-colors">Home</Link>
        <Link to="/about" className="text-gray-200 hover:text-purple transition-colors">About</Link>
        <Link to="/features" className="text-gray-200 hover:text-purple transition-colors">Features</Link>
        <Link to="/pricing" className="text-gray-200 hover:text-purple transition-colors">Pricing</Link>
        <Link to="/contact" className="text-gray-200 hover:text-purple transition-colors">Contact</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-200 hover:text-purple hover:bg-white/5">Login</Button>
        <Button className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
