
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LuxuryButton } from './ui/LuxuryButton';
import { Shield, Building2, MapPin, HardHat, Factory, LayoutList, Workflow } from 'lucide-react';
import { PROJECTS } from '../constants';

const IndiaAssociatesPage: React.FC<{ setView: (v: any) => void }> = ({ setView }) => {
  // Group India iconic projects by decade
  const decadeGroups = useMemo(() => {
    const indiaProjects = PROJECTS.filter(p => p.location.includes('India') && p.id.startsWith('iconic'));
    const groups: Record<string, typeof indiaProjects> = {};

    indiaProjects.forEach(project => {
      const year = parseInt(project.year);
      const decade = Math.floor(year / 10) * 10;
      const decadeStr = `${decade}s`;
      if (!groups[decadeStr]) groups[decadeStr] = [];
      groups[decadeStr].push(project);
    });

    // Sort decades chronologically
    return Object.keys(groups).sort().map(decade => ({
      decade,
      projects: groups[decade].sort((a, b) => parseInt(a.year) - parseInt(b.year))
    }));
  }, []);

  return (
    <div className="bg-matte-black min-h-screen pt-32">
      {/* Hero Section - Using Iconic Firm Landmark (BCCI Garware Club) */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent z-10" />
          <img 
            src="https://alfaren.ae/images/Garware-Club.jpeg" 
            alt="Iconic India Landmark - BCCI Garware Club" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-50"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold block mb-8">Technical Authority</span>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-white leading-[0.85] tracking-tighter mb-12">
              India Hub: <br /> <span className="italic text-gold">Structural Reality.</span>
            </h1>
            <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
              The technical heart of Al Faren & Partners. Our Mumbai and Delhi offices translate grand visions into structural reality with engineering precision and rigorous technical governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Execution Excellence Section */}
      <section className="bg-deep-navy py-32 lg:py-56 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
             <div className="space-y-12">
                <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Execution Authority</span>
                <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight tracking-tighter">
                  Engineering <br /> <span className="italic gold-gradient">Dominance.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {[
                     { icon: HardHat, title: 'Technical Design', desc: 'Expert engineering documentation and BIM-led structural coordination.' },
                     { icon: Shield, title: 'Structural Governance', desc: 'Ensuring design intent is strictly maintained throughout the build cycle.' },
                     { icon: Building2, title: 'Institutional Scale', desc: 'Delivering landmark civic hubs and national infrastructure assets.' },
                     { icon: Workflow, title: 'Lifecycle Management', desc: 'Full project oversight from geotechnical analysis to asset handover.' }
                   ].map((item, i) => (
                     <div key={i} className="space-y-4">
                        <item.icon className="text-gold opacity-60" size={28} />
                        <h4 className="text-xl font-serif text-white">{item.title}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="bg-luxury-gray p-12 lg:p-20 border border-white/10 relative">
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold/20" />
                <p className="text-white/60 text-2xl font-serif italic leading-relaxed mb-12 relative z-10">
                  "Our network across Mumbai, Delhi, and Hyderabad provides the implementation framework for developments that define modern Indian architecture."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px]">Technical Implementation HQ</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Iconic Landmarks Section */}
      <section id="landmarks" className="bg-matte-black py-32 lg:py-56">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
             <div className="space-y-6">
                <div className="flex items-center space-x-4">
                   <LayoutList className="text-gold" size={24} strokeWidth={1} />
                   <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Execution Protocol</span>
                </div>
                <h2 className="text-5xl lg:text-[100px] font-serif text-white tracking-tighter leading-none">Iconic <br /> <span className="italic text-gold">India Portfolio.</span></h2>
             </div>
             <LuxuryButton 
               variant="outline" 
               className="px-12 py-6"
               onClick={() => {
                 window.location.search = '?location=india';
                 setView('portfolio');
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }}
             >
               Explore Full Archive
             </LuxuryButton>
          </div>

          <div className="relative">
            {/* Decade-based Grid Architecture */}
            {decadeGroups.map((group, gIdx) => (
              <div key={group.decade} className="mb-40 last:mb-0">
                <div className="flex items-center space-x-8 mb-20">
                  <span className="text-7xl lg:text-9xl font-serif text-gold/10 leading-none select-none">{group.decade}</span>
                  <div className="h-px flex-grow bg-white/5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                  {group.projects.map((project, pIdx) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: pIdx * 0.1 }}
                      className="bg-luxury-gray p-10 hover:bg-black transition-all duration-700 group flex flex-col justify-between min-h-[450px]"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-6">
                           <span className="text-gold font-serif text-3xl italic group-hover:translate-x-2 transition-transform">{project.year}</span>
                           <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold bg-matte-black/50 px-2 py-1">{project.category}</span>
                        </div>
                        <h4 className="text-2xl font-serif text-white mb-2 leading-tight group-hover:text-gold transition-colors">{project.name}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-8">{project.location}</p>
                      </div>
                      
                      <div className="space-y-8">
                         <div className="aspect-video overflow-hidden border border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
                            <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                         </div>
                         <p className="text-white/50 text-xs leading-relaxed font-light line-clamp-3 group-hover:text-white/80 transition-colors">
                            {project.description}
                         </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capability Section */}
      <section className="bg-deep-navy py-32 lg:py-48 border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8">Architectural <span className="italic text-gold">Governance.</span></h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              We provide specialized execution expertise across diverse high-impact sectors, ensuring every structural detail meets international quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
             {[
               { title: 'Stadium Infrastructure', desc: 'World-class sports venues including the iconic Wankhede and Rajiv Gandhi stadiums.' },
               { title: 'Tertiary Healthcare', desc: 'Precision-engineered medical facilities like Lilavati and Sir H.N. Reliance Foundation.' },
               { title: 'Corporate HQ', desc: 'Headquarters for organizations such as the BCCI and the Mumbai Cricket Association.' },
               { title: 'Civic Hubs', desc: 'Strategic administrative infrastructure for municipal governing bodies.' },
               { title: 'Academic Campuses', desc: 'Educational developments for premier institutes including IIT Dhanbad.' },
               { title: 'Logistics Hubs', desc: 'Next-generation transit environments defining urban movement and public utility.' }
             ].map((cap, i) => (
               <div key={i} className="space-y-4 group">
                  <div className="w-8 h-px bg-gold/30 group-hover:w-full transition-all duration-700" />
                  <h4 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{cap.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed font-light">{cap.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Regional Presence Hubs */}
      <section className="bg-matte-black py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
           <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-8">Regional Network</span>
           <h2 className="text-4xl lg:text-6xl font-serif text-white mb-20">Execution <span className="italic text-gold">Centers.</span></h2>
           <div className="flex flex-wrap justify-center gap-12 lg:gap-32">
              {[
                { city: 'Mumbai', label: 'Technical HQ' },
                { city: 'Delhi', label: 'Liaison Office' },
                { city: 'Hyderabad', label: 'Project Node' },
                { city: 'Pune', label: 'Implementation Hub' }
              ].map(hub => (
                <div key={hub.city} className="flex flex-col items-center group cursor-default">
                   <div className="relative mb-6">
                      <MapPin className="text-gold group-hover:scale-125 transition-transform duration-500" size={32} strokeWidth={1} />
                      <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <span className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-2">{hub.city}</span>
                   <span className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-bold">{hub.label}</span>
                   <div className="w-8 h-[1px] bg-gold/20 mt-6 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default IndiaAssociatesPage;
