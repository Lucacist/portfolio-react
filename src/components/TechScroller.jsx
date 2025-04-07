import React from 'react';
import '../styles/TechScroller.css';
import ImageSlider from './ImageSlider';

const TechScroller = () => {
  // Tableau des chemins vers les images SVG dans le dossier public
  const techIcons = [
    { src: '/portfolio-react/svg/Adobe_XD.svg', alt: 'Adobe XD' },
    { src: '/portfolio-react/svg/Arduino.svg', alt: 'Arduino' },
    { src: '/portfolio-react/svg/C++.svg', alt: 'C++' },
    { src: '/portfolio-react/svg/C.svg', alt: 'C' },
    { src: '/portfolio-react/svg/CSS.svg', alt: 'CSS' },
    { src: '/portfolio-react/svg/Figma.svg', alt: 'Figma' },
    { src: '/portfolio-react/svg/HTML.svg', alt: 'HTML' },
    { src: '/portfolio-react/svg/Inkscape.svg', alt: 'Inkscape' },
    { src: '/portfolio-react/svg/MySQL.svg', alt: 'MySQL' },
    { src: '/portfolio-react/svg/React.svg', alt: 'React' },
    { src: '/portfolio-react/svg/Vue.js.svg', alt: 'Vue.js' },
    { src: '/portfolio-react/svg/bash.svg', alt: 'Bash' },
    { src: '/portfolio-react/svg/blender.svg', alt: 'Blender' },
    { src: '/portfolio-react/svg/github.svg', alt: 'GitHub' },
    { src: '/portfolio-react/svg/javascript.svg', alt: 'JavaScript' },
    { src: '/portfolio-react/svg/nodejs.svg', alt: 'Node.js' },
    { src: '/portfolio-react/svg/notion.svg', alt: 'Notion' },
    { src: '/portfolio-react/svg/php.svg', alt: 'PHP' },
    { src: '/portfolio-react/svg/python.svg', alt: 'Python' }
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
