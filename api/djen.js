// Vercel Serverless Function (região gru1 - São Paulo): ponte para o DJEN (comunicaapi.pje.jus.br).
// O DJEN recusa consultas vindas do servidor do sistema (Railway, nos EUA); a partir do Brasil funciona.
// Só aceita consulta por número de processo (com datas e paginação) e só atende o backend do escritório:
// o pedido traz um código (X-Proxy-Token) que é conferido com o próprio backend.

const API = 'https://vaucher-sistema-production.up.railway.app';
const DJEN = 'https://comunicaapi.pje.jus.br/api/v1/comunicacao';
const validos = new Map(); // token -> validade (ms), para não consultar o backend a cada chamada

async function tokenValido(token) {
  if (!token || token.length < 32 || token.length > 128) return false;
  const ate = validos.get(token);
  if (ate && ate > Date.now()) return true;
  try {
    const r = await fetch(`${API}/api/interno/djen-proxy/validar`, { headers: { 'X-Proxy-Token': token } });
    if (r.status === 200) {
      validos.set(token, Date.now() + 10 * 60 * 1000);
      return true;
    }
  } catch {}
  return false;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });
  if (!(await tokenValido(req.headers['x-proxy-token']))) return res.status(401).json({ error: 'Não autorizado' });

  const q = req.query || {};
  const numero = String(q.numeroProcesso || '');
  if (!/^\d{20}$/.test(numero)) return res.status(400).json({ error: 'numeroProcesso inválido' });
  const params = new URLSearchParams({ numeroProcesso: numero });
  for (const campo of ['dataDisponibilizacaoInicio', 'dataDisponibilizacaoFim']) {
    if (q[campo]) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(String(q[campo]))) return res.status(400).json({ error: `${campo} inválido` });
      params.set(campo, String(q[campo]));
    }
  }
  const pagina = Math.min(Math.max(parseInt(q.pagina || '1', 10) || 1, 1), 50);
  const itens = String(q.itensPorPagina) === '5' ? '5' : '100';
  params.set('pagina', String(pagina));
  params.set('itensPorPagina', itens);

  try {
    const r = await fetch(`${DJEN}?${params}`, { headers: { 'User-Agent': 'VaucherSistema/1.0 (acompanhamento processual)' } });
    const corpo = await r.text();
    res.status(r.status).setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.send(corpo);
  } catch (e) {
    return res.status(502).json({ error: 'Falha ao consultar o DJEN' });
  }
}
