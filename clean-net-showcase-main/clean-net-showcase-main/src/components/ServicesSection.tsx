import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sofa, BedDouble, Layers, Building2, Home, HardHat } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Nettoyage de canapé",
    description: "Élimination des taches, odeurs et allergènes pour un canapé comme neuf",
    color: "cleannet-green",
  },
  {
    icon: BedDouble,
    title: "Nettoyage de matelas",
    description: "Désinfection en profondeur pour un sommeil sain et réparateur",
    color: "cleannet-blue",
  },
  {
    icon: Layers,
    title: "Nettoyage de moquette",
    description: "Traitement professionnel pour raviver couleurs et textures",
    color: "cleannet-green",
  },
  {
    icon: Building2,
    title: "Entretien de bureaux",
    description: "Solutions sur mesure pour un environnement de travail impeccable",
    color: "cleannet-blue",
  },
  {
    icon: Home,
    title: "Maison & Appartement",
    description: "Nettoyage complet de votre habitat du sol au plafond",
    color: "cleannet-green",
  },
  {
    icon: HardHat,
    title: "Fin de chantier",
    description: "Remise en état après travaux pour un espace prêt à vivre",
    color: "cleannet-blue",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group glass-dark rounded-3xl p-8 hover-lift cursor-pointer"
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
              <h3 className="text-xl font-semibold text-dark-foreground mb-3 group-hover:text-cleannet-green transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
