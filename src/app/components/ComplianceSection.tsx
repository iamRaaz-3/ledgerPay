'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import { RefreshCw, FileText, CheckCircle, FileCheck } from 'lucide-react';

const ComplianceSection = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Automated adjustments',
      description: 'Adapt easily to the ever-changing tax laws.'
    },
    {
      icon: FileText,
      title: 'Tax forms',
      description: 'Download tax forms like 12BB, 24Q, TDS, and Form 16 instantly with e-signature capability built-in.'
    },
    {
      icon: CheckCircle,
      title: 'PF, ESI, LWF, PT, and IT',
      description: 'Keep your business on legal footing across 28 states.'
    },
    {
      icon: FileCheck,
      title: 'Ready-to-file reports',
      description: 'Auto-generate pre-formatted statutory and tax reports for faster filing.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 uppercase tracking-wider text-sm font-semibold mb-4">Simplified Compliance</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay compliant, without thinking about compliance
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We handle regionally intricate and distinct compliance regulations all across India, so you don&apos;t have to.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
              alt="Compliance Shield"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-lg font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;