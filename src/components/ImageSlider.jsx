import React, { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Calculer la largeur totale des images
  const totalWidth = images.length * 150; // 150px par image

  // Réinitialiser la position quand toutes les images sont sorties de l'écran
  useEffect(() => {
    if (Math.abs(position) > totalWidth && totalWidth > 0) {
      setPosition(window.innerWidth);
    }
  }, [position, totalWidth]);

  // Si aucune image n'est disponible
  if (!images || images.length === 0) {
    return <div className="text-[var(--couleur-texte)] text-center">Chargement des technologies...</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className="absolute flex items-center h-full" 
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Premier ensemble d'images */}
        {images.map((image, index) => (
          <div key={`first-${index}`} className="mx-4 flex-shrink-0" style={{ width: '120px', height: '120px' }}>
            <img 
              src={image} 
              alt={`Tech ${index}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
        
        {/* Deuxième ensemble d'images pour une boucle continue */}
        {images.map((image, index) => (
          <div key={`second-${index}`} className="mx-4 flex-shrink-0" style={{ width: '120px', height: '120px' }}>
            <img 
              src={image} 
              alt={`Tech ${index}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
