
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, ArrowRight } from 'lucide-react';
import { PROJECTS, BOARD_MEMBERS, NARRATIVE, SERVICES, OFFICES } from '../constants';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

// Local Knowledge Base derived from the website's content
const KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'company', 'al faren', 'partners', 'about'],
    answer: "Al Faren & Partners is an ultra-premium international architecture and masterplanning firm. We specialize in institutional landmarks and ultra-luxury residential estates across Dubai and India."
  },
  {
    keywords: ['founder', 'shashi', 'prabhu', 'started'],
    answer: "The firm was founded in 1974 by Shashi Prabhu, a visionary architect who has designed some of India's most iconic landmarks, including the Wankhede Stadium."
  },
  {
    keywords: ['years', 'experience', 'old', 'history', 'legacy'],
    answer: "We have over 50 years of professional authority, starting with our foundation in Mumbai in 1974."
  },
  {
    keywords: ['dubai', 'studio', 'office', 'uae', 'difc'],
    answer: "Our international design hub is located in the Emirates Financial Towers, DIFC, Dubai. It serves as our conceptual forge for architectural vision."
  },
  {
    keywords: ['india', 'mumbai', 'bkc', 'delhi', 'hyderabad'],
    answer: "Our technical headquarters is in Bandra Kurla Complex (BKC), Mumbai. we also have presence in New Delhi and Hyderabad to oversee execution across the subcontinent."
  },
  {
    keywords: ['services', 'do', 'offer', 'expertise', 'masterplanning', 'hospital', 'stadium'],
    answer: "We specialize in Master Planning, Institutional Landmarks, Ultra-Luxury Estates (over 1,500 villas delivered), and high-precision Healthcare Architecture."
  },
  {
    keywords: ['villas', 'residential', 'home', 'private', 'estates'],
    answer: "We have a legacy of designing over 1,500 signature luxury villas, including 'The Sovereign Palace' in Dubai and the 'Villa Ahmad Estate'."
  },
  {
    keywords: ['stadium', 'sports', 'wankhede', 'cricket'],
    answer: "We are the architects behind the world-renowned Wankhede Stadium, the BCCI Headquarters, and the Rajiv Gandhi International Cricket Stadium."
  },
  {
    keywords: ['hospital', 'healthcare', 'lilavati', 'reliance'],
    answer: "Our healthcare portfolio includes the Lilavati Super Specialty Hospital and the Sir H. N. Reliance Foundation Hospital in Mumbai."
  },
  {
    keywords: ['projects', 'portfolio', 'built', 'landmarks'],
    answer: "Our portfolio spans over 50 million square feet of design footprint, including institutional, infrastructure, healthcare, sports, and residential landmarks."
  },
  {
    keywords: ['board', 'leadership', 'atul', 'anil', 'members'],
    answer: "Our board includes Shashi Prabhu (Founder), Atul Prabhu (Principal Partner, Dubai), and Anil Prabhu (Technical Director, India)."
  },
  {
    keywords: ['contact', 'inquiry', 'email', 'phone', 'reach'],
    answer: "For strategic inquiries, you can reach our Dubai studio at studio@alfaren.com or our Mumbai office at india@alfaren.com. You can also use the Strategic Inquiry form on our website."
  }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Welcome to the Al Faren & Partners Concierge. How may I assist you with information regarding our legacy, services, or global portfolio?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (text.includes(keyword)) {
          score++;
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return bestMatch.answer;
    }

    return "I apologize, but I could not find a specific detail regarding that. Please feel free to ask about our projects, leadership, or global offices, or contact our team directly for a bespoke consultation.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse: Message = { 
        id: (Date.now() + 1).toString(), 
        type: 'bot', 
        text: generateResponse(userMessage.text) 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-matte-black border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-luxury-gray p-6 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <Bot size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-widest leading-none">Al Faren Concierge</h4>
                  <span className="text-gold text-[8px] uppercase tracking-widest font-bold">Autonomous Advisor</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat History */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] flex space-x-3 ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.type === 'user' ? 'bg-white/5 border-white/10' : 'bg-gold/5 border-gold/20'}`}>
                      {msg.type === 'user' ? <User size={14} className="text-white/40" /> : <Bot size={14} className="text-gold" />}
                    </div>
                    <div className={`p-4 text-xs leading-relaxed ${msg.type === 'user' ? 'bg-luxury-gray text-white border border-white/5' : 'bg-matte-black text-white/70 border border-gold/10'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-luxury-gray/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our legacy or projects..."
                  className="w-full bg-matte-black border border-white/10 py-4 pl-4 pr-12 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gold rounded-full shadow-2xl flex items-center justify-center text-black group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.5 }}>
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-4 border-gold animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
