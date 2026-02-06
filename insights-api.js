// ============================================
// INSIGHTS API INTEGRATION
// Carrega insights dinamicamente da API
// ============================================

const INSIGHTS_API_URL = 'https://vaucher-sistema-production.up.railway.app';

// Obter idioma atual
function getCurrentLang() {
  return localStorage.getItem('language') || 'pt';
}

// Formatar data
function formatDate(dateStr, lang) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };

  const locales = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
  return date.toLocaleDateString(locales[lang] || 'pt-BR', options);
}

// Ícone da categoria
function getCategoryIcon(categoria) {
  const icons = {
    artigo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    jurisprudencia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6l9 4 9-4-9-4-9 4z"/><path d="M3 6v8l9 4 9-4V6"/><path d="M12 10v10"/></svg>`,
    alerta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    noticia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2z"/></svg>`
  };
  return icons[categoria] || icons.artigo;
}

// Cor da categoria
function getCategoryColor(categoria) {
  const colors = {
    artigo: 'blue',
    jurisprudencia: 'purple',
    alerta: 'amber',
    noticia: 'green'
  };
  return colors[categoria] || 'gray';
}

// Labels de categoria por idioma
function getCategoryLabel(categoria, lang) {
  const labels = {
    artigo: { pt: 'Artigo', en: 'Article', es: 'Artículo' },
    jurisprudencia: { pt: 'Jurisprudência', en: 'Jurisprudence', es: 'Jurisprudencia' },
    alerta: { pt: 'Alerta de Golpe', en: 'Scam Alert', es: 'Alerta de Estafa' },
    noticia: { pt: 'Notícia', en: 'News', es: 'Noticia' }
  };
  return labels[categoria]?.[lang] || labels[categoria]?.pt || categoria;
}

// Carregar insights em destaque
async function loadFeaturedInsights() {
  const lang = getCurrentLang();
  const container = document.getElementById('featured-articles');

  if (!container) return;

  try {
    const response = await fetch(`${INSIGHTS_API_URL}/api/public/insights/destaque?lang=${lang}&limite=3`);

    if (!response.ok) {
      console.log('API não disponível para destaques');
      // Manter conteúdo estático se API falhar
      return;
    }

    const data = await response.json();

    if (!data.insights || data.insights.length === 0) {
      return;
    }

    // Limpar conteúdo existente
    container.innerHTML = '';

    // Renderizar insights em destaque
    data.insights.forEach((insight, index) => {
      const isMain = index === 0;
      const color = getCategoryColor(insight.categoria);

      const articleHTML = `
        <article class="article-card ${isMain ? 'featured' : ''} animate-on-scroll" data-category="${insight.categoria}">
          <div class="article-image">
            ${insight.imagem_url
              ? `<img src="${INSIGHTS_API_URL}${insight.imagem_url}" alt="${insight.titulo}" loading="lazy">`
              : `<div class="article-image-placeholder">${getCategoryIcon(insight.categoria)}</div>`
            }
            <span class="article-badge ${color}">${getCategoryLabel(insight.categoria, lang)}</span>
          </div>
          <div class="article-content">
            <span class="article-date">${formatDate(insight.data_publicacao, lang)}</span>
            <h3 class="article-title">${insight.titulo}</h3>
            <p class="article-excerpt">${insight.resumo}</p>
            <a href="insight.html?slug=${insight.slug}" class="article-link">
              ${lang === 'pt' ? 'Ler artigo completo' : lang === 'en' ? 'Read full article' : 'Leer artículo completo'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      `;

      container.innerHTML += articleHTML;
    });

    // Reativar animações
    initScrollAnimations();

  } catch (error) {
    console.error('Erro ao carregar insights destaque:', error);
  }
}

// Carregar alertas ativos
async function loadAlerts() {
  const lang = getCurrentLang();
  const container = document.getElementById('alert-banner');

  if (!container) return;

  try {
    const response = await fetch(`${INSIGHTS_API_URL}/api/public/insights/alertas?lang=${lang}`);

    if (!response.ok) return;

    const data = await response.json();

    if (!data.alertas || data.alertas.length === 0) {
      container.style.display = 'none';
      return;
    }

    const alerta = data.alertas[0]; // Mostrar o mais recente

    container.innerHTML = `
      <div class="alert-card">
        <div class="alert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <div class="alert-content">
          <h3 class="alert-title">${alerta.titulo}</h3>
          <p class="alert-text">${alerta.resumo}</p>
        </div>
      </div>
    `;

    container.style.display = 'block';

  } catch (error) {
    console.error('Erro ao carregar alertas:', error);
  }
}

// Carregar lista de insights por categoria
async function loadInsightsByCategory(categoria = '', page = 1) {
  const lang = getCurrentLang();
  const container = document.getElementById('insights-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');

  if (!container) return;

  try {
    const limite = 9;
    const offset = (page - 1) * limite;
    let url = `${INSIGHTS_API_URL}/api/public/insights?lang=${lang}&limite=${limite}&offset=${offset}`;

    if (categoria && categoria !== 'all') {
      // Mapear categoria do frontend para o backend
      const catMap = {
        'artigos': 'artigo',
        'jurisprudencia': 'jurisprudencia',
        'alertas': 'alerta',
        'noticias': 'noticia'
      };
      url += `&categoria=${catMap[categoria] || categoria}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      if (page === 1) {
        container.innerHTML = `
          <div class="no-results" style="text-align: center; padding: 2rem; color: #666;">
            <p>${lang === 'pt' ? 'Não foi possível carregar os insights. Tente novamente mais tarde.' : lang === 'en' ? 'Could not load insights. Please try again later.' : 'No se pudieron cargar los insights. Inténtelo de nuevo más tarde.'}</p>
          </div>
        `;
      }
      return;
    }

    const data = await response.json();

    if (!data.insights || data.insights.length === 0) {
      if (page === 1) {
        container.innerHTML = `
          <div class="no-results">
            <p>${lang === 'pt' ? 'Nenhum insight encontrado nesta categoria.' : lang === 'en' ? 'No insights found in this category.' : 'No se encontraron insights en esta categoría.'}</p>
          </div>
        `;
      }
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    // Se for primeira página, limpar
    if (page === 1) {
      container.innerHTML = '';
    }

    // Renderizar insights
    data.insights.forEach(insight => {
      const color = getCategoryColor(insight.categoria);

      const articleHTML = `
        <article class="article-card animate-on-scroll" data-category="${insight.categoria}">
          <div class="article-image">
            ${insight.imagem_url
              ? `<img src="${INSIGHTS_API_URL}${insight.imagem_url}" alt="${insight.titulo}" loading="lazy">`
              : `<div class="article-image-placeholder">${getCategoryIcon(insight.categoria)}</div>`
            }
            <span class="article-badge ${color}">${getCategoryLabel(insight.categoria, lang)}</span>
          </div>
          <div class="article-content">
            <span class="article-date">${formatDate(insight.data_publicacao, lang)}</span>
            <h3 class="article-title">${insight.titulo}</h3>
            <p class="article-excerpt">${insight.resumo}</p>
            <a href="insight.html?slug=${insight.slug}" class="article-link">
              ${lang === 'pt' ? 'Ler mais' : lang === 'en' ? 'Read more' : 'Leer más'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      `;

      container.innerHTML += articleHTML;
    });

    // Mostrar/ocultar botão de carregar mais
    if (loadMoreBtn) {
      const totalPages = data.paginas || 1;
      loadMoreBtn.style.display = page < totalPages ? 'block' : 'none';
      loadMoreBtn.dataset.page = page + 1;
      loadMoreBtn.dataset.categoria = categoria;
    }

    // Reativar animações
    initScrollAnimations();

  } catch (error) {
    console.error('Erro ao carregar insights:', error);
  }
}

// Inicializar animações de scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// Inicializar filtros de categoria
function initCategoryFilters() {
  const tabs = document.querySelectorAll('.category-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Atualizar visual
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Carregar insights da categoria
      const categoria = tab.dataset.category;
      loadInsightsByCategory(categoria, 1);
    });
  });
}

// Inicializar botão de carregar mais
function initLoadMore() {
  const btn = document.getElementById('load-more-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      const page = parseInt(btn.dataset.page) || 2;
      const categoria = btn.dataset.categoria || '';
      loadInsightsByCategory(categoria, page);
    });
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Carregar dados da API
  loadFeaturedInsights();
  loadAlerts();
  loadInsightsByCategory('', 1);

  // Inicializar interações
  initCategoryFilters();
  initLoadMore();
});

// Recarregar quando o idioma mudar
window.addEventListener('languageChanged', () => {
  loadFeaturedInsights();
  loadAlerts();

  const activeTab = document.querySelector('.category-tab.active');
  const categoria = activeTab ? activeTab.dataset.category : '';
  loadInsightsByCategory(categoria, 1);
});
