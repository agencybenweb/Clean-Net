import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sofa, BedDouble, Layers, Building2, Home, HardHat, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Euro, Hand } from "lucide-react";

interface ServiceDetail {
  description: string;
  pricing: Array<{ label: string; price: string; originalPrice?: string }>;
}

const services = [
  {
    icon: Sofa,
    title: "Nettoyage de canapé",
    description: "Élimination des taches, odeurs et allergènes pour un canapé comme neuf",
    color: "cleannet-green",
    details: {
      description: "Nettoyage professionnel de canapé en tissu à domicile par injection / extraction. Élimination des taches, poussières, acariens et mauvaises odeurs, sans abîmer les fibres. Formule anti-acariens incluse.",
      pricing: [
        { label: "Fauteuil", price: "50 €", originalPrice: "60 €" },
        { label: "Canapé 2 ou 3 places", price: "70 €", originalPrice: "75 €" },
        { label: "Canapé 4 ou 5 places", price: "80 €", originalPrice: "85 €" },
        { label: "Canapé en U", price: "90 €", originalPrice: "100 €" },
        { label: "Nettoyage Togo", price: "Sur devis" },
      ],
    } as ServiceDetail,
  },
  {
    icon: BedDouble,
    title: "Nettoyage de matelas",
    description: "Désinfection en profondeur pour un sommeil sain et réparateur",
    color: "cleannet-blue",
    details: {
      description: "Nettoyage en profondeur du matelas pour éliminer acariens, bactéries, taches et odeurs. Formule anti-acariens incluse pour un couchage plus sain.",
      pricing: [
        { label: "Matelas 1 place", price: "60 €" },
        { label: "Matelas 2 places (140)", price: "80 €" },
        { label: "Matelas 2 places (160)", price: "90 €" },
        { label: "Matelas 2 places (180)", price: "100 €" },
      ],
    } as ServiceDetail,
  },
  {
    icon: Layers,
    title: "Nettoyage de moquette",
    description: "Traitement professionnel pour raviver couleurs et textures",
    color: "cleannet-green",
    details: {
      description: "Nettoyage de moquette par injection / extraction pour particuliers et professionnels. Élimine saletés incrustées, poussières et allergènes.",
      pricing: [
        { label: "Tarif", price: "À partir de 6 € / m²" },
      ],
    } as ServiceDetail,
  },
  {
    icon: Home,
    title: "Nettoyage appartement / maison",
    description: "Nettoyage complet de votre habitat du sol au plafond",
    color: "cleannet-green",
    details: {
      description: "Nettoyage complet avant ou après déménagement, remise en état avant état des lieux, nettoyage ponctuel ou approfondi selon vos besoins.",
      pricing: [
        { label: "Tarif", price: "Sur devis" },
      ],
    } as ServiceDetail,
  },
  {
    icon: HardHat,
    title: "Nettoyage fin de chantier",
    description: "Remise en état après travaux pour un espace prêt à vivre",
    color: "cleannet-blue",
    details: {
      description: "Nettoyage après travaux ou rénovation pour éliminer poussières, gravats et résidus de chantier.",
      pricing: [
        { label: "Tarif", price: "Sur devis" },
      ],
    } as ServiceDetail,
  },
  {
    icon: Building2,
    title: "Entretien de bureaux & locaux",
    description: "Solutions sur mesure pour un environnement de travail impeccable",
    color: "cleannet-blue",
    details: {
      description: "Nettoyage régulier ou ponctuel de bureaux, commerces et locaux professionnels. Prestations adaptées aux besoins des entreprises.",
      pricing: [
        { label: "Tarif", price: "Sur devis" },
      ],
    } as ServiceDetail,
  },
  {
    icon: Sparkles,
    title: "Nettoyage terrasse & extérieurs",
    description: "Nettoyage de terrasses, balcons et sols extérieurs",
    color: "cleannet-green",
    details: {
      description: "Nettoyage de terrasses, balcons et sols extérieurs avec suppression des mousses, algues et traces de pollution.",
      pricing: [
        { label: "Tarif", price: "Sur devis" },
      ],
    } as ServiceDetail,
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cleannet-blue/10 rounded-full blur-3xl" />
      
      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-cleannet-green bg-cleannet-green/10 rounded-full border border-cleannet-green/20">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-foreground mb-6">
            Des solutions pour chaque besoin
          </h2>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Du particulier au professionnel, nous proposons une gamme complète 
            de services de nettoyage adaptés à vos besoins.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedService(service)}
              className="w-full md:w-[calc(50%-12px)] lg:w-[350px] group glass-dark rounded-3xl p-8 hover-lift cursor-pointer"
            >
              <div
                className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  service.color === "cleannet-green"
                    ? "bg-cleannet-green/10 group-hover:bg-cleannet-green/20"
                    : "bg-cleannet-blue/10 group-hover:bg-cleannet-blue/20"
                }`}
              >
                <service.icon
                  className={`w-8 h-8 transition-colors duration-300 ${
                    service.color === "cleannet-green"
                      ? "text-cleannet-green"
                      : "text-cleannet-blue"
                  }`}
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold text-dark-foreground group-hover:text-cleannet-green transition-colors">
                  {service.title}
                </h3>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Hand className="w-4 h-4 text-dark-foreground/40 group-hover:text-cleannet-green transition-colors" />
                </motion.div>
              </div>
              <p className="text-dark-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher les détails */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-[hsl(0,0%,10%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)]">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[hsl(0,0%,97%)] flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedService.color === "cleannet-green"
                        ? "bg-cleannet-green/10"
                        : "bg-cleannet-blue/10"
                    }`}
                  >
                    <selectedService.icon
                      className={`w-6 h-6 ${
                        selectedService.color === "cleannet-green"
                          ? "text-cleannet-green"
                          : "text-cleannet-blue"
                      }`}
                    />
                  </div>
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-[hsl(0,0%,97%,0.7)] text-base mt-4">
                  {selectedService.details.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-4">Tarifs</h4>
                <div className="space-y-3">
                  {selectedService.details.pricing.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl bg-[hsl(0,0%,15%)] border border-[hsl(0,0%,100%,0.1)]"
                    >
                      <span className="text-[hsl(0,0%,97%,0.9)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.originalPrice && (
                          <span className="text-lg text-red-500 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                        <span className="text-xl font-bold text-cleannet-green">{item.price}</span>
                      </div>
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
                  onClick={() => setSelectedService(null)}
                >
                  <Link to="/contact">
                    Demander un devis
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
