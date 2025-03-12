'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative mx-auto max-w-[1200px]">
        {/* Main header */}
        <div className="bg-[rgba(31,31,31,0.7)] backdrop-blur-[9px] border border-[rgba(163,163,163,0.25)] rounded-[12px] mx-6 mt-6">
          <div className="flex items-center justify-between px-12 py-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/codilar-logo.svg"
                alt="Codilar"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-12">
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

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-4 border border-white/60 rounded-[26px] text-white font-superior font-medium text-base hover:bg-white/10 transition-all"
            >
              Lets Connect
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Expertise Dropdown */}
        {activeDropdown === 'expertise' && (
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
      </div>
    </header>
  );
};

export default Header; 