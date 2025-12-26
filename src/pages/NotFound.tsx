import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-20 section-light">
        <div className="container-custom text-center py-20">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">A página que você procura não existe ou foi movida.</p>
          <Button asChild>
            <Link to="/"><Home className="w-4 h-4 mr-2" /> Voltar ao início</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
