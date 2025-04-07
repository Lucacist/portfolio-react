import React from 'react';
import '../styles/TechScroller.css';
import ImageSlider from './ImageSlider';

// Import direct des SVG
import adobeXD from '../assets/svg/Adobe_XD.svg';
import arduino from '../assets/svg/Arduino.svg';
import cPlusPlus from '../assets/svg/C++.svg';
import c from '../assets/svg/C.svg';
import css from '../assets/svg/CSS.svg';
import figma from '../assets/svg/Figma.svg';
import html from '../assets/svg/HTML.svg';
import inkscape from '../assets/svg/Inkscape.svg';
import mysql from '../assets/svg/MySQL.svg';
import react from '../assets/svg/React.svg';
import vueJs from '../assets/svg/Vue.js.svg';
import bash from '../assets/svg/bash.svg';
import blender from '../assets/svg/blender.svg';
import github from '../assets/svg/github.svg';
import javascript from '../assets/svg/javascript.svg';
import nodejs from '../assets/svg/nodejs.svg';
import notion from '../assets/svg/notion.svg';
import php from '../assets/svg/php.svg';
import python from '../assets/svg/python.svg';

const TechScroller = () => {
  // Tableau des images SVG importées
  const techIcons = [
    { src: adobeXD, alt: 'Adobe XD' },
    { src: arduino, alt: 'Arduino' },
    { src: cPlusPlus, alt: 'C++' },
    { src: c, alt: 'C' },
    { src: css, alt: 'CSS' },
    { src: figma, alt: 'Figma' },
    { src: html, alt: 'HTML' },
    { src: inkscape, alt: 'Inkscape' },
    { src: mysql, alt: 'MySQL' },
    { src: react, alt: 'React' },
    { src: vueJs, alt: 'Vue.js' },
    { src: bash, alt: 'Bash' },
    { src: blender, alt: 'Blender' },
    { src: github, alt: 'GitHub' },
    { src: javascript, alt: 'JavaScript' },
    { src: nodejs, alt: 'Node.js' },
    { src: notion, alt: 'Notion' },
    { src: php, alt: 'PHP' },
    { src: python, alt: 'Python' }
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
