'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button'; // ✅ make sure this path matches your folder

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Heading + Paragraph --- */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Payroll made easy,<br />
            scalable, and compliant
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform outdated payroll practices and build a better workplace for your business with LedgerPay.
          </p>

          {/* --- 👇 BUTTON SECTION HERE 👇 --- */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg">
            Get Started
          </Button>
        </div>

        {/* --- Hero Image --- */}
        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
              alt="Payroll Dashboard"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>

          {/* Decorative Blur Circles */}
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
