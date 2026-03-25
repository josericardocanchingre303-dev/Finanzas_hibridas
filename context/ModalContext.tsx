
import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface ModalContextType {
  activeArticleId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const openModal = useCallback((id: string) => {
    // Guardar el elemento que tenía el foco para restaurarlo al cerrar
    lastFocusedElement.current = document.activeElement as HTMLElement;
    
    // Calcular el ancho de la scrollbar para evitar saltos visuales
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    
    setActiveArticleId(id);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = 'auto';
    
    setActiveArticleId(null);

    // Restaurar foco después de que el modal se desmonte
    setTimeout(() => {
      lastFocusedElement.current?.focus();
    }, 0);
  }, []);

  return (
    <ModalContext.Provider value={{ activeArticleId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
