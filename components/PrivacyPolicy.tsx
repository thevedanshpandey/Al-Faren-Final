
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24">
      <section className="container mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">Institutional Governance</span>
          <h1 className="text-4xl md:text-8xl lg:text-[110px] font-serif text-white leading-[1.1] lg:leading-none tracking-tighter mb-8">Privacy <br /> <span className="italic text-gold">Policy.</span></h1>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
            Al Faren & Partners is committed to the highest standards of data protection and client confidentiality. This mandate outlines our protocols for information governance.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-2 space-y-20">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Shield className="text-gold" size={24} strokeWidth={1} />
                Data Protection Mandate
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                We implement rigorous technical and organizational measures to protect personal data against unauthorized access, alteration, or destruction. Our data governance framework is aligned with international best practices for professional service firms.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Lock className="text-gold" size={24} strokeWidth={1} />
                Information Collection
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                We collect information necessary for the provision of architectural and masterplanning services. This includes professional contact details and project-specific data required for institutional liaison and technical execution.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <Eye className="text-gold" size={24} strokeWidth={1} />
                Use of Information
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                Client information is utilized strictly for project management, technical coordination, and regulatory compliance. We do not disclose sensitive data to third parties except where required by law or necessary for project implementation with authorized partners.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-white flex items-center gap-4">
                <FileText className="text-gold" size={24} strokeWidth={1} />
                Cookies & Analytics
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                Our digital platforms utilize minimal cookies to enhance user experience and analyze site traffic. These tools help us understand how visitors interact with our global archive and conceptual hub.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-luxury-gray/30 border border-white/5 p-10 space-y-6">
              <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Contact Governance</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                For inquiries regarding our privacy protocols or data handling, please contact our institutional liaison office.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white text-sm font-bold">legal@alfaren.com</p>
              </div>
            </div>

            <div className="p-10 border border-gold/10 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Last Updated</p>
              <p className="text-gold font-serif italic text-xl">March 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
