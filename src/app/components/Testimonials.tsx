import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Switching to Veena Expert Vault from ADP has completely transformed our workflow. The tedious task of manually uploading Excel files is no longer a concern. This platform has enabled us to save significant time while achieving a level of operational efficiency we hadn't imagined before.",
      name: 'Rohit Sharma',
      company: 'Innovate Tech Solutions Pvt. Ltd.'
    },
    {
      text: "Veena Expert Vault has made our payroll processes stress-free. The automated payslip distribution feature eliminates manual intervention, ensuring every pay run is handled with precision and ease.",
      name: 'Ananya Iyer',
      company: 'Greenfield Enterprises LLP'
    },
    {
      text: "Veena Expert Vault's customization capabilities have exceeded our expectations. Unlike our previous software, which felt restrictive, this system adapts seamlessly to our policies. Not only has it made pay runs smoother, but it also saved me 110 hours previously spent on administration tasks.",
      name: 'Vikram Mehta',
      company: 'Skyline Infrastructure Ltd.'
    },
    {
      text: "Veena Expert Vault's integration with banks and application has streamlined salary payouts and related processes. Tasks like payroll accounting, business expense reimbursements, and syncing LOP are now effortless, saving us both time and effort.",
      name: 'Priya Deshpande',
      company: 'Oceanic Ventures Pvt. Ltd.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 uppercase tracking-wider text-sm font-semibold mb-4">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Loved by both customers and critics
          </h2>
        </div>

        <Card className="border-0 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <CardContent className="p-12 relative">
            <Quote className="w-12 h-12 text-blue-600 mb-6" />
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 min-h-[180px]">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="border-t pt-6">
              <p className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button 
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <Button 
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;