
import React from 'react';
import { useModal } from '../context/ModalContext';

export const Footer: React.FC = () => {
  const { openModal } = useModal();

  return (
    <footer className="bg-[#05080d] text-white pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden" role="contentinfo">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500 p-2.5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <i className="fas fa-gem text-slate-900 text-lg"></i>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Finanzas<span className="text-emerald-500">Híbridas</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              La plataforma definitiva para la convergencia entre el sistema financiero tradicional y la economía digital descentralizada.
            </p>
            <div className="flex gap-5">
              {['twitter', 'linkedin', 'telegram', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Recursos Elite</h4>
            <ul className="space-y-4">
              {['Inversión Indexada', 'Análisis de Ciclos', 'Custodia Digital', 'Gestión de Riesgos', 'Academia Híbrida'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-emerald-500 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Cumplimiento</h4>
            <ul className="space-y-4">
              {['Términos de Servicio', 'Política de Privacidad', 'Aviso Legal', 'Ética Editorial', 'Certificaciones'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      if (link === 'Política de Privacidad') openModal('politica-privacidad');
                      if (link === 'Aviso Legal') openModal('aviso-legal');
                    }}
                    className="text-slate-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 h-px bg-emerald-500 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">The Briefing</h4>
            <p className="text-slate-500 text-sm font-medium">Suscríbete para recibir análisis de mercado institucionales.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-emerald-500 text-slate-900 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
                Unirse
              </button>
            </form>
          </div>
        </div>

        {/* Financial Disclaimer Block */}
        <div className="bg-[#0a0f18] border border-white/5 p-10 rounded-[2.5rem] mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="bg-rose-500/10 text-rose-500 p-4 rounded-2xl border border-rose-500/20">
              <i className="fas fa-exclamation-triangle text-xl"></i>
            </div>
            <div className="space-y-2">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Advertencia de Riesgo Patrimonial</h5>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                La inversión en activos financieros, tanto tradicionales como criptoactivos, conlleva un riesgo significativo de pérdida de capital. FinanzasHíbridas es una plataforma exclusivamente educativa. El contenido aquí expuesto no constituye asesoramiento financiero, legal o fiscal. Los rendimientos pasados no garantizan resultados futuros. Opere siempre bajo la supervisión de un profesional certificado y nunca invierta capital que no pueda permitirse perder.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} FINANZAS HÍBRIDAS INTELLIGENCE. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-10">
            <div className="flex items-center gap-3 text-slate-600 text-[9px] font-black uppercase tracking-widest">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Sistemas Operativos
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-[9px] font-black uppercase tracking-widest">
              <i className="fas fa-shield-halved text-emerald-500"></i>
              SSL Encrypted
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
