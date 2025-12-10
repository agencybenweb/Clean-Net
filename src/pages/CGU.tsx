import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CGU = () => {
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
              Conditions Générales d'Utilisation
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <p className="text-lg">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web de Clean&Net. 
                  En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objet</h2>
                <p>
                  Clean&Net est une entreprise spécialisée dans le nettoyage professionnel de canapés, matelas, moquettes, 
                  bureaux, maisons et appartements, basée à Clermont-Ferrand (63100).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Accès au site</h2>
                <p>
                  L'accès au site est gratuit. Tous les frais supportés par l'utilisateur pour accéder au service 
                  (matériel informatique, connexion Internet, etc.) sont à sa charge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Services proposés</h2>
                <p>Clean&Net propose les services suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nettoyage de canapés</li>
                  <li>Nettoyage de matelas</li>
                  <li>Nettoyage de moquettes</li>
                  <li>Entretien de bureaux</li>
                  <li>Nettoyage de maisons et appartements</li>
                  <li>Nettoyage fin de chantier</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Devis et commande</h2>
                <p>
                  Les devis sont gratuits et sans engagement. Toute demande de devis via le formulaire de contact 
                  ne constitue pas une commande ferme et définitive.
                </p>
                <p>
                  La commande devient ferme et définitive après acceptation écrite du devis par le client et confirmation 
                  de Clean&Net.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Tarifs</h2>
                <p>
                  Les tarifs indiqués sur le site sont donnés à titre indicatif et peuvent être modifiés à tout moment. 
                  Les prix sont exprimés en euros TTC (Toutes Taxes Comprises).
                </p>
                <p>
                  Un devis personnalisé sera établi pour chaque prestation, tenant compte des spécificités de l'intervention.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Zone d'intervention</h2>
                <p>
                  Clean&Net intervient principalement à Clermont-Ferrand (63100) et dans toute l'agglomération. 
                  Pour les interventions en dehors de cette zone, des frais de déplacement peuvent s'appliquer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Horaires</h2>
                <p>
                  Les interventions sont effectuées du lundi au samedi, de 8h à 19h, sauf cas particuliers convenus 
                  avec le client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Responsabilité</h2>
                <p>
                  Clean&Net s'engage à effectuer les prestations avec le plus grand soin et en utilisant des produits 
                  professionnels adaptés. Cependant, Clean&Net ne saurait être tenu responsable :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Des dommages résultant d'une utilisation anormale ou d'une négligence du client</li>
                  <li>Des dommages causés par des matériaux ou textiles déjà endommagés avant l'intervention</li>
                  <li>Des retards dus à des circonstances indépendantes de sa volonté</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Propriété intellectuelle</h2>
                <p>
                  L'ensemble du contenu du site (textes, images, logos, etc.) est la propriété exclusive de Clean&Net 
                  et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Données personnelles</h2>
                <p>
                  Les données personnelles collectées via le formulaire de contact sont utilisées uniquement pour 
                  répondre aux demandes de devis et pour la gestion de la relation client. 
                  Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-cleannet-green hover:underline">Politique de Confidentialité</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Droit applicable et juridiction</h2>
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                  le litige sera porté devant les tribunaux compétents de Clermont-Ferrand.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact</h2>
                <p>
                  Pour toute question concernant ces CGU, vous pouvez nous contacter :
                </p>
                <p className="mt-2">
                  <strong>Email :</strong> <a href="mailto:clean63net@gmail.com" className="text-cleannet-green hover:underline">clean63net@gmail.com</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33752471618" className="text-cleannet-green hover:underline">07 52 47 16 18</a><br />
                  <strong>Adresse :</strong> Clermont-Ferrand, 63100
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

export default CGU;

