'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Feature {
  text: string;
  highlight: string;
}

interface Accelerator {
  title: string;
  description: string;
  features: Feature[];
  image: string;
}

const Accelerators = () => {
  const accelerators: Accelerator[] = [
    {
      title: 'cWarmer',
      description: 'cWarmer accelerates e-commerce stores with intelligent cache preloading, ensuring rapid page loads, improved user experiences, and reduced server strain.',
      features: [
        {text: 'Smart caching for', highlight: 'quicker loads'},
        {text: 'Improved server', highlight: 'performance'},
        {text: 'Compatible with', highlight: 'Magento and Shopify'}
      ],
      image: '/images/cwarmer.svg'
    },
    {
      title: 'Power Listing',
      description: 'Leverage PowerListing to optimize product rendering and enhance the shopping experience. This suite uses OpenSearch/ElasticSearch for faster, more efficient listings.',
      features: [
        {text: 'PLP loads in under', highlight: '2 seconds, no caching'},
        {text: 'Seamlessly integrates with', highlight: 'Adobe Commerce'},
        {text: 'Performance boosts with', highlight: 'zero recurring costs'}
      ],
      image: '/images/powerlisting.svg'
    },
    {
      title: 'Jewelry Product Accel',
      description: 'Transform jewelry e-commerce with a custom product catalog, advanced filtering, and enriched UX/UI. Streamline operations and delight customers with tailored features.',
      features: [
        {text: 'Performance boosts with', highlight: 'zero recurring costs'},
        {text: 'High-end UI/UX tailored for', highlight: 'jewelry retail'},
        {text: 'Optimized checkout for', highlight: 'higher conversions'}
      ],
      image: '/images/3d/jewelry-accelerator-3d.png'
    },
    {
      title: 'Pimcore & Magento/Shopify Integration',
      description: 'Quickly integrate Pimcore with Magento or Shopify for seamless product information management. Unify data for a streamlined workflow and better user experience.',
      features: [
        {text: 'Quick integration for', highlight: 'real-time data sync'},
        {text: 'Streamlined workflows for', highlight: 'PIM and e-commerce'},
        {text: 'Compatible with', highlight: 'Magento and Shopify'}
      ],
      image: '/images/pimcore-integration.png'
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-start mb-20">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-black/80 mb-6">ACCELERATORS</h3>
            <h2 className="text-[64px] leading-[1.1] font-normal text-black max-w-[800px]">
              Accelerating eCommerce Innovation with Custom Solutions
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-black rounded-full px-8 py-4 flex items-center gap-3 hover:bg-black hover:text-white transition-all text-[15px]"
          >
            Lets Connect
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {accelerators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#1A1A1A] rounded-2xl cursor-pointer h-[420px] min-w-[260px] flex-shrink-0"
            >
              {/* Arrow Icon */}
              <motion.div 
                className="absolute top-6 right-6 z-30"
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              {/* Large Image Container */}
              <div className="absolute -top-8 -right-8 w-[280px] h-[280px]">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain object-right-top"
                    style={{
                      transform: 'scale(1.05)',
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.12))'
                    }}
                    priority
                  />
                </motion.div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/95 to-transparent z-20" />
              
              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end">
                <div className="p-8">
                  <motion.div 
                    className="inline-flex px-4 py-1.5 mb-4 bg-[#1D1D1D] rounded-full border border-[#2A2A2A]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-[15px] font-normal text-white">{item.title}</span>
                  </motion.div>
                  
                  <p className="text-[15px] leading-[1.5] text-white/80 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="space-y-3.5">
                    {item.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12m0 0l-6-6m6 6l-6 6" stroke="url(#feature-arrow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[15px] text-white/70">
                          {feature.text}{' '}
                          <span className="bg-gradient-to-r from-[#C8D2FF] via-[#FF8FE8] to-[#D829D8] bg-clip-text text-transparent font-medium">
                            {feature.highlight}
                          </span>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient definitions */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient id="feature-arrow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8D2FF" />
            <stop offset="100%" stopColor="#D829D8" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Accelerators; 