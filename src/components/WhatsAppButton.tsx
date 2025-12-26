import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  message = "Olá! Gostaria de solicitar um orçamento.", 
  className = "" 
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 
                 bg-primary rounded-full flex items-center justify-center 
                 shadow-glow hover:shadow-glow-lg transition-all duration-300 
                 hover:scale-110 animate-float ${className}`}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
    </a>
  );
}
