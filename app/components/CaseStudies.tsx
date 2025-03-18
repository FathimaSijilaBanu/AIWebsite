'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface CaseStudyCardProps {
  title: string;
  project: string;
  industry: string;
  platform: string;
  stats: {
    stat1: {
      value: string;
      description: string;
    };
    stat2: {
      value: string;
      description: string;
    };
  };
  imageSrc: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps & { 
  index: number;
  isVisible: boolean;
}> = ({
  title,
  project,
  industry,
  platform,
  stats,
  imageSrc,
  index,
  isVisible
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { 
        opacity: 1,
        y: 0,
        transition: { 
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1]
        }
      } : { opacity: 0, y: 100 }}
      style={{
        position: 'absolute',
        top: index * 15,
        left: 0,
        right: 0,
        zIndex: index
      }}
      className="w-full rounded-2xl overflow-hidden bg-white transform-gpu"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-[200px] sm:h-[250px] md:h-[450px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-between relative">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <h3 className="text-[24px] sm:text-[28px] md:text-[38px] leading-tight md:leading-[42px] font-medium text-black">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <span className="text-black">{project}</span>
              <span className="text-[#8A8A8A]">|</span>
              <span className="text-black">{industry}</span>
              <span className="text-[#8A8A8A]">|</span>
              <span className="text-black">{platform}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 md:space-x-20 mt-8 md:mt-16 space-y-6 sm:space-y-0">
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[28px] sm:text-[32px] md:text-[38px] leading-tight md:leading-[38px] font-medium text-[#19BC37]">
                  {stats.stat1.value}
                </span>
                <Image
                  src="/icons/arrow_up.svg"
                  alt="Increase"
                  width={20}
                  height={20}
                  className="mt-1"
                />
              </div>
              <p className="text-sm sm:text-base text-black">
                {stats.stat1.description}
              </p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[28px] sm:text-[32px] md:text-[38px] leading-tight md:leading-[38px] font-medium text-[#19BC37]">
                  {stats.stat2.value}
                </span>
                <Image
                  src="/icons/shopping_cart.svg"
                  alt="Cart"
                  width={20}
                  height={20}
                  className="mt-1"
                />
              </div>
              <p className="text-sm sm:text-base text-black">
                {stats.stat2.description}
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { 
              opacity: 1,
              transition: { duration: 1, delay: 0.5 }
            } : { opacity: 0 }}
            className="flex justify-center mt-8 md:mt-0 md:absolute md:right-[100px] md:bottom-[150px] md:translate-x-1/2 md:transform"
          >
            <Link
              href="#"
              className="flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-black text-white text-center hover:bg-black/90 transition-colors"
            >
              <span className="text-xs sm:text-sm font-medium">View</span>
              <span className="text-xs sm:text-sm font-medium">Case Study</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [visibleCardIndex, setVisibleCardIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const caseStudies = [
    {
      title: "Transforming E-commerce for a Global Retail Giant",
      project: "Project 2",
      industry: "Retail",
      platform: "Adobe Commerce",
      stats: {
        stat1: {
          value: "35%",
          description: "In online sales within six months"
        },
        stat2: {
          value: "25%",
          description: "Improved performance, <2s load time."
        }
      },
      imageSrc: "/images/case-study-1.jpg"
    },
    {
      title: "Revolutionizing Omnichannel Retail for a Fashion Brand",
      project: "Project 2",
      industry: "Fashion",
      platform: "Akinon",
      stats: {
        stat1: {
          value: "50%",
          description: "reduction in cart abandonment rates."
        },
        stat2: {
          value: "25%",
          description: "growth in repeat purchases."
        }
      },
      imageSrc: "/images/case-study-2.jpg"
    },
    {
      title: "Boosting Engagement for a Leading Education Provider",
      project: "Project 3",
      industry: "Education",
      platform: "AEM",
      stats: {
        stat1: {
          value: "50%",
          description: "Increase in web engagement."
        },
        stat2: {
          value: "25%",
          description: "Boost in student inquiries."
        }
      },
      imageSrc: "/images/case-study-3.jpg"
    },
    {
      title: "Enhancing Product Information Management for a Retailer",
      project: "Project 4",
      industry: "Toys & Games",
      platform: "Pimcore",
      stats: {
        stat1: {
          value: "40%",
          description: "faster product updates."
        },
        stat2: {
          value: "30%",
          description: "Faster product launches."
        }
      },
      imageSrc: "/images/case-study-4.jpg"
    },
    {
      title: "Unlocking New Opportunities with Shopify for a Health Brand",
      project: "Project 5",
      industry: "Healthcare & Wellness",
      platform: "Shopify",
      stats: {
        stat1: {
          value: "25%",
          description: "Increase in mobile transactions."
        },
        stat2: {
          value: "15%",
          description: "higher average order value."
        }
      },
      imageSrc: "/images/case-study-5.jpg"
    }
  ];

  // Handle initial click/touch to reveal first card
  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setVisibleCardIndex(0);
    }
  };

  // Handle wheel events to reveal next cards without scrolling the page
  useEffect(() => {
    if (!hasInteracted || !sectionRef.current) return;
    
    const section = sectionRef.current;
    
    const handleWheel = (e: WheelEvent) => {
      // Only handle scrolling down (positive deltaY)
      if (e.deltaY > 0 && visibleCardIndex < caseStudies.length - 1) {
        e.preventDefault();
        
        // Debounce the scroll event
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        scrollTimeout.current = setTimeout(() => {
          setVisibleCardIndex(prev => Math.min(prev + 1, caseStudies.length - 1));
        }, 300); // Adjust timeout as needed for responsiveness
      }
    };
    
    // For mobile touch events
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!hasInteracted || visibleCardIndex >= caseStudies.length - 1) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      // If scrolling down and still have cards to reveal
      if (diff > 50) { // Threshold for swipe detection
        e.preventDefault();
        
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        
        scrollTimeout.current = setTimeout(() => {
          setVisibleCardIndex(prev => Math.min(prev + 1, caseStudies.length - 1));
          touchStartY = touchY; // Reset for continuous scrolling
        }, 300);
      }
    };
    
    // Add event listeners
    section.addEventListener('wheel', handleWheel, { passive: false });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      // Clean up event listeners
      section.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchmove', handleTouchMove);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [hasInteracted, visibleCardIndex, caseStudies.length]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#1F1F1F] py-8 sm:py-16 md:py-24 cursor-pointer min-h-screen flex flex-col justify-center" 
      onClick={handleInteraction}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.p 
            className="font-superior text-sm sm:text-base font-light uppercase tracking-wider text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CASE STUDIES
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-superior font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
             Driving growth through Innovation
            </h2>
          </motion.div>
          
          {!hasInteracted && (
            <motion.p 
              className="text-white mt-6 sm:mt-8 opacity-70 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              
            </motion.p>
          )}
        </div>
        
        <div className="relative h-[500px] sm:h-[550px] md:h-[600px]">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index} 
              {...study} 
              index={index}
              isVisible={index <= visibleCardIndex}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: visibleCardIndex === caseStudies.length - 1 ? 1 : 0,
            transition: { duration: 1, delay: 0.5 }
          }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <Link
            href="#"
            className="flex items-center gap-[6px] px-4 sm:px-6 py-3 sm:py-4 border border-white rounded-[26px] text-white hover:bg-white hover:text-black transition-all group"
          >
            <span className="text-sm sm:text-base font-medium">Explore All Case Studies</span>
            <Image
              src="/icons/arrow_outward.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="invert group-hover:invert-0 sm:w-[20px] sm:h-[20px]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 
