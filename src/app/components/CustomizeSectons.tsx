import React from 'react';
import { Wrench, Code, Puzzle, Workflow } from 'lucide-react';

const CustomizeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl transform -rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=700&q=80" 
              alt="Customization"
              className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div>
            <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Customise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customise and automate the way you want
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Build new feature on top of an already powerful platform and make Veena Expert Vault work the way you want.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">API Integration</h4>
                  <p className="text-gray-600">Connect with your existing tools seamlessly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Workflow Automation</h4>
                  <p className="text-gray-600">Automate repetitive tasks with custom workflows</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Puzzle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Custom Modules</h4>
                  <p className="text-gray-600">Add features specific to your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;