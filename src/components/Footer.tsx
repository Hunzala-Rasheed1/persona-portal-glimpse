
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">PersonaScope</h3>
            <p className="text-gray-400 mb-4">
              AI-powered personality prediction platform that helps individuals understand themselves and others better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@personascope.com</li>
              <li>+1 (123) 456-7890</li>
              <li>123 AI Street, Tech City</li>
              <li>CA 94103, United States</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PersonaScope. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
