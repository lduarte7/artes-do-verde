/**
 * Script para gerar sitemap.xml dinamicamente
 * Execute: node scripts/generate-sitemap.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// URL base do site
const SITE_URL = 'https://artes-do-verde.vercel.app';

// Ler os dados dos serviços, áreas e posts
const constantsPath = join(rootDir, 'src/lib/constants.ts');
const constantsContent = readFileSync(constantsPath, 'utf-8');

// Extrair serviços
const servicesMatch = constantsContent.match(/export const SERVICES = \[([\s\S]*?)\];/);
const services = [];
if (servicesMatch) {
  const servicesContent = servicesMatch[1];
  const slugMatches = servicesContent.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of slugMatches) {
    services.push(match[1]);
  }
}

// Extrair áreas
const areasMatch = constantsContent.match(/export const AREAS = \[([\s\S]*?)\];/);
const areas = [];
if (areasMatch) {
  const areasContent = areasMatch[1];
  const slugMatches = areasContent.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of slugMatches) {
    areas.push(match[1]);
  }
}

// Extrair posts do blog (do BLOG_POSTS)
const blogPostsMatch = constantsContent.match(/export const BLOG_POSTS = \[([\s\S]*?)\];/);
const blogPosts = [];
if (blogPostsMatch) {
  const blogPostsContent = blogPostsMatch[1];
  const slugMatches = blogPostsContent.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of slugMatches) {
    blogPosts.push(match[1]);
  }
}

// Ler posts do posts-content.tsx também
const postsContentPath = join(rootDir, 'src/lib/content/posts-content.tsx');
let postsContent = [];
try {
  const postsContentFile = readFileSync(postsContentPath, 'utf-8');
  const postsContentMatches = postsContentFile.matchAll(/slug:\s*"([^"]+)"/g);
  for (const match of postsContentMatches) {
    if (!blogPosts.includes(match[1])) {
      blogPosts.push(match[1]);
    }
  }
} catch (err) {
  console.warn('Não foi possível ler posts-content.tsx:', err.message);
}

// Páginas estáticas
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // Home
  { url: 'servicos', priority: '0.9', changefreq: 'monthly' },
  { url: 'areas-atendidas', priority: '0.9', changefreq: 'monthly' },
  { url: 'blog', priority: '0.9', changefreq: 'weekly' },
  { url: 'sobre', priority: '0.8', changefreq: 'monthly' },
  { url: 'contato', priority: '0.8', changefreq: 'monthly' },
];

// Gerar XML do sitemap
const now = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Adicionar páginas estáticas
staticPages.forEach(page => {
  const url = page.url ? `${SITE_URL}/${page.url}` : SITE_URL;
  sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Adicionar páginas de serviços
services.forEach(slug => {
  sitemap += `  <url>
    <loc>${SITE_URL}/servicos/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

// Adicionar páginas de áreas
areas.forEach(slug => {
  sitemap += `  <url>
    <loc>${SITE_URL}/areas-atendidas/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

// Adicionar posts do blog
blogPosts.forEach(slug => {
  sitemap += `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Salvar sitemap
const sitemapPath = join(rootDir, 'public/sitemap.xml');
writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log('✅ Sitemap gerado com sucesso!');
console.log(`📄 Arquivo: ${sitemapPath}`);
console.log(`📊 Total de URLs: ${staticPages.length + services.length + areas.length + blogPosts.length}`);
console.log(`   - Páginas estáticas: ${staticPages.length}`);
console.log(`   - Serviços: ${services.length}`);
console.log(`   - Áreas: ${areas.length}`);
console.log(`   - Posts do blog: ${blogPosts.length}`);

