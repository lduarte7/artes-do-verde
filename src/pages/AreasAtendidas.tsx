import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AREAS, getWhatsAppUrl, SERVICES } from "@/lib/constants";

export default function AreasAtendidasPage() {
  return (
    <>
      <SEO
        title="Poda de Árvores Porto Alegre e Região | Áreas Atendidas"
        description="Atendemos toda Porto Alegre e Região Metropolitana: Zona Sul, Zona Norte, Centro, Zona Leste, Canoas, Gravataí, Viamão e muito mais."
        canonical="/areas-atendidas"
      />

      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Áreas Atendidas" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              Poda de Árvores em Porto Alegre e Região Metropolitana
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">
              Atendemos residências, condomínios e empresas em Porto Alegre e toda a Região Metropolitana com serviços profissionais de poda e remoção de árvores.
            </p>
          </div>
        </section>

        {/* Main Services Links */}
        <section className="py-8 section-light">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground font-medium">Serviços principais:</span>
              {SERVICES.filter(s => s.featured).slice(0, 3).map((service) => (
                <Link
                  key={service.slug}
                  to={`/servicos/${service.slug}`}
                  className="chip hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm text-muted-foreground font-medium">Áreas destaque:</span>
              {AREAS.slice(0, 3).map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas-atendidas/${area.slug}`}
                  className="chip hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AREAS.map((area) => (
                <div
                  key={area.slug}
                  className="p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display font-semibold text-xl text-foreground">
                      {area.name}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.cities.map((city) => (
                      <span key={city} className="chip text-xs">
                        {city}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/areas-atendidas/${area.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                  >
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not listed area */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
              Não encontrou sua região?
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Atendemos outras localidades! Entre em contato para consultar disponibilidade na sua área.
            </p>
            <Button size="lg" className="btn-whatsapp" asChild>
              <a
                href={getWhatsAppUrl("Olá! Quero saber se vocês atendem na minha região.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar minha região
              </a>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <CTABlock showAddress />
      </main>

      <Footer />
    </>
  );
}
