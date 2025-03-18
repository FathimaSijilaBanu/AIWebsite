'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  title: string;
  image: string;
  isMain?: boolean;
}

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      title: "How Codilar Unified Phygital Shopping Experience for ALDO | Codilar's Customer Success Story",
      image: '/images/testimonials/aldo-case-study.jpg',
      isMain: true,
    },
    {
      title: "Lals Group | Codilar's Customer Success Story",
      image: '/images/testimonials/lals-case-study.jpg',
    },
    {
      title: "Lals Group | Codilar's Customer Success Story",
      image: '/images/testimonials/lals-case-study.jpg',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF5F9] py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-black/80 block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-[56px] leading-[1.16] font-medium text-[#1A1A1A]">
            Real Success in the Real World
          </h2>
        </div>

        <div className="grid grid-cols-[1fr_400px] gap-8">
          {/* Main Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden"
          >
            <Image
              src={testimonials[0].image}
              alt={testimonials[0].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4.99999V19C5 19.3466 5.18 19.6684 5.47 19.8506C5.76 20.0329 6.12 20.0494 6.424 19.8944L19.424 12.8944C19.747 12.7288 19.957 12.3844 19.957 12C19.957 11.6156 19.747 11.2712 19.424 11.1056L6.424 4.10557C6.12 3.95057 5.76 3.96705 5.47 4.14931C5.18 4.33157 5 4.65338 5 4.99999Z" fill="white"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Main Video Title */}
            <h3 className="text-2xl font-medium text-black leading-normal">
              How Codilar Unified Phygital Shopping Experience for ALDO | Codilar&apos;s Customer Success Story
            </h3>

            {/* More Stories Section */}
            <div>
              <h4 className="text-lg font-medium mb-6">More Stories</h4>
              <div className="space-y-4">
                {testimonials.slice(1).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative h-[180px] rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 4.99999V19C5 19.3466 5.18 19.6684 5.47 19.8506C5.76 20.0329 6.12 20.0494 6.424 19.8944L19.424 12.8944C19.747 12.7288 19.957 12.3844 19.957 12C19.957 11.6156 19.747 11.2712 19.424 11.1056L6.424 4.10557C6.12 3.95057 5.76 3.96705 5.47 4.14931C5.18 4.33157 5 4.65338 5 4.99999Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-7 mt-12">
          <button
            onClick={handlePrevSlide}
            className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group opacity-25"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span className="text-lg font-light">
            {currentSlide + 1} of {testimonials.length}
          </span>

          <button
            onClick={handleNextSlide}
            className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 