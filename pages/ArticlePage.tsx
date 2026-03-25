import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articulos } from '../data/articulos';
import { BlogPostLayout } from '../components/BlogPostLayout';
import { NotFound } from './NotFound';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articulos.find(a => a.id === id);

  if (!article) return <NotFound />;

  return (
    <div className="bg-[#0a0f18] min-h-screen">
      <BlogPostLayout
        imageUrl={article.imageUrl}
        category={article.category}
        title={article.title}
        categoryColor={article.categoryColor}
        author={article.author}
        authorRole={article.authorRole}
        date={article.date}
        metaDescription={article.metaDescription}
        slug={article.id}
      >
        {article.content}
      </BlogPostLayout>
      <div className="fixed bottom-10 right-10 z-[10001]">
        <button 
          onClick={() => navigate('/')}
          className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
        >
          VOLVER AL INICIO
        </button>
      </div>
    </div>
  );
};
