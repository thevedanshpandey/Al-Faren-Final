
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] bg-luxury-gray cursor-pointer border border-white/5 shadow-2xl"
    >
      <img 
        src={project.imageUrl} 
        alt={project.name} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out lg:group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          // Fallback to high-res architecture if local path fails
          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200`;
        }}
      />
      
      {/* Dynamic Overlay - Optimized for image clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/30 to-transparent opacity-90 transition-opacity duration-700" />
      
      <div className="absolute inset-0 border border-gold/0 lg:group-hover:border-gold/30 transition-all duration-700 m-4 lg:m-6 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-12 transform lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-700 ease-out">
        <div className="flex items-center space-x-3 lg:space-x-4 mb-3 lg:mb-4">
          <span className="text-[8px] lg:text-[9px] tracking-[0.3em] lg:tracking-[0.4em] uppercase text-gold font-bold bg-matte-black/40 px-2 py-1 backdrop-blur-sm">
            {project.category}
          </span>
          <div className="h-[1px] w-6 lg:w-10 bg-gold/50" />
          <span className="text-[8px] lg:text-[9px] tracking-[0.3em] lg:tracking-[0.4em] uppercase text-white/70 bg-matte-black/40 px-2 py-1 backdrop-blur-sm">{project.location}</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl lg:text-4xl font-serif text-white mb-4 lg:mb-6 group-hover:text-gold transition-colors duration-500 leading-tight drop-shadow-lg">
          {project.name}
        </h3>
        
        <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
           <p className="text-white/80 text-xs lg:text-sm max-w-sm font-light leading-relaxed bg-matte-black/30 p-2 backdrop-blur-[1px]">
             {project.description}
           </p>
           <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold text-gold border-b border-gold pb-1 whitespace-nowrap w-fit">
             Explore Case Study
           </span>
        </div>
      </div>
    </motion.div>
  );
};
