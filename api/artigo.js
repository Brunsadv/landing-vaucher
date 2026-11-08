// Vercel Serverless Function - página do artigo com prévia (Open Graph) para WhatsApp, Facebook, LinkedIn etc.
// /artigo/<slug> (rewrite em vercel.json) -> esta função -> insight.html com título, resumo e imagem do artigo
// embutidos no <head>. O conteúdo continua sendo carregado pelo JavaScript da própria página.

import { readFileSync } from 'fs';
import { join } from 'path';

const API = 'https://vaucher-sistema-production.up.railway.app';
const SITE = 'https://www.vaucherealvares.com';
let modelo = null;

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function trocarMeta(html, seletor, valor) {
  // seletor: 'property="og:title"' ou 'name="description"'
  const re = new RegExp(`(<meta\\s+${seletor}\\s+content=")[^"]*(")`, 'i');
  return re.test(html)
    ? html.replace(re, `$1${esc(valor)}$2`)
    : html.replace('</head>', `  <meta ${seletor} content="${esc(valor)}">\n</head>`);
}

async function buscarArtigo(slug) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 6000);
  try {
    const r = await fetch(`${API}/api/public/insights/${encodeURIComponent(slug)}?lang=pt&meta=true`, { signal: ctrl.signal });
    if (!r.ok) return null;
    const dados = await r.json();
    return dados && dados.insight ? dados.insight : dados;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

export default async function handler(req, res) {
  const slug = String(req.query.slug || '').slice(0, 200);
  if (!modelo) modelo = readFileSync(join(process.cwd(), 'insight.html'), 'utf8');

  // Links relativos (i18n.js, logo, insights.html) passam a valer a partir da raiz do site
  let html = modelo.replace(/<head>/i, '<head>\n  <base href="/">');

  const artigo = slug && /^[a-z0-9-]+$/i.test(slug) ? await buscarArtigo(slug) : null;
  if (artigo && artigo.titulo) {
    const url = `${SITE}/artigo/${encodeURIComponent(slug)}`;
    const resumo = (artigo.resumo || '').replace(/\s+/g, ' ').trim().slice(0, 300) || 'Artigo jurídico do escritório Vaucher e Álvares.';
    const img = String(artigo.imagem_url || '');
    const imagem = img.startsWith('/') ? API + img : /^https:\/\//.test(img) ? img : `${SITE}/logo-icon.png`;

    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(artigo.titulo)} | Vaucher e Álvares</title>`);
    html = trocarMeta(html, 'name="description"', resumo);
    html = trocarMeta(html, 'property="og:title"', artigo.titulo);
    html = trocarMeta(html, 'property="og:description"', resumo);
    html = trocarMeta(html, 'property="og:url"', url);
    html = trocarMeta(html, 'property="og:image"', imagem);
    html = trocarMeta(html, 'name="twitter:card"', imagem.endsWith('logo-icon.png') ? 'summary' : 'summary_large_image');
    html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, `$1${esc(url)}$2`);
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
  } else {
    res.setHeader('Cache-Control', 'public, s-maxage=60');
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
