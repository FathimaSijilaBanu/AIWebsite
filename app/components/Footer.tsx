'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    solutions: {
      title: 'Solutions',
      links: [
        'Digital Commerce Solutions',
        'Product Information Management (PIM)',
        'Headless Commerce Development',
        'Adobe Analytics'
      ]
    },
    platforms: {
      title: 'Platforms',
      links: [
        'Shopify Development Services',
        'Adobe Commerce (Magento) Solutions',
        'Pimcore Integration'
      ]
    },
    services: {
      title: 'Services',
      links: [
        'E-commerce Strategy Consulting',
        'UI/UX Design Services',
        'Conversion Rate Optimization (CRO)'
      ]
    },
    useCases: {
      title: 'Use Cases',
      links: [
        'Omnichannel Retail Strategies',
        'D2C E-commerce Solutions',
        'B2B Commerce Portals'
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        'E-commerce Optimization Blog',
        'Case Studies',
        'Tech Insights',
        'Free Guides & Downloads'
      ]
    }
  };

  const socialLinks = [
    { icon: '/images/social/facebook.svg', href: '#' },
    { icon: '/images/social/twitter.svg', href: '#' },
    { icon: '/images/social/linkedin.svg', href: '#' },
    { icon: '/images/social/instagram.svg', href: '#' },
    { icon: '/images/social/youtube.svg', href: '#' }
  ];

  return (
    <footer className="bg-[#171515] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-9">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-4">
                <h3 className="text-2xl font-superior font-light">{section.title}</h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link href="#" className="text-[#898989] hover:text-white transition-colors font-superior font-light text-lg">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter and Certifications */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Newsletter */}
            <div className="flex flex-col items-end gap-6 lg:w-1/2">
              <h3 className="text-2xl font-superior font-light text-right">
                Stay Ahead in E-commerce Trends. Subscribe to Our Newsletter!
              </h3>
              <div className="flex w-full max-w-md gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-[#1D1D1D] border border-[#3A3A3A] rounded px-4 py-3 text-[#898989] font-superior"
                />
                <button className="px-6 py-4 bg-gradient-to-r from-[#C20403] to-[#EC6D2B] rounded-[26px] text-white font-superior font-medium flex items-center gap-1.5">
                  Subscribe Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex gap-9">
              <div className="flex items-center gap-2">
                <Image src="/images/iso-9001.svg" alt="ISO 9001" width={40} height={40} />
                <div>
                  <p className="text-xs font-superior font-light text-[#F0F0F0]">International Security Organisation</p>
                  <p className="text-base font-superior font-medium text-[#F0F0F0]">9001 Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/images/iso-27001.svg" alt="ISO 27001" width={40} height={40} />
                <div>
                  <p className="text-xs font-superior font-light text-[#F0F0F0]">International Security Organisation</p>
                  <p className="text-base font-superior font-medium text-[#F0F0F0]">27001 Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#808080] pt-9">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex gap-6 opacity-50">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} className="hover:opacity-80 transition-opacity">
                    <Image src={social.icon} alt="Social" width={24} height={24} />
                  </Link>
                ))}
              </div>
              {/* Copyright */}
              <p className="text-[#F0F0F0] font-clash-grotesk text-lg">
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                {' | '}
                <Link href="/terms" className="hover:underline">Terms & Conditions©</Link>
                {' | '}
                Copyright Codilar 2024. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 