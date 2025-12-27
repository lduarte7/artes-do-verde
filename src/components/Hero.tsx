import { MessageCircle, Shield, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/constants";
import heroImage from "@/assets/hero-tree-work.jpg";
import { motion } from "framer-motion";

const badges = [
  { icon: Clock, text: "Atendimento rápido", delay: 0.1 },
  { icon: Shield, text: "Equipe equipada", delay: 0.2 },
  { icon: Sparkles, text: "Limpeza e descarte", delay: 0.3 },
];

const features = [
  "Orçamento gratuito",
  "Atendimento no mesmo dia",
  "Equipe certificada",
  "Limpeza completa incluída",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-label="Equipe Artes Do Verde realizando poda de árvore em altura em Porto Alegre"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(135deg, hsla(132, 100%, 8%, 0.95) 0%, hsla(132, 100%, 12%, 0.9) 100%)" 
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 animate-pulse" />
      </div>

      {/* Floating orbs for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-custom py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Especialistas em Poda e Remoção
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Poda de Árvores
              </span>
              <span className="block text-white">em Porto Alegre</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            >
              Especialistas em <strong className="text-yellow-300">poda de árvores</strong>, remoção e serviços de jardinagem em Porto Alegre e Região Metropolitana. 
              Atendimento rápido com limpeza completa no mesmo dia.
            </motion.p>

            {/* Features List */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                size="lg" 
                className="btn-whatsapp text-base py-6 px-8 group" 
                asChild
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Fale com um profissional
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + badge.delay, duration: 0.4 }}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
                >
                  <badge.icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-yellow-300/20 flex items-center justify-center mx-auto mb-4 animate-float">
                      <Shield className="w-10 h-10 text-yellow-300" />
                    </div>
                    <p className="text-white/70 text-sm">Serviço profissional</p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">500+</div>
                    <div className="text-xs text-white/70">Clientes</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">10+</div>
                    <div className="text-xs text-white/70">Anos</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">100%</div>
                    <div className="text-xs text-white/70">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
