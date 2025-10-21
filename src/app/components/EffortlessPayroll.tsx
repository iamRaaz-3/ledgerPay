'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, CreditCard, Shield, Zap } from 'lucide-react';

const EffortlessPayroll = () => {
  const features = [
    {
      icon: Users,
      title: 'Personalize salary components',
      description: 'Accommodate diverse salary structures that suit each employee and your organisation hierarchy with custom earnings, and deductions.'
    },
    {
      icon: CreditCard,
      title: 'Deliver salaries online',
      description: 'Veena Expert Vault has joined hands with reputed banks in India and auto-generates bank advice so you can pay employees online.'
    },
    {
      icon: Shield,
      title: 'Secure payroll with multi-level approvals',
      description: 'Ensure every pay run passes through the right hands with multi-level approvals, keeping your process completely reliable.'
    },
    {
      icon: Zap,
      title: 'Minimal learning curve',
      description: 'With a modern UI, and intuitive user experience, get to know Veena Expert Vault fast and finish payroll instantly.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Effortless Payroll</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Automate payroll.<br />
            From start to finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EffortlessPayroll;