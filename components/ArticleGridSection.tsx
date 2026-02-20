import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { ArticleCard } from './ArticleCard';

interface ArticleGridSectionProps {
  articles: Article[];
  className?: string;
  hasPagination?: boolean;
  itemsPerPage?: number;
}

export const ArticleGridSection: React.FC<ArticleGridSectionProps> = ({ 
  articles, 
  className = "",
  hasPagination = false,
  itemsPerPage = 6
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset pagination when articles update (e.g. filtering)
  useEffect(() => {
    setCurrentPage(1);
  }, [articles]);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Determine articles to display
  const displayedArticles = hasPagination 
    ? articles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : articles;

  const handleNext = () => {
    if (currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
        // Optional: Scroll logic could go here
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
        setCurrentPage(prev => prev - 1);
    }
  };

  if (articles.length === 0) return null;

  return (
    <section id="article-grid" className={`py-16 md:py-24 bg-black ${className}`}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {displayedArticles.map((article) => (
                <ArticleCard 
                    key={article.id} 
                    article={article} 
                    variant="grid-item" 
                    theme="dark"
                />
            ))}
        </div>
        
        {/* Pagination Controls */}
        {hasPagination && totalPages > 1 && (
            <div className="mt-20 flex flex-col items-center justify-center relative">
                 <div className="flex items-center gap-4 mb-3">
                    {/* Prev Button */}
                    <button 
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`bg-white text-black px-8 py-3 rounded-full font-bold text-sm transition-colors flex items-center gap-2 ${
                            currentPage === 1 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-brand-pink hover:text-white'
                        }`}
                    >
                        {'<'} Prev
                    </button>

                    {/* Next Button */}
                    <button 
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`bg-white text-black px-8 py-3 rounded-full font-bold text-sm transition-colors flex items-center gap-2 ${
                            currentPage === totalPages 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-brand-pink hover:text-white'
                        }`}
                    >
                        Next {'>'}
                    </button>
                 </div>
                 
                 <span className="text-white text-xs font-medium tracking-widest">
                    {currentPage}/{totalPages}
                 </span>
            </div>
        )}
      </div>
    </section>
  );
};