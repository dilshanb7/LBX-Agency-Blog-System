import React from 'react';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  const handleDownload = () => {
    window.open('https://www.lbxagency.com.au/worksheets/aeo-worksheet', '_blank');
  };

  return (
    <section className="bg-[#fffaf5] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Image Side */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
                <img 
                    src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/695f7cc397a50495111199cf_CTA%20HQ.png" 
                    alt="CTA HQ" 
                    className="w-full max-w-[420px] h-auto object-contain"
                />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-7/12 p-[30px]">
                <h3 className="text-[#231030] font-bold text-xl md:text-2xl uppercase mb-2 tracking-wide font-poppins">
                    FREE WORKSHEET:
                </h3>
                <h2 className="text-[26px] font-normal text-[#231030] mb-6 uppercase leading-[150%] font-poppins">
                    HOW TO ENSURE AI UNDERSTANDS YOUR WEBSITE
                </h2>
                
                <p className="text-[#231030] text-lg md:text-xl mb-6 leading-relaxed font-normal font-poppins">
                    Use the AEO Product Ecosystem Mapping Worksheet to define your product, clarify buyer needs, and structure your help content.
                </p>
                <p className="text-[#231030] text-lg md:text-xl mb-10 leading-relaxed font-normal font-poppins">
                    Download the worksheet and start organising your product universe with confidence.
                </p>

                <Button 
                    variant="gradient" 
                    className="!text-base !px-8 !py-4 shadow-xl"
                    onClick={handleDownload}
                >
                    Download the Free Guide
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};