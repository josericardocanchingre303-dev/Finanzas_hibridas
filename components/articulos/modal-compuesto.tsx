import React from 'react';

export const modalCompuesto = {
  imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
  category: "INVERSIÓN",
  categoryColor: "bg-indigo-600",
  author: "Carlos Ruiz",
  authorRole: "Senior Portfolio Strategist & Mathematical Finance Expert",
  date: "Marzo 2026",
  title: "Interés Compuesto: La Dinámica de la Exponencialidad Patrimonial",
  level: "EXPERTO",
  time: "25 MIN",
  desc: "Un análisis exhaustivo sobre la capitalización del rendimiento, el impacto del coste de oportunidad y la optimización fiscal del interés compuesto.",
  metaDescription: "Análisis exhaustivo sobre el interés compuesto, capitalización de rendimiento y optimización fiscal para inversores de alto nivel.",
  content: (
    <>
      <h2>La Arquitectura Matemática de la Riqueza</h2>
      <p>El <strong>interés compuesto</strong> no es simplemente una herramienta de ahorro; es la manifestación física del crecimiento orgánico aplicado al capital. En términos de ingeniería financiera, lo definimos mediante la función exponencial: <strong>A = P(1 + r/n)^(nt)</strong>. Sin embargo, para el inversor de alto nivel, la clave no reside en la fórmula, sino en la <strong>Tasa Interna de Retorno (TIR)</strong> neta de fricciones.</p>
      
      <h3>La Variable del Tiempo y el Coste de Oportunidad</h3>
      <p>El tiempo actúa como un multiplicador de fuerza. Un retraso de solo 60 meses en el inicio de un proceso de capitalización puede resultar en una pérdida de hasta el 50% del valor terminal en un horizonte de 30 años. Este <strong>coste de oportunidad</strong> es el "impuesto invisible" más severo que enfrenta el capital desocupado.</p>
      
      <blockquote>"El interés compuesto es la octava maravilla del mundo. Quien lo entiende, lo gana; quien no, lo paga." — Atribuido a Albert Einstein, fundamental en la praxis de FinanzasHíbridas.</blockquote>

      <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[2.5rem] my-12">
        <h4 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
          <i className="fas fa-shield-alt"></i> Análisis de Riesgo: El Lastre Fiscal y la Inflación
        </h4>
        <p className="text-base text-slate-300 leading-relaxed">
          El mayor enemigo de la exponencialidad es la <strong>fricción fiscal</strong>. Cada evento de liquidación que genera impuestos reduce la base de capitalización. Por ello, priorizamos vehículos de <strong>diferimiento fiscal</strong> (como los ETFs de acumulación en jurisdicciones eficientes) donde el capital destinado a impuestos sigue trabajando para el inversor.
        </p>
      </div>

      <h3>Protocolo de Optimización Exponencial</h3>
      <ol className="list-decimal pl-8 space-y-6 text-slate-300">
        <li><strong>Minimización de TER (Total Expense Ratio):</strong> Cada 0.1% de comisión bancaria sustrae una fortuna potencial. El objetivo es un TER inferior al 0.20%.</li>
        <li><strong>Reequilibrio Sistemático:</strong> No solo se trata de reinvertir, sino de hacerlo mediante una estrategia de <em>rebalancing</em> que mantenga la exposición al riesgo constante.</li>
        <li><strong>Rendimiento Real vs. Nominal:</strong> La meta es batir el IPC + 4%. Cualquier rendimiento inferior es, técnicamente, una erosión del poder adquisitivo.</li>
      </ol>
    </>
  )
};
