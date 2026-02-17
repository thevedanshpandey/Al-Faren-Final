import React from 'react';
import { motion } from 'framer-motion';

const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="bg-matte-black py-32 lg:py-56 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Studio Narrative</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.0] tracking-tighter">
                Authority in <br /> <span className="gold-gradient italic">Complex Geometry.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-white/60 text-xl font-light leading-relaxed max-w-xl">
              <p>
                Al Faren & Partners is a globally established architecture and masterplanning firm specialized in high-scale institutional developments and ultra-luxury residential ecosystems.
              </p>
              <p>
                Operating with a unified strategy from our <span className="text-white font-medium">Dubai Conceptual Hub</span> and <span className="text-white font-medium">Mumbai Technical Headquarters</span>, we have delivered 50 Million+ square feet of design excellence.
              </p>
              <p>
                Our philosophy balances visionary aesthetic ambition with the rigorous technical governance required for sovereign-scale projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-gold font-serif text-4xl mb-2 italic">Institutional</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Museums & Infrastructure</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-4xl mb-2 italic">Luxury</h4>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">1500+ Signature Estates</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="https://alfaren.ae/images/bollywood-museum_002.jpg" 
                alt="Al Faren Landmark Project" 
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            {/* Overlay Insight Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-16 -left-16 w-3/4 bg-luxury-gray p-12 border border-white/10 shadow-2xl hidden lg:block"
            >
               <p className="text-white/70 text-lg italic font-serif leading-relaxed">
                 "Architecture is the synchronization of cultural legacy and futuristic utility. We define the urban trajectory."
               </p>
               <div className="h-[1px] w-20 bg-gold mt-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;