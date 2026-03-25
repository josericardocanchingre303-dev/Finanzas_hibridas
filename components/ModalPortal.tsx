
import React from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const portalRoot = document.getElementById('modal-portal');
  if (!portalRoot) return null;
  
  return createPortal(children, portalRoot);
};
