import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryData } from '../types';
import { ArticleCard } from './ArticleCard';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  data: CategoryData;
  isFeatured?: boolean;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ data, isFeatured = false }) => {
  const navigate = useNavigate();
  const mainArticle = data.articles[0];
  const listArticles = data.articles.slice(1, 4);

  // Apply specific background color for Websites, Marketing, and AI Automation sections
  // Featured section should typically be white as per design
  const isAltBackground = !isFeatured && ['websites', 'marketing', 'ai-automation'].includes(data.id);
  const bgClass = isAltBackground ? 'bg-[#FFEFFF]' : 'bg-white';

  const handleViewAll = () => {
    navigate(`/category/${data.id}`);
  };

  return (
    <section id={data.id} className={`py-16 md:py-24 border-b border-gray-100 last:border-0 ${bgClass}`}>
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase mb-4 tracking-tight">
            {isFeatured ? 'FEATURED' : data.title}
          </h2>
          {!isFeatured && (
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column: Large Card */}
          <div className="flex flex-col h-full">
            <div className="flex-grow">
                {mainArticle && (
                <ArticleCard article={mainArticle} variant="featured-large" />
                )}
            </div>

            {!isFeatured && (
                 <div className="mt-8">
                    <Button 
                        variant="gradient" 
                        className="gap-2"
                        onClick={handleViewAll}
                    >
                        View All {data.title} Articles <ArrowRight size={16} />
                    </Button>
                 </div>
            )}
          </div>

          {/* Right Column: List of Cards */}
          <div className="flex flex-col justify-between">
            <div>
                {listArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="list-item" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};