'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const awards = [
  {
    title: 'Recognized as a trusted digital transformation partner',
    year: '2020',
    gradient: {
      from: '#FF4800',
      to: '#FF8A00'
    },
    icon: '/images/awards/platform-icons/magento.svg',
    finalPosition: 0,
    hoverImages: {
      image1: '/images/awards/award1.1.png',
      image2: '/images/awards/award1.2.png'
    }
  },
  {
    title: 'Top E-Commerce Development Company',
    year: '2023',
    gradient: {
      from: '#7F31D4',
      to: '#5900B8'
    },
    icon: '/images/awards/platform-icons/ecommerce.svg',
    finalPosition: 1,
    hoverImages: {
      image1: '/images/awards/award2.1.jpg',
      image2: '/images/awards/award2.2.jpg'
    }
  },
  {
    title: 'Recognized as a trusted digital transformation partner',
    year: '2020',
    gradient: {
      from: '#FF0000',
      to: '#C20303'
    },
    icon: '/images/awards/platform-icons/Adobe.svg',
    finalPosition: 2,
    hoverImages: {
      image1: '/images/awards/award3.1.jpg',
      image2: '/images/awards/award3.2.jpg' 
    }
  },
  {
    title: 'Shopify Plus Partner Certification',
    year: '2024',
    gradient: {
      from: '#E6BD19',
      to: '#A59200'
    },
    icon: '/images/awards/platform-icons/shopify.svg',
    finalPosition: 3,
    hoverImages: {
      image1: '/images/awards/award4.1.jpg',
      image2: '/images/awards/award4.2.jpg'
    }
  }
];

const Awards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative bg-black py-12 overflow-hidden">
      {/* Floating hover images container - show for any hovered card */}
      {hoveredCard !== null && !isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
          <motion.div
            className="absolute top-[50px] w-[230px] h-[190px] shadow-xl"
            style={{
              left: `${320 + (hoveredCard * 336)}px`, // Adjust position based on hovered card
              zIndex: 2 // Higher z-index to ensure it overlaps
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={awards[hoveredCard].hoverImages.image1}
              alt={`Award image 1 for ${awards[hoveredCard].title}`}
              fill
              sizes="(max-width: 768px) 150px, 230px"
              className="object-cover rounded-lg"
              style={{ 
                transform: 'rotate(-14deg)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.25)'
              }}
            />
          </motion.div>
          <motion.div
            className="absolute top-[80px] w-[220px] h-[180px] shadow-xl"
            style={{
              left: `${420 + (hoveredCard * 336)}px`, // Adjust position based on hovered card
              zIndex: 1 // Lower z-index so it's underneath
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Image 
              src={awards[hoveredCard].hoverImages.image2}
              alt={`Award image 2 for ${awards[hoveredCard].title}`}
              fill
              sizes="(max-width: 768px) 150px, 220px"
              className="object-cover rounded-lg"
              style={{ 
                transform: 'rotate(20deg)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.25)'
              }}
            />
          </motion.div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.p 
            className="font-superior text-base font-light uppercase tracking-wider text-white mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            AWARDS & RECOGNITIONS
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative w-full">
              <h2 className="font-superior font-medium text-[32px] md:text-[54px] leading-[1.1] text-white">
                <motion.div 
                  className="text-center mb-4"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Step into our
                </motion.div>
                <motion.div 
                  className="md:ml-[400px]"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Hall of Fame
                </motion.div>
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="hidden md:block"
              >
                <Image
                  src="/images/awards/trophy.svg"
                  alt="Trophy"
                  width={200}
                  height={200}
                  className="absolute top-[-80%] right-[25%]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="md:hidden absolute right-[25%] top-[-30%]"
              >
                <Image
                  src="/images/awards/trophy.svg"
                  alt="Trophy"
                  width={100}
                  height={100}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Awards Grid with Animation - Desktop */}
        <div className="relative hidden md:block">
          <motion.div 
            className="relative max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={award.title + index}
                className="absolute left-0 rounded-[24px] overflow-hidden"
                style={{
                  transformOrigin: "center center",
                  width: "312px",
                  height: "409px",
                  marginRight: "24px",
                }}
                variants={{
                  hidden: { 
                    x: "50%",
                    y: 0,
                    rotate: -5 + (index * 15),
                   
                    zIndex:10,
                  },
                  visible: { 
                    x: `${index * 336}px`,
                    y: 0,
                    rotate: 0,
                    zIndex: index === 2 ? 4 : awards.length - index,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      mass: 1,
                      delay: index * 0.2
                    }
                  }
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="p-8 h-full flex flex-col relative"
                  style={{
                    background: `linear-gradient(135deg, ${award.gradient.from}, ${award.gradient.to})`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center p-4 relative z-10">
                    <Image
                      src={award.icon}
                      alt={award.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="font-superior font-medium text-2xl text-white mt-[81px] relative z-10">
                    {award.title}
                  </h3>
                  <p className="font-superior font-light text-lg text-white/80 mt-[81px] relative z-10">
                    {award.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Awards Grid for Mobile */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-4 w-max">
              {awards.map((award, index) => (
                <motion.div
                  key={`mobile-${award.title}-${index}`}
                  className="rounded-[16px] overflow-hidden min-w-[260px] max-w-[260px]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    className="p-6 flex flex-col h-[320px]"
                    style={{
                      background: `linear-gradient(135deg, ${award.gradient.from}, ${award.gradient.to})`,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center p-3 relative z-10">
                      <Image
                        src={award.icon}
                        alt={award.title}
                        width={30}
                        height={30}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="font-superior font-medium text-xl text-white mt-6 relative z-10">
                      {award.title}
                    </h3>
                    <p className="font-superior font-light text-base text-white/80 mt-4 relative z-10">
                      {award.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Add this CSS to your globals.css or a style tag for hiding scrollbar */}
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* View All Button */}
        <div className="flex justify-center mt-12 md:mt-[500px] mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link href="/awards" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 text-white font-superior font-light gap-2 hover:bg-white/10 transition-colors">
              View All
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
