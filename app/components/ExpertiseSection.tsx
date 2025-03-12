'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ExpertiseCardProps {
  title: string;
  icon: React.ReactNode;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-2 px-5 py-2 border border-[#B7B7B7] rounded-lg hover:border-black transition-colors"
  >
    <div className="w-8 h-8 flex items-center justify-center">
      {icon}
    </div>
    <span className="font-superior font-medium text-lg leading-[1.21]">{title}</span>
  </motion.div>
);

const ExpertiseSection = () => {
  const [currentSection, setCurrentSection] = useState(2);
  const [direction, setDirection] = useState(0);

  const handleScreenClick = () => {
    if (currentSection < 4) {
      setDirection(1);
      setCurrentSection(currentSection + 1);
    }
  };

  const digitalCommerceItems = [
    { title: 'Headless Commerce', icon: '🔌' },
    { title: 'Composable Commerce', icon: '🧩' },
    { title: 'B2C & Omnichannel', icon: '🛍️' },
    { title: 'D2C', icon: '📦' },
    { title: 'B2B Commerce', icon: '🤝' },
    { title: 'Mobile Commerce', icon: '📱' },
    { title: 'Order Management System (OMS)', icon: '📋' }
  ];

  const serviceItems = [
    { title: 'Strategy Consulting', icon: '🎯' },
    { title: 'Experience Design', icon: '🎨' },
    { title: 'Platform Engineering', icon: '⚙️' },
    { title: 'Conversion Rate Optimization', icon: '📈' },
    { title: 'DevOps', icon: '🔄' },
    { title: 'Managed Support', icon: '🛠️' },
    { title: 'Digital Marketing', icon: '📢' }
  ];

  const contentDataItems = [
    { title: 'Digital Experience (DXP)', icon: '🌐' },
    { title: 'Product Information Management (PIM)', icon: '📊' },
    { title: 'Analytics', icon: '📉' },
    { title: 'Customer Data Platform (CDP)', icon: '👥' }
  ];

  const sectionVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const cardVariants = {
    enter: { opacity: 0, y: 50 },
    center: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const renderSection = (sectionNumber: number) => {
    switch(sectionNumber) {
      case 2:
        return (
          <motion.div 
            key="section2"
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-7"
          >
            <div className="space-y-7">
              <motion.span 
                variants={cardVariants}
                className="text-base font-superior font-light uppercase text-black"
              >
                Our Expertises : 02
              </motion.span>
              <div className="space-y-7">
                <motion.h2 
                  variants={cardVariants}
                  className="text-5xl font-superior font-medium leading-[1.16]"
                >
                  2. Digital Commerce
                </motion.h2>
                <motion.div variants={cardVariants}>
                  <Link
                    href="/expertise/digital-commerce"
                    className="inline-flex items-center gap-1.5 px-6 py-4 border border-black rounded-[26px] text-base font-superior font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Explore All
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.p 
                  variants={cardVariants}
                  className="text-lg font-superior leading-[1.44] tracking-[0.01em] max-w-[657px]"
                >
                  Transform your business with innovative digital commerce solutions tailored for every industry and business model. From B2C to mobile commerce, Codilar delivers scalable, customer-focused platforms.
                </motion.p>
              </div>
            </div>
            <motion.div 
              variants={cardVariants}
              className="flex flex-wrap gap-4"
            >
              {digitalCommerceItems.map((item) => (
                <ExpertiseCard key={item.title} {...item} />
              ))}
            </motion.div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            key="section3"
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-7"
          >
            <div className="space-y-7">
              <motion.span 
                variants={cardVariants}
                className="text-base font-superior font-light uppercase"
              >
                Our Expertises : 03
              </motion.span>
              <div className="space-y-7">
                <motion.h2 
                  variants={cardVariants}
                  className="text-5xl font-superior font-medium leading-[1.16]"
                >
                  3. Service
                </motion.h2>
                <motion.div variants={cardVariants}>
                  <Link
                    href="/expertise/services"
                    className="inline-flex items-center gap-1.5 px-6 py-4 border border-black rounded-[26px] text-base font-superior font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Explore All
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.p 
                  variants={cardVariants}
                  className="text-lg font-superior leading-[1.44] tracking-[0.01em] max-w-[657px]"
                >
                  End-to-End Services to Achieve Your Business Goals. From strategic planning to operational execution, Codilar offers a full suite of services to optimize and grow your digital commerce capabilities.
                </motion.p>
              </div>
            </div>
            <motion.div 
              variants={cardVariants}
              className="flex flex-wrap gap-4"
            >
              {serviceItems.map((item) => (
                <ExpertiseCard key={item.title} {...item} />
              ))}
            </motion.div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            key="section4"
            custom={direction}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="space-y-7"
          >
            <div className="space-y-7">
              <motion.span 
                variants={cardVariants}
                className="text-base font-superior font-light uppercase"
              >
                Our Expertises : 04
              </motion.span>
              <div className="space-y-7">
                <motion.h2 
                  variants={cardVariants}
                  className="text-5xl font-superior font-medium leading-[1.16]"
                >
                  4. Content & Data
                </motion.h2>
                <motion.div variants={cardVariants}>
                  <Link
                    href="/expertise/content-data"
                    className="inline-flex items-center gap-1.5 px-6 py-4 border border-black rounded-[26px] text-base font-superior font-medium hover:bg-black hover:text-white transition-colors"
                  >
                    Explore All
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.p 
                  variants={cardVariants}
                  className="text-lg font-superior leading-[1.44] tracking-[0.01em] max-w-[657px]"
                >
                  Empower your business with streamlined content management and actionable insights. Codilar helps unify your data, optimize experiences, and enhance decision-making.
                </motion.p>
              </div>
            </div>
            <motion.div 
              variants={cardVariants}
              className="flex flex-wrap gap-4"
            >
              {contentDataItems.map((item) => (
                <ExpertiseCard key={item.title} {...item} />
              ))}
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      className="bg-white py-20 overflow-hidden cursor-pointer" 
      onClick={handleScreenClick}
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait" custom={direction}>
          {renderSection(currentSection)}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExpertiseSection; 