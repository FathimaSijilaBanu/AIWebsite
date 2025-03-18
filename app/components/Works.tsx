'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Skechers',
    category: 'Adobe Commerce',
    description: 'Revolutionizing the online shopping experience with a feature-rich Adobe Commerce implementation.',
    image: '/images/works/skechers.jpg',
    link: '/works/skechers'
  },
  {
    title: 'Decathlon',
    category: 'Adobe Commerce',
    description: 'Empowering sports enthusiasts with a seamless digital commerce platform.',
    image: '/images/works/decathlon.jpg',
    link: '/works/decathlon'
  },
  {
    title: 'Puma',
    category: 'Shopify Plus',
    description: 'Creating an immersive brand experience through cutting-edge eCommerce solutions.',
    image: '/images/works/puma.jpg',
    link: '/works/puma'
  }
];

const Works = () => {
  return (
    <section className="relative bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="font-superior text-lg text-[#1F1F1F]/60 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Works
          </motion.p>
          <motion.h2 
            className="font-superior font-medium text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering Excellence Through Innovation
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-superior text-sm text-[#1F1F1F]/60">{project.category}</span>
                  <div className="h-[1px] flex-1 bg-[#1F1F1F]/10" />
                </div>
                <h3 className="font-superior font-medium text-2xl text-[#1F1F1F] mb-3">
                  {project.title}
                </h3>
                <p className="font-superior text-base text-[#1F1F1F]/60 mb-6">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="group/link inline-flex items-center gap-2 text-[#1F1F1F]"
                >
                  <span className="font-superior font-medium text-base">View Case Study</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    className="transition-transform group-hover/link:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M5.83334 14.1667L14.1667 5.83334M14.1667 5.83334H5.83334M14.1667 5.83334V14.1667" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Works Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="group inline-flex items-center gap-2 border border-[#1F1F1F]/20 rounded-[26px] px-8 py-4 hover:bg-[#1F1F1F]/5 transition-all">
            <span className="font-superior font-medium text-base text-[#1F1F1F]">View All Works</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className="transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5.83334 14.1667L14.1667 5.83334M14.1667 5.83334H5.83334M14.1667 5.83334V14.1667" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Works; 