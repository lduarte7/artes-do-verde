import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  badge?: string;
}

function TestimonialCard({ name, text, rating, badge }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[450px] p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-4">
        <Quote className="w-5 h-5 text-primary/40 flex-shrink-0 mt-1" />
        <p className="text-sm sm:text-base text-foreground/80 line-clamp-4 leading-relaxed">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-muted"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border/30">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <span className="font-display font-semibold text-sm text-primary">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm text-foreground truncate">
            {name}
          </p>
          {badge && (
            <span className="text-xs text-primary font-medium">{badge}</span>
          )}
        </div>
      </div>
    </div>
  );
}

interface TestimonialsMarqueeProps {
  reviews?: typeof REVIEWS;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  showGradient?: boolean;
}

export default function TestimonialsMarquee({
  reviews = REVIEWS,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className = "",
  showGradient = true,
}: TestimonialsMarqueeProps) {
  // Duplicar os reviews múltiplas vezes para criar um loop contínuo perfeito
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  
  const speedClasses = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  };

  const directionClasses = {
    left: "",
    right: "animate-marquee-reverse",
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradientes nas bordas para efeito fade */}
      {showGradient && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </>
      )}
      
      {/* Faixa de testimonials */}
      <div 
        className={`flex gap-6 ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        } ${speedClasses[speed]} ${directionClasses[direction]}`}
      >
        {duplicatedReviews.map((review, index) => (
          <TestimonialCard key={`track1-${index}`} {...review} />
        ))}
      </div>
    </div>
  );
}

// Componente com múltiplas faixas (tracks)
interface TestimonialsMarqueeMultiProps {
  reviews?: typeof REVIEWS;
  tracks?: number;
  className?: string;
}

export function TestimonialsMarqueeMulti({
  reviews = REVIEWS,
  tracks = 2,
  className = "",
}: TestimonialsMarqueeMultiProps) {
  // Dividir as reviews entre as faixas para evitar repetição
  const midPoint = Math.ceil(reviews.length / tracks);
  const trackReviews: Array<typeof REVIEWS> = [];
  
  for (let i = 0; i < tracks; i++) {
    const start = i * midPoint;
    const end = start + midPoint;
    trackReviews.push(reviews.slice(start, end));
  }
  
  // Duplicar os reviews de cada faixa múltiplas vezes para criar um loop contínuo perfeito
  const duplicatedTrackReviews = trackReviews.map(track => [...track, ...track, ...track]);
  
  // Criar diferentes velocidades para cada faixa
  const trackConfigs = [
    { speed: "slow" as const, direction: "left" as const },
    { speed: "normal" as const, direction: "right" as const },
    { speed: "fast" as const, direction: "left" as const },
  ];

  return (
    <div className={`relative overflow-hidden space-y-6 ${className}`}>
      {/* Gradientes nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {Array.from({ length: tracks }).map((_, trackIndex) => {
        const config = trackConfigs[trackIndex % trackConfigs.length];
        const speedClasses = {
          slow: "animate-marquee-slow",
          normal: "animate-marquee",
          fast: "animate-marquee-fast",
        };
        const directionClass = config.direction === "right" ? "animate-marquee-reverse" : "";
        
        // Em telas menores (mobile), mostrar apenas a primeira faixa
        const isHiddenOnMobile = trackIndex > 0 ? "hidden md:block" : "";

        return (
          <div
            key={trackIndex}
            className={`flex gap-6 hover:[animation-play-state:paused] ${speedClasses[config.speed]} ${directionClass} ${isHiddenOnMobile}`}
          >
            {duplicatedTrackReviews[trackIndex]?.map((review, index) => (
              <TestimonialCard key={`track${trackIndex}-${index}`} {...review} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

