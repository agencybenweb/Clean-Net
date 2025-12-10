import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const anchor = href.substring(1); // Remove the #
    
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer vers / puis scroller
      navigate('/', { state: { scrollTo: anchor } });
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.getElementById(anchor);
      if (element) {
        // Petit délai pour s'assurer que le DOM est prêt
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  };

  return (
    <footer className="bg-[hsl(0,0%,3%)] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,5%)] to-transparent opacity-50" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-[hsl(102,81%,60%)]">Clean</span>
              <span className="text-2xl font-bold text-[hsl(204,100%,39%)]">&</span>
              <span className="text-2xl font-bold text-[hsl(0,0%,97%)]">Net</span>
            </div>
            <p className="text-[hsl(0,0%,97%,0.6)] mb-6 max-w-md">
              Nettoyage professionnel de canapés, matelas, moquettes et plus encore. 
              Basés à Clermont-Ferrand, nous redonnons vie à vos intérieurs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/cleannet63100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[hsl(0,0%,100%,0.1)] flex items-center justify-center text-[hsl(0,0%,97%,0.7)] hover:bg-[hsl(102,81%,60%)] hover:text-[hsl(0,0%,5%)] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[hsl(0,0%,100%,0.1)] flex items-center justify-center text-[hsl(0,0%,97%,0.7)] hover:bg-[hsl(204,100%,39%)] hover:text-[hsl(0,0%,97%)] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[hsl(0,0%,100%,0.1)] flex items-center justify-center text-[hsl(0,0%,97%,0.7)] hover:bg-[hsl(204,100%,39%)] hover:text-[hsl(0,0%,97%)] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-[hsl(0,0%,97%,0.6)] hover:text-[hsl(102,81%,60%)] transition-colors cursor-pointer"
                >
                  Nettoyage de canapé
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-[hsl(0,0%,97%,0.6)] hover:text-[hsl(102,81%,60%)] transition-colors cursor-pointer"
                >
                  Nettoyage de matelas
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-[hsl(0,0%,97%,0.6)] hover:text-[hsl(102,81%,60%)] transition-colors cursor-pointer"
                >
                  Nettoyage de moquette
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-[hsl(0,0%,97%,0.6)] hover:text-[hsl(102,81%,60%)] transition-colors cursor-pointer"
                >
                  Entretien de bureaux
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[hsl(0,0%,97%)] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[hsl(0,0%,97%,0.6)]">
                <Phone size={16} className="text-[hsl(102,81%,60%)]" />
                <a href="tel:+33752471618" className="hover:text-[hsl(102,81%,60%)] transition-colors">
                  07 52 47 16 18
                </a>
              </li>
              <li className="flex items-center gap-2 text-[hsl(0,0%,97%,0.6)]">
                <Mail size={16} className="text-[hsl(204,100%,39%)]" />
                <a href="mailto:clean63net@gmail.com" className="hover:text-[hsl(102,81%,60%)] transition-colors">
                  clean63net@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[hsl(0,0%,97%,0.6)]">
                <MapPin size={16} className="text-[hsl(102,81%,60%)] mt-0.5" />
                <span>Clermont-Ferrand, 63100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[hsl(0,0%,100%,0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[hsl(0,0%,97%,0.5)]">
              © {currentYear} Clean&Net. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="text-sm text-[hsl(0,0%,97%,0.5)] hover:text-[hsl(0,0%,97%,0.8)] transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-sm text-[hsl(0,0%,97%,0.5)] hover:text-[hsl(0,0%,97%,0.8)] transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgu" className="text-sm text-[hsl(0,0%,97%,0.5)] hover:text-[hsl(0,0%,97%,0.8)] transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
