import { Link } from "react-router-dom";
import { ArrowRight, TreeDeciduous, Building, Scissors, Leaf, ArrowDown, Trash2, Home, Pickaxe, Mountain, LucideIcon } from "lucide-react";

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

  return (
    <Link
      to={`/servicos/${slug}`}
      className="group block p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover 
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                     group-hover:bg-primary transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-foreground mb-2 
                    group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {shortDescription}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-primary font-medium text-sm">
        <span>Saiba mais</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
