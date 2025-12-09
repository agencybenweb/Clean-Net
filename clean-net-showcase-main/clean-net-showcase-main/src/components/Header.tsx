import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoCleannet from "@/assets/logo-cleannet.png";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Avant/Après", href: "#avant-apres" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <a href="#accueil" className="flex items-center">
          <img 
            src={logoCleannet} 
            alt="Clean&Net - Nettoyeurs Professionnels" 
            className="h-28 md:h-32 lg:h-36 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Demander un devis</a>
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-dark-foreground/80 hover:text-cleannet-green transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="default" className="mt-4" asChild>
              <a href="#contact">Demander un devis</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
