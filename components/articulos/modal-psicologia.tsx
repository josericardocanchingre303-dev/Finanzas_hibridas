import React from 'react';

export const modalPsicologia = {
  imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
  category: "SEGURIDAD",
  categoryColor: "bg-red-600",
  author: "Dr. Adrian Hoffmann",
  authorRole: "Behavioral Finance Expert & Risk Psychologist",
  date: "Marzo 2026",
  title: "Psicología del Capital: El Sesgo Cognitivo como Riesgo Sistémico",
  level: "EXPERTO",
  time: "40 MIN",
  desc: "El inversor es su propio peor enemigo. Un análisis sobre el miedo, la codicia y los sesgos que destruyen el patrimonio neto.",
  metaDescription: "Análisis sobre la psicología del capital, sesgos cognitivos y cómo evitar decisiones financieras emocionales.",
  content: (
    <>
      <h2>La Biología de la Decisión Financiera</h2>
      <p>Nuestro cerebro está evolutivamente diseñado para la supervivencia en la sabana, no para operar en mercados de alta frecuencia. La <strong>Aversión a la Pérdida</strong> (Teoría de las Perspectivas de Kahneman) hace que sintamos el dolor de una caída el doble de lo que disfrutamos una ganancia equivalente, provocando ventas irracionales en los valles del mercado.</p>
      
      <h3>Heurísticas, FOMO y la Manipulación de Masas</h3>
      <p>Los ciclos de mercado son, en esencia, ciclos psicológicos. El <strong>FOMO</strong> (Fear of Missing Out) empuja al inversor a comprar en máximos históricos, mientras que el <strong>FUD</strong> (Fear, Uncertainty, Doubt) le obliga a capitular en momentos de máxima oportunidad histórica.</p>

      <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[2.5rem] my-12">
        <h4 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
          <i className="fas fa-brain"></i> Análisis de Riesgo: Sesgo de Confirmación
        </h4>
        <p className="text-base text-slate-300 leading-relaxed">
          Tendemos a buscar información que valide nuestra tesis de inversión e ignorar las señales de peligro. El protocolo técnico exige buscar activamente la <strong>tesis contraria</strong> (Steel-manning) antes de asignar capital significativo.
        </p>
      </div>

      <blockquote>"El mercado financiero es un dispositivo para transferir dinero de los impacientes a los pacientes." — Warren Buffett.</blockquote>

      <h3>Protocolo de Higiene Mental del Inversor</h3>
      <ol className="list-decimal pl-8 space-y-6 text-slate-300">
        <li><strong>Inversión Automatizada (DCA):</strong> Elimina la decisión emocional mediante compras programadas en el tiempo.</li>
        <li><strong>Diario de Tesis:</strong> Documente por qué compró un activo. Lea sus razones originales cuando el mercado caiga un 30% y el pánico se apodere de la narrativa social.</li>
        <li><strong>Aislamiento de Ruido:</strong> Ignore los titulares sensacionalistas; enfoque su análisis en los fundamentales y la estructura de mercado a largo plazo.</li>
      </ol>
    </>
  )
};
