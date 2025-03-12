'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const awards = [
  {
    title: 'Recognized as a trusted digital transformation partner',
    year: '2020',
    gradient: {
      from: '#FF4800',
      to: '#FF8A00'
    },
    icon: '/images/awards/platform-icons/magento.svg'
  },
  {
    title: 'Top E-Commerce Development Company',
    year: '2023',
    gradient: {
      from: '#7F31D4',
      to: '#5900B8'
    },
    icon: '/images/awards/platform-icons/ecommerce.svg'
  },
  {
    title: 'Recognized as a trusted digital transformation partner',
    year: '2020',
    gradient: {
      from: '#FF0000',
      to: '#C20303'
    },
    icon: '/images/awards/platform-icons/Adobe.svg'
  },
  {
    title: 'Shopify Plus Partner Certification',
    year: '2024',
    gradient: {
      from: '#E6BD19',
      to: '#A59200'
    },
    icon: '/images/awards/platform-icons/shopify.svg'
  }
];

const Awards = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="font-superior text-base font-light uppercase tracking-wider text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AWARDS & RECOGNITIONS
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-superior font-medium text-[64px] leading-[1.1] text-white">
              Step into our
              <br />
                   Hall of Fame
            </h2>
            <div className="relative w-32 h-32">
              <Image
                src="/images/awards/trophy.svg"
                alt="Trophy"
                width={400}
                height={400}
                className="absolute -top-12 -right-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.title + index}
              className="relative overflow-hidden rounded-2xl aspect-square"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="p-8 h-full"
                style={{
                  background: `linear-gradient(135deg, ${award.gradient.from}, ${award.gradient.to})`
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center p-4">
                    <Image
                      src={award.icon}
                      alt={award.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h3 className="font-superior font-medium text-2xl text-white mb-4">
                      {award.title}
                    </h3>
                    <p className="font-superior font-light text-lg text-white/80 mt-5">
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/awards"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full text-base font-superior font-medium text-white hover:bg-white hover:text-black transition-colors"
            >
              View All
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 