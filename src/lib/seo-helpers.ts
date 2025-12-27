/**
 * SEO Helpers - Funções utilitárias para construção e validação de meta tags
 */

/**
 * Trunca texto para meta description respeitando limite de caracteres
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo (padrão: 155)
 * @returns Texto truncado sem quebrar palavras
 */
export function truncateMeta(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text;
  
  // Trunca no último espaço antes do limite para não quebrar palavras
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated.substring(0, maxLength - 3) + '...';
}

/**
 * Constrói meta title seguindo padrões de SEO
 * @param pageType - Tipo de página (home, servicos, blog, etc)
 * @param entity - Entidade específica (nome do serviço, área, post)
 * @param location - Localização (padrão: Porto Alegre)
 * @returns Title otimizado (50-60 chars, max 62)
 */
export function buildMetaTitle(
  pageType: string,
  entity?: string,
  location: string = "Porto Alegre"
): string {
  const base = "Poda de Árvores";
  
  switch (pageType) {
    case "home":
      return `${base} ${location} | Atendimento Rápido`;
    
    case "servicos":
      return entity 
        ? `${entity} em ${location}`
        : `${base} ${location} | Todos os Serviços`;
    
    case "blog":
      return entity
        ? `${entity} | Blog ${base} ${location}`
        : `Blog ${base} | ${location} e Região`;
    
    case "areas":
      return entity
        ? `${base} na ${entity} - ${location}`
        : `${base} ${location} e Região | Áreas Atendidas`;
    
    case "sobre":
      return `Sobre a Artes Do Verde | ${base} em ${location}`;
    
    case "contato":
      return `Contato | ${base} ${location} | Orçamento Grátis`;
    
    default:
      return entity 
        ? `${entity} | ${base} ${location}`
        : `${base} ${location}`;
  }
}

/**
 * Constrói meta description seguindo padrões de SEO
 * @param pageType - Tipo de página
 * @param service - Nome do serviço (opcional)
 * @param area - Nome da área (opcional)
 * @param post - Título do post (opcional)
 * @returns Meta description otimizada (120-155 chars)
 */
export function buildMetaDescription(
  pageType: string,
  service?: string,
  area?: string,
  post?: string
): string {
  const location = "Porto Alegre";
  
  switch (pageType) {
    case "home":
      return "Poda e remoção de árvores em Porto Alegre. Atendimento rápido, equipe equipada e limpeza no mesmo dia. Orçamento grátis!";
    
    case "servicos":
      if (service) {
        return truncateMeta(
          `${service} em ${location}. Atendimento rápido com limpeza inclusa. Equipe profissional e equipada. Solicite orçamento grátis!`
        );
      }
      return "Poda, remoção, rebaixamento e mais. Atendimento rápido em Porto Alegre com limpeza inclusa. Veja todos os serviços e peça orçamento grátis!";
    
    case "blog":
      if (post) {
        return truncateMeta(
          `${post}. Dicas e informações sobre poda de árvores em ${location} e região.`
        );
      }
      return "Artigos e dicas sobre poda de árvores, remoção, legislação e cuidados. Informação de qualidade para Porto Alegre e região.";
    
    case "areas":
      if (area) {
        return truncateMeta(
          `Serviço de poda e remoção de árvores na ${area}. Atendemos com rapidez e profissionalismo. Solicite orçamento grátis!`
        );
      }
      return `Atendemos toda ${location} e Região Metropolitana: Zona Sul, Zona Norte, Centro, Zona Leste, Canoas, Gravataí, Viamão e muito mais.`;
    
    case "sobre":
      return `Conheça a Artes Do Verde: empresa especializada em poda e remoção de árvores em ${location}. Anos de experiência e clientes satisfeitos.`;
    
    case "contato":
      return `Entre em contato para solicitar orçamento de poda e remoção de árvores em ${location}. WhatsApp, telefone e endereço.`;
    
    default:
      return `Poda e remoção de árvores em ${location}. Atendimento profissional e rápido.`;
  }
}

/**
 * Valida tamanho do title (deve ser 50-60 chars, max 62)
 */
export function validateTitle(title: string): { valid: boolean; length: number; warning?: string } {
  const length = title.length;
  
  if (length > 62) {
    return { valid: false, length, warning: `Title muito longo (${length} chars). Ideal: 50-60, máximo: 62.` };
  }
  
  if (length < 50) {
    return { valid: true, length, warning: `Title curto (${length} chars). Ideal: 50-60.` };
  }
  
  return { valid: true, length };
}

/**
 * Valida tamanho da meta description (deve ser 120-155 chars, max 155)
 */
export function validateMetaDescription(description: string): { valid: boolean; length: number; warning?: string } {
  const length = description.length;
  
  if (length > 155) {
    return { valid: false, length, warning: `Meta description muito longa (${length} chars). Máximo: 155.` };
  }
  
  if (length < 120) {
    return { valid: true, length, warning: `Meta description curta (${length} chars). Ideal: 120-155.` };
  }
  
  return { valid: true, length };
}

