import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Leaf, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Qualité Premium",
    description: "Un nettoyage minutieux avec des équipements professionnels",
  },
  {
    icon: Leaf,
    title: "Écoresponsable",
    description: "Produits respectueux de l'environnement et de votre santé",
  },
  {
    icon: Clock,
    title: "Rapidité",
    description: "Intervention rapide et résultats immédiats",
  },
  {
    icon: Shield,
    title: "Garantie",
    description: "Satisfaction garantie sur toutes nos prestations",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="a-propos" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cleannet-green/5 to-transparent" />
      
      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-4 text-sm font-medium text-cleannet-blue bg-cleannet-blue/10 rounded-full"
            >
              À propos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Redonner vie à vos intérieurs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Clean&Net redonne vie à vos intérieurs grâce à un nettoyage professionnel, 
              minutieux, rapide et écoresponsable. Basés à Clermont-Ferrand, nous 
              intervenons chez les particuliers et les professionnels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-card/50 hover-lift"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cleannet-green/20 to-cleannet-blue/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-cleannet-green" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
