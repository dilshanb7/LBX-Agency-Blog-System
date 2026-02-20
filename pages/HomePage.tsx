import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { CategorySection } from '../components/CategorySection';
import { ArticleCard } from '../components/ArticleCard';
import { Footer } from '../components/Footer';
import { FEATURED_ARTICLES, SECTIONS_DATA } from '../constants';
import { CategoryData, Article } from '../types';

const featuredSectionData: CategoryData = {
  id: 'featured',
  title: 'FEATURED',
  description: '',
  articles: FEATURED_ARTICLES
};

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all articles for searching
  const allArticles = useMemo(() => {
    // Start with featured
    const articles = [...FEATURED_ARTICLES];
    // Add all section articles
    SECTIONS_DATA.forEach(section => {
      articles.push(...section.articles);
    });
    
    // Deduplicate based on ID if necessary
    const uniqueArticles = new Map<string, Article>();
    articles.forEach(article => uniqueArticles.set(article.id, article));
    return Array.from(uniqueArticles.values());
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerTerm = searchTerm.toLowerCase().trim();
    
    return allArticles.filter(article =>
      article.title.toLowerCase().includes(lowerTerm) ||
      article.excerpt.toLowerCase().includes(lowerTerm) ||
      article.category.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm, allArticles]);

  return (
    <div className="min-h-screen bg-white">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main>
        {searchTerm ? (
           <div className="max-w-[1320px] mx-auto px-6 py-16 min-h-[50vh]">
             <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
               <h2 className="text-3xl font-bold text-black uppercase">
                 Search Results
               </h2>
               <span className="text-gray-500 font-medium">
                  {searchResults.length} result{searchResults.length !== 1 && 's'} for "{searchTerm}"
               </span>
             </div>
             
             {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map(article => (
                     <div key={article.id} className="h-full">
                        <ArticleCard article={article} variant="featured-large" />
                     </div>
                  ))}
                </div>
             ) : (
               <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                 <p className="text-xl">No articles found matching your criteria.</p>
                 <button 
                   onClick={() => setSearchTerm('')}
                   className="mt-4 text-brand-pink font-bold hover:underline"
                 >
                   Clear Search
                 </button>
               </div>
             )}
           </div>
        ) : (
          <>
            {/* Featured Section */}
            <CategorySection data={featuredSectionData} isFeatured={true} />
            
            {/* Dynamic Category Sections */}
            {SECTIONS_DATA.map((section) => (
              <CategorySection key={section.id} data={section} />
            ))}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};