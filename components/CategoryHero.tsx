import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { HERO_IMAGE_URL } from '../constants';
import { Button } from './Button';

interface CategoryHeroProps {
  title: string;
  description: string;
  breadcrumbs: { label: string; path: string }[];
  subCategories?: string[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const CategoryHero: React.FC<CategoryHeroProps> = ({ 
  title, 
  description, 
  breadcrumbs, 
  subCategories,
  searchTerm,
  onSearchChange
}) => {
  return (
    <header className="relative text-white overflow-hidden min-h-[90vh] flex flex-col">
      {/* Background */}
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
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 w-full flex-grow flex flex-col pt-12 pb-12">
        
        {/* Logo Section */}
        <div className="mb-auto">
             <Link to="/">
                <img 
                  src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870e6a39a3daa5b3af4092e_LOGO.svg" 
                  alt="Lightbox Agency" 
                  className="h-8 md:h-10 w-auto"
                />
            </Link>
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col justify-center py-16 md:py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
                {title}
            </h1>
            
            <p className="text-white mb-10 max-w-4xl font-normal text-lg md:text-xl leading-relaxed">
                {description}
            </p>

            {/* Sub Categories */}
            {subCategories && subCategories.length > 0 && (
                <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14 w-full justify-start lg:grid lg:grid-cols-5">
                    {subCategories.map((cat) => (
                        <Button 
                            key={cat} 
                            variant="pill"
                            className="whitespace-nowrap lg:w-full"
                            onClick={() => {}}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            )}

            {/* Search Bar */}
            <div className="relative w-full shadow-2xl rounded-full max-w-full">
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
        
        {/* Breadcrumbs at the bottom */}
        <div className="mt-auto pt-8">
            <div className="flex items-center gap-2 text-base md:text-lg font-normal text-white">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.path}>
                        {index > 0 && <span className="mx-1">→</span>}
                        <Link 
                            to={crumb.path}
                            className="underline underline-offset-4 decoration-1 hover:text-brand-pink transition-colors"
                        >
                            {crumb.label}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </div>

      </div>
    </header>
  );
};