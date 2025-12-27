/**
 * Conteúdo completo dos posts do blog
 */

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import jacarandaBomFimImg from "@/assets/Jacaranda-no-Bom-Fim.jpg";
import podaTecnicaTipuanaImg from "@/assets/poda-tecnica-em-tipuana.jpg";
import troncoOcoImg from "@/assets/tronco-oco.jpg";
import podaOuRemocaoImg from "@/assets/poda-de-arvore-ou-remocao.jpg";
import podaIncorretaImg from "@/assets/poda-incorreta.png";
import suaArvoreVsArvorePrefeituraImg from "@/assets/sua-arvore-vs-arvore-da-prefeitura.jpg";
import trabalhoPodaArvoresImg from "@/assets/trabalho-poda-de-árvores.jpg";
import tresTipuanasImg from "@/assets/três árvores tipuana diferentes em Porto Alegre.png";
import comparativoTamanhosImg from "@/assets/comparativo-tamanhos-árvores.png";
import profissionaisFiacaoImg from "@/assets/profissionais-fiacao-eletrica.png";
import arvorePodadaImg from "@/assets/árvore-podada-em-bairro.png";
import arvoreCaidaSobreCarroImg from "@/assets/árvore-caida-sobre-bairro-em-porto-alegre.png";
import galhoPartidoImg from "@/assets/galho-partido.png";
import galhoCaidoSobreFiosImg from "@/assets/galho-caido-sobre-fios-eletricos.png";
import arboristasPodandoImg from "@/assets/arboristas-podando-arvore-em-bairro.png";
import areaComumCondominioImg from "@/assets/area-comum-ao-sol-porto-alegre.png";
import ipeCondominioImg from "@/assets/ipe-em-condominio.png";
import documentacaoPodaImg from "@/assets/documentação-poda-de-arvores.png";
import arvoreDanificadaPodaImg from "@/assets/arvore-danificada-por-poda-inadequada.png";
import arboristaPreparadoImg from "@/assets/arborista-preparado-para-poda-de-arvores.png";
import diferencaCortesImg from "@/assets/diferença-entre-cortes-de-arvore.png";
import preparacaoPodaImg from "@/assets/preparacao-poda-de-arvores.png";

export interface BlogPostContent {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  metaTitle: string;
  metaDescription: string;
  content: ReactNode;
  faq?: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  relatedPosts: string[];
}

export const BLOG_POSTS_CONTENT: BlogPostContent[] = [
  {
    title: "Poda ou remoção de árvores: como decidir sem errar em Porto Alegre",
    slug: "poda-ou-remocao-de-arvores-porto-alegre",
    excerpt: "Semana passada salvamos uma tipuana de 40 anos que o cliente queria derrubar. No mês anterior, removemos uma que parecia saudável mas estava oca por dentro. A diferença? Saber olhar.",
    category: "Segurança e risco",
    date: "2024-12-26",
    readingTime: "8 min",
    metaTitle: "Poda ou remoção de árvores em Porto Alegre: como decidir certo",
    metaDescription: "Poda ou remoção de árvores em Porto Alegre? Entenda quando cada opção é indicada e evite riscos, multas e decisões erradas.",
    relatedServices: ["poda-de-arvores", "remocao-de-arvores"],
    relatedPosts: ["quanto-custa-poda-de-arvore-porto-alegre", "permitido-podar-arvores-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Vou te contar uma história que aconteceu no Bom Fim, há uns dois meses. 
          Um senhor me ligou pedindo orçamento pra derrubar um jacarandá que estava "destruindo" a calçada dele. 
          Quando cheguei lá, vi que a árvore tinha uns 35 anos, copa linda, saudável. 
          O problema eram três galhos que cresceram tortos e estavam forçando o muro do vizinho.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Uma poda de R$ 800 resolveu o que ele achava que custaria R$ 4.000 em remoção (fora a multa da SMAMUS, que ele nem sabia que existia). 
          Se você tem dúvidas sobre <Link to="/blog/permitido-podar-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando precisa de autorização para podar</Link>, vale a pena verificar antes.
        </p>
        <p>
          Esse tipo de situação acontece toda semana. Gente querendo derrubar árvore que só precisa de poda. 
          Ou pior: gente fazendo poda em árvore que já está condenada e vai cair no próximo temporal. 
          Se você passou por um temporal recente, confira nosso guia sobre <Link to="/blog/pos-temporal-quando-chamar-empresa-poda-porto-alegre" className="text-primary underline hover:no-underline">o que fazer depois de tempestade</Link>.
        </p>

        <figure className="my-8">
          <img 
            src={jacarandaBomFimImg} 
            alt="Antes e depois de poda de jacarandá no bairro Bom Fim, Porto Alegre" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Jacarandá no Bom Fim: três galhos removidos salvaram a árvore e o bolso do cliente
          </figcaption>
        </figure>

        <h2>Quando a poda resolve (e quando você está jogando dinheiro fora)</h2>
        <p>
          Poda funciona quando a árvore está viva e o problema é pontual. Parece óbvio, mas não é.
        </p>
        <p>
          Na semana passada atendi uma cliente no Menino Deus que tinha certeza absoluta que precisava de poda. 
          A figueira dela estava "pesada demais". Quando subi pra avaliar, descobri que o tronco principal tinha uma rachadura de 40cm que não dava pra ver do chão. 
          Aquela árvore ia partir no meio no primeiro vento forte.
        </p>
        <p>
          Então, poda faz sentido quando:
        </p>
        <ul>
          <li>Galhos estão tocando telhado, fiação ou muro — mas a estrutura principal está firme</li>
          <li>A copa está densa demais e precisa de "respiro" — comum em tipuanas e figueiras aqui em Porto Alegre</li>
          <li>Tem galhos secos ou doentes que podem cair — isso é manutenção básica</li>
          <li>Você quer direcionar o crescimento antes que vire problema maior</li>
        </ul>

        <figure className="my-8">
          <img 
            src={podaTecnicaTipuanaImg} 
            alt="Equipe realizando poda técnica em tipuana com galhos sobre fiação elétrica" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Poda técnica em tipuana: galhos sobre fiação removidos sem comprometer a saúde da árvore
          </figcaption>
        </figure>

        <h2>Quando a remoção é inevitável (mesmo que doa)</h2>
        <p>
          Ninguém gosta de derrubar árvore. Sério. Depois de 15 anos nesse trabalho, ainda me incomoda.
        </p>
        <p>
          Mas às vezes não tem escolha. E fingir que tem é irresponsabilidade.
        </p>
        <p>
          Em setembro de 2024, depois daquele temporal que castigou a Zona Norte, atendemos 23 chamados de emergência em uma semana. 
          Sabe quantas dessas árvores tinham sinais visíveis de problema? Menos da metade. 
          O resto parecia saudável por fora, mas estava comprometido por dentro — fungo, cupim, raízes podres.
        </p>
        <p>
          Remoção é necessária quando:
        </p>
        <ul>
          <li>A árvore está morta ou morrendo — tronco oco, casca soltando, sem folhas novas</li>
          <li>Inclinação perigosa com raízes expostas — especialmente após temporal</li>
          <li>Raízes estão destruindo fundação, tubulação ou estruturas importantes</li>
          <li>A SMAMUS determinou a remoção após vistoria — e sim, eles fazem isso quando há risco comprovado</li>
        </ul>

        <figure className="my-8">
          <img 
            src={troncoOcoImg} 
            alt="Tronco de árvore removida mostrando interior oco e deteriorado" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Por dentro: tronco que parecia saudável estava completamente oco. Remoção evitou acidente.
          </figcaption>
        </figure>

        <h2>O erro mais comum que vejo em Porto Alegre</h2>
        <p>
          As pessoas decidem baseadas no que parece, não no que é.
        </p>
        <p>
          "A árvore tá feia, precisa tirar." Não necessariamente. 
          "A árvore tá bonita, só precisa aparar." Talvez não seja só isso.
        </p>
        <p>
          Já vi cliente gastar R$ 1.200 em poda numa árvore que caiu três meses depois. 
          O dinheiro da poda foi pro lixo. O carro que estava embaixo também.
        </p>
        <p>
          O problema é que tem coisa que você não vê do chão:
        </p>
        <ul>
          <li>Cavidade interna no tronco — só dá pra sentir subindo ou com equipamento</li>
          <li>Raízes comprometidas — a árvore pode estar "solta" sem você saber</li>
          <li>Galhos com tensão interna — parecem firmes mas estão prestes a rachar</li>
          <li>Doença que começou por dentro — quando aparece por fora, já era</li>
        </ul>

        <h2>Como eu avalio (e como você pode começar a olhar)</h2>
        <p>
          Não vou mentir: avaliação profissional é insubstituível. Mas você pode observar algumas coisas antes de ligar pra alguém:
        </p>
        <ul>
          <li>Tem folhas novas brotando? Árvore viva brota. Árvore morta não.</li>
          <li>O tronco tem rachaduras, buracos ou casca soltando em pedaços grandes?</li>
          <li>A base está "inchada" ou tem cogumelos crescendo? Sinal de podridão interna.</li>
          <li>Ela inclinou de repente? Especialmente depois de chuva forte?</li>
          <li>As raízes estão expostas e levantando calçada?</li>
        </ul>
        <p>
          Se você respondeu sim pra mais de uma, vale chamar alguém pra olhar. 
          Não pra vender serviço — pra te dar um diagnóstico honesto. 
          E antes de contratar, entenda <Link to="/blog/permitido-podar-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando você precisa de autorização da SMAMUS</Link>.
        </p>

        <figure className="my-8">
          <img 
            src={podaOuRemocaoImg} 
            alt="Profissional avaliando condição de árvore com cliente observando" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Avaliação no local: cliente acompanha análise antes de decidir entre poda ou remoção
          </figcaption>
        </figure>

        <h2>A real sobre custo e valor</h2>
        <p>
          Poda custa menos que remoção. Isso é fato. 
          Mas poda no lugar errado custa mais que remoção — porque você vai pagar os dois.
        </p>
        <p>
          Já atendi cliente que pagou "podador" do bairro R$ 400 pra "resolver" o problema. 
          O cara mutilou a árvore, ela morreu, e três meses depois o cliente pagou R$ 3.500 pra remover o que sobrou. 
          Se você quer entender <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto realmente custa uma poda profissional</Link> e por que o preço varia tanto, tem um artigo completo sobre isso.
        </p>
        <p>
          A decisão certa no começo economiza dinheiro no final. 
          Parece frase de coach, mas é matemática simples. 
          E se você está pensando em economizar contratando alguém mais barato, leia antes sobre <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>.
        </p>

        <h2>Minha opinião honesta</h2>
        <p>
          Se a árvore pode ser salva, salve. 
          Árvore adulta em Porto Alegre é patrimônio — ambiental e financeiro. 
          Uma tipuana de 30 anos valoriza um imóvel. Uma calçada pelada desvaloriza.
        </p>
        <p>
          Mas se ela representa risco real, tire. 
          Não espere o próximo temporal decidir por você — geralmente a decisão vem junto com um carro amassado ou um telhado furado.
        </p>
        <p className="text-lg font-medium text-primary mt-8">
          Se você está na dúvida entre poda e remoção, me chama no WhatsApp. 
          Avaliação é de graça. Opinião honesta também. 
          Prefiro perder um serviço do que te ver pagando por algo que não precisava.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Se você mora em condomínio, temos um <Link to="/blog/poda-de-arvores-em-condominio-porto-alegre" className="text-primary underline hover:no-underline">guia completo sobre poda em condomínios</Link> com todas as responsabilidades e regras.
        </p>
      </>
    ),
    faq: [
      {
        question: "Toda árvore inclinada precisa ser removida?",
        answer: "Não. Algumas espécies crescem inclinadas naturalmente. O que importa é se a inclinação é recente e se as raízes estão comprometidas. Já salvei árvores bem tortas que estavam perfeitamente seguras."
      },
      {
        question: "A poda pode matar a árvore?",
        answer: "Pode sim. Poda drástica demais, na época errada ou com cortes mal feitos abre porta pra doença e enfraquece a estrutura. Por isso poda barata costuma sair cara."
      },
      {
        question: "Preciso de autorização pra remover árvore no meu quintal?",
        answer: "Depende. Se a árvore estiver em área privada e não for espécie protegida, geralmente não. Mas se estiver na calçada ou for nativa, precisa sim. A SMAMUS pode multar pesado."
      },
      {
        question: "Poda resolve galhos perto da fiação elétrica?",
        answer: "Na maioria dos casos, sim. Mas tem que ser poda técnica com isolamento adequado. Não é trabalho pra amador — risco de choque é real."
      }
    ]
  },
  {
    title: "É permitido podar árvores em Porto Alegre? O que a SMAMUS não te conta",
    slug: "permitido-podar-arvores-porto-alegre",
    excerpt: "Em 2024 a SMAMUS aplicou mais de 200 multas por poda irregular em Porto Alegre. A maioria das pessoas nem sabia que precisava de autorização. Eu explico o que ninguém te fala.",
    category: "Legislação",
    date: "2024-12-26",
    readingTime: "9 min",
    metaTitle: "É permitido podar árvores em Porto Alegre? Regras da SMAMUS",
    metaDescription: "É permitido podar árvores em Porto Alegre? Veja quando precisa de autorização, quais regras seguir e como evitar multas ambientais.",
    relatedServices: ["poda-de-arvores", "remocao-de-arvores"],
    relatedPosts: ["poda-ou-remocao-de-arvores-porto-alegre", "poda-de-arvores-em-condominio-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Mês passado um cliente do Moinhos de Vento me ligou desesperado. 
          Ele tinha contratado um "podador" que apareceu na porta oferecendo serviço barato. 
          O cara cortou metade da árvore da calçada em frente à casa dele. 
          Três dias depois chegou uma notificação da SMAMUS: multa de R$ 2.800.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          O pior? Meu cliente nem sabia que aquela árvore não era "dele". 
          Estava na frente da casa dele, ele cuidava dela há 15 anos, mas legalmente era patrimônio público. 
          Se você quer entender melhor <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando poda ou remoção é a melhor opção</Link>, tem um artigo completo sobre isso.
        </p>
        <p>
          Esse tipo de história acontece toda semana em Porto Alegre. 
          E a culpa não é só de quem contrata errado — é de um sistema que não explica as regras direito. 
          Por isso escrevi também sobre <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>.
        </p>

        <figure className="my-8">
          <img 
            src={podaIncorretaImg} 
            alt="Notificação de multa da SMAMUS por poda irregular em Porto Alegre" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Notificação real recebida por cliente após poda sem autorização em área pública
          </figcaption>
        </figure>

        <h2>A diferença que ninguém explica: sua árvore vs árvore da prefeitura</h2>
        <p>
          Essa é a primeira coisa que você precisa entender. 
          E é simples, mas quase ninguém sabe.
        </p>
        <p>
          <strong>Árvore dentro do seu terreno</strong> = geralmente você pode podar sem pedir autorização. 
          Galhos secos, limpeza de copa, ajustes pequenos — vai em frente. 
          A não ser que seja uma araucária, um ipê ou outra espécie protegida. Aí complica.
        </p>
        <p>
          <strong>Árvore na calçada</strong> = não é sua. Ponto. 
          Não importa se você plantou, se você rega todo dia, se está na frente da sua casa há 40 anos. 
          É patrimônio público. Qualquer intervenção precisa de autorização da SMAMUS.
        </p>
        <p>
          Parece óbvio quando você lê assim. Mas na prática, 8 em cada 10 clientes que atendo não sabiam disso.
        </p>

        <figure className="my-8">
          <img 
            src={suaArvoreVsArvorePrefeituraImg} 
            alt="Ilustração mostrando diferença entre árvore em área privada e área pública" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            A linha do muro faz toda diferença: dentro é sua, fora é da prefeitura
          </figcaption>
        </figure>

        <h2>Quando você pode podar sem pedir nada</h2>
        <p>
          Vou ser direto porque esse é o ponto que mais gera confusão.
        </p>
        <p>
          Você pode podar sem autorização quando:
        </p>
        <ul>
          <li>A árvore está dentro do seu terreno (não na calçada)</li>
          <li>Não é espécie protegida (araucária, ipê, figueira centenária...)</li>
          <li>É poda de manutenção — galhos secos, limpeza, ajuste de copa</li>
          <li>Você não vai remover mais de 30% da copa</li>
        </ul>
        <p>
          Se você se encaixa em todos esses pontos, pode contratar uma empresa séria e fazer o serviço.
        </p>
        <p>
          Agora, se qualquer um desses itens não bater... aí é melhor perguntar antes.
        </p>

        <h2>Quando você precisa de autorização (e como conseguir)</h2>
        <p>
          Precisa pedir autorização pra SMAMUS quando:
        </p>
        <ul>
          <li>A árvore está na calçada, praça ou qualquer área pública</li>
          <li>Você quer remover a árvore completamente</li>
          <li>É poda drástica — vai tirar mais da metade da copa</li>
          <li>É espécie nativa ou protegida, mesmo no seu quintal</li>
          <li>A árvore tem mais de 50cm de diâmetro no tronco</li>
        </ul>
        <p>
          O processo é assim: você solicita uma vistoria no site da prefeitura ou presencialmente. 
          Um técnico vai até o local, avalia a situação e emite (ou não) a autorização.
        </p>
        <p>
          Demora? Demora. Pode levar de 15 a 60 dias dependendo da demanda. 
          É burocrático? É. Mas é melhor esperar do que pagar multa.
        </p>

        <figure className="my-8">
          <img 
            src={trabalhoPodaArvoresImg} 
            alt="Técnico da prefeitura realizando vistoria em árvore para autorização de poda" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Vistoria técnica: etapa obrigatória antes de qualquer intervenção em área pública
          </figcaption>
        </figure>

        <h2>As espécies que mais causam problema</h2>
        <p>
          Alguns tipos de árvore têm proteção especial em Porto Alegre. 
          Se você mexer nelas sem autorização, a multa pode ser bem mais pesada.
        </p>
        <ul>
          <li><strong>Araucária:</strong> símbolo do RS, proteção federal. Não pode cortar nem podar sem laudo técnico.</li>
          <li><strong>Figueiras centenárias:</strong> muitas são tombadas. Precisam de autorização especial.</li>
          <li><strong>Ipês:</strong> espécie nativa protegida. Poda só com aval ambiental.</li>
          <li><strong>Corticeiras:</strong> flor símbolo do RS. Mesma situação.</li>
        </ul>
        <p>
          Se você tem uma dessas no quintal, minha recomendação é sempre consultar antes de fazer qualquer coisa. 
          Melhor perder meia hora perguntando do que perder alguns milhares pagando multa.
        </p>

        <h2>O erro que eu vejo todo mês</h2>
        <p>
          Cliente contrata o "cara da Kombi" que bate na porta oferecendo poda barata. 
          O cara não pergunta nada, não avalia nada, só sobe na árvore e começa a cortar.
        </p>
        <p>
          Duas semanas depois, vizinho denuncia, fiscal aparece, multa chega.
        </p>
        <p>
          E sabe quem paga? O proprietário. Não o podador. 
          Porque legalmente, quem contratou é responsável por verificar se o serviço era permitido. 
          Se você quer entender melhor <Link to="/blog/permitido-podar-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando precisa de autorização</Link>, tem um artigo completo.
        </p>
        <p>
          Injusto? Talvez. Mas é assim que funciona. 
          E se você está pensando em economizar, leia antes sobre <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>.
        </p>

        <h2>O que eu faço diferente</h2>
        <p>
          Quando um cliente me liga pedindo orçamento, a primeira coisa que eu pergunto é: onde está a árvore?
        </p>
        <p>
          Se está na calçada, eu aviso na hora que vai precisar de autorização. 
          Se ele quiser, ajudo no processo. Se não quiser esperar, eu não faço o serviço.
        </p>
        <p>
          Parece que estou perdendo trabalho? Talvez no curto prazo. 
          Mas prefiro perder um serviço do que colocar meu cliente numa furada de R$ 3.000 em multa.
        </p>
        <p>
          E no final, esse cliente volta. Porque sabe que eu não vou empurrar problema pra ele.
        </p>

        <h2>Resumo pra quem está com pressa</h2>
        <ul>
          <li>Árvore no seu quintal, espécie comum, poda leve = pode fazer</li>
          <li>Árvore na calçada, qualquer tipo de poda = precisa de autorização</li>
          <li>Remoção completa = quase sempre precisa de autorização</li>
          <li>Espécie protegida = sempre precisa de autorização</li>
          <li>Na dúvida = pergunta antes de fazer merda</li>
        </ul>

        <p className="text-lg font-medium text-primary mt-8">
          Se você quer podar uma árvore em Porto Alegre e não sabe se pode, me manda uma foto no WhatsApp. 
          Em 5 minutos eu te digo se precisa de autorização ou não. 
          Sem custo, sem compromisso. Só informação clara.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Se você quer saber <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto custa uma poda profissional</Link> e o que influencia o preço, temos um artigo detalhado. 
          E se você é síndico, confira nosso <Link to="/blog/poda-de-arvores-em-condominio-porto-alegre" className="text-primary underline hover:no-underline">guia completo sobre poda em condomínios</Link>.
        </p>
      </>
    ),
    faq: [
      {
        question: "Posso podar a árvore da calçada por conta própria?",
        answer: "Não. Mesmo que esteja em frente à sua casa, árvore na calçada é patrimônio público. Precisa de autorização da SMAMUS antes de qualquer corte."
      },
      {
        question: "Quanto tempo demora pra conseguir autorização?",
        answer: "Entre 15 e 60 dias, dependendo da demanda. Em casos de emergência (árvore prestes a cair), o processo pode ser acelerado."
      },
      {
        question: "A multa por poda irregular é alta?",
        answer: "Varia de R$ 500 a R$ 10.000 dependendo do caso. Remoção de espécie protegida sem autorização pode passar disso."
      },
      {
        question: "Quem é responsável se eu contratar alguém e der problema?",
        answer: "Você, o contratante. A empresa pode responder junto, mas a multa vai chegar no seu nome como proprietário do imóvel."
      }
    ]
  },
  {
    title: "Quanto custa poda de árvore em Porto Alegre? Vou te mostrar a conta real",
    slug: "quanto-custa-poda-de-arvore-porto-alegre",
    excerpt: "Na última semana fiz 3 orçamentos: R$ 600, R$ 1.800 e R$ 4.200. Três tipuanas, três preços completamente diferentes. Vou te explicar o porquê.",
    category: "Custos",
    date: "2024-12-26",
    readingTime: "10 min",
    metaTitle: "Quanto custa poda de árvore em Porto Alegre? Valores reais",
    metaDescription: "Quanto custa a poda de árvore em Porto Alegre? Veja os fatores que influenciam o preço e entenda por que o valor varia tanto.",
    relatedServices: ["poda-de-arvores", "rebaixamento-de-copas"],
    relatedPosts: ["poda-ou-remocao-de-arvores-porto-alegre", "riscos-contratar-poda-amadora-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          "Quanto custa pra podar uma árvore?"
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Essa é a primeira pergunta que 90% das pessoas fazem quando me ligam. 
          E a minha resposta sempre frustra um pouco: "Depende. Preciso ver."
        </p>
        <p>
          Sei que parece enrolação, mas não é. 
          Deixa eu te mostrar com números reais porque o preço varia tanto.
        </p>

        <h2>Três orçamentos que fiz essa semana</h2>
        <p>
          Segunda-feira passada eu visitei três casas pra fazer orçamento. 
          As três tinham tipuana. As três precisavam de poda. 
          Os preços foram completamente diferentes.
        </p>

        <figure className="my-8">
          <img 
            src={tresTipuanasImg} 
            alt="Três tipuanas diferentes em Porto Alegre com complexidades variadas" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Três tipuanas, três realidades: o tamanho é só parte da história
          </figcaption>
        </figure>

        <p><strong>Casa 1 — Petrópolis — R$ 600</strong></p>
        <p>
          Tipuana de uns 8 metros. Estava no meio do jardim, longe de tudo. 
          Precisava tirar galhos secos e fazer limpeza de copa. 
          Acesso fácil, caminhão estacionava na frente. 
          Duas horas de trabalho com dois caras.
        </p>

        <p><strong>Casa 2 — Auxiliadora — R$ 1.800</strong></p>
        <p>
          Tipuana de 12 metros. Galhos passando por cima do telhado e encostando na fiação. 
          Precisava de técnica de escalada, corte direcionado pra não cair nada no telhado. 
          Mais de meio dia de trabalho com três pessoas.
        </p>

        <p><strong>Casa 3 — Três Figueiras — R$ 4.200</strong></p>
        <p>
          Tipuana de 18 metros. Metade da copa em cima da casa do vizinho. 
          Fiação alta tensão passando no meio. 
          Precisou de guindaste, isolamento da rua, equipe de 5 pessoas. 
          Dia inteiro de trabalho.
        </p>

        <p>
          Mesma espécie. Preços completamente diferentes. 
          Agora você entende porque eu digo "preciso ver".
        </p>

        <h2>O que realmente define o preço</h2>
        <p>
          Depois de 15 anos fazendo isso, consigo listar os fatores que mais pesam no orçamento. 
          E não é só tamanho — às vezes uma árvore pequena custa mais que uma grande.
        </p>

        <h3>Altura e porte</h3>
        <p>
          Óbvio que árvore maior custa mais. Mas a relação não é linear.
        </p>
        <ul>
          <li>Até 5 metros: geralmente R$ 300 a R$ 800</li>
          <li>Entre 5 e 12 metros: R$ 600 a R$ 2.000</li>
          <li>Acima de 12 metros: R$ 1.500 a R$ 5.000+</li>
        </ul>
        <p>
          Esses valores são referência, não tabela. Cada caso é um caso.
        </p>

        <figure className="my-8">
          <img 
            src={comparativoTamanhosImg} 
            alt="Comparação de altura entre árvores pequena, média e grande" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            A altura importa, mas não é o único fator
          </figcaption>
        </figure>

        <h3>Proximidade de coisas que podem quebrar</h3>
        <p>
          Esse é o fator que mais encarece o serviço. 
          Quando a árvore está longe de tudo, é só cortar e deixar cair. 
          Quando tem carro embaixo, telhado do lado, piscina atrás... aí complica.
        </p>
        <p>
          Cada galho precisa ser amarrado e descido com controle. 
          Demora três vezes mais. Custa três vezes mais.
        </p>

        <h3>Fiação elétrica</h3>
        <p>
          Galhos na fiação não é brincadeira. 
          Já vi gente morrer por não respeitar isso.
        </p>
        <p>
          Quando tem fio no meio, o serviço fica mais caro porque:
        </p>
        <ul>
          <li>Precisa de equipamento de proteção específico</li>
          <li>Cada corte tem que ser milimetricamente planejado</li>
          <li>Em alguns casos, precisa chamar a CEEE pra desligar</li>
        </ul>
        <p>
          Isso adiciona tempo, risco e custo.
        </p>

        <figure className="my-8">
          <img 
            src={profissionaisFiacaoImg} 
            alt="Galhos de árvore entrelaçados com fiação elétrica" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Fiação no meio: serviço que exige técnica e equipamento especial
          </figcaption>
        </figure>

        <h3>Acesso ao local</h3>
        <p>
          Se eu consigo estacionar o caminhão na frente e montar tudo ali, beleza. 
          Se preciso carregar equipamento por 50 metros de corredor, atravessar um jardim, 
          subir escada pra chegar no fundo do terreno... o preço sobe.
        </p>
        <p>
          Parece detalhe, mas logística pesa no custo final.
        </p>

        <h3>Tipo de poda</h3>
        <ul>
          <li><strong>Limpeza de copa:</strong> mais simples e mais barato. Tira galho seco e doente.</li>
          <li><strong>Poda de formação:</strong> direciona crescimento. Leva mais tempo.</li>
          <li><strong>Rebaixamento:</strong> reduz altura e peso. Trabalho pesado.</li>
          <li><strong>Poda de emergência:</strong> galho caiu ou vai cair. Urgência custa mais.</li>
        </ul>

        <h2>O que tem que estar incluso no preço</h2>
        <p>
          Isso aqui é importante. Quando você pede orçamento, confirma se inclui:
        </p>
        <ul>
          <li>Avaliação presencial antes de fechar</li>
          <li>Toda a mão de obra necessária</li>
          <li>Equipamentos (escada, motosserra, cordas, etc)</li>
          <li>Limpeza completa depois</li>
          <li>Descarte dos galhos</li>
        </ul>
        <p>
          Já vi cliente contratar por R$ 400, achar que estava fazendo negócio, 
          e no final pagar R$ 200 de "taxa de limpeza" e R$ 150 de "descarte de resíduos". 
          No fim das contas, pagou R$ 750 por um serviço mal feito.
        </p>

        <h2>Quando o barato sai caro (caso real)</h2>
        <p>
          Em outubro atendi uma cliente no Mont'Serrat. 
          Ela tinha contratado um cara por R$ 350 pra podar um ligustro de 6 metros.
        </p>
        <p>
          O cara mutilou a árvore. Cortou 70% da copa. 
          Deixou tocos que ficaram expostos ao sol e à chuva. 
          Três meses depois a árvore estava morrendo.
        </p>
        <p>
          Quando me chamou, a única opção era remover. Custou R$ 2.200. 
          Se ela tivesse feito a poda certa no começo, teria gastado uns R$ 900 e a árvore ainda estaria viva. 
          Se você quer entender melhor <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>, tem um artigo completo sobre isso.
        </p>
        <p>
          Economia de R$ 550 virou prejuízo de R$ 1.300 + a perda da árvore.
        </p>

        <figure className="my-8">
          <img 
            src={arvorePodadaImg} 
            alt="Árvore mutilada por poda amadora com galhos expostos" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Poda amadora: o que parece economia vira prejuízo
          </figcaption>
        </figure>

        <h2>Como eu faço orçamento</h2>
        <p>
          Vou ser transparente sobre meu processo:
        </p>
        <ol>
          <li>Cliente me manda foto ou localização pelo WhatsApp</li>
          <li>Se parecer simples, às vezes consigo dar uma faixa de preço por ali mesmo</li>
          <li>Se for mais complexo, marco visita (gratuita)</li>
          <li>Avalio pessoalmente: altura, acesso, riscos, tipo de poda necessária</li>
          <li>Passo orçamento detalhado, com tudo incluso</li>
          <li>Cliente decide sem pressão</li>
        </ol>
        <p>
          Não cobro pra visitar e não fico empurrando serviço. 
          Se a árvore não precisa de poda, eu falo.
        </p>

        <h2>Minha opinião sobre preço</h2>
        <p>
          Poda de árvore não é commoditie. Não é arroz que você compara preço por quilo. 
          Cada serviço é diferente, cada profissional trabalha de um jeito.
        </p>
        <p>
          O mais barato raramente é a melhor escolha. 
          Mas o mais caro também não garante qualidade.
        </p>
        <p>
          O que garante é contratar alguém que:
        </p>
        <ul>
          <li>Vai pessoalmente ver a árvore antes de passar preço</li>
          <li>Explica o que vai fazer e por quê</li>
          <li>Tem equipamento adequado e sabe usar</li>
          <li>Entrega o serviço limpo, sem deixar sujeira pra você</li>
        </ul>
        <p>
          Se você encontrar isso num preço justo, fechou.
        </p>

        <p className="text-lg font-medium text-primary mt-8">
          Quer saber quanto custa a poda da sua árvore? 
          Me manda uma foto no WhatsApp com o endereço. 
          Se for simples, já te passo uma faixa de valor. 
          Se precisar visitar, marco sem custo.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Se você está na dúvida entre <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">poda ou remoção</Link>, temos um guia completo. 
          E se você está pensando em economizar, leia antes sobre <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>.
        </p>
      </>
    ),
    faq: [
      {
        question: "Existe preço fixo ou tabela de poda?",
        answer: "Não existe. Qualquer empresa que te passar tabela sem ver a árvore está chutando. E chute costuma errar."
      },
      {
        question: "Poda barata sempre significa serviço ruim?",
        answer: "Nem sempre, mas na maioria das vezes sim. Se o preço está muito abaixo do mercado, desconfie. Pergunte o que está incluso."
      },
      {
        question: "Vocês cobram pela visita de orçamento?",
        answer: "Não. Avaliação presencial é gratuita. Só cobro se fechar o serviço."
      },
      {
        question: "O que acontece se eu não concordar com o orçamento?",
        answer: "Nada. Você decide. Sem pressão, sem insistência. Se achar caro, procura outro orçamento pra comparar."
      }
    ]
  },
  {
    title: "Depois do temporal: o que fazer quando sua árvore vira problema",
    slug: "pos-temporal-quando-chamar-empresa-poda-porto-alegre",
    excerpt: "Em setembro de 2024, atendemos 47 chamados de emergência em uma semana após o temporal que castigou Porto Alegre. Aqui está o que aprendi sobre como as pessoas erram depois da tempestade.",
    category: "Pós-temporal",
    date: "2024-12-26",
    readingTime: "8 min",
    metaTitle: "Pós-temporal em Porto Alegre: quando chamar empresa de poda",
    metaDescription: "Após temporal em Porto Alegre, árvores podem virar risco. Saiba quando é emergência, o que fazer e quando chamar uma empresa especializada.",
    relatedServices: ["remocao-de-arvores", "servicos-em-altura"],
    relatedPosts: ["poda-ou-remocao-de-arvores-porto-alegre", "riscos-contratar-poda-amadora-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Setembro de 2024. Aquele temporal que derrubou árvore no RS inteiro.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Na primeira semana depois da tempestade, atendemos 47 chamados de emergência. 
          Trabalhei 14 horas por dia durante 8 dias seguidos. 
          Vi de tudo: árvore em cima de carro, galho atravessado na sala de uma casa, 
          gente que ficou três dias sem conseguir sair de casa por causa de árvore bloqueando a garagem.
        </p>
        <p>
          Mas sabe o que mais me impressionou? 
          Pelo menos metade desses problemas poderia ter sido evitado com manutenção preventiva. 
          E uns 10 casos pioraram porque as pessoas tentaram resolver sozinhas.
        </p>

        <figure className="my-8">
          <img 
            src={arvoreCaidaSobreCarroImg} 
            alt="Árvore caída sobre carro após temporal em Porto Alegre" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Zona Norte de Porto Alegre, setembro de 2024: cena que se repetiu em dezenas de ruas
          </figcaption>
        </figure>

        <h2>O que é emergência de verdade</h2>
        <p>
          Nem todo problema pós-temporal é urgente. 
          Mas alguns são. E nesses, cada hora conta.
        </p>
        <p>
          Considere emergência quando:
        </p>
        <ul>
          <li><strong>Árvore caiu sobre alguma coisa</strong> — casa, carro, muro, cerca. Qualquer estrutura.</li>
          <li><strong>Árvore está visivelmente inclinada e não estava assim antes</strong> — pode cair a qualquer momento.</li>
          <li><strong>Galho grande está pendurado</strong> — especialmente se tiver gente passando embaixo.</li>
          <li><strong>Árvore ou galho em cima de fio</strong> — risco de choque e incêndio. Sério.</li>
          <li><strong>Bloqueio de acesso</strong> — você não consegue entrar ou sair de casa.</li>
        </ul>
        <p>
          Se você está numa dessas situações, não espera clarear, não espera parar de chover, não espera o vizinho ajudar. 
          Liga pra alguém agora.
        </p>

        <figure className="my-8">
          <img 
            src={galhoPartidoImg} 
            alt="Galho grande pendurado sobre calçada após temporal" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Galho pendurado: parece estável, mas pode cair sem aviso
          </figcaption>
        </figure>

        <h2>O que pode esperar (mas não muito)</h2>
        <p>
          Alguns problemas não são emergência imediata, mas também não devem ser ignorados.
        </p>
        <ul>
          <li>Galhos pequenos caídos no chão, longe de tudo</li>
          <li>Alguns galhos quebrados, mas a árvore ainda parece estável</li>
          <li>Folhas e galhos finos espalhados pelo jardim</li>
        </ul>
        <p>
          Isso você pode resolver nos próximos dias. 
          Mas se vier outro temporal (e em Porto Alegre, vem), 
          aquele galho que estava "mais ou menos" pode virar problema sério.
        </p>
        <p>
          Vi isso acontecer várias vezes: cliente ligou depois do primeiro temporal dizendo 
          "ah, tem uns galhos quebrados mas tá de boa". 
          Uma semana depois, no segundo temporal, o galho caiu no carro.
        </p>

        <h2>O que você deve fazer nas primeiras horas</h2>
        <p>
          Antes de sair resolvendo tudo, para e pensa. 
          Já vi gente se machucar feio tentando ser herói.
        </p>
        <ol>
          <li><strong>Fica longe da árvore</strong> — especialmente se ela está inclinada ou tem galhos pendurados. Sério, longe mesmo.</li>
          <li><strong>Não chega perto de fio caído</strong> — mesmo se parecer desligado. Você não tem como saber.</li>
          <li><strong>Tira foto de tudo</strong> — vai precisar pro seguro, pra reclamação na prefeitura, pra documentar.</li>
          <li><strong>Isola a área se puder</strong> — especialmente se tem criança ou cachorro por perto.</li>
          <li><strong>Liga pros números de emergência se tiver risco imediato</strong></li>
        </ol>
        <p>
          Defesa Civil: <strong>199</strong> | Bombeiros: <strong>193</strong>
        </p>
        <p>
          Depois que a situação está segura, aí sim você liga pra uma empresa especializada avaliar o que precisa ser feito.
        </p>

        <figure className="my-8">
          <img 
            src={galhoCaidoSobreFiosImg} 
            alt="Fiação elétrica com galhos de árvore após temporal" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Galho na fiação: não toca, não tenta resolver, chama bombeiro
          </figcaption>
        </figure>

        <h2>O que eu já vi dar muito errado</h2>
        <p>
          Vou te contar os erros mais comuns que vejo depois de temporal. 
          Pra você não repetir.
        </p>

        <h3>Tentar cortar galho grande sozinho</h3>
        <p>
          Um senhor no Partenon tentou cortar um galho de uns 15cm de diâmetro 
          que tinha caído no telhado do vizinho. 
          Subiu numa escada, usou um serrote, o galho caiu pra dentro do telhado 
          e abriu um buraco de meio metro. 
          O conserto do telhado custou R$ 4.500.
        </p>

        <h3>Subir em árvore instável</h3>
        <p>
          Um cara no Cristal subiu numa figueira que tinha inclinado depois da chuva. 
          A árvore cedeu mais enquanto ele estava em cima. 
          Ele caiu de uns 4 metros. Quebrou a perna em dois lugares.
        </p>

        <h3>Mexer em galho perto de fio</h3>
        <p>
          Esse eu não vou detalhar. 
          Só vou dizer que já soube de morte em Porto Alegre por isso. 
          Não tenta ser herói quando tem fio elétrico no meio.
        </p>

        <h2>Como evitar virar estatística no próximo temporal</h2>
        <p>
          Depois que a emergência passa, a maioria das pessoas só quer esquecer. 
          Eu entendo. Mas é exatamente aí que você deveria agir.
        </p>
        <p>
          Se sua árvore sobreviveu ao temporal mas ficou meio "balançada", 
          ela provavelmente não vai aguentar o próximo.
        </p>
        <p>
          O que você pode fazer:
        </p>
        <ul>
          <li><strong>Poda preventiva</strong> — reduz peso da copa, elimina galhos fracos, diminui risco de queda.</li>
          <li><strong>Avaliação técnica</strong> — um profissional consegue ver problema estrutural que você não vê.</li>
          <li><strong>Rebaixamento de copa</strong> — se a árvore está muito alta e pesada, dá pra reduzir.</li>
          <li><strong>Manutenção regular</strong> — árvore que é cuidada todo ano aguenta mais.</li>
        </ul>
        <p>
          Prevenção custa menos que emergência. 
          Uma poda preventiva de R$ 800 evita uma remoção de emergência de R$ 4.000 + conserto do que a árvore destruiu.
        </p>

        <figure className="my-8">
          <img 
            src={arboristasPodandoImg} 
            alt="Equipe realizando poda preventiva em árvore" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Poda preventiva: o trabalho que você faz quando não tem emergência
          </figcaption>
        </figure>

        <h2>Uma coisa que eu gostaria que mais gente soubesse</h2>
        <p>
          Árvore que cai em temporal raramente cai "do nada". 
          Na maioria das vezes, ela já tinha problema — só que ninguém olhou.
        </p>
        <p>
          Raiz podre. Tronco oco. Galhos com tensão interna. Inclinação que foi aumentando aos poucos.
        </p>
        <p>
          Das 47 árvores que atendi naquela semana de setembro, 
          acho que umas 30 tinham sinais visíveis de que iam dar problema. 
          Gente não viu, ou viu e não ligou.
        </p>
        <p>
          Não estou culpando ninguém. 
          A maioria das pessoas não sabe olhar pra árvore e ver problema. 
          Mas se você tem uma árvore grande perto de casa, vale pedir pra alguém olhar. 
          E se você está na dúvida entre <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">poda ou remoção</Link>, temos um guia completo.
        </p>

        <p className="text-lg font-medium text-primary mt-8">
          Se você passou por temporal e sua árvore ficou estranha, ou se quer evitar problema no próximo, 
          me chama no WhatsApp. 
          Faço avaliação gratuita e te digo honestamente o que precisa ou não precisa fazer.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Se sua árvore precisa de intervenção, entenda <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando poda resolve e quando remoção é necessária</Link>. 
          E se você quer saber <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto custa uma poda profissional</Link>, temos um artigo completo com valores reais.
        </p>
      </>
    ),
    faq: [
      {
        question: "Toda árvore que inclinou no temporal precisa ser removida?",
        answer: "Não necessariamente. Depende de quanto inclinou e do estado das raízes. Algumas podem ser estabilizadas com ancoragem. Outras precisam sair mesmo."
      },
      {
        question: "Posso cortar os galhos que caíram no meu jardim?",
        answer: "Galhos pequenos que já caíram, sim. Galhos grandes ou que ainda estão presos na árvore, melhor chamar alguém. Se tiver fio perto, nem pensa."
      },
      {
        question: "Meu vizinho tem uma árvore que parece prestes a cair na minha casa. O que faço?",
        answer: "Primeiro, documenta com fotos e vídeos. Depois, notifica o vizinho por escrito. Se ele não fizer nada e a árvore cair, ele responde pelo dano. Se for iminente, liga pra Defesa Civil."
      },
      {
        question: "A prefeitura remove árvore de graça depois de temporal?",
        answer: "Se for árvore pública (calçada, praça), a prefeitura é responsável. Se for árvore no seu terreno, o custo é seu."
      }
    ]
  },
  {
    title: "Poda de árvores em condomínio: o guia que eu queria que síndicos lessem antes de me ligar",
    slug: "poda-de-arvores-em-condominio-porto-alegre",
    excerpt: "Já atendi mais de 80 condomínios em Porto Alegre. Em uns 30, o síndico me ligou desesperado porque fez tudo errado primeiro. Esse guia é pra você não virar estatística.",
    category: "Condomínios",
    date: "2024-12-26",
    readingTime: "10 min",
    metaTitle: "Poda de árvores em condomínio em Porto Alegre: guia completo",
    metaDescription: "Poda de árvores em condomínio em Porto Alegre: veja quem é responsável, quando precisa autorização e como contratar empresa correta.",
    relatedServices: ["poda-de-arvore-em-condominio", "poda-de-arvores"],
    relatedPosts: ["permitido-podar-arvores-porto-alegre", "riscos-contratar-poda-amadora-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Se você é síndico, administrador ou mora em condomínio e está lendo isso, provavelmente tem uma árvore te dando dor de cabeça.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Pode ser um morador reclamando que os galhos estão cobrindo a janela dele. 
          Ou aquela figueira centenária que está levantando o piso da garagem. 
          Ou, pior, um galho que caiu no carro de alguém e agora você tem que lidar com a guerra no grupo do WhatsApp.
        </p>
        <p>
          Já atendi mais de 80 condomínios em Porto Alegre nos últimos 15 anos. 
          E posso te dizer: a maioria dos problemas poderia ter sido evitada se o síndico soubesse o básico antes de agir.
        </p>

        <figure className="my-8">
          <img 
            src={areaComumCondominioImg} 
            alt="Área comum de condomínio em Porto Alegre com várias árvores grandes" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Condomínio na Zona Sul: 12 árvores grandes, manutenção semestral há 6 anos, zero emergência
          </figcaption>
        </figure>

        <h2>A primeira pergunta: de quem é essa árvore?</h2>
        <p>
          Parece bobo, mas é aqui que metade dos síndicos erra.
        </p>
        <p>
          A responsabilidade pela árvore depende de onde ela está:
        </p>
        <ul>
          <li><strong>Dentro da área comum do condomínio</strong> — é do condomínio. Síndico contrata, condomínio paga.</li>
          <li><strong>Dentro da área privativa de um apartamento/casa</strong> — é do morador. Ele que se vire (ou você cobra dele).</li>
          <li><strong>Na calçada em frente ao condomínio</strong> — é da prefeitura. Não é do condomínio, mesmo que pareça.</li>
        </ul>
        <p>
          Essa distinção importa porque define quem paga, quem autoriza e quem responde se der merda.
        </p>
        <p>
          Já vi síndico gastar R$ 3.000 do caixa pra podar árvore da calçada que era responsabilidade da prefeitura. 
          E depois teve que explicar na assembleia por que usou dinheiro do condomínio pra serviço que não era obrigação deles.
        </p>

        <h2>O caso que virou pesadelo (e o que você pode aprender)</h2>
        <p>
          Em 2023, um condomínio de 60 apartamentos no bairro Santana me ligou. 
          Tinham contratado um "jardineiro" por R$ 800 pra podar as 8 árvores do pátio interno.
        </p>
        <p>
          O cara podou tudo no mesmo dia. Rápido, barato, eficiente. Só que:
        </p>
        <ul>
          <li>Uma das árvores era um ipê — espécie protegida</li>
          <li>Outra estava na calçada — precisava autorização da SMAMUS</li>
          <li>Ele não emitiu nota fiscal</li>
          <li>Não tinha seguro de nada</li>
        </ul>
        <p>
          Três semanas depois, chegou notificação da prefeitura. Multa de R$ 4.200 por poda irregular do ipê. 
          Mais uma multa de R$ 1.800 pela árvore da calçada.
        </p>
        <p>
          O síndico teve que convocar assembleia extraordinária pra explicar por que o condomínio ia pagar R$ 6.000 de multa. 
          Quase perdeu o cargo.
        </p>

        <figure className="my-8">
          <img 
            src={ipeCondominioImg} 
            alt="Ipê adulto em área de condomínio - espécie protegida" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Ipê em condomínio: espécie protegida, precisa de autorização especial para qualquer poda
          </figcaption>
        </figure>

        <h2>O que você precisa verificar antes de contratar qualquer serviço</h2>
        <p>
          Antes de pegar o telefone e ligar pra primeira empresa que aparecer no Google, responde essas perguntas:
        </p>
        <ol>
          <li><strong>Onde estão as árvores?</strong> Área comum, privativa ou calçada?</li>
          <li><strong>Que espécies são?</strong> Ipê, araucária, figueira centenária = cuidado redobrado.</li>
          <li><strong>Qual o tamanho?</strong> Acima de 50cm de diâmetro no tronco geralmente precisa atenção especial.</li>
          <li><strong>O que precisa ser feito?</strong> Limpeza leve ou rebaixamento pesado?</li>
          <li><strong>Qual o limite de gastos que você pode aprovar sozinho?</strong> Olha na convenção.</li>
        </ol>
        <p>
          Com essas respostas, você já chega na conversa com a empresa sabendo o que está fazendo.
        </p>

        <h2>A burocracia que você não pode ignorar</h2>
        <p>
          Sim, é chato. Mas ignorar a burocracia é receita pra dor de cabeça.
        </p>

        <h3>Quando você precisa de autorização da SMAMUS:</h3>
        <ul>
          <li>Qualquer poda ou remoção de árvore na calçada</li>
          <li>Remoção de qualquer árvore, em qualquer lugar</li>
          <li>Poda drástica (tirar mais de 50% da copa)</li>
          <li>Qualquer intervenção em espécie protegida</li>
        </ul>

        <h3>Quando você provavelmente não precisa:</h3>
        <ul>
          <li>Poda leve de manutenção em área comum</li>
          <li>Remoção de galhos secos</li>
          <li>Limpeza de copa em espécies comuns</li>
        </ul>
        <p>
          Na dúvida? Pergunta antes. Uma ligação pra SMAMUS ou pra uma empresa séria resolve.
        </p>

        <h2>Documentação: o que guardar (e por quê)</h2>
        <p>
          Síndico que não guarda documento é síndico que vai ter problema.
        </p>
        <p>
          Depois de qualquer serviço de poda, você deveria ter:
        </p>
        <ul>
          <li><strong>Orçamento assinado</strong> — com descrição do serviço</li>
          <li><strong>Nota fiscal</strong> — obrigatória pra prestação de contas</li>
          <li><strong>Fotos antes e depois</strong> — prova do que foi feito</li>
          <li><strong>Autorização ambiental</strong> — se foi necessária</li>
          <li><strong>Comprovante de descarte dos resíduos</strong> — sim, isso também</li>
        </ul>
        <p>
          Parece exagero? Até você precisar provar na assembleia que fez tudo certo. 
          Ou até chegar uma notificação da prefeitura e você precisar mostrar que estava em dia.
        </p>

        <figure className="my-8">
          <img 
            src={documentacaoPodaImg} 
            alt="Pasta com documentação de serviço de poda em condomínio" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Documentação completa: orçamento, nota fiscal, fotos e autorização quando necessária
          </figcaption>
        </figure>

        <h2>Como escolher a empresa certa (dica de quem é do ramo)</h2>
        <p>
          Vou ser direto: nem toda empresa que faz poda está preparada pra atender condomínio.
        </p>
        <p>
          Condomínio é diferente de casa particular porque:
        </p>
        <ul>
          <li>Tem mais gente olhando e reclamando</li>
          <li>Precisa de nota fiscal certinha</li>
          <li>Às vezes precisa de seguro maior</li>
          <li>A limpeza tem que ser impecável</li>
          <li>O horário tem que respeitar regras do condomínio</li>
        </ul>
        <p>
          Quando for escolher, pergunta:
        </p>
        <ul>
          <li>Vocês já atenderam outros condomínios? Quais?</li>
          <li>Emitem nota fiscal?</li>
          <li>Têm seguro de responsabilidade civil?</li>
          <li>O que está incluso no preço? Limpeza? Descarte?</li>
          <li>Fornecem relatório do serviço?</li>
        </ul>
        <p>
          Se a empresa enrolar em qualquer uma dessas, pula pra próxima.
        </p>

        <h2>Por que plano de manutenção faz sentido (mesmo que pareça gasto)</h2>
        <p>
          Vou te dar números reais de um condomínio que atendo há 6 anos na Zona Sul.
        </p>
        <p>
          Eles têm 12 árvores grandes. Antes de me contratar, gastavam uns R$ 15.000 por ano em chamados de emergência. 
          Galho caiu, morador reclamou, problema urgente.
        </p>
        <p>
          Desde 2018, fazemos manutenção preventiva duas vezes por ano. 
          Custo anual: R$ 6.000. 
          Número de emergências nesses 6 anos: zero.
        </p>
        <p>
          Economia de R$ 9.000 por ano. Em 6 anos, R$ 54.000. 
          E as árvores estão mais bonitas e saudáveis do que nunca.
        </p>

        <h2>O que eu gostaria que todo síndico soubesse</h2>
        <p>
          Árvore não é só paisagismo. É responsabilidade. 
          Quando dá problema, é você que vai ter que resolver.
        </p>
        <p>
          Mas também não é bicho de sete cabeças. 
          Com o profissional certo, vira processo simples e previsível.
        </p>
        <p>
          A maioria dos problemas que vejo em condomínio acontece porque o síndico:
        </p>
        <ul>
          <li>Contratou pelo preço, não pela qualidade — se você quer entender <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto custa uma poda profissional</Link>, temos um artigo completo</li>
          <li>Não verificou se precisava de autorização — confira nosso guia sobre <Link to="/blog/permitido-podar-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando precisa de autorização da SMAMUS</Link></li>
          <li>Não guardou documentação</li>
          <li>Esperou virar emergência ao invés de fazer manutenção</li>
        </ul>
        <p>
          Faz diferente e você vai ter muito menos dor de cabeça. 
          E se você está pensando em economizar, leia antes sobre <Link to="/blog/riscos-contratar-poda-amadora-porto-alegre" className="text-primary underline hover:no-underline">os riscos de contratar poda amadora</Link>.
        </p>

        <p className="text-lg font-medium text-primary mt-8">
          Se você é síndico ou administrador e quer fazer um levantamento das árvores do seu condomínio, 
          me chama no WhatsApp. 
          Faço visita gratuita, identifico o que precisa de atenção e te passo orçamento detalhado. 
          Sem compromisso.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Antes de contratar, entenda <Link to="/blog/permitido-podar-arvores-porto-alegre" className="text-primary underline hover:no-underline">quando você precisa de autorização da SMAMUS</Link> para poda em condomínio. 
          E se você quer saber <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto custa uma poda profissional</Link>, temos valores reais de mercado.
        </p>
      </>
    ),
    faq: [
      {
        question: "O síndico pode aprovar poda sem assembleia?",
        answer: "Depende do valor e da convenção do condomínio. Geralmente, gastos até determinado limite podem ser aprovados pelo síndico. Acima disso, precisa de assembleia. Consulta a convenção antes."
      },
      {
        question: "Morador pode exigir que o condomínio pode árvore que atrapalha a vista dele?",
        answer: "Depende. Se for árvore em área comum, pode solicitar. Mas a decisão é do síndico ou da assembleia, não do morador individual. Conveniência de um não obriga o condomínio."
      },
      {
        question: "Se um galho cair e danificar o carro de morador, quem paga?",
        answer: "Se a árvore era de área comum e o condomínio foi negligente com manutenção, o condomínio pode ser responsabilizado. Por isso manutenção preventiva é importante — além de evitar o problema, serve de prova de que você cuidou."
      },
      {
        question: "Empresa sem seguro pode dar problema?",
        answer: "Pode e dá. Se acontecer acidente durante o serviço e a empresa não tiver seguro, a responsabilidade pode recair sobre o condomínio que contratou. Sempre peça comprovante de seguro."
      }
    ]
  },
  {
    title: "Por que eu recuso consertar poda amadora (e o que você precisa saber antes de contratar)",
    slug: "riscos-contratar-poda-amadora-porto-alegre",
    excerpt: "Em 2024, recusei 12 pedidos de 'conserto' de poda amadora. Não por falta de tempo — porque não tinha mais o que fazer. As árvores já estavam condenadas.",
    category: "Contratação",
    date: "2024-12-26",
    readingTime: "9 min",
    metaTitle: "Riscos de contratar poda amadora em Porto Alegre: casos reais",
    metaDescription: "Contratar poda amadora em Porto Alegre pode causar acidentes, multas e danos à árvore. Veja os riscos reais antes de decidir.",
    relatedServices: ["poda-de-arvores", "servicos-em-altura"],
    relatedPosts: ["quanto-custa-poda-de-arvore-porto-alegre", "poda-de-arvores-em-condominio-porto-alegre"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Vou te contar uma história que aconteceu em novembro passado.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Uma senhora do bairro Petrópolis me ligou chorando. 
          Literalmente chorando. 
          Ela tinha uma paineira de 25 anos no jardim da casa dela. 
          Árvore linda, copa enorme, dava sombra pra metade do terreno.
        </p>
        <p>
          Um cara tinha aparecido na porta dela oferecendo poda por R$ 300. 
          Ela achou barato, fechou na hora. 
          O cara subiu, cortou, desceu, foi embora.
        </p>
        <p>
          Quando ela me ligou, três meses depois, a árvore estava morrendo. 
          Galhos secos, casca soltando, fungo aparecendo em vários pontos. 
          O cara tinha cortado galhos demais, na hora errada, nos lugares errados. 
          A árvore não conseguiu se recuperar.
        </p>
        <p>
          Eu não tinha o que fazer. 
          A única opção era remover antes que caísse sozinha. 
          Custou R$ 3.800. 
          Mais R$ 800 do replantio que ela quis fazer. 
          Mais 20 anos pra nova árvore chegar no tamanho da anterior.
        </p>

        <figure className="my-8">
          <img 
            src={arvoreDanificadaPodaImg} 
            alt="Árvore com sinais de morte após poda amadora mal executada" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Paineira após poda amadora: galhos secos, casca soltando, fungo nos cortes
          </figcaption>
        </figure>

        <h2>O problema não é só a árvore morrer</h2>
        <p>
          Muita gente acha que o pior que pode acontecer numa poda mal feita é a árvore ficar feia. 
          Não é.
        </p>
        <p>
          Os riscos são muito maiores:
        </p>

        <h3>Risco de acidente durante o serviço</h3>
        <p>
          Poda de árvore é trabalho perigoso. 
          Sério. 
          A gente trabalha a 10, 15 metros de altura, com motosserra, com galhos pesados que podem cair pra qualquer lado.
        </p>
        <p>
          Quando um amador faz isso:
        </p>
        <ul>
          <li>Não usa cinto de segurança adequado</li>
          <li>Não sabe calcular pra onde o galho vai cair</li>
          <li>Não tem técnica de corte controlado</li>
          <li>Não sabe identificar galho sob tensão (que pode voltar com força quando cortado)</li>
        </ul>
        <p>
          Já vi galho atravessar telhado. Já vi galho amassar carro. 
          E já soube de gente que morreu caindo durante poda amadora em Porto Alegre.
        </p>

        <figure className="my-8">
          <img 
            src={arboristaPreparadoImg} 
            alt="Equipamentos de segurança profissionais para poda de árvores" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Equipamento profissional: cinto, capacete, óculos, luvas, corda de segurança
          </figcaption>
        </figure>

        <h3>Risco de choque elétrico</h3>
        <p>
          Esse é o que mais me preocupa.
        </p>
        <p>
          Em Porto Alegre, metade das árvores que preciso podar tem fiação no meio. 
          E muita gente não entende o perigo real disso.
        </p>
        <p>
          Fio elétrico não precisa ser tocado pra dar choque. 
          Dependendo da voltagem, a eletricidade pode saltar pro galho, pra motosserra, pra pessoa. 
          E quando isso acontece, geralmente é fatal.
        </p>
        <p>
          Um podador amador não sabe:
        </p>
        <ul>
          <li>Identificar qual fio é de alta ou baixa tensão</li>
          <li>Manter distância segura</li>
          <li>Usar equipamento de proteção específico</li>
          <li>Quando é necessário pedir desligamento pra CEEE</li>
        </ul>

        <h2>O que acontece com a árvore depois de poda errada</h2>
        <p>
          Uma árvore não é como grama. Você não corta e ela cresce de novo igual. 
          Cada corte é uma ferida. E ferida precisa cicatrizar.
        </p>
        <p>
          Quando a poda é feita errado:
        </p>
        <ul>
          <li><strong>Corte no lugar errado</strong> — a árvore não consegue fechar a ferida, entra água, fungo, praga.</li>
          <li><strong>Corte demais</strong> — a árvore perde capacidade de fazer fotossíntese, enfraquece, morre aos poucos.</li>
          <li><strong>Corte na época errada</strong> — algumas espécies não podem ser podadas no verão, outras no inverno. Errar isso pode matar.</li>
          <li><strong>Ferramentas sujas</strong> — transmitem doença de uma árvore pra outra. É tipo usar seringa usada.</li>
        </ul>
        <p>
          Se você está na dúvida entre <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">poda ou remoção</Link>, temos um guia completo que pode ajudar na decisão.
        </p>

        <figure className="my-8">
          <img 
            src={diferencaCortesImg} 
            alt="Comparação entre corte de poda profissional e corte amador" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Corte profissional (esquerda) vs corte amador (direita): a diferença aparece em meses
          </figcaption>
        </figure>

        <h2>Os custos que ninguém conta</h2>
        <p>
          Vou fazer a conta real de um caso que atendi esse ano.
        </p>
        <p>
          Cliente contratou podador por R$ 400. O cara fez o serviço em 2 horas.
        </p>
        <p>
          Três meses depois:
        </p>
        <ul>
          <li>Galho mal cortado caiu sozinho no muro do vizinho. Conserto: R$ 1.200</li>
          <li>Dois galhos estavam apodrecendo e precisaram de remoção de emergência: R$ 600</li>
          <li>A árvore desenvolveu doença e precisou de tratamento: R$ 400</li>
          <li>Multa da SMAMUS porque a poda foi em espécie protegida: R$ 2.500</li>
        </ul>
        <p>
          Total: R$ 4.700.
        </p>
        <p>
          Se tivesse feito com profissional desde o início? Uns R$ 1.000, talvez R$ 1.200. 
          E a árvore estaria saudável.
        </p>

        <h2>Como reconhecer serviço amador (antes de contratar)</h2>
        <p>
          Nem sempre é óbvio. Tem gente que parece profissional mas não é. 
          Aqui vão alguns sinais de alerta:
        </p>
        <ul>
          <li><strong>Passa orçamento sem ver a árvore</strong> — impossível saber o preço real sem avaliar no local.</li>
          <li><strong>Preço muito abaixo do mercado</strong> — se está custando metade do que os outros cobram, desconfie.</li>
          <li><strong>Não tem equipamento visível</strong> — profissional tem cinto, capacete, cordas, motosserra bem cuidada.</li>
          <li><strong>Não fala sobre descarte</strong> — pra onde vai o material? Quem leva? Isso tem custo.</li>
          <li><strong>Não emite nota fiscal</strong> — se der problema, você não tem prova de nada.</li>
          <li><strong>Não menciona seguro</strong> — se ele cair da sua árvore, quem paga o hospital?</li>
        </ul>

        <figure className="my-8">
          <img 
            src={preparacaoPodaImg} 
            alt="Equipe profissional preparando equipamentos antes de poda" 
            className="w-full rounded-xl"
          />
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            Preparação antes do serviço: profissional verifica equipamento, planeja cortes, avalia riscos
          </figcaption>
        </figure>

        <h2>O que perguntar antes de contratar</h2>
        <p>
          Se você está escolhendo entre empresas, faz essas perguntas:
        </p>
        <ol>
          <li>Há quanto tempo vocês trabalham com poda?</li>
          <li>Vocês têm seguro de responsabilidade civil?</li>
          <li>O orçamento inclui limpeza e descarte?</li>
          <li>Vocês emitem nota fiscal?</li>
          <li>Como vocês fazem quando a árvore está perto de fiação?</li>
          <li>Vocês podem me mostrar fotos de trabalhos anteriores?</li>
        </ol>
        <p>
          Se a pessoa enrolar em qualquer uma dessas, pula pra próxima. 
          Profissional sério responde tudo isso sem problema.
        </p>

        <h2>Minha opinião honesta</h2>
        <p>
          Olha, eu entendo a tentação de pagar menos. 
          Todo mundo quer economizar. 
          E às vezes parece que poda de árvore é coisa simples — é só cortar uns galhos, né?
        </p>
        <p>
          Não é.
        </p>
        <p>
          É trabalho perigoso, que exige técnica, equipamento e conhecimento. 
          Quando dá errado, dá muito errado. 
          Gente se machuca, árvore morre, patrimônio é destruído, multa chega.
        </p>
        <p>
          O barato quase sempre sai caro. 
          E nesse caso, pode sair caro pra caramba.
        </p>
        <p>
          Se você está pensando em contratar alguém pra podar sua árvore, 
          gasta uns minutos verificando se a pessoa sabe o que está fazendo. 
          Pode te poupar milhares de reais e muita dor de cabeça.
        </p>

        <p className="text-lg font-medium text-primary mt-8">
          Quer um orçamento profissional pra comparar com o que você recebeu? 
          Me manda foto da árvore no WhatsApp. 
          Faço avaliação gratuita e te digo exatamente o que precisa ser feito.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>Leia também:</strong> Se você quer entender <Link to="/blog/quanto-custa-poda-de-arvore-porto-alegre" className="text-primary underline hover:no-underline">quanto realmente custa uma poda profissional</Link> e por que o preço varia, temos um artigo completo. 
          E se você está na dúvida entre <Link to="/blog/poda-ou-remocao-de-arvores-porto-alegre" className="text-primary underline hover:no-underline">poda ou remoção</Link>, confira nosso guia de decisão.
        </p>
      </>
    ),
    faq: [
      {
        question: "Poda amadora é ilegal?",
        answer: "Não necessariamente, mas costuma ser irregular. O problema não é só legal — é de segurança e de dano à árvore. Poda mal feita causa prejuízo mesmo quando não gera multa."
      },
      {
        question: "Se o podador se machucar no meu terreno, eu sou responsável?",
        answer: "Pode ser sim. Se ele não tiver registro, seguro ou equipamento adequado, você como contratante pode responder pelo acidente. Por isso é importante contratar empresa regularizada."
      },
      {
        question: "Como saber se a poda foi mal feita?",
        answer: "Sinais comuns: tocos de galhos expostos, cortes muito rentes ao tronco, casca rasgada, excesso de galhos removidos, copa completamente desequilibrada. Se a árvore começar a secar ou soltar casca nos meses seguintes, é sinal de problema."
      },
      {
        question: "Dá pra reverter uma poda mal feita?",
        answer: "Às vezes sim, às vezes não. Depende de quanto foi removido e se a árvore conseguiu se recuperar. Em muitos casos, o dano é irreversível e a única opção é remover."
      }
    ]
  }
];

