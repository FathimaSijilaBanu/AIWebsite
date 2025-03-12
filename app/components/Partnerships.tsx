'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Partnerships = () => {
  // Double the items to create seamless loop
  const firstRowPartners = [
    { id: 1, image: '/images/partners/partner1.png', alt: 'Partner 1' },
    { id: 2, image: '/images/partners/partner2.png', alt: 'Partner 2' },
    { id: 3, image: '/images/partners/partner3.png', alt: 'Partner 3' },
    { id: 4, image: '/images/partners/partner4.png', alt: 'Partner 4' },
    { id: 5, image: '/images/partners/partner5.png', alt: 'Partner 5' },
    { id: 6, image: '/images/partners/partner6.png', alt: 'Partner 6' },
    { id: 7, image: '/images/partners/partner7.png', alt: 'Partner 7' },
    // Duplicate for seamless loop
    { id: 8, image: '/images/partners/partner1.png', alt: 'Partner 1' },
    { id: 9, image: '/images/partners/partner2.png', alt: 'Partner 2' },
    { id: 10, image: '/images/partners/partner3.png', alt: 'Partner 3' },
    { id: 11, image: '/images/partners/partner4.png', alt: 'Partner 4' },
    { id: 12, image: '/images/partners/partner5.png', alt: 'Partner 5' },
    { id: 13, image: '/images/partners/partner6.png', alt: 'Partner 6' },
    { id: 14, image: '/images/partners/partner7.png', alt: 'Partner 7' },
  ];

  const secondRowPartners = [
    { id: 1, image: '/images/partners/partner8.png', alt: 'Partner 8' },
    { id: 2, image: '/images/partners/partner9.png', alt: 'Partner 9' },
    { id: 3, image: '/images/partners/partner10.png', alt: 'Partner 10' },
    { id: 4, image: '/images/partners/partner1.png', alt: 'Partner 1' },
    { id: 5, image: '/images/partners/partner2.png', alt: 'Partner 2' },
    { id: 6, image: '/images/partners/partner3.png', alt: 'Partner 3' },
    { id: 7, image: '/images/partners/partner4.png', alt: 'Partner 4' },
    // Duplicate for seamless loop
    { id: 8, image: '/images/partners/partner8.png', alt: 'Partner 8' },
    { id: 9, image: '/images/partners/partner9.png', alt: 'Partner 9' },
    { id: 10, image: '/images/partners/partner10.png', alt: 'Partner 10' },
    { id: 11, image: '/images/partners/partner1.png', alt: 'Partner 1' },
    { id: 12, image: '/images/partners/partner2.png', alt: 'Partner 2' },
    { id: 13, image: '/images/partners/partner3.png', alt: 'Partner 3' },
    { id: 14, image: '/images/partners/partner4.png', alt: 'Partner 4' },
  ];

  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-wider mb-6"
          >
            Our Partnerships
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-light"
          >
            Industry leading Partnerships
          </motion.h2>
        </div>

        <div className="space-y-6">
          {/* First Row - Right to Left */}
          <div className="relative">
            <motion.div 
              animate={{ x: [0, -1400] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {firstRowPartners.map((partner) => (
                <div 
                  key={partner.id}
                  className="relative w-[200px] aspect-square flex-shrink-0 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors"
                >
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    fill
                    className="object-contain p-6 filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative">
            <motion.div 
              animate={{ x: [-1400, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {secondRowPartners.map((partner) => (
                <div 
                  key={`${partner.id}-second`}
                  className="relative w-[200px] aspect-square flex-shrink-0 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors"
                >
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    fill
                    className="object-contain p-6 filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button className="border border-white px-9 py-4 rounded-3xl flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
            <span>View All</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19V5H19V19H5Z" fill="none"/>
              <path d="M16 8.00023L18.0002 10.0002L16 12.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 10.0002H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships; 