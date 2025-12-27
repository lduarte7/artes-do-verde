import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, REVIEWS, getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/content/services-content";
import { truncateMeta } from "@/lib/seo-helpers";
import { BLOG_POSTS_CONTENT } from "@/lib/content/posts-content";

// Importar imagens
import remocaoArvoreImg from "@/assets/remocao-arvore.jpg";
import podaEscolaImg from "@/assets/poda-escola.jpg";
import podaArvoreImg from "@/assets/poda-arvore.jpg";
import corteGramaImg from "@/assets/corte-grama.jpg";
import rebaixamentoCopaImg from "@/assets/rebaixamento-copa.jpg";
import limpezaPosPodaImg from "@/assets/limpeza-pos-poda.jpg";
import podaCondominioImg from "@/assets/poda-condominio.jpg";
import extracaoRaizesImg from "@/assets/extracao-raizes.jpg";
import servicosAlturaImg from "@/assets/servicos-altura.jpg";

const imageMap: Record<string, string> = {
  "remocao-arvore.jpg": remocaoArvoreImg,
  "poda-escola.jpg": podaEscolaImg,
  "poda-arvore.jpg": podaArvoreImg,
  "corte-grama.jpg": corteGramaImg,
  "rebaixamento-copa.jpg": rebaixamentoCopaImg,
  "limpeza-pos-poda.jpg": limpezaPosPodaImg,
  "poda-condominio.jpg": podaCondominioImg,
  "extracao-raizes.jpg": extracaoRaizesImg,
  "servicos-altura.jpg": servicosAlturaImg,
};

export default function ServicoPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const serviceContent = slug ? SERVICES_CONTENT[slug] : null;

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  // Use specific content if available, otherwise fallback to generic
  const content = serviceContent || {
    intro: service.description,
    whenNeeded: [
      "Galhos tocando fiação elétrica ou telhados",
      "Árvore apresenta sinais de doença ou praga",
      "Há risco de queda em tempestades",
      "A copa está muito densa e bloqueia luz",
      "Raízes estão danificando calçadas ou estruturas"
    ],
    included: [
      "Avaliação técnica prévia",
      "Equipamentos de segurança completos",
      "Sinalização da área de trabalho",
      "Execução por profissionais treinados",
      "Limpeza completa do local",
      "Descarte correto dos resíduos"
    ],
    howWeDo: [
      { step: 1, title: "Avaliação", description: "Visitamos o local para avaliar a árvore e as condições de trabalho" },
      { step: 2, title: "Planejamento", description: "Definimos a melhor técnica e equipamentos necessários" },
      { step: 3, title: "Preparação", description: "Sinalizamos a área e preparamos os equipamentos de segurança" },
      { step: 4, title: "Execução", description: `Realizamos o serviço de ${service.title.toLowerCase()} com técnica e cuidado` },
      { step: 5, title: "Limpeza", description: "Recolhemos todos os resíduos e deixamos o local limpo" }
    ],
    risks: [],
    relatedServices: [],
    relatedPosts: [],
    faq: [
  {
        question: `Quanto custa o serviço de ${service.title.toLowerCase()}?`,
    answer: "O valor depende do porte da árvore, localização e complexidade do trabalho. Entre em contato para uma avaliação gratuita e orçamento sem compromisso.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim, emitimos nota fiscal para todos os serviços realizados.",
  },
  {
    question: "Preciso estar em casa durante o serviço?",
    answer: "Não é obrigatório, mas recomendamos que alguém acompanhe para liberar o acesso e verificar o resultado final.",
  },
  {
    question: "A limpeza está inclusa no serviço?",
    answer: "Sim! Toda a limpeza e retirada de resíduos está incluída. Deixamos o local limpo no mesmo dia.",
  },
    ]
  };

  const relatedServices = serviceContent?.relatedServices 
    ? SERVICES.filter((s) => serviceContent.relatedServices.includes(s.slug))
    : SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  const relatedPosts = serviceContent?.relatedPosts
    ? BLOG_POSTS_CONTENT.filter((p) => serviceContent.relatedPosts.includes(p.slug))
    : [];

  // Select contextual reviews (simplified - in production, map reviews to services)
  const contextualReviews = REVIEWS.slice(0, 3);

  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para ${service.title}.`;
  
  const metaDescription = truncateMeta(
    `${service.description} Atendemos Porto Alegre e Região Metropolitana com segurança e profissionalismo. Solicite orçamento grátis!`
  );

  return (
    <>
      <SEO
        title={`${service.title} em Porto Alegre`}
        description={metaDescription}
        canonical={`/servicos/${slug}`}
        type="service"
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: "Artes Do Verde",
            },
            areaServed: {
              "@type": "City",
              name: "Porto Alegre",
            },
          }),
        }}
      />

      <Header />
      <WhatsAppButton message={whatsappMessage} />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-20 section-dark">
          <div className="container-custom">
            <Breadcrumbs
              items={[
                { label: "Serviços", href: "/servicos" },
                { label: service.title },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                  {service.title} em Porto Alegre
                </h1>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  {content.intro}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-whatsapp" asChild>
                    <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Solicitar orçamento
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                {service.image && imageMap[service.image] ? (
                  <img
                    src={imageMap[service.image]}
                    alt={`${service.title} realizado pela Artes Do Verde em Porto Alegre`}
                    title={`${service.title} | Artes Do Verde - ${service.shortDescription}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-secondary-foreground/70">Imagem do serviço</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* When you need this */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Quando você precisa deste serviço?
                </h2>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <p className="text-base text-foreground mb-4 font-medium">
                  Você deve considerar o serviço de <strong className="text-primary">{service.title.toLowerCase()}</strong> quando:
                </p>
                <ul className="space-y-3">
                  {content.whenNeeded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                O que está incluso
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Nosso serviço completo inclui tudo que você precisa
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {content.included.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 hover:bg-secondary-foreground/10 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we do it */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Como fazemos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Processo completo e transparente do início ao fim
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                {content.howWeDo.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                      {index < content.howWeDo.length - 1 && (
                        <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-3" />
                      )}
                    </div>
                    <div className="pt-1 flex-1">
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA inline */}
        <section className="py-8 section-light">
          <div className="container-custom">
            <CTABlock
              variant="inline"
              title="Precisa deste serviço?"
              whatsappMessage={whatsappMessage}
            />
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                O que dizem nossos clientes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contextualReviews.map((review, index) => (
                <ReviewCard key={index} {...review} variant="dark" />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Perguntas sobre {service.title}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={content.faq} variant="light" />
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Serviços Relacionados
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="group p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors"
                >
                  <h3 className="font-display font-semibold text-secondary-foreground group-hover:text-primary transition-colors mb-1">
                    {s.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary text-sm">
                    Ver mais <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 section-light">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Artigos Relacionados
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all"
                  >
                    <span className="chip text-xs mb-3">{post.category}</span>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTABlock
          title={`Precisa de ${service.title}?`}
          whatsappMessage={whatsappMessage}
          showAddress
        />
      </main>

      <Footer />
    </>
  );
}
