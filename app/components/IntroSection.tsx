'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroSection = () => {
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

  return (
    <section className="bg-[#171515] py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Description Text */}
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
                <motion.span
                  key={i}
                  variants={child}
                  className={`${getWordColor(word)} mr-[0.25em]`}
                >
                  {word}
                </motion.span>
              ))}
              
              {/* Platform names with special styling */}
              <motion.span variants={child} className="bg-gradient-to-r from-[#DFF7B2] to-[#5F8E3E] bg-clip-text text-transparent mr-[0.25em]">Shopify,</motion.span>
              <motion.span variants={child} className="text-white mr-[0.25em]">Adobe</motion.span>
              <motion.span variants={child} className="text-white mr-[0.25em]">Commerce,</motion.span>
              <motion.span variants={child} className="bg-gradient-to-r from-[#FF6B00] to-[#FF9248] bg-clip-text text-transparent mr-[0.25em]">Akinon,</motion.span>
              <motion.span variants={child} className="bg-gradient-to-r from-[#EB1000] to-[#FFCCC8] bg-clip-text text-transparent mr-[0.25em]">AEM,</motion.span>
              <motion.span variants={child} className="bg-gradient-to-r from-[#7127E0] to-[#E8D8FF] bg-clip-text text-transparent mr-[0.25em]">Pimcore,</motion.span>
              <motion.span variants={child} className="text-white mr-[0.25em]">CRO,</motion.span>
              <motion.span variants={child} className="text-white mr-[0.25em]">Performance</motion.span>
              <motion.span variants={child} className="text-white mr-[0.25em]">Commerce.</motion.span>

              {/* Second part of text */}
              {text2.split(" ").map((word, i) => (
                <motion.span
                  key={`second-${i}`}
                  variants={child}
                  className="text-white mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Partner Logos */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:flex-nowrap md:items-center">
              {partners.map((partner, index) => (
                <div key={partner.name} className="flex items-center mb-4 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="h-16 sm:h-20 md:h-24">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={280}
                        height={80}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        style={{ maxHeight: '100%', width: 'auto', maxWidth: '280px', height: 'auto' }}
                      />
                    </div>
                    {partner.label && (
                      <span className="text-[11px] sm:text-[12px] text-white/70 mt-2 text-center whitespace-nowrap">
                        {partner.label}
                      </span>
                    )}
                  </div>
                  {index < partners.length - 1 && (
                    <div className="hidden md:block w-px h-20 bg-white/20 mx-5 lg:mx-10" />
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