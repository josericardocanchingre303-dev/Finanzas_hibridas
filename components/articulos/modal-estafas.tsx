import React from 'react';

export const modalEstafas = {
  imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  category: "SEGURIDAD",
  categoryColor: "bg-red-600",
  author: "Marcos S. Vigil",
  authorRole: "Forensic Financial Auditor & Cybersecurity Lead",
  date: "Marzo 2026",
  title: "Ingeniería de Seguridad: Detección de Fraude en la Era Digital",
  level: "MEDIO",
  time: "20 MIN",
  desc: "Anatomía forense de los esquemas Ponzi, el trilema de la inversión imposible y la ingeniería social de alta sofisticación.",
  metaDescription: "Guía forense para detectar estafas financieras, esquemas Ponzi y fraudes digitales en la era de la IA.",
  content: (
    <>
      <h2>La Psicología del Fraude Algorítmico</h2>
      <p>Las estafas modernas utilizan interfaces de usuario que imitan a Bloomberg o Binance para mostrar rendimientos diarios estables. Técnicamente, esto es imposible: los mercados son estocásticos. Cualquier curva de rendimiento que no presente <strong>drawdowns</strong> (caídas) es, por definición forense, falsa.</p>
      
      <h3>El Trilema Inquebrantable de la Inversión</h3>
      <p>Usted solo puede elegir dos: <strong>Seguridad, Liquidez y Alta Rentabilidad</strong>. Si una oferta le promete las tres, está ante un esquema de captación ilícita. La rentabilidad sin riesgo no existe; solo existe el riesgo no percibido.</p>

      <div className="bg-rose-500/5 border border-rose-500/20 p-10 rounded-[2.5rem] my-12">
        <h4 className="text-rose-400 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
          <i className="fas fa-user-secret"></i> Análisis de Riesgo: Deepfakes e Ingeniería Social
        </h4>
        <p className="text-base text-slate-300 leading-relaxed">
          Estamos observando un auge en los ataques de ingeniería social mediante IA. El protocolo de seguridad exige nunca interactuar con enlaces de redes sociales. Verifique siempre la licencia de la entidad en registros oficiales como la CNMV o la SEC.
        </p>
      </div>

      <h3>Protocolo de Verificación Forense</h3>
      <ol className="list-decimal pl-8 space-y-6 text-slate-300">
        <li><strong>Auditoría de Custodia:</strong> ¿Quién guarda el dinero? Si la plataforma es juez y parte, el riesgo es extremo.</li>
        <li><strong>Prueba de Estrés de Retiro:</strong> Intente retirar fondos en momentos de volatilidad del mercado.</li>
        <li><strong>Análisis de Transparencia:</strong> Si la estrategia es "secreta" o "basada en IA propietaria", es una bandera roja inmediata.</li>
      </ol>
    </>
  )
};
