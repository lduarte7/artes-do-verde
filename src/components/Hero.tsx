import { Phone, MessageCircle, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";
import heroImage from "@/assets/hero-tree-work.jpg";

const badges = [
  { icon: Clock, text: "Atendimento rápido" },
  { icon: Shield, text: "Equipe equipada" },
  { icon: Sparkles, text: "Limpeza e descarte" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(135deg, hsla(132, 100%, 13%, 0.9) 0%, hsla(127, 69%, 26%, 0.75) 100%)" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight animate-fade-in">
            Poda e Remoção de Árvores com{" "}
            <span className="text-primary">Segurança</span> e{" "}
            <span className="text-primary">Rapidez</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-secondary-foreground/90 mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Equipe especializada em Porto Alegre e Região Metropolitana. 
            Atendemos residências, condomínios e empresas com limpeza completa no mesmo dia.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button 
              size="lg" 
              className="btn-whatsapp text-base py-6" 
              asChild
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-call text-base py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" 
              asChild
            >
              <a href={getPhoneUrl()}>
                <Phone className="w-5 h-5" />
                Ligar agora
              </a>
            </Button>
          </div>

          {/* Badges */}
          <div 
            className="flex flex-wrap gap-3 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="chip-light"
              >
                <badge.icon className="w-4 h-4 mr-2" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
