import React from 'react';
import { Button } from './ui/button';
import {  Settings } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Integrations</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Natively built. Deeply connected.<br />Inherently collaborative
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Leverage the power of the ever evolving ecosystem and keep your HR, Payroll, and Finance teams on the same page.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {['Workday', 'SAP', 'Oracle', 'UKG', 'Microsoft', 'Salesforce'].map((integration, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
            >
              <span className="text-gray-700 font-semibold">{integration}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Settings className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Custom Integrations</h3>
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">We can work with systems you already love</h4>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Bring data from your existing systems like Workday, SAP, Oracle, UKG, and Microsoft to streamline things without disrupting your way of doing things through custom integrations.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;