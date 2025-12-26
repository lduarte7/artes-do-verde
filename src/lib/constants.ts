// Business Information - NAP (Name, Address, Phone)
export const BUSINESS_INFO = {
  name: "Artes Do Verde",
  fullName: "Artes Do Verde | Poda e Remoção de Árvores",
  address: {
    street: "Rua Natal Condotta, 50",
    neighborhood: "Belém Novo",
    city: "Porto Alegre",
    state: "RS",
    zip: "91780-420",
    full: "Rua Natal Condotta, 50 - Belém Novo, Porto Alegre - RS, 91780-420"
  },
  phone: "(51) 98535-1816",
  phoneClean: "5551985351816",
  googleMapsUrl: "https://maps.google.com/?q=Artes+Do+Verde+Porto+Alegre",
  googleBusinessUrl: "https://g.page/artesdoverde",
};

// WhatsApp helper
export const getWhatsAppUrl = (message: string = "Olá! Gostaria de solicitar um orçamento.") => {
  return `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
};

// Phone call helper
export const getPhoneUrl = () => `tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`;

// Services data
export const SERVICES = [
  {
    slug: "remocao-de-arvores",
    title: "Remoção de Árvores",
    shortDescription: "Remoção segura de árvores mortas, doentes ou em risco de queda.",
    description: "Realizamos a remoção completa de árvores que representam risco à segurança, incluindo corte técnico, descida controlada de galhos e limpeza total do local.",
    icon: "TreeDeciduous",
    image: "remocao-arvore.jpg",
    featured: true,
  },
  {
    slug: "poda-de-arvores-em-escolas-e-empresas",
    title: "Poda de Árvores em Escolas e Empresas",
    shortDescription: "Poda especializada para ambientes corporativos e educacionais.",
    description: "Serviço de poda com foco em segurança para escolas, empresas e instituições, com sinalização adequada e mínimo impacto nas atividades.",
    icon: "Building",
    image: "poda-escola.jpg",
    featured: true,
  },
  {
    slug: "poda-de-arvores",
    title: "Poda de Árvores",
    shortDescription: "Poda técnica para saúde e estética das suas árvores.",
    description: "Poda de formação, limpeza e manutenção realizada por profissionais experientes, respeitando a biologia da planta.",
    icon: "Scissors",
    image: "poda-arvore.jpg",
    featured: true,
  },
  {
    slug: "corte-e-manutencao-de-grama",
    title: "Corte e Manutenção de Grama",
    shortDescription: "Gramado sempre verde e bem cuidado.",
    description: "Corte, adubação e manutenção regular de gramados residenciais e comerciais para um jardim sempre impecável.",
    icon: "Leaf",
    image: "corte-grama.jpg",
    featured: true,
  },
  {
    slug: "rebaixamento-de-copas",
    title: "Rebaixamento de Copas",
    shortDescription: "Redução controlada da altura e volume das árvores.",
    description: "Técnica especializada para reduzir o tamanho da copa sem prejudicar a saúde da árvore, ideal para áreas com risco de tempestades.",
    icon: "ArrowDown",
    image: "rebaixamento-copa.jpg",
    featured: true,
  },
  {
    slug: "limpeza-pos-poda",
    title: "Limpeza Pós-Poda",
    shortDescription: "Retirada completa de galhos e resíduos no mesmo dia.",
    description: "Não deixamos nada para trás. Toda a limpeza e destinação correta dos resíduos estão incluídas no serviço.",
    icon: "Trash2",
    image: "limpeza-pos-poda.jpg",
    featured: false,
  },
  {
    slug: "poda-de-arvore-em-condominio",
    title: "Poda de Árvore em Condomínio",
    shortDescription: "Atendimento especializado para condomínios.",
    description: "Trabalhamos em áreas comuns de condomínios com toda a documentação necessária e mínima interferência aos moradores.",
    icon: "Home",
    image: "poda-condominio.jpg",
    featured: false,
  },
  {
    slug: "extracao-de-raizes",
    title: "Extração de Raízes",
    shortDescription: "Remoção de tocos e raízes problemáticas.",
    description: "Eliminamos tocos e raízes que danificam calçadas, tubulações e estruturas, liberando o terreno para novos usos.",
    icon: "Pickaxe",
    image: "extracao-raizes.jpg",
    featured: false,
  },
  {
    slug: "servicos-em-altura",
    title: "Serviços em Altura",
    shortDescription: "Trabalho seguro em árvores de grande porte.",
    description: "Equipe treinada e equipada para trabalhos em altura, com técnicas de rapel e escalada profissional.",
    icon: "Mountain",
    image: "servicos-altura.jpg",
    featured: false,
  },
];

// Reviews data
export const REVIEWS = [
  {
    name: "João Carlos Prado Pereira",
    text: "Fomos atendidos pela empresa na obra da Praça Rosa de Luxemburgo, serviço de remoção e poda de árvores. Serviço executado no prazo e dentro do que foi combinado. Recomendamos, profissionais sérios, confiáveis…",
    rating: 5,
  },
  {
    name: "Rosa Soares",
    text: "Contratei essa empresa, Fui muito bem atendida, São excelentes profissionais, tudo perfeito e com muito capricho.",
    rating: 5,
  },
  {
    name: "Feme Personal",
    text: "Excelente serviço, muito profissionais, pontuais e o trabalho de qualidade! Super indico.",
    rating: 5,
  },
  {
    name: "Igor Oliveira",
    text: "Ótimos profissionais trabalham com excelência, indico de olhos fechados sou cliente a anos.",
    rating: 5,
  },
  {
    name: "Alfredo De Negre",
    text: "Realizam o trabalho dentro das técnicas recomendáveis com total segurança e qualidade.",
    rating: 5,
  },
  {
    name: "Eric Seitz",
    text: "Excelente trabalho, rápido e levou os resíduos no mesmo dia. Recomendo.",
    rating: 5,
    badge: "Local Guide",
  },
  {
    name: "Mikael Piuco",
    text: "Ótimo profissionais, trabalhado com eficiência e cuidado",
    rating: 5,
  },
  {
    name: "Elis Regina Nunes da Silva",
    text: "Excelente trabalho, muito comprometimento e capricho, equipe 10",
    rating: 5,
  },
  {
    name: "Lucas Kurowski de Oliveira",
    text: "Trabalho muito bem executado, caprichoso e perfeccionista!",
    rating: 5,
  },
];

// Areas served
export const AREAS = [
  { name: "Zona Sul", slug: "zona-sul", cities: ["Belém Novo", "Ipanema", "Tristeza", "Cavalhada", "Cristal"] },
  { name: "Zona Norte", slug: "zona-norte", cities: ["Sarandi", "Rubem Berta", "Passo das Pedras", "Jardim Itu"] },
  { name: "Centro", slug: "centro", cities: ["Centro Histórico", "Cidade Baixa", "Bom Fim", "Moinhos de Vento"] },
  { name: "Zona Leste", slug: "zona-leste", cities: ["Bom Jesus", "Agronomia", "Lomba do Pinheiro"] },
  { name: "Região Metropolitana", slug: "regiao-metropolitana", cities: ["Canoas", "Gravataí", "Viamão", "Alvorada", "Cachoeirinha", "Esteio", "São Leopoldo", "Novo Hamburgo"] },
];

// FAQ data
export const FAQ_HOME = [
  {
    question: "Preciso de autorização da prefeitura para podar ou remover uma árvore?",
    answer: "Depende da espécie e localização. Em Porto Alegre, árvores em área pública ou protegidas por lei requerem autorização da SMAMUS. Orientamos nossos clientes durante todo o processo.",
  },
  {
    question: "Qual a diferença entre poda e remoção?",
    answer: "A poda remove galhos para saúde, segurança ou estética da árvore, mantendo-a viva. A remoção é o corte completo da árvore, indicada quando está morta, doente ou representa risco.",
  },
  {
    question: "Vocês levam os resíduos após o serviço?",
    answer: "Sim! Toda a limpeza e descarte correto de galhos e resíduos está incluída no serviço. Deixamos o local limpo no mesmo dia.",
  },
  {
    question: "Atendem condomínios e empresas?",
    answer: "Sim, atendemos condomínios, escolas, empresas e órgãos públicos. Trabalhamos com toda a documentação necessária e sinalizamos a área adequadamente.",
  },
  {
    question: "Qual o prazo para atendimento?",
    answer: "Casos de emergência são atendidos em até 24 horas. Para serviços programados, agendamos conforme sua disponibilidade, geralmente em até 5 dias úteis.",
  },
];

// Blog posts placeholders
export const BLOG_POSTS = [
  {
    slug: "quando-podar-arvores-porto-alegre",
    title: "Quando é a Melhor Época para Podar Árvores em Porto Alegre?",
    excerpt: "Descubra o período ideal para poda de árvores no RS e evite danos às suas plantas. Conheça as regras municipais e dicas de especialistas.",
    category: "Segurança e risco",
    date: "2024-12-15",
    readTime: "5 min",
  },
  {
    slug: "arvore-caiu-temporal-o-que-fazer",
    title: "Árvore Caiu no Temporal? Saiba o Que Fazer e Quem Chamar",
    excerpt: "Guia completo para lidar com quedas de árvores após temporais em Porto Alegre. Passo a passo para agir com segurança.",
    category: "Pós-temporal",
    date: "2024-12-10",
    readTime: "4 min",
  },
  {
    slug: "poda-arvores-condominio-regras",
    title: "Poda de Árvores em Condomínio: Regras e Responsabilidades",
    excerpt: "Entenda quem é responsável pela manutenção das árvores em áreas comuns e como contratar um serviço profissional.",
    category: "Condomínios",
    date: "2024-12-05",
    readTime: "6 min",
  },
  {
    slug: "autorizacao-corte-arvore-smamus",
    title: "Como Solicitar Autorização para Corte de Árvore na SMAMUS",
    excerpt: "Passo a passo para obter licença de poda ou remoção de árvores em Porto Alegre junto à Secretaria do Meio Ambiente.",
    category: "Legislação",
    date: "2024-11-28",
    readTime: "7 min",
  },
  {
    slug: "quanto-custa-remover-arvore",
    title: "Quanto Custa Remover uma Árvore? Fatores que Influenciam o Preço",
    excerpt: "Entenda o que define o valor de um serviço de remoção de árvores e como pedir orçamentos justos.",
    category: "Custos",
    date: "2024-11-20",
    readTime: "5 min",
  },
  {
    slug: "como-escolher-empresa-poda-arvores",
    title: "Como Escolher uma Empresa de Poda de Árvores Confiável",
    excerpt: "Dicas para contratar profissionais qualificados e evitar golpes ou serviços mal executados.",
    category: "Contratação",
    date: "2024-11-15",
    readTime: "4 min",
  },
];

// Blog categories
export const BLOG_CATEGORIES = [
  "Segurança e risco",
  "Pós-temporal",
  "Condomínios",
  "Legislação",
  "Custos",
  "Contratação",
];
