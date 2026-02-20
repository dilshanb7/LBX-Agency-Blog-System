import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  variant: 'featured-large' | 'list-item' | 'grid-item';
  theme?: 'light' | 'dark';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant, theme = 'light' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  const isDark = theme === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-black';
  const excerptColor = isDark ? 'text-gray-300' : 'text-black'; 
  const hoverColor = 'group-hover:text-brand-pink';

  if (variant === 'featured-large') {
    return (
      <div onClick={handleClick} className="group cursor-pointer flex flex-col h-full">
        <div className="relative overflow-hidden rounded-[20px] mb-6 aspect-[4/5] md:aspect-square lg:aspect-[4/3] w-full bg-[#D9D9D9]">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className={`${titleColor} ${hoverColor} text-3xl md:text-4xl font-bold mb-4 uppercase transition-colors leading-tight`}>
            {article.title}
          </h3>
          <p className={`${excerptColor} text-base md:text-lg leading-relaxed`}>
            {article.excerpt}
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'grid-item') {
    return (
      <div onClick={handleClick} className="group cursor-pointer flex flex-col h-full">
        <div className="relative overflow-hidden rounded-[20px] mb-6 aspect-square w-full bg-[#D9D9D9]">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className={`${titleColor} ${hoverColor} text-3xl font-bold mb-4 uppercase transition-colors leading-tight`}>
            {article.title}
          </h3>
          <p className={`${excerptColor} text-sm md:text-base leading-relaxed`}>
            {article.excerpt}
          </p>
        </div>
      </div>
    );
  }

  // List Item Variant
  return (
    <div onClick={handleClick} className="group cursor-pointer flex flex-col sm:flex-row gap-6 mb-8 last:mb-0">
      <div className="relative overflow-hidden rounded-[20px] w-full sm:w-[260px] aspect-[4/3] bg-[#D9D9D9] shrink-0">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className={`${titleColor} ${hoverColor} text-2xl font-bold mb-3 uppercase transition-colors leading-tight`}>
          {article.title}
        </h4>
        <p className={`${excerptColor} text-sm md:text-base leading-relaxed line-clamp-3`}>
          {article.excerpt}
        </p>
      </div>
    </div>
  );
};