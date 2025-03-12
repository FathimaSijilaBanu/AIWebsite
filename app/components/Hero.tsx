'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-radial from-black/15 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="h-screen flex flex-col justify-between py-32">
          <div className="max-w-[865px] flex flex-col gap-12">
            {/* Main Text */}
            <div className="w-full">
              <h1 className="font-superior font-medium text-[56px] leading-[1.16] text-white">
                Transforming eCommerce<br />with Excellence
              </h1>
            </div>

            {/* CTA Button */}
            <button className="group inline-flex items-center gap-2 border border-white/60 rounded-[26px] px-6 py-4 text-white bg-transparent hover:bg-white/10 transition-all w-fit">
              <span className="font-superior font-medium text-base">Explore Our Works</span>
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
          <p className="absolute bottom-0 right-[-300px] font-superior font-light text-lg leading-[1.22] text-white max-w-[465px]">
          Pioneering Success Across Shopify, Adobe Commerce, Akinon, AEM, and Pimcore
        </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
