import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-[hsl(0,0%,5%)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(102,81%,60%,0.1)] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(204,100%,39%,0.1)] rounded-full blur-3xl" />

      <div className="container-tight relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[hsl(102,81%,60%)] bg-[hsl(102,81%,60%,0.1)] rounded-full border border-[hsl(102,81%,60%,0.2)]">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0,0%,97%)] mb-6">
            Demandez votre devis gratuit
          </h2>
          <p className="text-lg text-[hsl(0,0%,97%,0.6)] max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé. Réponse sous 24h garantie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-xl border border-[hsl(0,0%,100%,0.1)] bg-[hsl(0,0%,10%,0.7)] rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[hsl(0,0%,97%)] mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="bg-[hsl(0,0%,15%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)] placeholder:text-[hsl(0,0%,97%,0.4)] rounded-xl h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[hsl(0,0%,97%)] mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-[hsl(0,0%,15%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)] placeholder:text-[hsl(0,0%,97%,0.4)] rounded-xl h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[hsl(0,0%,97%)] mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="07 52 47 16 18"
                    className="bg-[hsl(0,0%,15%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)] placeholder:text-[hsl(0,0%,97%,0.4)] rounded-xl h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[hsl(0,0%,97%)] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin..."
                    required
                    rows={4}
                    className="bg-[hsl(0,0%,15%)] border-[hsl(0,0%,100%,0.1)] text-[hsl(0,0%,97%)] placeholder:text-[hsl(0,0%,97%,0.4)] rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  <Send className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(102,81%,60%,0.1)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[hsl(102,81%,60%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-1">Téléphone</h3>
                  <a href="tel:+33752471618" className="text-[hsl(0,0%,97%,0.7)] hover:text-[hsl(102,81%,60%)] transition-colors">
                    07 52 47 16 18
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(204,100%,39%,0.1)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[hsl(204,100%,39%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/33752471618" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[hsl(0,0%,97%,0.7)] hover:text-[hsl(102,81%,60%)] transition-colors"
                  >
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(102,81%,60%,0.1)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[hsl(102,81%,60%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-1">Email</h3>
                  <a href="mailto:clean63net@gmail.com" className="text-[hsl(0,0%,97%,0.7)] hover:text-[hsl(102,81%,60%)] transition-colors">
                    clean63net@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(204,100%,39%,0.1)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[hsl(204,100%,39%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-1">Zone d'intervention</h3>
                  <p className="text-[hsl(0,0%,97%,0.7)]">
                    Clermont-Ferrand (63100)<br />
                    et toute l'agglomération
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 backdrop-blur-xl border border-[hsl(0,0%,100%,0.1)] bg-[hsl(0,0%,10%,0.7)] rounded-2xl">
              <p className="text-[hsl(0,0%,97%,0.7)] text-sm">
                <span className="font-semibold text-[hsl(102,81%,60%)]">Horaires :</span> Du lundi au samedi, 8h - 19h
              </p>
              <p className="text-[hsl(0,0%,97%,0.7)] text-sm mt-2">
                <span className="font-semibold text-[hsl(204,100%,39%)]">Réponse garantie</span> sous 24h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
