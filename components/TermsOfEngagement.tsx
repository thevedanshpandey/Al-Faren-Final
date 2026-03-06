
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, Gavel, Award } from 'lucide-react';

const TermsOfEngagement: React.FC = () => {
  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24">
      <section className="container mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">Professional Mandate</span>
          <h1 className="text-4xl md:text-8xl lg:text-[110px] font-serif text-white leading-[1.1] lg:leading-none tracking-tighter mb-8">Terms of <br /> <span className="italic text-gold">Engagement.</span></h1>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
            The professional relationship between Al Faren & Partners and our clients is governed by a mandate of excellence, structural honesty, and institutional integrity.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-20">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Scale className="text-gold" size={24} strokeWidth={1} />
                Professional Mandate
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                Al Faren & Partners provides architectural, masterplanning, and technical consultancy services under a professional mandate that prioritizes structural integrity and long-term institutional value. Our engagement is defined by a commitment to delivering visionary concepts that are technically executable and culturally significant.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <FileCheck className="text-gold" size={24} strokeWidth={1} />
                Intellectual Property
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                All conceptual designs, technical drawings, and architectural narratives produced by Al Faren & Partners remain the intellectual property of the firm until explicitly transferred through formal contractual agreement. Use of our global archive and conceptual hub content is restricted to authorized project stakeholders.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Gavel className="text-gold" size={24} strokeWidth={1} />
                Liability & Governance
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                Our technical governance protocols ensure that every project meets or exceeds international building standards and local regulatory requirements. Liability is governed by the specific professional indemnity frameworks established for each regional hub in Dubai and India.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Award className="text-gold" size={24} strokeWidth={1} />
                Governing Law
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                These terms are governed by the laws of the jurisdictions in which our primary hubs operate. For international masterplanning and conceptual design, the laws of the United Arab Emirates apply, while technical execution in the subcontinent is governed by the laws of India.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-luxury-gray/30 border border-white/5 p-10 space-y-6">
              <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Strategic Inquiries</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                For detailed terms regarding specific institutional or private mandates, please contact our global headquarters in Dubai.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white text-sm font-bold">studio@alfaren.com</p>
              </div>
            </div>

            <div className="p-10 border border-gold/10 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Mandate Version</p>
              <p className="text-gold font-serif italic text-xl">2024.1.0</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfEngagement;
