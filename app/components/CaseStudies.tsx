'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  isAnimating: boolean;
}> = ({
  title,
  project,
  industry,
  platform,
  stats,
  imageSrc,
  index,
  isAnimating
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 1000 }}
      animate={isAnimating ? { 
        opacity: 1,
        y: 0,
        transition: { 
          duration: 1,
          delay: index * 0.3,
          ease: [0.16, 1, 0.3, 1]
        }
      } : {}}
      style={{
        position: 'absolute',
        top: index * 15,
        left: 0,
        right: 0,
        zIndex: index
      }}
      className="w-full rounded-2xl overflow-hidden bg-white transform-gpu"
    >
      <div className="flex flex-row">
        <div className="relative w-1/2 h-[500px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="w-1/2 p-12 flex flex-col gap-[40px] relative">
          <Link
            href="#"
            className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-black text-white hover:bg-white hover:text-black transition-all group absolute top-1/2 -translate-y-1/2 right-8 mt-[25px]"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-s font-medium">View</span>
              <span className="text-s font-medium">Case Study</span>
            </div>
          </Link>
          <div className="flex flex-col gap-6">
            <h3 className="text-[38px] leading-[42px] font-medium text-black">
              {title}
            </h3>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-black">{project}</span>
              <span className="text-[#8A8A8A]">|</span>
              <span className="text-black">{industry}</span>
              <span className="text-[#8A8A8A]">|</span>
              <span className="text-black">{platform}</span>
            </div>
          </div>
          <div className="flex gap-[22px]">
            <div className="w-[176px] flex flex-col gap-[26px]">
              <div className="flex items-end gap-[3px]">
                <span className="text-[38px] leading-[42px] text-[#19BC37]">
                  {stats.stat1.value}
                </span>
                <Image
                  src="/icons/arrow_warm_up.svg"
                  alt="Increase"
                  width={24}
                  height={24}
                  className="mb-2"
                />
              </div>
              <p className="text-lg text-black">{stats.stat1.description}</p>
            </div>
            <div className="w-[1px] h-full bg-[#E3E3E3]" />
            <div className="w-[193px] flex flex-col gap-[26px]">
              <div className="flex items-end gap-[3px]">
                <span className="text-[38px] leading-[42px] text-[#19BC37]">
                  {stats.stat2.value}
                </span>
                <Image
                  src="/icons/shopping_cart.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="mb-2"
                />
              </div>
              <p className="text-lg text-black">{stats.stat2.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handleScreenClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <section 
      className="w-full bg-[#1F1F1F] py-24 cursor-pointer" 
      onClick={handleScreenClick}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.p 
            className="font-superior text-base font-light uppercase tracking-wider text-white mb-4"
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
            <h2 className="font-superior font-medium text-6xl text-white">
             Driving growth through Innovation
            </h2>
           
          </motion.div>
        </div>
        <div className="relative" style={{ height: '600px' }}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index} 
              {...study} 
              index={index}
              isAnimating={isAnimating}
            />
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isAnimating ? 1 : 0,
            transition: { 
              duration: 1,
              delay: (caseStudies.length - 1) * 0.3 + 1 + 0.3
            }
          }}
          className="flex justify-center"
        >
          <Link
            href="#"
            className="flex items-center gap-[6px] px-6 py-4 border border-white rounded-[26px] text-white hover:bg-white hover:text-black transition-all group"
          >
            <span className="text-base font-medium">Explore All Case Studies</span>
            <Image
              src="/icons/arrow_outward.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="invert group-hover:invert-0"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 
