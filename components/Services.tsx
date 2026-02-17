
import React from 'react';
import { Map, PenTool, Layers, Building, LineChart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const IconsMap: Record<string, any> = {
  Building, Map, ShieldCheck, PenTool, Layers, LineChart
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#050505] py-32 lg:py-56 border-y border-white/5 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold/40 via-transparent to-gold/40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 lg:mb-40 items-end">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Capabilities</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-serif text-white leading-[0.85] tracking-tighter">
              Core <br /> <span className="italic text-gold">Expertise.</span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-6">
            <p className="text-white/40 text-xl font-light leading-relaxed border-l border-gold/30 pl-8">
              Decades of precision in masterplanning, civic development, and ultra-luxury residential ecosystems, delivered with a mandate of structural honesty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((service, idx) => {
            const IconComp = IconsMap[service.iconName] || Layers;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-matte-black group relative overflow-hidden h-[500px] flex flex-col p-12 lg:p-16"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gold/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                
                {/* Icon Layer */}
                <div className="relative mb-12">
                   <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-500">
                      <IconComp className="text-white/40 group-hover:text-gold transition-colors duration-500" size={32} strokeWidth={0.5} />
                   </div>
                </div>

                <div className="relative flex-grow space-y-6">
                  <h4 className="text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500 tracking-tight">{service.title}</h4>
                  <p className="text-white/30 group-hover:text-white/60 transition-colors duration-500 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="relative pt-12 mt-auto">
                   <div className="flex items-center justify-between text-gold/40 group-hover:text-gold transition-colors">
                      <span className="text-[10px] uppercase tracking-widest font-bold">Details</span>
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </div>
                   <div className="mt-4 h-[1px] w-8 bg-gold/20 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
