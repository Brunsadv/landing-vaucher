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
    'whatsapp.greeting': 'Olá! Gostaria de agendar uma consulta.',
    // Chaves adicionadas em 06/11/2026 (modal de consulta / insights)
    'insight.back': 'Voltar para Insights',
    'insight.loading': 'Carregando...',
    'insights.allInsights': 'Todos os Insights',
    'insights.loadMore': 'Carregar mais',

    // Página areas.html (textos fixos, adicionados em 07/11/2026)
    'areas.sindical.title': 'Direito Sindical',
    'areas.sindical.desc': 'Assessoria jurídica completa para sindicatos, federações e confederações em todo o território nacional. Nossa equipe possui vasta experiência em questões sindicais, representando entidades em negociações coletivas e dissídios.',
    'areas.sindical.item1': 'Negociações coletivas e acordos sindicais',
    'areas.sindical.item2': 'Dissídios coletivos perante tribunais trabalhistas',
    'areas.sindical.item3': 'Assessoria em eleições sindicais',
    'areas.sindical.item4': 'Enquadramento sindical',
    'areas.sindical.item5': 'Consultoria em contribuições sindicais',
    'areas.sindical.item6': 'Ações de cumprimento de convenções coletivas',
    'areas.trabalhista.title': 'Direito Trabalhista',
    'areas.trabalhista.desc': 'Representação de trabalhadores em todas as demandas trabalhistas, desde a consultoria preventiva até a atuação contenciosa em todas as instâncias da Justiça do Trabalho.',
    'areas.trabalhista.item1': 'Reclamações trabalhistas',
    'areas.trabalhista.item2': 'Rescisão indireta do contrato de trabalho',
    'areas.trabalhista.item3': 'Horas extras, adicional noturno e insalubridade',
    'areas.trabalhista.item4': 'Assédio moral e sexual no trabalho',
    'areas.trabalhista.item5': 'Acidentes de trabalho e doenças ocupacionais',
    'areas.trabalhista.item6': 'Reintegração e estabilidade',
    'areas.administrativo.title': 'Direito Administrativo',
    'areas.administrativo.desc': 'Atuação especializada em questões envolvendo a Administração Pública, servidores públicos e licitações. Defendemos os direitos dos servidores e assessoramos em procedimentos administrativos.',
    'areas.administrativo.item1': 'Concursos públicos e nomeação',
    'areas.administrativo.item2': 'Processos administrativos disciplinares',
    'areas.administrativo.item3': 'Progressão funcional e promoções',
    'areas.administrativo.item4': 'Aposentadoria de servidor público',
    'areas.administrativo.item5': 'Licitações e contratos administrativos',
    'areas.administrativo.item6': 'Responsabilidade civil do Estado',
    'areas.penal.title': 'Direito Penal',
    'areas.penal.desc': 'Defesa criminal em todas as fases do processo penal, desde o inquérito policial até recursos aos tribunais superiores. Atuação firme e técnica na defesa dos direitos do acusado.',
    'areas.penal.item1': 'Acompanhamento de inquéritos policiais',
    'areas.penal.item2': 'Defesa em ações penais',
    'areas.penal.item3': 'Habeas Corpus e liberdade provisória',
    'areas.penal.item4': 'Recursos criminais',
    'areas.penal.item5': 'Execução penal e progressão de regime',
    'areas.penal.item6': 'Crimes contra a honra',
    'areas.tributario.title': 'Direito Tributário',
    'areas.tributario.desc': 'Consultoria e contencioso tributário para pessoas físicas e jurídicas. Análise de tributos, planejamento fiscal e defesa em processos administrativos e judiciais.',
    'areas.tributario.item1': 'Planejamento tributário',
    'areas.tributario.item2': 'Defesa em execuções fiscais',
    'areas.tributario.item3': 'Recuperação de tributos pagos indevidamente',
    'areas.tributario.item4': 'Processos administrativos fiscais',
    'areas.tributario.item5': 'Parcelamentos e transações tributárias',
    'areas.tributario.item6': 'Análise de incentivos fiscais',
    'areas.previdenciario.title': 'Direito Previdenciário',
    'areas.previdenciario.desc': 'Assessoria completa em questões previdenciárias junto ao INSS. Atuamos na obtenção, revisão e manutenção de benefícios previdenciários.',
    'areas.previdenciario.item1': 'Aposentadoria por tempo de contribuição, idade e especial',
    'areas.previdenciario.item2': 'Auxílio-doença e aposentadoria por invalidez',
    'areas.previdenciario.item3': 'Pensão por morte',
    'areas.previdenciario.item4': 'BPC/LOAS',
    'areas.previdenciario.item5': 'Revisão de benefícios',
    'areas.previdenciario.item6': 'Recursos administrativos e judiciais contra o INSS',
    'areas.coletivo.title': 'Direito Coletivo',
    'areas.coletivo.desc': 'Atuação em defesa de direitos coletivos e difusos, representando grupos e comunidades em demandas de interesse público e social.',
    'areas.coletivo.item1': 'Ações civis públicas',
    'areas.coletivo.item2': 'Defesa de direitos difusos e coletivos',
    'areas.coletivo.item3': 'Mandados de segurança coletivos',
    'areas.coletivo.item4': 'Ações de improbidade administrativa',
    'areas.coletivo.item5': 'Tutela de interesses de grupos e comunidades',
    'areas.coletivo.item6': 'Acordos coletivos e termos de ajustamento de conduta',
    'areas.consumidor.title': 'Direito do Consumidor',
    'areas.consumidor.desc': 'Defesa dos direitos do consumidor em relações de consumo, combatendo práticas abusivas e garantindo reparação por danos.',
    'areas.consumidor.item1': 'Ações de indenização por danos materiais e morais',
    'areas.consumidor.item2': 'Vícios de produtos e serviços',
    'areas.consumidor.item3': 'Cobranças indevidas e negativação indevida',
    'areas.consumidor.item4': 'Práticas comerciais abusivas',
    'areas.consumidor.item5': 'Contratos de adesão e cláusulas abusivas',
    'areas.consumidor.item6': 'Recall e responsabilidade por fato do produto',

    // Página diferenciais.html (textos fixos, adicionados em 07/11/2026)
    'diff.humanized.title': 'Atendimento Humanizado',
    'diff.humanized.p1': 'Entendemos que cada cliente é único e cada caso tem suas particularidades. Por isso, oferecemos um atendimento personalizado, ouvindo atentamente suas necessidades e mantendo uma comunicação clara durante todo o processo.',
    'diff.humanized.p2': 'Nossa equipe está disponível para esclarecer dúvidas, explicar procedimentos e manter você informado sobre cada etapa do seu caso.',
    'diff.humanized.highlight': 'Atendimento via WhatsApp e telefone',
    'diff.technology.title': 'Tecnologia a Seu Favor',
    'diff.technology.p1': 'Utilizamos ferramentas tecnológicas modernas para agilizar processos, facilitar a comunicação e garantir a segurança das suas informações. Nosso portal do cliente permite que você acompanhe seu processo em tempo real, de qualquer lugar.',
    'diff.technology.p2': 'Assinatura digital de documentos, comunicação criptografada e armazenamento seguro de arquivos são apenas algumas das tecnologias que empregamos.',
    'diff.technology.highlight': 'Portal do cliente online 24/7',
    'diff.transparency.title': 'Transparência Total',
    'diff.transparency.p1': 'Prezamos pela transparência em todas as etapas. Você terá acesso a informações claras sobre honorários, prazos estimados e probabilidades de sucesso antes mesmo de iniciar qualquer ação.',
    'diff.transparency.p2': 'Não há surpresas ou custos ocultos. Nosso compromisso é com a confiança e a satisfação do cliente.',
    'diff.transparency.highlight': 'Contrato claro e sem letras miúdas',
    'diff.experience.p1': 'Com mais de 15 anos de atuação no mercado jurídico, nossa equipe acumula milhares de casos resolvidos com sucesso. Essa experiência nos permite identificar as melhores estratégias para cada situação.',
    'diff.experience.p2': 'Atuamos em casos complexos e de grande repercussão, sempre com o compromisso de entregar os melhores resultados possíveis.',
    'diff.experience.highlight': 'Mais de 5.000 casos resolvidos',
    'diff.team.title': 'Equipe Multidisciplinar',
    'diff.team.p1': 'Nossa equipe é composta por advogados especializados em diferentes áreas do Direito, permitindo uma análise completa e integrada do seu caso. Quando necessário, reunimos profissionais de diferentes especialidades para encontrar a melhor solução.',
    'diff.team.p2': 'Também contamos com uma rede de parceiros e correspondentes em todo o Brasil para atender clientes em qualquer localidade.',
    'diff.team.highlight': 'Especialistas em 6 áreas do Direito',
    'diff.stats.label': 'Em números',
    'diff.stats.title': 'Nossa trajetória',
    'diff.stats.casesNumber': '5.000+',
    'diff.stats.years': 'Anos de experiência',
    'diff.stats.cases': 'Casos atendidos',
    'diff.stats.satisfied': 'Clientes satisfeitos',
    'diff.portal.label': 'Tecnologia',
    'diff.portal.desc': 'Desenvolvemos um portal exclusivo para nossos clientes, onde você pode acompanhar seu processo em tempo real, acessar documentos, enviar arquivos e se comunicar diretamente com sua equipe jurídica.',
    'diff.portal.feature1': 'Acompanhamento em tempo real do seu processo',
    'diff.portal.feature2': 'Acesso a documentos e arquivos do caso',
    'diff.portal.feature3': 'Envio de documentos de forma segura',
    'diff.portal.feature4': 'Comunicação direta com advogados',
    'diff.portal.feature5': 'Assinatura digital de documentos',
    'diff.portal.cta': 'Acessar Portal',
    'diff.portal.mockDocs': 'Meus Documentos',
    'diff.portal.mockDocsDesc': '5 documentos disponíveis',
    'diff.portal.mockMsgs': 'Mensagens',
    'diff.portal.mockMsgsDesc': '2 novas mensagens',
    'diff.portal.mockUpdates': 'Andamentos',
    'diff.portal.mockUpdatesDesc': 'Última atualização: hoje',
    'diff.cta.title': 'Pronto para conhecer nossa forma de trabalhar?',
    'diff.cta.desc': 'Entre em contato conosco e descubra como podemos ajudar você com suas questões jurídicas.',
    'diff.cta.contacts': 'Ver contatos',

    // Página equipe.html (textos fixos, adicionados em 07/11/2026)
    'team.rolePartnerF': 'Sócia',
    'team.rolePartnerM': 'Sócio',
    'team.tag.business': 'Empresarial',
    'team.bio.fernanda': 'Mais de 17 anos de atuação e 3.381 processos. Formada pela UNIC, com especializações em Direito Empresarial (Gama Filho) e Previdenciário. Ex-Revisora do Tribunal de Ética da OAB-MT (2018-2024). Mentora certificada pela PUC-PR, criadora do programa "Advogada de Sucesso".',
    'team.bio.joao': 'Especialista em Direito Tributário, Administrativo e Sindical. Formado pela UFMT, com especializações em Direito Penal e Processo Penal (Fundação Escola Superior do MP) e Direito Tributário pelo IBET.',
    'team.bio.bruno': 'Mais de 13 anos de advocacia e 2.311 processos. Formado pela UFMT, com especialização em Direito Administrativo e Coletivo pelo CEI. Mestrando em Letras pela UNEMAT. Autor do romance "Estéril" (Editora Izyncor, 2025).',
    'team.values.label': 'Nossos Valores',
    'team.values.title': 'O que nos move',
    'team.values.ethics': 'Ética',
    'team.values.ethicsDesc': 'Atuamos com total transparência e respeito às normas da OAB, priorizando sempre a conduta Ética em todas as nossas ações.',
    'team.values.dedication': 'dedicação',
    'team.values.dedicationDesc': 'Cada caso recebe atenção personalizada e dedicação integral, pois entendemos que por trás de cada processo há uma história de vida.',
    'team.values.results': 'Resultados',
    'team.values.resultsDesc': 'Focamos em resultados concretos para nossos clientes, utilizando estratégias jurídicas eficientes e atualizadas.',
    'team.cta.desc': 'Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica.',
    'team.cta.button': 'Falar com a equipe',

    // Página contato.html (textos fixos, adicionados em 07/11/2026)
    'contact.whatsapp.desc': 'Atendimento rápido e prático. Resposta em até 2 horas durante o horário comercial.',
    'contact.whatsapp.button': 'Enviar mensagem',
    'contact.phone.title': 'Telefone',
    'contact.phone.desc': 'Ligações durante o horário comercial',
    'contact.email.title': 'E-mail',
    'contact.email.desc': 'Para assuntos formais e documentos',
    'contact.register.title': 'Cadastro Online',
    'contact.register.desc': 'Preencha seus dados e aguarde nosso contato para iniciar seu atendimento.',
    'contact.map.title': 'Nossa Localização',
    'contact.map.desc': 'Visite nosso escritório em Cuiabá-MT',
    'contact.map.directions': 'Rotas',
    'contact.hours.label': 'Atendimento',
    'contact.hours.title': 'Horário de Funcionamento',
    'contact.hours.weekdays': 'Segunda a Sexta',
    'contact.hours.saturday': 'Sábado',
    'contact.hours.sunday': 'Domingo',
    'contact.hours.closed': 'Fechado',
    'contact.social.label': 'Redes Sociais',
    'contact.social.title': 'Siga-nos',
    'contact.cta.title': 'Já é nosso cliente?',
    'contact.cta.desc': 'Acesse o portal do cliente para acompanhar seus processos, documentos e se comunicar com sua equipe jurídica.',
    'contact.cta.button': 'Acessar Portal do Cliente'
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
    'whatsapp.greeting': 'Hello! I would like to schedule a consultation.',
    // Chaves adicionadas em 06/11/2026 (modal de consulta / insights)
    'insight.back': 'Back to Insights',
    'insight.loading': 'Loading...',
    'insights.allInsights': 'All Insights',
    'insights.loadMore': 'Load more',

    // Página areas.html (textos fixos, adicionados em 07/11/2026)
    'areas.sindical.title': 'Labor Union Law',
    'areas.sindical.desc': 'Comprehensive legal counsel for labor unions, federations and confederations throughout Brazil. Our team has extensive experience in union matters, representing organizations in collective bargaining and collective labor disputes.',
    'areas.sindical.item1': 'Collective bargaining and union agreements',
    'areas.sindical.item2': 'Collective labor disputes before the Labor Courts',
    'areas.sindical.item3': 'Counsel on union elections',
    'areas.sindical.item4': 'Union classification and representation',
    'areas.sindical.item5': 'Advice on union dues and contributions',
    'areas.sindical.item6': 'Actions to enforce collective agreements',
    'areas.trabalhista.title': 'Labor and Employment Law',
    'areas.trabalhista.desc': 'Representation of employees in all labor claims, from preventive advice to litigation at every level of the Labor Courts.',
    'areas.trabalhista.item1': 'Labor claims',
    'areas.trabalhista.item2': 'Constructive dismissal',
    'areas.trabalhista.item3': 'Overtime, night-shift premium and hazardous work pay',
    'areas.trabalhista.item4': 'Workplace bullying and sexual harassment',
    'areas.trabalhista.item5': 'Workplace accidents and occupational diseases',
    'areas.trabalhista.item6': 'Reinstatement and job security',
    'areas.administrativo.title': 'Administrative Law',
    'areas.administrativo.desc': 'Specialized practice in matters involving the Public Administration, civil servants and public procurement. We defend the rights of civil servants and provide counsel in administrative proceedings.',
    'areas.administrativo.item1': 'Civil service examinations and appointments',
    'areas.administrativo.item2': 'Administrative disciplinary proceedings',
    'areas.administrativo.item3': 'Career progression and promotions',
    'areas.administrativo.item4': 'Civil servant retirement',
    'areas.administrativo.item5': 'Public procurement and government contracts',
    'areas.administrativo.item6': 'State civil liability',
    'areas.penal.title': 'Criminal Law',
    'areas.penal.desc': 'Criminal defense at every stage of criminal proceedings, from the police investigation to appeals before the higher courts. Firm, technical advocacy in defense of the rights of the accused.',
    'areas.penal.item1': 'Assistance during police investigations',
    'areas.penal.item2': 'Defense in criminal prosecutions',
    'areas.penal.item3': 'Habeas corpus and pretrial release',
    'areas.penal.item4': 'Criminal appeals',
    'areas.penal.item5': 'Sentence enforcement and prison regime progression',
    'areas.penal.item6': 'Defamation, libel and slander offenses',
    'areas.tributario.title': 'Tax Law',
    'areas.tributario.desc': 'Tax advisory and litigation for individuals and companies. Tax analysis, tax planning and defense in administrative and judicial proceedings.',
    'areas.tributario.item1': 'Tax planning',
    'areas.tributario.item2': 'Defense in tax enforcement proceedings',
    'areas.tributario.item3': 'Recovery of unduly paid taxes',
    'areas.tributario.item4': 'Administrative tax proceedings',
    'areas.tributario.item5': 'Tax installment plans and settlements',
    'areas.tributario.item6': 'Analysis of tax incentives',
    'areas.previdenciario.title': 'Social Security Law',
    'areas.previdenciario.desc': 'Comprehensive counsel on social security matters before the INSS (Brazilian National Social Security Institute). We work to obtain, review and maintain social security benefits.',
    'areas.previdenciario.item1': 'Retirement by contribution time, by age and special retirement',
    'areas.previdenciario.item2': 'Sickness benefit and disability retirement',
    'areas.previdenciario.item3': 'Survivor\'s pension',
    'areas.previdenciario.item4': 'BPC/LOAS (Continuous Cash Benefit)',
    'areas.previdenciario.item5': 'Benefit reviews',
    'areas.previdenciario.item6': 'Administrative and judicial appeals against the INSS',
    'areas.coletivo.title': 'Collective Rights Law',
    'areas.coletivo.desc': 'Advocacy in defense of collective and diffuse rights, representing groups and communities in matters of public and social interest.',
    'areas.coletivo.item1': 'Public civil actions (class actions)',
    'areas.coletivo.item2': 'Defense of diffuse and collective rights',
    'areas.coletivo.item3': 'Collective writs of mandamus',
    'areas.coletivo.item4': 'Administrative misconduct actions',
    'areas.coletivo.item5': 'Protection of group and community interests',
    'areas.coletivo.item6': 'Collective settlements and conduct adjustment agreements',
    'areas.consumidor.title': 'Consumer Law',
    'areas.consumidor.desc': 'Protection of consumer rights in consumer relationships, combating abusive practices and securing compensation for damages.',
    'areas.consumidor.item1': 'Claims for material and moral damages',
    'areas.consumidor.item2': 'Defective products and services',
    'areas.consumidor.item3': 'Undue charges and wrongful credit blacklisting',
    'areas.consumidor.item4': 'Abusive commercial practices',
    'areas.consumidor.item5': 'Adhesion contracts and unfair terms',
    'areas.consumidor.item6': 'Product recalls and product liability',

    // Página diferenciais.html (textos fixos, adicionados em 07/11/2026)
    'diff.humanized.title': 'Human-Centered Service',
    'diff.humanized.p1': 'We understand that every client is unique and every case has its own particularities. That is why we offer personalized service, listening carefully to your needs and maintaining clear communication throughout the entire process.',
    'diff.humanized.p2': 'Our team is available to answer your questions, explain procedures and keep you informed about every stage of your case.',
    'diff.humanized.highlight': 'Service via WhatsApp and phone',
    'diff.technology.title': 'Technology Working for You',
    'diff.technology.p1': 'We use modern technology tools to streamline proceedings, facilitate communication and keep your information secure. Our client portal lets you track your case in real time, from anywhere.',
    'diff.technology.p2': 'Digital document signing, encrypted communication and secure file storage are just some of the technologies we use.',
    'diff.technology.highlight': 'Client portal online 24/7',
    'diff.transparency.title': 'Full Transparency',
    'diff.transparency.p1': 'We value transparency at every stage. You will receive clear information on fees, estimated timelines and the likelihood of success before any action is even filed.',
    'diff.transparency.p2': 'No surprises or hidden costs. Our commitment is to our clients’ trust and satisfaction.',
    'diff.transparency.highlight': 'Clear contract with no fine print',
    'diff.experience.p1': 'With more than 15 years of legal practice, our team has successfully resolved thousands of cases. This experience allows us to identify the best strategies for each situation.',
    'diff.experience.p2': 'We handle complex, high-profile cases, always committed to delivering the best possible results.',
    'diff.experience.highlight': 'Over 5,000 cases resolved',
    'diff.team.title': 'Multidisciplinary Team',
    'diff.team.p1': 'Our team is made up of lawyers specialized in different areas of Law, allowing for a complete and integrated analysis of your case. When needed, we bring together professionals from different specialties to find the best solution.',
    'diff.team.p2': 'We also rely on a network of partners and correspondent lawyers throughout Brazil to serve clients wherever they are.',
    'diff.team.highlight': 'Specialists in 6 areas of Law',
    'diff.stats.label': 'By the numbers',
    'diff.stats.title': 'Our track record',
    'diff.stats.casesNumber': '5,000+',
    'diff.stats.years': 'Years of experience',
    'diff.stats.cases': 'Cases handled',
    'diff.stats.satisfied': 'Satisfied clients',
    'diff.portal.label': 'Technology',
    'diff.portal.desc': 'We have developed an exclusive portal for our clients, where you can track your case in real time, access documents, upload files and communicate directly with your legal team.',
    'diff.portal.feature1': 'Real-time tracking of your case',
    'diff.portal.feature2': 'Access to case documents and files',
    'diff.portal.feature3': 'Secure document upload',
    'diff.portal.feature4': 'Direct communication with lawyers',
    'diff.portal.feature5': 'Digital document signing',
    'diff.portal.cta': 'Access Portal',
    'diff.portal.mockDocs': 'My Documents',
    'diff.portal.mockDocsDesc': '5 documents available',
    'diff.portal.mockMsgs': 'Messages',
    'diff.portal.mockMsgsDesc': '2 new messages',
    'diff.portal.mockUpdates': 'Case Updates',
    'diff.portal.mockUpdatesDesc': 'Last update: today',
    'diff.cta.title': 'Ready to see how we work?',
    'diff.cta.desc': 'Contact us and find out how we can help you with your legal matters.',
    'diff.cta.contacts': 'View contact details',

    // Página equipe.html (textos fixos, adicionados em 07/11/2026)
    'team.rolePartnerF': 'Partner',
    'team.rolePartnerM': 'Partner',
    'team.tag.business': 'Corporate',
    'team.bio.fernanda': 'Over 17 years of practice and 3,381 cases. Law degree from UNIC, with postgraduate specializations in Corporate Law (Gama Filho) and Social Security Law. Former Reviewer at the OAB-MT Ethics Tribunal (2018-2024). Mentor certified by PUC-PR and creator of the "Advogada de Sucesso" program.',
    'team.bio.joao': 'Specialist in Tax, Administrative and Labor Union Law. Law degree from UFMT, with postgraduate specializations in Criminal Law and Criminal Procedure (Fundação Escola Superior do MP) and in Tax Law from IBET.',
    'team.bio.bruno': 'Over 13 years of legal practice and 2,311 cases. Law degree from UFMT, with a postgraduate specialization in Administrative and Collective Law from CEI. Master’s candidate in Literature (Letras) at UNEMAT. Author of the novel "Estéril" (Editora Izyncor, 2025).',
    'team.values.label': 'Our Values',
    'team.values.title': 'What drives us',
    'team.values.ethics': 'Ethics',
    'team.values.ethicsDesc': 'We act with full transparency and respect for the rules of the OAB (Brazilian Bar Association), always prioritizing ethical conduct in everything we do.',
    'team.values.dedication': 'Dedication',
    'team.values.dedicationDesc': 'Every case receives personalized attention and full dedication, because we understand that behind every case there is a life story.',
    'team.values.results': 'Results',
    'team.values.resultsDesc': 'We focus on concrete results for our clients, using efficient and up-to-date legal strategies.',
    'team.cta.desc': 'Our team is ready to analyze your case and offer the best legal solution.',
    'team.cta.button': 'Talk to our team',

    // Página contato.html (textos fixos, adicionados em 07/11/2026)
    'contact.whatsapp.desc': 'Fast, convenient service. Replies within 2 hours during business hours.',
    'contact.whatsapp.button': 'Send a message',
    'contact.phone.title': 'Phone',
    'contact.phone.desc': 'Calls during business hours',
    'contact.email.title': 'Email',
    'contact.email.desc': 'For formal matters and documents',
    'contact.register.title': 'Online Registration',
    'contact.register.desc': 'Fill in your details and we will contact you to begin your service.',
    'contact.map.title': 'Our Location',
    'contact.map.desc': 'Visit our office in Cuiabá-MT',
    'contact.map.directions': 'Directions',
    'contact.hours.label': 'Service',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday to Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.closed': 'Closed',
    'contact.social.label': 'Social Media',
    'contact.social.title': 'Follow us',
    'contact.cta.title': 'Already a client?',
    'contact.cta.desc': 'Access the client portal to track your cases and documents and communicate with your legal team.',
    'contact.cta.button': 'Access the Client Portal'
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
    'whatsapp.greeting': '¡Hola! Me gustaría agendar una consulta.',
    // Chaves adicionadas em 06/11/2026 (modal de consulta / insights)
    'insight.back': 'Volver a Insights',
    'insight.loading': 'Cargando...',
    'insights.allInsights': 'Todos los Insights',
    'insights.loadMore': 'Cargar más',

    // Página areas.html (textos fixos, adicionados em 07/11/2026)
    'areas.sindical.title': 'Derecho Sindical',
    'areas.sindical.desc': 'Asesoría jurídica integral para sindicatos, federaciones y confederaciones en todo el territorio brasileño. Nuestro equipo tiene amplia experiencia en cuestiones sindicales, representando a entidades en negociaciones colectivas y conflictos colectivos de trabajo.',
    'areas.sindical.item1': 'Negociaciones colectivas y acuerdos sindicales',
    'areas.sindical.item2': 'Conflictos colectivos ante los tribunales laborales',
    'areas.sindical.item3': 'Asesoría en elecciones sindicales',
    'areas.sindical.item4': 'Encuadramiento sindical',
    'areas.sindical.item5': 'Consultoría sobre contribuciones sindicales',
    'areas.sindical.item6': 'Acciones de cumplimiento de convenios colectivos',
    'areas.trabalhista.title': 'Derecho Laboral',
    'areas.trabalhista.desc': 'Representación de trabajadores en todas las demandas laborales, desde la asesoría preventiva hasta la actuación contenciosa en todas las instancias de la Justicia del Trabajo.',
    'areas.trabalhista.item1': 'Demandas laborales',
    'areas.trabalhista.item2': 'Rescisión indirecta del contrato de trabajo',
    'areas.trabalhista.item3': 'Horas extras, recargo nocturno y plus por insalubridad',
    'areas.trabalhista.item4': 'Acoso laboral y sexual en el trabajo',
    'areas.trabalhista.item5': 'Accidentes de trabajo y enfermedades profesionales',
    'areas.trabalhista.item6': 'Reincorporación y estabilidad laboral',
    'areas.administrativo.title': 'Derecho Administrativo',
    'areas.administrativo.desc': 'Actuación especializada en cuestiones relacionadas con la Administración Pública, los servidores públicos y las licitaciones. Defendemos los derechos de los servidores y asesoramos en procedimientos administrativos.',
    'areas.administrativo.item1': 'Concursos públicos y nombramiento',
    'areas.administrativo.item2': 'Procedimientos administrativos disciplinarios',
    'areas.administrativo.item3': 'Progresión funcional y ascensos',
    'areas.administrativo.item4': 'Jubilación de servidores públicos',
    'areas.administrativo.item5': 'Licitaciones y contratos administrativos',
    'areas.administrativo.item6': 'Responsabilidad civil del Estado',
    'areas.penal.title': 'Derecho Penal',
    'areas.penal.desc': 'Defensa penal en todas las fases del proceso penal, desde la investigación policial hasta los recursos ante los tribunales superiores. Actuación firme y técnica en la defensa de los derechos del acusado.',
    'areas.penal.item1': 'Acompañamiento de investigaciones policiales',
    'areas.penal.item2': 'Defensa en procesos penales',
    'areas.penal.item3': 'Hábeas corpus y libertad provisional',
    'areas.penal.item4': 'Recursos penales',
    'areas.penal.item5': 'Ejecución penal y progresión de régimen',
    'areas.penal.item6': 'Delitos contra el honor',
    'areas.tributario.title': 'Derecho Tributario',
    'areas.tributario.desc': 'Consultoría y contencioso tributario para personas físicas y jurídicas. Análisis de tributos, planificación fiscal y defensa en procesos administrativos y judiciales.',
    'areas.tributario.item1': 'Planificación tributaria',
    'areas.tributario.item2': 'Defensa en ejecuciones fiscales',
    'areas.tributario.item3': 'Recuperación de tributos pagados indebidamente',
    'areas.tributario.item4': 'Procesos administrativos fiscales',
    'areas.tributario.item5': 'Fraccionamientos y transacciones tributarias',
    'areas.tributario.item6': 'Análisis de incentivos fiscales',
    'areas.previdenciario.title': 'Derecho Previsional',
    'areas.previdenciario.desc': 'Asesoría integral en cuestiones previsionales ante el INSS (Instituto Nacional del Seguro Social de Brasil). Actuamos en la obtención, revisión y mantenimiento de prestaciones previsionales.',
    'areas.previdenciario.item1': 'Jubilación por tiempo de cotización, por edad y especial',
    'areas.previdenciario.item2': 'Subsidio por enfermedad y jubilación por invalidez',
    'areas.previdenciario.item3': 'Pensión por fallecimiento',
    'areas.previdenciario.item4': 'BPC/LOAS (Beneficio de Prestación Continuada)',
    'areas.previdenciario.item5': 'Revisión de prestaciones',
    'areas.previdenciario.item6': 'Recursos administrativos y judiciales contra el INSS',
    'areas.coletivo.title': 'Derecho Colectivo',
    'areas.coletivo.desc': 'Actuación en defensa de derechos colectivos y difusos, representando a grupos y comunidades en demandas de interés público y social.',
    'areas.coletivo.item1': 'Acciones civiles públicas',
    'areas.coletivo.item2': 'Defensa de derechos difusos y colectivos',
    'areas.coletivo.item3': 'Mandados de seguridad colectivos',
    'areas.coletivo.item4': 'Acciones de improbidad administrativa',
    'areas.coletivo.item5': 'Tutela de intereses de grupos y comunidades',
    'areas.coletivo.item6': 'Acuerdos colectivos y compromisos de ajuste de conducta',
    'areas.consumidor.title': 'Derecho del Consumidor',
    'areas.consumidor.desc': 'Defensa de los derechos del consumidor en las relaciones de consumo, combatiendo prácticas abusivas y garantizando la reparación de daños.',
    'areas.consumidor.item1': 'Acciones de indemnización por daños materiales y morales',
    'areas.consumidor.item2': 'Vicios de productos y servicios',
    'areas.consumidor.item3': 'Cobros indebidos e inclusión indebida en registros de morosos',
    'areas.consumidor.item4': 'Prácticas comerciales abusivas',
    'areas.consumidor.item5': 'Contratos de adhesión y cláusulas abusivas',
    'areas.consumidor.item6': 'Recall y responsabilidad por el hecho del producto',

    // Página diferenciais.html (textos fixos, adicionados em 07/11/2026)
    'diff.humanized.title': 'Atención Humanizada',
    'diff.humanized.p1': 'Entendemos que cada cliente es único y que cada caso tiene sus particularidades. Por eso, ofrecemos una atención personalizada, escuchando atentamente sus necesidades y manteniendo una comunicación clara durante todo el proceso.',
    'diff.humanized.p2': 'Nuestro equipo está disponible para resolver dudas, explicar procedimientos y mantenerle informado sobre cada etapa de su caso.',
    'diff.humanized.highlight': 'Atención por WhatsApp y teléfono',
    'diff.technology.title': 'Tecnología a Su Favor',
    'diff.technology.p1': 'Utilizamos herramientas tecnológicas modernas para agilizar procesos, facilitar la comunicación y garantizar la seguridad de su información. Nuestro portal del cliente le permite seguir su proceso en tiempo real, desde cualquier lugar.',
    'diff.technology.p2': 'La firma digital de documentos, la comunicación cifrada y el almacenamiento seguro de archivos son solo algunas de las tecnologías que empleamos.',
    'diff.technology.highlight': 'Portal del cliente en línea 24/7',
    'diff.transparency.title': 'Transparencia Total',
    'diff.transparency.p1': 'Valoramos la transparencia en todas las etapas. Tendrá acceso a información clara sobre honorarios, plazos estimados y probabilidades de éxito incluso antes de iniciar cualquier acción.',
    'diff.transparency.p2': 'No hay sorpresas ni costos ocultos. Nuestro compromiso es con la confianza y la satisfacción del cliente.',
    'diff.transparency.highlight': 'Contrato claro y sin letra pequeña',
    'diff.experience.p1': 'Con más de 15 años de actuación en el mercado jurídico, nuestro equipo acumula miles de casos resueltos con éxito. Esta experiencia nos permite identificar las mejores estrategias para cada situación.',
    'diff.experience.p2': 'Actuamos en casos complejos y de gran repercusión, siempre con el compromiso de ofrecer los mejores resultados posibles.',
    'diff.experience.highlight': 'Más de 5.000 casos resueltos',
    'diff.team.title': 'Equipo Multidisciplinario',
    'diff.team.p1': 'Nuestro equipo está formado por abogados especializados en diferentes áreas del Derecho, lo que permite un análisis completo e integrado de su caso. Cuando es necesario, reunimos a profesionales de distintas especialidades para encontrar la mejor solución.',
    'diff.team.p2': 'También contamos con una red de socios y corresponsales en todo Brasil para atender a clientes en cualquier localidad.',
    'diff.team.highlight': 'Especialistas en 6 áreas del Derecho',
    'diff.stats.label': 'En cifras',
    'diff.stats.title': 'Nuestra trayectoria',
    'diff.stats.casesNumber': '5.000+',
    'diff.stats.years': 'Años de experiencia',
    'diff.stats.cases': 'Casos atendidos',
    'diff.stats.satisfied': 'Clientes satisfechos',
    'diff.portal.label': 'Tecnología',
    'diff.portal.desc': 'Desarrollamos un portal exclusivo para nuestros clientes, donde puede seguir su proceso en tiempo real, acceder a documentos, enviar archivos y comunicarse directamente con su equipo jurídico.',
    'diff.portal.feature1': 'Seguimiento en tiempo real de su proceso',
    'diff.portal.feature2': 'Acceso a documentos y archivos del caso',
    'diff.portal.feature3': 'Envío seguro de documentos',
    'diff.portal.feature4': 'Comunicación directa con los abogados',
    'diff.portal.feature5': 'Firma digital de documentos',
    'diff.portal.cta': 'Acceder al Portal',
    'diff.portal.mockDocs': 'Mis Documentos',
    'diff.portal.mockDocsDesc': '5 documentos disponibles',
    'diff.portal.mockMsgs': 'Mensajes',
    'diff.portal.mockMsgsDesc': '2 mensajes nuevos',
    'diff.portal.mockUpdates': 'Movimientos Procesales',
    'diff.portal.mockUpdatesDesc': 'Última actualización: hoy',
    'diff.cta.title': '¿Listo para conocer nuestra forma de trabajar?',
    'diff.cta.desc': 'Contáctenos y descubra cómo podemos ayudarle con sus cuestiones legales.',
    'diff.cta.contacts': 'Ver contactos',

    // Página equipe.html (textos fixos, adicionados em 07/11/2026)
    'team.rolePartnerF': 'Socia',
    'team.rolePartnerM': 'Socio',
    'team.tag.business': 'Empresarial',
    'team.bio.fernanda': 'Más de 17 años de actuación y 3.381 procesos. Graduada por la UNIC, con especializaciones en Derecho Empresarial (Gama Filho) y Previsional. Ex revisora del Tribunal de Ética de la OAB-MT (2018-2024). Mentora certificada por la PUC-PR, creadora del programa "Advogada de Sucesso".',
    'team.bio.joao': 'Especialista en Derecho Tributario, Administrativo y Sindical. Graduado por la UFMT, con especializaciones en Derecho Penal y Proceso Penal (Fundação Escola Superior do MP) y en Derecho Tributario por el IBET.',
    'team.bio.bruno': 'Más de 13 años de abogacía y 2.311 procesos. Graduado por la UFMT, con especialización en Derecho Administrativo y Colectivo por el CEI. Maestrando en Letras por la UNEMAT. Autor de la novela "Estéril" (Editora Izyncor, 2025).',
    'team.values.label': 'Nuestros Valores',
    'team.values.title': 'Lo que nos mueve',
    'team.values.ethics': 'Ética',
    'team.values.ethicsDesc': 'Actuamos con total transparencia y respeto a las normas de la OAB (Colegio de Abogados de Brasil), priorizando siempre la conducta ética en todas nuestras acciones.',
    'team.values.dedication': 'Dedicación',
    'team.values.dedicationDesc': 'Cada caso recibe atención personalizada y dedicación total, porque entendemos que detrás de cada proceso hay una historia de vida.',
    'team.values.results': 'Resultados',
    'team.values.resultsDesc': 'Nos enfocamos en resultados concretos para nuestros clientes, utilizando estrategias jurídicas eficientes y actualizadas.',
    'team.cta.desc': 'Nuestro equipo está listo para analizar su caso y ofrecer la mejor solución jurídica.',
    'team.cta.button': 'Hablar con el equipo',

    // Página contato.html (textos fixos, adicionados em 07/11/2026)
    'contact.whatsapp.desc': 'Atención rápida y práctica. Respuesta en hasta 2 horas durante el horario comercial.',
    'contact.whatsapp.button': 'Enviar mensaje',
    'contact.phone.title': 'Teléfono',
    'contact.phone.desc': 'Llamadas durante el horario comercial',
    'contact.email.title': 'Correo electrónico',
    'contact.email.desc': 'Para asuntos formales y documentos',
    'contact.register.title': 'Registro en Línea',
    'contact.register.desc': 'Complete sus datos y espere nuestro contacto para iniciar su atención.',
    'contact.map.title': 'Nuestra Ubicación',
    'contact.map.desc': 'Visite nuestra oficina en Cuiabá-MT',
    'contact.map.directions': 'Cómo llegar',
    'contact.hours.label': 'Atención',
    'contact.hours.title': 'Horario de Atención',
    'contact.hours.weekdays': 'Lunes a Viernes',
    'contact.hours.saturday': 'Sábado',
    'contact.hours.sunday': 'Domingo',
    'contact.hours.closed': 'Cerrado',
    'contact.social.label': 'Redes Sociales',
    'contact.social.title': 'Síganos',
    'contact.cta.title': '¿Ya es nuestro cliente?',
    'contact.cta.desc': 'Acceda al portal del cliente para seguir sus procesos y documentos y comunicarse con su equipo jurídico.',
    'contact.cta.button': 'Acceder al Portal del Cliente'
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
