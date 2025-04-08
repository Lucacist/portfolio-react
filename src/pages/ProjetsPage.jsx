import React from 'react';
import Particles from '../components/Particles';

const ProjetsPage = () => {
  // Fonction pour générer les chemins d'images en fonction de l'environnement
  const getImagePath = (imageName) => {
    return `${import.meta.env.DEV ? '' : '/portfolio-react'}/images/${imageName}`;
  };

  return (
    <div className="min-h-screen bg-[var(--couleur-background)] text-[var(--couleur-texte)] p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-glow">Mes Projets</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projet 1 */}
          <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6">
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={40}
                particleSpread={7}
                speed={0.09}
                particleBaseSize={70}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Portfolio React</h2>
              <img 
                src={getImagePath('pc-projet.png')} 
                alt="Portfolio React" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="mb-4">Site portfolio moderne développé avec React et Tailwind CSS, avec des animations fluides et un design responsive.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Vite</span>
              </div>
              <a 
                href="https://github.com/Lucacist/portfolio-react" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-full px-4 py-2 text-sm font-medium hover:bg-opacity-80 transition-all"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
          
          {/* Projet 2 */}
          <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6">
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={40}
                particleSpread={7}
                speed={0.09}
                particleBaseSize={70}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Application Web E-commerce</h2>
              <div className="w-full h-48 bg-gray-700 rounded-xl mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="mb-4">Plateforme e-commerce complète avec panier d'achat, paiement en ligne et gestion des commandes.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">MongoDB</span>
              </div>
              <button 
                className="inline-block bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-full px-4 py-2 text-sm font-medium opacity-50 cursor-not-allowed"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
          
          {/* Projet 3 */}
          <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6">
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={40}
                particleSpread={7}
                speed={0.09}
                particleBaseSize={70}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Application Mobile</h2>
              <div className="w-full h-48 bg-gray-700 rounded-xl mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="mb-4">Application mobile cross-platform développée avec React Native pour iOS et Android.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Redux</span>
              </div>
              <button 
                className="inline-block bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-full px-4 py-2 text-sm font-medium opacity-50 cursor-not-allowed"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
          
          {/* Projet 4 */}
          <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6">
            <div className="absolute inset-0 z-0 w-full h-full">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={40}
                particleSpread={7}
                speed={0.09}
                particleBaseSize={70}
                moveParticlesOnHover={true}
                alphaParticles={true}
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Dashboard Analytics</h2>
              <div className="w-full h-48 bg-gray-700 rounded-xl mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="mb-4">Dashboard d'analyse de données avec visualisations interactives et rapports en temps réel.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">D3.js</span>
                <span className="px-3 py-1 bg-blue-500 bg-opacity-30 rounded-full text-sm">Express</span>
              </div>
              <button 
                className="inline-block bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-full px-4 py-2 text-sm font-medium opacity-50 cursor-not-allowed"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="/portfolio-react/" className="inline-block bg-[var(--couleur-container)] border border-[var(--couleur-border)] rounded-full px-6 py-3 text-lg font-medium hover:bg-opacity-80 transition-all">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetsPage;
