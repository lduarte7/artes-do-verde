import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { BUSINESS_INFO, getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";
import logoImage from "@/assets/logo-verde_transparente.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/areas-atendidas", label: "Áreas Atendidas" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Função para verificar qual seção está abaixo do header
    const checkSectionBelow = () => {
      const headerHeight = 100; // Altura aproximada do header
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Verificar elementos na posição do header (centro da tela, logo abaixo do header)
      let foundLight: boolean | null = null;
      
      try {
        const elements = document.elementsFromPoint(
          window.innerWidth / 2,
          headerHeight + 20
        );
        
        // Procurar por seções com classes section-light ou section-dark
        for (const element of elements) {
          // Verificar o elemento e seus pais
          let currentElement: Element | null = element;
          while (currentElement && currentElement !== document.body) {
            if (currentElement.classList.contains("section-light")) {
              foundLight = true;
              break;
            }
            if (currentElement.classList.contains("section-dark")) {
              foundLight = false;
              break;
            }
            // Verificar se é o Hero (sem classe específica mas com fundo escuro)
            if (currentElement.classList.contains("min-h-screen") && scrollY < viewportHeight * 0.9) {
              foundLight = false;
              break;
            }
            currentElement = currentElement.parentElement;
          }
          if (foundLight !== null) break;
        }
      } catch (e) {
        // Fallback se elementsFromPoint falhar
      }
      
      // Se não encontrou pela posição, verificar seções por scroll
      if (foundLight === null) {
        const sections = document.querySelectorAll("section");
        let closestSection: Element | null = null;
        let closestDistance = Infinity;
        
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const headerBottom = headerHeight;
          
          // Se a seção está próxima ao header
          if (rect.top <= headerBottom + 100 && rect.bottom >= headerBottom - 50) {
            const distance = Math.abs(rect.top - headerBottom);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = section;
            }
          }
        });
        
        if (closestSection) {
          foundLight = closestSection.classList.contains("section-light");
        } else {
          // Se ainda não encontrou, assumir escuro (Hero ou início)
          foundLight = scrollY >= viewportHeight * 0.5;
        }
      }
      
      // Garantir que foundLight seja sempre um boolean
      setIsLightSection(foundLight ?? false);
    };

    // Verificar inicialmente após um pequeno delay para garantir que o DOM está pronto
    const initialCheck = setTimeout(checkSectionBelow, 100);

    // Verificar ao rolar com throttle
    let ticking = false;
    const handleScrollCheck = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkSectionBelow();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollCheck, { passive: true });
    window.addEventListener("resize", checkSectionBelow);

    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener("scroll", handleScrollCheck);
      window.removeEventListener("resize", checkSectionBelow);
    };
  }, [location.pathname]);

  // Determinar o modo do header
  const isLightMode = isLightSection;
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLightMode
            ? "bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-secondary/98 backdrop-blur-md border-b border-primary/30 shadow-lg"
          : isLightMode
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
          : "bg-secondary/95 backdrop-blur-sm border-b border-primary/20"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logoImage}
              alt={`${BUSINESS_INFO.name} - Logo da empresa especializada em poda e remoção de árvores em Porto Alegre`}
              title={`${BUSINESS_INFO.name} - Logo`}
              className="h-16 lg:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  title={`Ir para ${link.label}`}
                  className={`group relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary"
                      : isLightMode
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-secondary-foreground/70 hover:text-secondary-foreground"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg -z-0" />
                  )}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              asChild
              className={isLightMode
                ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                : "text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
              }
            >
              <a
                href={getPhoneUrl()}
                title={`Ligar para ${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">{BUSINESS_INFO.phone}</span>
              </a>
            </Button>
            <Button size="sm" asChild className="btn-whatsapp">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir WhatsApp para contato"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
                <span className="lg:hidden">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`lg:hidden p-2 hover:text-primary transition-colors duration-200 ${
                  isLightMode ? "text-foreground" : "text-secondary-foreground"
                }`}
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className={`w-[85vw] sm:max-w-sm border-l ${
              isLightMode 
                ? "bg-background border-border" 
                : "bg-secondary border-primary/20"
            }`}>
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <SheetClose asChild>
                  <Link
                    to="/"
                    className={`flex items-center gap-2 mb-8 pb-6 border-b ${
                      isLightMode ? "border-border" : "border-primary/20"
                    }`}
                  >
                    <img
                      src={logoImage}
                      alt={`${BUSINESS_INFO.name} - Logo`}
                      className="h-16 w-auto"
                    />
                  </Link>
                </SheetClose>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <SheetClose key={link.href} asChild>
                        <Link
                          to={link.href}
                          title={`Ir para ${link.label}`}
                          className={`relative px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-primary/20 text-primary"
                              : isLightMode
                              ? "text-foreground/80 hover:bg-muted hover:text-foreground"
                              : "text-secondary-foreground/80 hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-1 bg-primary rounded-r-full" />
                          )}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Mobile CTAs */}
                <div className={`flex flex-col gap-3 pt-6 mt-auto border-t ${
                  isLightMode ? "border-border" : "border-primary/20"
                }`}>
                  <Button
                    variant="outline"
                    className={isLightMode
                      ? "w-full border-border text-foreground hover:bg-muted"
                      : "w-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
                    }
                    asChild
                  >
                    <a
                      href={getPhoneUrl()}
                      title={`Ligar para ${BUSINESS_INFO.phone}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Ligar
                    </a>
                  </Button>
                  <Button className="w-full btn-whatsapp" asChild>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir WhatsApp para contato"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
