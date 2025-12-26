import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, Phone, CheckCircle, ArrowRight, AlertTriangle, Wrench } from "lucide-react";
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

// Service-specific FAQ
const getServiceFAQ = (title: string) => [
  {
    question: `Quanto custa o serviço de ${title.toLowerCase()}?`,
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
];

// What's included checklist
const getIncludedItems = () => [
  "Avaliação técnica prévia",
  "Equipamentos de segurança completos",
  "Sinalização da área de trabalho",
  "Execução por profissionais treinados",
  "Limpeza completa do local",
  "Descarte correto dos resíduos",
];

// How we do it steps
const getHowWeDoIt = (serviceTitle: string) => [
  { step: 1, title: "Avaliação", description: "Visitamos o local para avaliar a árvore e as condições de trabalho" },
  { step: 2, title: "Planejamento", description: "Definimos a melhor técnica e equipamentos necessários" },
  { step: 3, title: "Preparação", description: "Sinalizamos a área e preparamos os equipamentos de segurança" },
  { step: 4, title: "Execução", description: `Realizamos o serviço de ${serviceTitle.toLowerCase()} com técnica e cuidado` },
  { step: 5, title: "Limpeza", description: "Recolhemos todos os resíduos e deixamos o local limpo" },
];

export default function ServicoPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);
  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para ${service.title}.`;

  return (
    <>
      <SEO
        title={`${service.title} em Porto Alegre`}
        description={`${service.description} Atendemos Porto Alegre e Região Metropolitana com segurança e profissionalismo.`}
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
                  {service.title}
                </h1>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-whatsapp" asChild>
                    <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Solicitar orçamento
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary-foreground/20 text-secondary-foreground"
                    asChild
                  >
                    <a href={getPhoneUrl()}>
                      <Phone className="w-5 h-5" />
                      Ligar agora
                    </a>
                  </Button>
                </div>
              </div>

              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-secondary-foreground/70">Imagem do serviço</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When you need this */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Quando você precisa deste serviço?
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Você deve considerar o serviço de <strong>{service.title.toLowerCase()}</strong> quando:
                </p>
                <ul>
                  <li>Galhos estão tocando fiação elétrica ou telhados</li>
                  <li>A árvore apresenta sinais de doença ou praga</li>
                  <li>Há risco de queda em tempestades</li>
                  <li>A copa está muito densa e bloqueia luz</li>
                  <li>Raízes estão danificando calçadas ou estruturas</li>
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
              <p className="text-secondary-foreground/80">
                Nosso serviço completo inclui tudo que você precisa
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {getIncludedItems().map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary-foreground/5"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
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
            </div>

            <div className="max-w-4xl mx-auto">
              {getHowWeDoIt(service.title).map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 mb-6 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    {index < getHowWeDoIt(service.title).length - 1 && (
                      <div className="w-0.5 h-12 bg-primary/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
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
              {REVIEWS.slice(0, 3).map((review, index) => (
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
              <FAQ items={getServiceFAQ(service.title)} variant="light" />
            </div>
          </div>
        </section>

        {/* Related Services */}
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
