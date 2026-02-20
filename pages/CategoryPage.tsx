import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SECTIONS_DATA } from '../constants';
import { CategoryHero } from '../components/CategoryHero';
import { CategorySection } from '../components/CategorySection';
import { ArticleGridSection } from '../components/ArticleGridSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState('');

  const categoryData = SECTIONS_DATA.find(s => s.id === id);

  if (!categoryData) {
    return <Navigate to="/" replace />;
  }

  // Helper for Title Case (e.g., "WEBSITES" -> "Websites")
  const toTitleCase = (str: string) => {
    const upper = str.toUpperCase();
    // Maintain uppercase for known acronyms
    if (['AI', 'CRM', 'SEO', 'AEO', 'UX', 'UI'].includes(upper)) {
        return upper;
    }
    return str.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Filter articles based on search
  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return categoryData.articles;
    const lowerTerm = searchTerm.toLowerCase();
    return categoryData.articles.filter(a => 
      a.title.toLowerCase().includes(lowerTerm) || 
      a.excerpt.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm, categoryData.articles]);

  // Sectioning the articles
  // 1. Featured Section: 1 big + 3 list = 4 articles
  // 2. Grid Section 1: 6 articles
  // 3. Grid Section 2: Remaining articles
  
  const featuredArticles = filteredArticles.slice(0, 4);
  const grid1Articles = filteredArticles.slice(4, 10);
  const grid2Articles = filteredArticles.slice(10);

  // Create a mock object for the CategorySection component to reuse its layout
  const featuredSectionData = {
    ...categoryData,
    title: 'FEATURED',
    articles: featuredArticles
  };

  return (
    <div className="min-h-screen bg-white">
      <CategoryHero 
        title={categoryData.title}
        description={categoryData.description}
        breadcrumbs={[
            { label: 'Insights', path: '/' }, 
            { label: toTitleCase(categoryData.title), path: `/category/${categoryData.id}` }
        ]}
        subCategories={categoryData.subCategories}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main>
        {filteredArticles.length > 0 ? (
            <>
                {/* Featured Section (White BG) */}
                <CategorySection data={featuredSectionData} isFeatured={true} />

                {/* Grid Section 1 (Black BG) */}
                {grid1Articles.length > 0 && (
                    <ArticleGridSection articles={grid1Articles} />
                )}

                {/* CTA Section */}
                <CTASection />

                {/* Grid Section 2 (Black BG) - Pagination enabled, 3 items per page */}
                {grid2Articles.length > 0 && (
                    <ArticleGridSection 
                        articles={grid2Articles} 
                        hasPagination={true} 
                        itemsPerPage={3}
                    />
                )}
            </>
        ) : (
            <div className="py-24 text-center">
                <p className="text-xl text-gray-500">No articles found.</p>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
};