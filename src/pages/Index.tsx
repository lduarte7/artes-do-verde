import { Link } from "react-router-dom";
import { ExternalLink, Shield, Clock, Sparkles, Users, Heart, CheckCircle, ClipboardCheck, Hammer, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { SERVICES, REVIEWS, AREAS, FAQ_HOME, BUSINESS_INFO, getWhatsAppUrl } from "@/lib/constants";
import podaTecnicaImg from "@/assets/poda-tecnica-arvores-urbanas-artes-do-verde.jpg";
import podaCestoAereoImg from "@/assets/poda-arvores-cesto-aereo-rede-eletrica-porto-alegre.jpg";
import podaAlturaImg from "@/assets/poda-em-altura-arvore-grande-porto-alegre.jpg";
import rebaixamentoCopaImg from "@/assets/rebaixamento-de-copa-poda-estrutural-arvore.jpg";
import remocaoTransporteImg from "@/assets/remocao-de-arvores-transporte-de-toras.jpg";
import limpezaPosPodaImg from "@/assets/limpeza-pos-poda-corte-de-arvore.jpg";
import corteTroncoImg from "@/assets/corte-de-tronco-motosserra-seguranca.jpg";

// Portfolio items
const portfolioItems = [
  { tag: "Poda", title: "Poda em residência", image: podaTecnicaImg },
  { tag: "Remoção", title: "Remoção de árvore de risco", image: remocaoTransporteImg },
  { tag: "Condomínio", title: "Manutenção em condomínio", image: podaCestoAereoImg },
  { tag: "Pós-temporal", title: "Emergência após temporal", image: limpezaPosPodaImg },
  { tag: "Poda", title: "Rebaixamento de copa", image: rebaixamentoCopaImg },
  { tag: "Remoção", title: "Remoção com guindaste", image: podaAlturaImg },
];

// Why choose us items
const whyChooseUs = [
  { icon: Shield, title: "Segurança real", description: "Equipamentos e técnicas profissionais em todos os serviços" },
  { icon: Clock, title: "Pontualidade", description: "Chegamos no horário combinado, sem atrasos" },
  { icon: Sparkles, title: "Limpeza incluída", description: "Retirada e descarte de resíduos no mesmo dia" },
  { icon: Users, title: "Atendimento especializado", description: "Experiência em condomínios e empresas" },
  { icon: Heart, title: "Preservar quando possível", description: "Priorizamos a saúde da árvore sempre que viável" },
  { icon: CheckCircle, title: "Confiança", description: "Clientes satisfeitos há anos na região" },
];

// How it works steps
const howItWorks = [
  { icon: ClipboardCheck, step: 1, title: "Avaliação", description: "Visita técnica gratuita para avaliar a situação e fornecer orçamento" },
  { icon: Hammer, step: 2, title: "Execução segura", description: "Equipe treinada realiza o serviço com todos os equipamentos de segurança" },
  { icon: Truck, step: 3, title: "Limpeza e descarte", description: "Retirada completa dos resíduos no mesmo dia" },
];

const Index = () => {
  return (
    <>
      <SEO 
        title="Poda de Árvores Porto Alegre | Atendimento Rápido"
        description="Poda e remoção de árvores em Porto Alegre. Atendimento rápido, equipe equipada e limpeza no mesmo dia. Orçamento grátis!"
        canonical="/"
      />
      <LocalBusinessSchema />
      
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero */}
        <Hero />

        {/* Quick Reviews */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                O que dizem sobre nossa poda de árvores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Atendemos Porto Alegre e região com excelência há anos
              </p>
            </div>

            <div className="mb-8">
              <TestimonialsMarquee 
                reviews={REVIEWS.slice(0, 8)}
                speed="normal"
                direction="left"
                pauseOnHover={true}
              />
            </div>

            <div className="text-center">
              <a
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Ver mais avaliações no Google <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Serviços de poda em Porto Alegre
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Soluções completas para cuidar das suas árvores com segurança
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {SERVICES.filter(s => s.featured).map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
                <Link to="/servicos">
                  Ver todos os serviços
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Como Funciona
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Processo simples e transparente do início ao fim
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                    <item.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="chip-light mb-4">Compromisso com excelência</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Por que nos contratar?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-foreground/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <InteractiveSelector 
              items={portfolioItems}
              title="Trabalhos Recentes"
              description="Alguns dos nossos serviços realizados em Porto Alegre e região"
            />
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Áreas Atendidas
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Atendemos toda Porto Alegre e Região Metropolitana
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {AREAS.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas-atendidas/${area.slug}`}
                  className="chip-light"
                >
                  {area.name}
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="btn-whatsapp">
                <a href={getWhatsAppUrl("Olá! Quero saber se vocês atendem na minha região.")} target="_blank" rel="noopener noreferrer">
                  Consulte sua região
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={FAQ_HOME} variant="light" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock showAddress />
      </main>

      <Footer />
    </>
  );
};

export default Index;
