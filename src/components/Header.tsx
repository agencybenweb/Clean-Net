import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoCleannet from "@/assets/logo-cleannet.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Avant/Après", href: "#avant-apres" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const anchor = href.substring(1); // Remove the #
    
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer vers / puis scroller
      navigate('/', { state: { scrollTo: anchor } });
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.getElementById(anchor);
      if (element) {
        // Petit délai pour s'assurer que le DOM est prêt
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Gérer le scroll après navigation depuis une autre page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const anchor = location.state.scrollTo;
      // Attendre que le composant soit monté
      const timer = setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Nettoyer le state pour éviter de re-scroller
        navigate('/', { replace: true, state: {} });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoCleannet} 
            alt="Clean&Net - Nettoyeurs Professionnels" 
            className="h-28 md:h-32 lg:h-36 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-sm font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-dark mt-2 mx-4 rounded-2xl p-6"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-base font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button variant="hero" size="default" className="mt-4" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
