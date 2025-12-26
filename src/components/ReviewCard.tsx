import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
  badge?: string;
  variant?: "light" | "dark";
}

export default function ReviewCard({ name, text, rating, badge, variant = "light" }: ReviewCardProps) {
  const isDark = variant === "dark";

  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${
      isDark 
        ? "bg-secondary-foreground/10 hover:bg-secondary-foreground/15" 
        : "bg-card shadow-card hover:shadow-card-hover"
    }`}>
      {/* Quote Icon */}
      <Quote className={`w-8 h-8 mb-4 ${isDark ? "text-primary" : "text-primary/40"}`} />
      
      {/* Review Text */}
      <p className={`text-sm sm:text-base mb-4 line-clamp-4 ${
        isDark ? "text-secondary-foreground/90" : "text-foreground/80"
      }`}>
        "{text}"
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : isDark ? "text-secondary-foreground/30" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isDark ? "bg-primary" : "bg-primary/10"
        }`}>
          <span className={`font-display font-semibold text-sm ${
            isDark ? "text-primary-foreground" : "text-primary"
          }`}>
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className={`font-medium text-sm ${
            isDark ? "text-secondary-foreground" : "text-foreground"
          }`}>
            {name}
          </p>
          {badge && (
            <span className="text-xs text-primary">{badge}</span>
          )}
        </div>
      </div>
    </div>
  );
}
