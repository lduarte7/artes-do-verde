import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { BUSINESS_INFO, getPhoneUrl, SERVICES } from "@/lib/constants";
import logoImage from "@/assets/logo-verde_transparente.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt={`${BUSINESS_INFO.name} - Logo da empresa especializada em poda e remoção de árvores em Porto Alegre`}
                title={`${BUSINESS_INFO.name} - Logo`}
                className="h-10 md:h-[88px] w-auto"
              />
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Poda e remoção de árvores com segurança e profissionalismo em Porto Alegre e Região Metropolitana.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/servicos/${service.slug}`}
                    title={`Ver detalhes do serviço ${service.title}`}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/servicos"
                  title="Ver todos os serviços"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" title="Sobre a Artes Do Verde" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/areas-atendidas" title="Áreas atendidas em Porto Alegre" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Áreas Atendidas
                </Link>
              </li>
              <li>
                <Link to="/blog" title="Blog sobre poda de árvores" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" title="Entre em contato conosco" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver localização no Google Maps"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    Ver no Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={getPhoneUrl()}
                  title={`Ligar para ${BUSINESS_INFO.phone}`}
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/70">
                  Seg - Sáb: 7h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.fullName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
              <Link to="/politica-privacidade" title="Política de Privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link to="/termos-uso" title="Termos de Uso" className="hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
