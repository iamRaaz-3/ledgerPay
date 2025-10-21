'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, UserCheck, TrendingUp } from 'lucide-react';

const LeaveAttendance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Leave and Attendance</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Manage leave and attendance, built-in.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Create custom leave types, allow employees to apply for leaves, approve or reject leaves, manage attendance - all from within Veena Expert Vault.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Leave Types</h4>
                  <p className="text-sm text-gray-600">Flexible leave policies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Time Tracking</h4>
                  <p className="text-sm text-gray-600">Automated attendance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Approvals</h4>
                  <p className="text-sm text-gray-600">Quick leave approvals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics</h4>
                  <p className="text-sm text-gray-600">Leave insights</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-6"></div>
            <Image 
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=700&q=80" 
              alt="Leave and Attendance Management"
              width={700}
              height={500}
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveAttendance;