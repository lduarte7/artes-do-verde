import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, REVIEWS, FAQ_HOME } from "@/lib/constants";
import { BLOG_POSTS_CONTENT } from "@/lib/content/posts-content";

export default function ServicosPage() {
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 3);

  return (
    <>
      <SEO
        title="Poda de Árvores Porto Alegre | Todos os Serviços"
        description="Poda, remoção, rebaixamento e mais. Atendimento rápido em Porto Alegre com limpeza inclusa. Veja serviços e peça orçamento grátis!"
        canonical="/servicos"
      />

      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Serviços" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">
              Serviços de Poda e Remoção de Árvores em Porto Alegre
            </h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">
              Soluções completas em poda e remoção de árvores para residências, condomínios e empresas em Porto Alegre e Região Metropolitana.
            </p>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Most Requested */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Serviços de Poda Mais Solicitados em Porto Alegre
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Os serviços que nossos clientes mais solicitam
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/servicos/${service.slug}`}
                  className="group p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-display font-semibold text-xl text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-foreground/70 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Avaliações de quem contratou poda e remoção
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.slice(0, 3).map((review, index) => (
                <ReviewCard key={index} {...review} variant="light" />
              ))}
            </div>
          </div>
        </section>

        {/* Learn Before Hiring */}
        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Aprenda antes de contratar
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Artigos úteis para entender melhor sobre poda e remoção de árvores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {BLOG_POSTS_CONTENT.filter(p => 
                ["poda-ou-remocao-de-arvores-porto-alegre", "permitido-podar-arvores-porto-alegre", "quanto-custa-poda-de-arvore-porto-alegre"].includes(p.slug)
              ).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all"
                >
                  <span className="chip text-xs mb-3">{post.category}</span>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-dark">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Dúvidas sobre poda de árvores em Porto Alegre
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={FAQ_HOME} variant="dark" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock showAddress />
      </main>

      <Footer />
    </>
  );
}
