import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-5">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image 
            src="/main.jpg" 
            alt="About Us" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-serif font-bold">Why Choose Us?</h1>
          <p className="font-serif text-gray-700 leading-relaxed">
            We are Gul Çiçek—a premier online florist specializing in delivering
            exquisite floral arrangements. We source the finest quality flowers
            from local and international growers, ensuring freshness and longevity.
            Our skilled florists craft each bouquet with meticulous attention to detail,
            using innovative designs and artistic flair.
          </p>
          <Button title="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default About;
