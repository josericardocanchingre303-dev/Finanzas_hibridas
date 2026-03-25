import React from 'react';
import { articulos } from '../data/articulos';
import { Helmet } from 'react-helmet-async';

export const NotFound: React.FC = () => {
  const recentArticles = articulos.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white flex flex-col items-center justify-center p-6 text-center">
      <Helmet>
        <title>404 - Página no encontrada | FinanzasHíbridas</title>
        <meta name="description" content="Lo sentimos, la página que buscas no existe. Explora nuestro contenido reciente o vuelve al inicio." />
      </Helmet>

      <div className="bg-emerald-500/10 p-12 rounded-[4rem] border border-emerald-500/20 max-w-4xl w-full">
        <div className="text-9xl font-black text-emerald-500 mb-8 tracking-tighter">404</div>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
          Soberanía <span className="text-emerald-500">Perdida</span> <br/>en el espacio digital
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
          Lo sentimos, la página que buscas no existe o ha sido movida. No dejes que esto detenga tu educación financiera.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <a 
            href="/" 
            className="bg-emerald-500 text-slate-900 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-white shadow-2xl"
          >
            VOLVER AL INICIO
          </a>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="BUSCAR ARTÍCULO..." 
              className="bg-white/5 border border-white/10 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-emerald-500/50 transition-all w-64"
            />
            <i className="fas fa-search absolute right-8 top-1/2 -translate-y-1/2 text-emerald-500"></i>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-[10px] font-black uppercase tracking-[0.8em] text-emerald-500/60">Lecturas Sugeridas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map(article => (
              <a 
                key={article.id} 
                href={`/articulo/${article.id}`}
                className="block bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all text-left group"
              >
                <h4 className="text-sm font-black uppercase tracking-tight group-hover:text-emerald-500 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
