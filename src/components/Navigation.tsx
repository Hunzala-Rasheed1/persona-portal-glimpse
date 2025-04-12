
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';
import { Menu, X, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 lg:px-16 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gradient">PersonaScope</Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-200 hover:text-purple transition-colors">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-purple transition-colors">About</Link>
          <Link to="/features" className="text-gray-200 hover:text-purple transition-colors">Features</Link>
          <Link to="/contact" className="text-gray-200 hover:text-purple transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Button 
                variant="ghost" 
                className="text-gray-200 hover:text-purple hover:bg-white/5"
                asChild
              >
                <Link to="/chat">Chat</Link>
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/profile">
                  <User className="mr-2 h-4 w-4" /> 
                  {user?.name?.split(' ')[0] || 'Profile'}
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-gray-200 hover:text-purple hover:bg-white/5"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity"
                asChild
              >
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu} className="text-gray-200">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-glass rounded-lg p-4 absolute left-4 right-4 z-50">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-200 hover:text-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-200 hover:text-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="text-gray-200 hover:text-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-200 hover:text-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="border-t border-white/10 pt-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/chat" 
                    className="block py-2 text-gray-200 hover:text-purple transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Chat
                  </Link>
                  <Button 
                    className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity w-full mt-2"
                    asChild
                  >
                    <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                      <User className="mr-2 h-4 w-4" /> 
                      {user?.name?.split(' ')[0] || 'Profile'}
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block py-2 text-gray-200 hover:text-purple transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Button 
                    className="bg-gradient-to-r from-purple to-teal hover:opacity-90 transition-opacity w-full mt-2"
                    asChild
                  >
                    <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
