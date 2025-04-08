import React from 'react';
import '../styles/TechScroller.css';

const TechScroller = () => {
  // Utilisation d'une fonction pour obtenir le chemin correct en fonction de l'environnement
  const getIconPath = (iconName) => {
    // En développement, utilisez le chemin relatif sans le préfixe
    // En production, le préfixe sera automatiquement ajouté grâce à la configuration base dans vite.config.js
    return `${import.meta.env.DEV ? '' : '/portfolio-react'}/svg/${iconName}`;
  };

  // Tableau des noms des icônes SVG
  const techIcons = [
    { name: 'Adobe_XD.svg', alt: 'Adobe XD' },
    { name: 'Arduino.svg', alt: 'Arduino' },
    { name: 'C++.svg', alt: 'C++' },
    { name: 'C.svg', alt: 'C' },
    { name: 'CSS.svg', alt: 'CSS' },
    { name: 'Figma.svg', alt: 'Figma' },
    { name: 'HTML.svg', alt: 'HTML' },
    { name: 'Inkscape.svg', alt: 'Inkscape' },
    { name: 'MySQL.svg', alt: 'MySQL' },
    { name: 'React.svg', alt: 'React' },
    { name: 'Vue.js.svg', alt: 'Vue.js' },
    { name: 'bash.svg', alt: 'Bash' },
    { name: 'blender.svg', alt: 'Blender' },
    { name: 'github.svg', alt: 'GitHub' },
    { name: 'javascript.svg', alt: 'JavaScript' },
    { name: 'nodejs.svg', alt: 'Node.js' },
    { name: 'notion.svg', alt: 'Notion' },
    { name: 'php.svg', alt: 'PHP' },
    { name: 'python.svg', alt: 'Python' }
  ];

  // Créer un effet de défilement avec CSS au lieu d'utiliser le composant ImageSlider
  return (
    <div className="tech-scroller">
      <div className="scroller-container">
        <div className="scroller-track">
          {/* Premier groupe d'icônes */}
          {techIcons.map((icon, index) => (
            <div key={`icon-1-${index}`} className="tech-icon">
              <img src={getIconPath(icon.name)} alt={icon.alt} />
            </div>
          ))}
          
          {/* Deuxième groupe d'icônes (pour une boucle continue) */}
          {techIcons.map((icon, index) => (
            <div key={`icon-2-${index}`} className="tech-icon">
              <img src={getIconPath(icon.name)} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechScroller;
