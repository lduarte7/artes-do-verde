import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { getWhatsAppUrl, getPhoneUrl, BUSINESS_INFO } from "@/lib/constants";

interface CTABlockProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "inline";
  whatsappMessage?: string;
  showAddress?: boolean;
  useShinyButton?: boolean;
}

export default function CTABlock({
  title = "Precisa de um orçamento?",
  description = "Fale conosco agora mesmo e resolva o problema das suas árvores com segurança.",
  variant = "default",
  whatsappMessage = "Olá! Gostaria de solicitar um orçamento.",
  showAddress = false,
  useShinyButton = false,
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
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="p-6 rounded-xl bg-cta text-cta-foreground">
        <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-cta-foreground/70 mb-4">{description}</p>
        <div className="flex flex-col gap-3">
          <Button className="w-full btn-whatsapp" asChild>
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </Button>
          <Button variant="outline" className="w-full border-cta-foreground/20 text-cta-foreground" asChild>
            <a href={getPhoneUrl()}>
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>
        {showAddress && (
          <div className="mt-4 pt-4 border-t border-cta-foreground/20">
            <p className="text-xs text-cta-foreground/60">{BUSINESS_INFO.address.full}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-cta text-cta-foreground">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cta-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-cta-foreground/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {useShinyButton ? (
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-block">
              <ShinyButton>
                Chamar no WhatsApp
              </ShinyButton>
            </a>
          ) : (
            <Button size="lg" className="btn-whatsapp text-base py-6" asChild>
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
