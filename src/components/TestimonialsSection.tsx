import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Clermont-Ferrand",
    rating: 5,
    text: "Mon canapé avait 10 ans de taches... Aujourd'hui il est comme neuf ! Service impeccable et équipe très professionnelle. Je recommande vivement Clean&Net.",
  },
  {
    name: "Thomas D.",
    location: "Chamalières",
    rating: 5,
    text: "Intervention rapide pour un nettoyage de moquette dans nos bureaux. Résultat bluffant, les couleurs sont revenues. Merci !",
  },
  {
    name: "Sophie M.",
    location: "Aubière",
    rating: 5,
    text: "Excellent rapport qualité-prix pour le nettoyage de notre matelas. L'équipe était ponctuelle et très soigneuse. Nous referons appel à eux.",
  },
  {
    name: "Pierre R.",
    location: "Cournon-d'Auvergne",
    rating: 5,
    text: "Nettoyage fin de chantier de notre appartement neuf : impeccable ! Tout était parfait pour notre emménagement. Très satisfait.",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(102,81%,60%,0.05)] rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[hsl(204,100%,39%)] bg-[hsl(204,100%,39%,0.1)] rounded-full">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits à Clermont-Ferrand et ses environs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="backdrop-blur-xl border border-[hsl(0,0%,100%,0.3)] bg-[hsl(0,0%,100%,0.7)] rounded-3xl p-8 relative hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[hsl(102,81%,60%,0.3)]" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(45,93%,47%)] text-[hsl(45,93%,47%)]" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(102,81%,60%)] to-[hsl(204,100%,39%)] flex items-center justify-center text-[hsl(0,0%,97%)] font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
