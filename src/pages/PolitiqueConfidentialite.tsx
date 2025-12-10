import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PolitiqueConfidentialite = () => {
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
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <p className="text-lg">
                  La présente politique de confidentialité décrit la manière dont Clean&Net collecte, utilise et protège 
                  les informations que vous nous fournissez lorsque vous utilisez notre site web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collecte des données</h2>
                <p>
                  Nous collectons les informations suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Message et demande de devis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Utilisation des données</h2>
                <p>
                  Les données collectées sont utilisées uniquement pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre à vos demandes de devis et questions</li>
                  <li>Vous contacter concernant nos services</li>
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Conservation des données</h2>
                <p>
                  Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles 
                  elles ont été collectées, conformément à la réglementation en vigueur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Partage des données</h2>
                <p>
                  Clean&Net ne vend, ne loue ni ne partage vos données personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lorsque la loi l'exige</li>
                  <li>Pour protéger nos droits et notre sécurité</li>
                  <li>Avec votre consentement explicite</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vos droits</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données</li>
                  <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                  <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Vous pouvez demander la récupération de vos données</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:clean63net@gmail.com" className="text-cleannet-green hover:underline">clean63net@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sécurité</h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
                  contre tout accès non autorisé, perte, destruction ou altération.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p>
                  Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur cette page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
                </p>
                <p className="mt-2">
                  <strong>Email :</strong> <a href="mailto:clean63net@gmail.com" className="text-cleannet-green hover:underline">clean63net@gmail.com</a><br />
                  <strong>Téléphone :</strong> <a href="tel:+33752471618" className="text-cleannet-green hover:underline">07 52 47 16 18</a>
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

export default PolitiqueConfidentialite;

