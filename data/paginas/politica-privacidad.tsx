import React from 'react';

export const PoliticaPrivacidad = () => (
  <div className="prose prose-invert max-w-4xl mx-auto py-12 px-4 text-slate-300">
    <h1 className="text-4xl font-black text-white mb-8">Política de Privacidad</h1>
    <p className="text-sm text-slate-500 mb-12 italic">Última actualización: 24 de marzo de 2026</p>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">1. Introducción y Responsabilidad</h2>
      <p>
        En <strong>FinanzasHíbridas.com</strong>, la privacidad de nuestros visitantes es de extrema importancia. 
        Este documento detalla los tipos de información personal que recibimos y recopilamos, y cómo se utiliza. 
        Como plataforma educativa, nos comprometemos a ser transparentes sobre el tratamiento de sus datos 
        y a actuar con responsabilidad en la gestión de la información que nos confía.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">2. Datos Recopilados</h2>
      <p>
        Al igual que muchos otros sitios web, hacemos uso de archivos de registro y herramientas de análisis 
        para mejorar la experiencia del usuario:
      </p>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>
          <strong>Google Analytics:</strong> Utilizamos esta herramienta para entender cómo los visitantes 
          interactúan con nuestro contenido. Esto incluye datos como direcciones IP, tipo de navegador, 
          proveedor de servicios de Internet (ISP), páginas de referencia/salida y número de clics. 
          Estos datos no están vinculados a ninguna información que sea personalmente identificable.
        </li>
        <li>
          <strong>Google AdSense:</strong> Como socio publicitario, Google utiliza cookies para publicar 
          anuncios en nuestro sitio basados en las visitas anteriores de los usuarios a este y otros sitios web.
        </li>
        <li>
          <strong>Cookies de Terceros:</strong> Algunos de nuestros socios publicitarios pueden utilizar 
          cookies y balizas web en nuestro sitio.
        </li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">3. Uso de Cookies y Gestión</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Las utilizamos para 
        almacenar información sobre las preferencias de los visitantes y registrar información específica 
        del usuario sobre qué páginas accede o visita.
      </p>
      <p className="mt-4">
        Usted puede elegir desactivar o desactivar selectivamente nuestras cookies o las cookies de terceros 
        en la configuración de su navegador. Sin embargo, esto puede afectar la forma en que puede interactuar 
        con nuestro sitio, así como con otros sitios web.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">4. Cumplimiento con GDPR y Leyes Aplicables</h2>
      <p>
        Cumplimos con el <strong>Reglamento General de Protección de Datos (GDPR)</strong> de la Unión Europea. 
        Si usted es residente del Espacio Económico Europeo (EEE), tiene ciertos derechos de protección de datos:
      </p>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>El derecho a acceder, actualizar o eliminar la información que tenemos sobre usted.</li>
        <li>El derecho de rectificación.</li>
        <li>El derecho a oponerse.</li>
        <li>El derecho de restricción.</li>
        <li>El derecho a la portabilidad de los datos.</li>
        <li>El derecho a retirar el consentimiento.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-22xl font-bold text-white mb-4">5. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre esta Política de Privacidad, el tratamiento de sus datos o desea 
        ejercer cualquiera de sus derechos, puede ponerse en contacto con nosotros a través del siguiente 
        correo electrónico:
      </p>
      <div className="mt-6 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl inline-block">
        <p className="font-mono text-emerald-400">privacidad@finanzashibridas.com</p>
      </div>
    </section>

    <footer className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500">
      <p>
        FinanzasHíbridas.com se reserva el derecho de actualizar esta política en cualquier momento. 
        Le recomendamos revisar esta página periódicamente para estar informado sobre cualquier cambio.
      </p>
    </footer>
  </div>
);
