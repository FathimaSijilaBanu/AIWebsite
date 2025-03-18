'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on client side
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const partners = [
    { 
      name: 'Adobe', 
      image: '/images/partners/Adobe-Commerce.svg',
      label: ''
    },
    { 
      name: 'Shopify Plus', 
      image: '/images/partners/shopify.png',
      label: ''
    },
    { 
      name: 'Magento', 
      image: '/images/partners/magento-solution-partner.png',
      label: ''
    },
    { 
      name: 'Akinon', 
      image: '/images/partners/akinon.png',
      label: ''
    },
    { 
      name: 'Pimcore', 
      image: '/images/partners/pimcore.png',
      label: ''
    },
  ];

  const text = "Codilar empowers brands with seamless ecommerce solutions across platforms like";
  const text2 = "With a focus on digital transformation, we drive growth and exceptional customer experiences, backed by global expertise, certified professionals, and 500+ successful projects.";

  const getWordColor = (word: string) => {
    if (isMobile) {
      return 'text-white'; // All words white on mobile
    }
    
    switch(word) {
      case 'Shopify':
        return 'bg-gradient-to-r from-[#DFF7B2] to-[#5F8E3E] bg-clip-text text-transparent';
      case 'Akinon':
        return 'bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent';
      case 'AEM':
        return 'bg-gradient-to-r from-[#7127E0] to-[#E8D8FF] bg-clip-text text-transparent';
      case 'Pimcore':
        return 'bg-gradient-to-r from-[#800080] to-[#B366B3] bg-clip-text text-transparent';
      default:
        return 'text-white';
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Regular span component for mobile view
  const TextSpan = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <span className={`${isMobile ? 'text-white' : className} mr-[0.25em]`}>{children}</span>;
  };

  // Animated component for desktop view
  const AnimatedSpan = ({ children, className = '', variants }: { 
    children: React.ReactNode, 
    className?: string,
    variants: Variants
  }) => {
    return (
      <motion.span
        variants={variants}
        className={`${isMobile ? 'text-white' : className} mr-[0.25em]`}
      >
        {children}
      </motion.span>
    );
  };

  return (
    <section className="bg-[#171515] py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Description Text */}
          {isMobile ? (
            // Static version for mobile
            <div className="max-w-full md:max-w-[95%] lg:max-w-[90%]">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-superior leading-tight md:leading-[1.16] flex flex-wrap">
                {/* First part of text */}
                {text.split(" ").map((word, i) => (
                  <TextSpan key={i} className="text-white">
                    {word}
                  </TextSpan>
                ))}
                
                {/* Platform names - all white on mobile */}
                <TextSpan className="text-white">Shopify,</TextSpan>
                <TextSpan className="text-white">Adobe</TextSpan>
                <TextSpan className="text-white">Commerce,</TextSpan>
                <TextSpan className="text-white">Akinon,</TextSpan>
                <TextSpan className="text-white">AEM,</TextSpan>
                <TextSpan className="text-white">Pimcore,</TextSpan>
                <TextSpan className="text-white">CRO,</TextSpan>
                <TextSpan className="text-white">Performance</TextSpan>
                <TextSpan className="text-white">Commerce.</TextSpan>

                {/* Second part of text */}
                {text2.split(" ").map((word, i) => (
                  <TextSpan key={`second-${i}`} className="text-white">
                    {word}
                  </TextSpan>
                ))}
              </p>
            </div>
          ) : (
            // Animated version for desktop
            <motion.div 
              className="max-w-full md:max-w-[95%] lg:max-w-[90%]"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-superior leading-tight md:leading-[1.16] flex flex-wrap">
                {/* First part of text */}
                {text.split(" ").map((word, i) => (
                  <AnimatedSpan
                    key={i}
                    variants={child}
                    className={getWordColor(word)}
                  >
                    {word}
                  </AnimatedSpan>
                ))}
                
                {/* Platform names with special styling */}
                <AnimatedSpan variants={child} className="bg-gradient-to-r from-[#DFF7B2] to-[#5F8E3E] bg-clip-text text-transparent">Shopify,</AnimatedSpan>
                <AnimatedSpan variants={child} className="text-white">Adobe</AnimatedSpan>
                <AnimatedSpan variants={child} className="text-white">Commerce,</AnimatedSpan>
                <AnimatedSpan variants={child} className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent">Akinon,</AnimatedSpan>
                <AnimatedSpan variants={child} className="bg-gradient-to-r from-[#EB1000] to-[#FFCCC8] bg-clip-text text-transparent">AEM,</AnimatedSpan>
                <AnimatedSpan variants={child} className="bg-gradient-to-r from-[#7127E0] to-[#E8D8FF] bg-clip-text text-transparent">Pimcore,</AnimatedSpan>
                <AnimatedSpan variants={child} className="text-white">CRO,</AnimatedSpan>
                <AnimatedSpan variants={child} className="text-white">Performance</AnimatedSpan>
                <AnimatedSpan variants={child} className="text-white">Commerce.</AnimatedSpan>

                {/* Second part of text */}
                {text2.split(" ").map((word, i) => (
                  <AnimatedSpan
                    key={`second-${i}`}
                    variants={child}
                    className="text-white"
                  >
                    {word}
                  </AnimatedSpan>
                ))}
              </p>
            </motion.div>
          )}

          {/* Partner Logos */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:flex-nowrap md:items-center">
              {partners.map((partner, index) => (
                <div key={partner.name} className="flex items-center mb-4 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="h-20 sm:h-24 md:h-32">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={320}
                        height={100}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        style={{ maxHeight: '100%', width: 'auto', maxWidth: '320px', height: 'auto' }}
                      />
                    </div>
                    {partner.label && (
                      <span className="text-[11px] sm:text-[12px] text-white/70 mt-2 text-center whitespace-nowrap">
                        {partner.label}
                      </span>
                    )}
                  </div>
                  {index < partners.length - 1 && (
                    <div className="hidden md:block w-px h-24 bg-white/20 mx-5 lg:mx-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 