// Vercel Serverless Function - Proxy para API DataJud CNJ
// Resolve problema de CORS para consulta de processos

const DATAJUD_API_URL = 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmt/_search';
// Chave publica do DataJud (CNJ). Pode ser sobrescrita pela variavel DATAJUD_API_KEY no Vercel.
const DATAJUD_API_KEY = process.env.DATAJUD_API_KEY || 'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

// So o proprio site pode usar este proxy (evita que terceiros consumam a cota em nome do escritorio)
const ALLOWED_ORIGINS = new Set([
  'https://www.vaucherealvares.com',
  'https://vaucherealvares.com',
  'http://localhost:3000',
  'http://127.0.0.1:5500',
]);

export default async function handler(req, res) {
  // CORS restrito ao proprio site
  const origin = req.headers.origin || '';
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return res.status(403).json({ error: 'Origem nao autorizada.' });
  }
  res.setHeader('Access-Control-Allow-Origin', origin || 'https://www.vaucherealvares.com');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Apenas POST permitido
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  try {
    const { numeroProcesso } = req.body || {};

    if (!numeroProcesso || typeof numeroProcesso !== 'string' || numeroProcesso.length > 40) {
      return res.status(400).json({ error: 'Número do processo é obrigatório.' });
    }

    // Limpar e normalizar número do processo (remover tudo exceto dígitos)
    const numeroSomenteDigitos = numeroProcesso.trim().replace(/\D/g, '');

    // Numero CNJ tem exatamente 20 digitos (NNNNNNN-DD.AAAA.J.TR.OOOO)
    if (numeroSomenteDigitos.length !== 20) {
      return res.status(400).json({ error: 'Informe o número completo do processo (20 dígitos no padrão CNJ).' });
    }

    // Construir query ElasticSearch
    // DataJud armazena número SEM formatação (apenas dígitos)
    const query = {
      size: 1,
      query: {
        term: { "numeroProcesso": numeroSomenteDigitos }
      }
    };

    // Fazer requisição à API DataJud
    const response = await fetch(DATAJUD_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': DATAJUD_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro API DataJud:', response.status, errorText);
      return res.status(502).json({
        error: 'Erro ao consultar a base do CNJ (DataJud). Tente novamente em instantes.'
      });
    }

    const data = await response.json();

    // Verificar se encontrou resultados
    if (!data.hits || !data.hits.hits || data.hits.hits.length === 0) {
      return res.status(404).json({
        error: 'Processo não encontrado',
        numeroProcesso: numeroSomenteDigitos
      });
    }

    // Extrair e formatar dados do processo
    const processo = data.hits.hits[0]._source;

    // Função para formatar número do processo (NNNNNNN-DD.AAAA.J.TR.OOOO)
    function formatarNumeroProcesso(numero) {
      if (!numero || numero.length !== 20) return numero;
      const n = numero;
      return `${n.slice(0,7)}-${n.slice(7,9)}.${n.slice(9,13)}.${n.slice(13,14)}.${n.slice(14,16)}.${n.slice(16,20)}`;
    }

    // Formatar resposta simplificada
    const resultado = {
      numeroProcesso: formatarNumeroProcesso(processo.numeroProcesso),
      classe: processo.classe || null,
      orgaoJulgador: processo.orgaoJulgador || null,
      dataAjuizamento: processo.dataAjuizamento || null,
      grau: processo.grau || null,
      nivelSigilo: processo.nivelSigilo || 0,
      assuntos: processo.assuntos || [],
      movimentos: (processo.movimentos || [])
        .sort((a, b) => new Date(b.dataHora) - new Date(a.dataHora))
        .slice(0, 10), // Últimos 10 movimentos
      dataHoraUltimaAtualizacao: processo.dataHoraUltimaAtualizacao || null
    };

    return res.status(200).json(resultado);

  } catch (error) {
    console.error('Erro na função:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
}
