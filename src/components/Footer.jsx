import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Luca</h3>
            <p className="text-gray-400 mb-4">
              Développeur web passionné par la création d'expériences web modernes et interactives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-white transition-colors">À propos</a>
              </li>
              <li>
                <a href="#competences" className="text-gray-400 hover:text-white transition-colors">Compétences</a>
              </li>
              <li>
                <a href="#projets" className="text-gray-400 hover:text-white transition-colors">Projets</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@luca-portfolio.com" className="hover:text-white transition-colors">
                  contact@luca-portfolio.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Téléphone:</span>
                <a href="tel:+33612345678" className="hover:text-white transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Adresse:</span>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            {currentYear} Luca. Tous droits réservés. Créé avec 
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" />
            et React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
