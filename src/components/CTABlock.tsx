import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, getPhoneUrl, BUSINESS_INFO } from "@/lib/constants";

interface CTABlockProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "inline";
  whatsappMessage?: string;
  showAddress?: boolean;
}

export default function CTABlock({
  title = "Precisa de um orçamento?",
  description = "Fale conosco agora mesmo e resolva o problema das suas árvores com segurança.",
  variant = "default",
  whatsappMessage = "Olá! Gostaria de solicitar um orçamento.",
  showAddress = false,
}: CTABlockProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-primary/10 border border-primary/20">
        <div className="flex-1">
          <p className="font-display font-semibold text-foreground">{title}</p>
        </div>
        <div className="flex gap-3">
          <Button size="sm" className="btn-whatsapp" asChild>
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={getPhoneUrl()}>
              <Phone className="w-4 h-4" />
              Ligar
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="p-6 rounded-xl bg-secondary text-secondary-foreground">
        <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-secondary-foreground/70 mb-4">{description}</p>
        <div className="flex flex-col gap-3">
          <Button className="w-full btn-whatsapp" asChild>
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </Button>
          <Button variant="outline" className="w-full border-secondary-foreground/20 text-secondary-foreground" asChild>
            <a href={getPhoneUrl()}>
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>
        {showAddress && (
          <div className="mt-4 pt-4 border-t border-secondary-foreground/20">
            <p className="text-xs text-secondary-foreground/60">{BUSINESS_INFO.address.full}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="btn-whatsapp text-base py-6" asChild>
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base py-6 border-secondary-foreground/20 text-secondary-foreground"
            asChild
          >
            <a href={getPhoneUrl()}>
              <Phone className="w-5 h-5" />
              Ligar agora
            </a>
          </Button>
        </div>
        {showAddress && (
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 max-w-md mx-auto">
            <p className="text-secondary-foreground/70 text-sm">{BUSINESS_INFO.address.full}</p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
            >
              Ver no Google Maps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
