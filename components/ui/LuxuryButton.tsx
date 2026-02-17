import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href
}) => {
  const baseStyles = "px-10 py-5 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs transition-all duration-500 relative overflow-hidden inline-flex items-center justify-center group";
  
  const variants = {
    primary: "bg-gold text-matte-black hover:bg-white",
    outline: "border border-white/20 text-white hover:border-gold hover:text-gold",
    ghost: "text-white hover:text-gold px-4 py-2"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant !== 'ghost' && (
        <motion.div 
          className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};