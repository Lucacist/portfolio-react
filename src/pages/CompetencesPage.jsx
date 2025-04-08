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
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Développement Frontend</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Vue.js</li>
                  <li>Tailwind CSS, Bootstrap</li>
                  <li>Responsive Design</li>
                  <li>Animation et transitions</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Développement Backend</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Node.js, Express</li>
                  <li>PHP, Laravel</li>
                  <li>API RESTful</li>
                  <li>Bases de données SQL et NoSQL</li>
                  <li>Authentication et sécurité</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Autres compétences</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Git, GitHub</li>
                <li>Méthodologies Agile</li>
                <li>Déploiement et CI/CD</li>
                <li>Tests et débogage</li>
                <li>UI/UX Design</li>
              </ul>
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
