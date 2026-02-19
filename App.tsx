
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalFootprint from './components/GlobalFootprint';
import AboutStudio from './components/AboutStudio';
import Services from './components/Services';
import LegacyTicker from './components/sections/LegacyTicker';
import DesignMethodology from './components/DesignMethodology';
import StrategicInquiry from './components/StrategicInquiry';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import DubaiStudioPage from './components/DubaiStudioPage';
import IndiaAssociatesPage from './components/IndiaAssociatesPage';
import ExecutiveBoardPage from './components/ExecutiveBoardPage';
import { PROJECTS, OFFICES, NARRATIVE, BOARD_MEMBERS } from './constants';
import { ProjectCard } from './components/sections/ProjectCard';
import { LuxuryButton } from './components/ui/LuxuryButton';
import { MediaSection } from './components/sections/MediaSection';
import { History, Globe, Shield, ArrowRight, LayoutGrid, Users, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'portfolio' | 'dubai-studio' | 'india-associates' | 'executive-board'>('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['portfolio', 'dubai-studio', 'india-associates', 'home', 'executive-board'].includes(hash)) {
        setView(hash as any);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const featuredProjects = [
    PROJECTS.find(p => p.id === 'iconic-wankhede'),
    PROJECTS.find(p => p.id === 'iconic-bcci'),
    PROJECTS.find(p => p.id === 'iconic-lilavati'),
    PROJECTS.find(p => p.id === 'iconic-hyderabad'),
    PROJECTS.find(p => p.id === 'iconic-iit'),
    PROJECTS.find(p => p.id === 'iconic-bmc')
  ].filter(Boolean) as any[];

  const hubImages = [
    'https://alfaren.ae/images/FRONT.webp',
    'https://alfaren.ae/images/Garware-Club.jpeg'
  ];

  const shashiPrabhu = BOARD_MEMBERS.find(m => m.name === 'Shashi Prabhu');

  const renderContent = () => {
    switch (view) {
      case 'portfolio':
        return <PortfolioPage />;
      case 'dubai-studio':
        return <DubaiStudioPage setView={setView} />;
      case 'india-associates':
        return <IndiaAssociatesPage setView={setView} />;
      case 'executive-board':
        return <ExecutiveBoardPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <GlobalFootprint />

            <section className="bg-deep-navy py-32 lg:py-56 px-6 lg:px-12 relative border-b border-white/5">
               <div className="max-w-6xl mx-auto text-center space-y-12">
                 <History className="text-gold mx-auto opacity-40 mb-8" size={48} strokeWidth={0.5} />
                 <h2 className="text-5xl lg:text-8xl font-serif text-white tracking-tighter leading-none">
                    50 Years of <br /> <span className="italic gold-gradient">Architectural Legacy.</span>
                 </h2>
                 <p className="text-white/50 text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
                   {NARRATIVE.heritage.description}
                 </p>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-12 items-start">
                   {NARRATIVE.heritage.stats.map((stat, i) => (
                     <div key={i} className="space-y-2">
                        <span className="text-gold font-serif text-2xl whitespace-nowrap">{stat.year}</span>
                        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold leading-tight px-4">{stat.event}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            <section className="flex flex-col lg:flex-row border-b border-white/5 bg-matte-black">
              <motion.div 
                onClick={() => {
                  setView('dubai-studio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="lg:w-1/2 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={hubImages[0]} 
                    alt="Dubai Hub" 
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[1.5s] group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold transition-all duration-700" />
                <div className="relative z-10 p-8 md:p-12 lg:p-24 xl:p-32 flex flex-col justify-end min-h-[600px] md:min-h-[700px] lg:min-h-[850px] bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent">
                  <div className="mb-8">
                     <Globe className="text-gold mb-4" size={32} strokeWidth={1} />
                  </div>
                  <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 lg:mb-8">
                    INTERNATIONAL DESIGN HUB
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[0.9] tracking-tighter group-hover:text-gold transition-colors duration-500">Dubai</h3>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mt-2 block">Global Design Center</span>
                  </div>
                  <div className="space-y-6 mb-10 lg:mb-12 max-w-lg">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light group-hover:text-white transition-colors">
                      Our Dubai office represents the company’s international design leadership, where strategic vision and advanced architectural thinking converge.
                    </p>
                  </div>
                  <div className="flex items-center space-x-6 text-gold group/btn">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explore Dubai</span>
                     <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                onClick={() => {
                  setView('india-associates');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="lg:w-1/2 relative group overflow-hidden border-white/10 cursor-pointer"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={hubImages[1]} 
                    alt="India Hub" 
                    className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[1.5s] group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold transition-all duration-700" />
                <div className="relative z-10 p-8 md:p-12 lg:p-24 xl:p-32 flex flex-col justify-end min-h-[600px] md:min-h-[700px] lg:min-h-[850px] bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent">
                  <div className="mb-8">
                     <Shield className="text-gold mb-4" size={32} strokeWidth={1} />
                  </div>
                  <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 lg:mb-8">
                    TECHNICAL AND IMPLEMENTATION CENTER
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[0.9] tracking-tighter group-hover:text-gold transition-colors duration-500">India</h3>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mt-2 block">Mumbai — Head Office</span>
                  </div>
                  <div className="space-y-6 mb-10 lg:mb-12 max-w-lg">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light group-hover:text-white transition-colors">
                      Our India operations serve as the core center for technical development and implementation oversight.
                    </p>
                  </div>
                  <div className="flex items-center space-x-6 text-gold group/btn">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explore India Operations</span>
                     <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Leadership Spotlight Section */}
            <section className="bg-matte-black py-32 lg:py-56 px-6 lg:px-12 border-b border-white/5 overflow-hidden">
               <div className="max-w-[1800px] mx-auto">
                 <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="lg:w-1/2 relative"
                    >
                      <div className="aspect-[4/5] overflow-hidden border border-white/5 shadow-2xl relative bg-luxury-gray">
                        <img 
                          src={shashiPrabhu?.image} 
                          alt="Shashi Prabhu" 
                          className="w-full h-full object-cover grayscale transition-all duration-[2s]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-12 left-12">
                           <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Senior Member & Founder</span>
                           <h3 className="text-4xl lg:text-6xl font-serif text-white tracking-tighter">Shashi Prabhu</h3>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="lg:w-1/2 space-y-12"
                    >
                      <div className="space-y-6">
                        <div className="flex items-center space-x-6">
                          <Users className="text-gold" size={24} strokeWidth={1} />
                          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Leadership</span>
                        </div>
                        <h2 className="text-5xl lg:text-8xl font-serif text-white leading-none tracking-tighter">
                          The Vision <br /> <span className="italic text-gold">of Authority.</span>
                        </h2>
                      </div>

                      <div className="space-y-8">
                         <div className="relative">
                            <Quote className="absolute -top-8 -left-8 text-gold/10" size={64} />
                            <blockquote className="border-l border-gold/40 pl-10 py-4 relative z-10">
                              <p className="text-2xl lg:text-4xl font-serif text-white/90 italic leading-relaxed">
                                "Architecture is a silent witness to history. Our duty is to ensure it speaks with honesty, integrity, and timelessness."
                              </p>
                            </blockquote>
                         </div>
                         <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl">
                            Shashi Prabhu has spent over five decades architecting the most significant institutional and sports landmarks across India, establishing Al Faren as a global benchmark.
                         </p>
                      </div>

                      <div className="pt-8">
                         <LuxuryButton 
                           variant="outline" 
                           onClick={() => setView('executive-board')}
                           className="px-12 py-6"
                         >
                           View Executive Board Members <ArrowRight className="ml-4" size={16} />
                         </LuxuryButton>
                      </div>
                    </motion.div>
                 </div>
               </div>
            </section>

            <section id="portfolio" className="bg-deep-navy py-32 lg:py-56 px-6 lg:px-12 border-b border-white/5">
              <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <LayoutGrid className="text-gold" size={24} strokeWidth={1} />
                      <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Heritage Portfolio</span>
                    </div>
                    <h2 className="text-5xl lg:text-[100px] font-serif text-white leading-none tracking-tighter">Featured <br /> <span className="italic text-gold">Developments.</span></h2>
                  </div>
                  <p className="text-white/40 max-w-md font-light text-xl leading-relaxed border-l border-gold/20 pl-8">
                    Our definitive collection of institutional monuments and architectural landmarks defining cityscapes for five decades.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                
                <div className="mt-32 flex flex-col items-center space-y-8">
                   <div className="h-px w-24 bg-white/10" />
                   <LuxuryButton 
                     variant="outline" 
                     className="px-16 py-8"
                     onClick={() => {
                        setView('portfolio');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                   >
                     Explore Global Architecture Archive
                   </LuxuryButton>
                </div>
              </div>
            </section>

            <AboutStudio />
            <DesignMethodology />
            <Services />
            <LegacyTicker setView={setView} />
            <MediaSection />
            <StrategicInquiry />
          </>
        );
    }
  };

  return (
    <div className="bg-matte-black selection:bg-gold selection:text-black overflow-x-hidden">
      <Navbar currentView={view} setView={setView} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
          <Footer />
        </motion.main>
      </AnimatePresence>
      <Chatbot />
    </div>
  );
};

export default App;
