'use client';

import React from 'react';

const CustomerLogos = () => {
  const customers = [
    { name: 'Dexian', logo: 'DEXIAN' },
    { name: 'Vedatya', logo: 'VEDATYA' },
    { name: 'GeeksForGeeks', logo: 'GEEKSFORGEEKS' },
    { name: 'SecurityHQ', logo: 'SECURITYHQ' },
    { name: 'Leegality', logo: 'LEEGALITY' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Loved by India&apos;s famous startups and world renowned brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="bg-gray-100 px-8 py-4 rounded-lg">
                <span className="text-gray-700 font-bold text-lg">{customer.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;