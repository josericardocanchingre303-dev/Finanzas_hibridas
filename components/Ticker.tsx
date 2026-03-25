
import React, { useState, useEffect } from 'react';
import { MarketData } from '../types';
import { fetchMarketData } from '../services/marketService';

export const Ticker: React.FC = () => {
  const [data, setData] = useState<MarketData[]>([]);
  const [loading, setLoading] = useState(true);

  const updateData = async () => {
    const freshData = await fetchMarketData();
    setData(freshData);
    setLoading(false);
  };

  useEffect(() => {
    updateData();
    // Actualización cada 60 segundos
    const interval = setInterval(updateData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading && data.length === 0) {
    return (
      <div className="bg-[#0a0f18] border-y border-white/5 py-3 overflow-hidden relative">
        <div className="flex justify-center items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/50">
          <i className="fas fa-circle-notch animate-spin"></i>
          Sincronizando Nodos de Mercado...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0f18] border-y border-white/5 py-3 overflow-hidden relative group">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0f18] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0f18] to-transparent z-10"></div>
      
      <div className="animate-scroll gap-16 text-[10px] font-bold tracking-widest uppercase items-center">
        {[...data, ...data, ...data].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 min-w-max hover:scale-105 transition-transform cursor-default relative group/item">
            {/* High-end Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-[#1e293b] border border-white/10 rounded-xl text-[9px] font-medium normal-case text-slate-300 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-[-5px] transition-all duration-300 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[140px] backdrop-blur-md">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-0.5">
                  <span className="text-white font-black tracking-tight">{item.symbol}</span>
                  <span className={`font-bold ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {item.exactChange}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[8px]">
                  <i className="fas fa-database text-emerald-500/50"></i>
                  <span>Source: {item.source}</span>
                </div>
              </div>
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#1e293b]"></div>
            </div>

            <span className="text-slate-500 font-black">{item.symbol}</span>
            <span className={`flex items-center gap-1.5 ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              <i className={`fas fa-caret-${item.isPositive ? 'up' : 'down'} text-[8px]`}></i>
              {item.change}
            </span>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
          </div>
        ))}
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[8px] font-black uppercase tracking-tighter text-emerald-500">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        Live Data
      </div>
    </div>
  );
};
