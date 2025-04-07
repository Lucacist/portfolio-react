import React from 'react';
import '../styles/TechScroller.css';
import ImageSlider from './ImageSlider';

const TechScroller = () => {
  // Tableau des chemins vers les images SVG dans le dossier public
  const techIcons = [
    { src: '/svg/Adobe_XD.svg', alt: 'Adobe XD' },
    { src: '/svg/Arduino.svg', alt: 'Arduino' },
    { src: '/svg/C++.svg', alt: 'C++' },
    { src: '/svg/C.svg', alt: 'C' },
    { src: '/svg/CSS.svg', alt: 'CSS' },
    { src: '/svg/Figma.svg', alt: 'Figma' },
    { src: '/svg/HTML.svg', alt: 'HTML' },
    { src: '/svg/Inkscape.svg', alt: 'Inkscape' },
    { src: '/svg/MySQL.svg', alt: 'MySQL' },
    { src: '/svg/React.svg', alt: 'React' },
    { src: '/svg/Vue.js.svg', alt: 'Vue.js' },
    { src: '/svg/bash.svg', alt: 'Bash' },
    { src: '/svg/blender.svg', alt: 'Blender' },
    { src: '/svg/github.svg', alt: 'GitHub' },
    { src: '/svg/javascript.svg', alt: 'JavaScript' },
    { src: '/svg/nodejs.svg', alt: 'Node.js' },
    { src: '/svg/notion.svg', alt: 'Notion' },
    { src: '/svg/php.svg', alt: 'PHP' },
    { src: '/svg/python.svg', alt: 'Python' }
  ];

  // Extraire seulement les chemins des images pour le composant ImageSlider
  const imagePaths = techIcons.map(icon => icon.src);

  return (
    <div className="tech-scroller">
      <div className="scroller-container">
        <ImageSlider images={imagePaths} />
      </div>
    </div>
  );
};

export default TechScroller;
