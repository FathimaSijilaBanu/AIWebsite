'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: 'General',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="relative w-full bg-[#1A1A1A] py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(116,0,0,0.15)] to-transparent" />

      <div className="relative max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row justify-between">
        {/* Left Content */}
        <div className="flex flex-col gap-20 max-w-[500px]">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-superior text-sm font-normal tracking-[0.02em] uppercase text-white opacity-80">
              Contact Us
            </h3>
            <h2 className="font-superior text-[56px] font-medium leading-[1.1] text-white">
              Let&apos;s do something amazing together
            </h2>
            <p className="font-superior text-base font-light text-white opacity-80">
              We look forward to hearing from you.
            </p>
          </div>

          {/* Regions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-superior text-sm font-normal tracking-[0.02em] uppercase text-white opacity-80">
              Regions
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-superior text-base font-light text-white opacity-80">UAE</span>
              <span className="text-white opacity-40">|</span>
              <span className="font-superior text-base font-light text-white opacity-80">Singapore</span>
              <span className="text-white opacity-40">|</span>
              <span className="font-superior text-base font-light text-white opacity-80">India</span>
              <span className="text-white opacity-40">|</span>
              <span className="font-superior text-base font-light text-white opacity-80">Oman</span>
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="flex-1 max-w-[500px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {/* First Row */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Hashid"
                    className="w-full bg-[#1A1A1A] border border-white/20 rounded text-white font-superior text-base px-4 py-3 placeholder:text-white focus:outline-none focus:border-white/40"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile"
                    className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded text-white/60 font-superior text-base px-4 py-3 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex gap-6">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded text-white/60 font-superior text-base px-4 py-3 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div className="flex-1 relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded text-white/60 font-superior text-base px-4 py-3 appearance-none cursor-pointer focus:outline-none focus:border-white/40"
                  >
                    <option value="General" className="bg-[#1A1A1A]">General</option>
                    <option value="Support" className="bg-[#1A1A1A]">Support</option>
                    <option value="Sales" className="bg-[#1A1A1A]">Sales</option>
                    <option value="Other" className="bg-[#1A1A1A]">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#898989" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full bg-[#1A1A1A] border border-[#3A3A3A] rounded text-white/60 font-superior text-base px-4 py-3 placeholder:text-white/60 focus:outline-none focus:border-white/40 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 flex items-center justify-center gap-1.5 text-white hover:bg-white hover:text-black transition-all group mt-4"
            >
              <span className="font-superior text-base">Let&apos;s Connect</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 