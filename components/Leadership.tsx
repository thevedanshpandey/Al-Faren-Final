
import React from 'react';
import { LEADERSHIP } from '../constants';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
  return (
    <section className="bg-matte-black py-20 md:py-32 lg:py-48 relative overflow-hidden">
      {/* Category C atmospheric detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 grayscale pointer-events-none hidden lg:block">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" alt="Atmospheric Detail" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-10 lg:space-y-16">
            <div className="space-y-4 lg:space-y-6">
              <span className="text-gold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-[9px] lg:text-[10px] font-bold">Global Governance</span>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white leading-[1.1] lg:leading-none tracking-tighter">Institutional <br className="hidden sm:block" /> <span className="italic text-gold">Leadership</span></h2>
            </div>
            
            <motion.blockquote 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="border-l-2 border-gold pl-6 md:pl-10 py-2 md:py-4"
            >
              <p className="text-xl md:text-2xl lg:text-4xl font-serif text-white/90 italic leading-relaxed">
                "We architect ecosystems that define the future trajectory of international urban living."
              </p>
              <footer className="mt-6 md:mt-8 text-gold uppercase tracking-widest text-[9px] md:text-xs font-bold">— Atul Prabhu, Principal Partner</footer>
            </motion.blockquote>

            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Our executive board comprises interdisciplinary leaders with backgrounds in international finance, sustainable urbanism, and structural engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 pt-10 lg:pt-0">
            {LEADERSHIP.map((leader, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="space-y-6 lg:space-y-8 group"
              >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5 bg-luxury-gray">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-serif text-white">{leader.name}</h4>
                  <p className="text-gold text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 font-bold">{leader.role}</p>
                  <p className="text-white/40 text-xs lg:text-sm mt-4 lg:text-6 mt-6 leading-relaxed line-clamp-4">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media / Featured In */}
        <div className="mt-20 md:mt-48 pt-16 md:pt-32 border-t border-white/10">
          <p className="text-center text-white/20 uppercase tracking-[0.4em] lg:tracking-[0.6em] text-[8px] lg:text-[9px] mb-12 lg:mb-16 font-bold">RECOGNIZED & FEATURED IN GLOBAL MEDIA</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32 opacity-20 grayscale contrast-125">
             <span className="text-xl md:text-2xl font-serif font-bold italic">FORBES</span>
             <span className="text-xl md:text-2xl font-serif font-bold">FINANCIAL TIMES</span>
             <span className="text-xl md:text-2xl font-serif italic">THE NATIONAL</span>
             <span className="text-xl md:text-2xl font-serif font-bold uppercase tracking-tighter">REUTERS</span>
             <span className="text-xl md:text-2xl font-serif tracking-widest">BLOOMBERG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Added missing default export
export default Leadership;
