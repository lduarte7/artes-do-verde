import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, REVIEWS, FAQ_HOME } from "@/lib/constants";

export default function ServicosPage() {
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 3);

  return (
    <>
      <SEO
        title="Serviços de Poda e Remoção de Árvores"
        description="Conheça todos os nossos serviços: poda, remoção, rebaixamento de copas, limpeza pós-poda, extração de raízes e muito mais. Atendemos Porto Alegre e região."
        canonical="/servicos"
      />

      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Serviços" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">
              Soluções completas em poda e remoção de árvores para residências, condomínios e empresas em Porto Alegre e Região Metropolitana.
            </p>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Requested */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Serviços Mais Pedidos
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Os serviços que nossos clientes mais solicitam
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/servicos/${service.slug}`}
                  className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-display font-semibold text-xl text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/70 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Avaliações de Clientes
              </h2>
            </div>

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
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Dúvidas Frequentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={FAQ_HOME} variant="dark" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock showAddress />
      </main>

      <Footer />
    </>
  );
}
