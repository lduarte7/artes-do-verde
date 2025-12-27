import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS_INFO, getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";

export default function ContatoPage() {
  return (
    <>
      <SEO 
        title="Contato | Poda de Árvores Porto Alegre | Orçamento Grátis" 
        description="Entre em contato para solicitar orçamento de poda e remoção de árvores em Porto Alegre. WhatsApp, telefone e endereço." 
        canonical="/contato" 
      />
      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Contato" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">Contato | Poda de Árvores Porto Alegre</h1>
            <p className="text-lg text-secondary-foreground/80">Fale conosco e solicite seu orçamento gratuito.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">{BUSINESS_INFO.fullName}</p>
                      <p className="text-muted-foreground">{BUSINESS_INFO.address.full}</p>
                      <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">Ver no Google Maps →</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <a href={getPhoneUrl()} className="text-foreground hover:text-primary">{BUSINESS_INFO.phone}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Seg - Sáb: 7h às 18h</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="btn-whatsapp" asChild>
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={getPhoneUrl()}><Phone className="w-5 h-5" /> Ligar agora</a>
                  </Button>
                </div>
              </div>

              <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address.full)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização da ${BUSINESS_INFO.name} - ${BUSINESS_INFO.address.full}`}
                  aria-label={`Mapa do Google Maps mostrando a localização da ${BUSINESS_INFO.name} em ${BUSINESS_INFO.address.full}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
