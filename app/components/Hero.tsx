'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden -mt-[88px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-radial from-black/15 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-[88px]">
        <div className="flex flex-col justify-between py-12 md:py-16 lg:py-24 min-h-[calc(100vh-88px)]">
          <div className="max-w-full md:max-w-[80%] lg:max-w-[865px] flex flex-col gap-6 md:gap-8 lg:gap-12">
            {/* Main Text */}
            <div className="w-full">
              <h1 className="font-superior font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.16] text-white">
                Transforming eCommerce<br className="hidden sm:block" /> with Excellence
              </h1>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 border border-white/60 rounded-[26px] px-4 sm:px-6 py-3 sm:py-4 text-white bg-transparent hover:bg-white/10 transition-all w-fit">
              <span className="font-superior font-medium text-sm sm:text-base">Explore Our Works</span>
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
          </div>

          {/* Bottom Text - Fixed positioning to ensure it's visible */}
          <p className="font-superior font-light text-sm sm:text-base md:text-lg leading-[1.22] text-white max-w-[90%] md:max-w-[465px] mt-8 md:mt-0 self-end md:self-start md:ml-auto">
            Pioneering Success Across Shopify, Adobe Commerce, Akinon, AEM, and Pimcore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
