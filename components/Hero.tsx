
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-matte-black">
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Left-to-right fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/70 to-transparent z-10" />
        {/* Subtle top-to-bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-matte-black z-10 opacity-80" />
        
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="http://alfaren.ae/images/FRONT.webp" 
          alt="Al Faren Signature Landmark" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-6 mb-12"
          >
            <div className="h-[1px] w-16 bg-gold" />
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold">Dubai &bull; Mumbai &bull; Global</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-[90px] font-serif leading-[1.0] text-white tracking-tighter mb-12"
          >
            Where Vision <br /> <span className="italic text-gold">Meets the Legacy.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl border-l border-gold/40 pl-10 py-2"
            >
              For five decades, Al Faren has been architecting the skyline with institutional landmarks and defining the pinnacle of international luxury.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-start lg:justify-end"
            >
              <div className="flex flex-col items-center space-y-4">
                 <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold rotate-90 mb-12 origin-left translate-x-3">Scroll Narrative</span>
                 <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                   <ArrowDown className="text-gold" size={32} strokeWidth={0.5} />
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Brand Watermark */}
      <div className="absolute bottom-12 left-12 opacity-[0.03] hidden lg:block">
        <span className="text-[15vw] font-serif text-white uppercase tracking-tighter select-none leading-none">Al Faren</span>
      </div>
    </section>
  );
};

export default Hero;
