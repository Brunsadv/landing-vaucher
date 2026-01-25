// ============================================
// INTERNATIONALIZATION (i18n) SYSTEM
// Shared across all pages
// ============================================

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.areas': 'Áreas de Atuação',
    'nav.team': 'Equipe',
    'nav.insights': 'Insights',
    'nav.differentials': 'Diferenciais',
    'nav.contact': 'Contato',
    'nav.portal': 'Portal do Cliente',

    // Hero Section (index)
    'hero.headline': 'Como podemos <em>ajudar</em> você hoje?',
    'hero.placeholder': 'Digite o que você precisa...',
    'hero.send': 'Enviar',
    'hero.learnMore': 'Saiba mais',

    // Search Results
    'search.accessProcess': 'Acessar meu processo',
    'search.accessProcessDesc': 'Portal do cliente - acompanhe andamentos',
    'search.talkLawyer': 'Falar com advogado',
    'search.talkLawyerDesc': 'WhatsApp - atendimento imediato',
    'search.newConsult': 'Nova consulta',
    'search.newConsultDesc': 'Preencher cadastro online',
    'search.callOffice': 'Ligar para o escritório',

    // Suggestions
    'suggestion.process': 'Acompanhar processo',
    'suggestion.schedule': 'Agendar consulta',
    'suggestion.whatsapp': 'Falar no WhatsApp',
    'suggestion.areas': 'Áreas de atuação',

    // Features Section
    'features.label': 'Por que nos escolher',
    'features.title': 'Advocacia com propósito e resultados',
    'features.experience.title': 'Experiência Comprovada',
    'features.experience.desc': 'Mais de 15 anos de atuação jurídica com milhares de casos resolvidos com sucesso em diversas áreas do Direito.',
    'features.experience.link': 'Conheça nossos diferenciais',
    'features.team.title': 'Equipe Especializada',
    'features.team.desc': 'Advogados especializados em cada área de atuação, garantindo conhecimento técnico aprofundado em cada caso.',
    'features.team.link': 'Conheça nossa equipe',
    'features.portal.title': 'Portal do Cliente',
    'features.portal.desc': 'Acompanhe seu processo em tempo real, acesse documentos e comunique-se diretamente com sua equipe jurídica.',
    'features.portal.link': 'Acessar portal',

    // Areas Section
    'areas.label': 'Áreas de Atuação',
    'areas.title': 'Expertise em diversas áreas do Direito',
    'areas.pageLabel': 'Expertise Jurídica',
    'areas.pageTitle': 'Áreas de Atuação',
    'areas.pageDesc': 'Atuamos em diversas áreas do Direito, oferecendo soluções jurídicas personalizadas para cada cliente com excelência e comprometimento.',
    'areas.union': 'Sindical',
    'areas.labor': 'Trabalhista',
    'areas.admin': 'Administrativo',
    'areas.criminal': 'Penal',
    'areas.tax': 'Tributário',
    'areas.social': 'Previdenciário',
    'areas.collective': 'Coletivo',
    'areas.consumer': 'Consumidor',
    'areas.consultWhatsapp': 'Consultar via WhatsApp',

    // Team Page
    'team.pageLabel': 'Nossa Equipe',
    'team.pageTitle': 'Conheça nossos Advogados',
    'team.pageDesc': 'Profissionais experientes e dedicados, prontos para defender seus direitos com excelência e comprometimento.',
    'team.partnersTitle': 'Sócios',
    'team.associatesTitle': 'Advogados Associados',

    // Differentials Page
    'diff.pageLabel': 'Por que nos escolher',
    'diff.pageTitle': 'Nossos Diferenciais',
    'diff.pageDesc': 'Conheça as razões que fazem do escritório Vaucher e Álvares a escolha certa para suas questões jurídicas.',

    // Contact Page
    'contact.pageLabel': 'Fale Conosco',
    'contact.pageTitle': 'Entre em Contato',
    'contact.pageDesc': 'Estamos prontos para atender você. Escolha a forma de contato que preferir.',

    // CTA Section
    'cta.title': 'Pronto para resolver sua questão jurídica?',
    'cta.titleAreas': 'Precisa de orientação jurídica?',
    'cta.desc': 'Entre em contato conosco e agende uma consulta. Nossa equipe está pronta para ajudar você.',
    'cta.descAreas': 'Entre em contato conosco para uma análise personalizada do seu caso. Nossa equipe está pronta para ajudar.',
    'cta.whatsapp': 'Falar no WhatsApp',
    'cta.register': 'Preencher cadastro',

    // Insights Page
    'insights.pageLabel': 'Conhecimento Jurídico',
    'insights.pageTitle': 'Notícias & Artigos',
    'insights.pageDesc': 'Mantenha-se informado com artigos, análises jurídicas, jurisprudência atualizada e alertas importantes sobre golpes e fraudes.',
    'insights.all': 'Todos',
    'insights.articles': 'Artigos',
    'insights.jurisprudence': 'Jurisprudência',
    'insights.alerts': 'Alertas de Golpe',
    'insights.news': 'Notícias',
    'insights.alertTitle': 'Atenção: Golpe do Falso Advogado',
    'insights.alertText': 'Criminosos estão se passando por advogados e solicitando depósitos em contas pessoais. Nosso escritório NUNCA solicita pagamentos por WhatsApp. Em caso de dúvida, entre em contato pelos canais oficiais.',
    'insights.alertBtn': 'Saiba mais',
    'insights.recentArticles': 'Artigos Recentes',
    'insights.recentJurisprudence': 'Jurisprudência Recente',
    'insights.viewAll': 'Ver todos',
    'insights.featured': 'Em destaque',
    'insights.readMore': 'Ler artigo completo',
    'insights.newsletterLabel': 'Newsletter',
    'insights.newsletterTitle': 'Receba nossos conteúdos',
    'insights.newsletterDesc': 'Cadastre-se para receber artigos, jurisprudência e alertas importantes diretamente no seu e-mail.',
    'insights.emailPlaceholder': 'Seu melhor e-mail',
    'insights.subscribe': 'Inscrever-se',

    // Footer
    'footer.copy': '© 2026 Vaucher e Álvares Advogados. Todos os direitos reservados.',

    // WhatsApp messages
    'whatsapp.greeting': 'Olá! Gostaria de agendar uma consulta.'
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.areas': 'Practice Areas',
    'nav.team': 'Team',
    'nav.insights': 'Insights',
    'nav.differentials': 'Differentials',
    'nav.contact': 'Contact',
    'nav.portal': 'Client Portal',

    // Hero Section (index)
    'hero.headline': 'How can we <em>help</em> you today?',
    'hero.placeholder': 'Type what you need...',
    'hero.send': 'Send',
    'hero.learnMore': 'Learn more',

    // Search Results
    'search.accessProcess': 'Access my case',
    'search.accessProcessDesc': 'Client portal - track progress',
    'search.talkLawyer': 'Talk to a lawyer',
    'search.talkLawyerDesc': 'WhatsApp - immediate assistance',
    'search.newConsult': 'New consultation',
    'search.newConsultDesc': 'Fill out online registration',
    'search.callOffice': 'Call the office',

    // Suggestions
    'suggestion.process': 'Track case',
    'suggestion.schedule': 'Schedule consultation',
    'suggestion.whatsapp': 'Chat on WhatsApp',
    'suggestion.areas': 'Practice areas',

    // Features Section
    'features.label': 'Why choose us',
    'features.title': 'Law practice with purpose and results',
    'features.experience.title': 'Proven Experience',
    'features.experience.desc': 'Over 15 years of legal practice with thousands of successfully resolved cases across various areas of Law.',
    'features.experience.link': 'Discover our differentials',
    'features.team.title': 'Specialized Team',
    'features.team.desc': 'Lawyers specialized in each practice area, ensuring in-depth technical knowledge in every case.',
    'features.team.link': 'Meet our team',
    'features.portal.title': 'Client Portal',
    'features.portal.desc': 'Track your case in real-time, access documents, and communicate directly with your legal team.',
    'features.portal.link': 'Access portal',

    // Areas Section
    'areas.label': 'Practice Areas',
    'areas.title': 'Expertise in various areas of Law',
    'areas.pageLabel': 'Legal Expertise',
    'areas.pageTitle': 'Practice Areas',
    'areas.pageDesc': 'We practice in various areas of Law, offering personalized legal solutions for each client with excellence and commitment.',
    'areas.union': 'Union Law',
    'areas.labor': 'Labor Law',
    'areas.admin': 'Administrative',
    'areas.criminal': 'Criminal',
    'areas.tax': 'Tax Law',
    'areas.social': 'Social Security',
    'areas.collective': 'Collective',
    'areas.consumer': 'Consumer',
    'areas.consultWhatsapp': 'Consult via WhatsApp',

    // Team Page
    'team.pageLabel': 'Our Team',
    'team.pageTitle': 'Meet our Lawyers',
    'team.pageDesc': 'Experienced and dedicated professionals, ready to defend your rights with excellence and commitment.',
    'team.partnersTitle': 'Partners',
    'team.associatesTitle': 'Associate Lawyers',

    // Differentials Page
    'diff.pageLabel': 'Why choose us',
    'diff.pageTitle': 'Our Differentials',
    'diff.pageDesc': 'Discover the reasons that make Vaucher e Álvares the right choice for your legal matters.',

    // Contact Page
    'contact.pageLabel': 'Contact Us',
    'contact.pageTitle': 'Get in Touch',
    'contact.pageDesc': 'We are ready to assist you. Choose your preferred contact method.',

    // CTA Section
    'cta.title': 'Ready to resolve your legal matter?',
    'cta.titleAreas': 'Need legal guidance?',
    'cta.desc': 'Contact us and schedule a consultation. Our team is ready to help you.',
    'cta.descAreas': 'Contact us for a personalized analysis of your case. Our team is ready to help.',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.register': 'Fill out registration',

    // Insights Page
    'insights.pageLabel': 'Legal Knowledge',
    'insights.pageTitle': 'News & Articles',
    'insights.pageDesc': 'Stay informed with articles, legal analysis, updated jurisprudence, and important alerts about scams and fraud.',
    'insights.all': 'All',
    'insights.articles': 'Articles',
    'insights.jurisprudence': 'Jurisprudence',
    'insights.alerts': 'Scam Alerts',
    'insights.news': 'News',
    'insights.alertTitle': 'Warning: Fake Lawyer Scam',
    'insights.alertText': 'Criminals are impersonating lawyers and requesting deposits to personal accounts. Our firm NEVER requests payments via WhatsApp. If in doubt, contact us through official channels.',
    'insights.alertBtn': 'Learn more',
    'insights.recentArticles': 'Recent Articles',
    'insights.recentJurisprudence': 'Recent Jurisprudence',
    'insights.viewAll': 'View all',
    'insights.featured': 'Featured',
    'insights.readMore': 'Read full article',
    'insights.newsletterLabel': 'Newsletter',
    'insights.newsletterTitle': 'Receive our content',
    'insights.newsletterDesc': 'Subscribe to receive articles, jurisprudence, and important alerts directly to your email.',
    'insights.emailPlaceholder': 'Your best email',
    'insights.subscribe': 'Subscribe',

    // Footer
    'footer.copy': '© 2026 Vaucher e Álvares Lawyers. All rights reserved.',

    // WhatsApp messages
    'whatsapp.greeting': 'Hello! I would like to schedule a consultation.'
  },

  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.areas': 'Áreas de Práctica',
    'nav.team': 'Equipo',
    'nav.insights': 'Insights',
    'nav.differentials': 'Diferenciales',
    'nav.contact': 'Contacto',
    'nav.portal': 'Portal del Cliente',

    // Hero Section (index)
    'hero.headline': '¿Cómo podemos <em>ayudarte</em> hoy?',
    'hero.placeholder': 'Escribe lo que necesitas...',
    'hero.send': 'Enviar',
    'hero.learnMore': 'Más información',

    // Search Results
    'search.accessProcess': 'Acceder a mi caso',
    'search.accessProcessDesc': 'Portal del cliente - seguimiento de avances',
    'search.talkLawyer': 'Hablar con un abogado',
    'search.talkLawyerDesc': 'WhatsApp - atención inmediata',
    'search.newConsult': 'Nueva consulta',
    'search.newConsultDesc': 'Completar registro en línea',
    'search.callOffice': 'Llamar a la oficina',

    // Suggestions
    'suggestion.process': 'Seguir caso',
    'suggestion.schedule': 'Agendar consulta',
    'suggestion.whatsapp': 'Hablar por WhatsApp',
    'suggestion.areas': 'Áreas de práctica',

    // Features Section
    'features.label': 'Por qué elegirnos',
    'features.title': 'Abogacía con propósito y resultados',
    'features.experience.title': 'Experiencia Comprobada',
    'features.experience.desc': 'Más de 15 años de práctica legal con miles de casos resueltos exitosamente en diversas áreas del Derecho.',
    'features.experience.link': 'Conozca nuestros diferenciales',
    'features.team.title': 'Equipo Especializado',
    'features.team.desc': 'Abogados especializados en cada área de práctica, garantizando conocimiento técnico profundo en cada caso.',
    'features.team.link': 'Conozca nuestro equipo',
    'features.portal.title': 'Portal del Cliente',
    'features.portal.desc': 'Siga su caso en tiempo real, acceda a documentos y comuníquese directamente con su equipo legal.',
    'features.portal.link': 'Acceder al portal',

    // Areas Section
    'areas.label': 'Áreas de Práctica',
    'areas.title': 'Experiencia en diversas áreas del Derecho',
    'areas.pageLabel': 'Experiencia Jurídica',
    'areas.pageTitle': 'Áreas de Práctica',
    'areas.pageDesc': 'Actuamos en diversas áreas del Derecho, ofreciendo soluciones jurídicas personalizadas para cada cliente con excelencia y compromiso.',
    'areas.union': 'Sindical',
    'areas.labor': 'Laboral',
    'areas.admin': 'Administrativo',
    'areas.criminal': 'Penal',
    'areas.tax': 'Tributario',
    'areas.social': 'Previsional',
    'areas.collective': 'Colectivo',
    'areas.consumer': 'Consumidor',
    'areas.consultWhatsapp': 'Consultar por WhatsApp',

    // Team Page
    'team.pageLabel': 'Nuestro Equipo',
    'team.pageTitle': 'Conozca nuestros Abogados',
    'team.pageDesc': 'Profesionales experimentados y dedicados, listos para defender sus derechos con excelencia y compromiso.',
    'team.partnersTitle': 'Socios',
    'team.associatesTitle': 'Abogados Asociados',

    // Differentials Page
    'diff.pageLabel': 'Por qué elegirnos',
    'diff.pageTitle': 'Nuestros Diferenciales',
    'diff.pageDesc': 'Conozca las razones que hacen de Vaucher e Álvares la elección correcta para sus cuestiones legales.',

    // Contact Page
    'contact.pageLabel': 'Contáctenos',
    'contact.pageTitle': 'Póngase en Contacto',
    'contact.pageDesc': 'Estamos listos para atenderle. Elija su forma de contacto preferida.',

    // CTA Section
    'cta.title': '¿Listo para resolver su cuestión legal?',
    'cta.titleAreas': '¿Necesita orientación legal?',
    'cta.desc': 'Contáctenos y agende una consulta. Nuestro equipo está listo para ayudarle.',
    'cta.descAreas': 'Contáctenos para un análisis personalizado de su caso. Nuestro equipo está listo para ayudarle.',
    'cta.whatsapp': 'Hablar por WhatsApp',
    'cta.register': 'Completar registro',

    // Insights Page
    'insights.pageLabel': 'Conocimiento Jurídico',
    'insights.pageTitle': 'Noticias y Artículos',
    'insights.pageDesc': 'Manténgase informado con artículos, análisis jurídicos, jurisprudencia actualizada y alertas importantes sobre estafas y fraudes.',
    'insights.all': 'Todos',
    'insights.articles': 'Artículos',
    'insights.jurisprudence': 'Jurisprudencia',
    'insights.alerts': 'Alertas de Estafa',
    'insights.news': 'Noticias',
    'insights.alertTitle': 'Atención: Estafa del Falso Abogado',
    'insights.alertText': 'Delincuentes se hacen pasar por abogados y solicitan depósitos en cuentas personales. Nuestro despacho NUNCA solicita pagos por WhatsApp. En caso de duda, contáctenos por los canales oficiales.',
    'insights.alertBtn': 'Más información',
    'insights.recentArticles': 'Artículos Recientes',
    'insights.recentJurisprudence': 'Jurisprudencia Reciente',
    'insights.viewAll': 'Ver todos',
    'insights.featured': 'Destacado',
    'insights.readMore': 'Leer artículo completo',
    'insights.newsletterLabel': 'Boletín',
    'insights.newsletterTitle': 'Reciba nuestros contenidos',
    'insights.newsletterDesc': 'Suscríbase para recibir artículos, jurisprudencia y alertas importantes directamente en su correo.',
    'insights.emailPlaceholder': 'Su mejor correo electrónico',
    'insights.subscribe': 'Suscribirse',

    // Footer
    'footer.copy': '© 2026 Vaucher e Álvares Abogados. Todos los derechos reservados.',

    // WhatsApp messages
    'whatsapp.greeting': '¡Hola! Me gustaría agendar una consulta.'
  }
};

// Get current language from localStorage or default to 'pt'
let currentLang = localStorage.getItem('language') || 'pt';

// Apply translations to the page
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // Check if element has HTML content (like headline with <em>)
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = t[key];
      } else {
        // Preserve SVG icons if present
        const svg = el.querySelector('svg');
        if (svg) {
          const svgClone = svg.cloneNode(true);
          el.textContent = t[key];
          el.insertBefore(svgClone, el.firstChild);
          el.insertBefore(document.createTextNode(' '), svgClone.nextSibling);
        } else {
          el.textContent = t[key];
        }
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update WhatsApp links with localized messages
  const whatsappMsg = encodeURIComponent(t['whatsapp.greeting']);
  const whatsappBaseUrl = 'https://wa.me/556599478584?text=';

  document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
    el.href = whatsappBaseUrl + whatsappMsg;
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  // Update active state of language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Store preference
  localStorage.setItem('language', lang);
  currentLang = lang;
}

// Initialize language switcher
function initI18n() {
  // Language switcher event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
    });
  });

  // Apply initial translations
  applyTranslations(currentLang);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
