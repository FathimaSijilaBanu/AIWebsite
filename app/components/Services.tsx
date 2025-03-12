'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'eCommerce Development',
    description: 'We build scalable and high-performing eCommerce solutions using platforms like Shopify, Adobe Commerce, and Akinon.',
    icon: '/images/services/ecommerce.svg'
  },
  {
    title: 'Digital Experience',
    description: 'Create immersive digital experiences with AEM and other leading content management platforms.',
    icon: '/images/services/digital.svg'
  },
  {
    title: 'Product Information Management',
    description: 'Streamline your product data management with Pimcore and other PIM solutions.',
    icon: '/images/services/pim.svg'
  }
];

const Services = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[865px] mb-16">
          <motion.h2 
            className="font-superior font-medium text-3xl md:text-4xl text-[#1F1F1F] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive eCommerce Solutions<br />for Your Business Growth
          </motion.h2>
          <motion.p 
            className="font-superior font-light text-base md:text-lg text-[#1F1F1F]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer end-to-end eCommerce services that help businesses thrive in the digital marketplace.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#F8F8F8] rounded-2xl p-8 group hover:bg-[#1F1F1F] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <h3 className="font-superior font-medium text-xl text-[#1F1F1F] mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-superior font-light text-base text-[#1F1F1F]/80 group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 