
import React, { useState, useRef, useEffect } from 'react';
import { streamFinancialAdvice } from '../services/geminiService';
import { AdvisorStatus } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<AdvisorStatus>(AdvisorStatus.IDLE);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === AdvisorStatus.RESPONDING && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [result, status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setResult('');
    setStatus(AdvisorStatus.THINKING);
    
    try {
      await streamFinancialAdvice(query, (token) => {
        setStatus(AdvisorStatus.RESPONDING);
        setResult((prev) => prev + token);
      });
    } catch (err) {
      setStatus(AdvisorStatus.ERROR);
      setResult('Error al conectar con la inteligencia financiera. Por favor, reintenta en unos momentos.');
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-xs uppercase tracking-widest">
        <i className="fas fa-microchip animate-pulse"></i>
        <span>Tutor IA Híbrido (Streaming)</span>
      </div>
      
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative flex items-center bg-white rounded-full overflow-hidden p-1 shadow-2xl">
           <div className="pl-5 text-slate-400">
             <i className="fas fa-brain"></i>
           </div>
           <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pregunta sobre economía, BTC o riesgo..."
              className="flex-1 bg-transparent px-4 py-3 text-slate-900 text-sm focus:outline-none placeholder:text-slate-400"
            />
            <button 
              type="submit"
              disabled={status === AdvisorStatus.THINKING}
              className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all disabled:opacity-50"
            >
              {status === AdvisorStatus.THINKING ? (
                <i className="fas fa-circle-notch animate-spin text-xs"></i>
              ) : (
                <i className="fas fa-arrow-right"></i>
              )}
            </button>
        </div>
      </form>

      {status !== AdvisorStatus.IDLE && (
        <div 
          ref={resultRef}
          className={`mt-6 p-8 rounded-[2rem] ${status === AdvisorStatus.ERROR ? 'bg-rose-950/30 text-rose-400 border-rose-500/20' : 'bg-white/5 text-slate-200 border-white/10'} border backdrop-blur-3xl animate-fadeIn shadow-2xl`}
        >
          {status === AdvisorStatus.THINKING && !result ? (
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60">Procesando consulta...</span>
            </div>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none leading-relaxed">
               {result || 'Generando respuesta...'}
               {status === AdvisorStatus.RESPONDING && (
                 <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse"></span>
               )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
