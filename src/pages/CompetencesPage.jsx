import React from 'react';
import Particles from '../components/Particles';
import TechScroller from '../components/TechScroller';

const CompetencesPage = () => {
  return (
    <div className="min-h-screen bg-[var(--couleur-background)] text-[var(--couleur-texte)] p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-glow">Mes Compétences</h1>
        
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6 md:p-8">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Technologies</h2>
              <div className="w-full overflow-hidden">
                <TechScroller />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--couleur-background)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Front-End Development</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Création d'interfaces utilisateur modernes et réactives</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sites web statiques et dynamiques</li>
                  <li>Frameworks utilisés (React, Vue.js, etc.)</li>
                  <li>Responsive Design et compatibilité mobile</li>
                  <li>Animation et interactivité (JavaScript, CSS)</li>
                  <li>Optimisation des performances</li>
                </ul>
              </div>
              
              <div className="bg-[var(--couleur-background)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Back-End Development</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Architecture serveur et gestion des données</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestion des bases de données (SQL, NoSQL)</li>
                  <li>Frameworks côté serveur (Node.js)</li>
                  <li>Sécurité et authentification</li>
                  <li>API RESTful et GraphQL</li>
                  <li>Architecture microservices</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[var(--couleur-background)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Design</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Conception visuelle et expérience utilisateur</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Création graphique (logos, posters, bannières)</li>
                  <li>Prototypes et maquettes (Figma, Adobe XD)</li>
                  <li>Animation graphique (animations SVG ou CSS)</li>
                  <li>Modélisation 3D</li>
                  <li>Principes d'UX/UI</li>
                </ul>
              </div>
              
              <div className="bg-[var(--couleur-background)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Systèmes embarqués</h2>
                <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Développement pour hardware spécialisé</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projets sur microcontrôleurs (Arduino, Raspberry Pi)</li>
                  <li>Optimisation des performances et gestion de la mémoire</li>
                  <li>Projets temps réel (Systèmes de contrôle, capteurs)</li>
                  <li>Programmation bas niveau (C, C++)</li>
                  <li>IoT (Internet des Objets)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-[var(--couleur-background)] p-6 rounded-xl border border-[var(--couleur-border)] hover:shadow-lg transition-all">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-glow">Gestion de Projets et Méthodes</h2>
              <p className="text-lg mb-4 text-[var(--couleur-texte-secondaire)]">Organisation et collaboration efficace</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestion de versions (Git/GitHub)</li>
                  <li>Méthodologies Agile (Scrum, Kanban)</li>
                  <li>Documentation technique</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Travail en Équipe</li>
                  <li>Communication client</li>
                  <li>Revue de code</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Planification et Suivi</li>
                  <li>Tests et assurance qualité</li>
                  <li>Déploiement continu (CI/CD)</li>
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
