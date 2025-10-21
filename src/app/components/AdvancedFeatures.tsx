import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calculator, Tags, Calendar, DollarSign, FolderOpen } from 'lucide-react';

const AdvancedFeatures = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Formula based earnings',
      description: 'Apply formulae to your salary components instead of manually calculating and ensure accuracy.'
    },
    {
      icon: Tags,
      title: 'Reporting tags',
      description: 'Create Tags, associate them with employees and get detailed, customised payroll reports to gain deeper insights.'
    },
    {
      icon: Calendar,
      title: 'Scheduled earnings',
      description: 'Configure bonuses or variable pay for employees in advance as a part of any future pay runs.'
    },
    {
      icon: DollarSign,
      title: 'Off-cycle payrun',
      description: 'Do not wait until the next pay run to pay the bonus and withheld salaries.'
    },
    {
      icon: FolderOpen,
      title: 'Document management',
      description: 'Store and share employee and organizational documents.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Advanced Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerfully engineered to back your unique processes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?w=700&q=80" 
              alt="Advanced Features"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">{feature.title}</CardTitle>
                      <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;