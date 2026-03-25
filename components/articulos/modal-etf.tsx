import React from 'react';

export const modalEtf = {
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  category: "INVERSIÓN",
  categoryColor: "bg-indigo-600",
  author: "Sara V. Mendez",
  authorRole: "Head of Passive Management & Quantitative Analyst",
  date: "Marzo 2026",
  title: "Arquitectura de Carteras: La Ciencia de la Gestión Indexada",
  level: "EXPERTO",
  time: "35 MIN",
  desc: "Desmitificando la gestión activa: por qué el 90% de los gestores no bate al mercado y cómo construir un portfolio robusto con ETFs.",
  metaDescription: "Descubre por qué la gestión pasiva con ETFs supera a la gestión activa y cómo construir una cartera de inversión robusta.",
  content: (
    <>
      <h2>La Ineficiencia de la Gestión Activa</h2>
      <p>Décadas de datos empíricos demuestran que la <strong>gestión pasiva indexada</strong> supera consistentemente a la gestión activa tras costes e impuestos. El uso de <strong>ETFs (Exchange Traded Funds)</strong> permite una diversificación instantánea con costes operativos mínimos, capturando la rentabilidad del mercado global (Beta) de forma pura.</p>
      
      <h3>Asset Allocation: El Corazón del Portfolio</h3>
      <p>El 90% de la variabilidad del rendimiento a largo plazo no proviene de la selección de acciones individuales, sino del <strong>Asset Allocation</strong>. Una arquitectura de cartera moderna debe equilibrar Renta Variable (MSCI World), Renta Fija para el control de la volatilidad y Activos Alternativos para la descorrelación.</p>

      <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[2.5rem] my-12">
        <h4 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
          <i className="fas fa-chart-line"></i> Análisis de Riesgo: Tracking Error y Liquidez
        </h4>
        <p className="text-base text-slate-300 leading-relaxed">
          Es vital auditar el <strong>Tracking Error</strong>: la desviación real respecto al índice que intentan replicar. Un ETF ineficiente puede costar miles de euros en rendimiento perdido anualmente. Además, la liquidez del subyacente es crítica en momentos de pánico sistémico.
        </p>
      </div>

      <h3>Protocolo de Construcción de Cartera</h3>
      <ul className="list-disc pl-8 space-y-6 text-slate-300">
        <li><strong>Diversificación Global Real:</strong> Evitar el <em>Home Bias</em> (sesgo de invertir solo en su propio país).</li>
        <li><strong>Coste de Réplica:</strong> Priorice la réplica física sobre la sintética para eliminar el riesgo de contraparte de derivados.</li>
        <li><strong>Mantenimiento Algorítmico:</strong> Rebalanceo semestral para evitar la deriva del perfil de riesgo original.</li>
      </ul>
    </>
  )
};
