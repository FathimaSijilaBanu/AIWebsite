'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CompanyEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const events = [
    {
      id: 1,
      title: 'Driving innovation through thought Leadership',
      description: "Codilar hosts and participates in global e-commerce events to share insights, explore trends, and drive innovation. From expert panel discussions to hands-on workshops, we're at the forefront of industry thought leadership.",
      image: '/images/events/event1.jpg',
      upcomingEvent: {
        title: "Let's Connect at Expand North Star 2024",
        tag: "Upcoming Event"
      }
    },
    {
      id: 2,
      title: 'Celebrating teamwork and community spirit',
      description: 'At Codilar, we believe in fostering a strong community. From team-building activities to CSR initiatives, our social events showcase our commitment to collaboration, inclusivity, and giving back.',
      image: '/images/events/event2.jpg',
      upcomingEvent: {
        title: "Let's Connect at Expand North Star 2024",
        tag: "Upcoming Event"
      }
    }
  ];

  const totalSlides = events.length;
  const currentEvent = events[currentSlide - 1];

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));
  };

  // Auto-play effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        handleNextSlide();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]);

  // Update progress when slide changes or during autoplay
  useEffect(() => {
    if (isPlaying) {
      const startTime = Date.now();
      const interval = 3000; // 3 seconds per slide
      
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = (elapsed / interval) * 100;
        
        if (newProgress >= 100) {
          setProgress(0);
        } else {
          setProgress(newProgress);
        }
      }, 16); // Update roughly every frame

      return () => clearInterval(progressInterval);
    } else {
      setProgress(0);
    }
  }, [isPlaying, currentSlide]);

  if (!currentEvent) return null;

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 via-white to-pink-50/30" />
        <div className="absolute top-0 left-0 w-full h-full opacity-25">
          {/* Polygon shapes can be added here */}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="col-span-5">
            {/* Header */}
            <div className="mb-12">
              <h3 className="text-sm uppercase font-light tracking-wider mb-4">
                Company Events
              </h3>
              <h2 className="text-[56px] font-medium leading-[1.2] mb-6">
                {currentEvent.title}
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                {currentEvent.description}
              </p>
            </div>

            {/* Explore Events Button */}
            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full text-base hover:border-black transition-colors">
              <span>Explore All Events</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5.83325 14.1667L14.1666 5.83334M14.1666 5.83334H5.83325M14.1666 5.83334V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Images and Navigation */}
          <div className="col-span-7 relative">
            {/* Images Container */}
            <div className="relative">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent" />
              </div>

              {/* Upcoming Event Card */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFF3F3] border border-[#FFD7D7] backdrop-blur-xl p-6 rounded-xl max-w-sm">
                <span className="text-[#335081] text-lg font-light mb-2 block">
                  {currentEvent.upcomingEvent.tag}
                </span>
                <h4 className="text-lg font-medium leading-snug">
                  {currentEvent.upcomingEvent.title}
                </h4>
              </div>

              {/* View Events Button */}
              <button className="absolute right-8 bottom-8 flex items-center justify-center w-[120px] h-[120px] bg-black text-white rounded-full hover:scale-105 transition-transform">
                <span className="text-base font-medium">View Events</span>
              </button>

              {/* Progress Line and Play/Pause Button */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center">
                <div className="flex-grow h-[2px] bg-gray-200 relative">
                  <div
                    className="h-full bg-red-600 transition-all duration-300 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="ml-4 w-8 h-8 rounded-full border border-black flex items-center justify-center hover:opacity-75 transition-opacity"
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="6" y="4" width="4" height="16" rx="1" fill="black" />
                      <rect x="14" y="4" width="4" height="16" rx="1" fill="black" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.92773 4.40741C6.92773 3.77541 7.64573 3.40341 8.14973 3.75941L18.6467 11.3524C19.1147 11.6824 19.1147 12.3764 18.6467 12.7064L8.14973 20.2994C7.64573 20.6554 6.92773 20.2834 6.92773 19.6514V4.40741Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-7 mt-8">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center opacity-25 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <span className="text-lg font-light">
                {currentSlide} of {totalSlides}
              </span>

              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:opacity-75 transition-opacity"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyEvents; 