import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { CATEGORIES, HERO_IMAGE_URL } from '../constants';
import { Button } from './Button';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (value: string) => {
      navigate(`/category/${value}`);
  };

  return (
    <header className="relative text-white overflow-hidden flex flex-col justify-center min-h-screen lg:min-h-[95vh]">
      {/* Background with Gradient and Image Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to right, #231030, #371022, #72191b)`
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
            backgroundImage: `url(${HERO_IMAGE_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 py-12 md:py-20 flex flex-col h-full flex-grow w-full justify-center">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-24">
            <div className="flex items-center gap-3">
                {/* Logo */}
                <img 
                  src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870e6a39a3daa5b3af4092e_LOGO.svg" 
                  alt="Lightbox Agency" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
            </div>
        </div>

        {/* Hero Content */}
        <div className="w-full flex-grow flex flex-col justify-center">
            {/* Insights Label */}
            <h4 className="text-brand-pink font-normal uppercase tracking-[1px] text-[14px] md:text-[20px] leading-[130%] mb-4 md:mb-6">
                Insights
            </h4>
            
            {/* Giant Heading */}
            {/* Scaled text sizes: text-4xl on mobile, text-6xl on tablet, 85px on desktop */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[85px] lg:leading-[109%] lg:tracking-[-0.85px] font-bold mb-6 md:mb-8 uppercase leading-tight tracking-tight">
                CLARITY THAT HELPS<br className="hidden lg:block" /> YOUR BUSINESS GROW
            </h1>
            
            {/* 1st Paragraph */}
            {/* Scaled: 20px on mobile, 30px on desktop */}
            <p className="text-white mb-4 md:mb-6 max-w-4xl font-normal text-[20px] md:text-[30px] leading-[140%] md:leading-[150%]">
                Our thinking on websites, branding, marketing, CRM and AI.
            </p>
            
            {/* 2nd Paragraph */}
            {/* Scaled: 16px on mobile, 20px on desktop */}
            <p className="text-white mb-8 md:mb-12 max-w-5xl font-normal text-[16px] md:text-[20px] leading-[150%] text-gray-100">
                This is where we share practical insights, lessons from real projects, and clear guidance to help you make better decisions and build momentum.
            </p>

            {/* Category Pills */}
            {/* Grid on Large screens to match search bar width, Flex on smaller */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14 w-full justify-start lg:grid lg:grid-cols-5">
                {CATEGORIES.map((cat) => (
                    <Button 
                        key={cat.value} 
                        variant="pill"
                        onClick={() => handleCategoryClick(cat.value)}
                        className="whitespace-nowrap lg:w-full"
                    >
                        {cat.label}
                    </Button>
                ))}
            </div>

            {/* Search Bar - Full Width */}
            <div className="relative w-full shadow-2xl rounded-full">
                <input 
                    type="text"
                    placeholder="Search"
                    className="w-full bg-white rounded-full h-[51px] pl-6 md:pl-8 pr-12 md:pr-16 text-[#9A9A9A] text-[15px] font-normal leading-[150%] placeholder-[#9A9A9A] focus:outline-none focus:ring-4 focus:ring-brand-pink/30 transition-all flex items-center"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <button className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-pink transition-colors p-2 hover:bg-gray-50 rounded-full">
                    <Search size={24} />
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};