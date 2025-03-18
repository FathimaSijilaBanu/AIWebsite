'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Only run on client
    if (isClient) {
      // Initial check
      checkIfMobile();
      
      // Add event listener
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, [isClient]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);

  const menuItems = {
    works: {
      title: 'Works',
      items: []
    },
    expertise: {
      title: 'Expertise',
      items: [
        'Digital Commerce',
        'Content & Data',
        'Platforms',
        'Services'
      ]
    },
    innovationLab: {
      title: 'Innovation Lab',
      items: []
    },
    company: {
      title: 'Company',
      items: []
    }
  };

  const commerceSubmenu = [
    ['Headless Commerce', 'Composable Commerce', 'B2C & Omnichannel'],
    ['D2C', 'B2B Commerce', 'Mobile Commerce'],
    ['Order Management System (OMS)']
  ];

  // Toggle for mobile dropdown items
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  
  const toggleMobileDropdown = (key: string) => {
    setOpenMobileDropdowns(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative mx-auto max-w-[1200px]">
        {/* Main header */}
        <div className="bg-[rgba(31,31,31,0.7)] backdrop-blur-[9px] border border-[rgba(163,163,163,0.25)] rounded-[12px] mx-6 mt-0">
          <div className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/codilar-logo.svg"
                alt="Codilar"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-12">
              {Object.entries(menuItems).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-white font-superior font-medium text-base hover:opacity-80 transition-opacity">
                    {item.title}
                  </button>
                </div>
              ))}
            </nav>

            {/* Desktop CTA Button - hidden on mobile */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-4 border border-white/60 rounded-[26px] text-white font-superior font-medium text-base hover:bg-white/10 transition-all"
            >
              Lets Connect
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile menu button - visible only on mobile */}
            <button 
              className="lg:hidden p-2 text-white" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Only render these client-side specific components after hydration */}
        {isClient && (
          <>
            {/* Mobile Menu - slides in from the right */}
            {mobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-[#1f1f1f] overflow-y-auto pt-20">
                <div className="px-6 py-4">
                  {Object.entries(menuItems).map(([key, item]) => (
                    <div key={key} className="border-b border-white/20 py-4">
                      <button 
                        className="w-full flex items-center justify-between text-white font-superior font-medium text-lg"
                        onClick={() => item.items.length > 0 && toggleMobileDropdown(key)}
                      >
                        {item.title}
                        {item.items.length > 0 && (
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform ${openMobileDropdowns.includes(key) ? 'rotate-180' : ''}`}
                          >
                            <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                      
                      {item.items.length > 0 && openMobileDropdowns.includes(key) && (
                        <div className="mt-4 ml-4 flex flex-col gap-4">
                          {item.items.map((subItem, idx) => (
                            <Link 
                              key={idx} 
                              href="#" 
                              className="text-white/80 font-superior text-base"
                            >
                              {subItem}
                            </Link>
                          ))}
                          {key === 'expertise' && (
                            <div className="mt-2">
                              <p className="text-white mb-4">Digital Commerce</p>
                              <div className="flex flex-col gap-4 ml-4">
                                {commerceSubmenu.flat().map((item, idx) => (
                                  <Link 
                                    key={idx} 
                                    href="#" 
                                    className="text-white/80 font-superior text-base"
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 px-6 py-4 border border-white/60 rounded-[26px] text-white font-superior font-medium text-base w-full"
                    >
                      Lets Connect
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Expertise Dropdown - Desktop only */}
            {!isMobile && activeDropdown === 'expertise' && (
              <div
                className="absolute left-0 right-0 mt-2 mx-6 bg-[rgba(31,31,31,0.7)] backdrop-blur-[42px] border border-[rgba(163,163,163,0.25)] rounded-[12px]"
                onMouseEnter={() => setActiveDropdown('expertise')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-8">
                  {/* Menu Categories */}
                  <div className="flex gap-9 mb-8">
                    {menuItems.expertise.items.map((item, index) => (
                      <button
                        key={index}
                        className={`text-base font-superior ${
                          index === 0 ? 'text-white' : 'text-white/50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Commerce Submenu */}
                  <div className="flex gap-9">
                    {commerceSubmenu.map((column, columnIndex) => (
                      <div key={columnIndex} className="flex flex-col gap-9">
                        {column.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href="#"
                            className="text-white font-superior text-base hover:opacity-80 transition-opacity"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* View All Button */}
                  <div className="mt-8 inline-flex items-center gap-1.5 px-9 py-4 border border-white rounded-[26px] text-white font-superior font-medium text-base hover:bg-white hover:text-black transition-colors">
                    View All
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header; 