'use client';

import React, { useState, useEffect } from 'react';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-01');
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.days}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.hours}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Seconds</div>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            This new fiscal year, start your payroll with a clean slate. 
            <a href="#" className="text-orange-600 hover:text-orange-700 ml-2 underline">Learn Why</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;