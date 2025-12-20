import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Mentions Légales
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations légales</h2>
                <p>
                  Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
                  il est précisé aux utilisateurs du site Clean&Net l'identité des différents intervenants dans le cadre de sa 
                  réalisation et de son suivi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Éditeur du site</h2>
                <p>
                  <strong>Raison sociale :</strong> Clean&Net<br />
                  <strong>Adresse :</strong> Clermont-Ferrand, 63100<br />
                  <strong>Téléphone :</strong> <a href="tel:+33752471618" className="text-cleannet-green hover:underline">07 52 47 16 18</a><br />
                  <strong>Email :</strong> <a href="mailto:clean63net@gmail.com" className="text-cleannet-green hover:underline">clean63net@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hébergement</h2>
                <p>
                  Le site est hébergé par un prestataire externe. Pour toute question concernant l'hébergement, 
                  veuillez nous contacter à l'adresse email indiquée ci-dessus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriété intellectuelle</h2>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse de l'éditeur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Protection des données personnelles</h2>
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, adressez-vous à : <a href="mailto:clean63net@gmail.com" className="text-cleannet-green hover:underline">clean63net@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
                <p>
                  Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. 
                  Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                  le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </section>

              <section>
                <p className="text-sm text-muted-foreground mt-12">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;





