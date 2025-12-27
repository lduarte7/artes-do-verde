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
      <SEO 
        title="Sobre a Artes Do Verde | Poda de Árvores em Porto Alegre" 
        description="Conheça a Artes Do Verde: empresa especializada em poda e remoção de árvores em Porto Alegre. Anos de experiência e clientes satisfeitos." 
        canonical="/sobre" 
      />
      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Sobre" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">Sobre a Artes Do Verde: Poda e Remoção em Porto Alegre</h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">Especialistas em poda e remoção de árvores em Porto Alegre e Região Metropolitana.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A Artes do Verde atua com compromisso, responsabilidade e excelência na prestação de serviços de poda e remoção de vegetação.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Somos especializados em poda, remoção e manejo arbóreo em áreas públicas e privadas, atendendo empresas, condomínios, escolas e residências. Contamos com infraestrutura completa, incluindo guindastes, caminhões e equipamentos adequados para cada tipo de operação. Todas as nossas motosserras são regularizadas e autorizadas pelo Ibama, assegurando conformidade técnica e legal em cada etapa do serviço.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A Artes do Verde é credenciada junto à SMAM e oferece consultoria e licenciamento ambiental, garantindo que cada intervenção seja realizada de acordo com as normas ambientais vigentes e com total responsabilidade.
                </p>
              </div>

              {/* Imagem */}
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Equipe Artes Do Verde especializada em poda e remoção de árvores em Porto Alegre" 
                  title="Equipe Artes Do Verde"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us - E-E-A-T */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-8 text-center">Por que confiar na Artes Do Verde</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="p-6 rounded-xl bg-secondary-foreground/5">
                <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">Equipe Treinada</h3>
                <p className="text-secondary-foreground/70 text-sm">Profissionais qualificados e experientes em poda e remoção de árvores, com conhecimento técnico e segurança.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary-foreground/5">
                <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">Técnicas Seguras</h3>
                <p className="text-secondary-foreground/70 text-sm">Utilizamos métodos profissionais e equipamentos de segurança certificados em todos os serviços.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary-foreground/5">
                <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">Atendimento a Condomínios e Empresas</h3>
                <p className="text-secondary-foreground/70 text-sm">Experiência comprovada em trabalhos corporativos, com documentação completa e planejamento adequado.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary-foreground/5">
                <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">Compromisso com Limpeza e Descarte</h3>
                <p className="text-secondary-foreground/70 text-sm">Garantimos limpeza completa e descarte adequado de todos os resíduos, seguindo normas ambientais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Nossos Valores</h2>
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
