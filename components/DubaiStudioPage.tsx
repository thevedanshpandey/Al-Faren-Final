
import React from 'react';
import { motion } from 'framer-motion';
import { LuxuryButton } from './ui/LuxuryButton';
import { Globe, MapPin, Award, PenTool } from 'lucide-react';

const DubaiStudioPage: React.FC<{ setView: (v: any) => void }> = ({ setView }) => {
  return (
    <div className="bg-matte-black min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold block mb-8">Conceptual HQ</span>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-white leading-[0.85] tracking-tighter mb-12">
              Dubai Studio: <br /> <span className="italic text-gold">Global Hub.</span>
            </h1>
            <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
              Strategically headquartered in DIFC, our Dubai studio directs architectural vision, master planning, and international design leadership for the world's most ambitious developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy & Villas Section */}
      <section className="bg-deep-navy py-32 lg:py-56 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Residential Authority</span>
                <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight tracking-tighter">
                  Architecting <br /> <span className="italic gold-gradient">Private Paradises.</span>
                </h2>
              </div>
              
              <div className="p-12 bg-luxury-gray/40 border border-gold/20 relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/10 pointer-events-none" />
                <motion.div 
                   className="text-8xl lg:text-[120px] font-serif text-gold font-bold leading-none tracking-tighter mb-6"
                >
                  1500+
                </motion.div>
                <p className="text-white/80 text-xl font-light leading-relaxed italic">
                  "Al Faren & Partners has designed over 1500+ signature luxury villas across premium international residential developments."
                </p>
              </div>

              <LuxuryButton 
                variant="outline" 
                className="px-12 py-6"
                onClick={() => {
                  window.location.search = '?category=villas';
                  setView('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View Signature Villas Portfolio
              </LuxuryButton>
            </motion.div>

            <div className="relative aspect-square">
               <img 
                 src="https://alfaren.ae/images/FRONT.webp" 
                 alt="Signature Villa" 
                 className="w-full h-full object-cover border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute -bottom-10 -left-10 bg-matte-black p-10 border border-white/10 hidden lg:block">
                  <Award className="text-gold mb-4" size={32} />
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Global Design Distinction</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Leadership Areas */}
      <section className="bg-matte-black py-32 lg:py-48">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">Design <span className="italic text-gold">Mandate.</span></h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Our Dubai conceptual command center is responsible for the intellectual and aesthetic governance of our global practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Concept Design', desc: 'Defining the core DNA and aesthetic narrative of architectural landmarks.' },
              { title: 'Master Planning', desc: 'Strategic urban frameworks for sustainable and high-value developments.' },
              { title: 'Client Advisory', desc: 'Bespoke consultancy for sovereign wealth and institutional entities.' },
              { title: 'Direction', desc: 'Guiding regional execution hubs to ensure aesthetic integrity.' }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <PenTool className="text-gold opacity-40 group-hover:opacity-100 transition-all" size={32} strokeWidth={1} />
                <h4 className="text-2xl font-serif text-white">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                <div className="w-8 h-[1px] bg-gold/20 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>

          <div className="mt-32 flex justify-center">
            <LuxuryButton variant="primary" onClick={() => setView('portfolio')}>View Global Portfolio</LuxuryButton>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-luxury-gray py-24 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <div className="flex items-center space-x-6">
                   <MapPin className="text-gold" size={32} />
                   <div>
                      <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-2">Dubai Headquarters</h4>
                      <p className="text-white/60 text-lg leading-relaxed font-light">
                        Innovation Suite, Emirates Financial Towers, <br />
                        DIFC, Dubai, United Arab Emirates
                      </p>
                   </div>
                </div>
                <div className="flex items-center space-x-6">
                   <Globe className="text-gold" size={32} />
                   <div>
                      <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-2">Connect</h4>
                      <p className="text-white/60 text-lg font-light">studio@alfaren.com</p>
                   </div>
                </div>
             </div>
             
             {/* Map Placeholder for Dubai */}
             <div className="aspect-video bg-matte-black relative flex items-center justify-center border border-white/5 grayscale">
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-center bg-contain bg-no-repeat invert" />
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-[0_0_20px_#C6A75E]" />
                   <span className="text-[10px] uppercase tracking-widest text-gold mt-4 font-bold">DIFC Hub</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DubaiStudioPage;
