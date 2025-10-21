'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Smartphone, Bell, FileText, MessageSquare } from 'lucide-react';

const EmployeePortal = () => {
  const [activeTab, setActiveTab] = useState('app');

  const tabContent = {
    app: {
      icon: Smartphone,
      title: 'Make payroll data accessible anywhere',
      description: 'Let employees download payslip, tax worksheets, and Form 16s at their convenience, using their web app and mobile, instantly.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80'
    },
    payslips: {
      icon: Bell,
      title: 'Notify as soon as you pay',
      description: 'Automatically send salary notification and when you release payslips.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&q=80'
    },
    digitization: {
      icon: FileText,
      title: 'Digitise payroll operations',
      description: 'Collect reimbursement requests, IT declarations, and POI submissions online.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80'
    },
    communication: {
      icon: MessageSquare,
      title: 'Interact with employees in real time',
      description: 'Replace back-and-forth email threads and handle employee questions faster.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Intuitive Employee Portal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Self-service tools you and your employees will love
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="app" className="text-sm">Web and Mobile app</TabsTrigger>
            <TabsTrigger value="payslips" className="text-sm">Instant Payslips</TabsTrigger>
            <TabsTrigger value="digitization" className="text-sm">Digitisation</TabsTrigger>
            <TabsTrigger value="communication" className="text-sm">Communication</TabsTrigger>
          </TabsList>

          {Object.entries(tabContent).map(([key, content]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                        <content.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{content.description}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl blur-2xl opacity-30"></div>
                      <Image 
                        src={content.image} 
                        alt={content.title}
                        width={500}
                        height={350}
                        className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default EmployeePortal;