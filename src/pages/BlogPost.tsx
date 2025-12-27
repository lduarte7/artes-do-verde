import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ChevronRight, User, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import FAQ from "@/components/FAQ";
import CTABlock from "@/components/CTABlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLOG_POSTS_CONTENT } from "@/lib/content/posts-content";
import { SERVICES, REVIEWS, getWhatsAppUrl, BUSINESS_INFO } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";

// Componente TOC Sidebar (Table of Contents)
function TableOfContentsSidebar({ headings, activeId }: { headings: { id: string; text: string }[]; activeId: string }) {
  if (headings.length < 2) return null;

  return (
    <nav className="hidden xl:block sticky top-28 self-start">
      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/15 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="font-display font-semibold text-sm text-foreground uppercase tracking-wide">
            Neste artigo
          </span>
        </div>
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.id}`}
                className={`
                  block py-2 px-3 text-sm rounded-lg transition-all duration-200
                  ${activeId === heading.id 
                    ? 'bg-primary text-primary-foreground font-medium shadow-sm' 
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }
                `}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Share Widget */}
      <div className="mt-6 p-5 rounded-2xl bg-card border border-border">
        <div className="flex items-center gap-2 mb-3">
          <Share2 className="w-4 h-4 text-muted-foreground" />
          <span className="font-display font-semibold text-sm text-foreground">Compartilhar</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(document.title + ' ' + window.location.href)}`, '_blank')}
            className="flex-1 py-2 px-3 text-xs font-medium rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </button>
          <button 
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="flex-1 py-2 px-3 text-xs font-medium rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
          >
            Copiar Link
          </button>
        </div>
      </div>
    </nav>
  );
}

// Componente CTA Inline
function InlineCTA({ message, variant = "default" }: { message: string; variant?: "default" | "highlight" }) {
  const isHighlight = variant === "highlight";
  
  return (
    <div className={`
      my-10 p-6 md:p-8 rounded-2xl border-2 
      ${isHighlight 
        ? 'bg-gradient-to-br from-primary to-primary/80 border-primary text-primary-foreground' 
        : 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'
      }
    `}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className={`font-display font-semibold text-lg mb-1 ${isHighlight ? 'text-primary-foreground' : 'text-foreground'}`}>
            {isHighlight ? '🌳 Precisa de ajuda profissional?' : '💬 Tem dúvidas sobre sua árvore?'}
          </p>
          <p className={`text-sm ${isHighlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
            Nossa equipe pode avaliar e orientar a melhor solução.
          </p>
        </div>
        <a
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all
            ${isHighlight 
              ? 'bg-white text-primary hover:bg-white/90 shadow-lg' 
              : 'bg-primary text-primary-foreground hover:brightness-110 shadow-md'
            }
          `}
        >
          Falar no WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// Componente de card de post relacionado melhorado
function RelatedPostCard({ post }: { post: typeof BLOG_POSTS_CONTENT[0] }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
        {post.category}
      </span>
      
      <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readingTime}
        </span>
        <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
          Ler artigo
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS_CONTENT.find((p) => p.slug === slug);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const articleRef = useRef<HTMLDivElement>(null);

  // Extrair headings do DOM após renderização
  useEffect(() => {
    if (!articleRef.current) return;

    const extractedHeadings: { id: string; text: string }[] = [];
    const h2Elements = articleRef.current.querySelectorAll('h2');
    
    h2Elements.forEach((el, index) => {
      const text = el.textContent || '';
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim() || `heading-${index}`;
      
      el.id = id;
      extractedHeadings.push({ id, text });
    });

    setHeadings(extractedHeadings);
  }, [post]);

  // Intersection Observer para TOC ativo
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const relatedServices = SERVICES.filter((s) => post.relatedServices.includes(s.slug));
  const relatedPosts = BLOG_POSTS_CONTENT.filter((p) => 
    p.slug !== slug && post.relatedPosts.includes(p.slug)
  ).slice(0, 3);

  // Mais posts para sugestões (excluindo o atual e os relacionados)
  const morePosts = BLOG_POSTS_CONTENT.filter((p) => 
    p.slug !== slug && !post.relatedPosts.includes(p.slug)
  ).slice(0, 2);

  const whatsappMessage = `Olá! Li o artigo "${post.title}" e gostaria de mais informações.`;

  // Schema Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${window.location.origin}/blog/${slug}`,
    },
  };

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${slug}`}
        type="article"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Header />
      <WhatsAppButton message={whatsappMessage} />

      <main className="pt-20 md:pt-24">
        {/* Breadcrumb Bar */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container-custom py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-secondary via-secondary to-secondary/95">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-secondary-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-secondary-foreground/70">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span>Artes do Verde</span>
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-secondary-foreground/30" />
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-secondary-foreground/30" />
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} de leitura
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container-custom">
            <div className="flex gap-12 xl:gap-16">
              {/* Article Content */}
              <article className="flex-1 max-w-3xl mx-auto xl:mx-0">
                {/* Content */}
                <div 
                  ref={articleRef}
                  className="blog-prose"
                >
                  {post.content}

                  {/* CTA Inline no final do conteúdo */}
                  <InlineCTA message={whatsappMessage} variant="highlight" />
                </div>
              </article>

              {/* Sidebar TOC */}
              <aside className="hidden xl:block w-72 shrink-0">
                <TableOfContentsSidebar headings={headings} activeId={activeHeadingId} />
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                    Dúvidas frequentes
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    Perguntas Frequentes
                  </h2>
                </div>
                <FAQ items={post.faq} />
              </div>
            </div>
          </section>
        )}

        {/* Related Posts Section */}
        {(relatedPosts.length > 0 || morePosts.length > 0) && (
          <section className="py-16 md:py-20 bg-background">
            <div className="container-custom">
              <div className="text-center mb-10">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Continue lendo
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  Artigos Relacionados
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Aprofunde seu conhecimento com mais conteúdos sobre poda e cuidados com árvores.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[...relatedPosts, ...morePosts].slice(0, 3).map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Ver todos os artigos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-20 bg-muted/30 border-t border-border">
            <div className="container-custom">
              <div className="text-center mb-10">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  Nossos serviços
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  Serviços Relacionados
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Conheça os serviços que podem ajudar com sua necessidade.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedServices.map((service) => (
                  <ServiceCard key={service.slug} {...service} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary-foreground border border-primary/30 mb-4">
                Depoimentos
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-3">
                O que nossos clientes dizem
              </h2>
              <p className="text-secondary-foreground/70 max-w-xl mx-auto">
                Avaliações reais de clientes atendidos em Porto Alegre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {REVIEWS.slice(0, 3).map((review, index) => (
                <ReviewCard key={index} {...review} variant="dark" />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <CTABlock
          title="Precisa de ajuda profissional?"
          description="Nossa equipe está pronta para ajudar com poda, remoção e cuidados com suas árvores em Porto Alegre."
          whatsappMessage={whatsappMessage}
          showAddress
        />
      </main>

      <Footer />
    </>
  );
}
