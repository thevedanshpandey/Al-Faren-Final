
import React from 'react';
import { motion } from 'framer-motion';
import { MEDIA } from '../../constants';

export const MediaSection: React.FC = () => {
  return (
    <section className="bg-deep-navy py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Credibility & Recognition</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">In The <span className="text-gold italic">Global Spotlight.</span></h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Our projects are regularly featured in leading international publications, recognized for their contribution to urban evolution and luxury design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {MEDIA.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-luxury-gray/40 p-12 hover:bg-black transition-all duration-500 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">{item.source}</span>
                <span className="text-white/20 text-[10px] uppercase font-bold">{item.date}</span>
              </div>
              <h4 className="text-xl font-serif text-white mb-6 group-hover:text-gold transition-colors">{item.title}</h4>
              <div className="w-0 group-hover:w-full h-[1px] bg-gold transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
