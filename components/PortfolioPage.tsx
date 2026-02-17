
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { X, ArrowUpRight, Building2, MapPin } from 'lucide-react';
import { Project } from '../types';

const CATEGORIES = [
  'All Projects',
  'Institutional',
  'Infrastructure',
  'Healthcare',
  'Residential',
  'Sports',
  'Villa'
];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      if (categoryParam === 'villas') {
        setSelectedCategory('Villa');
      } else {
        const found = CATEGORIES.find(c => c.toLowerCase() === categoryParam.toLowerCase());
        if (found) setSelectedCategory(found);
      }
    }
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-6">Global Archive</span>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-white leading-none tracking-tighter mb-8">Authoritative <br /> <span className="italic text-gold">Portfolio.</span></h1>
        </motion.div>
      </section>

      {/* Category Navigation - Positioned on top of content as requested */}
      <section className="container mx-auto px-6 lg:px-12 mb-12 border-y border-white/5 py-8 sticky top-24 z-30 bg-matte-black/95 backdrop-blur-xl">
        <div className="flex flex-wrap gap-x-8 lg:gap-x-12 gap-y-6 justify-center lg:justify-start">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[10px] lg:text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-300 relative pb-2 ${
                selectedCategory === cat ? 'text-gold' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <motion.div 
                  layoutId="portfolioFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* LANDMARK LEGACY COLLECTION SECTION */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-4 mb-16">
          <Building2 className="text-gold/40" size={20} strokeWidth={1} />
          <h2 className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">Landmark Legacy Collection</h2>
          <div className="h-px flex-grow bg-white/5 ml-4" />
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="group cursor-pointer space-y-8"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] overflow-hidden border border-white/5 relative bg-luxury-gray">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-transparent transition-all duration-700" />
                  
                  {/* Arrow Icon Indicator */}
                  <div className="absolute top-6 right-6 translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-gold p-3 rounded-full text-black shadow-2xl">
                       <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-[9px] text-gold uppercase tracking-[0.3em] font-bold">{project.category}</span>
                    <div className="w-8 h-px bg-white/10" />
                    <span className="text-[9px] text-white/40 uppercase tracking-widest font-medium">{project.location}</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-serif text-gold leading-tight tracking-tight group-hover:text-white transition-colors duration-500">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-matte-black/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="min-h-screen p-6 lg:p-12 relative flex flex-col">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 lg:top-12 right-8 lg:right-12 z-[110] text-white hover:text-gold transition-colors"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="container mx-auto flex-grow flex flex-col lg:flex-row gap-16 lg:gap-24 items-start py-20">
                <div className="lg:w-3/5 space-y-12">
                  <motion.div 
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="aspect-video w-full overflow-hidden border border-white/10"
                  >
                    <img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover" />
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                       <h5 className="text-gold text-[10px] uppercase tracking-widest font-bold">Structural Authority</h5>
                       <p className="text-white/50 text-sm leading-relaxed font-light">
                         The {selectedProject.name} serves as a definitive example of Al Faren’s mandate for structural honesty and institutional longevity.
                       </p>
                    </div>
                    <div className="space-y-4">
                       <h5 className="text-gold text-[10px] uppercase tracking-widest font-bold">Governance Hub</h5>
                       <p className="text-white/50 text-sm leading-relaxed font-light">
                         Engineered to rigorous international standards, this development defines the skyline of {selectedProject.location.split(',')[0]}.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/5 space-y-12 lg:sticky lg:top-32">
                  <div className="space-y-6">
                    <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">{selectedProject.category}</span>
                    <h2 className="text-5xl lg:text-7xl font-serif text-white tracking-tighter leading-none">{selectedProject.name}</h2>
                    <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold">{selectedProject.location} &bull; {selectedProject.year}</p>
                  </div>

                  <p className="text-white/70 text-xl font-light leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6 pt-12 border-t border-white/10">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                      <span className="text-white/30">Current Status</span>
                      <span className="text-gold font-bold">{selectedProject.status}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                      <span className="text-white/30">Technical Governance</span>
                      <span className="text-white font-bold">Al Faren & Partners</span>
                    </div>
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

export default PortfolioPage;
