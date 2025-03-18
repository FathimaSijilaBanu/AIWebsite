'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden -mt-[82px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/hero.gif"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-radial from-black/15 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-[120px] sm:pt-[140px] md:pt-[160px]">
        <div className="flex flex-col justify-between py-8 md:py-16 lg:py-24 min-h-[calc(100svh-88px)]">
          <div className="max-w-full md:max-w-[80%] lg:max-w-[865px] flex flex-col gap-4 md:gap-8 lg:gap-12 mt-8 sm:mt-12 md:mt-16">
            {/* Main Text */}
            <div className="w-full">
              <h1 className="font-superior font-medium text-2xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.2] sm:leading-[1.16] text-white">
                Transforming eCommerce<br className="hidden sm:block" /> with Excellence
              </h1>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 border border-white/60 rounded-[26px] px-3 sm:px-6 py-2.5 sm:py-4 text-white bg-transparent hover:bg-white/10 transition-all w-fit">
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

          {/* Bottom Text */}
          <p className="font-superior font-light text-xs sm:text-base md:text-lg leading-[1.3] sm:leading-[1.22] text-white max-w-[100%] md:max-w-[465px] mt-6 md:mt-0 self-start md:self-end">
            Pioneering Success Across Shopify, Adobe Commerce, Akinon, AEM, and Pimcore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
