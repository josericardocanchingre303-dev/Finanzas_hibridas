import React from 'react';
import { articulos } from '../data/articulos';
import { Helmet } from 'react-helmet-async';

export const CategoriesPage: React.FC<{ categoria?: string }> = ({ categoria }) => {
  const categories = Array.from(new Set(articulos.map(a => a.category)));
  
  const filteredArticles = categoria 
    ? articulos.filter(a => a.category.toLowerCase().replace(/\s+/g, '-') === categoria.toLowerCase())
    : [];

  const currentCategory = categoria 
    ? articulos.find(a => a.category.toLowerCase().replace(/\s+/g, '-') === categoria.toLowerCase())?.category 
    : null;

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white py-24">
      <Helmet>
        <title>{currentCategory ? `${currentCategory} | FinanzasHíbridas` : 'Categorías | FinanzasHíbridas'}</title>
        <meta name="description" content={currentCategory ? `Explora todos nuestros artículos sobre ${currentCategory}. Educación financiera de alto nivel.` : 'Explora nuestras categorías de educación financiera.'} />
      </Helmet>
      
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">
          {currentCategory ? `Categoría: ` : 'Todas las '}
          <span className="text-emerald-500">{currentCategory || 'Categorías'}</span>
        </h1>

        {categoria ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map(article => (
              <a 
                key={article.id} 
                href={`/articulo/${article.id}`}
                className="block bg-[#121826] border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all group"
              >
                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-emerald-500 transition-colors mb-4">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2">{article.desc}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map(cat => (
              <a 
                key={cat} 
                href={`/categoria/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="block bg-[#121826] border border-white/5 p-12 rounded-[2rem] hover:border-emerald-500/30 transition-all text-center group"
              >
                <span className="text-3xl font-black uppercase tracking-tighter group-hover:text-emerald-500 transition-colors">
                  {cat}
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-20">
          <a href="/" className="text-emerald-500 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
            <i className="fas fa-arrow-left mr-2"></i> Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};
