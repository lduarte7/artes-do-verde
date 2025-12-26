import { Shield, Users, Leaf, Award } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS } from "@/lib/constants";

const values = [
  { icon: Shield, title: "Segurança", desc: "Prioridade absoluta em todos os serviços" },
  { icon: Users, title: "Profissionalismo", desc: "Equipe treinada e comprometida" },
  { icon: Leaf, title: "Respeito à Natureza", desc: "Preservamos sempre que possível" },
  { icon: Award, title: "Qualidade", desc: "Trabalho bem feito, clientes satisfeitos" },
];

export default function SobrePage() {
  return (
    <>
      <SEO title="Sobre Nós" description="Conheça a Artes Do Verde: empresa especializada em poda e remoção de árvores em Porto Alegre. Anos de experiência e clientes satisfeitos." canonical="/sobre" />
      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Sobre" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">Sobre a Artes Do Verde</h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">Especialistas em poda e remoção de árvores em Porto Alegre e Região Metropolitana.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-muted-foreground">A Artes Do Verde é uma empresa especializada em serviços de poda e remoção de árvores, atuando há anos em Porto Alegre e Região Metropolitana. Nossa equipe é formada por profissionais experientes e equipados para realizar trabalhos com segurança e qualidade.</p>
              <p className="text-muted-foreground">Atendemos residências, condomínios, escolas e empresas, sempre com foco na satisfação do cliente e no respeito às normas técnicas e ambientais. A limpeza completa e o descarte correto dos resíduos estão incluídos em todos os nossos serviços.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-8 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="text-center p-6 rounded-xl bg-secondary-foreground/5">
                  <v.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">{v.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">O que dizem nossos clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.slice(0, 3).map((r, i) => <ReviewCard key={i} {...r} variant="light" />)}
            </div>
          </div>
        </section>

        <CTABlock showAddress />
      </main>
      <Footer />
    </>
  );
}
