import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[10000] p-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto bg-[#121826] border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h4 className="text-xl font-black uppercase tracking-tighter">Control de Privacidad</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Utilizamos cookies propias y de terceros (como Google AdSense y Analytics) para mejorar tu experiencia, analizar el tráfico y mostrar anuncios personalizados. Puedes aceptar todas o rechazar las no esenciales. Consulta nuestra <a href="#" className="text-emerald-500 hover:underline">Política de Privacidad</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button 
              onClick={handleRejectNonEssential}
              className="px-8 py-4 rounded-full border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Rechazar no esenciales
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-8 py-4 rounded-full bg-emerald-500 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-emerald-500/20"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
