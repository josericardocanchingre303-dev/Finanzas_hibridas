import fs from 'fs';
import path from 'path';
import { articulos } from '../data/articulos/index';

const DOMAIN = 'https://finanzashibridas.com';
const TODAY = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${articulos
    .map((art) => {
      // Normalizar la fecha. Si es "Mayo 2026", usar hoy o intentar parsear.
      // Los artículos nuevos tienen fechaPublicacion en formato ISO o similar.
      // Los modales tienen "Mayo 2026", "Junio 2026", etc.
      let lastmod = TODAY;
      if (art.date && art.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        lastmod = art.date;
      }

      return `
  <url>
    <loc>${DOMAIN}/articulo/${art.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generado con éxito en public/sitemap.xml');
};

generateSitemap();
