
import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Send, MapPin, Globe, Phone, Mail } from 'lucide-react';
import { LuxuryButton } from './ui/LuxuryButton';

const StrategicInquiry: React.FC = () => {
  return (
    <section id="contact" className="relative bg-matte-black pt-32 lg:pt-56 overflow-hidden border-t border-white/5">
      {/* 1. Cinematic Header / Narrative Transition */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-24 lg:mb-40">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-8 bg-matte-black/50 backdrop-blur-sm">
              <Handshake className="text-gold" size={28} strokeWidth={1} />
            </div>
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold">Strategic Partnerships</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-serif text-white tracking-tighter leading-[0.9]"
          >
            Where Vision <br />
            <span className="italic gold-gradient">Meets Legacy.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            We invite institutional developers and sovereign wealth entities to engage with our global studio for large-scale urban masterplanning and bespoke luxury ecosystems.
          </motion.p>
        </div>
      </div>

      {/* 2. Integrated Protocol: Hubs & Form Grid */}
      <div className="border-t border-white/5 bg-deep-navy/30">
        <div className="container mx-auto px-0 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Global Hubs / Corporate Network */}
            <div className="lg:col-span-5 p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5 space-y-20">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Sovereign Presence</span>
                <h3 className="text-4xl lg:text-6xl font-serif text-white tracking-tighter">Global Hubs.</h3>
              </div>

              <div className="space-y-16">
                <div className="group space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gold font-serif text-xl italic">01.</span>
                    <h5 className="text-white font-bold tracking-widest text-[10px] uppercase">Mumbai: Head Office</h5>
                  </div>
                  <div className="pl-10 space-y-2 border-l border-gold/20 group-hover:border-gold/50 transition-colors">
                    <p className="text-white/40 text-sm font-light">Executive Heights, BKC, Mumbai, India</p>
                    <div className="flex items-center space-x-4 text-gold/60 text-[10px] font-bold">
                       <Phone size={10} /> <span>+91 22 0000 0000</span>
                    </div>
                  </div>
                </div>

                <div className="group space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gold font-serif text-xl italic">02.</span>
                    <h5 className="text-white font-bold tracking-widest text-[10px] uppercase">Dubai Studio: Conceptual HQ</h5>
                  </div>
                  <div className="pl-10 space-y-2 border-l border-gold/20 group-hover:border-gold/50 transition-colors">
                    <p className="text-white/40 text-sm font-light">Innovation Suite, Emirates Financial Towers, DIFC, Dubai</p>
                    <div className="flex items-center space-x-4 text-gold/60 text-[10px] font-bold">
                       <Globe size={10} /> <span>Global Inquiries Only</span>
                    </div>
                  </div>
                </div>

                <div className="group space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-gold font-serif text-xl italic">03.</span>
                    <h5 className="text-white font-bold tracking-widest text-[10px] uppercase">Regional Liaison</h5>
                  </div>
                  <div className="pl-10 space-y-2 border-l border-gold/20 group-hover:border-gold/50 transition-colors">
                    <p className="text-white/40 text-sm font-light">New Delhi | Hyderabad</p>
                    <p className="text-white/20 text-[9px] uppercase tracking-widest">Supporting Pan-India Governance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Formal Inquiry Form */}
            <div className="lg:col-span-7 p-12 lg:p-24 bg-matte-black/40">
              <div className="max-w-2xl">
                <div className="space-y-4 mb-16">
                  <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Inquiry Protocol</span>
                  <h3 className="text-4xl lg:text-6xl font-serif text-white tracking-tighter italic">Initiate Dialogue.</h3>
                </div>

                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Principal / Representative</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-gold transition-colors placeholder:text-white/10" 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Organization</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-gold transition-colors placeholder:text-white/10" 
                        placeholder="Company / Entity" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Official Correspondence Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-gold transition-colors placeholder:text-white/10" 
                      placeholder="email@organization.com" 
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nature of Strategic Engagement</label>
                    <textarea 
                      rows={4} 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white font-light focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-white/10" 
                      placeholder="Outline project scope or partnership objectives..."
                    ></textarea>
                  </div>

                  <div className="pt-8">
                    <button className="w-full group bg-gold hover:bg-white text-matte-black py-8 uppercase tracking-[0.5em] font-bold text-xs flex items-center justify-center transition-all duration-700">
                      Transmit Inquiry <Send className="ml-4 group-hover:translate-x-2 transition-transform" size={16} strokeWidth={1} />
                    </button>
                    <p className="mt-8 text-center text-[9px] text-white/20 uppercase tracking-[0.3em]">
                      All strategic inquiries are processed through our Mumbai technical headquarters within 48 corporate hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Atmospheric Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-[0.02]">
        <span className="text-[40vw] font-serif text-white tracking-tighter uppercase whitespace-nowrap">AL FAREN</span>
      </div>
    </section>
  );
};

export default StrategicInquiry;
