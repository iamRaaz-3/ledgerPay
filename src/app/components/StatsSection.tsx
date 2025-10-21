'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <Image 
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80" 
              alt="Office Environment"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Nation-wide compliance across all offices in India</h3>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15,000+ employees get paid every month</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;