import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleById } from '../constants';

export const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const article = getArticleById(id || '');

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-brand-pink hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Top Navigation for Article Page */}
      <div className="sticky top-0 z-50 bg-black text-white shadow-md">
        <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center gap-4">
             <Link to="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-pink transition-colors">
                <ArrowLeft size={16} /> Insights
             </Link>
             <div className="h-4 w-px bg-gray-700 mx-2"></div>
             <div className="flex items-center gap-1">
                <img 
                  src="https://cdn.prod.website-files.com/67cfc0a73cdb5a9bd133b11b/6870e6a39a3daa5b3af4092e_LOGO.svg" 
                  alt="Lightbox Agency" 
                  className="h-6 w-auto"
                />
             </div>
        </div>
      </div>

      <article className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
         <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-brand-pink/10 text-brand-pink px-3 py-1 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest">
                    {article.category}
                </span>
                <span className="text-gray-400 text-xs font-medium">May 21, 2024</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
                {article.title}
            </h1>
            
            <div className="aspect-[16/9] w-full bg-gray-200 rounded-2xl overflow-hidden mb-12 shadow-xl">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium text-gray-900 border-l-4 border-brand-pink pl-6">
                    {article.excerpt}
                </p>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding the Core Concepts</h3>
                <p className="mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <blockquote className="p-8 bg-gray-50 rounded-xl my-10 italic border-l-4 border-black">
                    "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
                <p className="mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                </p>
            </div>
            
            {/* Share / Tags section placeholder */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                <span className="text-sm font-bold text-gray-500 uppercase">Tags:</span>
                {['Strategy', 'Growth', 'Business'].map(tag => (
                    <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
         </div>
      </article>
    </div>
  );
};