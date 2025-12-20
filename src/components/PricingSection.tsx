import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BedDouble, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const pricingItems = [
  {
    service: "Canapé 2 ou 3 places",
    price: "70 €",
    originalPrice: "75 €",
    features: ["Nettoyage en profondeur", "Élimination des taches", "Formule anti-acariens"],
  },
  {
    service: "Canapé 4 ou 5 places",
    price: "80 €",
    originalPrice: "85 €",
    features: ["Nettoyage complet", "Traitement anti-acariens", "Séchage rapide"],
  },
  {
    service: "Fauteuil",
    price: "50 €",
    originalPrice: "60 €",
    features: ["Nettoyage professionnel", "Formule anti-acariens", "Désodorisation"],
  },
  {
    service: "Matelas 1 place",
    price: "60 €",
    features: ["Désinfection UV", "Formule anti-acariens", "Fraîcheur garantie"],
  },
  {
    service: "Matelas 2 places",
    price: "À partir de 80 €",
    features: ["Désinfection UV", "Formule anti-acariens", "Élimination allergènes"],
  },
  {
    service: "Moquette",
    price: "À partir de 6 €/m²",
    features: ["Shampooing professionnel", "Extraction puissante", "Ravivage couleurs"],
  },
];

const matelasDetails = {
  description: "Nettoyage en profondeur du matelas pour éliminer acariens, bactéries, taches et odeurs. Formule anti-acariens incluse pour un couchage plus sain.",
  pricing: [
    { label: "Matelas 1 place", price: "60 €" },
    { label: "Matelas 2 places (140)", price: "80 €" },
    { label: "Matelas 2 places (160)", price: "90 €" },
    { label: "Matelas 2 places (180)", price: "100 €" },
  ],
};

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMatelasModal, setShowMatelasModal] = useState(false);

  return (
    <section id="tarifs" className="section-padding bg-[hsl(0,0%,5%)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(102,81%,60%,0.1)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(204,100%,39%,0.1)] rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[hsl(102,81%,60%)] bg-[hsl(102,81%,60%,0.1)] rounded-full border border-[hsl(102,81%,60%,0.2)]">
            Tarifs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,97%)] mb-6">
            Des prix transparents
          </h2>
          <p className="text-lg text-[hsl(0,0%,97%,0.6)] max-w-2xl mx-auto">
            Découvrez nos tarifs compétitifs. Devis gratuit et personnalisé 
            pour les prestations sur mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingItems.map((item, index) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="backdrop-blur-xl border border-[hsl(0,0%,100%,0.1)] bg-[hsl(0,0%,10%,0.7)] rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-2">{item.service}</h3>
              <div className="mb-4">
                {item.originalPrice && (
                  <p className="text-lg text-red-500 line-through mb-1">
                    {item.originalPrice}
                  </p>
                )}
                {item.service === "Matelas 2 places" ? (
                  <button
                    onClick={() => setShowMatelasModal(true)}
                    className="flex items-center gap-2 text-2xl font-bold text-[hsl(102,81%,60%)] hover:text-[hsl(102,81%,70%)] transition-colors cursor-pointer underline decoration-dotted group"
                  >
                    {item.price}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Hand className="w-4 h-4 text-[hsl(102,81%,60%)] group-hover:text-[hsl(102,81%,70%)] transition-colors" />
                    </motion.div>
                  </button>
                ) : (
                  <p className="text-2xl font-bold text-[hsl(102,81%,60%)]">{item.price}</p>
                )}
              </div>
              <ul className="space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[hsl(0,0%,97%,0.7)]">
                    <Check className="w-4 h-4 text-[hsl(102,81%,60%)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[hsl(0,0%,97%,0.6)] mb-6">
            Bureaux, maisons, fin de chantier : <span className="text-[hsl(0,0%,97%)]">devis sur mesure</span>
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">
              Obtenir un devis immédiat
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Modal pour les détails des matelas */}
      <Dialog open={showMatelasModal} onOpenChange={setShowMatelasModal}>
        <DialogContent className="max-w-2xl bg-[hsl(0,0%,10%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[hsl(0,0%,97%)] flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cleannet-blue/10">
                <BedDouble className="w-6 h-6 text-cleannet-blue" />
              </div>
              Nettoyage de matelas
            </DialogTitle>
            <DialogDescription className="text-[hsl(0,0%,97%,0.7)] text-base mt-4">
              {matelasDetails.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-4">Tarifs par taille</h4>
            <div className="space-y-3">
              {matelasDetails.pricing.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,100%,0.1)]"
                >
                  <span className="text-[hsl(0,0%,97%,0.9)]">{item.label}</span>
                  <span className="text-xl font-bold text-cleannet-green">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              variant="cta"
              size="lg"
              className="flex-1"
              asChild
              onClick={() => setShowMatelasModal(false)}
            >
              <Link to="/contact">
                Demander un devis
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
