
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL hash for simple routing persistence
    window.location.hash = view;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-700 px-6 lg:px-12 py-8 ${
        isScrolled || currentView !== 'home' ? 'bg-matte-black/95 backdrop-blur-xl py-5 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer" onClick={(e) => handleNavClick('home', e)}>
          <span className="text-2xl font-serif tracking-[0.3em] text-white font-bold group-hover:text-gold transition-colors duration-500">AL FAREN</span>
          <span className="text-[9px] tracking-[0.5em] uppercase text-white/40 -mt-1 font-bold">& PARTNERS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-14 text-[10px] font-bold uppercase tracking-[0.4em] items-center text-white/60">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick('home', e)}
            className={`transition-colors duration-300 ${currentView === 'home' ? 'text-gold' : 'hover:text-gold'}`}
          >
            Home
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick('portfolio', e)}
            className={`transition-colors duration-300 ${currentView === 'portfolio' ? 'text-gold' : 'hover:text-gold'}`}
          >
            Portfolio
          </a>
          <a 
            href="#executive-board" 
            onClick={(e) => handleNavClick('executive-board', e)}
            className={`transition-colors duration-300 ${currentView === 'executive-board' ? 'text-gold' : 'hover:text-gold'}`}
          >
            Board
          </a>
          <a 
            href="#dubai-studio-global-hub" 
            onClick={(e) => handleNavClick('dubai-studio', e)}
            className={`transition-colors duration-300 ${currentView === 'dubai-studio' ? 'text-gold' : 'hover:text-gold'}`}
          >
            Dubai Studio
          </a>
          <a 
            href="#india-associates-execution-network" 
            onClick={(e) => handleNavClick('india-associates', e)}
            className={`transition-colors duration-300 ${currentView === 'india-associates' ? 'text-gold' : 'hover:text-gold'}`}
          >
            India Associates
          </a>
          <a href="#contact" className="text-white border border-white/20 px-8 py-3 hover:bg-gold hover:text-black hover:border-gold transition-all duration-500">Inquiry</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-matte-black h-screen w-full flex flex-col items-center justify-center space-y-12 text-2xl font-serif uppercase tracking-[0.2em] z-[90]"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <a href="#home" onClick={(e) => handleNavClick('home', e)} className="hover:text-gold transition-colors">Home</a>
            <a href="#portfolio" onClick={(e) => handleNavClick('portfolio', e)} className="hover:text-gold transition-colors">Portfolio</a>
            <a href="#executive-board" onClick={(e) => handleNavClick('executive-board', e)} className="hover:text-gold transition-colors">Executive Board</a>
            <a href="#dubai-studio" onClick={(e) => handleNavClick('dubai-studio', e)} className="hover:text-gold transition-colors text-center">Dubai Studio</a>
            <a href="#india-associates" onClick={(e) => handleNavClick('india-associates', e)} className="hover:text-gold transition-colors text-center">India Associates</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gold border border-gold/30 px-16 py-6 hover:bg-gold hover:text-black">Inquiry</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
