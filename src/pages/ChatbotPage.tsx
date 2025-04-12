
import React, { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, User, Bot, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm PersonaScope, your AI personality analysis assistant. Start chatting with me, and I'll analyze your communication style to provide insights about your personality traits. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "I notice you use descriptive language. This suggests you might have strong visualization abilities and creativity.",
        "Interesting choice of words. Your communication style indicates you may be analytical and detail-oriented.",
        "Your message length and structure suggest you're thoughtful and deliberate in your communication.",
        "I detect a pattern in your writing that's often associated with extroverted personality types.",
        "The way you express yourself indicates strong emotional intelligence and empathy.",
        "Your communication style suggests you're pragmatic and solution-oriented."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full p-4">
        <div className="bg-glass rounded-xl flex flex-col flex-1 overflow-hidden">
          {/* Chat header */}
          <div className="border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-purple/20 p-2 rounded-full">
                <Bot size={24} className="text-purple" />
              </div>
              <div>
                <h2 className="font-semibold text-white">PersonaScope AI</h2>
                <p className="text-xs text-gray-400">Personality Analysis Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center text-xs px-2 py-1 gap-1 bg-teal/20 text-teal rounded-full">
                <Sparkles size={12} /> AI-Powered
              </span>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] md:max-w-[70%] rounded-2xl p-3 
                  ${message.sender === 'user' 
                    ? 'bg-purple/30 rounded-tr-sm text-white' 
                    : 'bg-white/5 rounded-tl-sm text-gray-200'}
                `}>
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'bot' 
                      ? <Bot size={16} className="text-teal" /> 
                      : <User size={16} className="text-purple" />
                    }
                    <span className="text-xs text-gray-400">
                      {message.sender === 'bot' ? 'PersonaScope AI' : 'You'} • {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4 max-w-[70%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
                className="bg-white/5 border-white/10 text-white"
              />
              <Button 
                onClick={handleSend} 
                className="bg-gradient-to-r from-purple to-teal hover:opacity-90"
                disabled={!input.trim()}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotPage;
