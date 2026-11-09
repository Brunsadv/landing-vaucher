// TESTE TEMPORÁRIO (08/11/2026): verifica se o DJEN aceita consultas feitas a partir da região do Vercel em São Paulo.
// Consulta sempre o mesmo processo público, sem parâmetros. Será removido logo após o teste.
export default async function handler(req, res) {
  const inicio = Date.now();
  try {
    const r = await fetch('https://comunicaapi.pje.jus.br/api/v1/comunicacao?numeroProcesso=10022529120168110041&itensPorPagina=5&pagina=1', {
      headers: { 'User-Agent': 'VaucherSistema/1.0 (acompanhamento processual)' },
    });
    const corpo = await r.text();
    let count = null;
    try { count = JSON.parse(corpo).count; } catch {}
    res.status(200).json({ regiao: process.env.VERCEL_REGION, djen_status: r.status, count, ms: Date.now() - inicio });
  } catch (e) {
    res.status(200).json({ regiao: process.env.VERCEL_REGION, erro: String(e), ms: Date.now() - inicio });
  }
}
