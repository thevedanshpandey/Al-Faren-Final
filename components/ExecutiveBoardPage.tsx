
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOARD_MEMBERS } from '../constants';
import { BoardMember } from '../types';
import { X, Award, ShieldCheck, Briefcase, History, ArrowRight } from 'lucide-react';
import { LuxuryButton } from './ui/LuxuryButton';

const MemberCard: React.FC<{ member: BoardMember; idx: number; onClick: () => void }> = ({ member, idx, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    onClick={onClick}
    className="group cursor-pointer space-y-4 text-center"
  >
    <div className="aspect-square overflow-hidden border border-white/5 relative bg-luxury-gray max-w-[180px] mx-auto rounded-full">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
      />
      <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-transparent transition-colors duration-700" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gold/10 backdrop-blur-sm">
        <ArrowRight size={24} className="text-white" />
      </div>
    </div>
    <div className="space-y-2 max-w-[240px] mx-auto">
      <div>
        <span className="text-gold uppercase tracking-[0.3em] text-[9px] font-bold block mb-1">{member.role}</span>
        <h3 className="text-lg lg:text-xl font-serif text-white group-hover:text-gold transition-colors">{member.name}</h3>
      </div>
      <p className="text-white/40 text-[10px] leading-relaxed font-light line-clamp-2">
        {member.bio}
      </p>
      <div className="pt-2 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="text-[8px] text-gold uppercase tracking-widest font-bold">View Profile</span>
      </div>
    </div>
  </motion.div>
);

const ExecutiveBoardPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24">
      {/* 1. Page Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400" className="w-full h-full object-cover" alt="Corporate" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">Governance & Leadership</span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white leading-[1.1] lg:leading-none tracking-tighter mb-8 lg:mb-10">
              Executive <br /> <span className="italic text-gold">Board.</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
              A leadership team guiding the company’s vision, strategy, and execution across global and regional initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-deep-navy py-20 lg:py-32 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-serif text-white tracking-tight">Institutional <br /> <span className="italic gold-gradient">Excellence.</span></h2>
              <p className="text-white/40 text-base lg:text-lg font-light leading-relaxed max-w-xl">
                Our board represents over a century of combined experience in high-fidelity architectural leadership, urban governance, and technical implementation. We maintain a standard of excellence that spans from conceptual vision in the Middle East to structural reality across the Indian subcontinent.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
               <div className="p-8 lg:p-10 bg-luxury-gray/30 border border-white/5 space-y-4">
                  <ShieldCheck className="text-gold" size={28} />
                  <h4 className="text-white uppercase tracking-widest text-[10px] font-bold">Strategic Governance</h4>
                  <p className="text-white/30 text-xs font-light">Directing corporate policy and international expansion.</p>
               </div>
               <div className="p-8 lg:p-10 bg-luxury-gray/30 border border-white/5 space-y-4">
                  <Award className="text-gold" size={28} />
                  <h4 className="text-white uppercase tracking-widest text-[10px] font-bold">Design Authority</h4>
                  <p className="text-white/30 text-xs font-light">Maintaining aesthetic and structural integrity.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Profiles Section */}
      <section className="py-24 lg:py-40 px-6 lg:px-12">
        <div className="container mx-auto space-y-24 lg:space-y-32">
          
          {/* Design Studio, Dubai */}
          <div className="space-y-12 lg:space-y-16">
            <div className="border-l-2 border-gold pl-6 lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-serif text-white tracking-tight">Design Studio, <span className="italic text-gold">Dubai.</span></h2>
              <p className="text-white/40 text-xs lg:text-sm font-light mt-4 max-w-xl">The conceptual forge where international trends and luxury standards are synthesized into unique architectural visions.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-10">
              {BOARD_MEMBERS.filter(m => m.role.includes('Dubai') || m.role.includes('Design Principal') || m.role.includes('Chairman Emeritus')).map((member, idx) => (
                <MemberCard key={member.name} member={member} idx={idx} onClick={() => setSelectedMember(member)} />
              ))}
            </div>
          </div>

          {/* Senior Advisory Board */}
          <div className="space-y-12 lg:space-y-16">
            <div className="border-l-2 border-gold pl-6 lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-serif text-white tracking-tight">Senior <span className="italic text-gold">Advisory Board.</span></h2>
              <p className="text-white/40 text-xs lg:text-sm font-light mt-4 max-w-xl">Distinguished advisors providing strategic oversight, operational excellence, and financial governance to global initiatives.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-10">
              {BOARD_MEMBERS.filter(m => m.role.includes('Senior Advisory Board')).map((member, idx) => (
                <MemberCard key={member.name} member={member} idx={idx} onClick={() => setSelectedMember(member)} />
              ))}
            </div>
          </div>

          {/* India Associate Firm Promoters */}
          <div className="space-y-12 lg:space-y-16">
            <div className="border-l-2 border-gold pl-6 lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-serif text-white tracking-tight">India Associate Firm <span className="italic text-gold">Promoters.</span></h2>
              <p className="text-white/40 text-xs lg:text-sm font-light mt-4 max-w-xl">Leading the strategic growth and foundational stability of our regional operations across the Indian subcontinent.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-10">
              {BOARD_MEMBERS.filter(m => m.role.includes('Promoter')).map((member, idx) => (
                <MemberCard key={member.name} member={member} idx={idx} onClick={() => setSelectedMember(member)} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Detailed Profile View Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-matte-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="min-h-screen p-6 lg:p-12 relative flex flex-col justify-center items-center">
              <button 
                onClick={() => setSelectedMember(null)}
                className="fixed top-8 lg:top-12 right-8 lg:right-12 z-[110] text-white hover:text-gold transition-colors"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="container mx-auto py-20 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32 items-start max-w-7xl mx-auto">
                  
                  {/* Left: Image and Key Stats */}
                  <div className="lg:w-1/3 xl:w-2/5 space-y-10 lg:space-y-12">
                    <motion.div 
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="aspect-[4/5] w-full overflow-hidden border border-white/10 shadow-2xl"
                    >
                      <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-6 lg:gap-8 pt-10 lg:pt-12 border-t border-white/10">
                       <div className="space-y-2">
                          <History className="text-gold" size={18} lg:size={20} strokeWidth={1} />
                          <p className="text-white/20 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold">Experience</p>
                          <h6 className="text-xl lg:text-2xl font-serif text-white">{selectedMember.experienceYears}+ Years</h6>
                       </div>
                       <div className="space-y-2">
                          <Briefcase className="text-gold" size={18} lg:size={20} strokeWidth={1} />
                          <p className="text-white/20 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold">Expertise</p>
                          <h6 className="text-xs lg:text-sm font-bold text-white uppercase tracking-wider">{selectedMember.expertise[0]}</h6>
                       </div>
                    </div>
                  </div>

                  {/* Right: Detailed Biography */}
                  <div className="lg:w-2/3 xl:w-3/5 space-y-10 lg:space-y-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4 lg:space-y-6"
                    >
                      <span className="text-gold uppercase tracking-[0.5em] text-[10px] lg:text-xs font-bold">{selectedMember.role}</span>
                      <h2 className="text-4xl lg:text-6xl xl:text-8xl font-serif text-white tracking-tighter leading-none">{selectedMember.name}</h2>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-8"
                    >
                       <p className="text-white/70 text-2xl font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                         {selectedMember.fullBio}
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                          <div className="space-y-6">
                             <h5 className="text-white uppercase tracking-widest text-[10px] font-bold">Key Specializations</h5>
                             <div className="flex flex-wrap gap-3">
                                {selectedMember.expertise.map(exp => (
                                  <span key={exp} className="px-4 py-2 bg-luxury-gray/50 border border-white/5 text-white/60 text-[10px] uppercase tracking-widest font-bold">
                                    {exp}
                                  </span>
                                ))}
                             </div>
                          </div>
                          <div className="space-y-6">
                             <h5 className="text-white uppercase tracking-widest text-[10px] font-bold">Governance Mandate</h5>
                             <p className="text-white/40 text-sm leading-relaxed font-light italic">
                                Responsible for the firm's {selectedMember.expertise[selectedMember.expertise.length - 1].toLowerCase()} and long-term institutional value.
                             </p>
                          </div>
                       </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExecutiveBoardPage;
