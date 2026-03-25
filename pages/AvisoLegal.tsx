import React from 'react';

export const AvisoLegal = () => (
  <div className="prose prose-invert max-w-4xl mx-auto py-12 px-4 text-slate-300">
    <h1 className="text-4xl font-black text-white mb-8">Aviso Legal</h1>
    <p className="text-sm text-slate-500 mb-12 italic">Última actualización: 24 de marzo de 2026</p>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">1. Datos del Titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los siguientes datos identificativos del titular:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Denominación:</strong> Finanzas Híbridas Intelligence</li>
        <li><strong>Email de contacto:</strong> legal@finanzashibridas.com</li>
        <li><strong>Actividad:</strong> Plataforma de educación financiera y análisis de mercados.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">2. Responsabilidad sobre Contenido Financiero</h2>
      <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-2xl mb-6">
        <p className="text-rose-400 font-bold mb-2 uppercase tracking-widest text-xs">Advertencia Crítica</p>
        <p className="text-sm leading-relaxed">
          Todo el contenido publicado en <strong>FinanzasHíbridas.com</strong> tiene un propósito exclusivamente educativo e informativo. <strong>No constituye, bajo ninguna circunstancia, asesoramiento financiero, legal, fiscal o de inversión.</strong>
        </p>
      </div>
      <p>
        La inversión en activos financieros (acciones, ETFs, criptomonedas, etc.) conlleva riesgos significativos. El titular del sitio no se hace responsable de las decisiones de inversión tomadas por los usuarios basadas en la información aquí expuesta. Se recomienda encarecidamente consultar con un asesor financiero certificado antes de realizar cualquier operación.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos de este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, así como el diseño gráfico y software, son propiedad exclusiva de Finanzas Híbridas o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
      </p>
      <p className="mt-4">
        Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido de este sitio sin la autorización expresa y por escrito del titular.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">4. Limitación de Responsabilidad</h2>
      <p>
        El titular no garantiza la inexistencia de errores en el acceso a la web, en su contenido, ni que este se encuentre actualizado, aunque desarrollará sus mejores esfuerzos para, en su caso, evitarlos, subsanarlos o actualizarlos.
      </p>
      <p className="mt-4">
        Tanto el acceso a este sitio web como el uso que pueda hacerse de la información contenida en el mismo es de la exclusiva responsabilidad de quien lo realiza.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">5. Enlaces a Terceros</h2>
      <p>
        Este sitio web puede contener enlaces a otros sitios gestionados por terceros. El titular no ejerce ningún tipo de control sobre dichos sitios y contenidos, y no asume responsabilidad alguna por la información contenida en ellos ni por las prácticas de privacidad de dichos sitios.
      </p>
    </section>

    <footer className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500">
      <p>
        El acceso a este sitio web implica la aceptación de todas las condiciones aquí expuestas.
      </p>
    </footer>
  </div>
);
