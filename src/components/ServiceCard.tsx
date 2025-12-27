import { Link } from "react-router-dom";
import { ArrowRight, TreeDeciduous, Building, Scissors, Leaf, ArrowDown, Trash2, Home, Pickaxe, Mountain, LucideIcon } from "lucide-react";

// Importar imagens
import remocaoArvoreImg from "@/assets/remocao-arvore.jpg";
import podaEscolaImg from "@/assets/poda-escola.jpg";
import podaArvoreImg from "@/assets/poda-arvore.jpg";
import corteGramaImg from "@/assets/corte-grama.jpg";
import rebaixamentoCopaImg from "@/assets/rebaixamento-copa.jpg";
import limpezaPosPodaImg from "@/assets/limpeza-pos-poda.jpg";
import podaCondominioImg from "@/assets/poda-condominio.jpg";
import extracaoRaizesImg from "@/assets/extracao-raizes.jpg";
import servicosAlturaImg from "@/assets/servicos-altura.jpg";

const iconMap: Record<string, LucideIcon> = {
  TreeDeciduous,
  Building,
  Scissors,
  Leaf,
  ArrowDown,
  Trash2,
  Home,
  Pickaxe,
  Mountain,
};

const imageMap: Record<string, string> = {
  "remocao-arvore.jpg": remocaoArvoreImg,
  "poda-escola.jpg": podaEscolaImg,
  "poda-arvore.jpg": podaArvoreImg,
  "corte-grama.jpg": corteGramaImg,
  "rebaixamento-copa.jpg": rebaixamentoCopaImg,
  "limpeza-pos-poda.jpg": limpezaPosPodaImg,
  "poda-condominio.jpg": podaCondominioImg,
  "extracao-raizes.jpg": extracaoRaizesImg,
  "servicos-altura.jpg": servicosAlturaImg,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image?: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({ 
  slug, 
  title, 
  shortDescription, 
  icon, 
  image,
  variant = "default" 
}: ServiceCardProps) {
  const Icon = iconMap[icon] || TreeDeciduous;

  if (variant === "compact") {
    return (
      <Link
        to={`/servicos/${slug}`}
        className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-card 
                   hover:shadow-card-hover transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 
                       group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {title}
          </h3>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
      </Link>
    );
  }

  // Carregar imagem do mapeamento
  const imageSrc = image ? imageMap[image] : undefined;

  // Criar textos alt e title descritivos para cada serviço
  const getImageAlt = () => {
    const altTexts: Record<string, string> = {
      "remocao-arvore.jpg": `Equipe da Artes Do Verde realizando remoção segura de árvore em Porto Alegre. ${title} - ${shortDescription}`,
      "poda-escola.jpg": `Profissional realizando poda de árvores em ambiente escolar ou corporativo. ${title} - ${shortDescription}`,
      "poda-arvore.jpg": `Técnico especializado realizando poda técnica de árvore com equipamentos de segurança. ${title} - ${shortDescription}`,
      "corte-grama.jpg": `Serviço de corte e manutenção de gramado realizado pela Artes Do Verde. ${title} - ${shortDescription}`,
      "rebaixamento-copa.jpg": `Trabalho de rebaixamento de copa de árvore realizado por profissionais. ${title} - ${shortDescription}`,
      "limpeza-pos-poda.jpg": `Limpeza completa após serviço de poda, com retirada de todos os resíduos. ${title} - ${shortDescription}`,
      "poda-condominio.jpg": `Serviço de poda de árvores em condomínio realizado pela Artes Do Verde. ${title} - ${shortDescription}`,
      "extracao-raizes.jpg": `Extração de raízes e tocos realizada por equipe especializada. ${title} - ${shortDescription}`,
      "servicos-altura.jpg": `Trabalho em altura realizado com técnicas de rapel e escalada profissional. ${title} - ${shortDescription}`,
    };
    return altTexts[image || ""] || `${title} - ${shortDescription} | Artes Do Verde - Poda e Remoção de Árvores em Porto Alegre`;
  };

  const getImageTitle = () => {
    return `${title} | Artes Do Verde - ${shortDescription}`;
  };

  return (
    <Link
      to={`/servicos/${slug}`}
      className="group block overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={getImageAlt()}
            title={getImageTitle()}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <Icon className="w-16 h-16 text-primary/40" />
          </div>
        )}
        
        {/* Arrow Icon Circle - Top Right */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm 
                       flex items-center justify-center shadow-lg group-hover:bg-primary 
                       group-hover:text-primary-foreground transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 
                      group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground flex-1">
          {shortDescription}
        </p>
      </div>
    </Link>
  );
}
