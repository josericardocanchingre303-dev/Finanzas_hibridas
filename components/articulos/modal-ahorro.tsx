import React from 'react';

export const modalAhorro = {
  imageUrl: "https://images.unsplash.com/photo-1621981386829-9b458a2cddde",
  category: "AHORRO",
  categoryColor: "bg-orange-600",
  author: "Elena M. Torres",
  authorRole: "Macro-Economist & Asset Protection Specialist",
  date: "Marzo 2026",
  title: "Soberanía Monetaria: Blindaje contra la Degradación del Fiat",
  level: "EXPERTO",
  time: "30 MIN",
  desc: "Cómo mitigar el Efecto Cantillon, la expansión de la masa monetaria M2 y la degradación sistemática del poder adquisitivo.",
  metaDescription: "Aprende a mitigar el Efecto Cantillon y la degradación del poder adquisitivo mediante estrategias de soberanía monetaria.",
  content: (
    <>
      <h2>La Patología de la Moneda de Deuda</h2>
      <p>Vivimos bajo un sistema de <strong>reserva fraccionaria</strong> donde el dinero es creado como deuda. Esta expansión de la base monetaria (M2) genera una dilución del valor que beneficia a quienes están cerca del emisor antes de que la inflación llegue al ciudadano de a pie: el <strong>Efecto Cantillon</strong>.</p>
      
      <h3>La Escasez Dura: Oro y Bitcoin</h3>
      <p>El blindaje patrimonial exige la transición de <strong>activos de promesa</strong> (papel moneda) a <strong>activos de hecho</strong>. Mientras que el dinero fiat tiene un coste de producción marginal cero, <strong>Bitcoin</strong> posee escasez algorítmica inalterable. Representa el primer sistema de escasez absoluta en la historia, convirtiéndose en la <em>Apex Property</em> digital.</p>

      <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[2.5rem] my-12">
        <h4 className="text-emerald-400 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
          <i className="fas fa-exclamation-triangle"></i> Análisis de Riesgo: Riesgo de Contraparte y Bail-ins
        </h4>
        <p className="text-base text-slate-300 leading-relaxed">
          Un saldo bancario es, legalmente, un préstamo no garantizado al banco. La única defensa técnica es la <strong>Autocustodia</strong> (Cold Wallets) y la posesión de activos fuera del sistema de liquidación bancaria centralizado.
        </p>
      </div>

      <h3>Protocolo de Blindaje Soberano</h3>
      <ul className="list-disc pl-8 space-y-6 text-slate-300">
        <li><strong>Ratio de Liquidez Real (RLR):</strong> Mantener un 15-20% del patrimonio neto en activos no confiscables.</li>
        <li><strong>Diversificación Jurisdiccional:</strong> No mantenga todos sus activos bajo una misma bandera; el riesgo político es un factor determinante.</li>
        <li><strong>Hard Money Ratio:</strong> Incrementar la exposición a activos con un alto ratio de <em>Stock-to-Flow</em>.</li>
      </ul>

      <blockquote>"La soberanía no se pide, se ejerce a través del control directo de las llaves privadas de tu capital."</blockquote>
    </>
  )
};
