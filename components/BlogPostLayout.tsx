
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { SafeImage } from './SafeImage';
import { useModal } from '../context/ModalContext';
import { AdblockDetector } from './AdblockDetector';
import { SITE_CONFIG } from '../config/seo';

interface BlogPostLayoutProps {
  imageUrl: string;
  category: string;
  title: string;
  categoryColor: string;
  author: string;
  authorRole: string;
  date: string;
  metaDescription?: string;
  slug: string;
  children: React.ReactNode;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ 
  imageUrl, category, title, categoryColor, author, authorRole, date, children, metaDescription, slug 
}) => {
  const { closeModal } = useModal();
  const [readingProgress, setReadingProgress] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus Trap & Initial Focus
  useEffect(() => {
    closeButtonRef.current?.focus();
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && scrollRef.current) {
        const focusableElements = scrollRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const target = scrollRef.current;
      if (target) {
        const progress = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
        setReadingProgress(progress);
      }
    });
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div 
      ref={scrollRef}
      className="fixed inset-0 z-[9999] bg-[#0a0f18] text-white overflow-y-auto animate-fadeIn" 
      onScroll={handleScroll}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <Helmet>
        <title>{`${title} | ${SITE_CONFIG.name}`}</title>
        <meta name="description" content={metaDescription || SITE_CONFIG.description} />
        <link rel="canonical" href={`${SITE_CONFIG.domain}/articulo/${slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_CONFIG.domain}/articulo/${slug}`} />
        <meta property="og:title" content={`${title} | ${SITE_CONFIG.name}`} />
        <meta property="og:description" content={metaDescription || SITE_CONFIG.description} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_CONFIG.domain}/articulo/${slug}`} />
        <meta name="twitter:title" content={`${title} | ${SITE_CONFIG.name}`} />
        <meta name="twitter:description" content={metaDescription || SITE_CONFIG.description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />

        {/* JSON-LD Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": SITE_CONFIG.domain
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": category,
                "item": `${SITE_CONFIG.domain}/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": title,
                "item": `${SITE_CONFIG.domain}/articulo/${slug}`
              }
            ]
          })}
        </script>

        {/* JSON-LD Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": metaDescription || SITE_CONFIG.description,
            "datePublished": date,
            "dateModified": date,
            "author": {
              "@type": "Person",
              "name": author || SITE_CONFIG.name
            },
            "publisher": {
              "@type": "Organization",
              "name": SITE_CONFIG.name,
              "logo": {
                "@type": "ImageObject",
                "url": SITE_CONFIG.defaultImage
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${SITE_CONFIG.domain}/articulo/${slug}`
            }
          })}
        </script>
      </Helmet>
      {/* Botón de cierre flotante con Focus Management */}
      <button 
        ref={closeButtonRef}
        onClick={closeModal} 
        className="fixed top-10 right-10 md:top-16 md:right-16 bg-white text-slate-900 w-16 h-16 rounded-full flex items-center justify-center z-[10001] shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-700 hover:rotate-90 border-[12px] border-[#0a0f18]" 
        aria-label="Cerrar artículo"
      >
        <i className="fas fa-times text-2xl" aria-hidden="true"></i>
      </button>

      <div 
        className="fixed top-0 left-0 h-1.5 bg-emerald-500 z-[10002] transition-all duration-300" 
        style={{ width: `${readingProgress}%` }} 
        aria-hidden="true"
      ></div>

      <article className="min-h-screen">
        <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
          <SafeImage src={imageUrl} alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/30 to-black/40"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-24">
            <div className="max-w-5xl mx-auto">
               <div className="flex items-center gap-4 mb-8">
                  <span className={`${categoryColor} text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl`}>
                    {category}
                  </span>
               </div>

               {/* Breadcrumbs */}
               <div className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
                 <ol className="flex flex-wrap items-center gap-1">
                   <li>
                     <a href="/" className="hover:text-emerald-400 transition">Inicio</a>
                   </li>
                   <li className="text-gray-500">/</li>
                   <li>
                     <a href={`/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-emerald-400 transition">
                       {category}
                     </a>
                   </li>
                   <li className="text-gray-500">/</li>
                   <li className="text-emerald-400" aria-current="page">
                     {title}
                   </li>
                 </ol>
               </div>

               <h1 id="modal-title" className="text-5xl md:text-[80px] font-black leading-[0.9] tracking-tighter mb-12 drop-shadow-2xl uppercase">
                 {title}
               </h1>
               <div className="flex flex-wrap gap-8 items-center text-slate-400 text-[10px] font-black uppercase tracking-widest pt-10 border-t border-white/10">
                  <div className="flex items-center gap-4">
                      <img src={`https://ui-avatars.com/api/?name=${author}&background=10b981&color=fff`} className="w-10 h-10 rounded-full border-2 border-emerald-500/20" alt={author} />
                      <div>
                          <div className="text-white font-bold">{author}</div>
                          <div className="text-[8px] text-slate-500 font-black">{authorRole}</div>
                      </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-calendar-day text-emerald-500" aria-hidden="true"></i> 
                    {date}
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
          <div className="prose prose-invert mx-auto">
            {children}
          </div>

          <AdblockDetector />

          <section className="mt-32 pt-20 border-t border-white/5 space-y-32">
            <div className="text-center space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.8em] text-emerald-500/60">Comparte el conocimiento</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-4 bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-900 border border-emerald-500/20 text-emerald-400 px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all group"
                >
                  <i className={`fas ${copySuccess ? 'fa-check' : 'fa-link'} group-hover:scale-125 transition-transform`}></i> 
                  {copySuccess ? '¡ENLACE COPIADO!' : 'COPIAR ENLACE'}
                </button>
              </div>
            </div>

            <div className="space-y-16">
              <div className="flex items-center gap-6">
                <div className="w-1.5 h-12 bg-emerald-500"></div>
                <h3 className="text-4xl font-black uppercase tracking-tighter">Comentarios <span className="text-emerald-500">Expertos</span></h3>
              </div>
              <div className="bg-white/5 p-12 rounded-[3rem] border border-white/5 text-center">
                <p className="text-slate-400 text-sm font-medium">La sección de debates está temporalmente en mantenimiento.</p>
              </div>
            </div>
          </section>

          <div className="mt-20 pt-20 border-t border-white/10 flex justify-center">
            <button 
              onClick={closeModal} 
              className="bg-emerald-500 text-slate-900 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.6em] transition-all flex items-center gap-4 group hover:bg-white shadow-2xl"
            >
               <i className="fas fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> PANEL PRINCIPAL
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
