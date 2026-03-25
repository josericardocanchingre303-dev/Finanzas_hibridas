
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
import { CookieConsent } from './context/CookieConsent';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ArticlePage } from './pages/ArticlePage';
import { NotFound } from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ModalProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ModalProvider>
    </HelmetProvider>
  );
};

const AppContent: React.FC = () => {
  const { activeArticleId } = useModal();
  const activeArticle = useMemo(() => {
    return activeArticleId ? articulos.find(a => a.id === activeArticleId) : null;
  }, [activeArticleId]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articulo/:id" element={<ArticlePage />} />
        <Route path="/categoria/:categoria" element={<CategoryRoute />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

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
    </>
  );
};

const CategoryRoute: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();
  return <CategoriesPage categoria={categoria} />;
};

export default App;
