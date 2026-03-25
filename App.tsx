
import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Ticker } from './components/Ticker';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { articulos } from './data/articulos';
import { SafeImage } from './components/SafeImage';
import { BlogPostLayout } from './components/BlogPostLayout';
import { useModal, ModalProvider } from './context/ModalContext';
import { HelmetProvider } from 'react-helmet-async';
import { ModalPortal } from './components/ModalPortal';
import { Footer } from './components/Footer';
import { AdSpace } from './components/AdSpace';
import { CookieConsent } from './components/CookieConsent';
import { CategoriasPage } from './data/paginas/categorias';
import { NotFound } from './pages/NotFound';

const Home: React.FC = () => {
  const { activeArticleId, openModal, closeModal } = useModal();
  const [activeCategory, setActiveCategory] = useState('TODOS');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  const filteredArticles = useMemo(() => {
    return activeCategory === 'TODOS' ? articulos : articulos.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  const activeArticle = useMemo(() => {
    return activeArticleId ? articulos.find(a => a.id === activeArticleId) : null;
  }, [activeArticleId]);

  // Sync modal with URL for SEO if needed, but for now let's just handle the modal
  const handleOpenArticle = (id: string) => {
    openModal(id);
    // Optional: window.history.pushState({}, '', `/articulo/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white overflow-x-hidden font-sans selection:bg-emerald-500 selection:text-white">
      <header className="glass-effect sticky top-0 z-[1000] py-6" role="banner">
        <nav className="container mx-auto px-6 flex justify-between items-center" role="navigation">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-emerald-500 p-3.5 rounded-[1.2rem] group-hover:rotate-[360deg] transition-all duration-1000 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <i className="fas fa-gem text-slate-900 text-xl" aria-hidden="true"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Finanzas<span className="text-emerald-500">Híbridas</span></span>
          </div>
          <div className="hidden xl:flex items-center gap-14">
            {['TODOS', 'INVERSIÓN', 'AHORRO', 'SEGURIDAD', 'FINANZAS PERSONALES', 'INVERSIONES TRADICIONALES', 'CRIPTOMONEDAS'].map(cat => (
              <button 
                key={cat} 
                onClick={() => { setActiveCategory(cat); }} 
                className={`text-[11px] font-black uppercase tracking-[0.4em] transition-colors ${activeCategory === cat ? 'text-emerald-500' : 'hover:text-emerald-500 text-slate-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <Ticker />

      <main role="main">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Inteligencia Híbrida 2026
          </div>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-12 max-w-6xl">
            Soberanía <span className="text-emerald-glow">Financiera</span> <br/>en la era digital
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-16 font-medium leading-relaxed">
            Alfabetización financiera de alto nivel para el inversor moderno. Cerramos la brecha entre el sistema tradicional y la nueva economía descentralizada.
          </p>
          <GeminiAdvisor />
        </section>

        {/* Articles Grid */}
        <section id="academia" className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/5 pb-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Academia <span className="text-emerald-500">Elite</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Material de estudio para el 1%</p>
            </div>
            <div className="flex gap-4">
              {['TODOS', 'INVERSIÓN', 'AHORRO', 'SEGURIDAD', 'FINANZAS PERSONALES', 'INVERSIONES TRADICIONALES', 'CRIPTOMONEDAS'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${activeCategory === cat ? 'bg-emerald-500 border-emerald-500 text-slate-900' : 'bg-transparent border-white/10 text-slate-400 hover:border-emerald-500/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article, index) => (
              <div 
                key={article.id} 
                className={`group relative flex flex-col h-full bg-[#121826] border border-white/5 rounded-[3rem] overflow-hidden hover:border-emerald-500/30 transition-all duration-500 cursor-pointer ${index === 0 ? 'lg:col-span-2' : ''}`}
                onClick={() => handleOpenArticle(article.id)}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-80 md:h-[500px]' : 'h-80'}`}>
                  <SafeImage src={article.imageUrl} alt={article.title} className="group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-8 left-8">
                    <span className={`${article.categoryColor} px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex items-center gap-6 mb-8 text-[9px] font-black uppercase tracking-widest text-slate-500">
                    <span className="flex items-center gap-2"><i className="fas fa-signal text-emerald-500"></i> {article.level}</span>
                    <span className="flex items-center gap-2"><i className="fas fa-clock text-emerald-500"></i> {article.time}</span>
                  </div>
                  <h3 className={`font-black uppercase tracking-tighter leading-tight mb-8 group-hover:text-emerald-500 transition-colors ${index === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-10 line-clamp-3">
                    {article.desc}
                  </p>
                  <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-slate-900 font-bold">
                        {article.author.charAt(0)}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{article.author}</span>
                    </div>
                    <i className="fas fa-chevron-right text-emerald-500 group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Sponsored Content Block */}
            <AdSpace className="lg:col-span-1" label="Protocolo de Autocustodia Institucional" />
          </div>
        </section>
      </main>

      <Footer />

      <CookieConsent />

      <ModalPortal>
        {activeArticleId && activeArticle && (
          <BlogPostLayout
            imageUrl={activeArticle.imageUrl}
            category={activeArticle.category}
            title={activeArticle.title}
            categoryColor={activeArticle.categoryColor}
            author={activeArticle.author}
            authorRole={activeArticle.authorRole}
            date={activeArticle.date}
            metaDescription={activeArticle.metaDescription}
            slug={activeArticle.id}
          >
            {activeArticle.content}
          </BlogPostLayout>
        )}
      </ModalPortal>
    </div>
  );
};

const ArticlePage: React.FC = () => {
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

const CategoryRoute: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();
  return <CategoriasPage categoria={categoria} />;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articulo/:id" element={<ArticlePage />} />
            <Route path="/categoria/:categoria" element={<CategoryRoute />} />
            <Route path="/categorias" element={<CategoriasPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </HelmetProvider>
  );
};

export default App;
