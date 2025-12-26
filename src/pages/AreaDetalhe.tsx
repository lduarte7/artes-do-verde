import { useParams, Navigate, Link } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AREAS, SERVICES, REVIEWS, getWhatsAppUrl } from "@/lib/constants";

export default function AreaDetalhePage() {
  const { slug } = useParams();
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) {
    return <Navigate to="/areas-atendidas" replace />;
  }

  const nearbyAreas = AREAS.filter((a) => a.slug !== slug).slice(0, 3);
  const whatsappMessage = `Olá! Gostaria de um orçamento para serviço na ${area.name}.`;

  const areaFAQ = [
    {
      question: `Vocês atendem todos os bairros da ${area.name}?`,
      answer: `Sim, atendemos toda a ${area.name} e região. Alguns dos bairros que mais atendemos: ${area.cities.slice(0, 4).join(", ")}.`,
    },
    {
      question: "Qual o prazo de atendimento na região?",
      answer: "Geralmente agendamos em até 5 dias úteis. Para emergências, temos atendimento em até 24 horas.",
    },
    {
      question: "O orçamento é gratuito?",
      answer: "Sim, realizamos visita técnica e orçamento gratuito em toda a região de Porto Alegre e Região Metropolitana.",
    },
  ];

  return (
    <>
      <SEO
        title={`Poda de Árvores na ${area.name} - Porto Alegre`}
        description={`Serviço de poda e remoção de árvores na ${area.name}. Atendemos ${area.cities.slice(0, 3).join(", ")} e região. Solicite orçamento grátis!`}
        canonical={`/areas-atendidas/${slug}`}
      />

      <Header />
      <WhatsAppButton message={whatsappMessage} />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs
              items={[
                { label: "Áreas Atendidas", href: "/areas-atendidas" },
                { label: area.name },
              ]}
            />

            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground">
                Poda de Árvores na {area.name}
              </h1>
            </div>

            <p className="text-lg text-secondary-foreground/80 max-w-2xl mb-6">
              Atendemos toda a {area.name} com serviços profissionais de poda e remoção de árvores. 
              Equipe local, rápida e com preços justos.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {area.cities.map((city) => (
                <span key={city} className="chip-light">
                  {city}
                </span>
              ))}
            </div>

            <Button size="lg" className="btn-whatsapp" asChild>
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento na {area.name}
              </a>
            </Button>
          </div>
        </section>

        {/* How we serve this area */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Como atendemos a {area.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Orçamento Grátis", desc: "Visita técnica sem compromisso" },
                { title: "Atendimento Rápido", desc: "Agendamos em até 5 dias úteis" },
                { title: "Equipe Local", desc: "Conhecemos bem a região" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-primary/5">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services in area */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4 text-center">
              Serviços na {area.name}
            </h2>
            <p className="text-secondary-foreground/80 text-center max-w-2xl mx-auto mb-12">
              Os serviços mais solicitados na região
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 6).map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Avaliações de clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.slice(0, 3).map((review, index) => (
                <ReviewCard key={index} {...review} variant="light" />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-8 text-center">
              Dúvidas sobre atendimento na {area.name}
            </h2>

            <div className="max-w-3xl mx-auto">
              <FAQ items={areaFAQ} variant="dark" />
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Também atendemos
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {nearbyAreas.map((a) => (
                <Link
                  key={a.slug}
                  to={`/areas-atendidas/${a.slug}`}
                  className="chip hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {a.name}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock
          title={`Precisa de poda na ${area.name}?`}
          whatsappMessage={whatsappMessage}
          showAddress
        />
      </main>

      <Footer />
    </>
  );
}
