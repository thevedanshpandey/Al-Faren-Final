import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalFootprint from './components/GlobalFootprint';
import AboutStudio from './components/AboutStudio';
import Services from './components/Services';
import LegacyTicker from './components/sections/LegacyTicker';
import DesignMethodology from './components/DesignMethodology';
import VisionaryConcepts from './components/VisionaryConcepts';
import Leadership from './components/Leadership';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import { PROJECTS, OFFICES, NARRATIVE } from './constants';
import { ProjectCard } from './components/sections/ProjectCard';
import { LuxuryButton } from './components/ui/LuxuryButton';
import { MediaSection } from './components/sections/MediaSection';
import { ExternalLink, History, Globe, Shield } from 'lucide-react';

const PresentationSection: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
  tag?: string;
}> = ({ title, subtitle, description, image, reversed, tag }) => (
  <section className="bg-matte-black py-32 lg:py-48 px-6 lg:px-12 overflow-hidden border-b border-white/5">
    <div className={`max-w-7xl mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24 lg:gap-32`}>
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 space-y-8"
      >
        {tag && <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">{tag}</span>}
        <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight tracking-tighter">
          {title} <br /> <span className="italic text-gold">{subtitle}</span>
        </h2>
        <p className="text-white/50 text-xl font-light leading-relaxed border-l border-gold/20 pl-8">
          {description}
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="lg:w-1/2 relative group"
      >
        <div className="aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl">
          <img src={image} alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
        <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
      </motion.div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'portfolio'>('home');

  // Featured projects specifically for the home page (most iconic ones)
  const featuredProjects = [
    PROJECTS.find(p => p.id === 'iconic-wankhede'),
    PROJECTS.find(p => p.id === 'iconic-bcci'),
    PROJECTS.find(p => p.id === 'iconic-reliance'),
    PROJECTS.find(p => p.id === 'iconic-bollywood')
  ].filter(Boolean) as any[];

  return (
    <div className="bg-matte-black selection:bg-gold selection:text-black overflow-x-hidden">
      <Navbar currentView={view} setView={setView} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 1. Immersive Hero */}
            <Hero />
            
            {/* 2. Global Footprint & Authority */}
            <GlobalFootprint />

            {/* 3. Narrative: The 50-Year Authority */}
            <section className="bg-deep-navy py-32 lg:py-56 px-6 lg:px-12 relative">
               <div className="max-w-4xl mx-auto text-center space-y-12">
                 <History className="text-gold mx-auto opacity-40 mb-8" size={48} strokeWidth={0.5} />
                 <h2 className="text-5xl lg:text-8xl font-serif text-white tracking-tighter leading-none">
                    50 Years of <br /> <span className="italic gold-gradient">Architectural Legacy.</span>
                 </h2>
                 <p className="text-white/50 text-xl lg:text-2xl font-light leading-relaxed">
                   {NARRATIVE.heritage.description}
                 </p>
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                   {NARRATIVE.heritage.stats.map((stat, i) => (
                     <div key={i} className="space-y-2">
                        <span className="text-gold font-serif text-2xl">{stat.year}</span>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.event}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* 4. Strategic Vertical: Dubai Conceptual Excellence */}
            <PresentationSection 
              tag="Global HQ: Dubai Studio"
              title="Conceptual"
              subtitle="Leadership."
              description={NARRATIVE.synergy.dubai}
              image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400"
            />

            {/* 5. Strategic Vertical: India Technical Governance */}
            <PresentationSection 
              tag="Operation Hub: Mumbai"
              title="Institutional"
              subtitle="Governance."
              description={NARRATIVE.synergy.india}
              image="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2400"
              reversed
            />

            {/* 6. Core Methodology */}
            <AboutStudio />
            <DesignMethodology />

            {/* 7. Strategic Portfolio Showcase (Iconic Projects) */}
            <section id="portfolio" className="bg-deep-navy py-32 lg:py-56 px-6 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                  <div className="space-y-6">
                    <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Iconic Landmarks</span>
                    <h2 className="text-5xl lg:text-[100px] font-serif text-white leading-none tracking-tighter">Featured <br /> <span className="italic text-gold">Works.</span></h2>
                  </div>
                  <p className="text-white/40 max-w-md font-light text-xl leading-relaxed border-l border-gold/20 pl-8">
                    A curated selection of architectural landmarks and masterplanned environments defining cityscapes for five decades.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                
                <div className="mt-32 flex justify-center">
                   <LuxuryButton 
                     variant="outline" 
                     className="px-16 py-8"
                     onClick={() => {
                        setView('portfolio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                   >
                     Explore Full Global Portfolio
                   </LuxuryButton>
                </div>
              </div>
            </section>

            {/* 8. Regional Hub Visualization */}
            <section className="flex flex-col lg:flex-row border-y border-white/5 bg-matte-black">
              {OFFICES.map((office, idx) => (
                <motion.div 
                  key={office.region}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className={`lg:w-1/2 relative group overflow-hidden border-white/10 ${idx === 0 ? 'border-b lg:border-b-0 lg:border-r' : ''}`}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={office.image} 
                      alt={office.region} 
                      className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="relative z-10 p-12 lg:p-32 flex flex-col justify-end min-h-[800px] bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent">
                    <div className="mb-12">
                       {idx === 0 ? <Globe className="text-gold mb-4" size={32} strokeWidth={1} /> : <Shield className="text-gold mb-4" size={32} strokeWidth={1} />}
                    </div>
                    <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8">
                      {office.region.includes('Dubai') ? 'VISIONARY HUB' : 'EXECUTION HUB'}
                    </span>
                    <h3 className="text-5xl lg:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">{office.region}</h3>
                    
                    <div className="space-y-6 mb-12 max-w-lg">
                      <p className="text-white/70 text-lg leading-relaxed font-light">
                        {office.region.includes('Dubai') 
                          ? 'Leading international design strategy, conceptual leadership, and institutional collaborations from the heart of DIFC.' 
                          : 'Our primary technical governance center driving project engineering, local regulations, and high-fidelity construction support.'}
                      </p>
                      <p className="text-gold text-xs font-bold tracking-widest uppercase italic border-b border-gold/20 pb-2 w-fit">{office.address}</p>
                    </div>

                    <LuxuryButton variant="ghost" className="self-start !px-0 rounded-none hover:text-gold transition-all duration-500">
                      Connect with Region <ExternalLink className="ml-4" size={14} />
                    </LuxuryButton>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* 9. Supporting Presentation Modules */}
            <Services />
            <LegacyTicker />
            <VisionaryConcepts />
            <Leadership />
            <MediaSection />
            <Collaboration />
            <Contact />
            <Footer />
          </motion.main>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PortfolioPage />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;