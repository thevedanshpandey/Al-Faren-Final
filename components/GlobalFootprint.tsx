
import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const Counter: React.FC<{ value: string; shouldAnimate?: boolean }> = ({ value, shouldAnimate = true }) => {
  const [displayValue, setDisplayValue] = useState(shouldAnimate ? "0" : value);
  const numericPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!shouldAnimate || isNaN(numericPart)) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, numericPart, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest).toLocaleString() + suffix);
      }
    });
    return () => controls.stop();
  }, [numericPart, suffix, value, shouldAnimate]);

  return <span>{displayValue}</span>;
};

const StatCard: React.FC<{ value: string; label: string; index: number; noAnim?: boolean }> = ({ value, label, index, noAnim }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col items-center text-center py-12 lg:py-20 group relative"
  >
    <div className="relative mb-4 lg:mb-6">
      <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-gold leading-none tracking-tight select-none">
        <Counter value={value} shouldAnimate={!noAnim} />
      </div>
    </div>
    
    <div className="flex flex-col items-center w-full px-4">
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-semibold mb-6 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
        {label}
      </span>
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
        className="h-[1px] bg-white/10 group-hover:bg-gold/40 transition-all duration-700" 
      />
    </div>
  </motion.div>
);

const MapPin = ({ top, left, label, isPrimary = false, delay = 0 }: { top: string, left: string, label: string, isPrimary?: boolean, delay?: number }) => (
  <motion.div 
    className="absolute z-10"
    style={{ top, left }}
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: 'spring', stiffness: 100 }}
  >
    <div className="relative">
      {isPrimary ? (
        <>
          <motion.div 
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-sm"
          />
          <div className="w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_#C6A75E] border-2 border-black" />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
             <span className="text-[8px] uppercase tracking-widest text-gold font-bold bg-black/80 px-2 py-0.5 border border-gold/20 backdrop-blur-sm">{label}</span>
          </div>
        </>
      ) : (
        <>
          <div className="w-2 h-2 bg-gold/80 rounded-full shadow-[0_0_10px_#C6A75E] border border-black/50" />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
             <span className="text-[7px] uppercase tracking-widest text-white/60 font-medium">{label}</span>
          </div>
        </>
      )}
    </div>
  </motion.div>
);

const GlobalFootprint: React.FC = () => {
  return (
    <section id="global" className="bg-matte-black py-20 lg:py-40 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative mb-32 lg:mb-56">
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
             <div className="flex justify-between h-full px-px">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-px h-full bg-gradient-to-b from-white/0 via-white/5 to-white/0" />
                ))}
             </div>
          </div>

          <StatCard index={0} value="50M+" label="SQ. FT DESIGN FOOTPRINT" />
          <StatCard index={1} value="1,500+" label="SIGNATURE VILLAS" />
          <StatCard index={2} value="Global" label="STANDARD OF EXCELLENCE" noAnim={true} />
          <StatCard index={3} value="50+" label="YEARS OF PROFESSIONAL AUTHORITY" />
        </div>

        {/* Optimized Integrated Presence Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch border border-white/5 bg-deep-navy/20 overflow-hidden shadow-2xl">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-10 lg:p-24 flex flex-col justify-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                An Integrated <br />
                <span className="text-gold italic">Global Network.</span>
              </h2>
              <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
                Our presence transcends borders. With a visionary international studio in Dubai and a robust network of excellence across India, Al Faren & Partners manages a legacy portfolio of ultra-luxury assets.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_#C6A75E] mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white font-bold group-hover:text-gold transition-colors">
                    INTERNATIONAL STUDIO - DUBAI (DIFC)
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Conceptual Leadership Hub</span>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gold/60 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white font-bold group-hover:text-gold transition-colors">
                    HEAD OFFICE - MUMBAI (BKC)
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Technical Governance & Engineering</span>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-2.5 h-2.5 rounded-full bg-gold/40 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white font-bold group-hover:text-gold transition-colors">
                    REGIONAL OFFICES - NEW DELHI | HYDERABAD
                  </span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Execution & Client Liaison Network</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Map Column with Accurate Geo-locations */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative min-h-[500px] lg:min-h-full bg-[#050505] overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
                alt="World Map" 
                className="w-full h-full grayscale invert brightness-50 opacity-10 object-contain mix-blend-screen scale-110"
              />
            </div>

            {/* Precision Targeted Pins */}
            <div className="absolute inset-0 z-10">
              {/* DUBAI - UAE HUB (Precise Nudge) */}
              <MapPin 
                top="40.8%" 
                left="63.8%" 
                label="Dubai Studio" 
                isPrimary={true} 
                delay={0.5} 
              />

              {/* NEW DELHI - NORTH INDIA (Precise Nudge) */}
              <MapPin 
                top="36.2%" 
                left="71.9%" 
                label="New Delhi" 
                delay={0.7} 
              />

              {/* MUMBAI - WEST INDIA (Precise Nudge) */}
              <MapPin 
                top="44.2%" 
                left="71.2%" 
                label="Mumbai HQ" 
                delay={0.9} 
              />

              {/* HYDERABAD - CENTRAL/SOUTH INDIA (Precise Nudge) */}
              <MapPin 
                top="47.5%" 
                left="72.6%" 
                label="Hyderabad" 
                delay={1.1} 
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-l from-matte-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
