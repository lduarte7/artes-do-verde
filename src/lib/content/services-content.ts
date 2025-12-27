/**
 * Conteúdo específico por serviço
 * Cada serviço tem conteúdo único: intro, whenNeeded, howWeDo, risks, FAQs
 */

export interface ServiceContent {
  intro: string;
  whenNeeded: string[];
  included: string[];
  howWeDo: Array<{ step: number; title: string; description: string }>;
  risks: string[];
  relatedServices: string[];
  relatedPosts: string[];
  faq: Array<{ question: string; answer: string }>;
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  "remocao-de-arvores": {
    intro: "A remoção de árvores é um serviço que requer técnica, segurança e equipamentos adequados. Realizamos a remoção completa de árvores que representam risco à segurança, incluindo corte técnico, descida controlada de galhos e limpeza total do local. Nossa equipe é especializada em remoções complexas, incluindo árvores próximas a estruturas, fiação elétrica ou em locais de difícil acesso.",
    whenNeeded: [
      "Árvore morta ou com sinais de doença avançada",
      "Risco iminente de queda em tempestades",
      "Raízes danificando estruturas (calçadas, muros, tubulações)",
      "Árvore inclinada perigosamente",
      "Conflito com construção ou reforma",
      "Ordem da prefeitura após avaliação técnica"
    ],
    included: [
      "Avaliação técnica prévia e análise de riscos",
      "Corte técnico com descida controlada de galhos",
      "Remoção do tronco e toco (quando solicitado)",
      "Limpeza completa do local",
      "Descarte correto de todos os resíduos",
      "Sinalização da área de trabalho"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação e Planejamento",
        description: "Analisamos a árvore, condições do terreno, proximidade de estruturas e definimos a melhor estratégia de remoção."
      },
      {
        step: 2,
        title: "Preparação da Área",
        description: "Sinalizamos a área de trabalho, protegemos estruturas próximas e preparamos equipamentos de segurança."
      },
      {
        step: 3,
        title: "Corte Técnico",
        description: "Realizamos o corte em seções controladas, descendo galhos de forma segura para evitar danos ao entorno."
      },
      {
        step: 4,
        title: "Remoção do Tronco",
        description: "Cortamos o tronco em partes manejáveis e, se solicitado, removemos o toco com equipamento especializado."
      },
      {
        step: 5,
        title: "Limpeza e Descarte",
        description: "Recolhemos todos os resíduos, limpamos o local completamente e fazemos o descarte adequado."
      }
    ],
    risks: [
      "Queda incontrolada causando danos a propriedades",
      "Lesões em pessoas ou animais",
      "Danos à fiação elétrica ou estruturas",
      "Descarte incorreto de resíduos (multas ambientais)",
      "Remoção sem autorização quando necessária (problemas legais)"
    ],
    relatedServices: ["extracao-de-raizes", "limpeza-pos-poda", "servicos-em-altura"],
    relatedPosts: ["poda-ou-remocao-de-arvores-porto-alegre", "quanto-custa-remover-arvore"],
    faq: [
      {
        question: "Quando a remoção é a única opção?",
        answer: "A remoção é necessária quando a árvore está morta, apresenta risco iminente de queda, está causando danos estruturais graves ou quando há ordem da prefeitura. Em outros casos, a poda pode ser suficiente."
      },
      {
        question: "Como fica o descarte dos resíduos?",
        answer: "Todo o descarte está incluído no serviço. Levamos galhos, tronco e folhas para locais adequados de destinação, seguindo normas ambientais. Não deixamos nada no local."
      },
      {
        question: "Preciso de autorização para remover uma árvore?",
        answer: "Depende da espécie e localização. Árvores em área pública ou protegidas por lei requerem autorização da SMAMUS. Orientamos você durante todo o processo e podemos ajudar com a documentação."
      },
      {
        question: "Quanto tempo leva uma remoção?",
        answer: "Varia conforme o porte da árvore e complexidade. Uma árvore média (10-15m) leva de 2 a 4 horas. Árvores grandes ou em locais complexos podem levar um dia completo."
      },
      {
        question: "Vocês removem o toco também?",
        answer: "Sim, oferecemos o serviço de extração de raízes e remoção de toco. Pode ser feito no mesmo dia ou agendado separadamente, dependendo do equipamento necessário."
      },
      {
        question: "É seguro remover árvore perto de fiação elétrica?",
        answer: "Sim, temos experiência e técnicas específicas para trabalhar próximo à fiação. Em alguns casos, coordenamos com a concessionária de energia para desligamento temporário."
      }
    ]
  },
  "poda-de-arvores": {
    intro: "A poda de árvores é essencial para manter a saúde, segurança e estética das plantas. Realizamos poda técnica respeitando a biologia da árvore, utilizando técnicas profissionais de formação, limpeza e manutenção. Nossa equipe é treinada para identificar o melhor momento e método de poda, sempre priorizando a preservação da árvore quando possível.",
    whenNeeded: [
      "Galhos tocando fiação elétrica ou telhados",
      "Copa muito densa bloqueando luz natural",
      "Galhos secos ou doentes que precisam ser removidos",
      "Necessidade de formação ou condução da árvore",
      "Árvore interferindo em estruturas ou calçadas",
      "Preparação para temporada de tempestades"
    ],
    included: [
      "Avaliação técnica da árvore",
      "Poda técnica respeitando a biologia da planta",
      "Remoção de galhos secos, doentes ou perigosos",
      "Limpeza completa de resíduos",
      "Descarte adequado de galhos e folhas",
      "Orientação sobre cuidados pós-poda"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação da Árvore",
        description: "Analisamos a saúde da árvore, identificamos galhos problemáticos e definimos a estratégia de poda mais adequada."
      },
      {
        step: 2,
        title: "Preparação",
        description: "Sinalizamos a área, preparamos equipamentos e garantimos segurança para a equipe e entorno."
      },
      {
        step: 3,
        title: "Poda Técnica",
        description: "Realizamos cortes precisos em ângulos corretos, respeitando os pontos de corte ideais para não prejudicar a árvore."
      },
      {
        step: 4,
        title: "Limpeza",
        description: "Removemos todos os galhos podados, limpamos a área e preparamos os resíduos para descarte."
      },
      {
        step: 5,
        title: "Finalização",
        description: "Verificamos o resultado, aplicamos produtos quando necessário e orientamos sobre cuidados futuros."
      }
    ],
    risks: [
      "Poda inadequada pode matar a árvore",
      "Cortes errados facilitam entrada de doenças",
      "Remoção excessiva enfraquece a estrutura",
      "Queda de galhos durante o processo",
      "Danos a propriedades próximas"
    ],
    relatedServices: ["rebaixamento-de-copas", "limpeza-pos-poda", "poda-de-arvore-em-condominio"],
    relatedPosts: ["poda-ou-remocao-de-arvores-porto-alegre", "quando-podar-arvores-porto-alegre"],
    faq: [
      {
        question: "Qual a melhor época para podar árvores em Porto Alegre?",
        answer: "O ideal é durante o outono e inverno (março a agosto), quando a árvore está em dormência. Evitamos poda intensa na primavera e verão, período de crescimento ativo."
      },
      {
        question: "A poda pode matar a árvore?",
        answer: "Uma poda mal feita pode sim prejudicar ou até matar a árvore. Por isso é essencial contratar profissionais que conhecem técnicas corretas e respeitam a biologia da planta."
      },
      {
        question: "Quanto tempo leva para a árvore se recuperar?",
        answer: "Depende da espécie e intensidade da poda. Uma poda leve de manutenção: 3-6 meses. Poda mais intensa: 6-12 meses. A árvore precisa de tempo para cicatrizar os cortes."
      },
      {
        question: "Vocês aplicam algum produto nos cortes?",
        answer: "Em casos específicos, aplicamos produtos cicatrizantes em cortes maiores para proteger contra doenças. Avaliamos caso a caso conforme a necessidade."
      },
      {
        question: "Posso podar árvore que está na calçada?",
        answer: "Árvores em área pública (calçadas, praças) geralmente precisam de autorização da SMAMUS. Orientamos sobre a documentação necessária."
      },
      {
        question: "Quanto custa uma poda?",
        answer: "O valor varia conforme porte da árvore, complexidade, quantidade de galhos e localização. Oferecemos orçamento gratuito após avaliação técnica."
      }
    ]
  },
  "poda-de-arvore-em-condominio": {
    intro: "Atendemos condomínios residenciais e comerciais com serviços especializados de poda e manutenção de árvores em áreas comuns. Trabalhamos com toda a documentação necessária, sinalização adequada e mínima interferência nas atividades dos moradores. Nossa experiência inclui planejamento por blocos, coordenação com síndicos e atendimento a emergências pós-temporal.",
    whenNeeded: [
      "Manutenção periódica das árvores do condomínio",
      "Galhos invadindo apartamentos ou áreas comuns",
      "Risco de queda em áreas de circulação",
      "Preparação para temporada de tempestades",
      "Árvores interferindo em playground ou áreas de lazer",
      "Emergência após temporal ou ventos fortes"
    ],
    included: [
      "Planejamento e coordenação com síndico",
      "Sinalização completa das áreas de trabalho",
      "Poda técnica em todas as árvores necessárias",
      "Limpeza completa de áreas comuns",
      "Descarte correto de todos os resíduos",
      "Documentação e relatório do serviço"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Reunião com Síndico",
        description: "Avaliamos as necessidades, áreas a serem atendidas e definimos cronograma que minimize impacto aos moradores."
      },
      {
        step: 2,
        title: "Planejamento por Blocos",
        description: "Organizamos o trabalho por blocos ou áreas, comunicando antecipadamente os moradores afetados."
      },
      {
        step: 3,
        title: "Sinalização e Preparação",
        description: "Sinalizamos áreas de trabalho, protegemos veículos e estruturas, garantindo segurança total."
      },
      {
        step: 4,
        title: "Execução do Serviço",
        description: "Realizamos a poda com técnica profissional, minimizando ruído e interferência nas atividades do condomínio."
      },
      {
        step: 5,
        title: "Limpeza e Finalização",
        description: "Removemos todos os resíduos, deixamos áreas comuns limpas e entregamos relatório do serviço realizado."
      }
    ],
    risks: [
      "Danos a veículos ou propriedades comuns",
      "Interrupção de atividades dos moradores",
      "Falta de comunicação gerando reclamações",
      "Resíduos deixados no local",
      "Trabalho sem autorização do condomínio"
    ],
    relatedServices: ["poda-de-arvores-em-escolas-e-empresas", "limpeza-pos-poda", "servicos-em-altura"],
    relatedPosts: ["poda-de-arvores-em-condominio-porto-alegre", "arvore-caiu-temporal-o-que-fazer"],
    faq: [
      {
        question: "Precisa de autorização do síndico?",
        answer: "Sim, é essencial a autorização do síndico ou administradora. Trabalhamos sempre com documentação e coordenação prévia."
      },
      {
        question: "Como organizar o trabalho por bloco?",
        answer: "Planejamos o serviço por blocos ou áreas, comunicando antecipadamente os moradores. Evitamos trabalhar em horários de maior movimento."
      },
      {
        question: "Vocês emitem nota fiscal para condomínio?",
        answer: "Sim, emitimos nota fiscal adequada para pessoa jurídica, facilitando o processo de pagamento e prestação de contas."
      },
      {
        question: "Quanto tempo leva para atender um condomínio?",
        answer: "Depende do tamanho e quantidade de árvores. Condomínios pequenos: 1 dia. Grandes: 2-3 dias. Sempre com planejamento prévio."
      },
      {
        question: "Atendem emergências pós-temporal?",
        answer: "Sim, temos atendimento de emergência 24h para situações críticas após tempestades, com prioridade para condomínios."
      },
      {
        question: "Os moradores precisam estar presentes?",
        answer: "Não é obrigatório, mas recomendamos que o síndico ou zelador acompanhe para liberar áreas e verificar o resultado."
      }
    ]
  },
  "poda-de-arvores-em-escolas-e-empresas": {
    intro: "Oferecemos serviços especializados de poda para escolas, empresas e instituições, com foco em segurança, pontualidade e mínimo impacto nas atividades. Trabalhamos com sinalização adequada, coordenação com gestores e atendimento em horários que não interfiram nas operações. Nossa experiência inclui grandes áreas, múltiplas árvores e planejamento de manutenção periódica.",
    whenNeeded: [
      "Manutenção periódica de áreas verdes",
      "Segurança em áreas de circulação de pessoas",
      "Galhos representando risco em playgrounds ou estacionamentos",
      "Preparação para eventos ou inspeções",
      "Árvores interferindo em estruturas ou fiação",
      "Emergência após eventos climáticos"
    ],
    included: [
      "Coordenação prévia com gestores",
      "Sinalização completa e profissional",
      "Poda técnica em todas as árvores necessárias",
      "Limpeza imediata de todas as áreas",
      "Descarte correto de resíduos",
      "Relatório fotográfico do serviço"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Reunião e Planejamento",
        description: "Avaliamos as necessidades, definimos cronograma que não interfira nas atividades e alinhamos expectativas."
      },
      {
        step: 2,
        title: "Preparação da Área",
        description: "Sinalizamos áreas de trabalho, protegemos estruturas e garantimos que não haja risco para funcionários ou alunos."
      },
      {
        step: 3,
        title: "Execução Profissional",
        description: "Realizamos a poda com técnica e agilidade, mantendo comunicação constante com os responsáveis."
      },
      {
        step: 4,
        title: "Limpeza Imediata",
        description: "Removemos todos os resíduos durante o trabalho, não deixando nada acumulado no local."
      },
      {
        step: 5,
        title: "Finalização",
        description: "Verificamos o resultado, entregamos relatório e alinhamos próximos passos de manutenção se necessário."
      }
    ],
    risks: [
      "Interrupção de atividades operacionais",
      "Risco a funcionários, alunos ou visitantes",
      "Danos a estruturas ou equipamentos",
      "Falta de comunicação gerando problemas",
      "Resíduos deixados causando transtorno"
    ],
    relatedServices: ["poda-de-arvore-em-condominio", "limpeza-pos-poda", "servicos-em-altura"],
    relatedPosts: ["poda-de-arvores-em-condominio-porto-alegre", "como-escolher-empresa-poda-arvores"],
    faq: [
      {
        question: "Vocês trabalham em horário comercial?",
        answer: "Sim, trabalhamos em horários que minimizem impacto. Para escolas, preferimos fins de semana ou férias. Para empresas, coordenamos conforme necessidade."
      },
      {
        question: "Preciso fechar a escola/empresa durante o serviço?",
        answer: "Geralmente não é necessário. Sinalizamos áreas específicas e trabalhamos de forma a não interromper atividades. Em casos complexos, avisamos com antecedência."
      },
      {
        question: "Vocês emitem nota fiscal para empresa?",
        answer: "Sim, emitimos nota fiscal adequada para pessoa jurídica, facilitando processos contábeis e fiscais."
      },
      {
        question: "Fazem manutenção periódica?",
        answer: "Sim, oferecemos planos de manutenção periódica (trimestral, semestral ou anual) com condições especiais para clientes recorrentes."
      },
      {
        question: "Atendem emergências?",
        answer: "Sim, temos atendimento de emergência 24h para situações críticas que representem risco imediato."
      },
      {
        question: "Quanto tempo leva?",
        answer: "Depende do tamanho da área e quantidade de árvores. Pequenas áreas: 2-4 horas. Grandes áreas: 1-2 dias. Sempre com planejamento prévio."
      }
    ]
  },
  "rebaixamento-de-copas": {
    intro: "O rebaixamento de copas é uma técnica especializada para reduzir a altura e volume das árvores sem prejudicar sua saúde. Ideal para árvores que cresceram demais, representam risco em tempestades ou estão interferindo em estruturas. Utilizamos técnicas que mantêm a estrutura da árvore, promovendo crescimento controlado e seguro.",
    whenNeeded: [
      "Árvore muito alta representando risco em tempestades",
      "Copa interferindo em fiação elétrica de alta tensão",
      "Necessidade de reduzir sombra excessiva",
      "Árvore muito próxima de edifícios ou estruturas",
      "Preparação preventiva para temporada de ventos",
      "Conformidade com normas de altura em condomínios"
    ],
    included: [
      "Avaliação técnica da estrutura da árvore",
      "Rebaixamento técnico preservando saúde",
      "Remoção de galhos altos de forma controlada",
      "Limpeza completa de resíduos",
      "Descarte adequado de galhos e folhas",
      "Orientação sobre manutenção futura"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação da Estrutura",
        description: "Analisamos a altura atual, estrutura da copa e definimos a altura ideal de rebaixamento sem prejudicar a árvore."
      },
      {
        step: 2,
        title: "Planejamento Técnico",
        description: "Definimos quais galhos reduzir, mantendo equilíbrio da copa e estrutura de sustentação."
      },
      {
        step: 3,
        title: "Rebaixamento Controlado",
        description: "Reduzimos a altura cortando galhos superiores de forma técnica, mantendo formato natural da copa."
      },
      {
        step: 4,
        title: "Ajustes Finais",
        description: "Fazemos ajustes para garantir equilíbrio e saúde da árvore após o rebaixamento."
      },
      {
        step: 5,
        title: "Limpeza",
        description: "Removemos todos os galhos cortados e limpamos completamente a área."
      }
    ],
    risks: [
      "Rebaixamento excessivo pode enfraquecer a árvore",
      "Cortes errados facilitam entrada de doenças",
      "Desequilíbrio da estrutura causando risco futuro",
      "Queda de galhos durante o processo",
      "Danos a fiação ou estruturas próximas"
    ],
    relatedServices: ["poda-de-arvores", "servicos-em-altura", "limpeza-pos-poda"],
    relatedPosts: ["quando-podar-arvores-porto-alegre", "poda-ou-remocao-de-arvores-porto-alegre"],
    faq: [
      {
        question: "O rebaixamento pode matar a árvore?",
        answer: "Se feito corretamente, não. Utilizamos técnicas que preservam a saúde. Rebaixamento excessivo ou mal feito pode sim prejudicar a árvore."
      },
      {
        question: "Quanto posso reduzir a altura?",
        answer: "Geralmente reduzimos até 30-40% da altura total, dependendo da espécie. Reduções maiores podem ser feitas em etapas ao longo do tempo."
      },
      {
        question: "A árvore volta a crescer depois?",
        answer: "Sim, a árvore continuará crescendo, mas de forma mais controlada. O rebaixamento pode precisar ser repetido a cada 2-3 anos dependendo da espécie."
      },
      {
        question: "É mais caro que uma poda normal?",
        answer: "Pode ser, pois requer mais tempo e cuidado técnico, especialmente em árvores altas. O valor depende da altura e complexidade."
      },
      {
        question: "Quanto tempo leva?",
        answer: "Depende da altura da árvore. Árvores médias (10-15m): 3-5 horas. Árvores grandes (20m+): 1 dia completo."
      },
      {
        question: "Preciso de autorização?",
        answer: "Depende da localização. Árvores em área pública ou muito grandes podem precisar de autorização. Orientamos sobre a documentação."
      }
    ]
  },
  "servicos-em-altura": {
    intro: "Trabalhos em altura requerem técnica especializada, equipamentos adequados e equipe treinada. Oferecemos serviços seguros em árvores de grande porte utilizando técnicas de rapel, escalada profissional e equipamentos de segurança certificados. Nossa equipe é treinada e experiente em trabalhos complexos em altura, incluindo proximidade com fiação elétrica e estruturas.",
    whenNeeded: [
      "Árvores muito altas (15m+) que precisam de poda ou remoção",
      "Trabalho próximo a fiação elétrica",
      "Galhos inacessíveis com equipamentos convencionais",
      "Remoção de árvore em local de difícil acesso",
      "Poda em árvores próximas a edifícios altos",
      "Emergências em locais com acesso limitado"
    ],
    included: [
      "Avaliação de riscos e planejamento detalhado",
      "Equipamentos de segurança certificados (EPIs)",
      "Técnicas de rapel e escalada profissional",
      "Sinalização completa da área de trabalho",
      "Execução segura do serviço",
      "Limpeza e descarte de resíduos"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação de Riscos",
        description: "Analisamos altura, condições, proximidade de estruturas e definimos estratégia de acesso e trabalho seguro."
      },
      {
        step: 2,
        title: "Preparação de Equipamentos",
        description: "Verificamos e preparamos todos os equipamentos de segurança: cordas, mosquetões, capacetes, cintos de segurança."
      },
      {
        step: 3,
        title: "Acesso à Árvore",
        description: "Equipe treinada acessa a árvore utilizando técnicas de escalada ou rapel, sempre com segurança dupla."
      },
      {
        step: 4,
        title: "Execução do Serviço",
        description: "Realizamos poda ou remoção com técnica, descendo galhos de forma controlada e segura."
      },
      {
        step: 5,
        title: "Finalização",
        description: "Equipe desce com segurança, área é limpa completamente e equipamentos são verificados."
      }
    ],
    risks: [
      "Queda de altura (risco fatal)",
      "Cortes com motosserra durante escalada",
      "Queda de galhos sobre equipe ou propriedades",
      "Contato com fiação elétrica",
      "Equipamentos inadequados ou mal conservados"
    ],
    relatedServices: ["poda-de-arvores", "remocao-de-arvores", "rebaixamento-de-copas"],
    relatedPosts: ["como-escolher-empresa-poda-arvores", "quando-podar-arvores-porto-alegre"],
    faq: [
      {
        question: "Vocês usam técnicas de segurança?",
        answer: "Sim, utilizamos técnicas profissionais de rapel e escalada, com equipamentos certificados e equipe treinada. Sempre trabalhamos com segurança dupla."
      },
      {
        question: "É possível trabalhar perto de rede elétrica?",
        answer: "Sim, temos experiência e técnicas específicas. Em casos de alta tensão, coordenamos com a concessionária para desligamento temporário quando necessário."
      },
      {
        question: "Quanto custa um serviço em altura?",
        answer: "Serviços em altura são mais complexos e requerem mais tempo e segurança. O valor varia conforme altura, complexidade e riscos envolvidos."
      },
      {
        question: "Vocês têm seguro?",
        answer: "Sim, temos seguro de responsabilidade civil e nossos profissionais são treinados e certificados para trabalhos em altura."
      },
      {
        question: "Quanto tempo leva?",
        answer: "Depende da altura e complexidade. Árvores médias (15m): 4-6 horas. Árvores muito altas (25m+): 1-2 dias."
      },
      {
        question: "Preciso estar presente?",
        answer: "Não é obrigatório, mas recomendamos que alguém acompanhe para liberar acesso e verificar o resultado final."
      }
    ]
  },
  "corte-e-manutencao-de-grama": {
    intro: "Oferecemos serviços completos de corte e manutenção de gramados para residências, condomínios e empresas. Mantemos seu gramado sempre verde, saudável e bem cuidado com cortes regulares, adubação e tratamentos quando necessário. Trabalhamos com equipamentos profissionais e equipe experiente.",
    whenNeeded: [
      "Gramado alto ou desuniforme",
      "Manutenção periódica de áreas verdes",
      "Preparação para eventos ou ocasiões especiais",
      "Gramado com ervas daninhas ou pragas",
      "Necessidade de adubação ou tratamento",
      "Manutenção regular programada"
    ],
    included: [
      "Corte profissional com equipamentos adequados",
      "Aparagem de bordas e acabamento",
      "Remoção de resíduos (grama cortada)",
      "Limpeza completa da área",
      "Orientação sobre cuidados básicos",
      "Adubação (quando incluída no plano)"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação do Gramado",
        description: "Analisamos condições do gramado, altura atual e identificamos necessidades de tratamento."
      },
      {
        step: 2,
        title: "Preparação",
        description: "Removemos objetos do gramado, preparamos equipamentos e definimos padrão de corte."
      },
      {
        step: 3,
        title: "Corte Profissional",
        description: "Realizamos corte uniforme com altura adequada, respeitando tipo de grama e época do ano."
      },
      {
        step: 4,
        title: "Aparagem e Acabamento",
        description: "Aparamos bordas, cantos e áreas de difícil acesso para acabamento perfeito."
      },
      {
        step: 5,
        title: "Limpeza",
        description: "Removemos toda a grama cortada, limpamos calçadas e deixamos área impecável."
      }
    ],
    risks: [
      "Corte muito baixo danificando raízes",
      "Equipamentos danificando o gramado",
      "Resíduos deixados apodrecendo",
      "Corte em época inadequada",
      "Falta de manutenção regular"
    ],
    relatedServices: ["limpeza-pos-poda", "poda-de-arvore-em-condominio"],
    relatedPosts: [],
    faq: [
      {
        question: "Com que frequência devo cortar a grama?",
        answer: "Depende da época e tipo de grama. Na primavera/verão: a cada 7-10 dias. Outono/inverno: a cada 15-20 dias. Gramados comerciais podem precisar de corte semanal."
      },
      {
        question: "Vocês fazem manutenção periódica?",
        answer: "Sim, oferecemos planos de manutenção mensal, quinzenal ou semanal conforme necessidade do cliente."
      },
      {
        question: "Inclui adubação?",
        answer: "Adubação pode ser incluída em planos de manutenção. Em serviços avulsos, oferecemos como serviço adicional."
      },
      {
        question: "Quanto tempo leva?",
        answer: "Depende do tamanho da área. Pequenos gramados (100m²): 30-45 min. Grandes áreas (1000m²+): 2-3 horas."
      },
      {
        question: "Vocês levam a grama cortada?",
        answer: "Sim, a remoção e descarte da grama cortada está sempre incluída no serviço."
      },
      {
        question: "Qual altura ideal para cortar?",
        answer: "Depende do tipo de grama. Geralmente entre 3-5cm na primavera/verão e 4-6cm no outono/inverno. Evitamos cortes muito baixos que danificam as raízes."
      }
    ]
  },
  "limpeza-pos-poda": {
    intro: "A limpeza pós-poda é parte essencial de qualquer serviço de poda ou remoção. Garantimos retirada completa de todos os resíduos: galhos, folhas, cascas e qualquer material resultante do trabalho. Não deixamos nada para trás, deixando o local limpo e pronto para uso imediato. Este serviço também pode ser contratado separadamente quando há necessidade de limpeza após poda realizada por terceiros.",
    whenNeeded: [
      "Após serviço de poda ou remoção",
      "Limpeza de resíduos deixados por outros prestadores",
      "Pós-temporal com galhos e folhas espalhados",
      "Limpeza de área após queda natural de galhos",
      "Preparação de área para eventos",
      "Manutenção de áreas comuns"
    ],
    included: [
      "Coleta completa de galhos e resíduos",
      "Varreção e limpeza de folhas",
      "Remoção de cascas e pequenos fragmentos",
      "Carga e transporte dos resíduos",
      "Descarte adequado em local apropriado",
      "Verificação final da área"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação da Área",
        description: "Identificamos todos os resíduos a serem coletados e definimos estratégia de limpeza mais eficiente."
      },
      {
        step: 2,
        title: "Coleta de Galhos Grandes",
        description: "Coletamos galhos maiores primeiro, organizando para facilitar transporte."
      },
      {
        step: 3,
        title: "Limpeza Detalhada",
        description: "Varremos folhas, coletamos pequenos galhos e fragmentos, garantindo limpeza completa."
      },
      {
        step: 4,
        title: "Carga e Transporte",
        description: "Carregamos todos os resíduos em caminhão adequado para transporte."
      },
      {
        step: 5,
        title: "Descarte e Verificação",
        description: "Fazemos descarte adequado e verificamos se área está completamente limpa."
      }
    ],
    risks: [
      "Resíduos deixados apodrecendo",
      "Descarte inadequado (multas ambientais)",
      "Área não completamente limpa",
      "Resíduos grandes danificando gramado",
      "Falta de organização gerando retrabalho"
    ],
    relatedServices: ["poda-de-arvores", "remocao-de-arvores", "corte-e-manutencao-de-grama"],
    relatedPosts: ["arvore-caiu-temporal-o-que-fazer"],
    faq: [
      {
        question: "A limpeza está sempre incluída?",
        answer: "Sim, em todos os nossos serviços de poda e remoção a limpeza completa está sempre incluída. Não deixamos nada para trás."
      },
      {
        question: "Vocês fazem limpeza de poda feita por outros?",
        answer: "Sim, oferecemos serviço de limpeza avulso quando há resíduos deixados por outros prestadores ou após eventos naturais."
      },
      {
        question: "Quanto tempo leva?",
        answer: "Depende da quantidade de resíduos. Limpeza pós-poda normal: 1-2 horas. Limpeza pós-temporal grande: meio dia a dia completo."
      },
      {
        question: "Para onde levam os resíduos?",
        answer: "Levamos para locais de destinação adequados, seguindo normas ambientais. Não descartamos em locais inadequados."
      },
      {
        question: "Posso ficar com a lenha?",
        answer: "Sim, se você quiser manter a lenha, separamos e deixamos organizada. Caso contrário, levamos tudo."
      },
      {
        question: "Quanto custa uma limpeza avulsa?",
        answer: "O valor depende da quantidade de resíduos e tamanho da área. Oferecemos orçamento após avaliação."
      }
    ]
  },
  "extracao-de-raizes": {
    intro: "A extração de raízes é necessária quando tocos ou raízes estão causando problemas: danificando calçadas, tubulações, muros ou impedindo novos usos do terreno. Utilizamos equipamentos especializados para remover tocos e raízes de forma completa, liberando o terreno para construção, paisagismo ou outros usos.",
    whenNeeded: [
      "Toco de árvore removida precisa ser extraído",
      "Raízes danificando calçadas ou estruturas",
      "Raízes entupindo ou danificando tubulações",
      "Preparação de terreno para construção",
      "Necessidade de liberar área para paisagismo",
      "Raízes invadindo propriedade vizinha"
    ],
    included: [
      "Avaliação do sistema radicular",
      "Remoção completa do toco",
      "Extração de raízes principais",
      "Nivelamento do terreno",
      "Limpeza da área",
      "Descarte adequado de resíduos"
    ],
    howWeDo: [
      {
        step: 1,
        title: "Avaliação",
        description: "Analisamos tamanho do toco, profundidade das raízes e definimos melhor método de extração."
      },
      {
        step: 2,
        title: "Preparação",
        description: "Preparamos equipamentos (guindaste, motosserra, ferramentas) e área de trabalho."
      },
      {
        step: 3,
        title: "Extração do Toco",
        description: "Removemos o toco utilizando guindaste ou equipamento especializado, dependendo do tamanho."
      },
      {
        step: 4,
        title: "Remoção de Raízes",
        description: "Extraímos raízes principais que possam causar problemas futuros."
      },
      {
        step: 5,
        title: "Nivelamento e Limpeza",
        description: "Nivelamos o terreno, removemos resíduos e deixamos área pronta para uso."
      }
    ],
    risks: [
      "Danos a tubulações durante extração",
      "Raízes não completamente removidas",
      "Danos a estruturas próximas",
      "Toco muito profundo dificultando remoção",
      "Custo elevado em casos complexos"
    ],
    relatedServices: ["remocao-de-arvores", "limpeza-pos-poda"],
    relatedPosts: [],
    faq: [
      {
        question: "Quanto tempo leva para extrair um toco?",
        answer: "Depende do tamanho. Toco pequeno (30cm diâmetro): 1-2 horas. Toco grande (1m+): meio dia a dia completo."
      },
      {
        question: "Preciso de guindaste?",
        answer: "Depende do tamanho do toco. Toco pequeno/médio: não é necessário. Toco grande ou muito profundo: sim, utilizamos guindaste."
      },
      {
        question: "As raízes voltam a crescer?",
        answer: "Não, quando removemos o toco completamente e as raízes principais, não há regeneração. Pode haver pequenas raízes que secam naturalmente."
      },
      {
        question: "Pode danificar tubulações?",
        answer: "Temos cuidado especial para não danificar tubulações. Em casos de dúvida, localizamos tubulações antes de iniciar."
      },
      {
        question: "Quanto custa?",
        answer: "O valor varia conforme tamanho do toco, profundidade, necessidade de guindaste e complexidade. Oferecemos orçamento após avaliação."
      },
      {
        question: "Deixo o buraco ou vocês preenchem?",
        answer: "Oferecemos nivelamento e preenchimento do buraco como parte do serviço ou como opção adicional, conforme sua necessidade."
      }
    ]
  }
};

