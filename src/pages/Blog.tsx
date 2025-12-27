import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import { BLOG_POSTS_CONTENT } from "@/lib/content/posts-content";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog Poda de Árvores | Porto Alegre e Região"
        description="Artigos e dicas sobre poda de árvores, remoção, legislação e cuidados. Informação de qualidade para Porto Alegre e região."
        canonical="/blog"
      />
      <Header />
      <WhatsAppButton />

      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-16 section-dark">
          <div className="container-custom">
            <Breadcrumbs items={[{ label: "Blog" }]} />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary-foreground mb-4">Blog: Poda de Árvores em Porto Alegre (dicas práticas)</h1>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl">Dicas, orientações e informações sobre poda e cuidados com árvores em Porto Alegre e região.</p>
          </div>
        </section>

        <section className="py-8 section-light">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <span key={cat} className="chip">{cat}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS_CONTENT.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
