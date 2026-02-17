import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';

export const ProjectTicker: React.FC = () => {
  // Duplicate projects for seamless infinite scroll
  const tickerItems = [...PROJECTS, ...PROJECTS];

  return (
    <div className="bg-matte-black py-12 border-y border-white/5 overflow-hidden">
      <div className="flex">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {tickerItems.map((project, idx) => (
            <div key={idx} className="flex items-center mx-12 group cursor-pointer">
              <div className="w-16 h-10 lg:w-24 lg:h-14 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mr-6">
                <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>
              <span className="text-white/20 text-[10px] lg:text-xs uppercase tracking-[0.4em] font-bold group-hover:text-gold transition-colors">{project.name}</span>
              <span className="mx-6 text-gold/30">•</span>
              <span className="text-white/10 text-[8px] lg:text-[10px] uppercase tracking-widest">{project.location}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};