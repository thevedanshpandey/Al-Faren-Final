
import React from 'react';
import { motion } from 'framer-motion';
import { LuxuryButton } from '../ui/LuxuryButton';
import { ArrowRight } from 'lucide-react';

const archiveImages = [
  'https://alfaren.ae/images/2014_22_12_OP4_07.jpg',
  'https://alfaren.ae/images/28may_2013-2-1.jpg',
  'https://alfaren.ae/images/Ahmad-2.JPG',
  'https://alfaren.ae/images/Ajnii - Copy - Copy.jpg',
  'https://alfaren.ae/images/AR16.JPG',
  'https://alfaren.ae/images/AR48.JPG',
  'https://alfaren.ae/images/bal2 - Copy.jpg',
  'https://alfaren.ae/images/BHAVNAGAR 001.jpg',
  'https://alfaren.ae/images/bldg photo 001.jpg',
  'https://alfaren.ae/images/DSC02705.JPG',
  'https://alfaren.ae/images/DSC03221.JPG',
  'https://alfaren.ae/images/DSC04986.JPG',
  'https://alfaren.ae/images/Ext Bldg-Color-02.jpg',
  'https://alfaren.ae/images/FRONT.jpg',
  'https://alfaren.ae/images/Garware-Club.jpeg',
  'https://alfaren.ae/images/IMG_4230.JPG',
  'https://alfaren.ae/images/IMG_4236.JPG',
  'https://alfaren.ae/images/IMG_4291.JPG',
  'https://alfaren.ae/images/IMG_4296.JPG',
  'https://alfaren.ae/images/IMG_4331.JPG',
  'https://alfaren.ae/images/Indiragandhistadium.jpg',
  'https://alfaren.ae/images/Khoory-1.JPG',
  'https://alfaren.ae/images/new.jpg',
  'https://alfaren.ae/images/P356-1.jpg',
  'https://alfaren.ae/images/P356-2 (1).jpg',
  'https://alfaren.ae/images/Panvel-Bus-Port1.jpg',
  'https://alfaren.ae/images/bollywood-museum_002.jpg',
  'https://alfaren.ae/images/Slide24.JPG',
  'https://alfaren.ae/images/VBPS-Dec2020.img02B1.jpg',
  'https://alfaren.ae/images/VBPS-Dec2020.img02B2a.jpg',
  'https://alfaren.ae/images/WhatsApp Image 2020-01-05 at 4.24.14 PM (1).jpeg',
  'https://alfaren.ae/images/WhatsApp Image 2020-01-05 at 4.24.16 PM.jpeg'
];

const LegacyTicker: React.FC<{ setView?: (v: any) => void }> = ({ setView }) => {
  const tickerImages = [...archiveImages, ...archiveImages];

  const handleExplore = () => {
    if (setView) {
      setView('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = 'portfolio';
    }
  };

  return (
    <section className="bg-matte-black py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="max-w-4xl space-y-8">
            <div className="flex items-center space-x-6">
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">The Heritage Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[110px] font-serif text-white leading-[0.85] tracking-tighter">
                Featured <br /> <span className="italic gold-gradient">Developments.</span>
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl border-l border-gold/20 pl-8">
                A definitive collection of structural monuments defining cityscapes for five decades. Explore our scrolling archive of over 1,500 visionary projects.
            </p>
        </div>
      </div>

      {/* Primary Ticker / Carousel Section */}
      <div className="relative py-12 border-y border-white/5 bg-deep-navy/30">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-5 pointer-events-none overflow-hidden select-none">
            <span className="text-[25vw] font-serif italic text-white uppercase tracking-tighter">Archive</span>
        </div>
        
        <div className="flex">
          <motion.div 
            className="flex whitespace-nowrap gap-6 lg:gap-10"
            animate={{ x: [0, -10000] }}
            transition={{ 
              duration: 120, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {tickerImages.map((img, idx) => (
              <div key={idx} className="w-[300px] h-[200px] lg:w-[450px] lg:h-[300px] flex-shrink-0 transition-all duration-1000 border border-white/5 bg-luxury-gray relative group overflow-hidden">
                <img 
                  src={img} 
                  alt={`Portfolio Archive ${idx}`} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-matte-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Explore All CTA */}
      <div className="container mx-auto px-6 lg:px-12 mt-32 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <p className="text-white/30 text-lg font-light leading-relaxed">
                Our legacy spans five decades, reaching over 50 million square feet across diverse architectural sectors. Discover the full depth of our design history.
            </p>
            <div className="flex flex-col items-center">
                <LuxuryButton 
                  variant="outline" 
                  className="px-20 py-8"
                  onClick={handleExplore}
                >
                  Explore Full Global Archive <ArrowRight className="ml-4" size={16} />
                </LuxuryButton>
            </div>
          </div>
      </div>
    </section>
  );
};

export default LegacyTicker;
