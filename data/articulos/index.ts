import React from 'react';
import { modalCompuesto } from './modal-compuesto';
import { modalAhorro } from './modal-ahorro';
import { modalEstafas } from './modal-estafas';
import { modalEtf } from './modal-etf';
import { modalPsicologia } from './modal-psicologia';

// Nuevos artículos
import { articulo as ahorroCero } from './como-empezar-ahorrar-desde-cero';
import { articulo as presupuestoEficaz } from './presupuesto-personal-eficaz';
import { articulo as fondoEmergencia } from './fondo-emergencia-cuanto-donde-guardar';
import { articulo as salirDeudas } from './salir-de-deudas-rapido-estrategias';
import { articulo as tarjetaCredito } from './tarjeta-credito-como-usar-sin-endeudarse';

// Lote 2: Inversiones Tradicionales
import { articulo as accionesPrincipiantes } from './acciones-que-son-como-invertir-principiantes';
import { articulo as etfsPrincipiantes } from './etfs-que-son-como-invertir-ventajas';
import { articulo as bonosRentaFija } from './bonos-que-son-como-invertir-renta-fija';
import { articulo as bienesRaices } from './invertir-en-bienes-raices-sin-mucho-dinero';
import { articulo as fiscalidadInversores } from './fiscalidad-inversiones-impuestos-principiantes';

// Lote 3: Criptomonedas
import { articulo as bitcoinPrincipiantes } from './bitcoin-que-es-como-funciona-principiantes';
import { articulo as ethereumContratos } from './ethereum-que-es-contratos-inteligentes';
import { articulo as defiFinanzas } from './defi-finanzas-descentralizadas-que-es-como-funciona';
import { articulo as stablecoinsTipos } from './stablecoins-que-son-como-funcionan-tipos';
import { articulo as seguridadCripto } from './seguridad-criptomonedas-como-proteger-tus-activos';

// Lote 4: Psicología + Educación Financiera
import { articulo as psicologiaDinero } from './psicologia-del-dinero-sesgos-cognitivos-financieros';
import { articulo as habitosExitosos } from './habitos-financieros-personas-exitosas';
import { articulo as erroresComunes } from './errores-financieros-comunes-como-evitarlos';
import { articulo as mentalidadAbundancia } from './mentalidad-abundancia-vs-escasez-finanzas';
import { articulo as planPasoAPaso } from './plan-financiero-personal-paso-a-paso';
import { PoliticaPrivacidad } from '../../pages/PoliticaPrivacidad';
import { AvisoLegal } from '../../pages/AvisoLegal';

const mapNewArticle = (art: any) => {
  const isTrad = art.categoria === "Inversiones tradicionales";
  const isCripto = art.categoria === "Criptomonedas";
  const isEdu = art.categoria === "Educación financiera";
  
  const getImageUrl = (slug: string) => {
    if (slug.includes('ahorro')) return '1579621970563-ebec7560ff3e';
    if (slug.includes('presupuesto')) return '1554224155-6726b3ff858f';
    if (slug.includes('emergencia')) return '1567427017-f70c7c23c5ff';
    if (slug.includes('deudas')) return '1589758438368-0ad531db3366';
    if (slug.includes('tarjeta')) return '1556742049-02e1f6d02a9a';
    if (slug.includes('acciones')) return '1611974717535-6199f17eeae6';
    if (slug.includes('etfs')) return '1590283603911-75a6399889bf';
    if (slug.includes('bonos')) return '1526303315819-38420480d188';
    if (slug.includes('bienes-raices')) return '1560518883-ce09059eeffa';
    if (slug.includes('fiscalidad')) return '1586486855531-48495144b8f1';
    if (slug.includes('bitcoin')) return '1518546305927-562d282231df';
    if (slug.includes('ethereum')) return '1622790698148-fe1ee937a1bd';
    if (slug.includes('defi')) return '1639754390407-6270ff3d833b';
    if (slug.includes('stablecoins')) return '1621360841013-0692295c2b3d';
    if (slug.includes('seguridad-criptomonedas')) return '1563986768-78b9d7573ee3';
    if (slug.includes('psicologia')) return '1553729450-f15d31d853f0';
    if (slug.includes('habitos')) return '1484480974667-5fa2f45e65bb';
    if (slug.includes('errores')) return '1594814619109-210494e7b5ad';
    if (slug.includes('mentalidad')) return '1506126613408-1f1346d31884';
    if (slug.includes('plan-financiero')) return '1454165833032-7e67f20c3521';
    return '1556742049-02e1f6d02a9a';
  };

  return {
    id: art.slug,
    imageUrl: `https://images.unsplash.com/photo-${getImageUrl(art.slug)}`,
    category: art.categoria.toUpperCase(),
    categoryColor: isTrad ? "bg-blue-600" : isCripto ? "bg-amber-500" : isEdu ? "bg-purple-600" : "bg-emerald-600",
    author: art.author || art.autor,
    authorRole: "Especialista en Finanzas Híbridas",
    date: art.fechaPublicacion,
    title: art.titulo,
    desc: art.descripcionMeta,
    metaDescription: art.descripcionMeta,
    level: isTrad ? "INTERMEDIO" : isCripto ? "AVANZADO" : isEdu ? "PRINCIPIANTE" : "PRINCIPIANTE",
    time: isCripto ? "18 MIN" : isEdu ? "20 MIN" : "15 MIN",
    content: React.createElement(art.contenido)
  };
};

export const articulos = [
  { id: 'modal-compuesto', ...modalCompuesto },
  { id: 'modal-ahorro', ...modalAhorro },
  { id: 'modal-estafas', ...modalEstafas },
  { id: 'modal-etf', ...modalEtf },
  { id: 'modal-psicologia', ...modalPsicologia },
  mapNewArticle(ahorroCero),
  mapNewArticle(presupuestoEficaz),
  mapNewArticle(fondoEmergencia),
  mapNewArticle(salirDeudas),
  mapNewArticle(tarjetaCredito),
  mapNewArticle(accionesPrincipiantes),
  mapNewArticle(etfsPrincipiantes),
  mapNewArticle(bonosRentaFija),
  mapNewArticle(bienesRaices),
  mapNewArticle(fiscalidadInversores),
  mapNewArticle(bitcoinPrincipiantes),
  mapNewArticle(ethereumContratos),
  mapNewArticle(defiFinanzas),
  mapNewArticle(stablecoinsTipos),
  mapNewArticle(seguridadCripto),
  mapNewArticle(psicologiaDinero),
  mapNewArticle(habitosExitosos),
  mapNewArticle(erroresComunes),
  mapNewArticle(mentalidadAbundancia),
  mapNewArticle(planPasoAPaso),
  {
    id: 'politica-privacidad',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    category: 'LEGAL',
    categoryColor: 'bg-slate-700',
    author: 'Finanzas Híbridas',
    authorRole: 'Compliance Team',
    date: '24 de marzo de 2026',
    title: 'Política de Privacidad',
    desc: 'Detalles sobre cómo protegemos y gestionamos sus datos personales.',
    metaDescription: 'Política de Privacidad de Finanzas Híbridas. Información sobre el tratamiento de datos personales.',
    level: 'LEGAL',
    time: '5 MIN',
    content: React.createElement(PoliticaPrivacidad)
  },
  {
    id: 'aviso-legal',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    category: 'LEGAL',
    categoryColor: 'bg-slate-700',
    author: 'Finanzas Híbridas',
    authorRole: 'Compliance Team',
    date: '24 de marzo de 2026',
    title: 'Aviso Legal',
    desc: 'Información legal sobre el uso del sitio y descargo de responsabilidad financiera.',
    metaDescription: 'Aviso Legal de Finanzas Híbridas. Información legal y descargo de responsabilidad.',
    level: 'LEGAL',
    time: '5 MIN',
    content: React.createElement(AvisoLegal)
  }
];

export const ARTICLES_DATA = articulos.reduce((acc, art) => {
  const { id, ...data } = art;
  acc[id] = data;
  return acc;
}, {} as Record<string, any>);
