import React from 'react';
import { Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black py-16 md:py-20 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-widest text-gold font-bold">AL FAREN</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 -mt-1">& PARTNERS</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Global leaders in institutional real estate development, masterplanning, and strategic land optimization.
            </p>
            <button className="flex items-center text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/30 px-6 py-3 hover:bg-gold hover:text-black transition-all w-fit">
              <Download size={14} className="mr-3" /> Download Profile
            </button>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px]">Dubai Associate</h5>
            <div className="text-white/40 text-xs lg:text-sm space-y-2 font-light">
              <p>Level 32, Emirates Financial Towers</p>
              <p>DIFC, Dubai, UAE</p>
              <p className="pt-2 text-white/60 font-medium tracking-wider">T: +971 4 000 000</p>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px]">India Associate</h5>
            <div className="text-white/40 text-xs lg:text-sm space-y-2 font-light">
              <p>Level 4, Statesman House</p>
              <p>Connaught Place, New Delhi</p>
              <p className="pt-2 text-white/60 font-medium tracking-wider">T: +91 11 0000 0000</p>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px]">Institutional</h5>
            <div className="flex flex-col space-y-2 lg:space-y-3 text-white/40 text-xs lg:text-sm font-light">
               <a href="#" className="hover:text-gold transition-colors">Strategic Portfolio</a>
               <a href="#" className="hover:text-gold transition-colors">Governance</a>
               <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-gold transition-colors">Terms of Engagement</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-center md:text-left">
            &copy; {new Date().getFullYear()} AL FAREN & PARTNERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 md:space-x-8 text-white/40 uppercase tracking-widest text-[8px] md:text-[10px] font-bold">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Bloomberg</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;