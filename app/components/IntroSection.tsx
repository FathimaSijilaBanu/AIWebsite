'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const partners = [
    { name: 'Adobe Commerce', image: '/images/partners/adobe-commerce.png' },
    { name: 'Shopify', image: '/images/partners/shopify.png' },
    { name: 'Magento Solution Partner', image: '/images/partners/magento-solution-partner.png' },
    { name: 'Akinon', image: '/images/partners/akinon.png' },
    { name: 'Pimcore', image: '/images/partners/pimcore.png' },
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
    <section className="bg-[#171515] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Description Text */}
          <motion.div 
            className="max-w-[90%]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-5xl font-superior leading-[1.16] flex flex-wrap">
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
          <motion.div 
            className="flex items-center justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name} 
                className="flex items-center"
                variants={child}
              >
                <div className="relative h-12 w-32">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                {index < partners.length - 1 && (
                  <div className="w-px h-12 bg-[#EBEBEB] mx-6" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 