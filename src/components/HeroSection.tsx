import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cleaning.jpg";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-surface"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Nettoyage professionnel"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/80 via-dark-surface/60 to-dark-surface" />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cleannet-green/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cleannet-blue/20 rounded-full blur-3xl animate-glow-pulse animation-delay-600" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-tight text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-cleannet-green bg-cleannet-green/10 rounded-full border border-cleannet-green/20">
            Clermont-Ferrand · 63100
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-foreground mb-6 tracking-tight"
        >
          <span className="text-cleannet-green">Clean</span>
          <span className="text-cleannet-blue">&</span>
          <span>Net</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-light text-dark-foreground/80">
            Nettoyeurs Professionnels
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-dark-foreground/60 max-w-2xl mx-auto mb-10 font-light"
        >
          Canapés — Matelas — Moquettes — Bureaux — Maisons & Appartements
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="tel:+33752471618">
              <Phone className="mr-2" size={18} />
              Nous contacter
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - positioned outside content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-dark-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-cleannet-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
