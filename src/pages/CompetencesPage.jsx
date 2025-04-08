import React from 'react';
import Particles from '../components/Particles';
import TechScroller from '../components/TechScroller';

// Style spécifique pour réduire la taille des SVG dans la page des compétences
const competencesStyles = `
  .competences-page .tech-icon {
    width: 80px;
    height: 80px;
    margin: 0 12px;
  }
  
  .competences-page .tech-icon img {
    width: 80%;
    height: 80%;
  }
`;

const CompetencesPage = () => {
  return (
    <div className="min-h-screen bg-[var(--couleur-background)] text-[var(--couleur-texte)] p-4 sm:p-6 md:p-8">
      <style>{competencesStyles}</style>
      <div className="container mx-auto competences-page">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Mes Compétences</h1>
        
        <div className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-0 z-0 w-full h-full">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={80}
              particleSpread={7}
              speed={0.09}
              particleBaseSize={70}
              moveParticlesOnHover={true}
              alphaParticles={true}
            />
          </div>
          
          <div className="relative z-10">
            <div className="mb-12">
              <div className="w-[80%] m-auto overflow-hidden">
                <TechScroller />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--couleur-container)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Front-End Development</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Création d'interfaces utilisateur modernes et réactives</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Sites web statiques et dynamiques</li>
                  <li className='text-left'>Frameworks utilisés (React, Vue.js, etc.)</li>
                  <li className='text-left'>Responsive Design et compatibilité mobile</li>
                  <li className='text-left'>Animation et interactivité (JavaScript, CSS)</li>
                  <li className='text-left'>Optimisation des performances</li>
                </ul>
              </div>
              
              <div className="bg-[var(--couleur-container)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Back-End Development</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Architecture serveur et gestion des données</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Gestion des bases de données (SQL, NoSQL)</li>
                  <li className='text-left'>Frameworks côté serveur (Node.js)</li>
                  <li className='text-left'>Sécurité et authentification</li>
                  <li className='text-left'>API RESTful et GraphQL</li>
                  <li className='text-left'>Architecture microservices</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[var(--couleur-container)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Design</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Conception visuelle et expérience utilisateur</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Création graphique (logos, posters, bannières)</li>
                  <li className='text-left'>Prototypes et maquettes (Figma, Adobe XD)</li>
                  <li className='text-left'>Animation graphique (animations SVG ou CSS)</li>
                  <li className='text-left'>Modélisation 3D</li>
                  <li className='text-left'>Principes d'UX/UI</li>
                </ul>
              </div>
              
              <div className="bg-[var(--couleur-container)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Systèmes embarqués</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Développement pour hardware spécialisé</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Projets sur microcontrôleurs (Arduino, Raspberry Pi)</li>
                  <li className='text-left'>Optimisation des performances et gestion de la mémoire</li>
                  <li className='text-left'>Projets temps réel (Systèmes de contrôle, capteurs)</li>
                  <li className='text-left'>Programmation bas niveau (C, C++)</li>
                  <li className='text-left'>IoT (Internet des Objets)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-[var(--couleur-container)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Gestion de Projets et Méthodes</h2>
              <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Organisation et collaboration efficace</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Gestion de versions (Git/GitHub)</li>
                  <li className='text-left'>Méthodologies Agile (Scrum, Kanban)</li>
                  <li className='text-left'>Documentation technique</li>
                </ul>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Travail en Équipe</li>
                  <li className='text-left'>Communication client</li>
                  <li className='text-left'>Revue de code</li>
                </ul>
                <ul className="list-disc pl-4 space-y-2">
                  <li className='text-left'>Planification et Suivi</li>
                  <li className='text-left'>Tests et assurance qualité</li>
                  <li className='text-left'>Déploiement continu (CI/CD)</li>
                </ul>
              </div>
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

export default CompetencesPage;
