
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Cog, ClipboardCheck, ArrowRight } from 'lucide-react';

const PROTOCOL_STEPS = [
  {
    id: '01',
    icon: Target,
    title: 'Strategic Foundation',
    description: 'Context analysis and objective setting to establish a purposeful architectural framework.'
  },
  {
    id: '02',
    icon: Lightbulb,
    title: 'Conceptual Development',
    description: 'Translating vision into unique identities through spatial and experiential innovation.'
  },
  {
    id: '03',
    icon: Cog,
    title: 'Technical Resolution',
    description: 'Comprehensive engineering integration to ensure structural integrity and execution readiness.'
  },
  {
    id: '04',
    icon: ClipboardCheck,
    title: 'Implementation Oversight',
    description: 'Continuous delivery management to ensure absolute fidelity to the original design vision.'
  }
];

const DesignMethodology: React.FC = () => {
  return (
    <section id="protocol" className="bg-[#050505] py-32 lg:py-56 border-y border-white/5 relative overflow-hidden">
      {/* Background Brand Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.01] pointer-events-none select-none">
        <span className="text-[30vw] font-serif uppercase tracking-tighter text-white">PROTOCOL</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Protocol</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-serif text-white leading-[0.85] tracking-tighter">
              Strategic <br /> <span className="italic text-gold">Excellence.</span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-4">
            <p className="text-white/40 font-light text-xl leading-relaxed border-l border-gold/30 pl-8">
              A disciplined, four-phase methodology ensuring absolute precision from visionary concept to built reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {PROTOCOL_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-matte-black p-10 lg:p-14 group relative overflow-hidden flex flex-col justify-between min-h-[450px]"
            >
              {/* Interactive Hover Highlight */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 space-y-12 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  <span className="text-gold font-serif text-5xl italic opacity-10 group-hover:opacity-100 transition-all duration-700">
                    {step.id}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                    <step.icon className="text-white/20 group-hover:text-gold transition-colors duration-500" size={24} strokeWidth={1} />
                  </div>
                </div>

                <div className="space-y-6 pt-8 flex-grow">
                  <h3 className="text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                   <div className="flex items-center space-x-3 text-gold/20 group-hover:text-gold transition-all duration-500 group-hover:translate-x-2">
                      <span className="text-[9px] uppercase tracking-widest font-bold">Core Methodology</span>
                      <ArrowRight size={12} />
                   </div>
                   <div className="mt-4 h-px w-0 bg-gold/30 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignMethodology;
